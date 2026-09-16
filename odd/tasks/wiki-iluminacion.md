# Lighting Wiki

## Objective
Create a separate `/wiki/iluminacion/` knowledge surface that uses the current site's visual language, explains lighting terms with original or authorized explanatory images, connects terms to related articles, and connects existing/future articles back to relevant terms.

## Problem
The site currently stores editorial posts in one `blog` collection. It has no structured glossary/wiki model, term-specific routes, term search, image conventions, or controlled bidirectional linking between reference terms and articles.

## Why
A dedicated lighting wiki should serve both high-intent practical searches and professional technical vocabulary without mixing reference entries into the editorial blog taxonomy. It should become a durable internal-linking and topical-authority layer.

## Scope
- Add a separate lighting wiki content model and `/wiki/iluminacion/` routes.
- Reuse the current editorial shell and visual system.
- Add term index, categories, alphabetical navigation, search, related terms, and related articles.
- Add documented image conventions for local original diagrams and authorized DiSano assets.
- Seed the first core lighting terms with explanatory visuals.
- Add a controlled, explicit linking convention for articles and update existing articles after the wiki foundation exists.
- Document authoring, SEO, linking, image, and review workflows.

## Constraints
- Keep wiki content separate from `blog` collection and `/blog/:slug/` routes.
- Preserve existing article routes and visual behavior.
- Avoid automatic linking of every lexical match; use controlled links or an explicit authoring mechanism.
- Store images locally with descriptive alt text and source/rights metadata.
- Prefer Codex-generated explanatory diagrams for abstract concepts; use authorized DiSano assets for real product examples when they add value.
- Technical artifacts and repository documentation use English unless project conventions require otherwise; public wiki copy follows the site's Spanish editorial language.
- Do not copy external imagery without verified permission; DiSano assets may be used when covered by the user's stated rights.

## Tasks

### WIKI-001 — Document the wiki contract and authoring workflow
- [x] Define content schema, route structure, categories, term template, image metadata, source citation, SEO fields, and related-article conventions.
- [x] Document how future terms and article links are created and reviewed.
- [x] Add a project-facing implementation guide and maintain this feature document.

Evidence: `docs/lighting-wiki.md` documents the standalone route model, term contract, category taxonomy, Codex/DiSano image policy, controlled bidirectional linking, source policy, SEO, migration workflow, and contributor checklist.

### WIKI-002 — Build the independent wiki foundation
- [x] Add a separate collection/model for lighting terms.
- [x] Add `/wiki/iluminacion/` index and term routes.
- [x] Reuse the current editorial layout and add scoped wiki components/styles.
- [x] Add breadcrumbs, alphabet/category navigation, canonical metadata, and structured data.

Evidence: `src/content.config.ts`, `src/pages/wiki/iluminacion/`, `src/components/LightingWiki*.astro`, `src/utils/lightingWiki.ts`, `src/styles/redesign.css`, and `src/components/Sidebar.astro`. `pnpm build` passed with only the expected empty-collection warnings; `git diff --check` passed.

### WIKI-003 — Add term discovery and relationships
- [x] Add wiki search and index data without regressing blog search.
- [x] Render related terms and related articles from explicit metadata.
- [x] Add stable relationship utilities and empty-state behavior.

Evidence: `src/pages/api/wiki-search.json.ts`, `src/utils/lightingWiki.ts`, the wiki index, and term route. `pnpm build` passed with 64 pages and expected empty-collection warnings; `git diff --check` passed.

### WIKI-004 — Seed the initial lighting dictionary
- [x] Add the initial core terms: luz, iluminación, lámpara, bombilla, luminaria, LED, lumen, lux, candela, luminancia, temperatura de color, CRI, UGR, IP, DALI, and fotometría.
- [x] Add clear Spanish definitions, units, examples, distinctions, sources, FAQs where useful, and explanatory images.
- [x] Generate conceptual diagrams with the Codex worker where appropriate; use authorized DiSano imagery for product/context examples where appropriate.
- [x] Record image origin, rights basis, alt text, and captions for each asset.

Evidence: 16 Spanish term entries under `src/content/wiki/iluminacion/` and 16 original local SVG diagrams under `public/images/wiki/iluminacion/`. No external images or hotlinks were added. `pnpm build` passed with 80 pages; `git diff --check` passed; a parent audit confirmed 16 terms, 16 SVGs, and required image metadata.

