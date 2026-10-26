import Image from "next/image";
import Link from "next/link";
import AutoRefresh from "@/components/AutoRefresh";
import JobCard from "@/components/JobCard";
import CtaApplyBand from "@/components/CtaApplyBand";
import VideoPlaylist from "@/components/VideoPlaylist";
import SocialFeed, { type SocialPost } from "@/components/SocialFeed";
import { loadOpenJobs } from "@/lib/jobs";

// Real recent posts from the SEATS Inc Facebook page — reusing the same photos/captions
// sourced for the homepage's "Meet Our Members"/interns sections.
const SOCIAL_POSTS: SocialPost[] = [
  {
    name: "Chinastu Noma",
    headline: "Meet our Japanese intern",
    caption: "Meet Chinastu Noma from Japan, who works as a Representative of Sales & Marketing in the LOKA-MD department.",
    photo: "/media/2026/10/interns/chitnasu.jpg",
    href: "https://www.facebook.com/share/p/1S1mMwFnzb/?mibextid=wwXIfr",
  },
  {
    name: "Kirara Ido",
    headline: "Meet our Japanese intern",
    caption: "Meet Kirara from Japan, currently a 4th-year university student interning with S.E.A.T.S Inc.",
    photo: "/media/2026/10/interns/kirara.jpg",
    href: "https://www.facebook.com/share/p/1KhHoR4A5b/?mibextid=",
  },
  {
    name: "Saiga Matsumoto",
    headline: "Meet our Japanese intern",
    caption: "Meet Saiga Matsumoto from Japan, an inspiring intern at S.E.A.T.S Inc.",
    photo: "/media/2026/10/interns/saiga.jpg",
    href: "https://www.facebook.com/share/p/19sM8hDjjs/?mibextid=wwXIfr",
  },
  {
    name: "Raksa",
    headline: "Meet our Social Media Manager",
    caption: "Meet Raksa, our Social Media Manager at S.E.A.T.S Inc., who has been with us for years.",
    photo: "/media/2026/10/interns/raksa.jpg",
    href: "https://www.facebook.com/photo.php?fbid=1357460016345009&set=pb.100062430709439.-2207520000&type=3",
  },
];

const JOB_ANNOUNCEMENT_SLUGS = [
  "product-development-agribusiness",
  "representative-of-sales-and-order-management",
  "supervisor-of-operations",
  "copywriter",
  "freelance-sales-and-marketing-advisor-2",
];

