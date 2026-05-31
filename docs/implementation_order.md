# Implementation Order

This document gives a safe, beginner-friendly coding and release sequence for **The Hidden Equations of Feeling**.

The original purpose was to prevent the v0.4 coding phase from turning into a giant pile. The v0.4 feature build is now mostly complete, so this document has been updated to show what is finished and what still remains before release.

## Core implementation principle

> One feature. One small commit. Validate. Build. Then move.

Do not stack five unfinished features at once. The project stays safer when every step can be checked.

## Current status snapshot

The v0.4 app pass has implemented the main interactive atlas features:

- [x] formula selector helpers
- [x] hash route helpers and shareable formula-card URLs
- [x] copy tools utilities
- [x] formula/detail copy buttons
- [x] cross-reference selectors
- [x] cross-reference-powered Compare Mode
- [x] example selectors
- [x] Examples Gallery
- [x] formula detail related examples
- [x] Formula of the Day
- [x] local-only favorites
- [x] favorites-only filtering
- [x] README v0.4 update
- [x] security/privacy doc update
- [x] accessibility checklist update
- [x] architecture overview update
- [x] release notes draft update
- [x] closeout checklist update
- [x] Issue #1 / Issue #2 scope split

Still required before tagging `v0.4.0`:

- [ ] confirm final dataset status / full 52-card import decision
- [ ] run and confirm `npm run validate-data`
- [ ] run and confirm `npm run build`
- [ ] confirm GitHub Pages deploy is green
- [ ] smoke-test the live app
- [ ] confirm README and release notes match the live app
- [ ] decide whether Zenodo is included now or deferred

## Always start here

Before coding or release work, run:

```bash
npm install
npm run validate-data
npm run build
```

If validation or build fails, fix that before adding new features.

## Safe commit rhythm

Use this rhythm for every coding step:

```txt
1. Create or edit a small file.
2. Run npm run validate-data.
3. Run npm run build.
4. Open the app locally if UI changed.
5. Commit with a clear message.
```

Good commit messages:

```txt
Add hash route helpers
Add examples gallery component
Add copy formula button
Improve compare mode with relationship labels
```

## Step 0 — Confirm foundation

Goal: make sure the foundation is green before final release.

Tasks:

- [ ] `npm run validate-data` passes.
- [ ] `npm run build` passes.
- [ ] GitHub Pages workflow is green.
- [ ] Live app opens.
- [x] README has boundary statement near the top.
- [x] README explains current v0.4 status.

Do not tag release until this is complete or intentionally deferred with a visible note.

## Step 1 — Add lightweight selector helpers

Status: **Done**

Created:

```txt
src/lib/formulaSelectors.ts
```

Implemented helper area:

- formula lookup by ID
- search/family filtering
- default formula resolution
- family filter options
- related cards
- formula title lookup

Check:

- [x] App still renders.
- [x] Search/filter wiring exists.
- [x] Selected card wiring exists.

## Step 2 — Add hash route helpers

Status: **Done**

Created:

```txt
src/lib/hashRouting.ts
```

Route format:

```txt
/#/card/fear_threat_forecast_loop
```

Implemented behavior:

- selecting a formula updates the URL
- opening a formula URL selects that formula
- invalid IDs fall back safely
- GitHub Pages base path remains compatible

Boundary:

Routes identify formula cards, not user emotional states.

## Step 3 — Add copy tools utilities

Status: **Done**

Created:

```txt
src/lib/formatMarkdown.ts
src/lib/copyToClipboard.ts
```

Implemented formatters/support:

- formula line
- reflection prompt Markdown
- formula Markdown card
- citation snippet
- example Markdown
- clipboard result handling

Required boundary in copied Markdown:

```txt
Boundary: symbolic design pattern only — not diagnosis, measurement, or universal law.
```

## Step 4 — Add formula copy buttons

Status: **Done**

Added to:

```txt
src/components/DetailPanel.tsx
```

Implemented buttons:

- Copy formula
- Copy reflection prompt
- Copy Markdown card
- Copy citation snippet
- Copy example in related examples

Check:

- [x] Buttons are present.
- [x] Buttons have clear labels.
- [x] Copy status message exists.
- [x] Copied Markdown includes boundary context where needed.

Still verify manually before release:

- [ ] Copy buttons work in the live app.
- [ ] Mobile layout remains usable.

