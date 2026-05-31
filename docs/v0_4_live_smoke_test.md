# v0.4 Live Smoke Test

Use this checklist after GitHub Actions / Pages shows a green check.

Live target:

```txt
https://michaelwave369.github.io/hidden-equations-of-feeling/
```

Boundary to keep visible during testing:

> Symbolic design equations and creative metaphors only — not clinical, diagnostic, empirical, or a human score.

## 1. Page loads

- [ ] Open the live target URL.
- [ ] Confirm the app loads without a blank screen.
- [ ] Confirm CSS loads correctly.
- [ ] Confirm hero text is readable.
- [ ] Confirm the boundary chip appears near the top.
- [ ] Confirm there are no obvious console errors.

## 2. Formula browsing

- [ ] Click a formula card.
- [ ] Confirm the detail panel updates.
- [ ] Confirm the selected card is visually clear.
- [ ] Confirm formula text does not overflow.
- [ ] Confirm variables, derivation, reflection prompt, example application, boundary, and misuse warning appear.

## 3. Search and family filter

- [ ] Search for `fear`.
- [ ] Confirm matching formula cards appear.
- [ ] Clear the search.
- [ ] Change the family filter.
- [ ] Confirm the card list updates.
- [ ] Confirm empty search/filter states are understandable.

## 4. Hash route test

Open a direct formula URL, such as:

```txt
https://michaelwave369.github.io/hidden-equations-of-feeling/#/card/fear_threat_forecast_loop
```

Check:

- [ ] Correct formula opens.
- [ ] CSS still loads.
- [ ] Refresh keeps the same formula selected.
- [ ] Invalid hash falls back safely.

Suggested invalid hash:

```txt
https://michaelwave369.github.io/hidden-equations-of-feeling/#/card/not_a_real_formula
```

## 5. Formula of the Day

- [ ] Formula of the Day renders.
- [ ] Open today's formula button works.
- [ ] Boundary/no-tracking copy is visible.
- [ ] It does not imply the daily formula describes the user.

## 6. Copy tools

In the detail panel:

- [ ] Copy formula works.
- [ ] Copy reflection prompt works.
- [ ] Copy Markdown card works.
- [ ] Copy citation works.
- [ ] Copy status message updates.
- [ ] Copied content includes boundary context where needed.

In examples:

- [ ] Copy example works.
- [ ] Copied example includes boundary context.

## 7. Compare Mode

- [ ] Suggested compare pair dropdown works.
- [ ] Manual compare dropdown works.
- [ ] Relationship label appears as text.
- [ ] Relationship explanation appears as text.
- [ ] Compare boundary copy is visible.
- [ ] Nothing reads like psychological measurement or scoring.

## 8. Examples Gallery

- [ ] Examples Gallery renders.
- [ ] Search examples works.
- [ ] Category filter works.
- [ ] Example cards show title, summary, scenario, example text, why it works, how to use, boundary note, and misuse warning.
- [ ] Formula link buttons select the correct formula.
- [ ] Empty state is clear.

## 9. Favorites

- [ ] Favorite a formula card.
- [ ] Favorite state is visible with text/icon/pressed state.
- [ ] Refresh the page.
- [ ] Confirm favorite persists.
- [ ] Use Show favorites only.
- [ ] Confirm favorites-only filter works.
- [ ] Confirm favorites-only works with search/family filters.
- [ ] Clear local favorites.
- [ ] Confirm favorites are cleared.
- [ ] Confirm favorites-only mode exits when empty.

Privacy check:

- [ ] Only formula IDs should be stored locally.
- [ ] No slider values should be stored.
- [ ] No private reflections should be stored.

## 10. Mobile layout

Use browser responsive mode or a phone.

- [ ] Hero/boundary area is readable.
- [ ] Formula of the Day stacks cleanly.
- [ ] Search/filter controls are usable.
- [ ] Formula cards are not cramped.
- [ ] Detail panel is readable.
- [ ] Copy/favorite buttons have enough tap area.
- [ ] Compare Mode stacks cleanly.
- [ ] Examples Gallery stacks cleanly.
- [ ] No horizontal scrolling is required for normal content.

## 11. Emotional safety / claim discipline

- [ ] No UI text says the formulas diagnose people.
- [ ] No UI text says the formulas measure feelings.
- [ ] No UI text says the formulas score users.
- [ ] No UI text implies the app predicts or profiles the user.
- [ ] Sensitive formulas keep visible misuse warnings.
- [ ] Reflection prompts feel optional, not coercive.

## 12. Release decision

After the smoke test:

- [ ] If all checks pass, update Issue #2 with a passing smoke-test comment.
- [ ] If anything fails, create/fix one blocker at a time.
- [ ] Do not tag `v0.4.0` until live smoke test, final dataset status, README, and release notes are accurate.

## Pass statement

Use this in Issue #2 only if accurate:

> Live smoke test passed for v0.4: the GitHub Pages app loads, CSS renders, hash routes work, core interactive features function, local-only favorites persist and clear correctly, and no visible UI copy violates the symbolic/non-diagnostic/non-scoring boundary.
