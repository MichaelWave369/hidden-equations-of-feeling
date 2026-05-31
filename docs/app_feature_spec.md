# App Feature Spec

This document describes the product/design direction for the React app from v0.3 to v0.4.

## Product goal

Turn **The Hidden Equations of Feeling** into a clear, playful, humane interactive atlas.

The app should help users browse symbolic formula cards, understand emotional/story patterns, compare related formulas, and experiment with variables without ever implying diagnosis, measurement, or human scoring.

## Core boundary

The app must keep this visible:

> Symbolic design patterns only — not diagnosis, measurement, or universal law.

Every interactive feature should reinforce this boundary.

## Primary audiences

- comedy writers
- fiction writers
- game designers
- NPC/dialogue designers
- educators
- reflective-tool builders
- creative researchers
- people who like playful diagrams and emotional pattern maps

## v0.3 app features

### 1. Formula card browser

Users can browse formula cards in a grid/list.

Each card should show:

- family label
- title
- formula
- tagline
- visual family color

### 2. Search

Users can search by:

- title
- formula
- family
- tagline
- variable terms

### 3. Family filter

Users can filter by formula family:

- Comedy
- Drama
- Sadness / Grief
- Joy / Wonder
- Fire / Boundary
- Fear / Threat
- Love / Bridge
- Social Mirror
- Calm / Learning
- General Feeling

### 4. Detail panel

Selecting a card should show:

- title
- formula
- tagline
- variables
- derivation/rationale
- reflection prompt
- example application
- related formulas
- boundary note
- misuse warning

### 5. Formula Playground

The playground lets users move sliders for a selected card’s variables.

The output must be described as symbolic intensity, not a real score.

Required UI text:

> Symbolic, not diagnostic / not measurement.

The playground should:

- show variable sliders
- label variables by role: amplifier, buffer, stabilizer, output
- display a rough symbolic intensity meter
- explain that the meter is educational/playful only

### 6. Compare mode

Users can compare two formula cards.

Useful pairings:

- Comedy Deadpan Delta vs Drama Suspicious Silence Delta
- Giant Hat Disruption vs Overreaction Theorem
- Fear Forecast Loop vs Calm Grounding Loop
- Anger Boundary Engine vs Love Bridge Equation
- Grief Echo Equation vs Joy Lift Equation

## v0.4 candidate features

### 1. Shareable formula URLs

Each card should have a stable URL fragment or route.

Example:

```txt
/hidden-equations-of-feeling/#/card/fear_threat_forecast_loop
```

### 2. Formula of the Day

Show one formula as a daily featured card.

Must be deterministic or local-only. No tracking.

### 3. Favorites

Allow users to save favorite cards locally in browser storage.

Boundary:

- local only
- no account required
- no analytics required

### 4. Copy tools

Each card can include buttons:

- Copy formula
- Copy Markdown card
- Copy reflection prompt
- Copy citation snippet

### 5. Print card mode

A printable card layout for one formula at a time.

Should include:

- title
- formula
- variables
- prompt
- boundary note

### 6. Guided Professor Phi mode

A friendly walkthrough layer that helps users understand one formula at a time.

Tone:

- playful
- kind
- sharp but not cruel
- clear about boundaries

### 7. Family landing pages

Each family can have a page explaining:

- what the family is for
- formula list
- suggested use cases
- sensitive-boundary notes

### 8. Better cross-reference graph

Show related formula links as a simple graph or map.

Keep it lightweight and accessible.

## Accessibility requirements

- Formula cards need plaintext formula labels.
- Sliders need labels and accessible names.
- Color must not be the only family indicator.
- Text contrast should remain readable.
- Interactive controls should work by keyboard.
- Boundary language should be plain and visible.

## Data requirements

The app should use `src/data/formula_cards.json` as the source of truth.

Every formula card should include:

- `id`
- `title`
- `family`
- `familyLabel`
- `formula`
- `formulaPlaintext`
- `formulaSymbols`
- `variables`
- `tagline`
- `derivation`
- `reflectionPrompt`
- `useCases`
- `exampleApplication`
- `crossReferences`
- `boundaryNote`
- `misuseWarning`
- `version`

## Visual direction

The app should feel like:

- retro infographic lab
- comedy science board
- warm emotional atlas
- Professor Phi classroom
- humane design system

Avoid:

- cold clinical dashboards
- therapy-app overclaiming
- dark manipulative gamification
- fake medical seriousness

## Success criteria for v0.4

v0.4 is successful when:

- a new visitor understands the project in 30 seconds
- formulas are easy to browse and search
- boundaries are obvious without feeling heavy
- the playground is fun but clearly non-diagnostic
- writers/designers can copy or use a formula quickly
- the app works well on mobile
- GitHub Pages deploys cleanly

## Boundary lock

No feature should turn these formulas into human scores, emotional rankings, psychological tests, or manipulative persuasion tools.

The purpose is:

> Pattern without shame. Wonder without overclaiming. Feeling without scoring.
