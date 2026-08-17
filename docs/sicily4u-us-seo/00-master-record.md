# Sicily4u — US SEO Master Record

**Date:** August 2026
**Scope:** Google **US** organic search for sicily4u.com and sicily4u.co.uk
**Sources:** Semrush US database (organic positions, volumes, difficulty, backlinks), live US SERP checks, direct crawl of both sites
**Status:** Research complete. No changes made to either website.

> **Canonical copy lives in the Atlas.**
> `Atlas - Shared/02-Clients/OSINQ-LTD/Sicily4u/2026-08-17-sicily4u-us-seo-master-record.md`
> — content-screened as cloud-safe per the 2026-08-07 amendment to
> `01-Forever-Brain/decisions/2026-08-06-atlas-storage-classification.md`.
> Pull it down to the local `~/Desktop/MMK ATLAS FOLDER` so source and mirror agree.
>
> This repo copy exists because `claude/sicily4u-google-ranking-tllhr3` was the branch
> provisioned for the task. It is Sicily4u content in a GHS repo — treat the Atlas copy
> as authoritative and delete this one once the Atlas copy is confirmed local.

---

## Contents

1. [Corrections made during the work](#1-corrections-made-during-the-work)
2. [Where the two domains stand in the US](#2-where-the-two-domains-stand-in-the-us)
3. [Finding 1 — Backlinks (most serious)](#3-finding-1--backlinks-most-serious)
4. [Finding 2 — The wedding cluster (the opportunity)](#4-finding-2--the-wedding-cluster-the-opportunity)
5. [Finding 3 — Content audit](#5-finding-3--content-audit)
6. [Finding 4 — Blog opportunities](#6-finding-4--blog-opportunities)
7. [Two traps to avoid](#7-two-traps-to-avoid)
8. [Technical remediation](#8-technical-remediation)
9. [Consolidated work order](#9-consolidated-work-order)
10. [Open decisions](#10-open-decisions)
11. [Data health warning](#11-data-health-warning)
12. [Keyword data appendix](#12-keyword-data-appendix)

---

## 1. Corrections made during the work

Recorded deliberately — two early figures were wrong and the corrections changed the recommendation.

| Claim | Correction |
|---|---|
| Wedding cluster is ~440 searches/mo | **Wrong by ~7×.** Came from a 14-keyword spot check. Full phrase expansion returns ~70 commercial terms totalling **~3,000/mo** in each of the UK and US. The head term "sicily wedding venues" (390/mo) hadn't been tested. |
| "Taormina villa rentals" (110/mo, KD 3) is "the single most winnable commercial term found" | **Wrong.** The KD 3 is an artefact of low volume. The actual SERP is Marriott Homes & Villas, Posarelli, The Sicilian Villa Company, PlumGuide, Airbnb, CozyCozy, VRBO, CV Villas — ten established brands. Not winnable. |

**Method note:** keyword-difficulty scores are unreliable at low search volumes. Always pull the live SERP before recommending a target. Both errors above came from trusting KD without checking who actually ranks.

---

## 2. Where the two domains stand in the US

| Metric | sicily4u.com | sicily4u.co.uk |
|---|---|---|
| US organic keywords | 586 | 871 |
| US organic traffic (modelled) | ~435/mo | ~2,826/mo |
| UK organic keywords | 235 | 1,203 |
| UK organic traffic (modelled) | ~13/mo | ~3,091/mo |
| Authority Score | **10** | 28 |
| Referring domains | 118 | 385 |

### The key structural insight

**The .com is ~33× stronger in the US than in the UK** (435 vs 13 visits). Its travel guides
rank genuinely well in America — nine top-10 positions on Rabbit Beach, six on Godfather
filming locations, #5 for "sicilian culture".

**In the US, the .co.uk is not the blocker it is in the UK.** In Britain it owns almost every
commercial villa term (sicily villas #4, villas sicily #4, luxury villas in sicily #3, plus
every region). In America its top-10 rankings are overwhelmingly *informational* —
`/villas/info/sicilian-cities`, `/villas/info/history-of-sicily`, `/villas/info/aegadian-islands`,
`/villas/info/trapani-erice`, `/villas/info/ustica`. Its US commercial footprint is thin:

- sicily villas — #3 (480/mo)
- sicily villa — #5 (210/mo)
- sicily villa holidays — #2 (50/mo)
- sicily villas with pool — #5 (50/mo)
- holiday villa sicily — #4 (40/mo)
- villas syracuse sicily — #3 (40/mo) · syracuse villas — #3 (40/mo)
- villa cefalu sicily — #2 (30/mo) · villas near palermo sicily — #4 (30/mo)

**Implication:** a US-first strategy largely dissolves the "don't cannibalise the sister site"
constraint. The real US competition is Airbnb, VRBO, Marriott Homes & Villas, HomeToGo and
Casamundo — not the .co.uk.

**Unresolved:** the .com still has a `/sicily-villas` page aimed directly at the .co.uk's
strongest keyword, and the .co.uk sends 65 sitewide "continue reading" links to the .com.
Neither is helping.

---

## 3. Finding 1 — Backlinks (most serious)

Nothing else matters as much. This sets the ceiling on everything.

### Authority comparison

| Domain | Authority Score | Referring domains | Note |
|---|---|---|---|
| **sicily4u.com** | **10** | 118 | Only **11 are American** |
| sicily4u.co.uk | 28 | 385 | Our own sister site, ~3× stronger |
| wedinspire.com | 33 | 2,224 | Ranks in the US wedding SERP |
| lalista.com | 34 | 1,236 | Ranks #1 for "sicily wedding venues" |

Raw profile: 306 total backlinks, 118 referring domains, 248 follow / 58 nofollow.

### The profile is contaminated

**Anchor text found pointing at sicily4u.com** (4 referring domains, 7 links):

> "high quality dofollow backlinks da 50 pa 40 premium pbn network service sicily4u.com
> rank first page google fast seo link building buy backlinks online cheap"

That is a link vendor's own sales copy. Either links were purchased, or the site is being
spammed by a third party. Both need the same clean-up; only the disclosure to Google differs.

**Network footprint — 12 referring domains sharing one IP (`195.20.19.178`), all Authority Score 5–6:**

```
backlinks-checker.com   blogsphere.top      creativeposts.top   dailymusings.top
quero.party             anchorurl.cloud     atomizelink.icu     buzzshrink.website
metamagic.top           optimizeflow.top    shortenurls.eu      urls-shortener.eu
```

Alongside: `rankvanceseo.info`, `all-aged-domains.com`, `seol.store`, `jobsapp.info`,
`netzoll.com`, `sergechel.info`, and an anchor reading *"best pinterest tool sitetosocial.com
to grow your website traffic fully automated"*.

### Referring domains by country

| Country | Domains | Backlinks |
|---|---|---|
| **Singapore** | **63** | **120** |
| Ireland | 1 | 65 |
| **United States** | **11** | 25 |
| Moldova | 12 | 16 |
| France | 6 | 6 |
| Türkiye / Switzerland / Colombia | 1 each | 2 each |

Two things need investigating rather than assuming:

- **Singapore is over half the entire profile** — 63 domains from a market with no obvious
  relationship to a Sicilian villa business. Too many to disavow blind; some may be
  legitimate aggregators.
- **54% of all backlinks use the bare anchor "sicily4u.com"** (95 domains, 165 links).
  Natural profiles carry varied descriptive anchors. This concentration is itself an
  automation footprint.

The Ireland entry (65 links, one domain) is sicily4u.co.uk — all on the anchor
"continue reading", i.e. a sitewide template link worth very little.

### Genuine links worth keeping

`yumpu.com` (AS 70), `grokipedia.com` (AS 69, 17 links), `mumsdotravel.com` (AS 14 — a real
travel blog). Note `yahoo.com`, `bing.com`, `bingapis.com` and `windowssearch-exp.com` are
search-engine artefacts, not editorial links.

### Remediation — in this order

1. **Export the real profile from Google Search Console**, not Semrush — work from Google's own view.
2. **Establish origin.** Ask whoever managed SEO previously whether links were purchased. This determines the response.
3. **Manually review the 63 Singapore domains.** Do not disavow blind.
4. **Disavow the confirmed network** — the `195.20.19.178` cluster and PBN-anchor domains. These are unambiguous.
5. **Replace the .co.uk sitewide link** with a few contextual, descriptive links from relevant pages.
6. **Then build American links.** Nothing else moves the number.

### Where US links realistically come from

Three assets, each with a mechanism:

- **The wedding costs page** — nobody ranking in the US SERP publishes real Sicilian wedding prices, because directories and photographers don't have them. We do.
- **A Sicilian wedding traditions guide** — Italian-American community sites and wedding blogs link to heritage content readily.
- **A Sicily wedding supplier directory** — US searches for Sicily wedding planners and photographers total ~480/mo (double the UK). Listed suppliers have a reason to link back.

This is a slow, legitimate route. There is no fast one that doesn't recreate the problem above.

---

## 4. Finding 2 — The wedding cluster (the opportunity)

**~3,000 US searches/mo of commercial intent, difficulty 0–17, and neither sicily4u domain
ranks for a single wedding keyword in either market.**

### The US SERP for "sicily wedding venues" (390/mo, KD 8)

| # | Domain | What it is |
|---|---|---|
| 1 | lalista.com | Venue directory |
| 2 | **reddit.com** | **r/BigBudgetBrides — "Anyone get married in Sicily?"** |
| 3 | wezoree.com | Vendor directory |
| 4 | martinamicko.com | Photographer's blog |
| 5 | **weddingwire.com** | **11 vendors listed for all of Sicily** |
| 6 | thelane.com | Editorial listicle |
| 7 | yazminemay.com | Photographer's blog |
| 8 | dazzled.it | Venue listings |
| 9 | **facebook.com** | **Destination-wedding group post** |
| 10 | wedinspire.com | Single venue page |

A forum thread at #2 and a Facebook post at #9 mean Google cannot find an authoritative
commercial answer. WeddingWire — one of the largest wedding marketplaces in America — lists
**eleven venues for the entire island**. That is an unserved market, not a competitive one.

**No villa rental operator ranks anywhere in it.**

### US is easier than UK on the same cluster

| Keyword | US vol | US KD | UK KD |
|---|---|---|---|
| sicily wedding venues | 390 | **8** | 10 |
| sicily wedding | 320 | 10 | 16 |
| weddings in sicily italy | 140 | **0** | 10 |
| wedding venues in sicily italy | 140 | **6** | 9 |
| sicily wedding packages | 50 | **2** | 0 |

### The asset we already have

Villa Hera hosts ceremonies for **up to 60 guests** (sleeping capacity 20), with Villa
Giardini, Villa Tauro, Villa Nemo and Villa La Boheme available to house the party. This is
currently stated halfway down a blog post at `/the-perfect-wedding-villa-in-taormina/`.

**Constraint:** that page says Villa Hera is *"currently our only villa that accommodates
weddings on-site"*. A venue collection backed by one venue is thin and Google will read it
that way. See open decisions.

### The American difference: heritage

A sub-cluster with **no UK equivalent** — Italian-American search behaviour:

| Keyword | US vol | KD |
|---|---|---|
| sicilian wedding traditions | 110 | 9 |
| sicilian wedding customs | 70 | 10 |
| traditional sicilian wedding | 30 | 0 |
| traditional sicilian wedding dress / food / favors / music | ~80 | 0 |
| sicilian wedding cart / dances / blessing / toast | ~80 | 0 |

Wider context: **"sicilian surnames" alone draws 1,300 US searches/mo.** This explains why
`/sicilian-culture/` is the .com's strongest American page.

Treat as **top of funnel and link bait, not a commercial target.** Someone researching their
grandmother's wedding traditions isn't booking today — but they're the demographic that plans
a Sicilian destination wedding two years later.

### Proposed architecture

```
/sicily-wedding-venues/                          ← hub · ~2,250/mo
├─ /sicily-wedding-venues/packages-and-costs/    ← ~290/mo · KD 0–6 · BUILD FIRST
├─ /sicily-wedding-venues/taormina/              ← ~140/mo · KD 17
├─ /sicily-wedding-venues/destination-weddings/  ← ~120/mo · US framing
├─ /sicily-wedding-venues/beach-and-seaside/     ← ~50/mo
├─ /sicily-wedding-venues/small-weddings/        ← ~50/mo
├─ /sicily-wedding-venues/castles-and-estates/   ← ~40/mo · conditional on Villa Feudale
└─ /sicily-wedding-venues/palermo/               ← ~50/mo · later

/sicilian-wedding-traditions/                    ← ~350/mo · link asset
/planning-a-wedding-in-sicily/                   ← 40/mo · US legal + logistics
/sicily-wedding-suppliers/                       ← link-building play

301 → /the-perfect-wedding-villa-in-taormina/ redirects to the Taormina spoke
```

### Build order (tail-first, because of the authority constraint)

| Phase | What | Why then |
|---|---|---|
| 1 (wk 1–3) | Packages & costs page | Only part winnable at AS 10 today (KD 0–6). Also the best link asset. |
| 2 (wk 3–5) | The hub | ~2,250/mo, three-quarters of the cluster. Launches with an internal link from a page already earning. |
| 3 (wk 4–7, parallel) | Traditions guide + supplier directory | Both exist to earn the American links everything else needs. |
| 4 (wk 6–9) | Taormina + destination-weddings spokes | Taormina content already exists. US KD 17 — don't expect it early. |
| 5 (wk 10–14) | Beach, small weddings, castles, Palermo, planning guide | Topical depth more than traffic. |

### Page brief — `/sicily-wedding-venues/packages-and-costs/` (Phase 1)

- **Primary:** `sicily weddings packages` 70 (KD 4) · `sicily wedding packages` 50 (KD 2)
- **Secondary:** `sicily wedding cost` 40 (KD 0) · `affordable wedding venues in sicily` 40 (KD 6) · `sicily wedding package prices` 30 (KD 0) · `weddings in sicily prices` 30 (KD 0) · `affordable wedding venues sicily` 30 (KD 0)
- **Title:** What a Sicily Wedding Costs in 2027 — Real Prices | Sicily4u
- **Must contain:** worked budgets at 20/40/60 guests **in USD with EUR alongside** (venue, villas, catering, flowers, photography, planner, legal); an explicit villa-hire figure; seasonal variation; honest comparison against a US wedding at the same guest count; visible last-updated date
- **Schema:** FAQPage

### Page brief — `/sicily-wedding-venues/` (Phase 2)

- **Primary:** `sicily wedding venues` 390 (KD 8)
- **Secondary:** `sicily wedding` 320 (KD 10) · `sicily wedding locations` 170 (KD 11) · `wedding venues in sicily italy` 140 (KD 6) · `wedding venues sicily italy` 140 (KD 6) · `weddings in sicily italy` 140 (KD 0) · `sicilian wedding` 110 (KD 8) · `wedding in sicily` 90 (KD 9) · `wedding venues sicily` 70 (KD 6) · `sicily wedding villas` 40 (KD 13)
- **Title:** Sicily Wedding Venues — Private Villas & Estates | Sicily4u
- **Format:** filterable venue **collection**, not a blog post. Cards showing seated capacity, sleeps, region, ceremony-on-site (yes/no), price from. Filters by guest count, region, ceremony-on-site. Capacity comparison table. Wedding enquiry form with date / guest count / ceremony-required / US phone-timezone field. FAQ block.
- **Schema:** ItemList + FAQPage + EventVenue with `maximumAttendeeCapacity` on genuine venues
- **Not this:** no author byline, no comments, no blog template

### Forecast

KD 0–6 tail: US top 10 within ~2–3 months. Hub at KD 8: budget ~6 months, dependent on the
link workstream. At positions 5–10 across the cluster, expect **250–450 US visits/mo** —
judge on enquiries, not sessions.

---

## 5. Finding 3 — Content audit

### The sharpest finding: Rabbit Beach sends readers to the wrong islands

`/rabbit-beach-sicily-guide-2026-spiaggia-dei-conigli-paradise/` is the .com's strongest
genuine US asset — **nine top-10 US positions** across a ~1,200/mo cluster (#4 "spiaggia dei
conigli rabbit beach", #6 "rabbit beach sicily" 260/mo, #6 "rabbit beach lampedusa italy"
210/mo, #8 "lampedusa rabbit beach").

**What it gets right:** it has a commercial section ("Why book your holiday with Sicily4u?"),
features two named villas with galleries, and closes with a "Book your villa" link.

**What breaks it:**

- **Both villas are on the wrong islands.** Rabbit Beach is on **Lampedusa** (Pelagie Islands). The page offers Villa Suite Aegusana on **Favignana** (Egadi Islands, off Trapani) and Villa Tenuta Dammusi Almofeem on **Pantelleria** — separate islands, separate flights, hundreds of kilometres apart. They're grouped as "Sicily's minor islands", a CMS category that means nothing to a traveller.
- The page **concedes the gap itself** — it explains readers need a flight or a nine-hour ferry from Porto Empedocle, then recommends villas on neither route.
- The commercial block sits at the bottom of what its own metadata calls a **21-minute read**.
- No enquiry form, no pricing, no dates. Single CTA links to `/sicily-villas/`.
- Blog furniture: author byline, reading time, "Love this article (0)", open comment form.

**Fix:** show the Agrigento, Menfi, Ribera and Punta Secca collections — properties in the
right half of the island. **This pattern is systemic**: villa modules across the site are
populated by CMS category, not by where the reader is going.

### Page-by-page (US positions)

| Page | US strength | Cluster | Action | Pri |
|---|---|---|---|---|
| `/rabbit-beach-.../` | 9 × top-10, best #4 | ~1,200 | Swap villas to Agrigento/Menfi/Ribera/Punta Secca. Move commercial block to ⅓ depth. Add enquiry form. Target `sicily beach vacation` (50, KD 5). | P1 |
| `/godfather-sicily-filming-locations.../` | 6 × top-10, best #5 | ~1,800 | Largest US cluster on the site. #32 for `godfather filming locations tour` (40, KD 17) — a brokerable product. Pair with Taormina, Savoca, Forza d'Agrò inventory; offers none. | P1 |
| `/sicilian-culture/` | #5, 110 keywords | ~1,400 | Already links to 7 villa categories and 4 named villas — structurally the best-converted page. Add enquiry CTA. Verify traffic figure first. | P1 |
| `/discover-the-best-white-lotus-season-2.../` | 8 × positions 14–18 | ~700 | Whole cluster one push from page one — `where is white lotus season 2 filmed` 390/mo at #18. Highest-leverage on-page work available. | P1 |
| `/is-sicily-safe-*` (two pages) | #13 and #14, same term | ~500 | Merge, 301 the loser. `is sicily safe` 480/mo US, KD 25. Early-planning intent — CTA is a trip conversation. | P1 |
| `/how-to-get-to-sicily/` | #12 US | ~1,300 | Near-miss on an easy term — `how to get to sicily` 480/mo at **KD 9**. Add `how to get to sicily from rome` (390, KD 14), `how far is sicily from rome` (390, KD 12). Americans pair Rome with Sicily. | P1 |
| `/sicilian-food/` | 15 keywords, weak US | ~300 | `sicily food tour` (90, KD 4), `cooking classes sicily` (50, KD 4). A `chef-service` facility tag already exists in the CMS — surface it. | P2 |
| `/things-to-do-in-catania-sicily/` | #51 US | ~900 | `what to do in catania sicily` 390/mo US, KD 25. Consolidate with `/locations/catania-area/`. | P2 |
| `/sicily-with-kids-*` and `/family-holiday-*` | #24 and #79, same term | ~200 | Merge. US multigenerational trip planning starts here. | P2 |
| `/the-two-most-exclusive-villas-in-sicily-italy/` | #14 rocca tre contrade | ~80 | Named-property intent, high value, already close. On-page work. | P2 |
| `/accommodation-category/.../messina-area/` | **#10 US** | 40 | The only *commercial* page in the US top 10. Proof the category template can rank — study what's different. | P2 |

---

## 6. Finding 4 — Blog opportunities

Ordered by how close the intent sits to a booking.

| Target | US vol | KD | Why |
|---|---|---|---|
| `where to stay in sicily` / `where to stay in sicily italy` | 1,000 / 480 | 30 / 30 | **Best blog target on the list.** 1,480/mo combined, direct accommodation intent, and a villa company is the natural author. Region-by-region with real inventory against each. |
| `how to get to sicily` / `...from rome` / `how far is sicily from rome` | 480 / 390 / 390 | 9 / 14 / 12 | Low difficulty and already #12 on the head term. The Rome pairing is distinctly American. |
| `what to do in sicily` / `...italy` / `what to see in sicily` | 1,300 / 880 / 720 | 39 / 31 / 34 | High volume, higher difficulty. A genuine hub — but not until authority improves. Phase 3. |
| `sicily food tour` / `cooking classes sicily` | 90 / 50 | 4 / 4 | Very soft, on-brand, brokerable as an add-on product. |
| `sicilian wedding traditions` / `...customs` | 110 / 70 | 9 / 10 | Heritage angle with no UK equivalent. Doubles as the wedding cluster's main link asset. |
| `is sicily part of italy` | 6,600 | 39 | Enormous volume, already #33. Pure curiosity intent, almost no booking value — optimise the existing page, don't run a campaign. |

---

## 7. Two traps to avoid

### Trap 1 — Sicilian pizza (~9,400/mo US)

| Keyword | US vol | KD |
|---|---|---|
| what is sicilian pizza | 3,600 | 21 |
| what is a sicilian pie | 1,600 | 36 |
| what is sicilian style pizza | 1,600 | 32 |
| what is a sicilian pizza | 1,300 | 16 |
| what's a sicilian style pizza | 1,300 | 23 |

The biggest Sicily-related content opportunity in America by volume, and **worthless** — these
are people in American kitchens, not travellers. Someone will find this cluster and get
excited. Don't.

### Trap 2 — hotels named "Villa" (~3,000/mo US)

Searches that look like villa demand but are hotel brand searches: Belmond Villa Sant'Andrea
(720/mo), Hotel Villa Schuler (390), Hotel Villa Taormina (320 + 320), Villa Politi (210 + 170
+ 140), Villa Athena (210 + 170), Villa Igiea (140 + 110 + 110), Villa Carlotta, Villa
Fiorita, Villa Angela, Villa Romana, Villa Belvedere.

**Any US market sizing that doesn't strip these out will be badly inflated.**

### Also excluded

- **Vacation packages** (~3,000/mo US) — "sicily italy vacation packages" 720, "sicily vacation packages" 480, "sicily vacations" 480. SERP is Expedia, Travelocity, Delta Vacations, Rick Steves, TripMasters, JayWay. Flight-inclusive tour product; not ours.
- **Vacation rentals** (~1,100/mo US) — SERP is VRBO, Marriott Homes & Villas, HomeToGo, Casamundo, OwnerDirect, EasyReserve, Idealista. Unwinnable at AS 10.
- **Wedding planners / photographers** (~480/mo US) — supplier intent, not our service. Only worth a curated directory as a link play.
- **Celebrity wedding noise** — "princess eugenie... sicilian wedding" 480/mo, Charli XCX cluster ~100/mo. Volume without value, and it would dilute a commercial hub.
- **Villas for sale / buy villa in sicily** (170 / 110) — property sales intent, wrong business.

---

## 8. Technical remediation

### The .com is cannibalising itself

| Term | US vol | Competing URLs |
|---|---|---|
| is sicily dangerous | 110 | `/is-sicily-safe-a-comprehensive-guide-for-tourists/` **#13** · `/is-sicily-safe-a-practical-guide/` **#14** |
| family trip to sicily | 40 | `/sicily-with-kids-...-2026/` **#24** · `/family-holiday-to-sicily-with-kids.../` **#79** |
| is it safe to travel in sicily | 40 | `/is-sicily-safe-a-practical-guide/` **#83** · `/sicily-travel-tips/` **#94** |
| villas near catania sicily | 140 | `/accommodation-category/.../luxury-villas-catania/` · `/locations/catania-area/` |
| luxury villa taormina | 90 | Three URLs splitting one term |

Two pages at #13 and #14 would very likely be one page in the top 8. Pick a winner, move the
unique content, 301 the rest. No new content required.

### Template

Every ranking guide sits on the blog template — author bylines, reading-time badges,
"Enjoyed this story?" widgets, open comment forms. **There is no slot for an enquiry form, a
price, or a date.** One template change unlocks conversion across ~25 pages, and the wedding
pages need the same slots.

### Also

- Decide what happens to the legacy `reviews.sicily4u.com` subdomain, which still carries an old blog (`/ilodgeblog/`).
- Price in **USD alongside EUR**; add a US phone/timezone field to enquiry forms.
- The site is `en-US` but much of the copy is British English. For a US strategy, standardise on American spellings.

---

## 9. Consolidated work order

| # | Phase | When | Detail |
|---|---|---|---|
| 1 | Verify + start backlink clean-up | Wk 1–2 | Pull GSC/GA4. Export real backlink profile. Establish whether links were bought. Review Singapore block. Disavow the `195.20.19.178` network. **Starts first — disavowals take months to register.** |
| 2 | Fix the template | Wk 2–3 | Guide template with no blog furniture and three slots: contextual villa module at ⅓ depth, enquiry form, related-guides block. Fixes ~25 pages; prerequisite for everything else. |
| 3 | Re-map villa modules to geography | Wk 3–4 | Replace CMS-category villa picks with properties a reader of *that* guide could stay in. No new content. Most likely single change to produce an enquiry. |
| 4 | Consolidate duplicates | Wk 4–5 | Merge the safety pair, family pair, Catania pair, three Taormina URLs. Settle the `reviews.` subdomain. |
| 5 | Wedding cluster phases 1–2 | Wk 5–10 | Costs page first (KD 0–6, winnable now, best link asset), then the hub. Runs on the template from step 2. |
| 6 | Near-misses + blog | Wk 8–16 | Push White Lotus (positions 14–18) and `/how-to-get-to-sicily/` (#12 on a KD 9 term). Then "where to stay in Sicily" and the food/experience layer. |

**Honest framing:** steps 2–4 are mechanical and predictable — about four weeks against traffic
that already exists. The backlink work is slow and determines the ceiling. **At Authority
Score 10 with a contaminated profile, no amount of content will rank for competitive US
terms.** This is a foundation-building year, not a step change.

---

## 10. Open decisions

| # | Decision | Why it blocks |
|---|---|---|
| 1 | **Has anyone ever bought backlinks for sicily4u.com?** | No blame attached — determines whether we're undoing a past decision or defending against a third party. The response differs. If an agency or contractor handled SEO previously, ask them. |
| 2 | **How many villas can host a ceremony on site?** | Currently only Villa Hera. Three or more → build a true venue collection. Otherwise position as "wedding villas": one ceremony venue plus accommodation for the party. Both rank; they need different copy. |
| 3 | **Can we get Google Search Console + GA4 access?** | Needed twice over — the traffic estimates don't reconcile, and GSC is where the real backlink list and disavow file live. |
| 4 | **Do we sell an inclusive wedding package?** | US demand exists (`sicily wedding packages` KD 2). If we don't offer one, skip that page rather than rank for a promise we can't keep. |
| 5 | **Are we set up to convert American enquiries?** | US couples plan destination weddings 12–18 months ahead across a 6–9 hour time difference. Rankings won't convert if the enquiry process can't hold that conversation. |
| 6 | **What is each domain for, long term?** | Less acute in a US frame, but the .com still points `/sicily-villas` at the .co.uk's best keyword. Worth settling deliberately. |

---

## 11. Data health warning

Semrush attributes **411 of the .com's 435 US visits (94.5%) to `/sicilian-culture/`**. But its
own keyword data for that page shows a best position of #5 for "sicilian culture" (320/mo) and
#39 for "sicily people" (880/mo). Those rankings cannot produce 411 visits.

Semrush traffic is modelled, not measured. **Pull 12 months of GSC and GA4 filtered to US
before spending anything.** Everything in this document is prioritised on rankings, backlinks
and search volumes — all directly observable — rather than the traffic estimate. But the order
could shift once real data is available.

---

## 12. Keyword data appendix

### US wedding cluster — commercial (~3,000/mo)

| Keyword | Vol | KD |
|---|---|---|
| sicily wedding venues | 390 | 8 |
| sicily wedding | 320 | 10 |
| sicily wedding locations | 170 | 11 |
| wedding venues in sicily italy | 140 | 6 |
| wedding venues sicily italy | 140 | 6 |
| weddings in sicily italy | 140 | 0 |
| sicilian wedding | 110 | 8 |
| wedding in sicily | 90 | 9 |
| sicily weddings packages | 70 | 4 |
| wedding in sicily italy | 70 | 4 |
| wedding venues in taormina sicily | 70 | 17 |
| wedding venues sicily | 70 | 6 |
| destination wedding in sicily | 50 | 14 |
| sicily wedding packages | 50 | 2 |
| sicily wedding venue | 50 | 5 |
| wedding venues in palermo sicily | 50 | 17 |
| wedding venues in sicily | 50 | 5 |
| wedding sicily | 50 | 7 |
| wedding sicily italy | 50 | 6 |
| affordable wedding venues in sicily | 40 | 6 |
| best wedding venues in sicily | 40 | 9 |
| destination wedding sicily | 40 | 7 |
| planning a wedding in sicily | 40 | 5 |
| sicilian wedding venues | 40 | 7 |
| sicily italy wedding | 40 | 5 |
| sicily wedding cost | 40 | 0 |
| sicily wedding villas | 40 | 13 |
| sicily weddings | 40 | 8 |
| wedding venue in sicily | 40 | 5 |
| wedding venue sicily | 40 | 10 |
| weddings in sicily | 40 | 5 |
| affordable wedding venues sicily | 30 | 0 |
| beach wedding sicily | 30 | 0 |
| luxury wedding venue sicily | 30 | 0 |
| sicily destination wedding | 30 | 2 |
| sicily wedding package prices | 30 | 0 |
| small wedding sicily | 30 | 0 |
| taormina sicily wedding | 30 | 10 |
| wedding villas in sicily | 30 | 0 |
| weddings in sicily prices | 30 | 0 |
| weddings sicily | 30 | 8 |
| weddings sicily italy | 30 | 7 |
| castles in sicily for weddings | 20 | 0 |
| sicily castle wedding | 20 | 0 |
| noto sicily wedding / venues | 20 + 20 | 0 |
| scopello sicily wedding / venue | 20 + 20 | 0 |
| sicily beach wedding | 20 | 0 |
| sicily italy wedding venues | 20 | 0 |
| luxury wedding venues sicily / in sicily / weddings sicily | 20 each | 0 |
| best sicily wedding venues / best wedding venues sicily / best wedding locations sicily | 20 each | 0 |

### US genuine villa rental terms (for reference — mostly unwinnable at current authority)

| Keyword | Vol | KD |
|---|---|---|
| villas in sicily | 590 | 28 |
| sicily villas | 480 | 25 |
| sicily luxury villas | 390 | 24 |
| luxury villas sicily | 320 | 24 |
| sicily villa rentals | 320 | 24 |
| sicily villa rentals italy | 320 | 28 |
| sicily villas for rent | 320 | 31 |
| villas in sicily for rent | 320 | 36 |
| luxury villa sicily | 260 | 26 |
| villas for rent in sicily | 260 | 18 |
| luxury villas in sicily | 210 | 28 |
| sicily villa | 210 | 33 |
| villas in sicily with private pool | 210 | 25 |
| luxury villa rental sicily | 170 | 18 |
| sicilian villas | 170 | 25 |
| villa in sicily | 170 | 24 |
| exclusive villas in sicily | 140 | 21 |
| villas for rent in taormina sicily | 140 | 2 ⚠️ |
| villas in sicily with pool | 140 | 18 |
| luxury villas in taormina sicily | 90 | 0 ⚠️ |
| villas in sicily by the sea | 90 | 11 |

⚠️ **Caution on the Taormina KD 0–2 scores.** The verified SERP for "taormina villa rentals"
(110/mo, KD 3) is Marriott Homes & Villas, Posarelli, The Sicilian Villa Company, PlumGuide,
Airbnb, CozyCozy, Sicily Luxury Villas, VRBO, Scent of Sicily and CV Villas. Treat low KD on
Taormina terms as unreliable and check the SERP before targeting.

### US "vacation rental" phrasing (~1,100/mo — OTA-dominated)

| Keyword | Vol | KD |
|---|---|---|
| sicily vacation rentals | 260 | 16 |
| vacation rentals sicily | 140 | 16 |
| vacation rentals in sicily | 90 | 16 |
| vacation rental sicily | 70 | 17 |
| vacation rentals in sicily italy | 70 | 14 |
| vacation rentals taormina sicily | 70 | 5 |
| sicilian vacation rentals | 50 | 18 |
| vacation rental in sicily | 50 | 19 |
| palermo sicily vacation rentals | 30 | 9 |

.co.uk US positions on these: #11, #11, #22, #22, #48, #54, #54 — present but weak. For most
of this cluster, pushing the .co.uk from #11 to top 10 is cheaper than building the .com from
nothing.

### Sicily4u.com villa inventory (named-property intent, all KD 0)

Pillirina, Calipso, Feudale (13th-c estate — the castle candidate), Marchese, Vistamare, Kira,
Mercurio, Hera (**60-guest ceremony venue**), Luna di Mare, Sea Breeze, Acquamarina, Aronica,
Angelina, Torre Canalotto, Pieds Dans L'Eau, Baya Blu, Lumia, Marisol, Lilly, Vittoria,
Vivaio, Elaia, Provenza, Palmeto, Nemo, La Boheme, Mandralisca, Tauro, Le Vigne, Mare Azzurro,
Giardini, Suite Aegusana (Favignana), Tenuta Dammusi Almofeem (Pantelleria), Manna, Del Faro.

UK volumes where measurable: villa angelina 50, villa marchese 110 (site at #17), villa le
vigne 30, villa elaia 20, villa acquamarina 20, villa aronica 20, villa hera 10, villa la
boheme 10, villa sea breeze 10, villa tauro 10. US: rocca delle tre contrade 50 (site at #17),
villa baya 40 (#17).

---

*Compiled from a Claude Code research session, August 2026. All figures are Semrush estimates
except live SERP checks, which were pulled directly. No changes were made to either website.*
