# Release Readiness Matrix

This matrix tracks what is ready, partial, or blocked for the first public **v0.3.0** release of **The Hidden Equations of Feeling**.

Use it alongside:

- `docs/release_checklist.md`
- `docs/v0_3_release_notes_draft.md`
- `docs/validation_guide.md`
- `docs/boundary_policy.md`

## Status key

| Status | Meaning |
|---|---|
| Ready | Good enough for v0.3.0 release. |
| Partial | Exists, but needs review, polish, or confirmation. |
| Blocked | Cannot be considered release-ready until fixed. |
| Later | Not required for v0.3.0; planned for v0.4 or beyond. |

## v0.3.0 release target

The v0.3.0 release should establish a public scaffold:

- working static React app
- validated starter data
- visible boundary language
- publication metadata
- release docs
- GitHub Pages deployment path
- Zenodo-ready metadata

It does **not** need every v0.4 feature.

## Readiness matrix

| Area | Status | Notes | Required before v0.3.0? |
|---|---|---|---|
| Repo created | Ready | Public repo exists at `MichaelWave369/hidden-equations-of-feeling`. | Yes |
| README | Partial | Exists, but should be upgraded with live app link, doc map, social card, and example formula. | Yes |
| React/Vite scaffold | Ready | App scaffold, entry point, components, styling, and Vite config exist. | Yes |
| Formula card browser | Ready | Basic formula-card browsing exists. | Yes |
| Search/filter UI | Ready | Basic search and family filter exist. | Yes |
| Detail panel | Ready | Selected formula detail panel exists. | Yes |
| Formula Playground | Ready | Symbolic slider playground exists with non-diagnostic boundary. | Yes |
| Compare mode | Partial | Basic compare mode exists; smarter pair suggestions are v0.4. | No |
| Print stylesheet | Ready | Basic print CSS exists. | Yes |
| Formula card data | Partial | Starter data exists; full expanded dataset may still need import/review. | Yes, starter acceptable; full set preferred |
| Variable glossary | Ready | `src/data/variable_glossary.json` exists. | Yes |
| Expansion candidates | Ready | `src/data/expansion_candidates.json` exists. | No |
| Family tokens | Ready | `src/data/family_tokens.json` exists. | Yes |
| Example gallery data | Ready | Starter `src/data/example_gallery.json` exists. | No |
| Cross-reference map data | Ready | Starter `src/data/cross_reference_map.json` exists. | No |
| Data validator | Ready | Validates formulas, examples, and cross-reference map. | Yes |
| GitHub Pages workflow | Ready | Workflow file exists. Pages setting must still be confirmed in GitHub UI. | Yes |
| GitHub Pages live site | Partial | Requires GitHub Pages source set to GitHub Actions and green workflow confirmation. | Yes |
| Citation metadata | Ready | `CITATION.cff` exists. | Yes |
| Zenodo metadata | Ready | `.zenodo.json` exists. | Yes |
| License split | Ready | MIT code note and CC BY content note exist. | Yes |
| Social preview card | Ready | `public/social-card.svg` exists. | No, but useful |
| Manuscript draft | Ready | `docs/manuscript.md` exists as working whitepaper scaffold. | Yes |
| Notation key | Ready | `docs/notation_key.md` explains symbolic operators. | Yes |
| Boundary policy | Ready | `docs/boundary_policy.md` exists. | Yes |
| Public language guide | Ready | `docs/public_language_guide.md` exists. | No, but useful |
| Accessibility checklist | Ready | `docs/accessibility_checklist.md` exists. | Yes |
| Security/privacy guide | Ready | `docs/security_and_privacy.md` exists. | Yes |
| Local run guide | Ready | `docs/local_run_guide.md` exists. | Yes |
| GitHub Pages setup guide | Ready | `docs/github_pages_setup.md` exists. | Yes |
| Zenodo setup guide | Ready | `docs/zenodo_setup.md` exists. | Yes |
| Release notes draft | Ready | `docs/v0_3_release_notes_draft.md` exists. | Yes |
| Release checklist | Ready | `docs/release_checklist.md` exists. | Yes |
| Roadmap | Ready | `docs/roadmap.md` exists. | Yes |
| Contributor guide | Ready | `CONTRIBUTING.md` exists. | Yes |
| Issue templates | Ready | Bug, boundary concern, and new formula proposal templates exist. | Yes |
| Formula review workflow | Ready | `docs/formula_review_workflow.md` exists. | Yes |
| Example review workflow | Ready | `docs/example_gallery_review_workflow.md` exists. | No |
| Professor Phi voice guide | Ready | `docs/professor_phi_voice.md` exists. | No |
| App feature spec | Ready | `docs/app_feature_spec.md` exists. | No |
| Data model guide | Ready | `docs/data_model.md` exists. | Yes |
| Validation guide | Ready | `docs/validation_guide.md` exists. | Yes |
| v0.4 feature backlog | Ready | `docs/v0_4_feature_backlog.md` exists. | No |

## Current release blockers

These should be checked before tagging `v0.3.0`:

1. **Run validation locally or in CI**

   ```bash
   npm run validate-data
   ```

2. **Run production build**

   ```bash
   npm run build
   ```

3. **Confirm GitHub Pages source**

   GitHub repo settings should use:

   ```txt
   Pages -> Build and deployment -> Source -> GitHub Actions
   ```

4. **Confirm GitHub Actions workflow is green**

   The `Deploy GitHub Pages` workflow should complete successfully.

5. **Upgrade README enough for first visitors**

   Minimum additions:

   - live app link
   - documentation map
   - example formula
   - boundary statement near top
   - citation note

## v0.3.0 minimum release definition

v0.3.0 can be tagged when:

- [ ] `npm run validate-data` passes.
- [ ] `npm run build` passes.
- [ ] GitHub Pages deploys successfully.
- [ ] README has live app link and boundary statement.
- [ ] Release notes are ready.
- [ ] `CITATION.cff` and `.zenodo.json` are present.
- [ ] License split is clear.
- [ ] No known boundary blockers remain.

## Nice-to-have before v0.3.0

These are helpful but not required:

- [ ] full expanded 52-card dataset imported
- [ ] screenshots or demo GIF
- [ ] DOI badge after Zenodo archiving
- [ ] stronger README visual preview
- [ ] examples gallery shown in app UI
- [ ] cross-reference suggestions shown in app UI

## Move to v0.4 when

After v0.3.0, move into v0.4 feature work when:

- the public site opens reliably
- the release is archived or ready to archive
- starter data validates
- the README is public-friendly
- the app has a clear next-feature backlog

## v0.4 likely first tasks

1. Shareable formula URLs.
2. Copy formula / copy Markdown buttons.
3. Better compare mode using `cross_reference_map.json`.
4. Examples gallery page using `example_gallery.json`.
5. Formula of the Day.
6. Favorites stored locally only.

## Final release voice

> Ready does not mean finished. Ready means honest, useful, runnable, and bounded.