## Step 5 — Add cross-reference selectors

Status: **Done**

Created:

```txt
src/lib/relationshipSelectors.ts
```

Uses:

```txt
src/data/cross_reference_map.json
```

Implemented helper area:

- recommended compare pairs
- relationship lookup
- relationship type formatting
- relationship descriptions
- compare boundary text

Check:

- [x] Missing relationship does not crash UI.
- [x] Relationship labels have text descriptions.

## Step 6 — Upgrade Compare Mode

Status: **Done**

Added:

- suggested compare pair dropdown
- relationship label
- relationship type display
- relationship description
- boundary copy
- compare-card rendering

Required boundary:

```txt
This comparison shows symbolic design relationships, not psychological measurements.
```

Still verify manually before release:

- [ ] Recommended pair selection works in live app.
- [ ] Existing manual compare still works.
- [ ] No graph/science overclaiming language appears.

## Step 7 — Add examples selectors

Status: **Done**

Created:

```txt
src/lib/exampleSelectors.ts
```

Implemented helper area:

- filter examples
- get examples for formula
- category options
- category label formatting

Check:

- [x] Example formula IDs are validated.
- [x] Examples can connect back to formula cards.

## Step 8 — Add Examples Gallery component

Status: **Done**

Created:

```txt
src/components/ExampleGallery.tsx
src/styles/example-gallery.css
```

Implemented:

- search
- category filter
- title
- summary
- scenario
- example text
- why it works
- how to use
- boundary note
- misuse warning
- linked formula button
- copy example button
- empty-state messaging

Still verify manually before release:

- [ ] Starter examples render in live app.
- [ ] Category filter works in live app.
- [ ] Formula link/selection works in live app.
- [ ] Mobile layout is usable.

## Step 9 — Add formula detail examples section

Status: **Done**

Added to:

```txt
src/components/DetailPanel.tsx
src/styles/related-examples.css
```

Behavior:

```txt
example.formulaId === card.id
```

Implemented:

- related example title
- category
- summary
- example text
- why it works
- copy example button

Still verify manually before release:

- [ ] Cards with examples show them.
- [ ] Cards without examples do not show empty clutter.

## Step 10 — Add Formula of the Day

Status: **Done**

Created:

```txt
src/lib/dailyFormula.ts
src/components/FormulaOfTheDay.tsx
src/styles/daily-formula.css
```

Rules:

- deterministic from date
- no account
- no analytics
- no emotional profiling
- no user reading or diagnosis

Still verify manually before release:

- [ ] Formula is stable for the same date.
- [ ] Open today's formula button works.
- [ ] Boundary line is visible.
- [ ] Mobile layout stacks cleanly.

## Step 11 — Add local-only favorites

Status: **Done**

Created:

```txt
src/lib/localStorageSafe.ts
src/lib/favoritesStorage.ts
src/components/FavoriteButton.tsx
src/styles/favorites.css
```

Storage key:

```txt
hidden-equations-of-feeling:favorites:v1
```

Required UI copy:

```txt
Favorites are stored locally in this browser only. They are not uploaded, tracked, synced, or used to score you.
```

Implemented:

- favorite toggle on formula cards
- favorite toggle in detail panel
- local-only browser storage
- favorites status text
- clear local favorites
- favorites-only filter
- disabled favorites-only state when no favorites exist
- automatic exit from favorites-only mode when favorites are empty

Still verify manually before release:

- [ ] Favorite toggle works.
- [ ] Favorites persist after refresh.
- [ ] User can clear favorites.
- [ ] Favorites-only filter works with search/family filters.
- [ ] No slider values or private reflections are stored.

## Step 12 — Add glossary view or glossary panel

Status: **Deferred / optional for v0.4**

Goal: explain symbols and operators in-app.

Use:

```txt
src/data/variable_glossary.json
```

Start small later:

- operators section
- roles section
- note that symbols are scoped per card

Reason for deferral:

The v0.4 app already has enough release scope. Glossary UI can land in v0.5 unless needed for the first release.

## Step 13 — README upgrade

Status: **Done**

Updated:

```txt
README.md
```

Now includes:

- v0.4 release-readiness status
- GitHub Pages target URL
- starter/candidate dataset note
- app feature list
- docs map
- quick start
- validation/deployment notes
- privacy/boundary language
- Issue #1 / Issue #2 tracking split
- Zenodo/DOI caution

