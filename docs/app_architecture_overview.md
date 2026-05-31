# App Architecture Overview

This document maps the current v0.4 React app structure for **The Hidden Equations of Feeling** and explains how the data, helper utilities, components, styles, validation, and deployment pieces fit together.

The app should stay simple, static, local-first, privacy-respecting, and easy to publish through GitHub Pages.

## Core architecture principle

> Data stays explicit. UI stays humane. Boundaries stay visible.

The app is not a clinical platform, assessment system, emotional measurement engine, or user-profile system. It is a static symbolic formula atlas.

## Current stack

- Vite
- React
- TypeScript
- Static JSON data files
- Lightweight selector/helper utilities
- Browser localStorage for optional formula favorites only
- GitHub Actions validation/build workflow
- GitHub Pages deployment

## App entry points

```txt
index.html
src/main.tsx
src/App.tsx
```

### `index.html`

The static HTML shell loaded by Vite.

Responsibilities:

- page title
- basic metadata
- root app element
- script entry for React

### `src/main.tsx`

React entry point.

Responsibilities:

- import global styles
- mount `<App />`
- enable React strict mode

Current style imports:

```txt
src/styles/tokens.css
src/styles/copy-tools.css
src/styles/compare-mode.css
src/styles/example-gallery.css
src/styles/related-examples.css
src/styles/daily-formula.css
src/styles/favorites.css
src/styles/print.css
```

### `src/App.tsx`

Main app coordinator.

Current responsibilities:

- import formula, example, and cross-reference data
- manage selected formula state
- manage search query
- manage family filter
- manage compare selection
- manage local favorite IDs
- manage favorites-only filter state
- read initial hash route
- update hash route on formula selection
- render hero/header
- render Formula of the Day
- render local favorites panel
- render toolbar
- render formula-card list
- render selected detail panel
- render Compare Mode
- render Examples Gallery
- preserve visible boundary language

Architecture note:

`App.tsx` is still intentionally simple enough for a small static app. If the app grows beyond v0.4, it can be split into feature folders later, but the current module layout is acceptable for this release pass.

## Current component map

```txt
src/components/FormulaCardView.tsx
src/components/DetailPanel.tsx
src/components/FormulaPlayground.tsx
src/components/ExampleGallery.tsx
src/components/FormulaOfTheDay.tsx
src/components/FavoriteButton.tsx
```

### `FormulaCardView.tsx`

Purpose:

- display a compact formula-card summary
- show family label, title, formula, and tagline
- allow formula selection
- optionally show a local favorite button

Receives:

- `card`
- `selected`
- `onSelect`
- `isFavorite`
- `onToggleFavorite`

Boundary note:

A formula card represents a creative pattern, not a user's emotional state.

### `DetailPanel.tsx`

Purpose:

- display selected formula details
- show formula variables
- show derivation/rationale
- show reflection prompt
- show example application
- show boundary and misuse warning
- include Formula Playground
- include copy tools
- include favorite toggle
- show related worked examples
- show suggested companion formulas

Receives:

- `card`
- `related`
- `examples`
- `isFavorite`
- `onToggleFavorite`

Boundary note:

Copied content should preserve boundary language when it may be reused out of context.

### `FormulaPlayground.tsx`

Purpose:

- provide symbolic variable sliders
- show rough symbolic intensity / pattern pressure
- demonstrate amplifier, buffer, and stabilizer behavior

Boundary requirement:

```txt
Symbolic, not diagnostic / not measurement.
```

Do not use playground values for:

- diagnosis
- scoring people
- emotional profiling
- saved emotional history
- hidden analytics

### `ExampleGallery.tsx`

Purpose:

- render worked examples from `example_gallery.json`
- search examples
- filter by category
- link examples back to formula cards
- show scenario, example text, why it works, how to use, boundary note, and misuse warning
- copy example Markdown with boundary context

Receives:

- `examples`
- `cards`
- `onSelectFormula`

Boundary note:

Examples are writing/design/reflection examples, not templates for judging real people.

### `FormulaOfTheDay.tsx`

Purpose:

