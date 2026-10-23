"use client";

import Image from "next/image";
import { useState } from "react";

export type PlaylistVideo = { title: string; youtubeId: string; duration: string; thumbnail: string };

export default function VideoPlaylist({ videos }: { videos: PlaylistVideo[] }) {
  const [active, setActive] = useState(0);
  const current = videos[active];

  return (
    <div className="grid gap-4 desktop:grid-cols-[360px_1fr]">
      <div className="order-2 overflow-hidden rounded-xl bg-white text-text desktop:order-1">
        <div className="flex items-center justify-between border-b border-border px-4 py-3 text-sm font-semibold">
          <span>Playlist</span>
          <span className="text-muted">{videos.length} Videos</span>
        </div>
        <ul className="max-h-[420px] overflow-y-auto">
          {videos.map((v, i) => (
            <li key={v.youtubeId}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className={`flex w-full items-center gap-3 border-l-4 px-4 py-3 text-left text-sm transition-colors ${
                  i === active ? "border-primary bg-surface" : "border-transparent hover:bg-surface"
                }`}
              >
                <span className="relative aspect-video w-24 shrink-0 overflow-hidden rounded-md shadow-sm">
                  <Image src={v.thumbnail} alt="" fill className="object-cover" sizes="96px" />
                </span>
                <span className="flex-1">
                  <span className={`line-clamp-2 ${i === active ? "font-semibold text-primary" : ""}`}>{v.title}</span>
                  <span className="mt-0.5 block text-xs text-muted">{v.duration}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="order-1 desktop:order-2">
        <div className="aspect-video overflow-hidden rounded-xl bg-black shadow-lg">
          <iframe
            key={current.youtubeId}
            src={`https://www.youtube.com/embed/${current.youtubeId}`}
            title={current.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="size-full"
          />
        </div>
        <p className="mt-3 text-lg font-semibold">{current.title}</p>
      </div>
    </div>
  );
}
