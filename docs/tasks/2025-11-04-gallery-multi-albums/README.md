# Mix Hawk Music Gallery — multiple photo albums

## Problem statement
We need to support multiple photo albums on the website instead of a single, flat gallery. Today, the home page renders all photos from data/gallery.yaml into one grid and a single lightbox.

Requirements:
- Allow defining multiple named albums in data/gallery.yaml (e.g., “Live Shows”, “Studio Sessions”).
- Render each album on the Gallery section with its own heading and image grid.
- Keep the existing lightbox experience working across all albums (navigating left/right should move through images within the currently opened album, or minimally, across all images on the page).
- Maintain backward compatibility with the existing single-album data format (images: [...]) so the site continues to build even if albums are not defined.

Out of scope for now:
- Per-album routes/pages and deep linking.
- Server-side image processing or thumbnail generation.

Acceptance criteria:
- data/gallery.yaml supports an `albums` array with album objects including a `title` and an `images` list (url, alt, optional index).
- If `albums` is present, the home page displays each album title followed by a responsive image grid.
- If only the legacy `images` list is present, the gallery renders exactly as before.
- The lightbox opens from any image and allows previous/next navigation consistently across the rendered images.