- render a deterministic local daily formula prompt
- show formula title, formula, tagline, reflection prompt, date key, and boundary copy
- open the daily formula in the main detail panel

Receives:

- `cards`
- `onSelectFormula`

Boundary note:

Formula of the Day is not a user reading, prediction, diagnosis, or emotional assessment.

### `FavoriteButton.tsx`

Purpose:

- render a reusable local favorite toggle
- expose favorite state with text, icon, and `aria-pressed`
- support compact and full display modes

Receives:

- `formulaId`
- `isFavorite`
- `onToggleFavorite`
- `compact`

Boundary note:

Favorites are local convenience state only, not user profiling.

## Current data files

```txt
src/data/formula_cards.json
src/data/example_gallery.json
src/data/cross_reference_map.json
src/data/formula_schema.json
src/data/variable_glossary.json
src/data/family_tokens.json
src/data/expansion_candidates.json
```

### `formula_cards.json`

Primary source of truth for formula cards.

Used by:

- card browser
- detail panel
- search/filter
- family filter
- compare mode
- Formula Playground
- Formula of the Day
- favorites
- hash routes
- related examples
- example links
- cross-reference map validation

Important fields used by the UI:

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
- `crossReferences`
- `useCases`
- `boundaryNote`
- `misuseWarning`
- `version`

### `example_gallery.json`

Worked examples used by the Examples Gallery and formula detail related examples.

Used by:

- `ExampleGallery.tsx`
- `DetailPanel.tsx`
- `exampleSelectors.ts`
- `formatMarkdown.ts`
- `validate-data.mjs`

Important fields:

- `id`
- `formulaId`
- `category`
- `title`
- `summary`
- `scenario`
- `exampleText`
- `whyItWorks`
- `howToUse`
- `boundaryNote`
- `misuseWarning`
- `tags`
- `difficulty`
- `version`
- `status`

### `cross_reference_map.json`

Relationship map for Compare Mode and learning paths.

Used by:

- `relationshipSelectors.ts`
- Compare Mode in `App.tsx`
- release validation
- future graph/learning-path features

Important sections:

- `meta`
- `relationshipTypes`
- `edges`
- `learningPaths`

Relationship edges support:

- recommended compare pairs
- relationship labels
- relationship strength
- explanation copy
- boundary-aware compare UI

### Optional/support data files

These data files support the broader publication/release path and may be expanded as the full dataset is confirmed:

```txt
src/data/formula_schema.json
src/data/variable_glossary.json
src/data/family_tokens.json
src/data/expansion_candidates.json
```

Possible future app uses:

- glossary page
- variable tooltips
- formula schema documentation
- family landing pages
- contributor review of expansion candidates

## Current helper utility map

```txt
src/lib/formulaSelectors.ts
src/lib/hashRouting.ts
src/lib/formatMarkdown.ts
src/lib/copyToClipboard.ts
src/lib/relationshipSelectors.ts
src/lib/exampleSelectors.ts
src/lib/dailyFormula.ts
src/lib/localStorageSafe.ts
src/lib/favoritesStorage.ts
```

### `formulaSelectors.ts`

Purpose:

- filter formula cards by query and family
- find formula cards by ID
- return default formula
- produce family filter options
- resolve formula titles
- get related cards through card cross-references

Used by:

- `App.tsx`
- Compare Mode
- formula browser
- detail panel related cards

### `hashRouting.ts`

Purpose:

- read formula ID from URL hash
- write selected formula to URL hash
- support shareable card links such as `/#/card/fear_threat_forecast_loop`

Boundary:

Routes identify formula cards only, not user emotional states.

### `formatMarkdown.ts`

Purpose:

- format formula lines
- format reflection prompts
- format formula Markdown cards
- format citation snippets
- format examples as Markdown
- preserve boundary notes in copied content

Used by:

- `DetailPanel.tsx`
- `ExampleGallery.tsx`

### `copyToClipboard.ts`

Purpose:

- safely copy text to clipboard
- return success/failure status
- keep copy behavior user-triggered

Used by:

- detail copy tools
- related examples
- Examples Gallery

### `relationshipSelectors.ts`

Purpose:

