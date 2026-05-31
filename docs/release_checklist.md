# Release Checklist

Use this checklist before publishing a tagged GitHub release or connecting a Zenodo DOI.

## 1. Data readiness

- [ ] `src/data/formula_cards.json` validates with `npm run validate-data`.
- [ ] Every card has variables, derivation, reflection prompt, example application, boundary note, misuse warning, version, and cross-references.
- [ ] Symbols are scoped per card and explained in `src/data/variable_glossary.json`.
- [ ] Expansion candidates are stored in `src/data/expansion_candidates.json`.

## 2. App readiness

- [ ] `npm install` completes.
- [ ] `npm run build` completes.
- [ ] Search and family filtering work.
- [ ] Detail panel renders selected cards.
- [ ] Formula Playground displays the symbolic/non-diagnostic boundary.
- [ ] Compare mode renders two cards.
- [ ] Print styles are acceptable for card/detail pages.

## 3. GitHub Pages readiness

- [ ] `vite.config.ts` has `base: '/hidden-equations-of-feeling/'`.
- [ ] GitHub Pages is set to **Source: GitHub Actions**.
- [ ] The `Deploy GitHub Pages` workflow finishes green.
- [ ] The public site opens at `https://michaelwave369.github.io/hidden-equations-of-feeling/`.

## 4. Publication metadata readiness

- [ ] `README.md` explains the project clearly.
- [ ] `CITATION.cff` is present and accurate.
- [ ] `.zenodo.json` is present and accurate.
- [ ] License split is clear in `LICENSE/`.
- [ ] `docs/manuscript.md` has abstract, method, boundaries, limitations, and future work.
- [ ] `docs/notation_key.md` explains symbolic operators.
- [ ] `docs/references.md` frames reference anchors without overclaiming.

## 5. Boundary readiness

- [ ] Every public route or document includes the core boundary: symbolic design equations only.
- [ ] No formula is framed as clinical, diagnostic, empirical, universal, or a human score.
- [ ] Shame, fear, grief, anger, and love cards include misuse warnings.
- [ ] Contributor templates include boundary checks.

## 6. Tag and archive

- [ ] Create a GitHub release tag, such as `v0.3.0`.
- [ ] Include release notes summarizing data, app, docs, and boundary status.
- [ ] Connect the repo to Zenodo.
- [ ] After Zenodo mints a DOI, add the DOI badge/link to `README.md`.
- [ ] Remember: cite the concept DOI for the ongoing project and the version DOI for an exact release.
