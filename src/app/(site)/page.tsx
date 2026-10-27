import Image from "next/image";
import Link from "next/link";
import { TELEGRAM_RECRUIT } from "@/lib/links";
import CtaApplyBand from "@/components/CtaApplyBand";
import SocialFeed from "@/components/SocialFeed";
import PhotoGallery from "@/components/PhotoGallery";
import BenefitsGrid from "@/components/BenefitsGrid";
import OpenPositionsLive from "@/components/OpenPositionsLive";
import {
  HERO,
  CEO_MESSAGE,
  INTERVIEWS,
  BUBBLES,
  DOTS,
  JAPANESE_INTERNS,
  BENEFITS,
  GALLERY,
  SOCIAL_POSTS,
  BUSINESSES,
  COMPANY_GOAL,
  OUTBOUND_BANNER,
} from "@/content/home";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section id="top" className="relative flex min-h-[560px] items-center">
        <Image src={HERO.photo} alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        <div className="container-site relative text-white">
          <h1 className="max-w-2xl text-4xl text-white desktop:text-6xl">{HERO.title}</h1>
          <p className="mt-5 max-w-xl text-lg text-white/90">{HERO.text}</p>
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

      {/* CEO Message */}
      <section id="ceo-message" className="container-site scroll-mt-20 py-20">
        <div className="grid gap-12 desktop:grid-cols-[360px_1fr] desktop:items-center">
          <div className="relative pb-6">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-lg">
              <Image src={CEO_MESSAGE.photo} alt={CEO_MESSAGE.name} fill className="object-cover" />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 rounded-xl bg-white px-5 py-4 shadow-lg ring-1 ring-border">
              <p className="font-semibold text-heading">{CEO_MESSAGE.name}</p>
              <p className="text-sm text-muted">{CEO_MESSAGE.title}</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">{CEO_MESSAGE.eyebrow}</p>
            <p className="text-sm text-muted">{CEO_MESSAGE.eyebrowKhmer}</p>
            <h2 className="mt-3 text-3xl text-heading desktop:text-4xl">{CEO_MESSAGE.heading}</h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-text">
              {CEO_MESSAGE.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="mt-6 flex gap-3 rounded-xl bg-surface p-5">
              <span aria-hidden className="font-heading text-4xl leading-none text-primary/30">
                &ldquo;
              </span>
              <p className="text-text">{CEO_MESSAGE.pullQuote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Desired Candidate Profile: testimonials, Japanese interns, benefits */}
      <section id="desired-candidate" className="relative scroll-mt-20 overflow-hidden bg-white py-20">
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

          <div className="-mx-[15px] mt-10 flex snap-x snap-mandatory scroll-px-[15px] gap-5 overflow-x-auto px-[15px] pb-4 tablet:mx-0 tablet:scroll-px-0 tablet:px-0">
            {/* Card width leaves a partial next card visible (~1.25 on mobile, 2.5 on tablet, 3.5 on desktop) to hint there's more to scroll to. */}
            {INTERVIEWS.map((i, n) => {
              const bubble = BUBBLES[n % BUBBLES.length];
              return (
                <figure
                  key={i.name}
                  className="flex w-[78%] shrink-0 snap-start flex-col tablet:w-[calc((100%-3.125rem)/2.5)] desktop:w-[calc((100%-3.125rem)/3.5)]"
                >
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
                      <blockquote className="-mt-1 text-sm leading-relaxed desktop:text-[13px]">{i.quote}</blockquote>
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

          <h3 className="mt-16 text-2xl text-primary">Our Japanese and Internship Member</h3>
          <p className="mt-2 max-w-2xl text-text">
            Meet our Japanese team members and interns spending time with us, learning, contributing, and sharing
            their culture with the S.E.A.T.S Inc. team.
          </p>
          <div className="-mx-3 mt-10 flex flex-wrap justify-center">
            {JAPANESE_INTERNS.map((intern, i) => {
              const bubble = BUBBLES[i % BUBBLES.length];
              return (
                <div
                  key={intern.name}
                  className="flex w-1/2 flex-col items-center px-3 pb-6 text-center tablet:w-1/3 desktop:w-1/6"
                >
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

          <h3 className="mt-16 text-2xl text-primary">Why Build Your Career with S.E.A.T.S Inc.?</h3>
          <p className="mt-1 text-sm text-muted">Discover opportunities to learn, contribute, and grow with our team.</p>
          <BenefitsGrid items={BENEFITS} />
        </div>
      </section>

      {/* Life at S.E.A.T.S Inc.: gallery, social feed */}
      <section className="bg-surface py-20">
        <div className="container-site text-center">
          <h2 className="text-3xl text-primary">Life at S.E.A.T.S Inc.</h2>
          <p className="mt-1 text-sm text-muted">ជីវិតនៅ S.E.A.T.S Inc.</p>
          <PhotoGallery photos={GALLERY} />
        </div>
      </section>

      <SocialFeed posts={SOCIAL_POSTS} />

      {/* Company Intro: businesses, company goal, outbound banner */}
      <section id="company-intro" className="scroll-mt-20 bg-surface py-20">
        <div className="container-site">
          <h2 className="text-3xl text-primary">Our Businesses</h2>
          <p className="mt-2 max-w-2xl text-text">
            Each business plays an important role in creating value for our customers and society.
          </p>
          <div className="mt-10 grid gap-6 tablet:grid-cols-2 desktop:grid-cols-4">
            {BUSINESSES.map((b) => {
              const external = b.href.startsWith("http");
              return (
                <a
                  key={b.name}
                  href={b.href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-border transition-shadow hover:shadow-md"
                >
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={b.photo}
                      alt={b.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="relative -mt-9 mb-2 flex size-11 items-center justify-center overflow-hidden rounded-full bg-white p-1.5 shadow ring-1 ring-border">
                      <Image src={b.logo} alt="" fill className="object-contain" />
                    </div>
                    <h3 className="text-base font-bold text-primary">{b.name}</h3>
                    <p className="mt-2 flex-1 text-sm text-text">{b.text}</p>
                    <span className="mt-4 text-sm font-semibold text-primary">
                      Learn More <span aria-hidden>→</span>
                    </span>
                  </div>
                </a>
              );
            })}
          </div>

          <h3 className="mt-16 text-2xl text-heading">Company Goal</h3>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-text">
            {COMPANY_GOAL.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <div className="container-site mt-12">
          <a href={OUTBOUND_BANNER.href} target="_blank" rel="noopener noreferrer" className="relative block aspect-[2560/350] w-full">
            <Image src={OUTBOUND_BANNER.image} alt="S.E.A.T.S Inc." fill className="object-cover" />
          </a>
        </div>
      </section>

      <CtaApplyBand title="Are You Ready to Apply!" />

      {/* Recruit — the live open-positions preview, kept as the final section on the page */}
      <section id="recruit" className="scroll-mt-20 py-20">
        <div className="container-site text-center">
          <h2 className="text-3xl text-primary">Recruit</h2>
          <p className="mt-1 text-sm text-muted">ផ្នែកណាមួយដែរអ្នកចង់ ចូលរួមជាមួយយើង​ !</p>
          <OpenPositionsLive />
        </div>
      </section>
    </>
  );
}
