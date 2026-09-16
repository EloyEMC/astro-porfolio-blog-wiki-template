import { getCollection } from "astro:content";
import { searchLightingWikiTerms, lightingWikiUrl } from "../../utils/lightingWiki";

export async function GET({ url }: { url: URL }) {
  const terms = await getCollection("lightingWiki");
  const results = searchLightingWikiTerms(terms, url.searchParams.get("q") ?? "");

  return new Response(JSON.stringify(results.map((term) => ({
    title: term.data.title,
    description: term.data.shortDefinition,
    category: term.data.category,
    aliases: term.data.aliases,
    slug: term.id,
    url: lightingWikiUrl(term.id),
  }))), { headers: { "Content-Type": "application/json; charset=utf-8" } });
}
