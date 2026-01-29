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
- 🖼️ Interactive multi-category photo gallery with lightbox viewer and category filtering
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

## Quick Start

### Clone the Repository

```bash
git clone https://github.com/mixhawkmusic/mixhawkmusic.github.com.git
cd mixhawkmusic.github.com
```

### Local Development

```bash
hugo server
```

Then open your browser to `http://localhost:1313`

### Production Build

```bash
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
│   └── galleries/             # Gallery categories
│       ├── live-shows.yaml
│       ├── studio.yaml
│       ├── press-kit.yaml
│       ├── behind-stage.yaml
│       └── heroes-friends.yaml
├── layouts/                    # Hugo templates
│   ├── _default/
│   │   └── baseof.html        # Base template structure
│   ├── index.html             # Homepage template
│   └── partials/              # Reusable components
│       ├── head.html
│       ├── header.html
│       ├── footer.html
│       └── social-links.html
├── static/                     # Static assets (copied as-is to public/)
│   ├── css/
│   │   └── styles.css         # Main stylesheet
│   ├── js/
│   │   └── main.js            # JavaScript functionality
│   └── images/                # All images
│       ├── covers/            # Album cover images
│       ├── gallery/           # Photo gallery
│       ├── logo.svg           # Site logo
│       ├── mix-hawk-bio.jpg   # Bio photo
│       └── noise.svg          # Texture overlay
├── public/                     # Generated site (created by hugo build)
├── CLAUDE.md                   # AI assistant guidance (see this for detailed dev docs)
└── README.md                   # This file
```

## Gallery Categories

Available photo gallery categories:
- Live Shows (`data/galleries/live-shows.yaml`)
- Studio (`data/galleries/studio.yaml`)
- Press Kit (`data/galleries/press-kit.yaml`)
- Behind the Stage (`data/galleries/behind-stage.yaml`)
- Heroes and Friends (`data/galleries/heroes-friends.yaml`)

## Deployment

### GitHub Pages

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

**Note:** Make sure the `public/` directory is tracked in git for GitHub Pages deployment.

### Alternative Hosting Options

**Netlify / Vercel:**
1. Connect your GitHub repository
2. Set build command: `hugo --minify`
3. Set publish directory: `public`
4. Deploy automatically on push

**Manual Deployment:**
1. Build the site: `hugo --minify`
2. Upload the `public/` directory contents to your hosting provider
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

## Documentation

For detailed development documentation, content management instructions, and architecture details, see **[CLAUDE.md](CLAUDE.md)**.

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## Contact

For inquiries about Mix Hawk or this website, please reach out through the social media channels linked on the website.

---

**Last Updated**: 2025-11-14