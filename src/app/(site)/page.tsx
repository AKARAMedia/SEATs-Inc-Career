import Image from "next/image";
import Link from "next/link";
import { TELEGRAM_RECRUIT } from "@/lib/links";
import CtaApplyBand from "@/components/CtaApplyBand";
import SocialFeed from "@/components/SocialFeed";
import PhotoGallery from "@/components/PhotoGallery";
import BenefitsGrid from "@/components/BenefitsGrid";
import HeroTitle from "@/components/HeroTitle";
import InterviewCarousel from "@/components/InterviewCarousel";
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
      <section id="top" className="relative flex min-h-screen items-center overflow-hidden pb-28 pt-24 tablet:pb-0">
        <Image src={HERO.photo} alt="" fill priority className="hero-kenburns object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/45 to-navy/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
        <div className="container-site relative text-white">
          <span className="hero-in inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur">
            <span aria-hidden className="size-2 rounded-full bg-logo-green" />
            Now hiring
          </span>
          <HeroTitle text={HERO.title} className="mt-5 max-w-2xl text-4xl leading-tight tracking-tight text-white desktop:text-6xl" />
          <p style={{ "--hero-delay": "0.3s" } as React.CSSProperties} className="hero-in mt-5 max-w-xl text-lg leading-relaxed text-white/90">{HERO.text}</p>
          <div style={{ "--hero-delay": "0.45s" } as React.CSSProperties} className="hero-in mt-8 flex flex-wrap gap-4">
            <Link href="/jobs" className="btn-primary">
              Explore Jobs <span aria-hidden>→</span>
            </Link>
            <a href={TELEGRAM_RECRUIT} target="_blank" rel="noopener noreferrer" className="btn-outline">
              Join Talent Community
            </a>
          </div>
        </div>

        <a
          href="#ceo-message"
          aria-label="Scroll down"
          style={{ "--hero-delay": "1.2s" } as React.CSSProperties}
          className="hero-in group absolute inset-x-0 bottom-8 mx-auto flex w-fit flex-col items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/80 hover:text-white"
        >
          <span
            aria-hidden
            className="relative block h-12 w-[30px] rounded-full border-2 border-white/60 bg-white/5 shadow-[0_0_0_6px_rgb(255_255_255/0.06)] backdrop-blur-sm transition-[border-color,box-shadow] duration-300 group-hover:border-white group-hover:shadow-[0_0_0_10px_rgb(255_255_255/0.1)]"
          >
            <span className="scroll-wheel absolute left-1/2 top-2.5 h-2.5 w-1 -translate-x-1/2 rounded-full bg-logo-green" />
          </span>
          {/* Label hidden on phones, where it would collide with the floating Apply Now button. */}
          <span className="hidden tablet:block">Scroll down</span>
        </a>
      </section>

      {/* CEO Message */}
      <section id="ceo-message" className="container-site scroll-mt-20 py-24">
        <div className="reveal grid gap-12 desktop:grid-cols-[360px_1fr] desktop:items-center">
          <div className="mx-auto w-full max-w-[360px]">
            {/* Polaroid-style photo: white print frame with the name on the bottom strip, pinned on. */}
            <div className="group relative px-4 py-8">
              <figure className="relative -rotate-2 rounded-sm bg-white p-3 pb-4 shadow-[0_24px_50px_-12px_rgb(14_24_43/0.45)] transition-transform duration-500 group-hover:rotate-0">
                {/* Push pin: glossy head with a highlight, a soft cast shadow on the print, and the needle going in. */}
                <span aria-hidden className="absolute -top-3 left-1/2 z-10 block size-7 -translate-x-1/2">
                  <span className="absolute left-[42%] top-[58%] h-2.5 w-4 rotate-[-18deg] rounded-full bg-black/30 blur-[3px]" />
                  <span className="absolute left-1/2 top-1/2 h-3 w-0.5 -translate-x-1/2 rounded-full bg-slate-400" />
                  <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_32%_28%,#ff9aa0_0%,#e5484d_38%,#a31d24_100%)] shadow-[0_3px_6px_rgb(0_0_0/0.35),inset_0_-2px_3px_rgb(0_0_0/0.25)]" />
                  <span className="absolute left-[24%] top-[20%] h-2 w-2.5 -rotate-[30deg] rounded-full bg-white/70 blur-[1px]" />
                </span>
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface ring-1 ring-black/5">
                  <Image src={CEO_MESSAGE.photo} alt={CEO_MESSAGE.name} fill sizes="(min-width: 1025px) 340px, 90vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
                </div>
                <figcaption className="relative mt-4 px-1 pr-14">
                  <p className="font-heading text-lg font-bold leading-tight text-navy">{CEO_MESSAGE.name}</p>
                  <p className="mt-0.5 text-sm font-medium text-primary">{CEO_MESSAGE.title}</p>
                  <span aria-hidden className="mt-3 block h-1 w-12 rounded-full bg-gradient-to-r from-primary to-logo-green" />
                  <span aria-hidden className="absolute bottom-0 right-1 grid size-10 place-items-center rounded-full bg-primary font-heading text-2xl leading-none text-white shadow-md">
                    &ldquo;
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div>
            <p className="eyebrow">{CEO_MESSAGE.eyebrow}</p>
            <h2 className="mt-3 text-3xl tracking-tight text-navy desktop:text-4xl">{CEO_MESSAGE.heading}</h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-text">
              {CEO_MESSAGE.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            {/* Board below the message with the CEO's line written on it, tab label on top like a name plate. */}
            <div className="relative mt-7 rounded-xl bg-gradient-to-br from-primary to-[#0a5a94] px-4 pb-4 pt-6 text-white shadow-lift ring-1 ring-white/10">
              <span className="absolute -top-3 left-4 rounded-md bg-navy px-3 py-0.5 font-heading text-xs font-bold tracking-wide text-white shadow-md">
                Our Belief:
              </span>
              <span aria-hidden className="absolute right-3 top-0 font-heading text-4xl leading-none text-white/15">
                &rdquo;
              </span>
              <p className="relative text-sm font-medium italic leading-relaxed text-white tablet:whitespace-nowrap">{CEO_MESSAGE.pullQuote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Desired Candidate Profile: testimonials, Japanese interns, benefits */}
      <section id="desired-candidate" className="relative scroll-mt-20 overflow-hidden bg-white py-24">
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
          <h2 className="section-title">
            Life at <span className="text-logo-green">S.E.A.T.S</span>
          </h2>
          <p className="mt-3 text-sm text-muted">សម្ភាសន៍ សមាជិករបស់យើង !</p>

          <InterviewCarousel interviews={INTERVIEWS} bubbles={BUBBLES} startName="Poch Bunthy" />

          <h3 className="section-title mt-16 text-2xl">Our Japanese and Internship Member</h3>
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
                  className="group flex w-1/2 flex-col items-center px-3 pb-8 text-center tablet:w-1/3 desktop:w-1/5"
                >
                  <div
                    className="relative size-28 overflow-hidden rounded-full shadow-soft ring-[5px] transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:scale-105 tablet:size-32 desktop:size-40"
                    style={{ "--tw-ring-color": bubble.color } as React.CSSProperties}
                  >
                    <Image src={intern.photo} alt={intern.name} fill sizes="(min-width: 1025px) 160px, 128px" className="object-cover object-top" />
                  </div>
                  <span className="mt-4 text-base font-bold text-heading">{intern.name}</span>
                  <span className="mt-0.5 max-w-[11rem] text-sm leading-snug text-muted">{intern.role}</span>
                </div>
              );
            })}
          </div>

          <h3 className="section-title mt-16 text-2xl">Why Build Your Career with S.E.A.T.S Inc.?</h3>
          <p className="mt-3 text-sm text-muted">Discover opportunities to learn, contribute, and grow with our team.</p>
          <BenefitsGrid items={BENEFITS} />
        </div>
      </section>

      {/* Life at S.E.A.T.S Inc.: gallery, social feed */}
      <section className="bg-surface py-24">
        <div className="container-site text-center">
          <h2 className="section-title">Life at S.E.A.T.S Inc.</h2>
          <p className="mt-3 text-sm text-muted">ជីវិតនៅ S.E.A.T.S Inc.</p>
          <PhotoGallery photos={GALLERY} />
        </div>
      </section>

      <SocialFeed posts={SOCIAL_POSTS} />

      {/* Company Intro: businesses, company goal, outbound banner */}
      <section id="company-intro" className="scroll-mt-20 bg-surface py-24">
        <div className="container-site">
          <h2 className="section-title">Our Businesses</h2>
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
                  className="card card-hover reveal group flex flex-col overflow-hidden"
                >
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={b.photo}
                      alt={b.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="relative -mt-9 mb-2 flex size-11 items-center justify-center overflow-hidden rounded-full bg-white p-1.5 shadow ring-1 ring-border">
                      <Image src={b.logo} alt="" fill className="object-contain" />
                    </div>
                    <h3 className="text-base font-bold" style={{ color: b.color }}>{b.name}</h3>
                    <p className="mt-2 flex-1 text-sm text-text">{b.text}</p>
                    <span className="mt-4 text-sm font-semibold text-primary">
                      Learn More <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </a>
              );
            })}
          </div>

          <h3 className="section-title mt-16 text-2xl">Company Goal</h3>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-text">
            {COMPANY_GOAL.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <div className="container-site mt-12">
          <a href={OUTBOUND_BANNER.href} target="_blank" rel="noopener noreferrer" className="relative block aspect-[2560/350] w-full overflow-hidden rounded-2xl shadow-soft transition-shadow hover:shadow-lift">
            <Image src={OUTBOUND_BANNER.image} alt="S.E.A.T.S Inc." fill className="object-cover" />
          </a>
        </div>
      </section>

      <CtaApplyBand title="Are You Ready to Apply!" />

      {/* Recruit — the live open-positions preview, kept as the final section on the page */}
      <section id="recruit" className="scroll-mt-20 py-24">
        <div className="container-site text-center">
          <h2 className="section-title">Recruit</h2>
          <p className="mt-3 text-sm text-muted">ផ្នែកណាមួយដែរអ្នកចង់ ចូលរួមជាមួយយើង​ !</p>
          <OpenPositionsLive />
        </div>
      </section>
    </>
  );
}
