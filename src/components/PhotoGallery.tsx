import Image from "next/image";
import type { GalleryPhoto } from "@/content/home";

export default function PhotoGallery({ photos }: { photos: GalleryPhoto[] }) {
  return (
    <div className="mt-10 grid gap-6 tablet:grid-cols-2 desktop:grid-cols-3">
      {photos.map((g) => (
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
  );
}
