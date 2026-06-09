import { NextResponse } from "next/server";
import type { ContactPayload } from "@/app/lib/contact";
import {
  buildSheetPayload,
  submitToGoogleAppsScript,
} from "@/app/lib/google-apps-script";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isNonEmpty(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function validatePayload(body: ContactPayload): string | null {
  if (body.source === "section") {
    if (!isNonEmpty(body.firstName)) return "First name is required.";
    if (!isNonEmpty(body.lastName)) return "Last name is required.";
    if (!isNonEmpty(body.businessEmail)) return "Business email is required.";
    if (!EMAIL_PATTERN.test(body.businessEmail.trim())) {
      return "Enter a valid business email.";
    }
    if (!isNonEmpty(body.phone)) return "Phone number is required.";
    return null;
  }

  if (body.source === "modal") {
    if (!isNonEmpty(body.fullName)) return "Full name is required.";
    if (!isNonEmpty(body.email)) return "Email is required.";
    if (!EMAIL_PATTERN.test(body.email.trim())) return "Enter a valid email.";
    if (!isNonEmpty(body.phone)) return "Phone number is required.";
    if (!isNonEmpty(body.companyName)) return "Company name is required.";
    if (!isNonEmpty(body.companyUrl)) return "Company URL is required.";
    return null;
  }

  return "Invalid form source.";
}

export async function POST(request: Request) {
  const secret = process.env.GOOGLE_APPS_SCRIPT_SECRET;

  if (!secret) {
    return NextResponse.json(
      { ok: false, error: "Contact form is not configured." },
      { status: 500 },
    );
  }

  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const validationError = validatePayload(body);
  if (validationError) {
    return NextResponse.json({ ok: false, error: validationError }, { status: 400 });
  }

  const result = await submitToGoogleAppsScript(buildSheetPayload(body, secret));

  if (!result.ok) {
    return NextResponse.json(
      { ok: false, error: result.error ?? "Submission failed." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
