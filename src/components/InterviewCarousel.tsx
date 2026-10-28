"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Interview = { name: string; role: string; photo: string; quote: string };
type Bubble = { color: string; clip: string };

const AUTOPLAY_MS = 4000;
// -1 slides the cards left to right (shows the previous card each beat); 1 slides them right to left.
const AUTOPLAY_DIRECTION = -1;

// Cover-flow carousel: the active card sits centred at full size, its neighbours shrink, dim and
// tuck in behind it. Card markup is unchanged from the old scroll strip. Opens on `startName` and
// auto-advances one card at a time while on screen, pausing only while dragging or while keyboard
// focus is inside.
export default function InterviewCarousel({
  interviews,
  bubbles,
  startName,
}: {
  interviews: Interview[];
  bubbles: Bubble[];
  startName?: string;
}) {
  const count = interviews.length;
  const [active, setActive] = useState(() => Math.max(0, interviews.findIndex((i) => i.name === startName)));
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const dragX = useRef<number | null>(null);

  const go = (to: number) => setActive(((to % count) + count) % count);

  // Only autoplay while the carousel is on screen.
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.15 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Restarts the timer on every manual change, so a click or swipe gets a full beat before the next advance.
  useEffect(() => {
    if (paused || !inView || count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => {
      if (!document.hidden) setActive((a) => (a + AUTOPLAY_DIRECTION + count) % count);
    }, AUTOPLAY_MS);
    return () => window.clearTimeout(id);
  }, [active, paused, inView, count]);

  // Shortest signed distance from the active card, so the ring wraps around.
  const offsetOf = (i: number) => {
    let d = i - active;
    if (d > count / 2) d -= count;
    if (d < -count / 2) d += count;
    return d;
  };

  return (
    <div
      ref={rootRef}
      className="mt-10"
      // Keeps moving under the mouse and after a click; only pauses for keyboard focus so it's easy to read and operate.
      onFocus={(e) => setPaused(e.target.matches(":focus-visible"))}
      onBlur={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Team interviews"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(active - 1);
        if (e.key === "ArrowRight") go(active + 1);
      }}
    >
      <div
        className="grid touch-pan-y select-none items-stretch justify-items-center [--step:72%] tablet:[--step:80%]"
        onPointerDown={(e) => {
          dragX.current = e.clientX;
          setPaused(true);
        }}
        onPointerUp={(e) => {
          if (dragX.current === null) return;
          const dx = e.clientX - dragX.current;
          dragX.current = null;
          if (Math.abs(dx) > 40) go(active + (dx < 0 ? 1 : -1));
          setPaused(false);
        }}
        onPointerCancel={() => {
          dragX.current = null;
          setPaused(false);
        }}
      >
        {interviews.map((i, n) => {
          const bubble = bubbles[n % bubbles.length];
          const d = offsetOf(n);
          const dist = Math.abs(d);
          const isActive = d === 0;
          return (
            <figure
              key={i.name}
              aria-hidden={!isActive}
              onClick={() => !isActive && go(n)}
              className={`col-start-1 row-start-1 flex w-[78%] flex-col transition-[transform,opacity,filter] duration-500 ease-out motion-reduce:transition-none tablet:w-[340px] ${
                isActive ? "" : "cursor-pointer"
              }`}
              style={{
                transform: `translateX(calc(var(--step) * ${d})) scale(${Math.max(1 - dist * 0.16, 0.6)})`,
                opacity: dist > 2 ? 0 : isActive ? 1 : 0.55 - (dist - 1) * 0.2,
                filter: isActive ? "none" : "saturate(0.7)",
                zIndex: 10 - dist,
                pointerEvents: dist > 2 ? "none" : "auto",
              }}
            >
              <div className="relative aspect-square overflow-hidden shadow-lg">
                <Image src={i.photo} alt={i.name} fill draggable={false} className="object-cover object-top" />
              </div>

              <div className="relative z-10 -mx-2 -mt-14 flex-1">
                <div
                  aria-hidden
                  className="absolute -top-2 left-3 h-5 w-2/5 bg-white/30"
                  style={{ clipPath: "polygon(0 100%, 12% 0, 100% 40%, 96% 100%)" }}
                />
                <div
                  className="relative flex h-full flex-col px-6 pb-8 pt-7 text-white shadow-lg"
                  style={{ backgroundColor: bubble.color, clipPath: bubble.clip }}
                >
                  <span aria-hidden className="absolute right-5 top-3 font-heading text-4xl leading-none text-white/90">
                    &rdquo;
                  </span>
                  <span aria-hidden className="font-heading text-4xl leading-none text-white/90">
                    &ldquo;
                  </span>
                  <blockquote className="-mt-1 text-sm leading-relaxed desktop:text-[13px]">{i.quote}</blockquote>
                  <figcaption className="mt-4 border-t border-white/30 pt-3">
                    <span className="block font-semibold">{i.name}</span>
                    <span className="block text-[11px] font-bold uppercase tracking-wide text-white/80">{i.role}</span>
                  </figcaption>
                </div>
              </div>
            </figure>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(active - 1)}
          aria-label="Previous interview"
          className="grid size-10 place-items-center rounded-full bg-white text-heading shadow-soft ring-1 ring-border transition-colors hover:text-primary"
        >
          ←
        </button>
        <div className="flex items-center gap-2">
          {interviews.map((i, n) => (
            <button
              key={i.name}
              type="button"
              onClick={() => go(n)}
              aria-label={`Show ${i.name}`}
              aria-current={n === active}
              className={`h-2 rounded-full transition-all ${n === active ? "w-6 bg-primary" : "w-2 bg-border hover:bg-muted"}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(active + 1)}
          aria-label="Next interview"
          className="grid size-10 place-items-center rounded-full bg-white text-heading shadow-soft ring-1 ring-border transition-colors hover:text-primary"
        >
          →
        </button>
      </div>
    </div>
  );
}
