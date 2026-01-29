# Claude Repository Improvements

> what you suggest to improve this repostitory?

Based on my analysis, here are the key improvements I recommend for this repository:

### Critical Issues

1. Duplicate Image Indices - data/galleries/heroes-friends.yaml and data/galleries/studio.yaml both use index 9; heroes-friends.yaml and press-kit.yaml both use index 11. These should be unique globally.
2. Unoptimized Images - Gallery images total 22MB (~1MB average per image). Consider:
   - Compress with ImageOptim or TinyPNG
   - Convert to WebP format
   - Add responsive srcset attributes
3. CSS Asset Path Issue - static/css/styles.css:162,167 references url('assets/noise.svg') but file is at static/images/noise.svg. Should be url('../images/noise.svg').

### Performance Improvements

4. Add font-display to Google Fonts - In layouts/partials/head.html:35, append &display=swap to the font URL for better loading behavior.
5. Add preconnect hints for external domains (Spotify, YouTube, Apple Music) to reduce latency.
6. Cache GitHub Actions build - Your deploy workflow rebuilds from scratch each time.

### Minor Improvements

7. Video title attribute - layouts/index.html:98 puts raw YouTube URL in title tooltip; could use video title instead.
8. Sitemap enhancement - Add <lastmod> tags for better SEO.
9. Unused CI dependencies - Dart Sass is installed but no SCSS files exist; can remove for faster builds.

### What's Already Good

- Excellent accessibility (skip link, ARIA labels, keyboard nav, focus trap)
- Clean Hugo architecture with proper separation of concerns
- Rich schema.org structured data for SEO
- Good mobile responsiveness
- Vanilla JS with no dependencies
- Well-documented CLAUDE.md
