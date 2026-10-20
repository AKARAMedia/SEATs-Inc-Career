// Simple in-memory memoization with a time-to-live, scoped per warm isolate/process.
// Replaces Next's "use cache" + cacheLife() directives, which require the
// experimental cacheComponents flag — incompatible with the Cloudflare Workers
// runtime (its setTimeout semantics make Cache Components hang every request).
const store = new Map<string, { value: unknown; expiresAt: number }>();

export function withTtlCache<Args extends unknown[], T>(
  key: string,
  ttlMs: number,
  fn: (...args: Args) => Promise<T>,
): (...args: Args) => Promise<T> {
  return async (...args: Args) => {
    const cacheKey = args.length ? `${key}:${JSON.stringify(args)}` : key;
    const hit = store.get(cacheKey);
    if (hit && hit.expiresAt > Date.now()) return hit.value as T;
    const value = await fn(...args);
    store.set(cacheKey, { value, expiresAt: Date.now() + ttlMs });
    return value;
  };
}
