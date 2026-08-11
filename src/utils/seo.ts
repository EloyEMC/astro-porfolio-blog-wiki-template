export function absoluteUrl(siteUrl: string, value: string): string {
  const baseUrl = siteUrl.replace(/\/+$/, "");
  if (value.startsWith("//")) return `https:${value}`;
  if (/^[a-z][a-z\d+.-]*:/i.test(value)) return value;
  return new URL(value, `${baseUrl}/`).href;
}
