# Accessibility Checklist

This checklist helps keep **The Hidden Equations of Feeling** readable, usable, and kind for more people.

The project should feel playful and beautiful, but never at the expense of clarity, keyboard access, screen-reader support, or emotional safety.

## Core accessibility principle

> If the interface explains a symbolic pattern visually, it should also explain it in plain text.

## Boundary accessibility

The project boundary should be visible and understandable without needing to read the whole repo.

Required public boundary:

> Symbolic design patterns only — not diagnosis, measurement, or universal law.

Check:

- [ ] Boundary appears near the top of the app.
- [ ] Boundary appears in the README.
- [ ] Boundary appears near interactive sliders/meters.
- [ ] Boundary appears in Formula of the Day.
- [ ] Boundary appears in Examples Gallery cards.
- [ ] Boundary appears near Compare Mode.
- [ ] Boundary appears near local favorites/privacy copy.
- [ ] Boundary appears in release notes and Zenodo description.
- [ ] Boundary language is plain and not hidden in legal-style wording.

## Text readability

Check:

- [ ] Body text is large enough to read comfortably.
- [ ] Headings are visually distinct.
- [ ] Long paragraphs are broken into shorter sections.
- [ ] Important warnings are not buried.
- [ ] Mobile text remains readable.
- [ ] Formula text does not overflow small screens.
- [ ] Example cards do not become cramped on mobile.
- [ ] Favorite status text is readable and not visually tiny.
- [ ] Copy-status text is readable and not hidden by layout.

## Color and contrast

Check:

- [ ] Text has strong contrast against the background.
- [ ] Family colors are not the only way to identify card families.
- [ ] Buttons and interactive controls have visible focus states.
- [ ] Warning text is readable and not only communicated through red/orange color.
- [ ] Favorite state uses text plus icon/pressed state, not color alone.
- [ ] Compare relationship labels use text, not only color.
- [ ] Examples Gallery category labels are readable.
- [ ] Formula of the Day highlight does not reduce text contrast.
- [ ] The app is usable in grayscale or low-saturation viewing.

## Keyboard access

Check:

- [ ] All buttons can be reached with the Tab key.
- [ ] Formula cards can be selected by keyboard.
- [ ] Search input is keyboard accessible.
- [ ] Family filter is keyboard accessible.
- [ ] Slider controls are keyboard accessible.
- [ ] Compare mode controls are keyboard accessible.
- [ ] Copy buttons are keyboard accessible.
- [ ] Favorite buttons are keyboard accessible.
- [ ] Favorites-only filter button is keyboard accessible.
- [ ] Clear favorites button is keyboard accessible.
- [ ] Formula of the Day open button is keyboard accessible.
- [ ] Examples Gallery search/filter controls are keyboard accessible.
- [ ] Example formula-link buttons are keyboard accessible.
- [ ] Focus order follows the visual page order.
- [ ] No keyboard trap exists.

## Screen-reader support

Check:

- [ ] Each formula has `formulaPlaintext`.
- [ ] Formula cards have readable titles.
- [ ] Buttons have clear accessible labels.
- [ ] Sliders include variable name, role, and current symbolic state.
- [ ] The symbolic intensity meter has a text equivalent.
- [ ] Copy status messages use a live region.
- [ ] Favorites status uses a live region.
- [ ] Favorite buttons expose `aria-pressed`.
- [ ] Formula of the Day has a clear accessible label.
- [ ] Examples Gallery has a clear heading and filter context.
- [ ] Compare Mode has plain-text relationship descriptions.
- [ ] Decorative visuals are hidden from screen readers where appropriate.
- [ ] Meaningful visuals have text descriptions.

## Formula clarity

Every formula card should include:

- [ ] title
- [ ] family label
- [ ] formula
- [ ] plaintext formula
- [ ] variable list
- [ ] tagline
- [ ] derivation/rationale
- [ ] reflection prompt
- [ ] example application
- [ ] boundary note
- [ ] misuse warning

Plaintext formula example:

```txt
Fear equals threat times uncertainty times imagination squared, divided by safety signals plus knowledge plus support.
```

## Formula Playground accessibility

The Formula Playground must be especially careful because sliders and meters can feel like scoring.

Check:

- [ ] It says: `Symbolic, not diagnostic / not measurement.`
- [ ] The meter is called symbolic intensity or pattern pressure, not a person score.
- [ ] Slider labels explain the variable symbol and meaning.
- [ ] Amplifier, buffer, and stabilizer roles are explained.
- [ ] Reset button exists or is planned.
- [ ] Users can ignore the playground and still understand the card.
- [ ] Playground values are not presented as emotional truth or personal assessment.

## Formula of the Day accessibility

Check:

- [ ] The module has a clear heading.
- [ ] The selected formula title is readable.
- [ ] The formula includes plaintext access through `formulaPlaintext`.
- [ ] The reflection prompt is visibly optional.
- [ ] The local/no-tracking boundary is visible.
- [ ] The date key is not the only context for the module.
- [ ] The open button is keyboard accessible.
- [ ] The module stacks cleanly on mobile.
- [ ] The module does not imply the daily formula describes the user.

