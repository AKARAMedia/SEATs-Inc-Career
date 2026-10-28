import Image from "next/image";
import type { GalleryPhoto } from "@/content/home";

export default function PhotoGallery({ photos }: { photos: GalleryPhoto[] }) {
  return (
    <div className="mt-10 grid gap-6 tablet:grid-cols-2 desktop:grid-cols-3">
      {photos.map((g) => (
        <figure key={g.src} className="group relative aspect-[3/2] overflow-hidden rounded-2xl bg-navy shadow-soft">
          <Image
            src={g.src}
            alt={g.caption}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Darkens the bottom so the white caption stays readable on any photo. */}
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <figcaption className="absolute inset-x-0 bottom-0 p-4 font-heading text-base font-bold leading-tight text-white">
            {g.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
