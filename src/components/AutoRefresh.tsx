"use client";

import { useRouter } from "next/navigation";
import { useVisibleInterval } from "@/hooks/useVisibleInterval";

// Re-renders the current page's server data on a timer (and when the tab comes back into view),
// so edits made in the admin panel show up without the visitor reloading. Client state such as a
// half-typed search or the scroll position is kept.
export default function AutoRefresh({ everyMs = 20_000 }: { everyMs?: number }) {
  const router = useRouter();
  useVisibleInterval(() => router.refresh(), everyMs);
  return null;
}
