# GHS website deployment — record of the 21 Aug 2026 run

**Outcome: the SERP 404 problem is fixed.** Stages 1–6, 8 and most of 9 are complete and independently verified.

## What changed

1. **`thegipsyhillsmokehouse.com` added to cPanel** as an addon domain with document root
   `/public_html/thegipsyhillsmokehouse.co.uk` — sharing the GHS folder. One set of files, both domains.
2. **DNS** was already correct on arrival (A → `92.205.171.218`, www CNAME → root). MX + SPF untouched.
   Snapshot: `dns-snapshot-before-change-2026-08-21.md`.
3. **SSL** — Let's Encrypt cert issued 21 Aug 05:23 GMT, covers `.com` and `www.com`, expires 19 Nov 2026.
4. **Uploaded to the GHS folder:** `.htaccess` + 13 files (10 updated pages, `404.html`, `robots.txt`,
   `sitemap.xml`). All 13 verified byte-identical to the local repo.

## Verification performed

- 46/46 legacy Wix URLs → 200 on a real page
- Canonical funnel: `http`, non-www, `.co.uk`, `www.co.uk` all 301 to
  `https://www.thegipsyhillsmokehouse.com` **with the path preserved**
- Extensionless URLs work; `.html` canonicalises to extensionless
- `robots.txt` live; `sitemap.xml` live with 10 URLs, all pointing at the `.com`
- timclements.com, risingman.co.uk, roasthog.com, leadership-assessment.timclements.com all
  confirmed unaffected

## ⚠️ The near-miss worth remembering

The checklist said upload to `public_html`. On this account that is **timclements.com's** document
root, with the other 7 sites as subfolders inside it — the `.htaccess` would have redirected every
one of them to the Smokehouse and Stage 5 would have overwritten the timclements.com homepage.
Correction banner now at the top of the checklist.

## Outstanding

*(Stage 8 completed 21 Aug — see below. Stage 9 remains.)*

### Stage 8 — Search Console ✅ COMPLETE (21 Aug 2026)

- **Property already existed and was verified**: `https://www.thegipsyhillsmokehouse.com/` (URL-prefix).
  A `thegipsyhillsmokehouse.com` **Domain** property also exists and is verified.
  `thegipsyhillsmokehouse.co.uk` exists but is **Not verified** — left alone deliberately (no Change of
  Address needed; we stayed on `.com`, and `.co.uk` 301s to it).
- **Sitemap submitted** — `sitemap.xml`, "Sitemap submitted successfully".
- **Indexing requested, all 5** — `/`, `/spit-roasts-hog-roasts`, `/wedding-catering`,
  `/event-catering`, `/private-parties`. Each confirmed "Indexing requested / added to a priority
  crawl queue".

**What the inspections proved — the damage was real and Google had recorded it:**

| URL | Last crawl before today | What Google saw |
|---|---|---|
| `/` | 16 Aug 2026 | "Page with redirect" — canonical assigned to `.co.uk` |
| `/spit-roasts-hog-roasts` | 25 Jul 2026 | **Failed: Not found (404)** |
| `/event-catering` | 20 Aug 2026 | **Failed: Not found (404)** |
| `/private-parties` | 6 Aug 2026 | **Failed: Not found (404)** |
| `/wedding-catering` | never | URL unknown to Google |

Google's selected canonical for the homepage was `https://thegipsyhillsmokehouse.co.uk/`. That should
flip to the `.com` on re-crawl, because `.co.uk` now 301s to it.

**Also seen in Sitemaps:** six stale Wix-era sitemaps still listed and permanently failing —
`/pages-sitemap.xml`, `/blog-posts-sitemap.xml`, `/restaurants-menu-sitemap.xml`,
`/booking-services-sitemap.xml`, `/sitemap`, `/timclementsbio`. Harmless but untidy; can be removed
from the report at any time (removing a sitemap does not deindex anything).

**Expect:** one to three weeks for the SERP to re-crawl and tidy up. The difference from today is that
those links *work* rather than dead-ending.

### Stage 9 — mostly COMPLETE (21 Aug 2026)

**Done:**
- ✅ **Wix CDN dependency removed.** All 69 images rehosted to `/images/` on our own
  server. Transferred browser-side (fetch from Wix → cPanel API) because GoDaddy
  disables shell access and the upload page 404s. All 69 verified byte-identical
  between repo and server; 0 wixstatic references remain sitewide.
- ✅ **Both enquiry forms tested end-to-end.** Contact and event-catering forms each
  submitted and confirmed arriving in the GHS inbox with all 7 fields, 10:11 and
  10:12. Distinct subject lines per page. First proof since the July Formspree rewiring.
