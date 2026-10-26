"use client";

import { useEffect } from "react";

// Runs `callback` on an interval, but only while the tab is visible — also fires once
// immediately when the tab becomes visible again, so a backgrounded tab catches up right away
// instead of waiting out the rest of the interval.
export function useVisibleInterval(callback: () => void, everyMs: number) {
  useEffect(() => {
    const tick = () => {
      if (document.visibilityState === "visible") callback();
    };
    const timer = setInterval(tick, everyMs);
    document.addEventListener("visibilitychange", tick);
    return () => {
      clearInterval(timer);
      document.removeEventListener("visibilitychange", tick);
    };
  }, [callback, everyMs]);
}
