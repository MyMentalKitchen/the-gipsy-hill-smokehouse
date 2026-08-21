# GHS website deployment — record of the 21 Aug 2026 run

**Outcome: the SERP 404 problem is fixed.** Stages 1–6 and 8 of `DEPLOYMENT-CHECKLIST.md` are complete
and independently verified. Stage 9 (loose ends) outstanding.

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

### Stage 9 — loose ends
- **Custom 404 does not serve** — GoDaddy ignores `ErrorDocument` from `.htaccess` (proved with a
  literal test string). Try cPanel → Advanced → Error Pages, or GoDaddy support. See Stage 9.6.
- **Delete `backup-before-404-fix-2026-08-20.zip` from the server** — currently publicly downloadable
  at `thegipsyhillsmokehouse.co.uk/backup-before-404-fix-2026-08-20.zip`. Tim has a copy on his Desktop.
- **No privacy policy** — the forms collect names, emails and phone numbers. UK GDPR. `/privacy-policy`
  and `/terms-conditions` are the only old URLs still 404ing.
- **The two lost blog posts** — the apple-in-the-mouth post carried ~64% of all organic traffic; the
  pork-crackling post ranked for 131 keywords. Redirects preserve some equity; the content is gone.
  Highest-value rebuild available.
- **All 75 images still load from `static.wixstatic.com`** — if that account lapses every photo vanishes.
- **Gmail filter gap** — the "all enquiries" aggregate filter covers Feast It, Add to Event, Togather
  and 123FormBuilder but not Formspree, now the main web form.
- **Confirm a real Formspree submission lands** — the forms have never been tested end-to-end since
  going live.
- **GoDaddy injects `tccl.min.js`** into every page. Opt-out via their support if wanted.
