# Security and Privacy

The Hidden Equations of Feeling is intended to be a static, local-first, privacy-respecting creative tool.

The app should help people explore symbolic formula cards without collecting emotional data, creating user profiles, or sending personal reflections to a server.

## Core privacy principle

> No emotional scoring. No diagnosis. No hidden collection.

## Current app model

The v0.4 app is designed as a static Vite/React site hosted through GitHub Pages.

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
- no uploaded reflections by default
- no hidden third-party trackers

## Data stored in the repo

The repository stores project data such as:

- formula cards
- example gallery records
- cross-reference map relationships
- learning paths
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
- store emotional history

Required nearby language:

> Symbolic, not diagnostic / not measurement.

## Formula of the Day privacy

Formula of the Day is deterministic and local.

It may use the local date to select a card, but it must not:

- track the user
- identify the user
- create an account
- create an emotional profile
- store a daily emotional history
- upload the selected card as user behavior
- infer anything about the user from the daily formula

Required UI boundary:

> Formula of the Day is a local, deterministic creative prompt. It does not track you, profile you, diagnose you, or score your feelings.

## Favorites and local storage guidance

v0.4 includes local-only favorites.

Favorites must remain:

- local browser storage only
- optional
- clear to the user
- erasable by the user
- not synced to a server by default
- not uploaded
- not used for analytics
- not used for emotional scoring
- not used for diagnosis or profiling

Current allowed local storage purpose:

- formula favorite IDs

Do not store by default:

- private reflections
- playground slider values
- emotional history
- identity data
- diagnostic-like results
- inferred personality or emotional-state labels

Required UI copy:

> Favorites are stored locally in this browser only. They are not uploaded, tracked, synced, or used to score you.

## Copy tools privacy

Copy tools are user-controlled convenience actions.

They should:

- copy only the selected formula/prompt/example/citation text
- include boundary notes when content could be reused out of context
- avoid copying hidden user state
- avoid copying private reflections unless the user explicitly provides and requests that content in a future feature

Copy tools should not:

- transmit copied content
- log copied content remotely
- create analytics events tied to formula selections
- treat copied content as evidence of a user's emotional state

## Examples Gallery privacy

Examples Gallery content is project-provided demonstration content.

It should not:

- ask users to submit private experiences
- store user interpretations
- label user behavior
- imply examples are diagnostic templates
- encourage applying formulas as scores against real people

Examples must keep visible boundary and misuse-warning language.

## Compare Mode privacy

Compare Mode shows relationships between formula cards.

It should not:

- compare people
- rank emotions
- infer a user state
- score a user's feelings
- suggest a formula applies to a user personally
- create a psychological profile from selected comparisons

Required boundary:

> This comparison shows symbolic design relationships, not psychological measurements.

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
- not tied to favorites
- not tied to Formula of the Day usage
- not tied to copy-tool usage

## User-generated content

If future versions add a Formula Remix Sandbox or custom notes, user-generated content should remain local-first by default.

Do not upload user-generated reflections unless:

- the user explicitly chooses to export or publish
- the app clearly explains what is happening
- no sensitive material is uploaded silently
- deletion/export behavior is clear

## Security basics

For contributors:

- do not commit secrets
- do not add API keys to the repo
- do not add hidden network calls
- do not add tracking scripts without review
- do not add dependencies that collect user data silently
- keep dependencies minimal
- prefer static/client-side features
- keep privacy and boundary copy near any saved-state feature

## Dependency review

Before adding a new dependency, ask:

1. Is this dependency necessary?
2. Can the feature be built without it?
3. Does it add tracking, telemetry, or network calls?
4. Is it actively maintained?
5. Does it increase bundle size too much?
6. Does it create privacy or security risk?
7. Does it conflict with the local-first/no-scoring boundary?

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
- server-side storage

The Pages workflow should fail safely before deploy if data validation or the app build fails.

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
- server-side favorite syncing by default
- user-ranking or emotion-ranking features
- automatic interpretation of user behavior as emotional state

## Project voice lock

> Private by default. Symbolic by design. No hidden scoring.
