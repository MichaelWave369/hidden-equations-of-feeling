# v0.4 Feature Backlog

This backlog organizes the next app upgrades for **The Hidden Equations of Feeling** after the v0.3 publication scaffold.

The v0.4 goal is simple:

> Make the app feel alive, useful, shareable, and still clearly non-diagnostic.

## Boundary lock

Every feature must preserve the project boundary:

> Symbolic design patterns only — not diagnosis, measurement, or universal law.

No v0.4 feature should turn formulas into scores of people, psychological tests, persuasion tools, or clinical-looking dashboards.

## Priority legend

- **P0**: needed before a confident public release
- **P1**: high-value v0.4 feature
- **P2**: nice improvement
- **P3**: later / experimental

## P0 — Foundation polish

### 1. Confirm GitHub Pages deploy

**Goal:** Make sure the live app opens correctly.

Tasks:

- [ ] Enable Pages source as GitHub Actions.
- [ ] Confirm workflow runs green.
- [ ] Confirm app opens at public URL.
- [ ] Confirm Vite base path works.
- [ ] Add live app link to README.

### 2. README upgrade

**Goal:** Make README work as a public landing page.

Tasks:

- [ ] Add social preview card.
- [ ] Add live app link.
- [ ] Add documentation map.
- [ ] Add example formula.
- [ ] Add citation section.
- [ ] Add contribution section.
- [ ] Keep boundary visible near the top.

### 3. Full data import and validation

**Goal:** Make the formula atlas data complete and validated.

Tasks:

- [ ] Import full formula-card dataset.
- [ ] Run `npm run validate-data`.
- [ ] Confirm no broken cross-references.
- [ ] Confirm every sensitive card has boundary and misuse warning.
- [ ] Confirm app renders all families.

## P1 — Core user experience

### 4. Shareable formula URLs

**Goal:** Each formula card can be linked directly.

Possible route format:

```txt
/#/card/fear_threat_forecast_loop
```

Tasks:

- [ ] Add route/hash state for selected card.
- [ ] Update URL when selecting a card.
- [ ] Load selected card from URL on page load.
- [ ] Handle missing/invalid card IDs gracefully.

### 5. Copy tools

**Goal:** Let users reuse formula cards easily.

Buttons:

- Copy formula
- Copy formula + variables
- Copy reflection prompt
- Copy Markdown card
- Copy citation snippet

Boundary:

- copied Markdown should include a short boundary note.

### 6. Better compare mode

**Goal:** Make comparison feel meaningful instead of just two cards side-by-side.

Tasks:

- [ ] Add suggested comparison pairs.
- [ ] Highlight shared symbols.
- [ ] Highlight different meanings for the same symbol.
- [ ] Show a short comparison note.
- [ ] Add Comedy ↔ Drama mirror pairings.

Suggested pairs:

- Deadpan Delta ↔ Suspicious Silence Delta
- Giant Hat Disruption ↔ Overreaction Theorem
- Fear Forecast Loop ↔ Calm Grounding Loop
- Anger Boundary Engine ↔ Love Bridge Equation
- Grief Echo Equation ↔ Joy Lift Equation

### 7. Formula Playground upgrade

**Goal:** Make the symbolic sliders clearer and more emotionally safe.

Tasks:

- [ ] Add explanatory text for amplifier/buffer/stabilizer.
- [ ] Add reset button.
- [ ] Add "this is not a score" label near the meter.
- [ ] Improve meter language from score to symbolic pattern pressure.
- [ ] Add card-specific playground notes if useful.

## P2 — Delight and usability

### 8. Formula of the Day

**Goal:** Feature one formula on the home page.

Rules:

- deterministic or local-only
- no tracking
- no account needed

Tasks:

- [ ] Select formula based on date hash.
- [ ] Show title, formula, tagline, prompt.
- [ ] Link to full card.

### 9. Favorites

**Goal:** Let users save favorite cards locally.

Rules:

- local browser storage only
- no login
- no analytics

Tasks:

- [ ] Add favorite toggle.
- [ ] Add favorites filter.
- [ ] Add clear favorites button.
- [ ] Explain local-only behavior.

### 10. Print card mode

**Goal:** Make formula cards printable.

Tasks:

- [ ] Create print-friendly card layout.
- [ ] Include formula, variables, prompt, boundary.
- [ ] Hide unnecessary app controls in print.
- [ ] Test browser print preview.

### 11. Family landing pages

**Goal:** Make each formula family easier to understand.

Each family page should include:

- family description
- formula list
- best use cases
- sensitive-boundary notes
- suggested starting cards

## P3 — Experimental features

### 12. Professor Phi guided mode

**Goal:** Add a playful walkthrough voice.

Tone:

- kind
- funny
- original
- claim-disciplined
- sharp without cruelty

Tasks:

- [ ] Add optional guidance panel.
- [ ] Add short explanation for each selected card.
- [ ] Add "explain like a writer" mode.
- [ ] Add "explain like a game designer" mode.

### 13. Formula remix sandbox

**Goal:** Let users draft their own symbolic formulas.

Boundary:

- saved locally only unless user exports
- requires clear misuse warning
- no scoring people

Tasks:

- [ ] Add blank formula builder.
- [ ] Add variable editor.
- [ ] Add boundary prompt.
- [ ] Export draft as Markdown/JSON.

### 14. Graph map

**Goal:** Visualize relationships between formulas.

Tasks:

- [ ] Create simple cross-reference graph.
- [ ] Filter by family.
- [ ] Keep graph accessible with text fallback.

## v0.4 success criteria

v0.4 is successful when:

- a visitor understands the project in 30 seconds
- formula cards are easy to find and share
- the app feels playful and polished
- boundaries remain visible and humane
- playground controls feel fun, not clinical
- copy/share tools make the atlas useful for real creative work
- GitHub Pages deploys cleanly

## Do-not-build list

Do not add:

- user accounts
- analytics by default
- emotional scoring
- diagnostic results
- personality profiles
- clinical-looking reports
- manipulative persuasion features
- anything that ranks people or groups

## Public voice lock

> Pattern without shame. Wonder without overclaiming. Feeling without scoring.
