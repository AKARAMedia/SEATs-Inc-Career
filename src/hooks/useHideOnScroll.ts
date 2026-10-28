"use client";

import { useEffect, useState } from "react";

// `hidden` is true while the user is scrolling down past `offset` px; it flips back to false as soon
// as they scroll up (or return near the top). Small jitters under `tolerance` px are ignored.
// `atTop` is true while the page is within `topEdge` px of the top.
export function useHideOnScroll(offset = 120, tolerance = 6, topEdge = 24): { hidden: boolean; atTop: boolean } {
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = Math.max(window.scrollY, 0);
      setAtTop(y <= topEdge);
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
  }, [offset, tolerance, topEdge]);

  return { hidden, atTop };
}
