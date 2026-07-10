export function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function normalizeCode(source: string) {
  const value = source.replace(/^\uFEFF/, "").trim();
  const fenced = value.match(/^```[^\n]*\n([\s\S]*?)\n```$/);
  return fenced?.[1] ?? value;
}
