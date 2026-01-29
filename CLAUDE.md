# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Mix Hawk Music is a single-page portfolio website built with **Hugo static site generator** for country singer/songwriter Mix Hawk. The site showcases music, videos, biography, and photo gallery with vintage country aesthetic.

**Tech Stack:**
- Hugo (static site generator)
- Go Templates for templating
- Vanilla JavaScript (ES6+) - no frameworks
- CSS3 with custom properties
- GitHub Pages deployment

## Build & Development Commands

### Local Development
```bash
# Start dev server with live reload at http://localhost:1313
hugo server

# Start dev server with drafts enabled
hugo server -D
```

### Production Build
```bash
# Standard build (outputs to public/)
hugo

# Minified build (recommended for production)
hugo --minify
```

### Deployment
```bash
# Build and push to GitHub Pages
hugo --minify
git add .
git commit -m "Update site"
git push origin main
```

**Note:** The `public/` directory is tracked in git for GitHub Pages deployment.

## Architecture

### Hugo Template Structure

The site uses a **single-page layout** with all content on `index.html`. Key architectural pattern:

**Content → Data → Templates → Static Output**

1. **Content Layer** (`content/_index.md`): Markdown with front matter for bio text, hero video URL, and page metadata
2. **Data Layer** (`data/*.yaml`): Structured data for music tracks, videos, and gallery categories
3. **Template Layer** (`layouts/`): Go templates that combine content + data
4. **Static Layer** (`static/`): CSS, JS, images copied as-is to `public/`

### Template Hierarchy

```
baseof.html (base template)
├── head.html (partial)
├── header.html (partial)
├── index.html (main content - defines "main" block)
│   ├── Hero section (content/_index.md front matter)
│   ├── Bio section (content/_index.md markdown)
│   ├── Music section (data/music.yaml)
│   ├── Videos section (data/videos.yaml)
│   └── Gallery section (data/galleries/*.yaml)
├── footer.html (partial)
└── social-links.html (partial)
```

### Data File Architecture

**Multi-Category Gallery System:**
The gallery uses a category-based structure in `data/galleries/`:
- Each YAML file defines one gallery category (live-shows, studio, press-kit, behind-scenes)
- Structure: `{ name, description, slug, featured, order, images[] }`
- Images have: `{ url, alt, index }`
- Template iterates over all galleries and renders items with `data-category` attributes

**Music Tracks:**
`data/music.yaml` contains array of tracks with embed URLs for Spotify, Apple Music, and ReverbNation.

**Videos:**
`data/videos.yaml` contains array of YouTube embed URLs.

### JavaScript Architecture

**File:** `static/js/main.js`

Three main components with **no dependencies**:

1. **Gallery Lightbox (lines 18-131):**
   - Event delegation pattern (single click listener on grid)
   - Dynamic state management via `updateActiveLinks()` function
   - **Critical:** Lightbox navigation respects gallery category filters by tracking only visible items
   - Supports keyboard navigation (arrow keys, Escape, Tab)
   - Touch gesture support (swipe left/right)

2. **Gallery Category Filtering (lines 154-182):**
   - Tab-based filtering with smooth CSS animations
   - URL hash routing for shareable category links (`#gallery/category-name`)
   - Shows/hides items based on `data-category` attribute

3. **Music Player Tabs (lines 134-151):**
   - Switches between Spotify/Apple Music/ReverbNation embeds
   - Shows/hides iframes based on `data-service` attribute

**Key Pattern:** All interactive features use **vanilla JS with event delegation** for performance.

### CSS Architecture

**File:** `static/css/styles.css`

**Design System:**
- CSS Custom Properties for color scheme (vintage country theme: burnt orange, brown, cream)
- Mobile-first responsive design with `@media` queries
- Glassmorphism effects using `backdrop-filter`
- CSS Grid for gallery layout (auto-fit columns)

**Critical Sections:**
- Gallery tabs (lines 224-254): Tab navigation styling
- Gallery animations (lines 262-290): Fade-in/scale transitions on category switch
- Lightbox (lines 450+): Full-screen modal with controls
- Mobile responsive (lines 293-305): Horizontal scroll tabs for small screens

