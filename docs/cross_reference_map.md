# Cross-Reference Map

This document maps how formulas and families connect across **The Hidden Equations of Feeling**.

The goal is to help the app recommend related cards, build compare-mode pairings, design future graph views, and reveal how one symbolic pattern can shift meaning across comedy, drama, fear, calm, love, grief, and learning.

## Core boundary

Cross-references are creative and structural links.

They are not:

- clinical associations
- diagnoses
- psychological profiles
- universal emotional laws
- proof that formulas measure people

Required public framing:

> Symbolic design patterns only — not diagnosis, measurement, or universal law.

## Cross-reference types

Use these relationship labels when building future graph data.

| Relationship | Meaning |
|---|---|
| `mirror` | Similar structure, different emotional payload. |
| `buffer` | One formula softens, stabilizes, or repairs another. |
| `amplifier` | One formula can increase the pressure of another. |
| `repair_path` | One formula suggests a healthier or clearer next step. |
| `contrast` | The formulas help define each other by difference. |
| `sequence` | One formula often leads into the next. |
| `family_bridge` | The formulas connect two families. |
| `example_pair` | Strong pair for compare mode or teaching examples. |

## High-value compare pairs

These are the best initial pairings for the React app’s compare mode.

### Comedy ↔ Drama mirrors

| Formula A | Formula B | Relationship | Why it matters |
|---|---|---|---|
| Deadpan Delta | Suspicious Silence Delta | mirror | Same `A / E` structure: absurdity over emotion in comedy, assumptions over evidence in drama. |
| Giant Hat Disruption Equation | Overreaction Theorem | mirror | Both show public format collapse, one through playful disruption and one through emotional escalation. |
| Escalation Spiral | Drama Escalation Spiral | mirror | Repetition grows the bit in comedy and grows outrage in drama. |
| Rule of Three Detonation | Rule of Three Retellings | mirror | The third item can produce laughter or flip the table depending on tone. |
| False Importance Theorem | Drama False Importance Theorem | mirror | Mundane events become huge through dramatic seriousness. |
| Inappropriate Commitment Law | Drama Inappropriate Commitment Law | mirror | Commitment to a bad idea becomes either comedy or conflict. |
| Social Contract Violation Index | Drama Social Contract Violation Index | mirror | Invisible rule-breaking can create laughter or tension. |

### Fear ↔ Calm bridge

| Formula A | Formula B | Relationship | Why it matters |
|---|---|---|---|
| Fear Forecast Loop | Calm Grounding Loop | buffer | Calm provides safety, orientation, and reduced noise against threat forecasting. |
| Anxiety Forecast Loop | Acceptance Landing Field | repair_path | Acceptance helps uncertainty land without denial or control-grip escalation. |
| Fear Forecast Loop | Curiosity Doorway Formula | contrast | Fear closes around uncertainty; curiosity opens when safety and permission are present. |

### Anger ↔ Love bridge

| Formula A | Formula B | Relationship | Why it matters |
|---|---|---|---|
| Anger Boundary Engine | Love Bridge Equation | repair_path | Anger names the boundary; love/repair helps rebuild trust without erasing harm. |
| Resentment Pressure Ledger | Trust Continuity Bridge | repair_path | Repeated unrepaired hurt needs consistency, honesty, and repair to become trust again. |
| Disgust Boundary Chemistry | Compassion Bridge Equation | contrast | Disgust protects thresholds; compassion bridges distance without removing boundaries. |

### Grief ↔ Joy bridge

| Formula A | Formula B | Relationship | Why it matters |
|---|---|---|---|
| Grief Echo Equation | Gratitude Gift Lens | family_bridge | Memory can carry ache and gift-awareness together. |
| Sadness Reservoir | Joy Lift Equation | contrast | Sadness asks witness; joy rises when presence and safety have room. |
| Nostalgia Time-Glow Equation | Wonder Golden Joy Spiral | sequence | Memory can open into present-moment wonder when idealization softens. |

### Social Mirror ↔ Love bridge