- ✅ **Backup rescued.** The Desktop copy had never completed — the only copy was the
  publicly downloadable one on the server. Downloaded, zip integrity verified (13
  files), saved to Desktop, then the server copy and `_rehost.py` were trashed.
- ✅ **Three new pages live**: `/our-story`, `/privacy-policy`, `/terms-conditions`.
  Closes both remaining legacy 404s. Our Story names the Fat Duck per Tim's explicit
  decision (21 Aug), overriding the pending-consent default.
- ✅ Our Story added to its nav submenu (previously had no story page), Privacy and
  Terms in the footer sitewide, copyright 2024 → 2026, sitemap now 13 URLs and
  resubmitted — Search Console reports **Success, 13 discovered pages**.

**Still open:**
- ⛔ **Custom 404 page.** `ErrorDocument` is ignored by GoDaddy's edge layer — proved
  with a literal-string probe, which never appeared. The 13-byte response is not
  Apache's own default either. Needs GoDaddy support, not a config change. NB an
  earlier hypothesis that our own `.html`→extensionless redirect was the cause was
  tested and disproved; `.htaccess` now points at `/404` regardless, which is correct
  if the block is ever lifted.
- ⛔ **The two lost blog posts.** The apple-in-the-mouth piece was ~64% of all organic
  traffic; the pork-crackling piece ranked for 131 keywords. The Dropbox file
  `SEO/What To Serve At A Pig Roast.docx` turns out to be keyword research, not a
  draft — these need writing properly, in voice.
- ◻️ Six stale Wix-era sitemaps still listed in Search Console and permanently failing.
  Harmless; removable any time.
- ◻️ Two test enquiries sitting in the GHS inbox to delete.
- ◻️ Repo committed locally but not pushed to GitHub.

---

# GitHub — the repo has TWO unrelated histories (found 21 Aug 2026)

Pushing to `main` was **rejected**: the local repo and the GitHub repo share **no
common ancestor**. They are two separate lines of work on the same site.

**`main`** (last commit 6 Jul 2026) — a Netlify line that never went live:
`99b417f` Add files via upload · `a1892b6` Add client-side site search (#1) ·
`a94f798` Set up Netlify hosting and make the quote form work (#2).
16 files: the 10 core pages plus `netlify.toml`, `search.js`, `thank-you.html`.
No images, no `.htaccess`, no sitemap, no robots.txt. Netlify Forms, not Formspree.
No live deploy found at the obvious `*.netlify.app` addresses.

**`cpanel-live-site`** (pushed 21 Aug 2026) — what is actually live on GoDaddy cPanel.
94 files including all 69 rehosted images, `.htaccess`, sitemap, robots, and the three
new pages.

`main` was **not** force-overwritten — that would have destroyed three commits of real
work on Tim's say-so about a different matter.

## Site search — salvaged from `main`

The one genuinely valuable thing on the Netlify branch. Cherry-picked and adapted:
index URLs `*.html` → extensionless (they would otherwise each take a 301 under our
canonicalisation), script include made root-absolute, index extended 10 → 13 pages with
keywords for Our Story / Privacy / Terms, and 105 lines of search CSS appended.
Verified on the live site: button mounts on all 13 pages; `fat duck` → `/our-story`,
`gdpr` → `/privacy-policy`, `cancellation deposit` → `/terms-conditions`.

## ✅ Default branch switched (21 Aug 2026)

`cpanel-live-site` is now the repo's default branch — GitHub confirmed *"Default branch
changed to cpanel-live-site"*. Opening the repo now shows the real site: `images/`, the
three new pages, `search.js`, and no `netlify.toml`. `main` is retained as history.

## Later that day — barbecue image, search, and a caching trap

- **Barbecue card was showing a hog roast.** `hog-roast.jpg` (a whole hog on a spit) sat
  under copy reading "chicken piri piri… fired up over wood". Swapped to `bbq-chicken.jpg`.
  Found by opening the images, not reading filenames. `privateparty.jpg`'s alt was also
  wrong ("Hog Roast Private Parties" on a barbecue spread) — corrected. **A wider alt-text
  pass is still owed**; Dropbox has a 2024 note "Add missing ALT text to 29 site images".
- **Search appeared broken** — clicking the icon scrolled to the bottom of the page. Root
  cause was NOT the markup: `.htaccess` sets a 30-day cache on CSS, so the browser held a
  pre-search stylesheet and the overlay rendered as a static block at the end of the
  document. **Fixed by versioning asset URLs (`?v=20260821b`) — bump on every CSS/JS change
  from now on, or returning visitors won't see it for a month.**
- **Search icon was the `⌕` glyph** — renders poorly, read as decoration. Replaced with an
  inline SVG magnifier plus a visible "Search" label (icon-only under 700px).
