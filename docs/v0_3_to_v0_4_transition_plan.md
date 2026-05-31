# v0.3 to v0.4 Transition Plan

This plan bridges **The Hidden Equations of Feeling** from the v0.3 publication foundation into the v0.4 interactive app phase.

v0.3 is about making the project honest, runnable, documented, and citable.
v0.4 is about making the app more useful, delightful, shareable, and alive.

## Core transition principle

> Do not rush into features until the foundation is green.

The app should become more interactive without becoming clinical, diagnostic, manipulative, or score-like.

## Boundary lock

Every v0.4 feature must preserve:

> Symbolic design patterns only — not diagnosis, measurement, or universal law.

The v0.4 app can be more playful and powerful, but it must not become a psychological test, emotional score, or persuasion tool.

## Phase 0 — Finish v0.3 release foundation

Goal: make sure the existing scaffold is stable enough to tag.

Required checks:

- [ ] `npm run validate-data` passes.
- [ ] `npm run build` passes.
- [ ] GitHub Pages source is set to GitHub Actions.
- [ ] Deploy GitHub Pages workflow is green.
- [ ] Live app opens at the public URL.
- [ ] README includes live app link and boundary statement.
- [ ] Release notes draft is ready.
- [ ] License split is clear.
- [ ] `CITATION.cff` and `.zenodo.json` are present.
- [ ] No known boundary blockers remain.

Reference docs:

- `docs/release_readiness_matrix.md`
- `docs/release_checklist.md`
- `docs/v0_3_release_notes_draft.md`
- `docs/github_pages_setup.md`
- `docs/zenodo_setup.md`

## Phase 1 — Tag v0.3.0

Goal: create the first public release checkpoint.

Steps:

1. Confirm validation and build pass.
2. Confirm GitHub Pages deploy is green.
3. Create GitHub release tag:

   ```txt
   v0.3.0
   ```

4. Use the release notes from:

   ```txt
   docs/v0_3_release_notes_draft.md
   ```

5. If ready, connect/import the release into Zenodo.
6. Add DOI badge to README after Zenodo mints it.

Definition of done:

- [ ] GitHub release exists.
- [ ] Release notes include boundary statement.
- [ ] Zenodo record is created or ready.
- [ ] README is updated if DOI exists.

## Phase 2 — Stabilize data before v0.4 features

Goal: make data reliable before building more UI around it.

Data systems now include:

- `src/data/formula_cards.json`
- `src/data/example_gallery.json`
- `src/data/cross_reference_map.json`
- `src/data/variable_glossary.json`
- `src/data/family_tokens.json`
- `src/data/expansion_candidates.json`

Tasks:

- [ ] Review formula IDs for stability.
- [ ] Review example IDs for stability.
- [ ] Review cross-reference edges for missing or weak links.
- [ ] Confirm all recommended compare pairs point to existing formula IDs.
- [ ] Confirm sensitive formulas have boundary and misuse warnings.
- [ ] Confirm starter examples are gentle and useful.
- [ ] Keep candidate formulas separate from canonical formulas.

Definition of done:

- [ ] `npm run validate-data` passes after data review.
- [ ] Data files are stable enough for app features.

## Phase 3 — First v0.4 app feature: shareable formula URLs

Goal: make every formula linkable.

Why first:

- helps sharing
- helps docs
- helps examples link back to cards
- helps future graph and guided modes

Suggested behavior:

```txt
/#/card/fear_threat_forecast_loop
```

Tasks:

- [ ] Read selected card from URL hash on load.
- [ ] Update URL hash when a card is selected.
- [ ] Handle missing or invalid card IDs gracefully.
- [ ] Add copy-link button later if desired.
- [ ] Ensure GitHub Pages base path still works.

Boundary note:

Card URLs should link to creative formula cards, not user-specific emotional states.

## Phase 4 — Second v0.4 feature: smarter compare mode

Goal: use `cross_reference_map.json` to recommend meaningful comparisons.

