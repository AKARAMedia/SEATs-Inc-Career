// Department names are the exact values offered in the seats-inc.com admin's Department dropdown.
const DEPARTMENT_LOGOS: Record<string, { src: string; label: string }> = {
  "nova marketing": { src: "/media/2026/10/dept-nova.webp", label: "NOVA Marketing" },
  lokajapanesefoodsbeverage: { src: "/media/2026/10/dept-loka.webp", label: "LOKA Japanese Foods & Beverage" },
  "seats inc": { src: "/media/2026/10/dept-seats-inc.webp", label: "S.E.A.T.S Inc." },
  "seats farm": { src: "/media/2026/10/dept-seats-farm.webp", label: "S.E.A.T.S Farm" },
  "pisa food retail": { src: "/media/2026/10/dept-pisa.webp", label: "PISA Food Retail" },
  "select store sora": { src: "/media/2026/10/dept-sora.webp", label: "SELECT STORE SORA" },
};

// Every department an admin can pick, whether or not a job currently uses it
export const DEPARTMENTS = Object.entries(DEPARTMENT_LOGOS).map(([value, { label }]) => ({ value, label }));

export function departmentLogo(department: string) {
  return DEPARTMENT_LOGOS[department.trim().toLowerCase()] ?? null;
}
