# Contributor Formula Template

Use this template when proposing a new formula card for **The Hidden Equations of Feeling**.

## Core principle

A formula card is a symbolic design pattern. It should help writers, designers, educators, NPC builders, or reflective-tool makers notice a pattern more clearly.

It must not claim to diagnose, measure, score, predict, or explain a person.

---

## Formula proposal

### Title

`The [Name] Equation`

### Family

Choose one:

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

### Formula

```txt
Output = (Amplifier × Amplifier) / (Buffer + Stabilizer)
```

### Plain-language formula

Write the formula in screen-reader friendly language.

Example:

```txt
Fear equals threat times uncertainty times imagination squared, divided by safety signals plus knowledge plus support.
```

### Variables

| Symbol | Meaning | Role |
|---|---|---|
| Output | Name of the pattern | output |
| A | First amplifier | amplifier |
| B | Second amplifier | amplifier |
| C | First buffer | buffer |
| D | Stabilizing factor | stabilizer |

### Tagline

A memorable one-sentence summary.

Example:

> Fear gets louder when the map is blank.

### Derivation / rationale

Explain why the structure makes sense as a creative metaphor.

Questions to answer:

- What makes the pattern increase?
- What makes it soften or stabilize?
- Why are these variables grouped together?

### Theoretical echo

Name any nearby craft, story, emotion, comedy, or design concept this resembles.

Keep it humble. This is not proof.

### Cultural scope

Explain where the formula might be culturally situated.

Example:

> Drafted from Western comedy/story-design patterns; may not generalize across all cultures or contexts.

### Temporal note

Say whether the pattern changes quickly, slowly, cyclically, or nonlinearly.

### Reflection prompt

One question that helps someone use the formula gently.

Example:

> What is known, what is imagined, and what support would make the next step safer?

### Use cases

List 2–5 use cases.

Examples:

- story design
- NPC behavior
- comedy writing
- classroom discussion
- journaling prompt

### Example application

Give a short scene, design use, or reflection example.

### Cross-references

List related formula IDs if known.

Example:

```txt
fear_threat_forecast_loop
calm_grounding_loop
love_bridge_equation
```

### Poster visual

Describe the visual idea if this became an infographic card.

### Boundary note

Write one clear boundary.

Example:

> Creative metaphor only; not clinical, diagnostic, empirical, universal, or a human score.

### Misuse warning

Write one misuse warning.

Example:

> Do not use this formula to shame, manipulate, diagnose, or dismiss someone’s lived experience.

---

## Boundary checklist

Before submitting, confirm:

- [ ] The formula is framed as a symbolic design metaphor.
- [ ] It does not claim to diagnose or measure people.
- [ ] It does not target or shame a vulnerable group.
- [ ] It includes a boundary note.
- [ ] It includes a misuse warning.
- [ ] It can be useful for storytelling, design, reflection, or teaching.
- [ ] It preserves wonder without overclaiming.

## JSON starter

```json
{
  "id": "example_formula_id",
  "title": "The Example Equation",
  "family": "general_feeling",
  "familyLabel": "General Feeling",
  "formula": "E = (A × B) / (C + D)",
  "formulaPlaintext": "Example equals A times B divided by C plus D.",
  "formulaSymbols": ["E", "A", "B", "C", "D"],
  "variables": [
    { "symbol": "E", "meaning": "Example output", "role": "output" },
    { "symbol": "A", "meaning": "First amplifier", "role": "amplifier" },
    { "symbol": "B", "meaning": "Second amplifier", "role": "amplifier" },
    { "symbol": "C", "meaning": "First buffer", "role": "buffer" },
    { "symbol": "D", "meaning": "Stabilizer", "role": "stabilizer" }
  ],
  "tagline": "A short memorable line.",
  "derivation": "Why the symbolic structure makes sense.",
  "theoreticalEcho": "Nearby craft or theory echo, without claiming proof.",
  "culturalScope": "Where this metaphor may or may not apply.",
  "temporalNote": "How the pattern changes over time.",
  "reflectionPrompt": "A gentle question for use.",
  "useCases": ["story design", "reflection prompt"],
  "exampleApplication": "A short example.",
  "crossReferences": [],
  "posterVisual": "Infographic idea.",
  "visualMotif": "Visual motif.",
  "familyColor": "#9EA7AD",
  "boundaryNote": "Creative metaphor only; not clinical, diagnostic, empirical, universal, or a human score.",
  "misuseWarning": "Do not use to shame, manipulate, diagnose, or dismiss lived experience.",
  "intensity": "medium",
  "version": "0.3.0",
  "createdDate": "2026-05-31",
  "status": "candidate",
  "license": "CC BY 4.0 recommended for text/data."
}
```