- find relationships between formulas
- format relationship labels
- expose relationship type descriptions
- provide recommended compare pairs
- provide compare boundary text

Used by:

- Compare Mode in `App.tsx`

### `exampleSelectors.ts`

Purpose:

- filter examples by query and category
- get examples for a formula
- format example category labels

Used by:

- `ExampleGallery.tsx`
- `DetailPanel.tsx`

### `dailyFormula.ts`

Purpose:

- create local date keys
- deterministically select a daily formula
- provide Formula of the Day boundary text
- provide accessible daily formula labels

Boundary:

Formula of the Day is deterministic/local-only and should not track, profile, diagnose, or score users.

### `localStorageSafe.ts`

Purpose:

- check whether localStorage is available
- safely read JSON from localStorage
- safely write JSON to localStorage
- remove localStorage keys
- normalize unique string lists

Used by:

- `favoritesStorage.ts`

### `favoritesStorage.ts`

Purpose:

- define the favorites storage key
- read favorite formula IDs
- write favorite formula IDs
- toggle favorite IDs
- clear favorites
- provide status/privacy text

Storage key:

```txt
hidden-equations-of-feeling:favorites:v1
```

Allowed local storage content:

- formula IDs only

Required privacy line:

```txt
Favorites are stored locally in this browser only. They are not uploaded, tracked, synced, or used to score you.
```

## Current styles

```txt
src/styles/tokens.css
src/styles/copy-tools.css
src/styles/compare-mode.css
src/styles/example-gallery.css
src/styles/related-examples.css
src/styles/daily-formula.css
src/styles/favorites.css
src/styles/print.css
```

### Style responsibilities

- `tokens.css` — global layout, base theme, formula cards, detail panel, toolbar, buttons
- `copy-tools.css` — copy button groups and copy status styling
- `compare-mode.css` — Compare Mode layout and relationship notes
- `example-gallery.css` — Examples Gallery search/filter/cards
- `related-examples.css` — related worked examples inside formula detail panels
- `daily-formula.css` — Formula of the Day module
- `favorites.css` — favorite buttons, favorites panel, favorites-only controls
- `print.css` — print-focused layout and boundary visibility

Accessibility styling requirements:

- focus states must stay visible
- family color must not be the only family signal
- favorite state must use text/pressed state, not color alone
- boundary notes must remain readable
- mobile layouts must stack cleanly

## Current data flow

```txt
Static JSON data
  -> typed imports in App.tsx
  -> selector/helper utilities in src/lib/
  -> React components in src/components/
  -> user-triggered local UI state
  -> static GitHub Pages app
```

Formula selection flow:

```txt
FormulaCardView click/keyboard action
  -> App.handleSelectCard(formulaId)
  -> selectedId state
  -> setCardHash(formulaId)
  -> DetailPanel renders selected formula
```

Hash route flow:

```txt
URL hash /#/card/<formula_id>
  -> getCardIdFromHash()
  -> App initial selected ID
  -> hashchange listener
  -> selected formula state
```

Example flow:

```txt
example_gallery.json
  -> ExampleGallery
  -> search/category filters
  -> formula link button
  -> App.handleSelectCard(formulaId)
```

Related examples flow:

```txt
selected formula ID
  -> getExamplesForFormula(examples, selected.id)
  -> DetailPanel related examples section
```

Compare flow:

```txt
cross_reference_map.json
  -> relationshipSelectors
  -> recommended compare pairs
  -> relationship note
  -> selected formula card + compare formula card
```

Formula of the Day flow:

```txt
formula_cards.json + local date
  -> getDailyFormula(cards)
  -> FormulaOfTheDay
  -> Open today's formula
  -> App.handleSelectCard(formulaId)
```

Favorites flow:

```txt
FavoriteButton
  -> App.handleToggleFavorite(formulaId)
  -> favoritesStorage.toggle/write
  -> browser localStorage
  -> favorites status + optional favorites-only filter
```

Copy tools flow:

```txt
User clicks copy button
  -> formatMarkdown helper
  -> copyToClipboard
  -> local copy status live region
```

## State management guidance

For v0.4, React local state is enough.

Current local state includes:

