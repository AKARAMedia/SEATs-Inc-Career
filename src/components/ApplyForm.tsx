"use client";

import { useState, type FormEvent } from "react";

// This app only reads the shared database directly; applications are written through
// the seats-inc.com project's own API (same split as everything else — see src/db/schema.ts).
const API_URL = `${process.env.NEXT_PUBLIC_SEATS_INC_URL ?? "https://seats-inc.com"}/api/career-jobs/apply/`;

type Status = "idle" | "submitting" | "success" | "error";

export default function ApplyForm({ slug, jobTitle }: { slug: string; jobTitle: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    // Honeypot: real applicants never see or fill this field.
    if ((form.elements.namedItem("botcheck") as HTMLInputElement)?.value) {
      setStatus("success");
      return;
    }
    setStatus("submitting");
    setError("");
    try {
      const res = await fetch(API_URL, { method: "POST", body: new FormData(form) });
      const data = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
      if (!res.ok || !data?.ok) {
        setError(data?.error || "Your application couldn't be sent. Please try again later.");
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setError("Your application couldn't be sent. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mt-6 rounded-xl bg-primary/10 p-6 text-sm text-heading">
        <p className="font-bold">Thank you for applying!</p>
        <p className="mt-1 text-text">We&rsquo;ve received your application for {jobTitle} and will be in touch by email or Telegram.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-4 rounded-xl bg-white p-6 shadow-sm ring-1 ring-border">
      <h2 className="text-xl text-heading">Apply Directly Here</h2>

      <input type="hidden" name="job" value={slug} />
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />

      <div className="grid gap-4 tablet:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1 block font-semibold text-heading">Name *</span>
          <input name="name" type="text" required className="w-full rounded-md border border-border px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block font-semibold text-heading">Email *</span>
          <input name="email" type="email" required className="w-full rounded-md border border-border px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
        </label>
      </div>

      <div className="grid gap-4 tablet:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1 block font-semibold text-heading">Telegram Username *</span>
          <input
            name="telegram"
            type="text"
            required
            placeholder="@username"
            pattern="@?[a-zA-Z0-9_]{5,32}"
            title="Your Telegram username (5-32 letters, digits or underscores)"
            className="w-full rounded-md border border-border px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block font-semibold text-heading">Phone</span>
          <input name="phone" type="tel" className="w-full rounded-md border border-border px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
        </label>
      </div>

      <label className="block text-sm">
        <span className="mb-1 block font-semibold text-heading">Message</span>
        <textarea name="message" rows={4} className="w-full rounded-md border border-border px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
      </label>

      <label className="block text-sm">
        <span className="mb-1 block font-semibold text-heading">CV (PDF, optional)</span>
        <input name="cv" type="file" accept="application/pdf" className="w-full text-sm text-text file:mr-3 file:rounded-full file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white" />
      </label>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button type="submit" disabled={status === "submitting"} className="btn-primary w-fit disabled:opacity-60">
        {status === "submitting" ? "Sending…" : "Submit Application"}
      </button>
    </form>
  );
}
