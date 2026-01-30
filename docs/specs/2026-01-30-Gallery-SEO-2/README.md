#

## Prompt

Realizing `/data/galleries` folder with the mix hawk pictures with all the people, there
is an idea to use those people digital presence in increase the SEO of the website.

What do you think?

Add your thoughts below in docs/specs/2026-01-30-Gallery-SEO-2 directory.

## Thoughts

Using the people featured in the galleries can help SEO, but only if it is done with clear intent, accurate metadata, and permission. The biggest wins come from structured data, descriptive copy, and internal linking rather than just name-dropping.

Recommendations:

- Add per-gallery descriptive text that includes venue, event name, date, city, and notable people who are clearly visible. Keep it factual and non-spammy.
- Add `alt` text and captions that describe who is in the photo plus the context (event, location, year). This helps image search and accessibility.
- Add a dedicated person index page only for people who have consented or are public figures; link to the galleries where they appear.
- Use `Person` and `ImageObject` schema with `about` or `mentions` to connect people to specific photos and pages.
- Use consistent naming in `/data/galleries/*.yaml` so the same person is represented the same way across albums.
- Avoid scraping or implying endorsements; use neutral language like “pictured with” or “appears in”.

Risks to avoid:

- Using names without consent for private individuals.
- Over-optimizing (stuffing many names on a single page with no context).
- Mismatched names or incorrect identifications.

Next steps I can take:

- Propose a data model for people metadata in `/data/galleries`.
- Draft a `Person` and `ImageObject` schema snippet for Hugo templates.
- Add a sample gallery page with structured data and improved copy.

## Proposed data model for people metadata

Add optional people metadata at the gallery and image level in `/data/galleries/*.yaml`.

Example (YAML):

```yaml
name: "Heroes and Friends"
description: "Celebrating the legends and friends who inspire"
slug: "heroes-friends"
featured: true
order: 5
people:
  - id: "charlie-daniels"
    name: "Charlie Daniels"
    type: "Person" # or "MusicGroup" if applicable
    url: "https://www.charliedaniels.com/"
    sameAs:
      - "https://en.wikipedia.org/wiki/Charlie_Daniels"
    consent: "public-figure"
images:
  - url: "images/gallery/heroes-friends/charliedaniels.jpg"
    alt: "Mix Hawk with Charlie Daniels backstage Grand Ole Opry, October 2012"
    index: 1
    people:
      - id: "mix-hawk"
      - id: "charlie-daniels"
```

Notes:

- `people` at gallery level lists canonical records for the gallery.
- `people` at image level references `id` values from the gallery list.
- `consent` can be `public-figure`, `consent-on-file`, or `unknown` to filter display/markup.
- Use consistent `id` values across galleries to support a global index later.

## Hugo JSON-LD snippets (Person + ImageObject)

Place in `layouts/partials/structured-data-gallery.html` and include from `layouts/index.html`.

```html
{{- $gallery := .gallery -}}
{{- $images := .images -}}
{{- $people := $gallery.people | default (slice) -}}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "name": {{ $gallery.name | jsonify }},
  "description": {{ $gallery.description | jsonify }},
  "image": [
    {{- range $i, $img := $images -}}
    {{- if $i }},{{ end -}}
    {
      "@type": "ImageObject",
      "contentUrl": {{ (printf "/%s" $img.url) | absURL | jsonify }},
      "caption": {{ $img.alt | jsonify }},
      "about": [
        {{- $imgPeople := $img.people | default (slice) -}}
        {{- range $j, $pRef := $imgPeople -}}
        {{- $p := (index (where $people "id" $pRef.id) 0) -}}
        {{- if and $p (ne $p.consent "unknown") -}}
        {{- if $j }},{{ end -}}
        {
          "@type": {{ ($p.type | default "Person") | jsonify }},
          "name": {{ $p.name | jsonify }},
          {{- with $p.url }}"url": {{ . | jsonify }},{{ end -}}
          {{- with $p.sameAs }}"sameAs": {{ . | jsonify }}{{ end -}}
        }
        {{- end -}}
        {{- end -}}
      ]
    }
    {{- end -}}
  ]
}
</script>
```

Notes:

- Filters out `consent: unknown` by default.
- Uses `about` on `ImageObject` to connect people to specific images.
- You can include `@type: MusicGroup` if the person is a band.

## Sample gallery copy + structured data usage

Example copy for a gallery page/section (could be used in `layouts/index.html`):

```html
<section class="section section-gallery" aria-label="Photo Gallery">
  <header class="section-header">
    <h2>Heroes and Friends</h2>
    <p>Backstage and on-stage moments with artists and friends across the years, from the Grand Ole Opry in 2012 to the ISSA Awards in Atlanta. These photos highlight collaborations, inspirations, and the community around Mix Hawk.</p>
  </header>
  {{ partial "structured-data-gallery.html" (dict "gallery" $gallery "images" $sortedImages) }}
</section>
```

If you want, I can:

- Add the `people` model to one gallery file as a concrete example.
- Implement the partial in `layouts/partials/structured-data-gallery.html`.
- Wire the partial into `layouts/index.html`.
