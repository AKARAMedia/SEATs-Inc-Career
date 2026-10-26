import Image from "next/image";
import { FACEBOOK_PAGE, TELEGRAM_RECRUIT } from "@/lib/links";

export type SocialPost = {
  name: string;
  headline: string;
  caption: string;
  photo: string;
  href: string;
};

function FacebookIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

function TikTokIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16.6 2h-3.2v13.6a2.8 2.8 0 1 1-2.4-2.77V9.57a6 6 0 1 0 5.6 5.98V8.3a7.9 7.9 0 0 0 4.4 1.33V6.4a4.7 4.7 0 0 1-4.4-4.4Z" />
    </svg>
  );
}

export default function SocialFeed({ posts }: { posts: SocialPost[] }) {
  return (
    <section className="bg-surface py-20">
      <div className="container-site text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">— Our Stories &amp; Updates —</p>
        <h2 className="mt-3 text-3xl text-heading desktop:text-4xl">
          Get to Know <span className="text-logo-green">S.E.A.T.S Inc.</span>
        </h2>
        <p className="mt-3 text-lg text-text">Real people, helpful content, and updates from our team.</p>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-muted">
          Follow our social media to see our company culture, team activities, recruitment news, and helpful
          knowledge shared by our members.
        </p>

        <div className="mt-14 text-left">
          <div className="flex items-center gap-2">
            <FacebookIcon className="size-5 shrink-0 text-primary" />
            <h3 className="text-xl font-bold text-heading">Facebook Updates</h3>
          </div>
          <p className="mt-1 text-sm text-muted">Company news, activities, and knowledge sharing</p>
          <div className="mt-6 grid gap-6 tablet:grid-cols-2 desktop:grid-cols-4">
            {posts.map((post) => (
              <a
                key={post.href}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-border transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-2 px-4 pt-4">
                  <span className="relative size-7 shrink-0 overflow-hidden rounded-full ring-1 ring-border">
                    <Image src="/media/2022/10/full-logo.jpg" alt="" fill className="object-cover" />
                  </span>
                  <span className="flex-1 text-xs font-bold text-heading">SEATS Inc.</span>
                  <FacebookIcon className="size-4 shrink-0 text-primary" />
                </div>
                <div className="relative mt-3 aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={post.photo}
                    alt={post.name}
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <span className="text-sm font-bold text-heading">{post.headline}</span>
                  <span className="mt-1 line-clamp-2 flex-1 text-xs text-text">{post.caption}</span>
                  <span className="mt-3 text-xs font-semibold text-primary">View on Facebook →</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14 text-left">
          <div className="flex items-center gap-2">
            <TikTokIcon className="size-5 shrink-0 text-primary" />
            <h3 className="text-xl font-bold text-heading">TikTok Videos</h3>
          </div>
          <p className="mt-1 text-sm text-muted">Short videos about our people and daily work</p>
          {/* TikTok embed goes here once provided — https://developers.tiktok.com/doc/embed-videos */}
          <div className="mt-6 rounded-xl bg-white p-12 text-center shadow-sm ring-1 ring-border">
            <TikTokIcon className="mx-auto size-8 text-primary" />
            <p className="mt-3 font-bold text-heading">TikTok videos coming soon</p>
            <p className="mt-1 text-sm text-muted">Check back soon for short videos about our people and daily work.</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-center gap-4 tablet:flex-row">
          <a
            href={FACEBOOK_PAGE}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center gap-2"
          >
            <FacebookIcon className="size-4" /> Follow Us for More Updates <span aria-hidden>→</span>
          </a>
          <a
            href={TELEGRAM_RECRUIT}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Join Our Telegram Community <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
