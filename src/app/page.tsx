import Image from "next/image";
import { TELEGRAM_RECRUIT } from "@/lib/links";
import CtaApplyBand from "@/components/CtaApplyBand";

const INTERVIEWS = [
  {
    name: "Kimleng Chea",
    role: "DIGITAL PROMOTION",
    photo: "/media/2023/03/interviews-kimleng-1.jpg",
    quote:
      "I've been working at S.E.A.T.S Inc., for 2 years above, I'm a Digital Representative of BOSBA which serve Frozen&Dried items to Consumer. I love the working environment in here it's very valuable to the employer as me. In here, Company give a chance to move forward into a new role to develop yourselves. In the every Kick-off Company suggest to all member who willing to develop any skills can be request.",
  },
  {
    name: "Phatya Seng",
    role: "SALE PROMOTION & ADMIN",
    photo: "/media/2023/03/interviews-pathaya.jpg",
    quote:
      "About 6 years 3 months and I can say that our working environment seem like home, 2nd home. I can enjoy during working, but support and guiding eachother to make our company grow up and ourselves too. Base on my position, Sale and Promotion Admin, I have more opportunities to know and learn both from customers.",
  },
  {
    name: "Linda Ny",
    role: "OPERATION CONTROL",
    photo: "/media/2023/03/interviews-linda.jpg",
    quote:
      "I've been working here around 1 year and a half. I enjoy working here with everyone, especially my team they're so friendly and helpful. Fun, Challenging and you need to be flexible all the times. Everyone here has an opportunity to take on new challenges and learn more things this can look like a new role with more responsibilities and sometimes they could learn by following the action policies of the company.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative flex h-[520px] items-center">
        <Image src="/media/2026/01/DSC03495-scaled.jpg" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/35" />
        <div className="container-site relative text-white">
          <h1 className="text-4xl desktop:text-5xl">Careers - at S.E.A.T.S Inc.</h1>
          <p className="mt-2 text-xl">Learn and earn, together</p>
          <a href={TELEGRAM_RECRUIT} target="_blank" rel="noopener noreferrer" className="btn-outline mt-6 w-fit">
            Join Talent Community
          </a>
        </div>
      </section>

      <section className="container-site grid items-center gap-10 py-20 desktop:grid-cols-2">
        <div>
          <h2 className="text-3xl text-primary">Company Goal</h2>
          <div className="mt-4 space-y-4 text-text">
            <p>
              A decade ago, when I was cycling around Phnom Penh on a fresh Friday morning and I needed water, I
              looked for the best quality drinking water that I could find. I picked a well-known imported product.
              However, there was a constant disturbing thought coming to me, why can&rsquo;t Cambodia make an
              internationally well recognized quality water for our people?
            </p>
            <p>
              Since then, the idea was conceptualized and a team was formed to take on the mission. Right from the
              start, I was fortunate to have the support from a determined and highly qualified team who trusted me
              and our vision.
            </p>
            <p>We are proud of what we have accomplished. Vital has made its high standard recognized.</p>
          </div>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-full">
          <Image src="/media/2023/03/ceo-1.jpeg" alt="CEO" fill className="object-cover" />
        </div>
      </section>

      <section className="bg-gradient-to-b from-sky-100 to-white py-20">
        <div className="container-site grid gap-10 desktop:grid-cols-2">
          <div>
            <h3 className="text-2xl text-heading">Vision</h3>
            <p className="mt-3 text-text">Keep generating something new for the happiness of all stakeholders.</p>
          </div>
          <div>
            <h3 className="text-2xl text-heading">Mission</h3>
            <p className="mt-3 text-text">
              From Cambodia to the World, With US
              <br />
              Create the Product, Service and People competitive in the World.
            </p>
          </div>
        </div>
      </section>

      <section className="container-site py-20">
        <h2 className="text-3xl text-primary">Interviews</h2>
        <p className="mt-1 text-sm text-muted">សម្ភាសន៍ សមាជិករបស់យើង !</p>
        <div className="mt-8 grid gap-6 desktop:grid-cols-3">
          {INTERVIEWS.map((i) => (
            <div key={i.name} className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-border">
              <div className="relative h-44">
                <Image src={i.photo} alt={i.name} fill className="object-cover" />
              </div>
              <div className="p-5">
                <p className="text-xs font-bold uppercase text-primary">{i.role}</p>
                <p className="font-semibold text-heading">{i.name}</p>
                <p className="mt-3 text-sm text-text">{i.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaApplyBand />
    </>
  );
}
