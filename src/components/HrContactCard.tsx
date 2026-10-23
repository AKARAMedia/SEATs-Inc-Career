import type { HrContact } from "@/lib/settings";

function Row({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4"
        >
          {icon}
        </svg>
      </span>
      <span className="min-w-0 break-words">{children}</span>
    </li>
  );
}

export default function HrContactCard({ contact }: { contact: HrContact }) {
  const initials = contact.name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

  return (
    <div className="rounded-xl bg-gradient-to-br from-sky-50 to-white p-5 ring-1 ring-primary/20">
      <div className="flex items-center gap-3">
        <span
          aria-hidden
          className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-white"
        >
          {initials}
        </span>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">HR Contact</p>
          <p className="truncate font-bold text-heading">{contact.name}</p>
        </div>
      </div>

      <ul className="mt-4 space-y-3 border-t border-primary/15 pt-4 text-sm text-text">
        <Row
          icon={
            <>
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </>
          }
        >
          <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
            {contact.email}
          </a>
        </Row>
        <Row
          icon={
            <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
          }
        >
          <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-primary">
            {contact.phone}
          </a>
        </Row>
        <Row
          icon={
            <>
              <path d="M12 21s7-6.2 7-11.5a7 7 0 0 0-14 0C5 14.8 12 21 12 21Z" />
              <circle cx="12" cy="9.5" r="2.5" />
            </>
          }
        >
          {contact.address}
        </Row>
      </ul>
    </div>
  );
}
