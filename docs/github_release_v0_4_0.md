# GitHub Release Draft — v0.4.0

Release title:

```txt
The Hidden Equations of Feeling v0.4.0
```

Tag:

```txt
v0.4.0
```

Recommended release mode:

```txt
Create as a normal GitHub release after one final maintainer look.
```

## Release summary

v0.4.0 upgrades **The Hidden Equations of Feeling** from a publication scaffold into a more useful interactive symbolic atlas, adding shareable formula URLs, cross-reference compare mode, worked examples, copy tools, Formula of the Day, and local-only favorites.

This release uses the current starter/candidate app dataset while the full 52-card dataset remains tracked separately in Issue #1.

**Boundary:** symbolic design patterns only — not diagnosis, measurement, emotional scoring, or universal law.

## What changed

- Added shareable formula-card URLs.
- Added cross-reference-powered compare suggestions and relationship explanations.
- Added worked Examples Gallery with search/filter and boundary notes.
- Added related examples inside formula detail cards.
- Added copy tools for formulas, prompts, examples, citations, and Markdown cards.
- Added deterministic local Formula of the Day.
- Added local-only favorites and favorites-only filtering.
- Improved README and public boundary copy.
- Improved Pages workflow with explicit validation/build checkpoints.
- Fixed Pages build by using `npm run build:app` for the Vite build step.
- Improved data validation for UI-critical fields.
- Preserved local-first, non-diagnostic, non-scoring privacy boundary.
- Documented that the full 52-card dataset remains a separate Issue #1 data/content milestone.

## Validation / release-readiness

Confirmed before release draft:

- validation passes
- production app build passes
- GitHub Pages deploy is green
- deployed-app live smoke test passes
- README accuracy pass complete
- release-notes accuracy pass complete
- Issue #1 cleanly tracks the full 52-card dataset / publication / Zenodo path

Live app:

```txt
https://michaelwave369.github.io/hidden-equations-of-feeling/
```

Closeout checklist:

```txt
docs/v0_4_closeout_checklist.md
```

Live smoke-test checklist:

```txt
docs/v0_4_live_smoke_test.md
```

## Dataset note

v0.4.0 ships with the current starter/candidate app dataset.

The full 52-card formula dataset is intentionally not blocking this release. It remains tracked separately in Issue #1 as a post-v0.4 data/content milestone unless the maintainer explicitly decides to block release for it.

## Privacy and safety note

The app does not intentionally add:

- accounts
- analytics
- server-side profiles
- emotional scoring
- diagnostic reports
- uploaded reflections
- hidden tracking
- third-party data collection by default

Favorites are stored locally in the browser only. They are not uploaded, synced, tracked, or used to score anyone.

## Known limitations

- v0.4.0 uses the current starter/candidate app dataset.
- The full 52-card dataset remains deferred/tracked separately in Issue #1.
- The examples gallery may remain starter-sized.
- The cross-reference map may need more pairings after full dataset import.
- Formula of the Day uses simple deterministic local selection.
- Favorites are browser-local only and not synced across devices.
- Zenodo/DOI should not be advertised until a DOI exists.

## Zenodo / DOI

Zenodo and DOI metadata are not complete in this release draft.

Do not add a DOI badge until a DOI exists.

Decision needed:

- publish GitHub release now and connect Zenodo afterward, or
- defer Zenodo/DOI to the Issue #1 publication path.

## Boundary footer

The Hidden Equations of Feeling uses formulas as creative pattern language. It does not diagnose, measure, rank, manipulate, or score people.
