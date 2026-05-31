# Example Gallery Review Workflow

This workflow explains how a worked example moves from rough idea to published example in **The Hidden Equations of Feeling**.

Examples are where the formulas become practical. They should help writers, designers, educators, and reflective-tool builders understand how a formula can be used without turning it into diagnosis, measurement, or human scoring.

## Core review principle

> Show the pattern. Protect the person. Keep the wonder.

Every example must remain a creative demonstration, not a claim about a real person.

## Status stages

### 1. Idea

A quick example concept.

Examples:

- a deadpan comedy line
- a drama scene beat
- an NPC trust arc
- a journaling prompt
- a classroom activity
- a game mechanic
- a poster concept

Idea requirements:

- linked formula if known
- rough category
- one-sentence use case

### 2. Candidate

A candidate example has enough structure to be reviewed.

Candidate requirements:

- `id`
- `formulaId`
- `category`
- `title`
- `summary`
- `scenario`
- `exampleText`
- `whyItWorks`
- `howToUse`
- `boundaryNote`
- `misuseWarning`
- `tags`
- `difficulty`
- `version`
- `status`

Suggested status:

```txt
candidate
```

### 3. Boundary review

Check whether the example preserves the claim/safety boundary.

Questions:

1. Does the example clearly demonstrate creative use rather than diagnosis?
2. Could it be mistaken as a real emotional score or assessment?
3. Does it shame, mock, or rank anyone?
4. Does it touch grief, fear, shame, anger, family conflict, identity, or trauma-adjacent content?
5. If sensitive, is the wording gentle and non-coercive?
6. Is the boundary note specific enough?
7. Is the misuse warning clear?

### 4. Formula-link review

Check that the example truly fits the linked formula.

Questions:

1. Does the formula ID exist in `formula_cards.json`?
2. Does the example actually demonstrate the formula?
3. Does `whyItWorks` explain the connection clearly?
4. Would a new reader understand the formula better after reading the example?
5. Are there related formulas that should be referenced later?

### 5. Category review

Each category has a different responsibility.

#### Comedy writing

Check:

- [ ] Is the joke aimed at a pattern, system, absurdity, or ego rather than a vulnerable person?
- [ ] Does the example show timing, contrast, escalation, or specificity clearly?
- [ ] Is the humor original and not copied from copyrighted material?

#### Drama scene

Check:

- [ ] Does the example show tension or escalation clearly?
- [ ] Does it avoid mocking real pain?
- [ ] Does it include a possible repair, context, or grounding path when needed?

#### NPC design

Check:

- [ ] Does the example describe behavior, dialogue, or game-state logic?
- [ ] Does it avoid treating real relationships like scores?
- [ ] Does the example support humane design?

#### Reflection prompt

Check:

- [ ] Is the prompt optional and gentle?
- [ ] Does it avoid pressure to forgive, calm down, or reframe pain?
- [ ] Does it include a real-world safety note if needed?

#### Classroom activity

Check:

- [ ] Is participation non-shaming?
- [ ] Is the activity about craft/patterns, not student psychology?
- [ ] Is there a clear discussion question?

#### Game mechanic

Check:

- [ ] Does the mechanic create a meaningful feedback loop?
- [ ] Does it avoid shame-based design?
- [ ] Does it preserve player agency?

#### Infographic/poster

Check:

- [ ] Is the formula visually clear?
- [ ] Are callouts useful and not cluttered?
- [ ] Is the boundary footer visible?

### 6. Data validation

After adding the example to `src/data/example_gallery.json`, run:

```bash
npm run validate-data
```

Validation should check:

- required fields
- duplicate IDs
- valid `example_...` ID format
- valid formula references
- allowed category
- allowed difficulty
- allowed status
- at least one tag

### 7. App review

When examples are visible in the app, check:

- example appears in the gallery
- category filter works
- formula link works
- example text is readable
- boundary note is visible
- misuse warning is visible
- mobile layout works
- copy/export preserves the boundary note

### 8. Stable example

An example can be marked stable when:

- boundary review passes
- formula-link review passes
- data validation passes
- app review passes
- wording is clear
- it is useful for a real audience
- it does not overclaim or shame

Suggested status:

```txt
stable
```

## Review rubric

Use pass / revise / hold.

| Area | Question | Result |
|---|---|---|
| Clarity | Can a new user understand the example quickly? | pass / revise / hold |
| Formula fit | Does it actually demonstrate the formula? | pass / revise / hold |
| Usefulness | Can a creator adapt it? | pass / revise / hold |
| Boundary | Is it clearly non-diagnostic and non-scoring? | pass / revise / hold |
| Gentleness | Does it avoid shame and coercion? | pass / revise / hold |
| Originality | Is it original enough for public use? | pass / revise / hold |
| App fit | Will it work in the future gallery UI? | pass / revise / hold |

## Red flags

Hold or revise if an example:

- diagnoses a character or real person
- ranks emotional maturity
- mocks vulnerable people
- treats grief, shame, fear, or trauma as a cheap punchline
- pressures forgiveness, gratitude, calm, or positivity
- implies the formula proves anything scientifically
- copies a copyrighted scene too closely
- encourages manipulation
- lacks a boundary note
- lacks a misuse warning

## Green flags

A strong example:

- is short and memorable
- makes the formula easier to understand
- is original
- can be adapted by a creator
- preserves the boundary
- includes repair, consent, context, or support where needed
- feels playful without becoming careless
- protects the person while showing the pattern

## Publication flow

```txt
Idea
  -> Candidate Example
  -> Boundary Review
  -> Formula-Link Review
  -> Category Review
  -> Data Validation
  -> App Review
  -> Stable Example
```

## Voice lock

> Examples are bridges. They should carry the formula into use without dropping the human into a scorebox.
