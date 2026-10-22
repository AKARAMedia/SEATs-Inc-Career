const DAY_MS = 24 * 60 * 60 * 1000;

export function daysSince(iso: string) {
  return Math.max(0, Math.floor((Date.now() - new Date(iso).getTime()) / DAY_MS));
}

// "Posted 1 week ago" style label
export function postedLabel(iso: string) {
  const days = daysSince(iso);
  const plural = (n: number, unit: string) => `${n} ${unit}${n === 1 ? "" : "s"} ago`;
  if (days < 1) return "Posted today";
  if (days < 7) return `Posted ${plural(days, "day")}`;
  if (days < 30) return `Posted ${plural(Math.floor(days / 7), "week")}`;
  if (days < 365) return `Posted ${plural(Math.floor(days / 30), "month")}`;
  return `Posted ${plural(Math.floor(days / 365), "year")}`;
}
