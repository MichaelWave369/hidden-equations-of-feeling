# v0.4 Closeout Checklist

This checklist tracks the remaining work needed to close the current v0.4 app pass and prepare **The Hidden Equations of Feeling** for a clean public release path.

The goal is simple:

> Make the app useful, buildable, publishable, and trustworthy without turning it into a clinical, diagnostic, scoring, or tracking system.

## Boundary lock

The project boundary remains:

> Symbolic design equations and creative metaphors only — not clinical, diagnostic, empirical, or a human score.

Any feature or release copy that violates this boundary should be revised before release.

## Current v0.4 app features

These features have been added or scaffolded:

- [x] Formula selector helpers
- [x] Shareable formula-card hash routes
- [x] Markdown formatting helpers
- [x] Clipboard copy helper
- [x] Detail-panel copy buttons
- [x] Copy-tool styling
- [x] Cross-reference relationship helpers
- [x] Cross-reference-powered Compare Mode
- [x] Compare Mode styling
- [x] Example selector helpers
- [x] Examples Gallery component
- [x] Examples Gallery styling
- [x] Related examples inside formula detail panel
- [x] Related examples styling
- [x] Formula of the Day helper
- [x] Formula of the Day component
- [x] Formula of the Day styling
- [x] Safe localStorage helpers
- [x] Favorites storage helpers
- [x] Favorite button component
- [x] Local-only favorites wired into app
- [x] Favorites styling
- [x] Favorites-only formula filter
- [x] Explicit Pages workflow validation/build separation
- [x] Pages workflow `vite: command not found` fix via `npm run build:app`
- [x] UI-critical formula data validation hardening
- [x] Live smoke-test checklist
- [x] Issue #1 status comment
- [x] Issue #2 v0.4 release-readiness tracking

## Remaining app polish

Before tagging a v0.4 release candidate, check:

- [x] Run `npm run validate-data` through the green Pages workflow.
- [x] Run `npm run build` / app build through the green Pages workflow.
- [x] Fix TypeScript or build errors from the Pages workflow.
- [ ] Run the live smoke-test checklist in `docs/v0_4_live_smoke_test.md`.
- [ ] Confirm hash routes work on GitHub Pages.
- [ ] Confirm copy buttons work in a modern browser.
- [ ] Confirm Examples Gallery renders all examples.
- [ ] Confirm related examples render on matching formula detail cards.
- [ ] Confirm Formula of the Day opens the correct formula.
- [ ] Confirm favorites persist after refresh.
- [ ] Confirm favorites-only filter works with search and family filters.
- [ ] Confirm Clear local favorites works.
- [ ] Confirm invalid formula hash falls back safely.
- [ ] Confirm mobile layout is usable.

## Data closeout

The original v0.3 issue still depends on final data confirmation.

Required checks:

- [ ] Confirm whether `src/data/formula_cards.json` is the final full 52-card dataset.
- [ ] If not, import the full 52-card dataset.
- [ ] Confirm formula IDs are stable.
- [ ] Confirm every formula ID referenced by examples exists.
- [ ] Confirm every formula ID referenced by cross-reference edges exists.
- [ ] Confirm every formula ID referenced by learning paths exists.
- [ ] Confirm no duplicate formula IDs.
- [ ] Confirm no duplicate example IDs.
- [ ] Confirm no duplicate cross-reference edges unless intentional.
- [ ] Confirm sensitive formulas include boundary and misuse warning text.

## Validator requirements

`scripts/validate-data.mjs` should protect both data integrity and UI-critical fields before deploy.

Formula cards must include:

- [x] `id`
- [x] `title`
- [x] `family`
- [x] `familyLabel`
- [x] `familyColor`
- [x] `formula`
- [x] `formulaPlaintext`
- [x] `formulaSymbols`
- [x] `variables`
- [x] `tagline`
- [x] `derivation`
- [x] `reflectionPrompt`
- [x] `exampleApplication`
- [x] `useCases`
- [x] `boundaryNote`
- [x] `misuseWarning`
- [x] `version`

Formula-card validator should also enforce:

- [x] non-empty `formulaSymbols`
- [x] non-empty `variables`
- [x] non-empty `useCases`
- [x] at least one variable with role `output`
- [x] every formula symbol is defined in `variables`
- [x] every variable has `symbol`, `meaning`, and `role`
- [x] `familyColor` is a 6-digit hex color such as `#F4C95D`
- [x] `crossReferences` point only to existing formula IDs

Examples must include:

- [x] `id`
- [x] `formulaId`
- [x] `category`
- [x] `title`
- [x] `summary`
- [x] `scenario`
- [x] `exampleText`
- [x] `whyItWorks`
- [x] `howToUse`
- [x] `boundaryNote`
- [x] `misuseWarning`
- [x] `tags`
- [x] `difficulty`
- [x] `version`
- [x] `status`

Cross-reference map must validate:

- [x] metadata title/version/boundary
- [x] required relationship type definitions
- [x] source and target formula IDs
- [x] allowed relationship values
- [x] allowed strength values
- [x] boolean `recommendedForCompare`
- [x] duplicate edge detection
- [x] learning path IDs
- [x] learning path formula ID references
- [x] learning path boundary notes

## Documentation closeout

Make sure the public documentation matches the actual app.

Required docs to review:

- [ ] `README.md`
- [ ] `docs/formula_atlas.md`
- [ ] `docs/references.md`
- [ ] `docs/release_checklist.md`
- [ ] `docs/release_readiness_matrix.md`
- [ ] `docs/v0_3_to_v0_4_transition_plan.md`
- [ ] `docs/v0_4_release_notes_draft.md`
- [ ] `docs/app_architecture_overview.md`
- [ ] `docs/implementation_order.md`
- [ ] `docs/security_and_privacy.md`
- [ ] `docs/accessibility_checklist.md`
- [ ] `docs/v0_4_closeout_checklist.md`
- [x] `docs/v0_4_live_smoke_test.md`