Still verify before release:

- [ ] README live app link is accurate after Pages is green.
- [ ] README does not claim unverified final dataset/build/DOI status.

## Step 14 — Accessibility and privacy pass

Status: **Docs updated; manual live checks still required**

Updated:

```txt
docs/accessibility_checklist.md
docs/security_and_privacy.md
docs/app_architecture_overview.md
```

Docs now cover:

- Formula of the Day
- favorites/localStorage
- copy tools
- Examples Gallery
- Compare Mode
- live status messages
- no analytics / no tracking
- no emotional scoring
- no uploaded reflections by default

Still verify manually before release:

- [ ] keyboard navigation
- [ ] screen-reader labels for controls
- [ ] visible boundary notes
- [ ] live-region status behavior
- [ ] mobile layout
- [ ] no hidden analytics
- [ ] no emotional scoring
- [ ] no private emotional data storage

## Step 15 — Prepare v0.4 release candidate

Status: **In progress**

Use:

```txt
docs/v0_4_release_notes_draft.md
docs/v0_3_to_v0_4_transition_plan.md
docs/release_readiness_matrix.md
docs/v0_4_closeout_checklist.md
```

Required:

- [ ] validation passes
- [ ] build passes
- [ ] GitHub Pages deploys
- [ ] live app opens and loads CSS
- [ ] README reflects actual implemented features
- [ ] release notes distinguish implemented from planned/deferred features
- [ ] no boundary blockers remain
- [ ] Issue #2 gets final release-readiness status

## Step 16 — Dataset closeout

Status: **Still open**

The current dataset is a starter/candidate app dataset until the full 52-card dataset is confirmed or imported.

Tracked in:

```txt
Issue #1 — original v0.3/full-dataset/Zenodo path
```

Required:

- [ ] confirm whether `src/data/formula_cards.json` is the final full 52-card dataset
- [ ] import full 52-card dataset if needed
- [ ] run validation after import
- [ ] verify all example formula IDs exist
- [ ] verify all cross-reference formula IDs exist
- [ ] verify learning paths reference valid formula IDs
- [ ] update README/release notes with final dataset status

## Step 17 — GitHub Pages closeout

Status: **Still open**

Required:

- [ ] confirm repo Pages source is set to GitHub Actions
- [x] confirm `.github/workflows/pages.yml` exists
- [x] confirm Pages workflow separates validation from build
- [x] confirm `vite.config.ts` base path is correct
- [ ] confirm latest Pages workflow is green
- [ ] confirm live app opens
- [ ] confirm live app loads CSS
- [ ] confirm hash routes work on refresh/direct open

## Step 18 — Release / Zenodo closeout

Status: **Still open**

Release candidate can move forward after:

- [ ] validation passes
- [ ] build passes
- [ ] Pages is green
- [ ] live smoke test passes
- [ ] final dataset status is documented
- [ ] release notes are accurate

Suggested GitHub tag:

```txt
v0.4.0
```

Suggested release title:

```txt
The Hidden Equations of Feeling v0.4.0
```

Zenodo:

- [ ] create GitHub release first
- [ ] import/connect release in Zenodo
- [ ] add DOI only after it exists
- [ ] add ORCID only if available and desired

## Beginner-friendly work blocks

Work in blocks of 30–60 minutes:

1. One tiny helper file.
2. One tiny component.
3. One tiny UI improvement.
4. Validate/build.
5. Commit.

Stop before fatigue turns into chaos.

## Suggested next work block

Next small block should be release validation, not new feature expansion:

1. Check current GitHub Actions / Pages run status.
2. If failing, inspect logs and fix the first failure only.
3. Confirm whether failure is validation or build.
4. Update Issue #2 with the result.
5. Then decide whether full 52-card dataset import is next or v0.4 app release can proceed with starter/candidate data.

## Do-not-do-yet list

Do not start with:

- graph visualization
- accounts
- database
- analytics
- complex routing library
- animation framework
- full redesign
- AI-generated user assessments
- anything that stores private reflections
- anything that stores playground slider history
- anything that makes formulas look diagnostic

Those can wait, and some should never be built.

## Implementation voice lock

> Small steps build trust. Clean data builds confidence. Boundaries keep the magic safe.
