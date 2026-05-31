# App Architecture Overview

This document maps the current React app structure for **The Hidden Equations of Feeling** and outlines how v0.4 feature modules should fit into the codebase.

The app should stay simple, static, local-first, and easy to publish through GitHub Pages.

## Core architecture principle

> Data stays explicit. UI stays humane. Boundaries stay visible.

The app is not a clinical platform, assessment system, or user-profile engine. It is a static symbolic formula atlas.

## Current stack

- Vite
- React
- TypeScript
- Static JSON data files
- GitHub Pages deployment
- GitHub Actions build workflow

## Current app entry points

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

### `src/App.tsx`

Main app coordinator.

Current responsibilities:

- load formula card data
- manage selected formula state
- manage search query
- manage family filter
- manage compare selection
- render hero/header
- render toolbar
- render formula-card list
- render detail panel
- render compare mode

Future goal:

`App.tsx` should eventually become a lightweight router/layout shell, while feature modules handle specific UI areas.

## Current component map

```txt
src/components/FormulaCardView.tsx
src/components/DetailPanel.tsx
src/components/FormulaPlayground.tsx
```

### `FormulaCardView.tsx`

Purpose:

- display a compact formula-card summary
- show family label, title, formula, and tagline
- allow selection

Future improvements:

- keyboard selection polish
- favorite toggle
- copy formula button
- direct-link affordance

### `DetailPanel.tsx`

Purpose:

- display selected formula details
- show variables
- show derivation
- show reflection prompt
- show example application
- show boundary/misuse warning
- include Formula Playground

Future improvements:

- copy Markdown card
- related-card section powered by cross-reference map
- direct URL route support
- print-friendly detail card mode

### `FormulaPlayground.tsx`

Purpose:

- provide symbolic variable sliders
- show rough symbolic intensity/pattern pressure
- demonstrate amplifier/buffer/stabilizer behavior

Boundary requirement:

```txt
Symbolic, not diagnostic / not measurement.
```

Future improvements:

- reset button
- better role descriptions
- rename internal language away from `score` where possible
- card-specific playground notes
- stronger keyboard and screen-reader labels

## Current data files

```txt
src/data/formula_cards.json
src/data/formula_schema.json
src/data/variable_glossary.json
src/data/family_tokens.json
src/data/expansion_candidates.json
src/data/example_gallery.json
src/data/example_gallery_schema.json
src/data/cross_reference_map.json
src/data/cross_reference_schema.json
```

### `formula_cards.json`

Primary source of truth for canonical formula cards.

Used by:

- card browser
- detail panel
- search/filter
- compare mode
- Formula Playground
- future formula routes
- future examples links
- future cross-reference graph

### `variable_glossary.json`

Explains common symbols, operators, and roles.

Future app uses:

- glossary page
- variable tooltips
- formula accessibility helpers
- Professor Phi explanations

### `family_tokens.json`

Stores labels, colors, and motifs for formula families.

Future app uses:

- family landing pages
- consistent styling
- graph group coloring
- filters

### `example_gallery.json`

Starter worked examples.

Future app uses:

- examples gallery page
- formula detail examples section
- copy example as Markdown
- teaching/writing/game-design example filters

### `cross_reference_map.json`

Relationships between formulas.

Future app uses:

- smarter compare mode
- related-card suggestions
- graph view
- learning paths
- Professor Phi guided explanations

### `expansion_candidates.json`

Future formula ideas not yet canonical.

Future app uses:

- maybe contributor/admin review view
- not required for public app UI

## Current styles

```txt
src/styles/tokens.css
src/styles/print.css
```

### `tokens.css`

Current global app styling.

Future direction:

- keep styles readable and lightweight
- avoid over-complicated theming early
- ensure color is not the only family signal
- maintain accessible contrast

### `print.css`

Basic print stylesheet.

Future direction:

- improve formula-card print layout
- keep boundary note visible in print
- hide interactive controls

## Current validation flow

```txt
scripts/validate-data.mjs
```

Current validation checks:

- formula cards
- example gallery records
- cross-reference map edges
- learning paths
- missing formula references
- duplicate IDs
- invalid enum values

Build command:

```bash
npm run build
```

Validation command:

```bash
npm run validate-data
```

## Current deployment flow

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

Builds the app and uploads `dist` to GitHub Pages.

GitHub repo setting must be:

```txt
Pages -> Build and deployment -> Source -> GitHub Actions
```

## Recommended v0.4 module structure

As features grow, use a clearer module layout:

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

This does not all need to exist immediately. Add modules only when features need them.

## v0.4 feature modules

### `features/routing`

Purpose:

- support shareable formula URLs
- parse hash route
- update hash on selection
- handle invalid card IDs

Suggested route:

```txt
/#/card/fear_threat_forecast_loop
```

Boundary:

Routes identify formula cards, not user emotional states.

### `features/compare`

Purpose:

- use `cross_reference_map.json`
- show recommended compare pairs
- explain relationship type and label
- keep compare mode non-diagnostic

Suggested components:

```txt
ComparePanel.tsx
SuggestedPairs.tsx
RelationshipBadge.tsx
```

### `features/examples`

Purpose:

- render `example_gallery.json`
- filter by category
- link examples to formula cards
- show boundary/misuse warnings

Suggested components:

```txt
ExampleGallery.tsx
ExampleCard.tsx
ExampleDetail.tsx
ExampleCategoryFilter.tsx
```

### `features/copyTools`

Purpose:

- copy formulas, prompts, examples, and Markdown cards
- preserve boundary notes in copied content

Suggested utilities:

```txt
formatFormulaMarkdown.ts
formatExampleMarkdown.ts
copyToClipboard.ts
```

### `features/dailyFormula`

Purpose:

- deterministic Formula of the Day
- no tracking
- no account

Suggested helper:

```txt
getDailyFormula(cards, date)
```

### `features/favorites`

Purpose:

- local-only favorites
- no account
- no upload

Suggested storage key:

```txt
hidden-equations-of-feeling:favorites:v1
```

Required UI copy:

```txt
Favorites are stored locally in this browser only. They are not uploaded or used to score you.
```

### `features/glossary`

Purpose:

- expose variable and operator explanations
- support formula accessibility
- support Professor Phi explanations

### `features/professorPhi`

Purpose:

- optional guided explanation layer
- friendly microcopy
- family-specific guidance

Reference:

```txt
docs/professor_phi_voice.md
```

## Data flow target

Keep data flow simple:

```txt
JSON data files
  -> typed imports
  -> lightweight selectors/helpers
  -> React components
  -> static GitHub Pages app
```

Avoid:

- server calls
- hidden APIs
- user profiles
- analytics-first design
- emotional data uploads
- complex global state too early

## Suggested helper utilities

Future utilities may include:

```txt
src/lib/formulaSelectors.ts
src/lib/relationshipSelectors.ts
src/lib/exampleSelectors.ts
src/lib/formatMarkdown.ts
src/lib/localStorageSafe.ts
src/lib/hashRouting.ts
```

## State management guidance

For v0.4, React state is enough.

Use local state for:

- selected formula
- search query
- family filter
- compare formula
- selected example category

Use localStorage only for:

- optional favorites
- maybe dismissed intro/boundary helper later

Do not use localStorage for:

- emotional slider values by default
- private reflections
- diagnostic-like results
- user identity

## Privacy architecture

The app should remain:

- static
- local-first
- no backend by default
- no accounts
- no analytics by default
- no emotional data collection
- no uploaded reflections by default

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

Reference:

```txt
docs/accessibility_checklist.md
```

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

## Architecture voice lock

> Keep the app small enough to trust, clear enough to extend, and kind enough to use.
