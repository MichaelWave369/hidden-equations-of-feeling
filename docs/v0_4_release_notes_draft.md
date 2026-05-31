# v0.4.0 Release Notes Draft

## The Hidden Equations of Feeling v0.4.0

This release upgrades **The Hidden Equations of Feeling** from a v0.3 publication scaffold into a more useful interactive symbolic atlas.

v0.3 made the project real, documented, runnable, and bounded.
v0.4 makes it more useful, shareable, navigable, and release-ready.

## Core boundary

> Symbolic design patterns only — not diagnosis, measurement, or universal law.

Long form:

> The Hidden Equations of Feeling is a symbolic formula atlas and creative design-pattern tool. These formulas are not clinical tools, diagnostic models, empirical laws, universal claims, emotional measurements, or scores of a person.

## Release status

The v0.4 app-readiness path is green based on maintainer checks:

- validation passes
- production app build passes
- GitHub Pages deploy is green
- deployed-app live smoke test passes
- no visible smoke-test boundary blockers were reported

This is still a **release-notes draft** until the tagged GitHub release is created.

Current dataset decision:

- v0.4 ships with the current starter/candidate app dataset.
- The full 52-card dataset confirmation/import remains tracked separately in Issue #1.
- The full 52-card import can proceed as a post-v0.4 data/content milestone unless the maintainer decides to block release for it.

Source checklist:

```txt
docs/v0_4_closeout_checklist.md
```

Smoke-test checklist:

```txt
docs/v0_4_live_smoke_test.md
```

## Implemented in the v0.4 app pass

### Shareable formula-card URLs

Formula cards can now be selected with hash routes such as:

```txt
/#/card/fear_threat_forecast_loop
```

Implemented behavior:

- selecting a card updates the URL
- opening a valid formula URL selects that card automatically
- invalid or missing IDs fall back safely
- GitHub Pages base path remains compatible through Vite config

Boundary:

> Formula links point to creative pattern cards, not user-specific emotional states.

### Cross-reference-powered Compare Mode

Compare Mode now uses:

```txt
src/data/cross_reference_map.json
src/lib/relationshipSelectors.ts
```

Implemented behavior:

- recommended compare pairs
- relationship labels such as `mirror`, `buffer`, and `repair_path`
- relationship explanations
- compare boundary text from the cross-reference map
- automatic selected/compare card switching from recommended pairs

Boundary copy:

```txt
This comparison shows symbolic design relationships, not psychological measurements.
```

### Examples Gallery

The app now includes an Examples Gallery powered by:

```txt
src/data/example_gallery.json
src/components/ExampleGallery.tsx
src/lib/exampleSelectors.ts
```

Implemented behavior:

- browse worked examples
- search examples
- filter examples by category
- link examples back to formula cards
- show scenario, example text, why it works, and how to use
- show boundary note and misuse warning
- copy example as boundary-preserving Markdown

Starter categories include:

- comedy writing
- drama scene
- NPC design
- reflection prompt
- classroom activity
- game mechanic
- infographic/poster

### Related examples inside formula detail cards

Formula detail panels now show worked examples connected to the selected formula.

Implemented behavior:

- related example title
- category label
- summary
- example text
- why it works
- copy example button
- boundary-preserving Markdown output

### Copy tools

The detail panel now includes copy buttons for common creative workflows.

Implemented buttons:

- Copy formula
- Copy reflection prompt
- Copy Markdown card
- Copy citation snippet
- Copy example from related examples and gallery

Required rule preserved:

> Copied Markdown should include a boundary note when the content could be reused out of context.

### Formula of the Day

The app now includes a deterministic local Formula of the Day.

Implemented behavior:

- featured formula title
- formula display
- tagline
- reflection prompt
- link/button to open the full card
- local date key
- boundary line

Rules preserved:

- deterministic/local-only
- no tracking
- no account
- no emotional profiling

### Local-only favorites

Users can save formula cards locally in their browser.

Implemented behavior:

- favorite buttons on formula cards
- favorite button in the detail panel
- local-only browser storage
- favorites status message
- clear local favorites button
- favorites-only formula filter
- automatic exit from favorites-only mode when all favorites are cleared

Privacy copy:

```txt
Favorites are stored locally in this browser only. They are not uploaded, tracked, synced, or used to score you.
```

### Validation hardening

The data validator has been hardened for release readiness.

Validation now protects:

- formula-card required fields
- UI-critical fields such as `familyLabel`, `familyColor`, `derivation`, `exampleApplication`, and `useCases`
- non-empty `formulaSymbols`, `variables`, and `useCases`
- valid 6-digit hex `familyColor`
- required `symbol`, `meaning`, and `role` on variables
- formula symbol/variable alignment
- duplicate formula IDs
- example records, categories, difficulties, statuses, tags, and formula references
- cross-reference map metadata, relationship types, edges, strengths, booleans, duplicate edges, and learning paths

### GitHub Pages workflow hardening

The Pages workflow separates data validation from app build.

Implemented workflow checkpoints:

```yaml
- name: Validate formula data
  run: npm run validate-data

- name: Build app
  run: npm run build:app
```

Why it matters:

