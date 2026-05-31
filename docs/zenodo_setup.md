# Zenodo Setup Guide

This guide is for archiving a stable release of **The Hidden Equations of Feeling** and minting a DOI.

Screens may change over time, but the overall release pattern is:

1. Finish the GitHub repo.
2. Create a GitHub release tag.
3. Connect/import that release into Zenodo.
4. Add the DOI back to the README.

## Step 1: Confirm the repo is ready

Before Zenodo, make sure:

- `npm run validate-data` passes.
- `npm run build` passes.
- GitHub Pages deploys successfully.
- `README.md` is clear.
- `CITATION.cff` is present.
- `.zenodo.json` is present.
- `docs/manuscript.md` has the abstract, method, limitations, and boundary statement.
- The release checklist in `docs/release_checklist.md` is mostly complete.

## Step 2: Create a GitHub release

1. Open the GitHub repo.
2. Click **Releases** on the right side of the repo page, or go to the repo's **Tags/Releases** area.
3. Click **Draft a new release**.
4. Create a new tag, for example:

   `v0.3.0`

5. Release title:

   `The Hidden Equations of Feeling v0.3.0`

6. Suggested release notes:

```md
## The Hidden Equations of Feeling v0.3.0

First public publication scaffold for the symbolic formula atlas and React app.

Includes:
- Vite/React interactive atlas
- symbolic Formula Playground
- formula card data model
- notation key
- variable glossary
- manuscript skeleton
- GitHub Pages workflow
- citation and Zenodo metadata
- release checklist
- contribution and boundary templates

Boundary: these formulas are creative metaphors and affective design patterns only. They are not clinical, diagnostic, empirical, universal, or human-score systems.
```

7. Publish the release.

## Step 3: Connect GitHub to Zenodo

1. Go to Zenodo.
2. Sign in.
3. Open the GitHub integration / GitHub repository connection area.
4. Authorize GitHub access if Zenodo asks.
5. Find `MichaelWave369/hidden-equations-of-feeling`.
6. Enable/archive the repository.

## Step 4: Import the GitHub release

After the GitHub release exists and the repository is enabled in Zenodo:

1. Zenodo should detect the GitHub release.
2. Confirm the metadata imported from `.zenodo.json`.
3. Confirm title, creator, description, keywords, and license.
4. Publish or finalize the Zenodo record.

## Step 5: Understand the two DOI types

Zenodo releases normally create two useful DOI patterns:

- **Concept DOI**: points to the overall project and usually resolves to the newest release.
- **Version DOI**: points to the exact archived version, such as `v0.3.0`.

Use the concept DOI when citing the living project.
Use the version DOI when citing the exact release.

## Step 6: Add the DOI to the README

After Zenodo gives the DOI:

1. Copy the DOI badge or DOI link from Zenodo.
2. Add it near the top of `README.md`.
3. Commit the README update.

Example placeholder:

```md
[![DOI](https://zenodo.org/badge/DOI/REPLACE-WITH-DOI.svg)](https://doi.org/REPLACE-WITH-DOI)
```

## Step 7: Final public release check

After the DOI is live:

- Confirm the GitHub release page works.
- Confirm the Zenodo DOI opens.
- Confirm the GitHub Pages app opens.
- Confirm README links work.
- Confirm the project boundary is visible in README, app, and manuscript.

## Boundary statement

The Zenodo record should clearly say:

> The Hidden Equations of Feeling is a symbolic formula atlas and creative design-pattern tool. It is not a clinical, diagnostic, empirical, universal, or human-score system.