const BENEFITS = [
  {
    title: "Learning & Growth",
    text: "Clear paths to learn new skills and grow your career — we always look first to promote from within.",
    icon: (
      <path
        d="M4 6.5C4 5.67 4.67 5 5.5 5H12v16H5.5A1.5 1.5 0 0 1 4 19.5v-13ZM20 6.5c0-.83-.67-1.5-1.5-1.5H12v16h6.5a1.5 1.5 0 0 0 1.5-1.5v-13Z"
        strokeWidth="1.5"
      />
    ),
  },
  {
    title: "Time Off",
    text: "Paid time off to recharge, spend time with family, and pursue your personal goals.",
    icon: (
      <>
        <rect x="4" y="5.5" width="16" height="15" rx="2" strokeWidth="1.5" />
        <path d="M4 10h16M8 3.5v4M16 3.5v4" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Giving Back",
    text: "We care about our community and support initiatives that give back to Cambodia.",
    icon: (
      <path
        d="M12 20s-7.5-4.6-9.8-9.1C.8 7.9 2.3 4.8 5.4 4.2c1.9-.4 3.8.5 4.9 2.1h1.4c1.1-1.6 3-2.5 4.9-2.1 3.1.6 4.6 3.7 3.2 6.7C19.5 15.4 12 20 12 20Z"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Rewards",
    text: "Recognition and rewards for the people who help S.E.A.T.S Inc. grow.",
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
  { title: "How to improve productivity?", youtubeId: "Smppx4YojC0", duration: "0:16", thumbnail: "/media/2022/11/7.jpg" },
  { title: "2 Strong Ownership | Four Mindsets /S.E.A.T.S Inc.", youtubeId: "awxKg04t5Ag", duration: "0:16", thumbnail: "/media/2022/11/2-1.jpg" },
  { title: "3 Learning Flexibly | Four Mindsets /S.E.A.T.S Inc.", youtubeId: "p6APtqh6JCg", duration: "0:16", thumbnail: "/media/2022/11/3.jpg" },
  { title: "4 One For All | Four Mindsets /S.E.A.T.S Inc.", youtubeId: "r77ewf-3Wu4", duration: "0:16", thumbnail: "/media/2022/11/4.jpg" },
];

// The announced jobs come from the live jobs API (an uncached fetch), so render per request instead of at build time
export const dynamic = "force-dynamic";

export default async function WorkPage() {
  const { jobs: openJobs } = await loadOpenJobs();
  const announced = JOB_ANNOUNCEMENT_SLUGS.flatMap((slug) => openJobs.find((j) => j.slug === slug) ?? []);

  return (
    <>
      <AutoRefresh />
      <section className="relative flex min-h-[420px] items-center">
        <Image src="/media/2026/10/team-photo-hero.jpg" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/10" />
        <div className="container-site relative text-white">
          <h1 className="max-w-xl text-4xl text-white desktop:text-5xl">Why Work With Us?</h1>
          <p className="mt-4 max-w-xl text-lg text-white/90">
            At S.E.A.T.S Inc. you&rsquo;ll find real responsibility, room to grow, and a team that feels like family.
            See what it&rsquo;s like to build your career with us.
          </p>
          <Link href="/jobs" className="btn-primary mt-6 inline-flex w-fit">
            Explore Open Jobs <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <SocialFeed posts={SOCIAL_POSTS} />

      <section className="py-20">
        <div className="container-site text-center">
          <h2 className="text-3xl text-primary">Employee Benefits</h2>
          <p className="mt-1 text-sm text-muted">អត្ថប្រយោជន៍សម្រាប់បុគ្គលិក</p>
          <div className="mt-10 grid gap-6 tablet:grid-cols-2 desktop:grid-cols-4">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-sm ring-1 ring-border"
              >
                <span className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="size-7">
                    {b.icon}
                  </svg>
                </span>
                <h3 className="mt-4 text-base font-bold text-heading">{b.title}</h3>
                <p className="mt-2 text-sm text-text">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container-site">
          <h2 className="text-center text-3xl text-primary">Photo Gallery</h2>
          <p className="mt-1 text-center text-sm text-muted">វិចិត្រសាលរូបភាព</p>
          <div className="mt-10 grid gap-6 tablet:grid-cols-2 desktop:grid-cols-3">
            {GALLERY.map((g) => (
              <figure key={g.src} className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-border">
                <div className="relative aspect-[4/3]">
                  <Image src={g.src} alt={g.caption} fill className="object-cover" />
                </div>
                <figcaption className="px-4 py-3 text-sm text-muted">{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site text-center">
          <h2 className="text-3xl text-primary">Jobs Announcements</h2>
          <p className="mt-1 text-sm text-muted">ផ្នែកណាមួយដែរអ្នកចង់ ចូលរួមជាមួយយើង​ !</p>
          <ul className="mt-10 flex flex-wrap justify-center gap-4 text-left">
            {announced.map((job, i) => (
              <li key={job.slug} className="w-full tablet:w-[calc(50%-8px)]">
                <JobCard job={job} index={i} />
              </li>
            ))}
          </ul>
          <Link
            href="/jobs"
            className="mt-10 inline-flex items-center justify-center rounded-full border border-primary px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            SEE MORE <span aria-hidden className="ml-1.5">→</span>
          </Link>
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

      <CtaApplyBand />
    </>
  );
}