- data/schema problems fail at the validation checkpoint
- React/Vite build problems fail at the build checkpoint
- Pages deployment only proceeds after both pass
- `npm run build:app` resolves the local Vite binary correctly in GitHub Actions

### README and closeout documentation

The README has been updated for v0.4 release readiness.

It now includes:

- v0.4 status
- GitHub Pages target URL
- starter/candidate dataset note
- v0.4 app feature list
- local-only favorites privacy note
- app/data/docs file map
- validation and deployment workflow notes
- Issue #1 / Issue #2 tracking split
- Zenodo/DOI caution
- boundary language near the top

Release-readiness docs include:

```txt
docs/v0_4_closeout_checklist.md
docs/v0_4_live_smoke_test.md
```

## Data systems used by the app

The v0.4 app currently uses:

- `src/data/formula_cards.json`
- `src/data/example_gallery.json`
- `src/data/cross_reference_map.json`

Additional release/support data may include:

- `src/data/variable_glossary.json`
- `src/data/family_tokens.json`
- `src/data/expansion_candidates.json`
- `src/data/formula_schema.json`

## Deferred or not yet confirmed

These items should not be described as complete for v0.4.0 unless separately finished before tagging:

- full 52-card formula dataset confirmation/import
- screenshot/social preview asset
- tagged GitHub release
- Zenodo import/DOI metadata
- ORCID addition, if desired and available

## Known limitations for v0.4.0

Update before tagging if any of these change:

- v0.4 uses the current starter/candidate app dataset.
- The full 52-card dataset is deferred/tracked separately in Issue #1.
- The examples gallery may remain starter-sized.
- The cross-reference map may need more pairings after full dataset import.
- Formula of the Day uses simple deterministic local selection.
- Favorites are browser-local only and not synced across devices.
- Zenodo/DOI should not be advertised until a DOI exists.

## Validation requirements

Before release:

```bash
npm run validate-data
npm run build
```

Validation should pass for:

- formula cards
- example gallery records
- cross-reference map edges
- learning paths
- missing formula references
- duplicate IDs
- invalid categories/status values
- UI-critical formula fields

## Accessibility requirements

v0.4 includes checklist coverage and a maintainer-confirmed live smoke test.

Reference:

```txt
docs/accessibility_checklist.md
```

Key checks:

- shareable URLs work with keyboard navigation
- compare mode has plain text relationship labels
- example gallery boundary notes are visible
- copy buttons have accessible labels/status messages
- Formula of the Day is readable on mobile
- favorites do not rely on color alone
- favorite buttons expose pressed state

## Privacy requirements

v0.4 must preserve:

- no accounts
- no hidden analytics
- no emotional data collection
- no uploaded reflections by default
- no emotional scoring
- no diagnostic reports
- no third-party data collection by default

Local storage is allowed only for formula favorites.

## README requirements

The README should stay aligned with the actual app and include:

- live app target/link
- feature list including examples, compare mode, Formula of the Day, and favorites
- quick-start commands
- documentation map
- citation/Zenodo caution
- privacy/boundary language
- final dataset status as starter/candidate for v0.4

## Suggested GitHub release title

```txt
The Hidden Equations of Feeling v0.4.0
```

## Suggested GitHub tag

```txt
v0.4.0
```

## Suggested short release summary

```txt
v0.4.0 upgrades The Hidden Equations of Feeling from a publication scaffold into a more useful interactive symbolic atlas, adding shareable formula URLs, cross-reference compare mode, worked examples, copy tools, Formula of the Day, and local-only favorites. This release uses the current starter/candidate app dataset while the full 52-card dataset remains tracked separately. Symbolic design patterns only — not diagnosis, measurement, emotional scoring, or universal law.
```

## Draft changelog bullets

Use these only after final release decision:

- Added shareable formula-card URLs.
- Added cross-reference-powered compare suggestions and relationship explanations.
- Added worked Examples Gallery with search/filter and boundary notes.
- Added related examples inside formula detail cards.
- Added copy tools for formulas, prompts, examples, citations, and Markdown cards.
- Added deterministic local Formula of the Day.
- Added local-only favorites and favorites-only filtering.
- Improved README and public boundary copy.
- Improved Pages workflow with explicit validation/build checkpoints.
- Fixed Pages build by using `npm run build:app` for the Vite build step.
- Improved data validation for UI-critical fields.
- Preserved local-first, non-diagnostic, non-scoring privacy boundary.
- Documented that the full 52-card dataset remains a separate Issue #1 data/content milestone.

## Release definition of done

v0.4.0 can be tagged when:

- [x] validation passes
- [x] production build passes
- [x] GitHub Pages deploys successfully
- [x] live app opens and loads CSS
- [x] shareable formula URLs work
- [x] compare mode uses cross-reference data correctly
- [x] examples gallery renders
- [x] copy tools work
- [x] Formula of the Day works
- [x] favorites persist locally and can be cleared
- [x] favorites-only filtering works
- [x] local-only privacy language is visible for saved state
- [x] README reflects implemented features
- [x] release notes distinguish implemented features from planned/deferred ones
- [ ] final release/Zenodo decision is documented
- [ ] no known boundary blockers remain after final issue review

## Boundary footer for release notes

> The Hidden Equations of Feeling uses formulas as creative pattern language. It does not diagnose, measure, rank, manipulate, or score people.
