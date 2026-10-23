export type JobsQuery = {
  page: number;
  limit: number;
  q?: string;
  department?: string;
  type?: string;
};

// Canonical /jobs URL: page and limit are always present, empty filters are left out.
export function jobsHref({ page, limit, q, department, type }: JobsQuery) {
  const params = new URLSearchParams({ page: String(page), limit: String(limit) });
  if (q) params.set("q", q);
  if (department) params.set("department", department);
  if (type) params.set("type", type);
  return `/jobs?${params}`;
}
