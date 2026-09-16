# Lighting Wiki Authoring Guide

This guide defines the content and linking contract for the standalone Spanish lighting wiki at `/wiki/iluminacion/`. The wiki is a reference surface, not a blog category: terms live in their own collection and route family while reusing the site's current editorial visual language.

## Quick path

1. Create one term entry in the wiki content collection.
2. Give it a stable slug, a short definition, aliases, category, sources, and related terms.
3. Add a local explanatory image with descriptive alt text and rights metadata.
4. Link relevant existing articles explicitly from the term entry.
5. Add contextual term links to articles only where the link improves understanding.
6. Run the build and link checks before publishing.

## Information architecture

| Surface | URL | Purpose |
|---|---|---|
| Wiki home | `/wiki/iluminacion/` | Search, category navigation, alphabetical index, featured terms |
| Term page | `/wiki/iluminacion/<slug>/` | Definition, visual explanation, related terms, related articles, sources |
| Wiki search | `/api/wiki-search.json` | Search terms without changing the existing blog search contract |

The wiki must remain separate from `/blog/<slug>/`, blog tags, and editorial post dates.

## Term content contract

Each term should provide, as applicable:

- `title`: public Spanish term title.
- `slug`: stable URL-safe identifier; do not change after publication without a redirect plan.
- `category`: one controlled wiki category.
- `shortDefinition`: one-sentence answer suitable for cards and search results.
- `aliases`: common Spanish, English, acronym, and trade names.
- `unit` and `symbol`: only when the term represents a measurable quantity.
- `body`: explanation in Spanish using headings, examples, and comparisons.
- `image`: local path to the main explanatory visual.
- `imageAlt`: precise description of what the image shows.
- `imageCaption`: context, not a repetition of the alt text.
- `imageCredit` and `imageRights`: required for third-party or authorized DiSano assets.
- `relatedTerms`: stable wiki slugs only.
- `relatedArticles`: stable blog slugs only.
- `sources`: authoritative references with publisher and URL.
- `faqs`: only questions that add search or comprehension value.
- `seoTitle`, `description`, and `keywords`: only when the default values are insufficient.

Definitions must distinguish near-neighbours. For example, a lumen is not a lux, a lamp is not a luminaire, and electrical power is not luminous output.

## Controlled categories

Use the smallest useful category set:

- Fundamentals
- Quantities and measurement
- Colour and visual quality
- Photometry and optics
- LED and sources
- Luminaires and components
- Controls and connectivity
- Safety and protection
- Applications and design
- Standards and regulation

Do not create a new category for a single term. Add a category only when it will contain multiple useful entries.

## Image policy

Use images to explain a concept, not merely to decorate a page.

### Preferred order

1. Codex-generated diagrams for abstract concepts such as lumen versus lux, beam angles, colour temperature, photometric curves, or DALI topology.
2. Original project diagrams and charts created for this site.
3. Authorized DiSano images for real product, installation, luminaire, or application examples when they materially improve understanding.

Store assets under a term-specific directory, for example:

```text
public/images/wiki/iluminacion/lux/
  lux-vs-lumen.webp
  lux-vs-lumen.svg
```

Every image needs:

- a stable descriptive filename;
- an accurate Spanish `alt` text;
- a caption when the visual needs interpretation;
- source/credit and rights basis in the term data or adjacent editorial metadata;
- a WebP or SVG version appropriate to the visual;
- sufficient contrast and legibility on mobile.

Do not hotlink remote images. Do not add an external image solely because it ranks well. The user's stated DiSano rights authorization applies to this project, but each asset should still record its origin and rights basis.

## Linking contract

### Term to article

Term pages should list only explicitly selected, genuinely relevant articles. A related article must explain, apply, compare, or use the term; sharing a tag is not enough.

### Article to term

Use an explicit Markdown link to the canonical term URL at the first useful contextual mention, or at the first mention after the introduction when the opening sentence must remain natural. Do not link every repeated occurrence.

Preferred form:

```markdown
La iluminancia se expresa en [lux](/wiki/iluminacion/lux/), no en lúmenes.
```

Link rules:

- link the smallest meaningful phrase;
- use the canonical term slug;
- do not link headings, image captions, code, existing links, or navigation text;
- do not link generic words when they do not refer to the technical concept;
- avoid more than one link to the same term in a short section;
- use the term page's defined wording for the first link where practical.

When revising existing articles, first generate a candidate list, then apply editorial judgement. Runtime auto-linking is not part of the content contract.

## Source and accuracy policy

Prefer primary or standards-based sources:

- CIE International Lighting Vocabulary for definitions and quantities.
- DALI Alliance and IEC 62386 material for DALI terminology.
- BOE and applicable Spanish technical regulations for legal requirements.
- UNE/EN/IEC standards where access and citation rights permit.
- Manufacturer documentation only for product-specific claims.

A term page must not present a local recommendation as a legal requirement. Regulations are jurisdictional and time-sensitive; include the jurisdiction and date when relevant.

## SEO and structured data

Every term page should have:

- one descriptive title;
- a unique meta description;
- canonical URL under `/wiki/iluminacion/`;
- breadcrumb data;
- a defined-term or glossary-compatible structured-data representation where supported;
- FAQ structured data only when the visible FAQ exists;
- links to related terms and articles;
- indexable content with no duplicate blog page.

The wiki index should expose categories and alphabetic navigation without generating thin duplicate pages for every filter state.

## Editorial checklist

Before a term is published:

- [ ] The definition answers “what is it?” in the first paragraph.
- [ ] Similar terms are explicitly distinguished.
- [ ] Units, symbols, ranges, or equations are checked where relevant.
- [ ] At least one practical example is included.
- [ ] Image alt text describes the visual meaningfully.
- [ ] Image origin, credit, and rights basis are recorded.
- [ ] Related terms are valid canonical slugs.
- [ ] Related articles are genuinely relevant canonical blog slugs.
- [ ] Sources are authoritative and linked.
- [ ] Article links use the canonical wiki URL and are not overused.
- [ ] The term is discoverable from the wiki index and search.
- [ ] `pnpm build` succeeds.

## Existing article migration

Article linking happens after the wiki foundation and initial term set are stable:

1. Search existing articles for exact terms and aliases.
2. Classify each match as technical, generic, or irrelevant.
3. Add one contextual link per useful section, normally the first technical occurrence.
4. Add the article slug to the relevant term's `relatedArticles` list.
5. Rebuild and check that no blog URL, anchor, or image was changed accidentally.
6. Record ambiguous matches for editorial review instead of forcing a link.

## Adding a future term

A contributor should be able to add a term by copying the term template, filling its schema, adding any local image, selecting relationships, and running the documented checks. If adding a term requires changing unrelated blog utilities, the implementation contract has been violated and should be revisited.
