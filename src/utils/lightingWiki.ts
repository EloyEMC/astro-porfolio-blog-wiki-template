export const LIGHTING_WIKI_PREFIX = "/wiki/iluminacion/";

export const LIGHTING_WIKI_CATEGORIES = [
  "Fundamentals",
  "Quantities and measurement",
  "Colour and visual quality",
  "Photometry and optics",
  "LED and sources",
  "Luminaires and components",
  "Controls and connectivity",
  "Safety and protection",
  "Applications and design",
  "Standards and regulation",
] as const;

export const LIGHTING_WIKI_CATEGORY_LABELS: Record<(typeof LIGHTING_WIKI_CATEGORIES)[number], string> = {
  Fundamentals: "Fundamentos",
  "Quantities and measurement": "Magnitudes y medición",
  "Colour and visual quality": "Color y calidad visual",
  "Photometry and optics": "Fotometría y óptica",
  "LED and sources": "LED y fuentes",
  "Luminaires and components": "Luminarias y componentes",
  "Controls and connectivity": "Control y conectividad",
  "Safety and protection": "Seguridad y protección",
  "Applications and design": "Aplicaciones y diseño",
  "Standards and regulation": "Normas y regulación",
};

export function lightingWikiUrl(slug: string): string {
  return `${LIGHTING_WIKI_PREFIX}${slug.replace(/^\/+|\/+$/g, "")}/`;
}

export function lightingWikiLetter(title: string): string {
  return title.trim().charAt(0).toLocaleUpperCase("es-ES");
}

export function sortLightingWikiTerms<T extends { data: { title: string } }>(terms: T[]): T[] {
  return [...terms].sort((a, b) => a.data.title.localeCompare(b.data.title, "es", { sensitivity: "base" }));
}

export function normalizeLightingWikiSearchText(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("es-ES")
    .trim();
}

export function searchLightingWikiTerms<T extends { id: string; data: { title: string; shortDefinition: string; aliases?: string[]; category: string; draft?: boolean } }>(terms: T[], query: string): T[] {
  const normalizedQuery = normalizeLightingWikiSearchText(query);
  if (!normalizedQuery) return sortLightingWikiTerms(terms.filter((term) => !term.data.draft));
  return sortLightingWikiTerms(terms.filter((term) => {
    if (term.data.draft) return false;
    const haystack = normalizeLightingWikiSearchText([
      term.data.title,
      term.data.shortDefinition,
      term.data.category,
      ...(term.data.aliases ?? []),
    ].join(" "));
    return haystack.includes(normalizedQuery);
  }));
}

export function resolveRelatedTerms<T extends { id: string; data: { draft?: boolean } }>(termSlugs: string[] = [], terms: T[], currentSlug?: string): T[] {
  const termsBySlug = new Map(terms.filter((term) => !term.data.draft).map((term) => [term.id, term]));
  const seen = new Set<string>();
  return termSlugs.reduce<T[]>((related, slug) => {
    const normalizedSlug = slug.replace(/^\/+|\/+$/g, "");
    const term = termsBySlug.get(normalizedSlug);
    if (!term || normalizedSlug === currentSlug || seen.has(normalizedSlug)) return related;
    seen.add(normalizedSlug);
    related.push(term);
    return related;
  }, []);
}

export function resolveRelatedArticles<T extends { id: string; data: { draft?: boolean; date: Date } }>(articleSlugs: string[] = [], posts: T[]): T[] {
  const postsBySlug = new Map(posts.filter((post) => !post.data.draft && post.data.date <= new Date()).map((post) => [post.id, post]));
  const seen = new Set<string>();
  return articleSlugs.reduce<T[]>((related, slug) => {
    const post = postsBySlug.get(slug.replace(/^\/+|\/+$/g, ""));
    if (!post || seen.has(post.id)) return related;
    seen.add(post.id);
    related.push(post);
    return related;
  }, []);
}
