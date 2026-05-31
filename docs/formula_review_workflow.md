# Formula Review Workflow

This workflow explains how a new formula moves from idea to canonical card in **The Hidden Equations of Feeling**.

The goal is to keep the atlas playful, useful, careful, and claim-disciplined.

## Review principle

A formula can be funny, poetic, strange, or emotionally sharp — but it must stay honest about what it is:

> A symbolic design pattern and creative metaphor, not a clinical, diagnostic, empirical, universal, or human-score system.

## Status stages

### 1. Candidate

A rough idea or proposal.

A candidate may be stored in:

- `src/data/expansion_candidates.json`
- a GitHub issue
- a draft document
- a contributor proposal

Candidate requirements:

- clear title
- proposed formula
- family
- reason for inclusion
- boundary note

### 2. Draft card

A candidate becomes a draft card when it has the full formula-card structure.

Draft card requirements:

- `id`
- `title`
- `family`
- `formula`
- `formulaPlaintext`
- `formulaSymbols`
- `variables`
- `tagline`
- `derivation`
- `theoreticalEcho`
- `culturalScope`
- `temporalNote`
- `reflectionPrompt`
- `useCases`
- `exampleApplication`
- `crossReferences`
- `boundaryNote`
- `misuseWarning`
- `version`

### 3. Boundary review

The card is checked for claim safety.

Review questions:

1. Does the card clearly say it is symbolic?
2. Could the formula be mistaken for clinical or scientific measurement?
3. Could it shame, rank, diagnose, or manipulate someone?
4. Does it touch grief, shame, fear, anger, trauma-adjacent material, family conflict, or identity?
5. If sensitive, does it include extra care in the boundary and misuse warning?
6. Is the reflection prompt gentle and consent-based?
7. Does the card avoid forced positivity or forced forgiveness?

### 4. Data validation

The card is added to `src/data/formula_cards.json` and validated.

Run:

```bash
npm run validate-data
```

The validator should catch:

- missing required fields
- duplicate IDs
- formula symbols not defined in variables
- cross-references that point to missing cards

### 5. App review

Open the app locally and check:

- card appears in browser
- family filter works
- search can find it
- detail panel renders correctly
- playground sliders are sensible
- formula plaintext is accessible
- boundary and misuse warning are visible
- compare mode still works

### 6. Canonical draft

A card can be marked as canonical draft when:

- data validation passes
- app renders correctly
- boundary review passes
- the card has useful cross-references
- the card does not overclaim

Suggested status:

```txt
draft-v0.3
```

### 7. Stable

A card can be marked stable during a tagged release when:

- it has survived public/internal review
- no boundary concerns remain open
- wording is clear
- examples are useful
- sensitive areas are handled gently
- release notes mention any major formula additions or changes

Suggested status:

```txt
stable
```

### 8. Deprecated

A card can be deprecated if it is confusing, unsafe, redundant, culturally narrow without enough context, or replaced by a better card.

Deprecation should include:

- reason
- replacement card if any
- release version where deprecated

## Formula review rubric

Score each area informally as pass / revise / hold.

| Area | Question | Result |
|---|---|---|
| Clarity | Can a new reader understand it quickly? | pass / revise / hold |
| Usefulness | Does it help writers, designers, educators, or reflection? | pass / revise / hold |
| Boundary | Is it clearly non-diagnostic and non-empirical? | pass / revise / hold |
| Gentleness | Does it avoid shame, coercion, and forced reframing? | pass / revise / hold |
| Specificity | Are variables meaningful rather than vague? | pass / revise / hold |
| App fit | Will it work in cards, search, compare, and playground? | pass / revise / hold |
| Cross-reference | Does it connect to related formulas? | pass / revise / hold |

## Red flags

Hold or revise if a card:

- sounds like a psychological test
- implies a formula can measure a person
- uses clinical language without need
- pressures people to forgive, calm down, or be grateful
- dismisses grief, fear, anger, or shame
- mocks vulnerable people
- claims scientific proof without evidence
- claims universal truth across all cultures
- encourages manipulation or persuasion tactics
- lacks a misuse warning

## Green flags

A strong card:

- is memorable
- is useful for creative work
- has clear amplifiers and buffers
- includes repair, support, context, or consent where needed
- has a gentle reflection prompt
- has a clear boundary note
- connects well to other cards
- preserves wonder without overclaiming

## Review flow summary

```txt
Idea
  -> Candidate
  -> Draft Card
  -> Boundary Review
  -> Data Validation
  -> App Review
  -> Canonical Draft
  -> Stable Release
```

## Project voice

A good formula should feel like:

> Pattern without shame. Wonder without overclaiming. Feeling without scoring.
