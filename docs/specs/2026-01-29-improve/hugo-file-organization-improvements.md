# Hugo File Organization Improvements

## Scope
Focus on Hugo-driven site organization for content, data, layouts, static assets, and generated output.

## Current Observations
- Hugo sources live in `content/`, `data/`, `layouts/`, and `static/`.
- Generated output lives in `public/` and is tracked in git for GitHub Pages.
- Legacy static artifacts exist at repo root (`index.html`, `styles.css`, `assets/`).
- Gallery data is split across `data/galleries/*.yaml` and images under `static/images/gallery/`.
- Documentation is spread across `README.md`, `CLAUDE.md`, and `docs/tasks/`.

## Suggested Improvements

### 1. Separate source from generated output
- Keep `public/` out of the repository to avoid confusion and accidental edits.
- Add `.gitignore` entries for `public/`, `.hugo_build.lock`, and `resources/` if used.
- Document that `public/` is a local build artifact only.

### 2. Remove or quarantine legacy root artifacts
- Move the legacy root files into an explicit archival folder, for example `legacy/`.
- This includes `index.html`, `styles.css`, and `assets/` referenced in `docs/tasks/2025-10-03-hugo/HUGO_CONVERSION.md`.
- Keep a short `legacy/README.md` that explains these are pre-Hugo references.

### 3. Clarify asset pipelines
- Move gallery images under `assets/` as the source-of-truth.
- Use Hugo Pipes or `resources` to publish processed images to `public/`.
- Keep `static/` for truly unprocessed files (e.g., favicon, robots).

### 4. Consolidate gallery data ownership
- Explicitly document the relationship between `data/galleries/*.yaml` and `assets/` gallery images.
- Keep per-gallery YAML and enforce a naming rule for image folders per gallery.
- Optionally, derive categories from folder structure if templates become too verbose.

### 5. Normalize documentation layout
- Group specs and decisions under:
  - `docs/specs/` for future-facing changes
  - `docs/decisions/` for architectural decisions
- Add a small `docs/README.md` table of contents for discoverability.

### 6. Add repo hygiene boundaries
- Update `README.md` and `CLAUDE.md` to prevent editing generated output directly.
- Add `.gitignore` rules for generated assets as needed.

## Suggested Target Structure (Example)
```
repo/
  assets/                # gallery images and pipeline inputs
  content/
  data/
    galleries/
  layouts/
  static/
  docs/
    specs/
    decisions/
  legacy/                # archived pre-Hugo files
```

## Migration Notes
- If moving `public/` out of version control, update deployment docs and any CI steps.
- If moving legacy files, update docs referencing them.
- If moving gallery images to `assets/`, update templates in `layouts/index.html` and any JS that depends on image paths.

## Quick Wins
- Add `legacy/` and move old root artifacts.
- Add a short `docs/README.md` to centralize documentation links.
- Add `.gitignore` entries for `public/` and build artifacts.
