# Implementation Order

This document gives a safe, beginner-friendly coding sequence for **The Hidden Equations of Feeling**.

The goal is to avoid turning the v0.4 coding phase into a giant scary pile. Each step should be small enough to understand, test, and commit.

## Core implementation principle

> One feature. One small commit. Validate. Build. Then move.

Do not stack five unfinished features at once. The project stays safer when every step can be checked.

## Always start here

Before coding any feature, run:

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

## Step 0 — Confirm v0.3 foundation

Goal: make sure the foundation is green.

Tasks:

- [ ] `npm run validate-data` passes.
- [ ] `npm run build` passes.
- [ ] GitHub Pages workflow is green.
- [ ] Live app opens.
- [ ] README has boundary statement near the top.

Do not start feature work until this is done or intentionally deferred.

## Step 1 — Add lightweight selector helpers

Goal: stop putting all lookup logic directly inside components.

Create:

```txt
src/lib/formulaSelectors.ts
```

Suggested helpers:

- `findFormulaById(cards, id)`
- `filterFormulaCards(cards, query, family)`
- `getRelatedCards(cards, selectedCard)`
- `getFamilyOptions(cards)`

Why first:

- makes routing easier
- makes compare mode easier
- makes examples easier
- keeps `App.tsx` cleaner

Check:

- [ ] App still renders.
- [ ] Search/filter still work.
- [ ] Selected card still works.

## Step 2 — Add hash route helpers

Goal: support shareable formula URLs without adding a full router yet.

Create:

```txt
src/lib/hashRouting.ts
```

Suggested helpers:

- `getCardIdFromHash()`
- `setCardHash(cardId)`
- `isCardHash(hash)`

Route format:

```txt
/#/card/fear_threat_forecast_loop
```

Boundary:

Routes identify formula cards, not user emotional states.

Check:

- [ ] Selecting a formula updates the URL.
- [ ] Opening a formula URL selects that formula.
- [ ] Invalid IDs fall back safely.
- [ ] GitHub Pages base path still works.

## Step 3 — Add copy tools utilities

Goal: prepare safe reuse before adding buttons everywhere.

Create:

```txt
src/lib/formatMarkdown.ts
src/lib/copyToClipboard.ts
```

Suggested formatters:

- `formatFormulaMarkdown(card)`
- `formatReflectionPromptMarkdown(card)`
- `formatExampleMarkdown(example)`

Required boundary in copied Markdown:

```txt
Boundary: symbolic design pattern only — not diagnosis, measurement, or universal law.
```

Check:

- [ ] Copy output includes formula title.
- [ ] Copy output includes boundary note.
- [ ] No copied output sounds diagnostic.

## Step 4 — Add formula copy buttons

Goal: make formula cards usable by writers/designers.

Add to `DetailPanel.tsx` first:

- Copy formula
- Copy reflection prompt
- Copy Markdown card

Keep UI simple.

Check:

- [ ] Buttons work.
- [ ] Buttons have clear labels.
- [ ] Copied Markdown includes boundary.
- [ ] Mobile layout is not broken.

## Step 5 — Add cross-reference selectors

Goal: prepare smarter compare mode.

Create:

```txt
src/lib/relationshipSelectors.ts
```

Use:

```txt
src/data/cross_reference_map.json
```

Suggested helpers:

- `getRecommendedComparePairs(map)`
- `getRelationshipsForCard(map, cardId)`
- `findRelationship(map, source, target)`
- `getLearningPathsForCard(map, cardId)`

Check:

- [ ] Build passes.
- [ ] TypeScript imports JSON cleanly.
- [ ] Missing IDs do not crash.

## Step 6 — Upgrade compare mode

Goal: make compare mode explain why two formulas belong together.

Add:

- suggested compare pair dropdown
- relationship label
- relationship type badge
- boundary copy

Required boundary:

```txt
This comparison shows symbolic design relationships, not psychological measurements.
```

Check:

- [ ] Recommended pair selection works.
- [ ] Relationship explanation displays.
- [ ] Existing manual compare still works.
- [ ] No graph/science overclaiming language appears.

## Step 7 — Add examples selectors

Goal: prepare the examples gallery.

Create:

```txt
src/lib/exampleSelectors.ts
```

Suggested helpers:

- `getExamplesByCategory(examples, category)`
- `getExamplesForFormula(examples, formulaId)`
- `getExampleCategories(examples)`
- `findExampleById(examples, id)`

