const ICONS = [
  // Learning & Growth
  <path
    key="learning"
    d="M4 6.5C4 5.67 4.67 5 5.5 5H12v16H5.5A1.5 1.5 0 0 1 4 19.5v-13ZM20 6.5c0-.83-.67-1.5-1.5-1.5H12v16h6.5a1.5 1.5 0 0 0 1.5-1.5v-13Z"
    strokeWidth="1.5"
  />,
  // Time Off
  <g key="time-off">
    <rect x="4" y="5.5" width="16" height="15" rx="2" strokeWidth="1.5" />
    <path d="M4 10h16M8 3.5v4M16 3.5v4" strokeWidth="1.5" strokeLinecap="round" />
  </g>,
  // Giving Back
  <path
    key="giving-back"
    d="M12 20s-7.5-4.6-9.8-9.1C.8 7.9 2.3 4.8 5.4 4.2c1.9-.4 3.8.5 4.9 2.1h1.4c1.1-1.6 3-2.5 4.9-2.1 3.1.6 4.6 3.7 3.2 6.7C19.5 15.4 12 20 12 20Z"
    strokeWidth="1.5"
    strokeLinejoin="round"
  />,
  // Rewards
  <path
    key="rewards"
    d="M12 3.5l2.47 5 5.53.8-4 3.9.94 5.5L12 16.2l-4.94 2.6.94-5.5-4-3.9 5.53-.8L12 3.5Z"
    strokeWidth="1.5"
    strokeLinejoin="round"
  />,
];

export default function BenefitsGrid({ items }: { items: { title: string; text: string }[] }) {
  return (
    <div className="mt-10 grid gap-6 tablet:grid-cols-2 desktop:grid-cols-4">
      {items.map((b, i) => (
        <div
          key={b.title}
          className="flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-sm ring-1 ring-border"
        >
          <span className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
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
