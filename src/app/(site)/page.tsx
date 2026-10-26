import Image from "next/image";
import Link from "next/link";
import { TELEGRAM_RECRUIT } from "@/lib/links";
import CtaApplyBand from "@/components/CtaApplyBand";


const INTERVIEWS = [
  {
    name: "Phatya Seng",
    role: "SALES PROMOTION SUPERVISOR",
    photo: "/media/2026/10/interview-phatya.jpg",
    quote:
      "10 years in, my biggest challenge has been adapting as the company grows: team structures shift, roles blur and workloads rise. It built my problem-solving, communication and ownership. I stay for the chance to grow, take on new responsibilities and help teammates reach their goals.",
  },
  {
    name: "Linda Ny",
    role: "OPERATION CONTROL",
    photo: "/media/2026/10/interview-linda.jpg",
    quote:
      "4.5 years and still going strong. Juggling orders, payments, deliveries and last-minute issues is messy but never boring; it keeps me thinking fast and organized. What keeps me here is the team energy: we support each other, communicate openly and solve problems together.",
  },
  {
    name: "Poch Bunthy",
    role: "GENERAL MANAGER, NOVA MARKETING",
    photo: "/media/2026/10/interview-bunthy.jpg",
    quote:
      "Our visionary General Manager, shaping Nova Marketing's journey since day one. His dedication and leadership are at the heart of our success. Stay tuned for his story.",
  },
  {
    name: "Kazuhiro Okuda",
    role: "GENERAL MANAGER, AGRI-BUSINESS",
    photo: "/media/2026/10/interview-okuda.jpg",
    quote:
      "Our dedicated General Manager in Agri-Business, and a key part of our growth since day one. Stay tuned for his inspiring journey.",
  },
  {
    name: "Long Khema",
    role: "OPERATION CONTROL",
    photo: "/media/2026/10/interns/khema.jpg",
    quote: "A senior Operation Control specialist at S.E.A.T.S Inc. Stay tuned for her story.",
  },
  {
    name: "Raksa",
    role: "SOCIAL MEDIA MANAGER",
    photo: "/media/2026/10/interns/raksa.jpg",
    quote: "Our Social Media Manager at S.E.A.T.S Inc., who has been with us for years. Stay tuned for her story.",
  },
];

// Speech-bubble colours (deep enough for white text) and a slightly different tilt per card
const BUBBLES = [
  { color: "#0b7f90", clip: "polygon(0 7%, 38% 0, 100% 9%, 97% 100%, 2% 93%)" },
  { color: "#6b3a8a", clip: "polygon(0 4%, 62% 10%, 100% 0, 98% 94%, 3% 100%)" },
  { color: "#1f7a4f", clip: "polygon(2% 0, 100% 8%, 96% 100%, 0 92%)" },
  { color: "#c2570c", clip: "polygon(0 9%, 55% 0, 100% 6%, 97% 100%, 4% 95%)" },
];

const DOTS = "radial-gradient(currentColor 1.6px, transparent 1.6px)";

