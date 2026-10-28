import Link from "next/link";

// One frosted-glass bar split by a thin divider; each half is a link.
const halfClass =
  "group flex items-center justify-center gap-3 px-4 py-2 text-white transition-colors duration-300 hover:bg-white/10";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary to-[#0b7f90] text-white">
      <div className="container-site py-12">
        <div className="grid overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-lift backdrop-blur tablet:grid-cols-2">
          <a
            href="https://seats-inc.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${halfClass} border-b border-white/20 tablet:border-b-0 tablet:border-r`}
          >
            <span className="transition-colors group-hover:text-[var(--color-logo-green)]">
              <BuildingIcon />
            </span>
            <span className="text-left">
              <span className="block text-lg font-bold tracking-wide">COMPANY</span>
              <span className="block text-sm text-white/75">អំពីក្រុមហ៊ុន</span>
            </span>
          </a>
          <Link href="/jobs" className={halfClass}>
            <span className="transition-colors group-hover:text-[var(--color-logo-green)]">
              <WorkIcon />
            </span>
            <span className="text-left">
              <span className="block text-lg font-bold tracking-wide">WORK</span>
              <span className="block text-sm text-white/75">អំពីការងារ</span>
            </span>
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/70">Copyright © 2026 | S.E.A.T.S Career.</div>
    </footer>
  );
}

function BuildingIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M4 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 10h4a1 1 0 0 1 1 1v10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 8h.01M11 8h.01M8 12h.01M11 12h.01M8 16h.01M11 16h.01" strokeLinecap="round" />
    </svg>
  );
}

function WorkIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="3" y="7" width="18" height="13" rx="1.5" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" strokeLinecap="round" />
    </svg>
  );
}
