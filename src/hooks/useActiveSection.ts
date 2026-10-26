"use client";

import { useEffect, useState } from "react";

// Tracks which of the given section ids currently sits in the vertical middle of the
// viewport, for scroll-spy nav highlighting on a long one-page layout. Returns null if none
// of the ids exist on the current page (e.g. any route other than the merged homepage) —
// a safe no-op everywhere else.
export function useActiveSection(ids: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const elements = ids.flatMap((id) => {
      const el = document.getElementById(id);
      return el ? [[id, el] as const] : [];
    });
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const match = elements.find(([, el]) => el === entry.target);
            if (match) setActiveId(match[0]);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    elements.forEach(([, el]) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- `ids` should be a stable/memoized array; re-run only when its contents actually change
  }, [ids.join(",")]);

  return activeId;
}