### WIKI-005 — Link and revise existing articles
- [x] Detect relevant term occurrences in existing articles.
- [x] Add controlled contextual links without overlinking generic words.
- [x] Add related-article metadata to wiki entries.
- [x] Document the convention for future articles.

Evidence: 18 controlled canonical wiki links were added across the 11 Spanish lighting-category articles. Wiki `relatedArticles` metadata was corrected to exact Astro IDs and reciprocal validity; parent normalized two missing trailing slashes in photometry links. Relationship audit found 0 invalid term/article references; `pnpm build` and `git diff --check` passed.

### WIKI-007 — Professional visual and editorial correction
- [x] Fix wiki body contrast and typography against the dark editorial background.
- [x] Replace placeholder-like SVGs with polished, legible Codex-generated explanatory diagrams.
- [x] Review Spanish term copy, headings, captions, and image metadata for professional clarity.
- [x] Rebuild and recheck the rendered production-facing routes before redeploying.

Evidence: scoped wiki prose styles now use high-contrast paper/gold colors; all 16 SVGs were replaced with structured diagrams containing accessible `<title>`/`<desc>`; image credits are rendered; the content audit found stable slugs and local image references. `pnpm build` passed with 80 pages and `git diff --check` passed. An accidental empty `./ ` path was removed before staging.

### WIKI-006 — Verify and close
- [x] Run the configured build and focused structural checks.
- [x] Verify routes, search, sitemap/canonical output, images, links, and no broken blog behavior.
- [x] Record all observed checks, failures, skips, and remaining follow-ups.

Evidence: final read-only verification passed `pnpm build` (80 pages), `git diff --check`, the structural audit (16 entries, 16 SVGs, 0 invalid IDs, 11 migrated articles, 0 non-canonical wiki URLs), and generated-route checks (wiki index, 16 term routes, both search APIs). Browser/accessibility and semantic editorial review were not run.

## Acceptance criteria
- `/wiki/iluminacion/` is discoverable from the site's main navigation and visually belongs to the current design.
- Every seeded term has a stable URL, definition, related terms/articles, sources, and accessible image treatment where applicable.
- Wiki content is not incorrectly treated as a blog post, tag, or draft.
- Blog articles can link to terms using the documented convention, and term pages expose related articles.
- Search and navigation work for wiki terms without breaking existing article search.
- `pnpm build` succeeds and generated routes/assets contain no broken references.
- Documentation is sufficient for another contributor to add a term and update article links without reverse-engineering implementation details.

## Verification evidence
- WIKI-001: `docs/lighting-wiki.md` created and reviewed.
- WIKI-002: `pnpm build` passed; `git diff --check` passed; parent spot-checked collection schema, index route, term route, and wiki utilities.
- WIKI-003: `pnpm build` passed with 64 pages; `git diff --check` passed; parent spot-checked search API, relationship utilities, and term route.
- WIKI-004: `pnpm build` passed with 80 pages; `git diff --check` passed; parent audited 16 term files, 16 SVGs, source links, and required image metadata.
- WIKI-005: `pnpm build` passed with 80 pages; `git diff --check` passed; parent audited 18 canonical article links and 0 invalid relationship references.
- WIKI-006: final structural verification passed; browser/accessibility and semantic editorial review remain skipped.
- WIKI-007: `pnpm build` passed with 80 pages; `git diff --check` passed; 16 SVG accessibility/content references audited successfully.

## Progress
- Exploration complete: existing Astro layouts, blog collection, search API, SEO components, image conventions, and integration constraints mapped.
- Product decisions confirmed: separate wiki surface; route prefix `/wiki/iluminacion/`; local explanatory images allowed; Codex-generated diagrams preferred for concepts; DiSano assets may be used under user-provided rights.
- WIKI-001 complete: the authoring and implementation contract is documented in `docs/lighting-wiki.md`.
- WIKI-002 complete: the independent empty wiki foundation builds and is linked from the sidebar.
- WIKI-003 complete: isolated wiki search and explicit term/article relationship rendering are implemented.
- WIKI-004 complete: the first 16 terms and original explanatory SVG visuals are published in the content tree.
- WIKI-005 complete: selected lighting articles now link contextually to canonical wiki terms and term metadata is reciprocal.
- WIKI-006 complete: final build, route, image, search, relationship, and regression checks passed.
- WIKI-007 complete: the screenshot findings were addressed with scoped contrast fixes, professional SVG infographics, visible credits, and a content/accessibility audit.
- Current task: redeploy the correction and verify the live routes.

## Next step
Commit the correction, push `main`, wait for Cloudflare propagation, and verify the live wiki routes.
