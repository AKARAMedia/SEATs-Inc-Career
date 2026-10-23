import Image from "next/image";
import CtaApplyBand from "@/components/CtaApplyBand";
import { TELEGRAM_RECRUIT } from "@/lib/links";

const BUSINESSES = [
  {
    name: "S.E.A.T.S Inc.",
    logo: "/media/2022/10/full-logo.jpg",
    photo: "/media/2022/10/digital-interviews.jpg",
    text: "A Japanese company in Cambodia with diverse departments, businesses, and cultures. We work together to create a positive impact on Cambodian society.",
    href: "/company",
  },
  {
    name: "LOKA Food & Beverage",
    logo: "/media/2026/10/logo-loka.webp",
    photo: "/media/2026/10/loka-interviews.jpg",
    text: "Food import and wholesale business. We supply quality food and beverage products to local chains, supermarkets, hotels, and more.",
    href: "https://lokajapanesefoodsbeverage.com/",
  },
  {
    name: "S.E.A.T.S Farm",
    logo: "/media/2026/10/logo-seats-farm.webp",
    photo: "/media/2022/11/seatsfarm-interviews.jpg",
    text: "Agricultural production and development. We grow high-quality produce from Cambodia for local and global markets.",
    href: "https://seatsfarm.com/",
  },
  {
    name: "PISA Food Retail",
    logo: "/media/2026/10/logo-pisa.webp",
    photo: "/media/2026/10/pisa-retail.jpg",
    text: "Retail business of food and daily products. We bring quality products to more customers through our retail stores.",
    href: "https://seats-inc.com/pisa-food-retail/",
  },
];

const LIFE_GALLERY = [
  { src: "/media/2026/01/DSC03495-scaled.jpg", caption: "Team Collaboration" },
  { src: "/media/2026/10/gallery/training.webp", caption: "Training & Development" },
  { src: "/media/2026/10/gallery/cjcc-fair-mar-2026.webp", caption: "Recruitment Events" },
  { src: "/media/2026/10/gallery/company-party-1.webp", caption: "Company Celebrations" },
  { src: "/media/2026/10/gallery/company-party-2.webp", caption: "Team Building" },
  { src: "/media/2026/10/gallery/cjcc-job-fair-jan-2025.webp", caption: "Recruitment Events" },
];

export default function TeamPage() {
  return (
    <>
      <section className="container-site grid items-center gap-10 py-20 desktop:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Our Teams</p>
          <h1 className="mt-2 text-4xl text-heading desktop:text-5xl">Different Businesses, One Team</h1>
          <p className="mt-5 text-lg leading-relaxed text-text">
            We are a group of passionate people working together to create new value for Cambodia and beyond.
          </p>
          <a href={TELEGRAM_RECRUIT} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 inline-flex w-fit">
            Join Our Team <span aria-hidden>→</span>
          </a>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
          <Image src="/media/2026/10/team-photo-hero.jpg" alt="" fill priority className="object-cover" />
        </div>
      </section>

      <section className="bg-surface py-20">
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
        </div>
      </section>

      <section className="py-20">
        <div className="container-site">
          <h2 className="text-3xl text-primary">Life at S.E.A.T.S Inc.</h2>
          <p className="mt-1 text-sm text-muted">ជីវិតនៅ S.E.A.T.S Inc.</p>
          <p className="mt-2 max-w-2xl text-text">Take a look at our team activities, training, and daily work.</p>
          <div className="mt-10 grid gap-6 tablet:grid-cols-2 desktop:grid-cols-3">
            {LIFE_GALLERY.map((g) => (
              <figure key={g.src} className="group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-border">
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

      <CtaApplyBand title="Be Part of Our Team" />
    </>
  );
}