- selected formula ID
- search query
- family filter
- compare formula ID
- favorite formula IDs
- favorites-only filter state
- favorites status text
- copy result status inside copy-capable components
- example gallery query/category state

Use localStorage only for:

- optional formula favorites

Do not use localStorage for:

- emotional slider values by default
- private reflections
- diagnostic-like results
- user identity
- emotional history
- inferred state labels

## Validation flow

```txt
scripts/validate-data.mjs
```

Current validation checks:

- formula card required fields
- UI-critical formula fields
- non-empty `formulaSymbols`, `variables`, and `useCases`
- variable `symbol`, `meaning`, and `role`
- at least one output variable
- formula symbol/variable alignment
- duplicate formula IDs
- formula card cross-references
- example gallery records
- example categories, difficulties, statuses, and tags
- example formula references
- cross-reference map metadata
- relationship type definitions
- cross-reference edges
- relationship strengths
- recommended compare booleans
- duplicate cross-reference edges
- learning paths and formula references

Commands:

```bash
npm run validate-data
npm run build
```

`npm run build` runs validation before Vite build.

## Deployment flow

```txt
.github/workflows/pages.yml
vite.config.ts
```

### `vite.config.ts`

Required GitHub Pages base path:

```ts
base: '/hidden-equations-of-feeling/'
```

### GitHub Actions workflow

The Pages workflow runs on pushes to `main` and manual dispatch.

Workflow checkpoints:

```yaml
- name: Validate formula data
  run: npm run validate-data

- name: Build app
  run: vite build
```

Then it uploads `dist` and deploys through `actions/deploy-pages@v4`.

GitHub repo setting must be:

```txt
Pages -> Build and deployment -> Source -> GitHub Actions
```

## Privacy architecture

The app should remain:

- static
- local-first
- no backend by default
- no accounts
- no analytics by default
- no emotional data collection
- no uploaded reflections by default
- no server-side profiles

Feature-specific privacy locks:

- Formula Playground values are symbolic only and not saved by default.
- Formula of the Day is deterministic/local and not a user reading.
- Favorites store only formula IDs locally in the browser.
- Copy tools do not transmit copied content.
- Examples Gallery contains project examples, not user submissions.
- Compare Mode compares formula relationships, not people.

Reference:

```txt
docs/security_and_privacy.md
```

## Accessibility architecture

Each feature should preserve:

- keyboard access
- plaintext formula explanations
- visible boundary notes
- screen-reader labels
- readable contrast
- non-color-only signals
- live status text for copy/favorites state
- mobile-friendly stacking

Feature-specific accessibility locks:

- Favorite buttons expose pressed state.
- Copy status messages use live regions.
- Formula of the Day does not imply the daily formula describes the user.
- Examples show boundary notes and misuse warnings.
- Compare Mode relationship labels are text, not color-only signals.

Reference:

```txt
docs/accessibility_checklist.md
```

## Future module structure

The current app can stay in `src/components` and `src/lib` for v0.4.

If the project grows, a future feature-folder layout may be useful:

```txt
src/features/formulas/
src/features/compare/
src/features/examples/
src/features/glossary/
src/features/favorites/
src/features/routing/
src/features/copyTools/
src/features/dailyFormula/
src/features/professorPhi/
```

Do not migrate just for aesthetics. Migrate only when the current structure becomes hard to understand.

## Future feature candidates

Possible future app features:

- glossary page
- family landing pages
- learning path explorer
- cross-reference graph view
- printable formula-card sheets
- Professor Phi guided explanations
- contributor/admin review view for expansion candidates

Future features must preserve:

- static/local-first design
- visible boundaries
- no emotional scoring
- no diagnosis
- no hidden tracking
- no server-side personal data storage by default

## Do-not-build architecture list

Do not add:

- user accounts
- clinical reports
- emotional scoring profiles
- server-side personal data storage
- hidden tracking
- third-party analytics by default
- complex state machinery before needed
- features that make formulas look diagnostic
- features that compare, rank, or score people
- hidden persistence of user behavior

## Architecture voice lock

> Keep the app small enough to trust, clear enough to extend, and kind enough to use.