Tasks:

- [ ] Load `cross_reference_map.json` in the app.
- [ ] Add suggested compare pairs.
- [ ] Show relationship label.
- [ ] Show why the pair matters.
- [ ] Highlight `mirror`, `buffer`, and `repair_path` relationships.
- [ ] Add boundary text:

   ```txt
   This comparison shows symbolic design relationships, not psychological measurements.
   ```

Definition of done:

- [ ] User can select a recommended pair.
- [ ] Compare mode explains the relationship.
- [ ] Boundary remains visible.

## Phase 5 — Third v0.4 feature: examples gallery page

Goal: make formulas practical through worked examples.

Data source:

```txt
src/data/example_gallery.json
```

Tasks:

- [ ] Add examples gallery component/page.
- [ ] Filter examples by category.
- [ ] Link each example to its formula card.
- [ ] Show scenario, example text, why it works, and how to use.
- [ ] Show boundary note and misuse warning.
- [ ] Keep examples short and readable.

Definition of done:

- [ ] Starter examples render.
- [ ] Formula links work.
- [ ] Boundary notes are visible.
- [ ] Mobile layout is usable.

## Phase 6 — Fourth v0.4 feature: copy tools

Goal: help writers, designers, and educators use the formulas quickly.

Copy buttons:

- Copy formula
- Copy reflection prompt
- Copy Markdown card
- Copy example as Markdown
- Copy citation snippet

Required rule:

Copied Markdown should include a boundary note.

Example:

```txt
Boundary: symbolic design pattern only — not diagnosis, measurement, or universal law.
```

Definition of done:

- [ ] Copy buttons work.
- [ ] Copied output includes boundary where needed.
- [ ] No copied output makes clinical or diagnostic claims.

## Phase 7 — Fifth v0.4 feature: Formula of the Day

Goal: add delight and a simple daily entry point.

Rules:

- deterministic or local-only
- no tracking
- no account required
- no emotional profiling

Tasks:

- [ ] Pick formula using date-based deterministic selection.
- [ ] Show formula, tagline, and prompt.
- [ ] Link to full card.
- [ ] Include boundary line.

Definition of done:

- [ ] Formula of the Day works without network calls or user data.

## Phase 8 — Sixth v0.4 feature: local favorites

Goal: let users save cards they like without accounts or tracking.

Rules:

- browser local storage only
- optional
- user can clear favorites
- no upload
- no analytics

Suggested UI copy:

```txt
Favorites are stored locally in this browser only. They are not uploaded or used to score you.
```

Definition of done:

- [ ] Favorite toggle exists.
- [ ] Favorites filter exists.
- [ ] Clear favorites button exists.
- [ ] Local-only privacy note is visible.

## Phase 9 — v0.4 release candidate

Goal: package v0.4 as a real app upgrade.

Required before v0.4.0:

- [ ] validation passes
- [ ] build passes
- [ ] GitHub Pages deploys
- [ ] shareable formula URLs work
- [ ] smarter compare mode works
- [ ] examples gallery works
- [ ] copy tools work or are deferred clearly
- [ ] accessibility spot-check passes
- [ ] README updated with v0.4 features
- [ ] release notes draft prepared

## v0.4 do-not-build list

Do not add:

- accounts
- server-side profiles
- hidden analytics
- emotional scoring
- diagnostic reports
- personality tests
- clinical-looking dashboards
- persuasion/manipulation tools
- anything that ranks people or groups

## Suggested v0.4 issue order

1. Enable and confirm GitHub Pages deployment.
2. Upgrade README public landing page.
3. Add shareable formula URLs.
4. Add cross-reference-powered compare suggestions.
5. Add examples gallery UI.
6. Add copy tools with boundary-preserving output.
7. Add Formula of the Day.
8. Add local-only favorites.
9. Prepare v0.4 release notes.

## Transition voice

> v0.3 makes it real. v0.4 makes it useful. The boundary keeps it trustworthy.
