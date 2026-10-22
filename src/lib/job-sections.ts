export type SectionKind = "overview" | "responsibilities" | "requirements" | "priority" | "benefits";

export type JobSection = { kind: SectionKind; html: string };

const HEADINGS: Record<string, SectionKind> = {
  overview: "overview",
  "job overview": "overview",
  summary: "overview",
  "job summary": "overview",
  responsibilities: "responsibilities",
  qualification: "requirements",
  qualifications: "requirements",
  requirement: "requirements",
  requirements: "requirements",
  priority: "priority",
  benefit: "benefits",
  benefits: "benefits",
};

const PARAGRAPH = /<p\b[^>]*>[\s\S]*?<\/p>/gi;

function plainText(html: string) {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Job descriptions are free-form HTML where each part starts with a bold paragraph such as
// "<p><b>Responsibilities:</b></p>". Split on those so the page can lay the parts out separately.
// Anything before the first heading is treated as the overview.
export function splitJobDescription(html: string): JobSection[] {
  const marks: { kind: SectionKind; start: number; end: number }[] = [];
  for (const m of html.matchAll(PARAGRAPH)) {
    if (!/<(b|strong)\b/i.test(m[0])) continue;
    const kind = HEADINGS[plainText(m[0]).replace(/\s*:$/, "").toLowerCase()];
    if (kind) marks.push({ kind, start: m.index, end: m.index + m[0].length });
  }

  const sections: JobSection[] = [];
  const add = (kind: SectionKind, body: string) => {
    if (!plainText(body)) return;
    const existing = sections.find((s) => s.kind === kind);
    if (existing) existing.html += body;
    else sections.push({ kind, html: body });
  };

  add("overview", html.slice(0, marks[0]?.start ?? html.length));
  marks.forEach((mark, i) => add(mark.kind, html.slice(mark.end, marks[i + 1]?.start ?? html.length)));
  return sections;
}