| Formula A | Formula B | Relationship | Why it matters |
|---|---|---|---|
| Shame Exposure Collapse | Love Bridge Equation | repair_path | Shame softens through compassion, witness, repair, and trust. |
| Guilt Repair Vector | Forgiveness Release Vector | sequence | Healthy guilt points toward accountability; forgiveness requires truth, time, and consent. |
| Jealousy Attachment Alarm | Trust Continuity Bridge | repair_path | Attachment fear can soften through conversation, self-worth, and reliable action. |
| Envy Directional Signal | Motivation Ignition Curve | sequence | Envy can reveal desire, which can become action when shame and overwhelm drop. |

### Learning ↔ Wonder bridge

| Formula A | Formula B | Relationship | Why it matters |
|---|---|---|---|
| Curiosity Doorway Formula | Awe Vastness Gate | sequence | Safe curiosity can open into awe. |
| Boredom Agency Drain | Motivation Ignition Curve | repair_path | Choice, challenge, meaning, and small wins reopen agency. |
| Confidence Evidence Stack | Hope Horizon Lift | amplifier | Evidence and self-trust can strengthen honest hope. |
| Calm Grounding Loop | Joy Lift Equation | buffer | Calm can create enough safety for joy to be noticed. |

## Family bridge map

```txt
Comedy <-> Drama
  shared structures: escalation, rule-breaking, specificity, false importance

Fear <-> Calm / Learning
  bridge variables: safety, knowledge, orientation, support, permission

Fire / Boundary <-> Love / Bridge
  bridge variables: boundary, truth, repair, consent, trust

Sadness / Grief <-> Joy / Wonder
  bridge variables: memory, gratitude, presence, witness, meaning

Social Mirror <-> Love / Bridge
  bridge variables: shame, witness, belonging, repair, trust

Calm / Learning <-> Joy / Wonder
  bridge variables: safety, curiosity, play, awe, small wins
```

## Suggested graph node groups

Future app graph view can group nodes by family:

- Comedy cluster
- Drama cluster
- Fear/Calm bridge cluster
- Fire/Love repair cluster
- Grief/Joy memory cluster
- Social Mirror repair cluster
- Learning/Wonder growth cluster

## Starter graph data shape

Future graph data could live in:

```txt
src/data/cross_reference_map.json
```

Suggested structure:

```json
{
  "edges": [
    {
      "source": "comedy_deadpan_delta",
      "target": "drama_suspicious_silence_delta",
      "relationship": "mirror",
      "label": "Same division structure, different emotional payload.",
      "strength": "high",
      "recommendedForCompare": true
    }
  ]
}
```

## Relationship strength

Use a simple strength label:

- `high` — excellent compare-mode pair or core conceptual bridge
- `medium` — useful related card
- `low` — loose thematic connection

## App use cases

The cross-reference map can power:

- suggested comparison pairs
- related-card links
- formula graph view
- family landing pages
- example gallery suggestions
- guided Professor Phi explanations
- learning paths

## Suggested learning paths

### Comedy physics path

1. Deadpan Delta
2. Rule of Three Detonation
3. Escalation Spiral
4. Callback Loop
5. Professor Phi Comedy Constant

### Drama weather path

1. Suspicious Silence Delta
2. Overreaction Theorem
3. Grudge Callback Loop
4. Specificity Weaponizer
5. Professor Phi Drama Constant

### Fear to calm path

1. Fear Forecast Loop
2. Anxiety Forecast Loop
3. Calm Grounding Loop
4. Curiosity Doorway Formula
5. Hope Horizon Lift

### Boundary to repair path

1. Anger Boundary Engine
2. Resentment Pressure Ledger
3. Trust Continuity Bridge
4. Love Bridge Equation
5. Compassion Bridge Equation

### Shame to witness path

1. Shame Exposure Collapse
2. Guilt Repair Vector
3. Love Bridge Equation
4. Forgiveness Release Vector
5. Gratitude Gift Lens

### Golden joy path

1. Joy Lift Equation
2. Gratitude Gift Lens
3. Awe Vastness Gate
4. Wonder Golden Joy Spiral
5. Hope Horizon Lift

## Boundary review for graph features

A graph can accidentally look scientific or diagnostic. Keep the graph clearly framed as a creative map.

Graph UI should say:

> This map shows symbolic design relationships, not psychological measurements.

Avoid:

- node scores
- personality clusters
- emotional health rankings
- diagnostic labels
- predictive language

## Voice lock

> Connections are constellations, not cages.
