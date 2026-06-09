"use client";

import { useEffect, useId, useState, type FormEvent, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { submitContact } from "@/app/lib/contact";

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
};

function Required({ children }: { children: ReactNode }) {
  return (
    <span>
      {children}
      <span className="text-red-500" aria-hidden>
        {" "}
        *
      </span>
    </span>
  );
}

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const titleId = useId();
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!open) {
      setSubmitState("idle");
      setErrorMessage("");
    }
  }, [open]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const result = await submitContact({
      source: "modal",
      fullName: String(formData.get("fullName") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      companyName: String(formData.get("companyName") ?? ""),
      companyUrl: String(formData.get("companyUrl") ?? ""),
    });

    if (result.ok) {
      setSubmitState("success");
      form.reset();
      window.setTimeout(() => onClose(), 1200);
      return;
    }

    setErrorMessage(result.error);
    setSubmitState("error");
  }

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      data-contact-modal
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        className="absolute inset-0 bg-slate-950/65 backdrop-blur-sm"
        aria-label="Close dialog"
        onClick={onClose}
      />
      <div
        className="relative z-10 max-h-[min(90vh,920px)] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-gradient-to-b from-cyan-50/95 via-sky-50/80 to-white px-6 pb-6 pt-8 sm:px-8">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 shadow-md ring-1 ring-slate-200/80 transition hover:bg-slate-50"
            aria-label="Close"
          >
            <span className="text-lg leading-none">×</span>
          </button>
          <h2
            id={titleId}
            className="bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-500 bg-clip-text pr-12 text-2xl font-bold text-transparent sm:text-3xl"
          >
            Get In Touch
          </h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            Let&apos;s discuss how we can help transform your business
          </p>
        </div>

        <form
          className="space-y-5 px-6 py-8 sm:px-8"
          onSubmit={handleSubmit}
          suppressHydrationWarning
        >
          <div>
            <label
              htmlFor="modal-full-name"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              <Required>Full Name</Required>
            </label>
            <input
              id="modal-full-name"
              name="fullName"
              type="text"
              autoComplete="name"
              required
              placeholder="John Doe"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 shadow-sm focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30"
              suppressHydrationWarning
            />
          </div>

          <div>
            <label
              htmlFor="modal-email"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              <Required>Email</Required>
            </label>
            <input
              id="modal-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="john@company.com"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 shadow-sm focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30"
              suppressHydrationWarning
            />
          </div>

          <div>
            <label
              htmlFor="modal-phone"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              <Required>Phone Number</Required>
            </label>
            <input
              id="modal-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              placeholder="(201) 555-0123"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 shadow-sm focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30"
              suppressHydrationWarning
            />
          </div>

          <div>
            <label
              htmlFor="modal-company"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              <Required>Company Name</Required>
            </label>
            <input
              id="modal-company"
              name="companyName"
              type="text"
              autoComplete="organization"
              required
              placeholder="ACME Corp"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 shadow-sm focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30"
              suppressHydrationWarning
            />
          </div>

          <div>
            <label
              htmlFor="modal-url"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              <Required>Company URL</Required>
            </label>
            <input
              id="modal-url"
              name="companyUrl"
              type="url"
              required
              placeholder="https://company.com"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 shadow-sm focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30"
              suppressHydrationWarning
            />
          </div>

          {submitState === "success" && (
            <p className="rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
              Thanks — we received your request and will be in touch soon.
            </p>
          )}

          {submitState === "error" && (
            <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={submitState === "submitting" || submitState === "success"}
            className="mt-2 w-full rounded-xl bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500 py-3.5 text-base font-semibold text-white shadow-[0_8px_28px_rgba(20,184,166,0.35)] transition hover:shadow-[0_12px_36px_rgba(20,184,166,0.45)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitState === "submitting" ? "Submitting..." : "Submit Request"}
          </button>
        </form>
      </div>
    </div>,
    document.body,
  );
}
