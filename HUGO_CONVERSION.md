# Hugo Static Site Generator Conversion

This repository has been converted from a static HTML website to a Hugo static site generator project.

## Hugo Directory Structure

### Configuration
- **config.yaml**: Site-wide configuration including title, description, social media URLs, and Hugo settings

### Content
- **content/_index.md**: Homepage content in Markdown format with front matter containing:
  - title: Page title
  - tagline: Hero section tagline
  - hero_video: Hero section YouTube embed URL
  - bio_image: Path to bio photo
  - Bio content in Markdown (body of the file)

### Data Files (Structured Data)
- **data/music.yaml**: Music tracks with embed URLs for Spotify, Apple Music, and ReverbNation
- **data/videos.yaml**: YouTube video embed URLs
- **data/gallery.yaml**: Gallery images with URLs, alt text, and index numbers

### Layouts (Templates)
- **layouts/_default/baseof.html**: Base template defining overall HTML structure
- **layouts/index.html**: Homepage template with all sections (hero, bio, music, videos, gallery)
- **layouts/partials/head.html**: HTML head section with meta tags, fonts, and CSS
- **layouts/partials/header.html**: Site header with logo and navigation
- **layouts/partials/footer.html**: Site footer with copyright and social links
- **layouts/partials/social-links.html**: Reusable social media links component

### Static Assets
- **static/css/styles.css**: Complete stylesheet with vintage country theme
- **static/js/main.js**: JavaScript for lightbox, smooth scroll, and music tabs
- **static/images/**: All images organized in subdirectories:
  - covers/: Album cover images
  - gallery/: 20 gallery photos
  - logo.svg: Site logo
  - mix-hawk-bio.jpg: Bio photo
  - noise.svg: Texture overlay

## Building the Site

To build and run the Hugo site:

```bash
# Install Hugo (if not already installed)
# macOS: brew install hugo
# Or download from: https://gohugo.io/installation/

# Build the site
hugo

# Run local development server
hugo server

# Build for production
hugo --minify
```

The generated site will be in the `public/` directory.

## Key Features

- **Responsive Design**: Mobile-friendly layout with flexible grids
- **Accessibility**: ARIA labels, skip links, keyboard navigation, focus states
- **Gallery Lightbox**: Full-screen image viewer with keyboard/touch support
- **Music Player Tabs**: Switch between Spotify, Apple Music, and ReverbNation
- **Smooth Scrolling**: Animated navigation to page sections
- **Print-Friendly**: Optimized styles for printing
- **SEO-Friendly**: Proper meta tags and semantic HTML

## Content Management

To update content:

1. **Bio Text**: Edit `content/_index.md`
2. **Music Tracks**: Edit `data/music.yaml`
3. **Videos**: Edit `data/videos.yaml`
4. **Gallery**: Edit `data/gallery.yaml` and add images to `static/images/gallery/`
5. **Social Links**: Edit `config.yaml` under `params.social`
6. **Site Settings**: Edit `config.yaml`

## Template Customization

Templates use Hugo's template language:
- `{{ .Content }}`: Renders markdown content
- `{{ .Params.variable }}`: Accesses front matter variables
- `{{ .Site.Params.variable }}`: Accesses config.yaml parameters
- `{{ range .Site.Data.file.array }}`: Loops through data files
- `{{ partial "name.html" . }}`: Includes partial templates

## Original Static Files

The original static HTML files remain in the root directory for reference:
- index.html (original)
- styles.css (original)
- assets/ (original)