## Favorites accessibility

Check:

- [ ] Favorite buttons include visible text.
- [ ] Favorite buttons expose pressed state.
- [ ] Favorite buttons are keyboard accessible.
- [ ] Favorite buttons have clear labels in compact and full modes.
- [ ] Favorites-only toggle exposes pressed state.
- [ ] Disabled favorites-only state is visible and understandable.
- [ ] Favorites status text uses a live region.
- [ ] Clear local favorites is reachable by keyboard.
- [ ] Privacy copy is visible near favorites.
- [ ] Favorite state is not represented by color alone.

## Copy tools accessibility

Check:

- [ ] Copy buttons have clear labels.
- [ ] Copy success/failure messages use a live region.
- [ ] Copy status text remains visible long enough to read.
- [ ] Copy buttons do not move focus unexpectedly.
- [ ] Copied content includes boundary notes where needed.
- [ ] Copy tools do not imply the user has been measured or scored.

## Examples Gallery accessibility

Check:

- [ ] Gallery has a clear heading.
- [ ] Search input has an understandable placeholder or label context.
- [ ] Category filter is keyboard accessible.
- [ ] Example cards have clear titles.
- [ ] Category labels are text, not color-only signals.
- [ ] Formula link buttons are keyboard accessible.
- [ ] Boundary notes are visible for each example.
- [ ] Misuse warnings are visible for each example.
- [ ] Copy example buttons are keyboard accessible.
- [ ] Empty search/filter state is clear.
- [ ] Gallery layout stacks cleanly on mobile.

## Compare Mode accessibility

Check:

- [ ] Compare Mode has a clear heading.
- [ ] Suggested compare-pair dropdown is keyboard accessible.
- [ ] Manual compare dropdown is keyboard accessible.
- [ ] Relationship type is written as text.
- [ ] Relationship explanation is written as text.
- [ ] Boundary copy is visible.
- [ ] Compare cards remain readable on mobile.
- [ ] Compare Mode does not imply ranking, diagnosis, or emotional measurement.

## Emotional safety

Some formulas touch sensitive material. Accessibility includes emotional accessibility.

For grief, fear, shame, anger, love, family conflict, and trauma-adjacent cards, check:

- [ ] The card avoids shame language.
- [ ] The card does not pressure forgiveness.
- [ ] The card does not pressure calming down.
- [ ] The card does not imply a person is broken.
- [ ] The card routes toward support, context, clarity, or repair where appropriate.
- [ ] The reflection prompt is optional and consent-based.
- [ ] The misuse warning is visible.
- [ ] Related examples avoid mocking real distress.
- [ ] Examples do not turn sensitive feelings into punchlines unless clearly fictional and safe.

## Mobile accessibility

Check:

- [ ] Layout works on small screens.
- [ ] Cards are not too cramped.
- [ ] Search and filter controls are easy to tap.
- [ ] Sliders have enough space for touch input.
- [ ] Text does not require horizontal scrolling.
- [ ] Compare mode stacks cleanly on mobile.
- [ ] Formula of the Day stacks cleanly on mobile.
- [ ] Favorites panel stacks cleanly on mobile.
- [ ] Examples Gallery cards stack cleanly on mobile.
- [ ] Copy/favorite buttons have enough tap area.

## Print accessibility

Check:

- [ ] Print stylesheet hides nonessential controls.
- [ ] Formula detail pages print clearly.
- [ ] Boundary note remains visible in print.
- [ ] Text prints in high contrast.
- [ ] Formula and variable meanings remain together.
- [ ] Printed content does not imply diagnosis or scoring.

## Content review checklist

Before release, review a sample card from each family:

- [ ] Comedy
- [ ] Drama
- [ ] Sadness / Grief
- [ ] Joy / Wonder
- [ ] Fire / Boundary
- [ ] Fear / Threat
- [ ] Love / Bridge
- [ ] Social Mirror
- [ ] Calm / Learning
- [ ] General Feeling

For each sample, confirm:

- [ ] readable
- [ ] searchable
- [ ] keyboard selectable
- [ ] screen-reader understandable
- [ ] emotionally safe
- [ ] boundary clear
- [ ] favorite button works without color-only meaning
- [ ] copy tools include boundary notes where needed
- [ ] related examples do not weaken the boundary

## Manual test path

Use this quick manual test before release:

1. Open the app.
2. Read the hero and boundary line.
3. Open Formula of the Day with keyboard.
4. Search for `fear`.
5. Select a fear card.
6. Navigate variables by keyboard.
7. Move a playground slider by keyboard.
8. Use each copy button and confirm the live status text updates.
9. Favorite the card and confirm the pressed state is visible.
10. Use favorites-only filtering.
11. Compare it with a calm card.
12. Search/filter the Examples Gallery.
13. Open an example's linked formula.
14. Print preview the selected card.
15. Resize browser to mobile width.
16. Confirm nothing feels like diagnosis or scoring.

## Public voice lock

> Clear enough to use. Gentle enough to trust. Playful enough to remember.
