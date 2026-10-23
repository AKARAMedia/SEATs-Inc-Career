import Image from "next/image";
import CtaApplyBand from "@/components/CtaApplyBand";

const TEAMS = [
  {
    name: "S.E.A.T.S Inc.",
    photo: "/media/2026/10/team-photo-hero.jpg",
    text: "S.E.A.T.S Inc. is a big family that consists of different departments, businesses, and cultures. Since we're a Japanese company based in Cambodia not only we shared our culture but to learn and thrived together as one to make an impact in Cambodia's society.",
  },
  {
    name: "LOKA Food&Beverage",
    photo: "/media/2026/10/loka-interviews.jpg",
    text: "LOKA is the food import wholesale business brand of Japanese trading company S.E.A.T.S Inc. and one of Cambodia's top food wholesalers. And our partnerships with primary local food and beverage chains, supermarkets, global hotel brands.",
  },
  {
    name: "S.E.A.T.S Farm",
    photo: "/media/2022/11/seatsfarm-interviews.jpg",
    text: "Delivering high quality products from Cambodia within the country and to the world. S.E.A.T.S Farm is an agricultural production development project undertaken by S.E.A.T.S Inc., a Japanese trading company in Cambodia.",
  },
  {
    name: "NOVA Marketing",
    photo: "/media/2022/10/digital-interviews.jpg",
    text: "NOVA Marketing was launched in May 2022 as a new business initiative under S.E.A.T.S Inc., focusing on digital marketing. We operate e-commerce brands importing food, beverages, and baby products from Japan, alongside media production and marketing strategy support to help brands grow their online presence.",
  },
];

export default function TeamPage() {
  return (
    <>
      <section className="bg-surface py-20">
        <div className="container-site">
          <h1 className="text-3xl text-primary">INTERVIEWS</h1>
          <p className="mt-1 text-sm text-muted">ការសម្ភាសន៍ ប្រធានគ្រប់គ្រង​ នីមួយៗក្នុងក្រុមហ៊ុន</p>
          <div className="mt-10 grid gap-6 desktop:grid-cols-2">
            {TEAMS.map((t) => (
              <div key={t.name} className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-border">
                <div className="relative h-64">
                  <Image src={t.photo} alt={t.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h2 className="text-lg font-bold text-primary">{t.name}</h2>
                  <p className="mt-3 text-sm text-text">{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaApplyBand />
    </>
  );
}
