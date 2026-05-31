# GitHub Pages Setup Guide

This project is already configured to deploy with GitHub Actions. You only need to turn on the right Pages setting in GitHub.

## Step 1: Open the repository settings

1. Go to `https://github.com/MichaelWave369/hidden-equations-of-feeling`.
2. Click **Settings** near the top of the repo page.

## Step 2: Open Pages settings

1. In the left sidebar, click **Pages**.
2. Find **Build and deployment**.

## Step 3: Select GitHub Actions

1. Under **Source**, choose **GitHub Actions**.
2. Save if GitHub shows a save button.

## Step 4: Allow Actions if prompted

1. Click the **Actions** tab near the top of the repo.
2. If GitHub asks whether to allow workflows, click the button to allow/enable them.
3. Look for the workflow called **Deploy GitHub Pages**.

## Step 5: Wait for the green check

1. After a push to `main`, GitHub should run the Pages workflow.
2. Wait for the workflow to finish with a green check.
3. If it fails, open the failed run and check the build log.

## Step 6: Open the live site

When the workflow succeeds, the site should appear at:

`https://michaelwave369.github.io/hidden-equations-of-feeling/`

## If the site shows a blank page

Check these first:

- `vite.config.ts` should include `base: '/hidden-equations-of-feeling/'`.
- The workflow should upload the `dist` folder.
- The Pages setting should be **GitHub Actions**, not branch deploy.
- Refresh the page after a minute; GitHub Pages can take a short time to update.

## Project boundary

The public app must keep the boundary visible: these are symbolic design equations and creative metaphors only. They are not clinical, diagnostic, empirical, universal, or human-score systems.
