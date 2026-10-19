"use client";

import Image from "next/image";
import { useState } from "react";

export type PlaylistVideo = { title: string; youtubeId: string; duration: string; thumbnail: string };

export default function VideoPlaylist({ videos }: { videos: PlaylistVideo[] }) {
  const [active, setActive] = useState(0);
  const current = videos[active];

  return (
    <div className="grid gap-4 desktop:grid-cols-[320px_1fr]">
      <div className="overflow-hidden rounded-xl bg-white text-text">
        <div className="flex items-center justify-between border-b border-border px-4 py-2.5 text-sm font-semibold">
          <span>Playlist</span>
          <span className="text-muted">{videos.length} Videos</span>
        </div>
        <ul>
          {videos.map((v, i) => (
            <li key={v.youtubeId}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm ${i === active ? "bg-surface" : "hover:bg-surface"}`}
              >
                <span className="relative size-10 shrink-0 overflow-hidden rounded">
                  <Image src={v.thumbnail} alt="" fill className="object-cover" />
                </span>
                <span className="flex-1 truncate">{v.title}</span>
                <span className="text-xs text-muted">{v.duration}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="aspect-video overflow-hidden rounded-xl bg-black">
        <iframe
          key={current.youtubeId}
          src={`https://www.youtube.com/embed/${current.youtubeId}`}
          title={current.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="size-full"
        />
      </div>
    </div>
  );
}