## Content Management

### Repository management rules

- **Branching:** Use feature branches for new content, merge into `main` after review.
- **Commit Messages:** Use imperative mood, concise, and descriptive.
- **public/ directory:** Do not edit files in this directory directly.
  Keep it for generated output only and always prevent it from being committed.

### Adding Gallery Photos

1. Add image file to `static/images/gallery/`
2. Edit appropriate category file in `data/galleries/` (e.g., `live-shows.yaml`)
3. Add entry:
   ```yaml
   - url: "images/gallery/new-photo.jpg"
     alt: "Photo description"
     index: 21  # Next available global index
   ```
4. Rebuild: `hugo --minify`

**To create new gallery category:**
Create `data/galleries/new-category.yaml` with structure:
```yaml
name: "Category Name"
description: "Description text"
slug: "category-slug"
featured: true
order: 5
images: []
```
Hugo template automatically generates tab for new category.

### Adding Music Tracks

Edit `data/music.yaml`:
```yaml
- title: "Song Title"
  spotify: "https://open.spotify.com/embed/track/..."
  apple: "https://embed.music.apple.com/..."
  reverbnation: "https://www.reverbnation.com/widget_code/..."
```

### Adding Videos

Edit `data/videos.yaml`:
```yaml
- url: "https://www.youtube.com/embed/VIDEO_ID"
  title: "Video Title"
```

### Updating Bio

Edit `content/_index.md`:
- Front matter: `hero_video`, `bio_image`, `tagline`
- Markdown content: Bio text rendered in Bio section

### Updating Social Links

Edit `config.yaml` under `params.social`.

## Hugo Template Patterns

**Accessing data files:**
```go
{{ range .Site.Data.music.tracks }}
  {{ .title }}
{{ end }}
```

**Nested gallery iteration:**
```go
{{ range $key, $value := .Site.Data.galleries }}
  {{ $gallery := index $.Site.Data.galleries $key }}
  {{ range $gallery.images }}
    <!-- Render gallery item -->
  {{ end }}
{{ end }}
```

**Front matter variables:**
- `{{ .Params.tagline }}` - from page front matter
- `{{ .Content }}` - renders markdown content
- `{{ .Site.Params.social.spotify }}` - from config.yaml

**URL handling:**
```go
{{ .url | relURL }}  # Converts to relative URL with baseURL
```

## Important Constraints

1. **Single-page architecture**: All content lives on index.html - no separate pages for sections
2. **No build dependencies**: No npm, no package.json - only Hugo required
3. **Manual YAML editing**: No CMS - content managed via direct file edits
4. **GitHub Pages deployment**: `public/` directory must be committed
5. **Lightbox category awareness**: When modifying gallery JS, ensure `updateActiveLinks()` is called before navigation to maintain category boundaries

## Testing After Changes

```bash
# Rebuild site
hugo --minify

# Verify HTML output
grep -A 5 "gallery-tabs" public/index.html

# Check for build errors
hugo --minify 2>&1 | grep -i error

# Test locally
hugo server  # Then test in browser
```

**Manual testing checklist for gallery changes:**
- [ ] Gallery tabs display correctly
- [ ] Category filtering works (smooth animations)
- [ ] Lightbox opens from filtered view
- [ ] Lightbox navigation stays within category boundaries
- [ ] Keyboard navigation works (arrow keys)
- [ ] Touch swipe works on mobile
- [ ] URL hash routing works (`#gallery/category-name`)
- [ ] Responsive on mobile (horizontal scroll tabs)

## Common Gotchas

1. **Lightbox boundaries**: The lightbox must dynamically track visible items (`updateActiveLinks()`) - never use a static array of all gallery links
2. **Hugo data iteration**: Use `{{ $gallery := index $.Site.Data.galleries $key }}` pattern for nested ranges
3. **Relative URLs**: Always use `| relURL` filter for image/asset paths
4. **JavaScript event delegation**: Use single listener on parent grid element, not individual item listeners
5. **CSS animations**: Gallery items need both `display:none` and `opacity:0` transitions - use `setTimeout` to stagger them
6. **Config changes**: Require rebuild - dev server doesn't always hot-reload config.yaml changes
