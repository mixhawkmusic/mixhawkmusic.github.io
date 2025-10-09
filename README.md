# Mix Hawk Music

Official website for Mix Hawk, a country singer/songwriter from Tulsa, Oklahoma.

**Live Site**: [https://mixhawkmusic.github.com](https://mixhawkmusic.github.com)

## Overview

This is a portfolio website built with Hugo static site generator, showcasing Mix Hawk's music, biography, videos, and photo gallery. The site features embedded music players from Spotify, Apple Music, and ReverbNation, along with YouTube video embeds and an interactive photo gallery with lightbox functionality.

## Tech Stack

- **Static Site Generator**: Hugo
- **Template Language**: Go Templates (Hugo)
- **Languages**: HTML5, CSS3, JavaScript (ES6+)
- **Content Format**: Markdown + YAML data files
- **Dependencies**: 
  - Google Fonts (Special Elite, Cormorant Garamond)
  - Font Awesome 6.5.1 (icons)
- **Deployment**: GitHub Pages compatible

## Features

- 📱 Fully responsive design
- 🎵 Multiple music streaming platform embeds (Spotify, Apple Music, ReverbNation)
- 🎬 YouTube video integration
- 🖼️ Interactive photo gallery with lightbox viewer
- ♿ Accessibility features (ARIA labels, keyboard navigation, focus management)
- 🎨 Vintage country-themed design with custom color scheme
- 🔄 Smooth scroll navigation
- 📱 Touch gesture support (swipe) for gallery

## Requirements

To build and develop this Hugo site, you need:

- **Hugo** (extended version recommended)
- A modern web browser (Chrome, Firefox, Safari, Edge)

### Installing Hugo

**macOS:**
```bash
brew install hugo
```

**Windows:**
```bash
choco install hugo-extended
# or
scoop install hugo-extended
```

**Linux:**
```bash
# Snap
sudo snap install hugo

# Or download from: https://gohugo.io/installation/
```

**Verify Installation:**
```bash
hugo version
```

## Setup

### Clone the Repository

```bash
git clone https://github.com/mixhawkmusic/mixhawkmusic.github.com.git
cd mixhawkmusic.github.com
```

### Local Development

Start the Hugo development server with live reload:

```bash
hugo server
```

Then open your browser to `http://localhost:1313`

The development server will automatically rebuild the site when you make changes to content, templates, or static files.

### Building for Production

To generate the static site in the `public/` directory:

Standard build
```shell
hugo
```

Minified build (recommended for production)
```shell
hugo --minify
```

The generated site will be in the `public/` directory, ready for deployment.

## Project Structure

```
mixhawkmusic.github.com/
├── config.yaml                 # Hugo site configuration
├── content/                    # Markdown content files
│   └── _index.md              # Homepage content (bio, hero)
├── data/                       # Structured data (YAML)
│   ├── music.yaml             # Music tracks/embeds
│   ├── videos.yaml            # Video embeds
│   └── gallery.yaml           # Gallery images
├── layouts/                    # Hugo templates
│   ├── _default/
│   │   └── baseof.html        # Base template structure
│   ├── index.html             # Homepage template
│   └── partials/              # Reusable components
│       ├── head.html          # HTML head section
│       ├── header.html        # Site header
│       ├── footer.html        # Site footer
│       └── social-links.html  # Social media links
├── static/                     # Static assets (copied as-is to public/)
│   ├── css/
│   │   └── styles.css         # Main stylesheet
│   ├── js/
│   │   └── main.js            # JavaScript functionality
│   └── images/                # All images
│       ├── covers/            # Album cover images
│       ├── gallery/           # Photo gallery (20 photos)
│       ├── logo.svg           # Site logo
│       ├── mix-hawk-bio.jpg   # Bio photo
│       └── noise.svg          # Texture overlay
├── public/                     # Generated site (git-ignored, created by hugo build)
└── README.md                   # This file
```

### Key Files & Directories

- **`config.yaml`**: Site-wide settings including title, description, social media URLs
- **`content/_index.md`**: Homepage markdown content with front matter (title, tagline, hero video, bio)
- **`data/*.yaml`**: Structured data for music tracks, videos, and gallery images
- **`layouts/`**: Hugo templates using Go template language
- **`static/`**: Static assets served directly (CSS, JS, images)
- **`public/`**: Generated static site output (created by `hugo` build command)

## Content Management

Hugo separates content from presentation, making it easy to update the site:

### Updating Content

**Biography Text:**
Edit `content/_index.md` - write in Markdown format with front matter variables:
```yaml
---
title: "Mix Hawk Music"
tagline: "Singer • Songwriter • Guitar Player"
hero_video: "https://www.youtube.com/embed/..."
bio_image: "/images/mix-hawk-bio.jpg"
---
Your bio content in Markdown here...
```

**Music Tracks:**
Edit `data/music.yaml`:
```yaml
- title: "Song Title"
  spotify: "https://open.spotify.com/embed/..."
  apple_music: "https://embed.music.apple.com/..."
  reverbnation: "https://www.reverbnation.com/widget_code/..."
```

**Videos:**
Edit `data/videos.yaml`:
```yaml
- url: "https://www.youtube.com/embed/VIDEO_ID"
  title: "Video Title"
```

**Gallery Images:**
1. Add images to `static/images/gallery/`
2. Edit `data/gallery.yaml`:
```yaml
- url: "/images/gallery/photo.jpg"
  alt: "Photo description"
  index: 1
```

**Site Settings & Social Links:**
Edit `config.yaml`:
```yaml
params:
  social:
    spotify: "https://open.spotify.com/artist/..."
    instagram: "https://instagram.com/..."
    # ... other social links
```

### Template Customization

Hugo templates use Go template language:
- `{{ .Content }}`: Renders Markdown content
- `{{ .Params.variable }}`: Accesses front matter variables
- `{{ .Site.Params.variable }}`: Accesses config.yaml parameters
- `{{ range .Site.Data.music }}`: Loops through data files
- `{{ partial "name.html" . }}`: Includes partial templates

## Scripts

The website includes JavaScript in `static/js/main.js` for:

1. **Smooth Scrolling**: Enables smooth navigation between sections
2. **Gallery Lightbox**: Interactive image viewer with:
   - Click to open full-size images
   - Keyboard navigation (arrow keys, Escape to close)
   - Touch gestures (swipe left/right on mobile)
   - Focus management for accessibility
3. **Music Player Tabs**: Switches between different streaming platform embeds
4. **Copyright Year**: Auto-updates footer year

## Environment Variables

None required. The site has no backend or API integrations requiring configuration.

## Tests

<!-- TODO: Add testing framework and tests -->
Currently, no automated tests are implemented. Manual testing is performed across:
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile devices (iOS, Android)
- Accessibility tools (screen readers, keyboard-only navigation)

## Deployment

### GitHub Pages

This repository is configured for GitHub Pages deployment. The workflow is:

1. **Build the site locally:**
   ```bash
   hugo --minify
   ```

2. **Commit and push changes:**
   ```bash
   git add .
   git commit -m "Update site content"
   git push origin main
   ```

3. GitHub Pages will serve the site from the `public/` directory or configured branch.

**Note:** Make sure the `public/` directory is tracked in git for GitHub Pages deployment, or configure GitHub Pages to build from a specific branch/directory.

### Alternative Hosting Options

To deploy to other static hosting services:

**Netlify / Vercel:**
1. Connect your GitHub repository
2. Set build command: `hugo --minify`
3. Set publish directory: `public`
4. Deploy automatically on push

**Manual Deployment:**
1. Build the site: `hugo --minify`
2. Upload the `public/` directory contents to your hosting provider (AWS S3, DigitalOcean, etc.)
3. Configure the hosting to serve `index.html` as the default document

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

Modern CSS features used:
- CSS Custom Properties (variables)
- CSS Grid and Flexbox
- `clamp()` for responsive typography
- `color-mix()` for dynamic color generation
- `backdrop-filter` for glassmorphism effects

## Social Media Links

The site includes links to Mix Hawk's profiles on:
- Spotify
- Apple Music
- YouTube
- Instagram
- Facebook
- Twitter/X

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

The MIT License is a permissive license that allows for reuse, modification, and distribution. Feel free to use this Hugo site structure as a template for your own projects.

## Contact

For inquiries about Mix Hawk or this website, please reach out through the social media channels linked on the website.

---

**Last Updated**: 2025-10-09
