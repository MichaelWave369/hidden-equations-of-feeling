# README Upgrade Plan

This plan turns the README into a stronger public landing page for **The Hidden Equations of Feeling**.

The README should help a new visitor understand the project in under 30 seconds.

## README goals

A strong README should answer:

1. What is this?
2. Who is it for?
3. What can I do with it?
4. How do I run it?
5. What are the boundaries?
6. How do I cite it?
7. How do I contribute?

## Recommended README structure

### 1. Title and badges

Start with:

```md
# The Hidden Equations of Feeling
```

Add badges when ready:

- GitHub Pages deploy status
- DOI badge after Zenodo release
- license badge if desired

Example placeholder:

```md
[![DOI](https://zenodo.org/badge/DOI/REPLACE-WITH-DOI.svg)](https://doi.org/REPLACE-WITH-DOI)
```

### 2. Short description

Use:

```md
A symbolic formula atlas and interactive React app for mapping comedy, drama, emotion, and storytelling patterns as creative design equations.
```

### 3. Boundary chip / notice

Use this near the top:

```md
**Boundary:** Symbolic design patterns only — not diagnosis, measurement, or universal law.
```

### 4. Preview image

Add the social preview card if helpful:

```md
![The Hidden Equations of Feeling social card](public/social-card.svg)
```

### 5. Live app link

When GitHub Pages is enabled, add:

```md
## Live app

https://michaelwave369.github.io/hidden-equations-of-feeling/
```

### 6. What is inside

Keep this simple:

```md
## What is inside

- Interactive formula-card browser
- Search and family filters
- Formula detail panels
- Compare mode
- Symbolic Formula Playground
- Formula-card JSON data model
- Variable glossary
- Whitepaper/manuscript draft
- GitHub Pages and Zenodo release docs
```

### 7. Who this is for

```md
## Who this is for

- writers
- comedians
- game designers
- NPC/dialogue designers
- educators
- reflective-tool builders
- creative researchers
```

### 8. Quick start

```md
## Quick start

```bash
npm install
npm run validate-data
npm run dev
npm run build
```
```

### 9. Formula example

Show one short example:

```md
## Example formula

```txt
Fear = (Threat × Uncertainty × Imagination²) / (Safety Signals + Knowledge + Support)
```

This does not measure fear. It says fear often grows when threat, uncertainty, and imagination amplify each other, and may soften when safety signals, knowledge, and support become available.
```

### 10. Project docs

Add a doc map:

```md
## Documentation

- [Notation key](docs/notation_key.md)
- [Boundary policy](docs/boundary_policy.md)
- [Data model](docs/data_model.md)
- [Formula review workflow](docs/formula_review_workflow.md)
- [Public language guide](docs/public_language_guide.md)
- [Roadmap](docs/roadmap.md)
- [Release checklist](docs/release_checklist.md)
- [GitHub Pages setup](docs/github_pages_setup.md)
- [Zenodo setup](docs/zenodo_setup.md)
- [Local run guide](docs/local_run_guide.md)
```

### 11. License

```md
## License

Code is intended to be MIT licensed.

Formula text, JSON data, docs, and manuscript content are intended to be CC BY 4.0 unless otherwise noted.

Poster art, generated images, screenshots, and third-party homage materials may use separate terms per release.
```

### 12. Citation

```md
## Citation

Citation metadata is provided in `CITATION.cff`. After Zenodo archiving, cite either the concept DOI for the living project or the version DOI for an exact release.
```

### 13. Contributing

```md
## Contributing

Contributions are welcome, especially new formula ideas, app improvements, accessibility feedback, examples, and boundary concerns.

Every contribution should preserve the project boundary: symbolic design patterns only, never diagnosis or human scoring.
```

## README tone

The README should feel:

- clear
- playful
- public-safe
- emotionally respectful
- technically useful
- easy for beginners

Avoid:

- too much theory at the top
- overclaiming
- dense academic language before the user understands the project
- anything that makes formulas sound diagnostic or scientific

## Suggested final README opening

```md
# The Hidden Equations of Feeling

A symbolic formula atlas and interactive React app for mapping comedy, drama, emotion, and storytelling patterns as creative design equations.

**Boundary:** Symbolic design patterns only — not diagnosis, measurement, or universal law.

The goal is to make invisible narrative and emotional patterns easier to see without reducing people to scores.
```

## Upgrade checklist

- [ ] Add live app link once GitHub Pages is enabled.
- [ ] Add social preview image.
- [ ] Add DOI badge after Zenodo release.
- [ ] Add documentation map.
- [ ] Add formula example.
- [ ] Add stronger contribution section.
- [ ] Add citation section.
- [ ] Keep the boundary visible near the top.

## Public voice lock

> Pattern without shame. Wonder without overclaiming. Feeling without scoring.
