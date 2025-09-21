# Mix Hawk website — Hugo static site

This repository contains the Hugo-based source for the Mix Hawk website.

The former single-file HTML site was migrated to Hugo. The home page is now managed as Markdown (with embedded HTML for the current layout), and all images, CSS and other static assets are served from Hugo's static/ directory.

## Prerequisites
- Install Hugo (extended version recommended)
  - macOS (Homebrew): `brew install hugo`
  - Windows (Scoop/Chocolatey): `scoop install hugo-extended` or `choco install hugo-extended`
  - Linux: use your package manager or download from https://github.com/gohugoio/hugo/releases
- Git (optional, but recommended)

Verify installation:

```shell
hugo version
```

## Project structure

```
.
├── content/
│   └── _index.md         # Home page content (Markdown; currently embeds the existing HTML)
├── layouts/
│   └── index.html        # Minimal home layout that renders .Content as-is
├── static/
│   ├── assets/           # Images and other static files (copied from original site)
│   └── styles.css        # Site stylesheet (copied from original site)
├── hugo.toml             # Hugo configuration
└── README.md
```

Notes:
- Hugo serves everything under static/ at the site root. For example, `static/assets/logo.svg` is available as `/assets/logo.svg`.
- The home page content lives in `content/_index.md`. Hugo treats `_index.md` as the "list" page for the home section. Our layout (`layouts/index.html`) simply renders that content without wrapping it in an additional template so that the embedded full HTML can render exactly as before.

## Run locally (development)

From the repository root:

```shell
hugo server -D
```

Then open the local address shown in the terminal (usually http://localhost:1313/).

Hugo will watch files for changes and live-reload the browser.

## Build for production

```shell
hugo
```

This will generate the static site into the `public/` directory.

## Deploying to GitHub Pages

There are multiple ways to deploy. Two common options are below. Use whichever suits your Pages setup.

1) Project publishes from the `docs/` folder on the default branch:
- Build to docs/:
  
  ```shell
  hugo -d docs
  ```
- Commit and push. In the repository settings for GitHub Pages, select the source: "Deploy from a branch" and set folder to `/docs`.

2) Publish from a separate branch (e.g., `gh-pages`):
- Build as usual (`public/`), then push that directory to `gh-pages` and configure Pages to deploy from that branch.
- You can automate this using GitHub Actions later.

If your repository is configured as a user/org site (i.e., named `username.github.io`), GitHub expects the built site on the default branch root or a designated branch. Adjust the method accordingly.

## Editing content

- Home page: edit `content/_index.md`.
  - For now, it contains the previous HTML structure embedded inside Markdown for a pixel-identical migration.
  - You can gradually replace blocks with pure Markdown and/or Hugo shortcodes as desired.
- Assets (images, icons, etc.): place or update files under `static/assets/`.
- CSS: update `static/styles.css`.

## Converting more pages in the future

- Add Markdown pages under `content/`. For example, `content/bio/_index.md` for a section index or `content/bio.md` for a single page.
- Create or adjust layouts under `layouts/` as needed. By default, Hugo will look for `_default/single.html` or `_default/list.html` if you add more pages/sections.

## FAQ

- Why is the home page still using HTML inside Markdown? 
  - This provides a minimal-change migration so the site looks and behaves exactly like the original. Hugo's Markdown engine (Goldmark) is configured to allow raw HTML.
- Can I refactor to a more Hugo-idiomatic structure later?
  - Yes. You can introduce partials, a `baseof.html`, and components, or adopt a theme. For now, the layout is intentionally minimal.
