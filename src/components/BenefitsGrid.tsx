const ICONS = [
  // Learn & Grow
  <path
    key="learn-grow"
    d="M4 6.5C4 5.67 4.67 5 5.5 5H12v16H5.5A1.5 1.5 0 0 1 4 19.5v-13ZM20 6.5c0-.83-.67-1.5-1.5-1.5H12v16h6.5a1.5 1.5 0 0 0 1.5-1.5v-13Z"
    strokeWidth="1.5"
  />,
  // Work Together
  <g key="work-together">
    <circle cx="9" cy="8.2" r="2.4" strokeWidth="1.5" />
    <path d="M4.3 18c0-2.6 2.1-4.7 4.7-4.7s4.7 2.1 4.7 4.7" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="16.2" cy="8.4" r="2.1" strokeWidth="1.5" />
    <path d="M13 14.1c.9-.75 2-1.2 3.2-1.2 2.3 0 4.2 1.9 4.5 4.3" strokeWidth="1.5" strokeLinecap="round" />
  </g>,
  // Make an Impact
  <g key="make-impact">
    <circle cx="12" cy="12" r="8" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="4.4" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
  </g>,
  // Grow Together
  <g key="grow-together" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.9 14.1a4 4 0 0 0 5.66 0l2-2a4 4 0 0 0-5.66-5.66l-1 1" strokeWidth="1.5" />
    <path d="M14.1 9.9a4 4 0 0 0-5.66 0l-2 2a4 4 0 0 0 5.66 5.66l1-1" strokeWidth="1.5" />
  </g>,
];

export default function BenefitsGrid({ items }: { items: { title: string; text: string }[] }) {
  return (
    <div className="mt-10 grid gap-6 tablet:grid-cols-2">
      {items.map((b, i) => (
        <div
          key={b.title}
          className="card card-hover reveal flex flex-col items-center p-8 text-center"
        >
          <span className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-md">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="size-7">
              {ICONS[i % ICONS.length]}
            </svg>
          </span>
          <h3 className="mt-4 text-base font-bold text-heading">{b.title}</h3>
          <p className="mt-2 text-sm text-text">{b.text}</p>
        </div>
      ))}
    </div>
  );
}
