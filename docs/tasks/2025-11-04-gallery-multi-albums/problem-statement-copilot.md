# Mix Hawk Music Gallery — multiple photo albums

## Problem statement

Currently the site exposes a single gallery of images (see `static/images/gallery` / `public/images/gallery`). We need to extend the site to support multiple, named photo albums (for example: "Shows 2024", "Studio Sessions", "Portraits") so each album can have its own metadata, cover image and its own set of photos, while keeping the site fast, easy to author and backwards-compatible with the existing gallery.

This task documents the problem, constraints, success criteria, expected data shapes, edge cases, and a recommended migration / implementation checklist.

## Goals

- Allow creating multiple albums, each with:
    - title, optional description, publish date, URL slug
    - cover/thumbnail image
    - an ordered list of photos (each photo: filename, caption, optional date, optional alt text)
    - optional per-album settings (layout, lightbox on/off, items-per-page)
- Provide an album index page listing all albums with their cover and summary.
- Provide a per-album page showing that album's photos and metadata, with pagination if the album is large.
- Keep authoring simple: ideally authored via a single `data/*.yaml` file or by placing album folders under `content/gallery/` with front matter.
- Keep the public output static (Hugo-generated), performant (thumbnails, lazy-loading), and accessible.

## Constraints and assumptions

- This repository uses Hugo (site structure and files indicate a static site). We'll produce a static solution rather than a dynamic server.
- Existing single-gallery layout should remain functional (backwards compatibility). Existing images in `static/images/gallery` must continue to work.
- No runtime server-side components are planned—work within Hugo templates/data files and static assets.
- Performance requirement: large albums should use thumbnails for index/album grids and load full-size images on demand (lightbox or click-through).
- Images are authored and stored in `static/images/gallery/` (or `assets/` if processed). We assume image files are available locally and can be referenced by path.

## Suggested data model (YAML examples)

Option A — central data file (recommended for small number of albums): `data/gallery.yaml`

- albums:
    - id: shows-2024
      title: "Shows 2024"
      slug: "shows-2024"
      date: 2024-07-01
      cover: "/images/covers/shows-2024-cover.jpg"
      description: "Photos from live shows in 2024."
      photos:
        - src: "/images/gallery/mixhawkmusic-gallery-001.jpg"
          caption: "On stage — Downtown Club"
          date: 2024-06-02
          alt: "Mix Hawk on stage"
        - src: "/images/gallery/mixhawkmusic-gallery-002.jpg"
          caption: "Crowd shot"

Option B — folder-per-album with content files (scalable):

content/gallery/shows-2024/_index.md (front matter for album)
content/gallery/shows-2024/photo-001.md (front matter with path to image and caption)
content/gallery/shows-2024/photo-002.md

This option lets Hugo create pages per-album and per-photo and scales better if content contributors prefer markdown pages.

## UI / UX requirements

- Album index page: grid of album cards (cover image, title, short description, link to album page).
- Album page: title + description, album metadata, ordered photo grid with captions. Clicking a photo opens larger view (lightbox) or navigates to a dedicated photo page.
- Responsive layout and accessible markup (alt attributes, keyboard navigation for lightbox).
- Pagination or lazy loading for large albums.

## Performance and asset handling

- Generate or include thumbnail images for album index and album grids (Hugo image processing or pre-generated thumbnails in `static/`).
- Use native `loading="lazy"` on images and smaller `srcset`/`sizes` where appropriate.
- Avoid embedding large full-size images in the album index.

## Acceptance criteria (how we’ll know it's done)

- There is an album index page that lists all albums with cover images and links.
- Each album has its own URL (e.g. `/gallery/shows-2024/`) and displays that album's photos and metadata.
- Authors can create new albums either by adding entries to `data/gallery.yaml` or by creating a new `content/gallery/<slug>/` folder with front matter (document the chosen approach).
- Existing single-gallery pages/images continue to work unchanged.
- Images in album pages lazy-load and use thumbnails on index pages.
- Basic accessibility: images have alt text where provided and album pages have semantic headings.

## Edge cases and testing

- Album with zero photos — show a friendly message and keep the album page available.
- Duplicate slugs — build should fail or warn; the authoring UX must recommend unique slugs.
- Very large albums (hundreds of images) — ensure pagination or infinite scroll is applied; verify build time and page size.
- Missing image files — show placeholder and log the missing asset during authoring.
- Mixed-size images — ensure grid layout remains consistent (use CSS object-fit or fixed aspect ratio wrappers).

## Migration / implementation checklist (recommended next steps)

1. Decide authoring model: `data/gallery.yaml` vs `content/gallery/<slug>/` directories.
2. Design the data shape and add sample album(s) to `data/gallery.yaml` or `content/gallery/` as PoC.
3. Create templates: `layouts/_default/album-list.html` (album index) and `layouts/gallery/single.html` (album page) or equivalent partials.
4. Add thumbnails and image processing (Hugo image functions) or pre-generate thumbnails in `static/images/thumbs/`.
5. Add lightbox JS (existing `static/js/main.js` may be extended) and ensure it's accessible.
6. Update navigation (header) to include the gallery index link.
7. Test on a local Hugo build, check responsive behavior, and validate accessibility.

## Next steps / deliverables

- Implement a small PoC using one sample album and one album index template.
- Add documentation for content authors showing how to add new albums and photos.
- Add tests or a checklist to validate accessibility and performance for albums.


<!-- End of task README -->
