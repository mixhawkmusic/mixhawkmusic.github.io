# Mix Hawk Music

Official website for Mix Hawk, a country singer/songwriter from Tulsa, Oklahoma.

**Live Site**: [https://mixhawkmusic.github.com](https://mixhawkmusic.github.com)

## Overview

This is a static portfolio website showcasing Mix Hawk's music, biography, videos, and photo gallery. The site features embedded music players from Spotify, Apple Music, and ReverbNation, along with YouTube video embeds and an interactive photo gallery with lightbox functionality.

## Tech Stack

- **Languages**: HTML5, CSS3, JavaScript (ES6+)
- **Framework**: None (vanilla JavaScript)
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

No build tools or package managers required. To view/edit the site, you only need:

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server for development (optional, see [Setup](#setup))

## Setup

### Clone the Repository

```bash
git clone https://github.com/mixhawkmusic/mixhawkmusic.github.com.git
cd mixhawkmusic.github.com
```

### Local Development

Since this is a static site with no build process, you can open `index.html` directly in a browser. However, for best results (especially for testing), use a local web server:

**Option 1: Python (Python 3)**
```bash
python -m http.server 8000
```

**Option 2: Python (Python 2)**
```bash
python -m SimpleHTTPServer 8000
```

**Option 3: Node.js (npx)**
```bash
npx http-server -p 8000
```

**Option 4: PHP**
```bash
php -S localhost:8000
```

Then open your browser to `http://localhost:8000`

## Project Structure

```
mixhawkmusic.github.com/
├── index.html              # Main entry point
├── styles.css              # Main stylesheet with custom properties
├── assets/                 # Source assets
│   ├── covers/            # Album/single cover images
│   ├── gallery/           # Photo gallery images (20 photos)
│   ├── logo.svg           # Site logo
│   ├── mix-hawk-bio.jpg   # Biography photo
│   └── noise.svg          # Texture overlay
├── public/                 # Deployment/build output directory
│   ├── index.html         # Compiled HTML
│   ├── styles.css         # Compiled CSS
│   ├── assets/            # Compiled assets (mirrors root assets/)
│   └── qr_*.png          # QR code images
├── .gitignore             # Git ignore rules
├── .hugo_build.lock       # Hugo lock file (legacy, not currently used)
├── mixhawkmusic.github.com.iml  # IntelliJ IDEA project file
└── README.md              # This file
```

### Key Files

- **`index.html`**: Single-page application with all content sections (hero, bio, music, videos, gallery)
- **`styles.css`**: Custom CSS with vintage country color scheme and modern CSS features
- **`assets/gallery/`**: Contains 20 photos (mixhawkmusic-gallery-001.jpg through 020.jpg)

## Scripts

The website includes inline JavaScript for:

1. **Smooth Scrolling**: Enables smooth navigation between sections
2. **Gallery Lightbox**: Interactive image viewer with:
   - Click to open full-size images
   - Keyboard navigation (arrow keys, Escape to close)
   - Touch gestures (swipe left/right on mobile)
   - Focus management for accessibility
3. **Music Player Tabs**: Switches between different streaming platform embeds
4. **Copyright Year**: Auto-updates footer year

No external build scripts or npm scripts are defined.

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

This repository is configured for GitHub Pages deployment. The site is automatically published from the `main` branch.

### Manual Deployment

To deploy to any static hosting service:

1. Copy all files from the root directory (or use the `public/` directory if it contains built assets)
2. Upload to your hosting provider (Netlify, Vercel, AWS S3, etc.)
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

<!-- TODO: Add license information -->
License not specified. Please contact the repository owner for licensing details.

## Contact

For inquiries about Mix Hawk or this website, please reach out through the social media channels linked on the website.

---

**Last Updated**: 2025-09-29
