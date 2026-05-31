# Local Run Guide

This guide is for running **The Hidden Equations of Feeling** on your own computer.

## What you need first

You need:

- Git
- Node.js
- A terminal app such as PowerShell, Terminal, iTerm, or Git Bash
- The project repo cloned to your computer

## Step 1: Clone the repo

Open a terminal and run:

```bash
git clone https://github.com/MichaelWave369/hidden-equations-of-feeling.git
cd hidden-equations-of-feeling
```

## Step 2: Install dependencies

Run:

```bash
npm install
```

This downloads the packages the React app needs.

## Step 3: Validate the formula data

Run:

```bash
npm run validate-data
```

This checks the formula card data for missing fields, duplicate IDs, missing variables, and broken cross-references.

A good result looks like:

```txt
Formula data validation passed for X cards.
```

## Step 4: Start the local app

Run:

```bash
npm run dev
```

The terminal should show a local URL, usually something like:

```txt
http://localhost:5173/
```

Open that URL in your browser.

## Step 5: Build the production version

Run:

```bash
npm run build
```

This creates the `dist` folder that GitHub Pages deploys.

## Step 6: Preview the production build

Run:

```bash
npm run preview
```

This lets you test the built version before publishing.

## Common fixes

### `npm` is not recognized

Install Node.js, then close and reopen the terminal.

### The app opens but looks blank

Try:

```bash
npm install
npm run build
npm run dev
```

Also make sure `vite.config.ts` has:

```ts
base: '/hidden-equations-of-feeling/'
```

for GitHub Pages.

### Data validation fails

Read the error message. It usually names the exact formula card and field that needs repair.

Common causes:

- A formula symbol is listed in `formulaSymbols` but not defined in `variables`.
- A `crossReferences` ID points to a card that does not exist.
- A required field is missing or empty.

## Safe workflow for edits

1. Edit one small thing.
2. Run `npm run validate-data`.
3. Run `npm run build`.
4. Commit only after both pass.

## Project boundary

The app is a symbolic formula atlas and creative design-pattern tool. It is not clinical, diagnostic, empirical, universal, or a human-score system.
