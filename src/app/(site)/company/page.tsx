import Image from "next/image";
import CtaApplyBand from "@/components/CtaApplyBand";
import VideoPlaylist from "@/components/VideoPlaylist";

const LIFE_CARDS = [
  {
    title: "LEARNING",
    text: "We invest in our people and always look first to promote from within.",
    icon: (
      <path
        d="M4 6.5C4 5.67 4.67 5 5.5 5H12v16H5.5A1.5 1.5 0 0 1 4 19.5v-13ZM20 6.5c0-.83-.67-1.5-1.5-1.5H12v16h6.5a1.5 1.5 0 0 0 1.5-1.5v-13Z"
        strokeWidth="1.5"
      />
    ),
  },
  {
    title: "TIME OFF",
    text: "Paid time off to recharge and spend quality time with family and friends.",
    icon: (
      <>
        <rect x="4" y="5.5" width="16" height="15" rx="2" strokeWidth="1.5" />
        <path d="M4 10h16M8 3.5v4M16 3.5v4" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "GIVING BACK",
    text: "We support our community through CJCC career fairs and local outreach.",
    icon: (
      <path
        d="M12 20s-7.5-4.6-9.8-9.1C.8 7.9 2.3 4.8 5.4 4.2c1.9-.4 3.8.5 4.9 2.1h1.4c1.1-1.6 3-2.5 4.9-2.1 3.1.6 4.6 3.7 3.2 6.7C19.5 15.4 12 20 12 20Z"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "REWARDS",
    text: "We recognize and reward the people who help S.E.A.T.S Inc. grow.",
    icon: (
      <path
        d="M12 3.5l2.47 5 5.53.8-4 3.9.94 5.5L12 16.2l-4.94 2.6.94-5.5-4-3.9 5.53-.8L12 3.5Z"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    ),
  },
];

const GALLERY = [
  { src: "/media/2026/10/gallery/cjcc-fair-mar-2026.webp", caption: "CJCC Career Fair 2026" },
  { src: "/media/2026/10/gallery/cjcc-job-fair-aug-2025.webp", caption: "CJCC Job Fair — Aug 2025" },
  { src: "/media/2026/10/gallery/training.webp", caption: "Team Training Session" },
  { src: "/media/2026/10/gallery/company-party-1.webp", caption: "Company Party" },
  { src: "/media/2026/10/gallery/company-party-2.webp", caption: "Company Party" },
  { src: "/media/2026/10/gallery/cjcc-job-fair-jan-2025.webp", caption: "CJCC Job Fair — Jan 2025" },
];

const VIDEOS = [
  { title: "Background of CEO & Present [Part 1]", youtubeId: "Q_R6mVwDca0", duration: "0:16", thumbnail: "/media/2022/11/11-1.jpg" },
  { title: "Background of CEO & Present [Part 2]", youtubeId: "vRa66uiD-VA", duration: "0:16", thumbnail: "/media/2022/11/12.jpg" },
  { title: "Study Background of CEO [Part 3]", youtubeId: "v5HZCcwgwAo", duration: "0:16", thumbnail: "/media/2022/11/13.jpg" },
];

export default function CompanyPage() {
  return (
    <>
      <section className="container-site py-20">
        <div className="relative">
          <div className="pointer-events-none absolute -right-6 -top-10 hidden w-40 desktop:block">
            <Image src="/media/2022/10/comapny.png" alt="" width={279} height={212} className="h-auto w-full" />
          </div>
          <h1 className="text-3xl text-primary">LIFE AT S.E.A.T.S Inc.</h1>
          <p className="mt-1 text-sm text-muted">ជីវិតនៅ S.E.A.T.S Inc.</p>
        </div>
        <div className="mt-10 grid gap-6 tablet:grid-cols-2 desktop:grid-cols-4">
          {LIFE_CARDS.map((c) => (
            <div
              key={c.title}
              className="flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-sm ring-1 ring-border"
            >
              <span className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="size-7">
                  {c.icon}
                </svg>
              </span>
              <h3 className="mt-4 text-base font-bold text-primary">{c.title}</h3>
              <p className="mt-2 text-sm text-text">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary py-20 text-white">
        <div className="container-site">
          <h2 className="text-3xl">Photo Gallery</h2>
          <p className="mt-1 text-sm text-white/80">វិចិត្រសាលរូបភាព</p>
          <div className="mt-8 grid gap-6 tablet:grid-cols-2 desktop:grid-cols-3">
            {GALLERY.map((g) => (
              <figure
                key={g.src}
                className="group overflow-hidden rounded-xl bg-white text-text shadow-lg ring-1 ring-white/10"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={g.src}
                    alt={g.caption}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <figcaption className="px-4 py-3 text-sm text-muted">{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-20">
        <div className="grid gap-12 desktop:grid-cols-[360px_1fr] desktop:items-center">
          <div className="relative pb-6">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-lg">
              <Image src="/media/2023/03/ceo-1.jpeg" alt="Kosuke Mineshima" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 rounded-xl bg-white px-5 py-4 shadow-lg ring-1 ring-border">
              <p className="font-semibold text-heading">Kosuke Mineshima</p>
              <p className="text-sm text-muted">Director &amp; CEO</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Message From Our CEO</p>
            <p className="text-sm text-muted">សារពីផ្នែក ធនធានមនុស្ស​!</p>
            <h2 className="mt-3 text-3xl text-heading desktop:text-4xl">From Cambodia to the World</h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-text">
              <p>Everyone is the same, but those who seek challenges and improvement will always be a step further ahead.</p>
              <p>
                S.E.A.T.S Inc. welcomes anyone ready for a challenge and willing to change for the better. We provide
                the opportunity to make changes and create something new — it&rsquo;s up to you to decide what you
                want to hold in the future.
              </p>
            </div>
            <div className="mt-6 flex gap-3 rounded-xl bg-surface p-5">
              <span aria-hidden className="font-heading text-4xl leading-none text-primary/30">
                &ldquo;
              </span>
              <p className="text-text">We will keep generating something new for the happiness of all stakeholders.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-site pb-10">
        <a href="https://seats-inc.com/en/home-2/" target="_blank" rel="noopener noreferrer" className="relative block aspect-[2560/350] w-full">
          <Image src="/media/2022/10/banner-jump-to-seatsinc-scaled.jpg" alt="S.E.A.T.S Inc." fill className="object-cover" />
        </a>
      </section>

      <section className="bg-gradient-to-b from-primary to-white py-20 text-white">
        <div className="container-site">
          <h2 className="text-3xl">Our Video</h2>
          <p className="mt-1 text-sm text-white/80">សារចែករំលែក ពីCEOក្រុមហ៊ុន</p>
          <div className="mt-8">
            <VideoPlaylist videos={VIDEOS} />
          </div>
        </div>
      </section>

      <CtaApplyBand title="Are You Ready to Apply !" />
    </>
  );
}
