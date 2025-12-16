### One-page primary site + dedicated gallery pages (homepage shows first 6 by `index`)

#### 1) Keep `/` as the primary one-page experience
- Keep the current section layout (`#home`, `#bio`, `#music`, `#videos`, `#gallery`).
- Keep the existing gallery tabs + lightbox behavior.

#### 2) Homepage gallery becomes “highlights” per category (first 6 by `index`)
In `layouts/index.html`, keep sorting images by `index`, but only render the first 6:

```go-html-template
{{ $sortedImages := sort $gallery.images "index" }}
{{ range first 6 $sortedImages }}
  <figure class="gallery-item" data-category="{{ $gallery.slug }}" itemprop="image" itemscope itemtype="https://schema.org/ImageObject">
    <a href="{{ .url | relURL }}" data-index="{{ .index }}">
      <img loading="lazy" src="{{ .url | relURL }}" alt="{{ if .alt }}{{ .alt }}{{ else }}Mix Hawk country music performance photo{{ end }}" itemprop="contentUrl">
      <meta itemprop="name" content="{{ if .alt }}{{ .alt }}{{ else }}Mix Hawk Photo{{ end }}" />
    </a>
  </figure>
{{ end }}
```

Result:
- Homepage loads fewer thumbnails → faster.
- Still feels like a one-page “app”, just more curated.

#### 3) Add “See all” links to dedicated gallery pages
Add links such as:
- `/gallery/heroes-friends/`
- `/gallery/live-shows/`

Implementation options:
- one “See all” link that updates based on the active tab (JS), or
- a small list of “See all” links for each gallery.

#### 4) Create dedicated gallery pages (SEO landing pages)
Goal: one URL per gallery, with:
- gallery title (`name`)
- short intro (`description`)
- full image list (all images, sorted by `index`)
- optionally reuse the same lightbox behavior for consistency

Implementation options in Hugo:
- **Simplest**: a template that reads a `slug` param and renders from `.Site.Data.galleries`.
- **Cleanest UX/SEO**: one content page per gallery under `content/gallery/<slug>.md`, with a layout that looks up data by `slug` and renders from `data/galleries/*.yaml` (no duplicated image lists).

#### 5) Avoid duplicate-content issues
Homepage shows only 6 per gallery; dedicated pages show full sets. This naturally reduces “same content on two pages” problems.

#### 6) Put richer SEO signals on dedicated pages
- Add visible captions (`<figcaption>`) and/or short supporting text.
- Add scoped JSON-LD for each gallery page (`ImageGallery` + `ImageObject`).

#### 7) Verify behavior
- Homepage tab filtering still works with fewer items.
- Lightbox still cycles through only visible items.
- Dedicated pages render correctly and images open.

#### Open UX choice
Decide whether homepage “See all” should open the dedicated page:
1) in the same tab, or
2) in a new tab (preserves one-page scroll position).
