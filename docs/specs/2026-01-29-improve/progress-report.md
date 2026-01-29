# Progress Report

## Date
2026-01-29

## Scope
Implement step 2 and step 3 from the plan:
- Move gallery images to `assets/`.
- Restructure documentation under `docs/specs/` and `docs/decisions/`.

## Completed
- Moved gallery images from `static/images/gallery/` to `assets/images/gallery/`.
- Updated `layouts/index.html` to load gallery images via Hugo resources.
- Created `docs/specs/` and `docs/decisions/` directories.
- Moved contents of `docs/tasks/` into `docs/specs/` and removed `docs/tasks/`.
- Removed the `public/` directory from the working tree.

## Notes
- Gallery image URLs in `data/galleries/*.yaml` remain as `images/gallery/...` and are now resolved via `resources.Get`.
- Documentation references to `docs/tasks/` and `static/images/gallery/` should be updated next.

## Follow-ups
- Update `CLAUDE.md` instructions to reference `assets/images/gallery/`.
- Update `docs/README.md` with a table of contents for `docs/specs/` and `docs/decisions/`.
- Update any remaining references to `docs/tasks/` and `static/images/gallery/` in docs.
