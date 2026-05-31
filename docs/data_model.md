# Data Model

This document explains the data structure behind **The Hidden Equations of Feeling**.

The React app should treat `src/data/formula_cards.json` as the primary source of truth for formula content.

## Core idea

Each formula card is a symbolic design pattern.

A formula card should be useful for:

- story design
- comedy writing
- drama writing
- NPC behavior design
- reflective prompts
- education
- playful infographic design

A formula card must not be framed as diagnosis, measurement, prediction, therapy, or a human score.

## Primary files

### `src/data/formula_cards.json`

The main list of formula cards.

### `src/data/formula_schema.json`

The JSON Schema describing the expected formula-card structure.

### `src/data/variable_glossary.json`

A shared glossary explaining common symbols, operators, and variable roles.

### `src/data/family_tokens.json`

Design tokens for formula families: labels, colors, and visual motifs.

### `src/data/expansion_candidates.json`

Draft future formulas that are not yet canonical cards.

## Formula card object

Each card should follow this structure:

```json
{
  "id": "fear_threat_forecast_loop",
  "title": "The Fear Forecast Loop",
  "family": "fear_threat",
  "familyLabel": "Fear & Threat",
  "formula": "F = (T × U × I²) / (S + K + P)",
  "formulaPlaintext": "Fear equals threat times uncertainty times imagination squared, divided by safety signals plus knowledge plus support.",
  "formulaSymbols": ["F", "T", "U", "I", "S", "K", "P"],
  "variables": [],
  "tagline": "Fear grows in the unknown; support gives the forecast edges.",
  "derivation": "Why the symbolic structure makes sense.",
  "theoreticalEcho": "Nearby craft/theory echo without claiming proof.",
  "culturalScope": "Where this metaphor may or may not apply.",
  "temporalNote": "How the pattern changes over time.",
  "reflectionPrompt": "A gentle question for use.",
  "useCases": [],
  "exampleApplication": "A short example.",
  "crossReferences": [],
  "posterVisual": "Infographic idea.",
  "visualMotif": "Visual motif.",
  "familyColor": "#5562D6",
  "boundaryNote": "Creative metaphor only; not clinical, diagnostic, empirical, universal, or a human score.",
  "misuseWarning": "Do not use to shame, manipulate, diagnose, or dismiss lived experience.",
  "intensity": "high",
  "version": "0.3.0",
  "createdDate": "2026-05-31",
  "status": "draft-v0.3",
  "license": "CC BY 4.0 recommended for text/data."
}
```

## Required fields

### `id`

A stable machine-readable identifier.

Rules:

- lowercase
- use underscores
- no spaces
- should not change after release unless absolutely necessary

Example:

```txt
fear_threat_forecast_loop
```

### `title`

The public display name of the formula.

Example:

```txt
The Fear Forecast Loop
```

### `canonicalTitle`

Optional. Use when the public-safe title differs from the origin title.

Example:

```txt
The Turd Ferguson Equation
```

### `family`

Machine-readable family key.

Allowed families:

- `comedy`
- `drama`
- `sadness_grief`
- `joy_wonder`
- `fire_boundary`
- `fear_threat`
- `love_bridge`
- `social_mirror`
- `calm_learning`
- `general_feeling`

### `familyLabel`

Human-readable family name.

Example:

```txt
Fear & Threat
```

### `formula`

The display formula.

Example:

```txt
F = (T × U × I²) / (S + K + P)
```

### `formulaPlaintext`

Screen-reader friendly explanation of the formula.

Example:

```txt
Fear equals threat times uncertainty times imagination squared, divided by safety signals plus knowledge plus support.
```

### `formulaSymbols`

List every symbol used in the formula.

Every symbol in this list must have a matching entry in `variables`.

### `variables`

List of variable objects.

Each variable requires:

- `symbol`
- `meaning`
- `role`

Example:

```json
{
  "symbol": "T",
  "meaning": "Threat",
  "role": "amplifier"
}
```

Allowed common roles:

- `output`
- `amplifier`
- `buffer`
- `stabilizer`
- `signal`
- `bridge`

### `tagline`

A short memorable summary.

### `derivation`

Why the symbolic structure makes sense.

### `theoreticalEcho`

Nearby theory, craft pattern, or design concept.

Keep this humble. It is not proof.

### `culturalScope`

A note explaining cultural limits or context.

### `temporalNote`

A note explaining how the pattern changes over time.

### `reflectionPrompt`

A gentle, consent-based question.

### `useCases`

List of practical uses.

Examples:

- `story design`
- `NPC behavior`
- `comedy writing`
- `reflection prompt`

### `exampleApplication`

A short scene, use case, or design example.

### `crossReferences`

List of related formula IDs.

Every ID listed here should exist in `formula_cards.json`.

### `posterVisual`

Short prompt for future infographic/poster design.

### `visualMotif`

Short description of the visual style.

### `familyColor`

Hex color used by the app.

Example:

```txt
#5562D6
```

### `boundaryNote`

A clear claim boundary.

Must not be empty.

### `misuseWarning`

A clear warning about how the card should not be used.

Must not be empty.

### `intensity`

Approximate content intensity.

Allowed values:

- `low`
- `medium`
- `high`

This is for content design only. It is not a person-score.

### `version`

Card version.

Example:

```txt
0.3.0
```

### `status`

Current lifecycle state.

Suggested values:

- `candidate`
- `draft-v0.3`
- `review`
- `stable`
- `deprecated`

### `license`

Text/data license note.

Recommended:

```txt
CC BY 4.0 recommended for text/data.
```

## Validation rules

The validator should check:

- required fields exist
- IDs are unique
- every `formulaSymbols` entry has a matching variable
- every `crossReferences` entry points to an existing card
- `variables` includes an `output` variable
- sensitive cards have boundary and misuse warnings

## Boundary rules for data

The data must never describe formulas as:

- clinical tests
- diagnoses
- empirical laws
- personality scores
- human rankings
- manipulation tools
- universal truths

Preferred phrasing:

> symbolic design pattern

> creative metaphor

> reflection prompt

> story/NPC/comedy/drama design lens

## Versioning guidance

Use semantic-ish versioning for the project:

- `0.3.x` for scaffold/data cleanup
- `0.4.x` for app feature upgrades
- `0.5.x` for creator/educator tools
- `1.0.0` for stable public release

Card-level changes can use the same version as the release that introduced or updated them.
