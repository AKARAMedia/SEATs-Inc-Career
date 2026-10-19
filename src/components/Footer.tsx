import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="grid desktop:grid-cols-2">
        <Link href="/company" className="flex flex-col items-center gap-2 border-b border-white/15 py-10 text-center desktop:border-b-0 desktop:border-r">
          <BuildingIcon />
          <span className="text-lg font-bold tracking-wide">COMPANY</span>
          <span className="text-xs">អំពីក្រុមហ៊ុន</span>
        </Link>
        <Link href="/work" className="flex flex-col items-center gap-2 py-10 text-center">
          <WorkIcon />
          <span className="text-lg font-bold tracking-wide">WORK</span>
          <span className="text-xs">អំពីការងារ</span>
        </Link>
      </div>
      <div className="border-t border-white/15 py-4 text-center text-xs">
        Copyright © {new Date().getFullYear()} | S.E.A.T.S Career.
      </div>
    </footer>
  );
}

function BuildingIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M4 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 10h4a1 1 0 0 1 1 1v10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 8h.01M11 8h.01M8 12h.01M11 12h.01M8 16h.01M11 16h.01" strokeLinecap="round" />
    </svg>
  );
}

function WorkIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="3" y="7" width="18" height="13" rx="1.5" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" strokeLinecap="round" />
    </svg>
  );
}