const JAPANESE_INTERNS = [
  { name: "Chinastu Noma", role: "Representative of Sales & Marketing", photo: "/media/2026/10/interns/chitnasu.jpg" },
  { name: "Kirara Ido", role: "Japanese Internship", photo: "/media/2026/10/interns/kirara.jpg" },
  { name: "Saiga Matsumoto", role: "Assistant of Sales & Development", photo: "/media/2026/10/interns/saiga.jpg" },
  { name: "Yusuke Ogushi", role: "Assistant of Sales & Promotion", photo: "/media/2026/10/interns/yusuke.jpg" },
  { name: "Shoko Kawabata", role: "Japanese Internship", photo: "/media/2026/10/interns/shoko.jpg" },
];

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-[560px] items-center">
        <Image src="/media/2026/10/team-photo-hero.jpg" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        <div className="container-site relative text-white">
          <h1 className="max-w-2xl text-4xl text-white desktop:text-6xl">
            Grow Your Career with S.E.A.T.S Inc.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/90">
            We&rsquo;re a Japanese trading company built in Cambodia — a big family of different departments,
            businesses, and cultures learning and growing together. Come build your career with us.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/jobs" className="btn-primary">
              Explore Jobs <span aria-hidden>→</span>
            </Link>
            <a href={TELEGRAM_RECRUIT} target="_blank" rel="noopener noreferrer" className="btn-outline">
              Join Talent Community
            </a>
          </div>
        </div>
      </section>

      <section className="container-site grid items-center gap-12 py-20 desktop:grid-cols-2">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
          <Image src="/media/2026/01/DSC03495-scaled.jpg" alt="" fill className="object-cover" />
        </div>
        <div>
          <h2 className="text-3xl text-primary">Company Goal</h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-text">
            <p>
              A decade ago, a simple question sparked everything: why can&rsquo;t Cambodia produce something the
              world recognizes as top-quality?
            </p>
            <p>
              That question became S.E.A.T.S Inc. With a small, determined team who believed in the vision, we&rsquo;ve
              grown step by step ever since — and we&rsquo;re proud of what we&rsquo;ve built together.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-sky-100 to-sky-100 py-20">
        <div className="container-site">
          <h2 className="text-3xl text-heading">Message From Management</h2>
          <div className="mt-8 flex flex-col items-center gap-10 rounded-2xl bg-white p-8 shadow-lg ring-1 ring-border desktop:flex-row desktop:items-start desktop:p-12">
            <div className="relative size-[200px] shrink-0 overflow-hidden rounded-full shadow-md ring-4 ring-primary/10">
              <Image src="/media/2023/03/ceo-1.jpeg" alt="Kosuke Mineshima" fill className="object-cover" />
            </div>
            <div className="relative">
              <span aria-hidden className="absolute -left-1 -top-8 font-heading text-7xl leading-none text-primary/15">
                &ldquo;
              </span>
              <div className="relative space-y-4 text-lg leading-relaxed text-text">
                <p>&ldquo;Creating people, things, and ideas from Cambodia&rdquo; — this is S.E.A.T.S Inc.&rsquo;s imperative responsibility.</p>
                <p>
                  We bring wisdom and experience gained in Japan and neighboring nations to Cambodia, making full use
                  of the country&rsquo;s strengths to produce &ldquo;power&rdquo; that can compete in the world.
                </p>
                <p>
                  S.E.A.T.S Inc. believes that doing business on a real site is everything. We continuously push
                  forward grounded businesses to meet that responsibility.
                </p>
              </div>
              <p className="mt-6 border-t border-border pt-4 font-semibold text-heading">
                Director &amp; CEO
                <br />
                Kosuke Mineshima
              </p>
            </div>
          </div>
        </div>

        <div className="container-site mt-16 grid gap-10 desktop:grid-cols-2">
          <div>
            <h3 className="text-2xl text-heading">Vision</h3>
            <div className="relative mt-4 aspect-[1000/234] w-full">
              <Image src="/media/2023/03/Mission-1.png" alt="" fill className="object-contain object-left" />
            </div>
            <p className="mt-3 text-center text-text">Keep generating something new for the happiness of all stakeholders.</p>
          </div>
          <div>
            <h3 className="text-2xl text-heading">Mission</h3>
            <div className="relative mt-4 aspect-[1000/234] w-full">
              <Image src="/media/2023/03/Vision-2.png" alt="" fill className="object-contain object-left" />
            </div>
            <p className="mt-3 text-center text-text">
              From Cambodia to the World, With US
              <br />
              Create the Product, Service and People competitive in the World.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20">
        <div
          aria-hidden
          className="absolute -right-6 top-6 h-44 w-56 text-logo-green/50"
          style={{ backgroundImage: DOTS, backgroundSize: "14px 14px" }}
        />
        <div
          aria-hidden
          className="absolute -left-6 bottom-10 h-56 w-44 text-accent/50"
          style={{ backgroundImage: DOTS, backgroundSize: "14px 14px" }}
        />

        <div className="container-site relative">
          <h2 className="text-3xl text-primary">
            Life at <span className="text-logo-green">S.E.A.T.S</span>
          </h2>
          <p className="mt-1 text-sm text-muted">សម្ភាសន៍ សមាជិករបស់យើង !</p>

          <div className="mt-10 grid gap-x-5 gap-y-10 tablet:grid-cols-2 desktop:grid-cols-3">
            {INTERVIEWS.map((i, n) => {
              const bubble = BUBBLES[n % BUBBLES.length];
              return (
                <figure key={i.name} className="flex flex-col">
                  <div className="relative aspect-square overflow-hidden shadow-lg">
                    <Image src={i.photo} alt={i.name} fill className="object-cover object-top" />
                  </div>

                  <div className="relative z-10 -mx-2 -mt-14 flex-1">
                    <div
                      aria-hidden
                      className="absolute -top-2 left-3 h-5 w-2/5 bg-white/30"
                      style={{ clipPath: "polygon(0 100%, 12% 0, 100% 40%, 96% 100%)" }}
                    />
                    <div
                      className="relative flex h-full flex-col px-6 pb-8 pt-7 text-white shadow-lg"
                      style={{ backgroundColor: bubble.color, clipPath: bubble.clip }}
                    >
                      <span aria-hidden className="absolute right-5 top-3 font-heading text-4xl leading-none text-white/90">
                        &rdquo;
                      </span>
                      <span aria-hidden className="font-heading text-4xl leading-none text-white/90">
                        &ldquo;
                      </span>
                      <blockquote className="-mt-1 text-[13px] leading-relaxed">{i.quote}</blockquote>
                      <figcaption className="mt-4 border-t border-white/30 pt-3">
                        <span className="block font-semibold">{i.name}</span>
                        <span className="block text-[11px] font-bold uppercase tracking-wide text-white/80">{i.role}</span>
                      </figcaption>
                    </div>
                  </div>
                </figure>
              );
            })}
          </div>

          <h3 className="mt-16 text-2xl text-primary">Our Japanese Interns</h3>
          <p className="mt-2 max-w-2xl text-text">
            Meet the Japanese interns spending time with us, learning, contributing, and sharing their culture with
            the S.E.A.T.S Inc. team.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6 tablet:grid-cols-3 desktop:grid-cols-6">
            {JAPANESE_INTERNS.map((intern, i) => {
              const bubble = BUBBLES[i % BUBBLES.length];
              return (
                <div key={intern.name} className="flex flex-col items-center text-center">
                  <div
                    className="relative size-24 overflow-hidden rounded-full shadow-sm ring-4 desktop:size-28"
                    style={{ "--tw-ring-color": bubble.color } as React.CSSProperties}
                  >
                    <Image src={intern.photo} alt={intern.name} fill className="object-cover object-top" />
                  </div>
                  <span className="mt-3 text-sm font-bold text-heading">{intern.name}</span>
                  <span className="text-xs text-muted">{intern.role}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaApplyBand />
    </>
  );
}
