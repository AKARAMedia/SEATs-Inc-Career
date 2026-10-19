"use client";

import { useState } from "react";
import { HR_PHONE, LINKEDIN, MESSENGER, TELEGRAM_HR } from "@/lib/links";

const CHANNELS = [
  { label: "Telegram", href: TELEGRAM_HR },
  { label: `Call ${HR_PHONE}`, href: `tel:${HR_PHONE.replace(/\s/g, "")}` },
  { label: "Messenger", href: MESSENGER },
  { label: "LinkedIn", href: LINKEDIN },
];

export default function FloatingApplyButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-56 overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-black/10">
          <div className="bg-primary px-4 py-2 text-sm font-semibold text-white">Apply Now</div>
          <ul>
            {CHANNELS.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("tel:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="block px-4 py-2.5 text-sm text-text hover:bg-surface"
                >
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="btn-primary shadow-lg"
      >
        Apply Now
      </button>
    </div>
  );
}
