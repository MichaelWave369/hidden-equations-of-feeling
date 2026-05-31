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

## Color and contrast

Check:

- [ ] Text has strong contrast against the background.
- [ ] Family colors are not the only way to identify card families.
- [ ] Buttons and interactive controls have visible focus states.
- [ ] Warning text is readable and not only communicated through red/orange color.
- [ ] The app is usable in grayscale or low-saturation viewing.

## Keyboard access

Check:

- [ ] All buttons can be reached with the Tab key.
- [ ] Formula cards can be selected by keyboard.
- [ ] Search input is keyboard accessible.
- [ ] Family filter is keyboard accessible.
- [ ] Slider controls are keyboard accessible.
- [ ] Compare mode controls are keyboard accessible.
- [ ] Focus order follows the visual page order.
- [ ] No keyboard trap exists.

## Screen-reader support

Check:

- [ ] Each formula has `formulaPlaintext`.
- [ ] Formula cards have readable titles.
- [ ] Buttons have clear accessible labels.
- [ ] Sliders include variable name, role, and current symbolic state.
- [ ] The symbolic intensity meter has a text equivalent.
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
- [ ] reflection prompt
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

## Mobile accessibility

Check:

- [ ] Layout works on small screens.
- [ ] Cards are not too cramped.
- [ ] Search and filter controls are easy to tap.
- [ ] Sliders have enough space for touch input.
- [ ] Text does not require horizontal scrolling.
- [ ] Compare mode stacks cleanly on mobile.

## Print accessibility

Check:

- [ ] Print stylesheet hides nonessential controls.
- [ ] Formula detail pages print clearly.
- [ ] Boundary note remains visible in print.
- [ ] Text prints in high contrast.
- [ ] Formula and variable meanings remain together.

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

## Manual test path

Use this quick manual test before release:

1. Open the app.
2. Read the hero and boundary line.
3. Search for `fear`.
4. Select a fear card.
5. Navigate variables by keyboard.
6. Move a playground slider by keyboard.
7. Compare it with a calm card.
8. Print preview the selected card.
9. Resize browser to mobile width.
10. Confirm nothing feels like diagnosis or scoring.

## Public voice lock

> Clear enough to use. Gentle enough to trust. Playful enough to remember.
