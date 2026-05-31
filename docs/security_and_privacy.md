# Security and Privacy

The Hidden Equations of Feeling is intended to be a static, local-first, privacy-respecting creative tool.

The app should help people explore symbolic formula cards without collecting emotional data, creating user profiles, or sending personal reflections to a server.

## Core privacy principle

> No emotional scoring. No diagnosis. No hidden collection.

## Current app model

The v0.3 app is designed as a static Vite/React site.

Expected behavior:

- no login required
- no account system
- no backend database
- no server-side user profiles
- no emotional assessment records
- no clinical records
- no required analytics
- no required cookies
- no form submission of private emotional content

## Data stored in the repo

The repository stores project data such as:

- formula cards
- variable glossary
- family tokens
- expansion candidates
- docs
- issue templates
- release metadata

This is project content, not user data.

## Formula Playground privacy

The Formula Playground is symbolic and educational.

It should not:

- save slider values by default
- transmit slider values
- turn slider values into user scores
- infer mental states
- label a user
- diagnose a user
- generate reports about a user

Required nearby language:

> Symbolic, not diagnostic / not measurement.

## Favorites and local storage guidance

If v0.4 adds favorites or saved collections, they should be:

- local browser storage only
- optional
- clear to the user
- erasable by the user
- not synced to a server by default
- not used for analytics

Suggested UI copy:

> Favorites are stored locally in this browser only. They are not uploaded or used to score you.

## Analytics policy

Default position:

- no analytics by default
- no ad tracking
- no behavioral profiling
- no emotional profiling
- no third-party trackers unless explicitly reviewed and documented

If analytics are ever considered, they must be:

- privacy-preserving
- minimal
- public in the README
- opt-in where possible
- not tied to formula slider values or emotional content

## User-generated content

If future versions add a Formula Remix Sandbox or custom notes, user-generated content should remain local-first by default.

Do not upload user-generated reflections unless:

- the user explicitly chooses to export or publish
- the app clearly explains what is happening
- no sensitive material is uploaded silently

## Security basics

For contributors:

- do not commit secrets
- do not add API keys to the repo
- do not add hidden network calls
- do not add tracking scripts without review
- do not add dependencies that collect user data silently
- keep dependencies minimal
- prefer static/client-side features

## Dependency review

Before adding a new dependency, ask:

1. Is this dependency necessary?
2. Can the feature be built without it?
3. Does it add tracking, telemetry, or network calls?
4. Is it actively maintained?
5. Does it increase bundle size too much?
6. Does it create privacy or security risk?

## Sensitive content rule

Because this project touches emotion language, the app must avoid collecting or storing private emotional disclosures unless that is a deliberate, local-first, clearly explained feature.

Especially sensitive areas:

- grief
- shame
- fear
- anger
- family conflict
- spirituality
- identity
- trauma-adjacent reflection
- relationship pain

## Public deployment notes

GitHub Pages hosts the static app.

The public app should not require:

- database setup
- server secrets
- OAuth login
- private API keys
- user tracking

## Incident / concern process

If someone finds a privacy, security, or boundary issue:

1. Open a GitHub issue using the Boundary Concern template for claim/emotional safety issues.
2. Use a Bug Report for technical issues.
3. Avoid posting private personal data in public issues.
4. If a security issue involves sensitive details, contact the maintainer privately if a private contact route is provided.

## Do-not-build list

Do not add:

- emotional profile accounts
- hidden analytics
- diagnostic reports
- psychological scoring
- mental-health claims
- private reflection uploads by default
- manipulative persuasion features
- third-party ad trackers
- hidden data collection

## Project voice lock

> Private by default. Symbolic by design. No hidden scoring.
