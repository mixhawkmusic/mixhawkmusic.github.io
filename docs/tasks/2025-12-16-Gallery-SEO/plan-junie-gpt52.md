### Gallery image “tagging” for Google/Bing understanding (SEO)

#### Key point
Search engines won’t “use tags” unless those tags are exposed as **visible page content** and/or **structured data**. The HTML `<meta name="keywords">` tag is largely ignored for ranking.

#### Recommended approach
1. **Store per-image tags and structured fields in your existing gallery data** (`data/galleries/*.yaml`).
   - Keep the current fields (`url`, `alt`, `index`).
   - Add:
     - `tags`: a slug-friendly array (lowercase, hyphenated)
     - optionally: `people`, `location`, `year` (more semantically meaningful than free-form tags alone)

   Example:
   ```yaml
   - url: "images/gallery/heroes-friends/charliedaniels.jpg"
     alt: "Mix Hawk with Charlie Daniels backstage at the Grand Ole Opry, October 2012"
     index: 1
     tags: ["charlie-daniels", "grand-ole-opry", "backstage", "nashville", "2012"]
     people: ["Charlie Daniels", "Mix Hawk"]
     location: "Nashville, TN"
     year: 2012
   ```

2. **Publish those signals in the rendered HTML** so crawlers can associate meaning with each image.
   - You already have strong basics: images have `alt` text and are wrapped in `schema.org/ImageObject` microdata in `layouts/index.html`.
   - Add a small visible caption (`<figcaption>`) near each image (even minimal text helps). Example: “Charlie Daniels • Grand Ole Opry • 2012”.
   - (Optional) emit `data-tags` attributes for debugging/consistency; don’t rely on them alone for SEO.

3. **Add structured data for gallery images (JSON-LD preferred)**.
   - You already output JSON-LD in `layouts/partials/head.html` for the homepage (`MusicGroup` + `WebSite`).
   - Add an `ImageGallery` JSON-LD block with per-image `ImageObject` entries, using fields such as:
     - `contentUrl` (absolute image URL)
     - `caption` / `name`
     - `keywords` (derived from `tags`)
     - optionally `about` / `mentions` referencing `Person`/`Place`

4. **Optional but high impact: dedicated gallery pages**.
   - Instead of only one mega gallery on the homepage, create pages like `/gallery/heroes-friends/`.
   - These pages can include:
     - gallery intro/context text
     - captions
     - scoped JSON-LD for that gallery
   - This improves topical clustering and crawl clarity.

5. **Optional: image sitemap**.
   - If you want maximum discovery, generate/customize a sitemap that includes image entries.

#### Priority order (what to do first)
1. Improve/standardize `alt` + add visible captions.
2. Add `tags` + `people/year/location` to gallery YAML.
3. Emit gallery-level JSON-LD (`ImageGallery` + `ImageObject` with `keywords`/`caption`).
4. Consider dedicated gallery pages and/or an image sitemap.