README should include:

- [ ] Live app link
- [ ] Boundary statement near the top
- [ ] Feature summary
- [ ] Quick start commands
- [ ] Data/doc map
- [ ] Citation note
- [ ] License note
- [ ] Local-only favorites/privacy note

## Accessibility closeout

Minimum pass:

- [ ] Keyboard can select formula cards.
- [ ] Keyboard can use copy buttons.
- [ ] Keyboard can use favorite buttons.
- [ ] Keyboard can use compare dropdowns.
- [ ] Keyboard can use Examples Gallery filters.
- [ ] Favorite buttons expose pressed state.
- [ ] Copy status messages use live regions.
- [ ] Formula of the Day has clear accessible text.
- [ ] Boundary notes are visible as text, not only color.
- [ ] Relationship labels are text, not only color.
- [ ] Mobile layout does not hide major controls.

## Privacy closeout

Confirm the app does not add:

- [ ] Accounts
- [ ] Analytics
- [ ] Server-side profiles
- [ ] Emotional scoring
- [ ] Diagnostic reports
- [ ] Uploaded reflections
- [ ] Hidden tracking
- [ ] Third-party data collection by default

Local storage is allowed only for:

- [x] Formula favorites

Local storage must not store:

- [ ] Private reflections
- [ ] Slider/playground values by default
- [ ] Emotional history
- [ ] Identity data
- [ ] Diagnostic-like results

## GitHub Pages closeout

Required checks:

- [ ] GitHub Pages source is set to GitHub Actions.
- [x] `.github/workflows/pages.yml` exists.
- [x] Pages workflow separates `npm run validate-data` from `npm run build:app`.
- [x] Pages workflow resolves Vite through npm scripts instead of direct shell invocation.
- [x] `vite.config.ts` uses the correct base path:

```ts
base: '/hidden-equations-of-feeling/'
```

- [x] Latest Pages workflow completes successfully, based on user-reported green check.
- [ ] Live app opens.
- [ ] Live app loads CSS correctly.
- [ ] Hash routes work on refresh/direct open.

## Live smoke-test closeout

Use this checklist:

```txt
docs/v0_4_live_smoke_test.md
```

Live smoke test should confirm:

- [ ] Page loads without a blank screen.
- [ ] CSS loads correctly.
- [ ] Hero and boundary copy are visible.
- [ ] Formula browsing works.
- [ ] Search and family filter work.
- [ ] Valid hash route opens the correct formula.
- [ ] Invalid hash route fails gently.
- [ ] Formula of the Day works and does not imply a user reading.
- [ ] Copy tools work and preserve boundary context where needed.
- [ ] Compare Mode works and does not imply measurement.
- [ ] Examples Gallery works.
- [ ] Related examples work.
- [ ] Favorites persist locally after refresh.
- [ ] Clear local favorites works.
- [ ] Mobile layout is usable.
- [ ] No visible UI copy violates the symbolic/non-diagnostic/non-scoring boundary.

## Release closeout

Before creating a release:

- [x] Validation passes through the green Pages workflow.
- [x] Build passes through the green Pages workflow.
- [x] GitHub Pages deploy is green, based on user-reported green check.
- [ ] Live smoke test passes.
- [ ] README reflects actual implemented features.
- [ ] Release notes distinguish implemented features from planned/deferred features.
- [ ] Issue #1 is updated with final status.
- [ ] Issue #2 is updated with final status.
- [ ] No known boundary blockers remain.

Suggested release tag:

```txt
v0.4.0
```

Suggested release title:

```txt
The Hidden Equations of Feeling v0.4.0
```

## Zenodo closeout

After GitHub release is created:

- [ ] Import/connect the GitHub release in Zenodo.
- [ ] Confirm title, creators, description, license, and keywords.
- [ ] Add DOI to `README.md` once minted.
- [ ] Add DOI to citation docs if needed.
- [ ] Add ORCID only if available and desired.

## Issue #1 closeout decision

Issue #1 can be closed when:

- [ ] Full formula dataset status is resolved.
- [ ] Validation passes.
- [ ] Build passes.
- [x] GitHub Pages is green, based on user-reported green check.
- [ ] Public release is tagged.
- [ ] Zenodo path is complete or intentionally deferred with a note.

If the v0.4 app work moves beyond the original v0.3 issue scope, then:

- [ ] Close Issue #1 after documenting remaining v0.3 items.
- [x] Open a new `v0.4 release readiness` issue.

## Issue #2 closeout decision

Issue #2 can be closed when:

- [x] v0.4 validation passes through the green Pages workflow.
- [x] v0.4 build passes through the green Pages workflow.
- [x] GitHub Pages deploy is green, based on user-reported green check.
- [ ] Live app checks pass.
- [ ] README and release notes are accurate.
- [ ] Boundary language remains visible.
- [ ] No known v0.4 release blockers remain.

## Do-not-close if

Do not close the release pass if:

- data validation is failing
- build is failing
- GitHub Pages is not deploying
- README says a feature exists that is not actually implemented
- release notes blur implemented vs planned features
- boundary language is missing or weakened
- anything implies diagnosis, scoring, measurement, manipulation, or universal emotional law

## Final closeout statement

Use this in release notes or the final issue comment if accurate:

> v0.4 turns The Hidden Equations of Feeling into a more useful interactive symbolic atlas, adding shareable formula cards, copy tools, cross-reference compare mode, worked examples, Formula of the Day, and local-only favorites while preserving the project boundary: creative symbolic patterns only, not diagnosis, measurement, or human scoring.
