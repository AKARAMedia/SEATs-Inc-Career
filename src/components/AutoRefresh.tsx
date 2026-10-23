"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Re-renders the current page's server data on a timer (and when the tab comes back into view),
// so edits made in the admin panel show up without the visitor reloading. Client state such as a
// half-typed search or the scroll position is kept.
export default function AutoRefresh({ everyMs = 20_000 }: { everyMs?: number }) {
  const router = useRouter();

  useEffect(() => {
    const refresh = () => {
      if (document.visibilityState === "visible") router.refresh();
    };
    const timer = setInterval(refresh, everyMs);
    document.addEventListener("visibilitychange", refresh);
    return () => {
      clearInterval(timer);
      document.removeEventListener("visibilitychange", refresh);
    };
  }, [router, everyMs]);

  return null;
}
