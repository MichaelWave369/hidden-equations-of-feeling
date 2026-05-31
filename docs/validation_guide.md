# Validation Guide

This guide explains how data validation works in **The Hidden Equations of Feeling** and how to fix common failures.

The validator is intentionally simple. It protects the repo from broken data references, missing required fields, duplicate IDs, and cross-reference mistakes.

## Run validation

From the project root:

```bash
npm run validate-data
```

A successful result should look similar to:

```txt
Formula data validation passed for X cards.
Example gallery validation passed for Y examples.
Cross-reference map validation passed for Z edges and N learning paths.
```

## Files validated

The validator checks these files:

```txt
src/data/formula_cards.json
src/data/example_gallery.json
src/data/cross_reference_map.json
```

## Formula card checks

For every formula card, the validator checks:

- required fields exist
- IDs are unique
- every `formulaSymbols` entry is defined in `variables`
- every card has at least one variable with role `output`
- every `crossReferences` entry points to an existing formula card

### Required formula fields

```txt
id
title
family
formula
formulaPlaintext
formulaSymbols
variables
tagline
reflectionPrompt
boundaryNote
misuseWarning
version
```

### Common formula errors

#### Missing field

Example error:

```txt
formula card fear_threat_forecast_loop missing reflectionPrompt
```

Fix:

Add the missing field to that card.

#### Duplicate formula ID

Example error:

```txt
duplicate formula card id joy_wonder_lift
```

Fix:

Rename one of the duplicated card IDs. IDs should be stable, lowercase, and underscore-separated.

#### Missing variable symbol

Example error:

```txt
fear_threat_forecast_loop formulaSymbols includes K but variables does not define it
```

Fix:

Either add a variable object for `K`, or remove `K` from `formulaSymbols` if it is not actually used.

#### Missing output variable

Example error:

```txt
anger_boundary_engine must define at least one output variable
```

Fix:

Add a variable with role `output`.

Example:

```json
{ "symbol": "A", "meaning": "Anger signal", "role": "output" }
```

#### Broken cross-reference

Example error:

```txt
love_bridge_equation references missing card trust_continuity_bridge
```

Fix:

Either add the missing formula card or remove/fix the `crossReferences` ID.

## Example gallery checks

For every example-gallery record, the validator checks:

- required fields exist
- IDs are unique
- ID starts with `example_`
- `formulaId` points to an existing formula card
- category is allowed
- difficulty is allowed
- status is allowed
- at least one tag exists

### Required example fields

```txt
id
formulaId
category
title
summary
scenario
exampleText
whyItWorks
howToUse
boundaryNote
misuseWarning
tags
difficulty
version
status
```

### Allowed example categories

```txt
comedy_writing
drama_scene
npc_design
reflection_prompt
classroom_activity
game_mechanic
infographic_poster
```

### Allowed difficulty values

```txt
easy
medium
advanced
```

### Allowed status values

```txt
candidate
draft
review
stable
deprecated
```

### Common example errors

#### Example ID format error

Example error:

```txt
DeadpanExample must start with example_ and use lowercase letters, numbers, and underscores only
```

Fix:

Rename the ID.

Good:

```txt
example_deadpan_parking_receipt
```

#### Missing formula reference

Example error:

```txt
example_fear_forecast_reflection references missing formulaId fear_loop
```

Fix:

Use the exact formula card ID from `formula_cards.json`.

#### Invalid category

Example error:

```txt
example_trust_shopkeeper_npc has invalid category npc
```

Fix:

Use an allowed category such as:

```txt
npc_design
```

#### Missing tags

Example error:

```txt
example_deadpan_parking_receipt must include at least one tag
```

Fix:

Add at least one tag.

Example:

```json
"tags": ["deadpan", "comedy", "dialogue"]
```

## Cross-reference map checks

The validator checks:

- required metadata exists
- required relationship types exist
- every edge has source, target, relationship, label, strength, and `recommendedForCompare`
- source and target formula IDs exist
- relationship value is allowed
- strength value is allowed
- duplicate edges are blocked
- learning paths include valid formula IDs
- learning paths include at least two formulas

### Required relationship types

```txt
mirror
buffer
amplifier
repair_path
contrast
sequence
family_bridge
example_pair
```

### Allowed strength values

```txt
low
medium
high
```

### Common cross-reference errors

#### Missing edge formula

Example error:

```txt
cross-reference edge source missing formula anger_engine
```

Fix:

Use the exact formula card ID from `formula_cards.json`, or add the missing formula card.

#### Invalid relationship

Example error:

```txt
cross-reference edge comedy_deadpan_delta->drama_suspicious_silence_delta:sibling has invalid relationship sibling
```

Fix:

Use an allowed relationship such as:

```txt
mirror
```

#### Invalid strength

Example error:

```txt
cross-reference edge fear_threat_forecast_loop->calm_grounding_loop:buffer has invalid strength core
```

Fix:

Use:

```txt
low
medium
high
```

#### Compare flag is not boolean

Example error:

```txt
cross-reference edge fear_threat_forecast_loop->calm_grounding_loop:buffer recommendedForCompare must be boolean
```

Fix:

Use true or false without quotes:

```json
"recommendedForCompare": true
```

#### Learning path too short

Example error:

```txt
learning path fear_to_calm_path must include at least two formulaIds
```

Fix:

Add at least two formula IDs to the path.

## Safe edit workflow

Use this rhythm when changing data:

```txt
Edit one small thing
  -> run npm run validate-data
  -> fix errors
  -> run npm run build
  -> commit
```

## Boundary checks the validator cannot fully catch

The validator catches structure, not meaning.

Humans still need to review whether a card, example, or cross-reference:

- sounds diagnostic
- feels shame-based
- overclaims science
- pressures forgiveness or positivity
- mocks vulnerable people
- lacks emotional care
- creates manipulative incentives

Use these docs for human review:

- `docs/boundary_policy.md`
- `docs/formula_review_workflow.md`
- `docs/example_gallery_review_workflow.md`
- `docs/accessibility_checklist.md`
- `docs/security_and_privacy.md`

## Public voice lock

> Validation keeps the data clean. Boundary review keeps the project trustworthy.
