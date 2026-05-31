# Example Gallery Schema

This document defines the planned data structure for future worked examples in **The Hidden Equations of Feeling**.

The examples gallery will show how formula cards can be used in comedy writing, drama scenes, NPC design, journaling prompts, classrooms, game mechanics, and infographic/poster design.

## Core boundary

Examples are demonstrations of creative use.

They are not:

- diagnoses
- emotional scores
- psychological profiles
- therapy instructions
- scientific proof
- universal claims
- persuasion or manipulation tools

Required boundary:

> Symbolic design patterns only — not diagnosis, measurement, or universal law.

## Proposed file

Future example records may live in:

```txt
src/data/example_gallery.json
```

The app can later use this file to power an Examples page.

## Example category keys

Use these stable category keys:

```txt
comedy_writing
drama_scene
npc_design
reflection_prompt
classroom_activity
game_mechanic
infographic_poster
```

## Example object

Each example should follow this structure:

```json
{
  "id": "example_deadpan_parking_receipt",
  "formulaId": "comedy_deadpan_delta",
  "category": "comedy_writing",
  "title": "Deadpan Parking Receipt",
  "summary": "A character reports an impossible event with no emotional reaction.",
  "scenario": "A normal errand scene is interrupted by a wildly impossible statement delivered calmly.",
  "exampleText": "The refrigerator has become legally responsible for the garage. Anyway, we are out of mustard.",
  "whyItWorks": "Absurdity is high while emotional reaction is low, creating the deadpan mismatch.",
  "howToUse": "Use this pattern when a scene needs a clean absurdity spike without characters winking at the audience.",
  "boundaryNote": "Comedy craft pattern only; not a claim about real emotional health.",
  "misuseWarning": "Do not use deadpan examples to dismiss real distress or emotional communication.",
  "tags": ["deadpan", "absurdity", "comedy", "dialogue"],
  "difficulty": "easy",
  "version": "0.4.0",
  "status": "candidate"
}
```

## Required fields

### `id`

Stable machine-readable example ID.

Rules:

- lowercase
- underscores
- no spaces
- should describe the example

Example:

```txt
example_deadpan_parking_receipt
```

### `formulaId`

The ID of the formula card this example demonstrates.

This ID must exist in `src/data/formula_cards.json`.

Example:

```txt
comedy_deadpan_delta
```

### `category`

The example category.

Allowed values:

- `comedy_writing`
- `drama_scene`
- `npc_design`
- `reflection_prompt`
- `classroom_activity`
- `game_mechanic`
- `infographic_poster`

### `title`

Short public title.

### `summary`

One-sentence summary.

### `scenario`

Context for the example.

### `exampleText`

The actual example: a scene beat, dialogue sample, prompt, activity, mechanic, or poster concept.

### `whyItWorks`

Explain how the example demonstrates the formula.

### `howToUse`

Explain how a creator could adapt the example.

### `boundaryNote`

A claim/safety boundary specific to the example.

### `misuseWarning`

A clear note about how not to use the example.

### `tags`

Search/filter tags.

### `difficulty`

Suggested values:

- `easy`
- `medium`
- `advanced`

### `version`

The version where the example was added or updated.

### `status`

Suggested values:

- `candidate`
- `draft`
- `review`
- `stable`
- `deprecated`

## Optional fields

### `relatedFormulaIds`

Other formula IDs that connect to this example.

### `promptQuestions`

Extra questions for classroom, journaling, or design workshop use.

### `uiNotes`

Notes for how the example should render in the app.

### `posterVisual`

For infographic/poster examples, a short visual direction.

### `sourceNote`

If an example is inspired by a public-domain, original, or cited source, explain that here.

Avoid using copyrighted scenes or direct imitation of living creators.

## Category-specific guidance

### Comedy writing

Should include:

- setup
- beat or line
- why it works
- cruelty check

Boundary:

> Comedy craft pattern only; punch at the pattern, not vulnerable people.

### Drama scene

Should include:

- conflict setup
- escalation mechanic
- possible repair path
- boundary note

Boundary:

> Story-design lens only; do not use to mock real pain.

### NPC design

Should include:

- NPC state
- player action or trigger
- dialogue shift
- gameplay implication

Boundary:

> Game design logic only; not a real relationship score.

### Reflection prompt

Should include:

- gentle prompt
- optional follow-up
- support/safety note if sensitive

Boundary:

> Reflection invitation only; not clinical guidance.

### Classroom activity

Should include:

- activity instructions
- discussion question
- non-shaming participation note

Boundary:

> Teaching activity only; not a test of intelligence or personality.

### Game mechanic

Should include:

- mechanic description
- player feedback loop
- avoid-list

Boundary:

> Design pattern only; avoid shame-based mechanics.

### Infographic/poster

Should include:

- title
- visual motif
- callouts
- boundary footer

Boundary:

> Public educational graphic only; not diagnosis or measurement.

## Validation ideas

A future validator can check:

- every example has a valid `formulaId`
- every category uses an allowed key
- every example has a boundary note
- every example has a misuse warning
- every example has at least one tag
- sensitive examples include gentle language

## First schema-backed examples to create

Recommended first 12 records:

1. `example_deadpan_parking_receipt`
2. `example_giant_hat_format_collapse`
3. `example_suspicious_silence_group_chat`
4. `example_overreaction_public_scene`
5. `example_fear_forecast_reflection`
6. `example_calm_grounding_room`
7. `example_trust_shopkeeper_npc`
8. `example_anger_broken_agreement`
9. `example_joy_free_smile_shop`
10. `example_grief_memory_object`
11. `example_rule_of_three_classroom`
12. `example_motivation_small_win_game`

## Do-not-build list

Do not publish examples that:

- diagnose fictional or real people
- score emotional maturity
- mock grief, fear, shame, trauma, or vulnerability
- encourage manipulation
- pressure forgiveness or positivity
- imply scientific proof
- copy copyrighted scenes too closely
- turn sensitive pain into cheap punchlines

## Voice lock

> Examples should make the formula usable while keeping the person protected.
