"use client";

import { useEffect, useState } from "react";

// True while the user is scrolling down past `offset` px; flips back to false as soon as they
// scroll up (or return near the top). Small jitters under `tolerance` px are ignored.
export function useHideOnScroll(offset = 120, tolerance = 6): boolean {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = Math.max(window.scrollY, 0);
      if (y <= offset) {
        setHidden(false);
      } else if (Math.abs(y - lastY) >= tolerance) {
        setHidden(y > lastY);
      }
      if (Math.abs(y - lastY) >= tolerance || y <= offset) lastY = y;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [offset, tolerance]);

  return hidden;
}