Check:

- [ ] Build passes.
- [ ] Example formula IDs remain valid through validator.

## Step 8 — Add Examples Gallery component

Goal: render `example_gallery.json` in the app.

Create:

```txt
src/components/ExampleGallery.tsx
src/components/ExampleCard.tsx
```

Show:

- category filter
- title
- summary
- scenario
- example text
- why it works
- how to use
- boundary note
- misuse warning
- linked formula title

Check:

- [ ] Starter examples render.
- [ ] Category filter works.
- [ ] Formula link/selection works.
- [ ] Boundary note is visible.
- [ ] Misuse warning is visible.
- [ ] Mobile layout is usable.

## Step 9 — Add formula detail examples section

Goal: selected formula pages show related worked examples.

In `DetailPanel.tsx`, show examples where:

```txt
example.formulaId === card.id
```

Keep this short:

- example title
- category
- summary
- link to gallery/details if present

Check:

- [ ] Cards with examples show them.
- [ ] Cards without examples do not show empty clutter.

## Step 10 — Add Formula of the Day

Goal: create a friendly daily entry point without tracking.

Create:

```txt
src/lib/dailyFormula.ts
src/components/FormulaOfTheDay.tsx
```

Suggested helper:

```txt
getDailyFormula(cards, date)
```

Rules:

- deterministic from date
- no account
- no analytics
- no emotional profiling

Check:

- [ ] Formula changes by date.
- [ ] Formula is stable for the same date.
- [ ] Boundary line is visible.

## Step 11 — Add local-only favorites

Goal: let users save cards privately in browser storage.

Create:

```txt
src/lib/localStorageSafe.ts
src/components/FavoriteButton.tsx
```

Storage key:

```txt
hidden-equations-of-feeling:favorites:v1
```

Required UI copy:

```txt
Favorites are stored locally in this browser only. They are not uploaded or used to score you.
```

Check:

- [ ] Favorite toggle works.
- [ ] Favorites persist after refresh.
- [ ] User can clear favorites.
- [ ] No slider values or private reflections are stored.

## Step 12 — Add glossary view or glossary panel

Goal: explain symbols and operators in-app.

Use:

```txt
src/data/variable_glossary.json
```

Start small:

- operators section
- roles section
- note that symbols are scoped per card

Check:

- [ ] Text is readable.
- [ ] Glossary does not imply universal constants.
- [ ] Mobile layout works.

## Step 13 — README upgrade

Goal: update the public landing page after features exist.

Use:

```txt
docs/readme_upgrade_plan.md
```

Minimum README additions:

- live app link
- boundary statement near top
- feature list
- docs map
- quick start
- example formula
- citation note

Check:

- [ ] README explains project in under 30 seconds.
- [ ] README does not overclaim.

## Step 14 — Accessibility and privacy pass

Use:

```txt
docs/accessibility_checklist.md
docs/security_and_privacy.md
```

Check at least:

- keyboard navigation
- screen-reader labels for controls
- visible boundary notes
- mobile layout
- no hidden analytics
- no emotional scoring
- no private emotional data storage

## Step 15 — Prepare v0.4 release candidate

Use:

```txt
docs/v0_4_release_notes_draft.md
docs/v0_3_to_v0_4_transition_plan.md
docs/release_readiness_matrix.md
```

Required:

- [ ] validation passes
- [ ] build passes
- [ ] GitHub Pages deploys
- [ ] README reflects actual implemented features
- [ ] release notes distinguish implemented from planned features
- [ ] no boundary blockers remain

## Beginner-friendly work blocks

Work in blocks of 30–60 minutes:

1. One tiny helper file.
2. One tiny component.
3. One tiny UI improvement.
4. Validate/build.
5. Commit.

Stop before fatigue turns into chaos.

## Suggested first coding sprint

Sprint 1 should be small:

1. Add `formulaSelectors.ts`.
2. Refactor `App.tsx` search/filter to use it.
3. Run validation/build.
4. Commit.

Sprint 2:

1. Add `hashRouting.ts`.
2. Wire selected card to URL hash.
3. Run validation/build.
4. Commit.

Sprint 3:

1. Add `relationshipSelectors.ts`.
2. Display recommended compare pair labels.
3. Run validation/build.
4. Commit.

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

Those can wait, and some should never be built.

## Implementation voice lock

> Small steps build trust. Clean data builds confidence. Boundaries keep the magic safe.
