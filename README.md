# The Gipsy Hill Smokehouse

Static HTML rebuild of [thegipsyhillsmokehouse.com](https://www.thegipsyhillsmokehouse.com), recreated from the live site for hosting on GitHub Pages or any static host.

## Pages

- `index.html` — Home
- `our-food.html` — Our Food / Barbecue Menus
- `wedding-catering.html` — Hog Roast Wedding Caterer London
- `event-catering.html` — Corporate Events
- `private-parties.html` — Private Parties
- `spit-roasts-hog-roasts.html` — Spit Roasts & Hog Roasts
- `testimonials.html` — Customer testimonials
- `gallery.html` — Hog Roast & Barbecue photos
- `contact.html` — Contact
- `wedding-menus.html` — Wedding menus (Porchetta / Lamb / Sea)

## Files

- `styles.css` — Shared styles (brand colours, typography, layout)
- `script.js` — Mobile nav toggle
- `*.html` — Self-contained pages (header & footer duplicated, no build step)

## Brand

- Headings: Playfair Display
- Body: Open Sans
- Accent: `#F59A28` (orange CTAs)
- Sage: `#C2C2B0`
- Cream: `#F3F2DC`
- Background: `#FFFDF4`
- Dark accent: `#162A2A`

## Hosting

Drop into any static host. For GitHub Pages: enable Pages on the `main` branch (root) and the site is live.

Images are loaded from the existing Wix CDN URLs — no asset bundling required. If you replace images, update the `src` attributes in the relevant HTML files.

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```
