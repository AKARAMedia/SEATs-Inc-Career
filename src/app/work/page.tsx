import Image from "next/image";
import Link from "next/link";
import CtaApplyBand from "@/components/CtaApplyBand";
import VideoPlaylist from "@/components/VideoPlaylist";

const JOB_ANNOUNCEMENTS = [
  { title: "Product Development (Agribusiness)", slug: "product-development-agribusiness" },
  { title: "Representative of Sales", slug: "representative-of-sales-and-order-management" },
  { title: "Supervisor of Operations", slug: "supervisor-of-operations" },
  { title: "Copywriter", slug: "copywriter" },
  { title: "Freelance Sales and Marketing Advisor", slug: "freelance-sales-and-marketing-advisor-2" },
];

const VIDEOS = [
  { title: "How to improve productivity?", youtubeId: "Smppx4YojC0", duration: "0:16", thumbnail: "/media/2022/11/7.jpg" },
  { title: "2 Strong Ownership | Four Mindsets /S.E.A.T.S Inc.", youtubeId: "awxKg04t5Ag", duration: "0:16", thumbnail: "/media/2022/11/2-1.jpg" },
  { title: "3 Learning Flexibly | Four Mindsets /S.E.A.T.S Inc.", youtubeId: "p6APtqh6JCg", duration: "0:16", thumbnail: "/media/2022/11/3.jpg" },
  { title: "4 One For All | Four Mindsets /S.E.A.T.S Inc.", youtubeId: "r77ewf-3Wu4", duration: "0:16", thumbnail: "/media/2022/11/4.jpg" },
];

export default function WorkPage() {
  return (
    <>
      <section className="container-site grid items-center gap-10 py-20 desktop:grid-cols-2">
        <div>
          <h1 className="text-3xl text-primary">Mission</h1>
          <p className="text-sm text-muted">បេសកកម្ម របស់យើង !</p>
          <h2 className="mt-6 text-2xl text-heading">
            For Growth, Changes, Challenges, &amp; For US With S.E.A.T.S Inc.
          </h2>
          <div className="mt-4 space-y-4 text-text">
            <p>
              We provide an environment and an opportunity to those that seek challenges to further improvement of
              their better selves.
            </p>
            <p>
              Our mission is to raise potential members which we believed that everyone got the potential and what
              they needed are the key to unlock those.
            </p>
          </div>
        </div>
        <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-surface">
          <Image src="/media/2022/10/Our-Mission.png" alt="" fill className="object-contain p-10" />
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container-site text-center">
          <h2 className="text-3xl text-primary">Jobs Announcements</h2>
          <p className="mt-1 text-sm text-muted">ផ្នែកណាមួយដែរអ្នកចង់ ចូលរួមជាមួយយើង​ !</p>
          <div className="mx-auto mt-10 grid max-w-3xl gap-5 text-left desktop:grid-cols-2">
            {JOB_ANNOUNCEMENTS.map((job) => (
              <Link
                key={job.slug}
                href={`/jobs/${job.slug}`}
                className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-border transition-shadow hover:shadow-md"
              >
                <p className="font-bold text-primary">{job.title}</p>
                <p className="mt-2 text-sm text-text">If you&rsquo;re interested, please click for more information or apply now!</p>
              </Link>
            ))}
          </div>
          <Link
            href="/jobs"
            className="mt-10 inline-flex items-center justify-center rounded-full border border-primary px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            READ MORE <span aria-hidden className="ml-1.5">→</span>
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
