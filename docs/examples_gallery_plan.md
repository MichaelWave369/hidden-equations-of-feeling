# Examples Gallery Plan

This plan defines a future examples gallery for **The Hidden Equations of Feeling**.

The examples gallery should show how the formulas can be used in real creative contexts without turning them into diagnosis, measurement, or emotional scoring.

## Gallery goal

Help users move from:

```txt
This formula is interesting.
```

to:

```txt
I understand how to use this in a scene, game, joke, prompt, classroom discussion, or NPC design.
```

## Core boundary

Every example should preserve the project boundary:

> Symbolic design patterns only — not diagnosis, measurement, or universal law.

Examples should show craft use, not human scoring.

## Example categories

### 1. Comedy writing examples

Purpose: show how a formula can structure a joke, sketch, scene, callback, or absurd escalation.

Example formulas:

- Giant Hat Disruption Equation
- Deadpan Delta
- Escalation Spiral
- Rule of Three Detonation
- False Importance Theorem
- Professor Phi Comedy Constant

Example format:

```md
## Comedy Example: Deadpan Delta

Formula: `D = A / E`

Setup: A character reports an impossible event with no emotional reaction.

Scene beat:
"The refrigerator has become legally responsible for the garage. Anyway, we are out of mustard."

Why it works:
The absurdity is high while emotional reaction is low, creating the deadpan mismatch.

Boundary:
This is a comedy craft pattern, not a claim about real emotional health.
```

### 2. Drama scene examples

Purpose: show how a formula can map tension, misunderstanding, or escalation in a scene.

Example formulas:

- Overreaction Theorem
- Suspicious Silence Delta
- Grudge Callback Loop
- Specificity Weaponizer
- Professor Phi Drama Constant

Example format:

```md
## Drama Example: Suspicious Silence Delta

Formula: `D = A / E`

Scene:
A character sees a message marked as read. No reply arrives. The story they invent becomes bigger than the evidence.

Why it works:
Assumptions rise while evidence stays tiny.

Repair path:
Direct communication, rest, or context can lower the drama pressure.

Boundary:
This is a story-design lens, not a way to mock anxiety or relational pain.
```

### 3. NPC design examples

Purpose: help game designers use formulas to shape behavior, dialogue, trust, conflict, and memory.

Example formulas:

- Fear Forecast Loop
- Anger Boundary Engine
- Love Bridge Equation
- Shame Exposure Collapse
- Calm Grounding Loop
- Trust Continuity Bridge

Example format:

```md
## NPC Example: Trust Continuity Bridge

Formula: `T = (Consistency × Honesty × Repair) / (Betrayal + Ambiguity)`

NPC behavior:
The shopkeeper becomes warmer over time when the player keeps promises, tells the truth, and repairs mistakes.

Dialogue shift:
Low trust: "I have seen promises walk out that door before."
High trust: "You came back. That matters more than you think."

Boundary:
This is NPC design logic, not a real relationship score.
```

### 4. Journaling prompt examples

Purpose: show how formulas can become gentle reflection prompts.

Example formulas:

- Grief Echo Equation
- Joy Lift Equation
- Fear Forecast Loop
- Anger Boundary Engine
- Calm Grounding Loop
- Shame Exposure Collapse

Example format:

```md
## Reflection Example: Fear Forecast Loop

Formula: `F = (T × U × I²) / (S + K + P)`

Gentle prompt:
What is known, what is imagined, and what support would make the next step safer?

Optional follow-up:
Name one safety signal that is already present.

Boundary:
This is a reflection prompt, not clinical guidance. If danger is immediate, real-world safety comes first.
```

### 5. Classroom / workshop examples

Purpose: help educators discuss story patterns and emotional literacy without turning students into case studies.

Example formulas:

- Rule of Three Detonation
- False Importance Theorem
- Suspicious Silence Delta
- Hope Horizon Lift
- Curiosity Doorway Formula
- Compassion Bridge Equation

Example format:

```md
## Classroom Example: Rule of Three Detonation

Formula: `P = 2L + X`

Activity:
Students write two ordinary list items and one surprising third item.

Example:
"I packed socks, a toothbrush, and a raccoon with strong opinions about zoning law."

Discussion:
How does the third item break the pattern?

Boundary:
This is a writing exercise, not a test of personality or intelligence.
```

### 6. Game mechanic examples

Purpose: translate formulas into mechanics, UI states, quest logic, or relationship arcs.

Example formulas:

- Motivation Ignition Curve
- Boredom Agency Drain
- Confidence Evidence Stack
- Gratitude Gift Lens
- Resentment Pressure Ledger

Example format:

```md
## Game Mechanic Example: Motivation Ignition Curve

Formula: `Mot = (Meaning × Agency × Small Win) / (Overwhelm + Shame)`

Mechanic:
A learning quest becomes easier to continue when the player gets meaningful context, choice, and a small early success.

Avoid:
Punishing failure with shame loops.

Boundary:
This is a design pattern, not a productivity score.
```

### 7. Infographic/poster examples

Purpose: show how formulas can become public-friendly visual cards or posters.

Each poster example should include:

- title
- formula
- visual motif
- color family
- 3–5 callout labels
- boundary footer

Example boundary footer:

```txt
Symbolic design pattern only — not diagnosis, measurement, or universal law.
```

## Example card data model

Future examples may live in a file such as:

```txt
src/data/example_gallery.json
```

Suggested structure:

```json
{
  "id": "example_deadpan_parking_receipt",
  "formulaId": "comedy_deadpan_delta",
  "category": "comedy_writing",
  "title": "Deadpan Parking Receipt",
  "scenario": "A character reports an impossible event with no emotional reaction.",
  "exampleText": "The refrigerator has become legally responsible for the garage. Anyway, we are out of mustard.",
  "whyItWorks": "Absurdity is high while emotional reaction is low, creating the deadpan mismatch.",
  "boundaryNote": "Comedy craft pattern only; not a claim about real emotional health.",
  "version": "0.4.0"
}
```

## Gallery UI concept

Future app gallery page:

- category filter
- formula filter
- short example cards
- expanded example view
- copy example as Markdown
- link back to formula card
- boundary note on every example

## First examples to build

Recommended first 12:

1. Deadpan Delta comedy example
2. Giant Hat Disruption sketch example
3. Suspicious Silence drama example
4. Overreaction Theorem scene example
5. Fear Forecast Loop reflection example
6. Calm Grounding Loop reflection example
7. Trust Continuity Bridge NPC example
8. Anger Boundary Engine conflict example
9. Joy Lift cozy game example
10. Grief Echo memory-scene example
11. Rule of Three classroom example
12. Motivation Ignition learning-game example

## Example review checklist

Before publishing an example, confirm:

- [ ] It has a linked formula ID.
- [ ] It has a clear category.
- [ ] It shows a practical use.
- [ ] It does not diagnose or score a person.
- [ ] It includes a boundary note.
- [ ] Sensitive examples are gentle and non-shaming.
- [ ] It is useful without being too long.
- [ ] It can be copied or adapted by a creator.

## Do-not-build list

Do not create examples that:

- diagnose fictional or real people
- rank emotional maturity
- mock grief, fear, shame, or trauma
- encourage manipulation
- imply a formula proves anything scientifically
- turn sensitive feelings into cheap punchlines
- pressure forgiveness or positivity

## Voice lock

> Show the pattern. Protect the person. Keep the wonder.
