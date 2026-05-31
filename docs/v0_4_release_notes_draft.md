# v0.4.0 Release Notes Draft

## The Hidden Equations of Feeling v0.4.0

This release is planned as the first major app-experience upgrade after the v0.3 publication scaffold.

v0.3 makes the project real, documented, runnable, and bounded.
v0.4 makes it more useful, shareable, and alive.

## Core boundary

> Symbolic design patterns only — not diagnosis, measurement, or universal law.

Long form:

> The Hidden Equations of Feeling is a symbolic formula atlas and creative design-pattern tool. These formulas are not clinical tools, diagnostic models, empirical laws, universal claims, or scores of a person.

## Planned release focus

v0.4 should improve how users move through the app:

- direct links to formula cards
- smarter compare mode
- worked examples gallery
- copy tools for writers/designers/educators
- Formula of the Day
- local-only favorites
- stronger README/app polish

## Planned features

### Shareable formula URLs

Each formula card should become directly linkable.

Example route idea:

```txt
/#/card/fear_threat_forecast_loop
```

Expected behavior:

- selecting a card updates the URL
- opening a formula URL selects that card automatically
- missing or invalid card IDs fail gently
- GitHub Pages base path remains compatible

Boundary:

> Formula links point to creative pattern cards, not user-specific emotional states.

### Cross-reference-powered compare mode

Compare mode should use `src/data/cross_reference_map.json`.

Expected behavior:

- show recommended compare pairs
- show relationship type, such as `mirror`, `buffer`, or `repair_path`
- explain why the comparison matters
- help users see Comedy ↔ Drama mirrors and Fear ↔ Calm bridges

Boundary copy:

```txt
This comparison shows symbolic design relationships, not psychological measurements.
```

### Examples gallery

Add a gallery powered by `src/data/example_gallery.json`.

Expected behavior:

- browse worked examples
- filter by category
- link examples back to formula cards
- show scenario, example text, why it works, and how to use
- show boundary note and misuse warning

Starter categories:

- comedy writing
- drama scene
- NPC design
- reflection prompt
- classroom activity
- game mechanic
- infographic/poster

### Copy tools

Add copy buttons that make the atlas useful in real creative workflows.

Candidate buttons:

- Copy formula
- Copy reflection prompt
- Copy Markdown card
- Copy example as Markdown
- Copy citation snippet

Required rule:

> Copied Markdown should include a boundary note when the content could be reused out of context.

### Formula of the Day

Add a simple daily entry point.

Rules:

- deterministic or local-only
- no tracking
- no account
- no emotional profiling

Expected output:

- featured formula title
- formula
- tagline
- reflection prompt
- link to full card
- boundary line

### Local-only favorites

Let users save formula cards in their browser.

Rules:

- local storage only
- optional
- no login
- no upload
- no analytics
- user can clear favorites

Suggested UI copy:

```txt
Favorites are stored locally in this browser only. They are not uploaded or used to score you.
```

## Data systems included

v0.4 builds on these data systems:

- `src/data/formula_cards.json`
- `src/data/example_gallery.json`
- `src/data/cross_reference_map.json`
- `src/data/variable_glossary.json`
- `src/data/family_tokens.json`
- `src/data/expansion_candidates.json`

## Validation requirements

Before release:

```bash
npm run validate-data
npm run build
```

Validation should check:

- formula cards
- example gallery records
- cross-reference map edges
- learning paths
- missing formula references
- duplicate IDs
- invalid categories/status values

## Accessibility requirements

v0.4 should include at least a spot-check against:

- `docs/accessibility_checklist.md`

Key checks:

- shareable URLs work with keyboard navigation
- compare mode has plain text relationship labels
- example gallery boundary notes are visible
- copy buttons have accessible labels
- Formula of the Day is readable on mobile
- favorites do not rely on color alone

## Privacy requirements

v0.4 must preserve:

- no accounts
- no hidden analytics
- no emotional data collection
- no uploaded reflections by default
- no emotional scoring
- no diagnostic reports

Reference:

- `docs/security_and_privacy.md`

## README updates for v0.4

The README should be updated with:

- live app link
- screenshot or social card preview
- feature list including examples and compare mode
- quick-start commands
- documentation map
- citation section
- privacy/boundary language

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
v0.4.0 upgrades The Hidden Equations of Feeling from a publication scaffold into a more useful interactive atlas, adding shareable formula URLs, smarter compare-mode planning, examples-gallery support, copy-tool planning, and local-first interaction guidance. Symbolic design patterns only — not diagnosis, measurement, or universal law.
```

## Draft changelog bullets

Use these once features are actually implemented:

- Added shareable formula-card URLs.
- Added cross-reference-powered compare suggestions.
- Added examples gallery UI.
- Added copy tools for formulas, prompts, examples, and Markdown cards.
- Added Formula of the Day.
- Added local-only favorites.
- Improved README and app boundary copy.
- Improved validation and data documentation.
- Preserved local-first, non-diagnostic, non-scoring privacy boundary.

## Known limitations to update before release

Replace this section with real status before tagging.

Potential limitations:

- Examples gallery may still be starter-sized.
- Cross-reference map may need more pairings.
- Formula of the Day may use simple deterministic selection.
- Favorites may be browser-local only and not synced.
- App may still need broader accessibility testing.

## Release definition of done

v0.4.0 can be tagged when:

- [ ] validation passes
- [ ] production build passes
- [ ] GitHub Pages deploys successfully
- [ ] shareable formula URLs work
- [ ] compare mode uses cross-reference data or clearly defers it
- [ ] examples gallery renders or is clearly deferred
- [ ] copy tools work or are clearly deferred
- [ ] local-only privacy language is visible for any saved state
- [ ] README reflects implemented features
- [ ] release notes distinguish implemented features from planned ones
- [ ] no known boundary blockers remain

## Boundary footer for release notes

> The Hidden Equations of Feeling uses formulas as creative pattern language. It does not diagnose, measure, rank, or score people.
