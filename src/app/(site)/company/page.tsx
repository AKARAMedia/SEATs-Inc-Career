import Image from "next/image";
import CtaApplyBand from "@/components/CtaApplyBand";
import VideoPlaylist from "@/components/VideoPlaylist";

const LIFE_CARDS = [
  {
    title: "LEARNING",
    icon: <LearningIcon />,
    text: "At S.E.A.T.S Inc., our greatest assets are our people and everything we do aims to ensure that our people realise their fullest potential. Opportunities to learn new knowledge and skills, therefore, are strongly encouraged and heavily invested in. We always look first for promotion from within.",
  },
  {
    title: "TIME OFF",
    icon: <ClockIcon />,
    text: "We understand that, besides their career, our employees need time to recharge their batteries, enjoy time with their families and pursue individual goals in their personal time. At S.E.A.T.S Inc., we offer compensated time off to ensure that our employees benefit from a healthy work-life balance.",
  },
  {
    title: "GIVING BACK",
    icon: <ArrowsIcon />,
    text: "Giving back is at the heart of S.E.A.T.S Inc., We seriously care about our community.",
  },
  {
    title: "REWARDS",
    icon: <AwardIcon />,
    text: "Giving back is at the heart of S.E.A.T.S Inc., We seriously care about our community.",
  },
];

const GALLERY = [
  "/media/2024/04/photo-gallery-8.jpg",
  "/media/2024/04/photo-gallery-10.jpg",
  "/media/2024/04/photo-gallery-11.jpg",
  "/media/2024/04/photo-gallery-12.jpg",
  "/media/2024/04/photo-gallery-13.jpg",
  "/media/2024/05/photo-gallery-14.jpg",
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
        <h1 className="text-3xl text-primary">LIFE AT S.E.A.T.S Inc.</h1>
        <p className="mt-1 text-sm text-muted">ជីវិតនៅ S.E.A.T.S Inc.</p>
        <div className="mt-10 grid gap-6 desktop:grid-cols-2">
          {LIFE_CARDS.map((c) => (
            <div key={c.title} className="overflow-hidden rounded-xl ring-1 ring-border">
              <div className="flex h-28 items-center justify-center bg-primary text-white">{c.icon}</div>
              <div className="bg-white p-6">
                <h3 className="text-center text-lg font-bold text-primary">{c.title}</h3>
                <p className="mt-3 text-sm text-text">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary py-20 text-white">
        <div className="container-site">
          <h2 className="text-3xl">Photo Gallery</h2>
          <p className="mt-1 text-sm text-white/80">វិចិត្រសាលរូបភាព</p>
          <div className="mt-8 grid gap-4 desktop:grid-cols-3">
            {GALLERY.map((src) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image src={src} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-20">
        <h2 className="text-3xl text-primary">Message</h2>
        <p className="mt-1 text-sm text-muted">សារពីផ្នែក ធនធានមនុស្ស​!</p>
        <div className="mt-6 max-w-3xl space-y-4 text-text">
          <p>Everyone is the same but those that seek challenges and improvement will be further ahead of the result!</p>
          <p>
            S.E.A.T.S Inc. always welcomes anyone and everyone for those who are up for challenges and wanted to
            change for the better!
          </p>
          <p>
            Our company provides an opportunity for you to make changes and create something new it is up to you to
            decide what you want to hold in the future!
          </p>
        </div>
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

function LearningIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M3 20h18M5 20V9l5-3 5 3v11M13 20v-6h4v6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 13h.01M8 16h.01" strokeLinecap="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowsIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M4 6l6 6-6 6M12 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AwardIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="12" cy="8" r="5" />
      <path d="M8.5 12.5 7 21l5-2.5L17 21l-1.5-8.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
