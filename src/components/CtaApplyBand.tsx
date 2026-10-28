import Image from "next/image";
import Link from "next/link";

export default function CtaApplyBand({ title = "Are you Ready to Apply !" }: { title?: string }) {
  return (
    <div className="container-site py-16">
      <div className="reveal grid overflow-hidden rounded-3xl shadow-lift desktop:grid-cols-2">
        <div className="relative h-56 desktop:h-auto">
          <Image src="/media/2024/05/joint-with-us.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="flex flex-col justify-center gap-4 bg-gradient-to-br from-primary to-navy px-8 py-12 text-white desktop:px-12">
          <h2 className="text-3xl text-white">{title}</h2>
          <p className="text-sm text-white/80">សូមចុចទីនេះដើម្បីដាក់ពាក្យធ្វើការ</p>
          <Link href="/jobs" className="btn-outline w-fit">
            SEARCH JOBS <span aria-hidden className="ml-1.5">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
