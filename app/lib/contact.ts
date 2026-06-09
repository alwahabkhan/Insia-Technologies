type ContactSectionPayload = {
  source: "section";
  firstName: string;
  lastName: string;
  businessEmail: string;
  phone: string;
  companyName?: string;
  interest?: string;
  message?: string;
  marketingConsent?: boolean;
};

type ContactModalPayload = {
  source: "modal";
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  companyUrl: string;
};

export type ContactPayload = ContactSectionPayload | ContactModalPayload;

type SubmitResult = { ok: true } | { ok: false; error: string };

export async function submitContact(payload: ContactPayload): Promise<SubmitResult> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = (await response.json().catch(() => null)) as
    | { ok?: boolean; error?: string }
    | null;

  if (!response.ok || !data?.ok) {
    return {
      ok: false,
      error: data?.error ?? "Something went wrong. Please try again.",
    };
  }

  return { ok: true };
}
