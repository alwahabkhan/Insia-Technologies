import type { ContactPayload } from "@/app/lib/contact";

export type GoogleAppsScriptSheetPayload = {
  secret: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  interest: string;
  message: string;
  marketingConsent: boolean;
};

type GoogleAppsScriptResponse = {
  ok: boolean;
  error?: string;
};

export function buildSheetPayload(
  body: ContactPayload,
  secret: string,
): GoogleAppsScriptSheetPayload {
  if (body.source === "section") {
    return {
      secret,
      firstName: body.firstName.trim(),
      lastName: body.lastName.trim(),
      email: body.businessEmail.trim(),
      phone: body.phone.trim(),
      company: body.companyName?.trim() ?? "",
      interest: body.interest?.trim() ?? "",
      message: body.message?.trim() ?? "",
      marketingConsent: body.marketingConsent === true,
    };
  }

  const nameParts = body.fullName.trim().split(/\s+/);
  const firstName = nameParts[0] ?? "";
  const lastName = nameParts.slice(1).join(" ");

  return {
    secret,
    firstName,
    lastName,
    email: body.email.trim(),
    phone: body.phone.trim(),
    company: body.companyName.trim(),
    interest: "",
    message: `Company URL: ${body.companyUrl.trim()}`,
    marketingConsent: false,
  };
}

export async function submitToGoogleAppsScript(
  payload: GoogleAppsScriptSheetPayload,
): Promise<GoogleAppsScriptResponse> {
  const url = process.env.GOOGLE_APPS_SCRIPT_URL;

  if (!url) {
    return { ok: false, error: "Contact form is not configured." };
  }

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    redirect: "follow",
  });

  const data = (await response.json().catch(() => null)) as GoogleAppsScriptResponse | null;

  if (!data?.ok) {
    return {
      ok: false,
      error: data?.error ?? "Failed to save your submission.",
    };
  }

  return { ok: true };
}
