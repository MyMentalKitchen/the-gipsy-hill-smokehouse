# Sync from the live site, 15 Nov 2026

This branch (`cpanel-live-site`) had not been committed since 21 Aug 2026 and no longer matched the
live site. On 15 Nov 2026, at Tim's request, it was brought up to date from what
https://www.thegipsyhillsmokehouse.com/ actually serves.

## How

- Every file reachable from `sitemap.xml`, the pages, the stylesheets and the scripts was fetched raw
  (redirects not followed) on 15 Nov 2026 at about 18:41 UTC: 157 files, all 200.
- GoDaddy re-injects a tracking script after `</body>` on every upload. It was stripped from the HTML
  (21 pages), so the files here are what Tim uploads, as the upload packs have always done.
- `404.html` is served at `/404` (`/404.html` redirects there).
- 11 images in this repo are no longer linked from any page but are still on the server; each was
  checked byte for byte against the live copy and kept.

## Not synced

- **`.htaccess`** was downloaded by Tim from cPanel on 15 Nov 2026 and committed as is.
- The Markdown records (`README.md`, the deployment record and checklist, the build brief) are left as
  they were. Some of their statements are out of date (the README says the rebuild is on `.co.uk`;
  `.com` is the main address).

## From here

The live site is still published by uploading to cPanel; merging into this branch does not publish.
Changes made by the SEO agency arrive as a pull request against this branch, built on these files,
alongside an upload pack.
