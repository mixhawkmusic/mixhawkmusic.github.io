# 

## Prompt 1
Go through the hugo driven website file organization and suggest improvements.

Save the output to spec/2026-01-29-improve directory

## Outputs
- `spec/2026-01-29-improve/hugo-file-organization-improvements.md`
- `spec/2026-01-29-improve/plan-hugoFileOrganizationImprovements.prompt.md`

## Prompt 2 - Plan: Hugo File Organization Improvements

Review current Hugo layout and identify structure friction (tracked `public/`, duplicated asset roots,
docs sprawl). Then outline a spec doc with scope, goals, risks, and a migration map so future reorg is
low-risk and reproducible. Focus on content/data/layout/static boundaries and repo hygiene for a static deployment target.

### Steps
1. Inventory current content/data/layout/static boundaries using `README.md` and `CLAUDE.md`.
2. Map file ownership and lifecycle for `content/`, `data/`, `layouts/`, `static/`, `assets/`.
3. Identify organization pain points (tracked `public/`, legacy root files, gallery data coupling).
4. Draft recommended folder changes and migration impacts, referencing `config.yaml` and `layouts/`.
5. Produce spec outline with scope, structure, migration steps, and decision log.

### Further Considerations
1. Ensure `public/` is not tracked in git; document the local build output expectation.
2. Move gallery images to `assets/` and update templates/paths accordingly.
3. Define docs scope under `docs/decisions/` and `docs/specs/`.
