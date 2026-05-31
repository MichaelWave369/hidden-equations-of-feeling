# v0.4 Science / Claim Validation Pass

This is the slow, boring, necessary review before tagging v0.4.0.

The goal is not to drain the wonder out of the project. The goal is to make sure the public language is honest, careful, and release-safe.

## Core decision

The Hidden Equations of Feeling is safe to release only if it stays inside this boundary:

> Symbolic design equations and creative metaphors only — not clinical, diagnostic, empirical, or a human score.

## Release claim classification

For v0.4.0, classify the project as:

```txt
Creative symbolic atlas / design-pattern tool
```

Do not classify it as:

- psychology model
- therapy tool
- diagnostic framework
- clinical screening tool
- empirical science result
- emotional measurement system
- personality scoring system
- manipulation or persuasion engine
- universal law of emotion

## Allowed public claims

The project may say:

- These are symbolic formulas.
- These are creative metaphors.
- These are affective design patterns.
- These may help writers, game designers, educators, and reflective creators think about feeling-shaped scenes or prompts.
- The app is interactive and local-first.
- Favorites are stored locally in the browser.
- Formula of the Day is deterministic and local.
- Compare Mode compares formula-card relationships, not people.
- Examples are worked creative examples, not diagnostic templates.

## Claims that must be avoided

Do not claim:

- the formulas diagnose emotions
- the formulas measure emotions
- the formulas score people
- the formulas predict behavior
- the formulas are clinically validated
- the formulas are scientifically proven
- the formulas are universal laws
- the formulas reveal a user's true state
- the app can replace therapy, counseling, or medical care
- the app can detect trauma, anxiety, depression, grief severity, personality, deception, or intent
- the app can manipulate people more effectively

## Words to treat carefully

These words are not banned, but they should be used with care:

- equation
- formula
- variable
- intensity
- pressure
- output
- pattern
- score
- diagnosis
- therapeutic
- treatment
- scientific
- proof
- empirical
- validated
- universal

Preferred replacements when needed:

| Risky wording | Safer wording |
| --- | --- |
| emotional score | symbolic pattern pressure |
| diagnosis | reflection / interpretation / creative reading |
| proven formula | symbolic formula / creative pattern |
| measures fear | models a fictional or reflective pattern of fear |
| therapeutic tool | reflective creative tool |
| predicts behavior | suggests a possible design dynamic |
| universal law | reusable metaphor / design pattern |

## Feature-specific validation

### Formula cards

Pass if:

- [ ] each card has visible boundary language
- [ ] variables are explained as symbolic factors
- [ ] formulas are not presented as scientific laws
- [ ] sensitive cards include misuse warnings
- [ ] reflection prompts remain optional

Fail if:

- [ ] any card implies a user has been diagnosed
- [ ] any card implies a formula reveals the true cause of a real person's emotion
- [ ] any card implies clinical authority

### Formula Playground

Pass if:

- [ ] it says symbolic / not diagnostic / not measurement
- [ ] sliders do not save personal history by default
- [ ] results are framed as pattern pressure or creative exploration

Fail if:

- [ ] it calls output a user score
- [ ] it implies measurement of real mental state
- [ ] it stores private emotional data by default

### Compare Mode

Pass if:

- [ ] it compares formula relationships
- [ ] relationship labels are descriptive and text-based
- [ ] boundary copy is visible

Fail if:

- [ ] it compares people
- [ ] it ranks feelings as better/worse
- [ ] it implies psychological measurement

### Formula of the Day

Pass if:

- [ ] it is framed as a local creative prompt
- [ ] it does not imply a reading about the user
- [ ] it does not track or profile the user

Fail if:

- [ ] it implies fate, diagnosis, prophecy, or user-state detection

### Examples Gallery

Pass if:

- [ ] examples are clearly creative/design examples
- [ ] boundary notes are visible
- [ ] misuse warnings are visible

Fail if:

- [ ] examples become templates for judging real people
- [ ] examples encourage manipulation or coercion

### Favorites

Pass if:

- [ ] favorites store only formula IDs locally
- [ ] favorites are not described as a profile
- [ ] favorites are not used to score the user

Fail if:

- [ ] favorites are framed as emotional history
- [ ] favorites imply identity or diagnosis

## Documentation validation

Review these files before release/tag:

- [ ] `README.md`
- [ ] `docs/v0_4_release_notes_draft.md`
- [ ] `docs/github_release_v0_4_0.md`
- [ ] `docs/security_and_privacy.md`
- [ ] `docs/accessibility_checklist.md`
- [ ] `docs/v0_4_closeout_checklist.md`
- [ ] `docs/app_architecture_overview.md`

Confirm:

- [ ] no file claims clinical validity
- [ ] no file claims empirical proof
- [ ] no file claims emotional measurement
- [ ] no file claims user scoring
- [ ] no file claims universal law
- [ ] Zenodo/DOI language does not imply peer review or scientific validation
- [ ] release text states the current dataset is starter/candidate for v0.4
- [ ] full 52-card dataset remains separate unless imported and validated

## GitHub release validation

Before publishing the GitHub release, the release body should include:

- [ ] symbolic / non-diagnostic boundary
- [ ] starter/candidate dataset note
- [ ] no DOI badge unless DOI exists
- [ ] no clinical/scientific validation claim
- [ ] local-only favorites privacy note
- [ ] known limitations

## Pass statement

Use only if accurate:

> Science / claim validation passed for v0.4.0: public wording keeps the project framed as a symbolic creative atlas, not a clinical, diagnostic, empirical, predictive, or scoring system. No release copy claims scientific proof, emotional measurement, therapy, diagnosis, manipulation, or universal law.

## If this fails

If any language crosses the boundary:

1. Do not tag the release yet.
2. Patch the risky wording.
3. Re-run this claim validation pass.
4. Record the fix in Issue #2.

## Final reminder

Boring review protects the beautiful thing.
