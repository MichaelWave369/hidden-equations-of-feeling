# The Hidden Equations of Feeling

A playful, claim-disciplined symbolic formula atlas for writers, game designers, NPC/dialogue designers, educators, and reflective creative tools.

**Boundary:** these formulas are creative metaphors and affective design patterns. They are not clinical tools, diagnostic models, empirical laws, emotional measurements, or instructions for manipulating people.

## Status

This repository is in a **v0.4 release-readiness pass**.

The interactive React/Vite atlas is implemented, and the GitHub Pages workflow is green based on the latest maintainer check. The final public release still depends on live smoke testing, final dataset/release decisions, and the final README/release-notes accuracy pass.

The current formula dataset is a starter/candidate app dataset. The original full 52-card dataset confirmation/import is tracked separately in Issue #1.

## GitHub Pages target

The intended Pages URL is:

```txt
https://michaelwave369.github.io/hidden-equations-of-feeling/
```

GitHub Pages should be set to **GitHub Actions**. The latest Pages workflow has been reported green, but the deployed app should still pass the live smoke test before being treated as release-ready.

Live smoke-test checklist:

```txt
docs/v0_4_live_smoke_test.md
```

## What the app does

The React app currently supports:

- formula card browsing
- search and family filtering
- shareable formula-card hash routes using `/#/card/<formula_id>`
- formula detail panels
- symbolic Formula Playground sliders
- boundary-preserving copy tools
- Markdown/card/citation/reflection prompt copy helpers
- cross-reference-powered Compare Mode
- worked Examples Gallery
- related examples inside formula detail cards
- deterministic local Formula of the Day
- local-only favorites stored in this browser only
- favorites-only formula filtering
- print styling

## Privacy and safety

The app does not intentionally add:

- accounts
- analytics
- server-side profiles
- emotional scoring
- diagnostic reports
- uploaded reflections
- hidden tracking
- third-party data collection by default

Favorites are stored locally in the browser only. They are not uploaded, synced, tracked, or used to score anyone.

## Key project files

### App

- `src/App.tsx` — main atlas UI
- `src/components/FormulaCardView.tsx` — formula card renderer
- `src/components/DetailPanel.tsx` — selected formula detail view
- `src/components/FormulaPlayground.tsx` — symbolic playground sliders
- `src/components/ExampleGallery.tsx` — worked examples gallery
- `src/components/FormulaOfTheDay.tsx` — local deterministic daily formula
- `src/components/FavoriteButton.tsx` — local-only favorite toggle

### Data

- `src/data/formula_cards.json` — current formula card dataset
- `src/data/example_gallery.json` — worked examples
- `src/data/cross_reference_map.json` — compare-mode relationships and learning paths
- `src/data/formula_schema.json` — formula-card schema support
- `src/data/variable_glossary.json` — variable glossary, if present in the release dataset
- `src/data/family_tokens.json` — family token support, if present in the release dataset
- `src/data/expansion_candidates.json` — expansion-candidate support, if present in the release dataset

### Validation and deployment

- `scripts/validate-data.mjs` — data integrity and UI-critical field validator
- `.github/workflows/pages.yml` — GitHub Pages workflow
- `vite.config.ts` — Vite config using the GitHub Pages base path

### Documentation

- `docs/manuscript.md` — companion whitepaper skeleton for a citable release
- `docs/notation_key.md` — how to read the symbolic operators
- `docs/formula_atlas.md` — formula atlas documentation
- `docs/references.md` — references and source notes
- `docs/app_architecture_overview.md` — app architecture map
- `docs/implementation_order.md` — implementation order and staged build path
- `docs/v0_3_to_v0_4_transition_plan.md` — transition plan
- `docs/v0_4_release_notes_draft.md` — release notes draft
- `docs/v0_4_closeout_checklist.md` — release-readiness checklist
- `docs/v0_4_live_smoke_test.md` — deployed app smoke-test checklist
- `docs/security_and_privacy.md` — safety/privacy notes
- `docs/accessibility_checklist.md` — accessibility checks

## Quick start

```bash
npm install
npm run validate-data
npm run dev
npm run build
```

`npm run build` runs data validation before building the app.

The Pages workflow also separates validation from app build so GitHub Actions logs clearly show whether a failure came from data validation or Vite build. The Pages workflow uses `npm run build:app` so the local Vite binary resolves correctly in GitHub Actions.

## Data validation

The validator checks formula cards, example gallery entries, and the cross-reference map.

Formula cards are expected to include UI-critical fields such as:

- `id`
- `title`
- `family`
- `familyLabel`
- `familyColor`
- `formula`
- `formulaPlaintext`
- `formulaSymbols`
- `variables`
- `tagline`
- `derivation`
- `reflectionPrompt`
- `exampleApplication`
- `useCases`
- `boundaryNote`
- `misuseWarning`
- `version`

The validator also checks symbol/variable alignment, duplicate IDs, example references, cross-reference edges, learning paths, and family color format.

## Release tracking

Current public-release tracking is split across two issues:

- **Issue #1** — original v0.3/full-dataset/Zenodo path
- **Issue #2** — v0.4 app release readiness: validation, build, Pages, live checks, README/release notes

Before tagging `v0.4.0`, confirm:

- live smoke test passes
- final dataset status is documented
- README reflects only implemented/verified features
- release notes distinguish implemented items from deferred items
- release/Zenodo decision is documented

Suggested v0.4 release tag:

```txt
v0.4.0
```

Suggested release title:

```txt
The Hidden Equations of Feeling v0.4.0
```

## Public release direction

- Code: MIT License.
- Formula text/data/docs: CC BY 4.0 recommended for remix-friendly use.
- Poster art and generated images: choose separate terms per release.

## Citation / Zenodo

The project is being prepared for a citable public release path. DOI/Zenodo metadata should be added after a tagged GitHub release is created and imported or connected in Zenodo.

Do not add a DOI badge until the DOI exists.

## Project tone

Funny where it should be funny, careful where it should be careful. Wonder without overclaiming. Emotion without diagnosis. Design patterns, not human scores.
