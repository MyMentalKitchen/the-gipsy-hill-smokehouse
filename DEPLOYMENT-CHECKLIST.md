# GHS Website — Fixing the 404s: Step-by-Step

**Version 2 — built on `.com` as the home domain**
**Created:** 5 August 2026
**Time needed:** about 2 hours of work, spread over two sittings (there's a waiting period in the middle)
**Difficulty:** No coding. You'll be uploading files and filling in forms.

---

> ## ⚠️ CORRECTION — 21 August 2026, applied during the live run
>
> **This document says "upload to `public_html`". That is WRONG for this hosting account.**
>
> This is the **timclements.com** hosting account with 9 domains on it. `public_html` is
> **timclements.com's** document root, and the other sites are subfolders inside it — so an
> `.htaccess` placed there cascades into all of them.
>
> **The GHS folder is `/public_html/thegipsyhillsmokehouse.co.uk`.**
> Substitute that everywhere this document says `public_html`.
>
> **Status: Stages 1–6 COMPLETE and verified 21 Aug 2026.** `.com` added to cPanel sharing the
> GHS folder; DNS already pointed at the hosting; SSL valid; `.htaccess` + 13 files uploaded and
> verified byte-identical; 46/46 legacy URLs resolve; canonical funnel working.
> **Outstanding: Stage 8 (Search Console), Stage 9 (loose ends), and the custom 404 page
> (GoDaddy's server ignores `ErrorDocument` from `.htaccess` — see Stage 9.6).**

---

## What's wrong, in plain English

When you moved off Wix, the web addresses changed shape.

Wix used addresses like `thegipsyhillsmokehouse.com/event-catering`. The new site is built from files called things like `event-catering.html`. To a web server those are two completely different addresses — so when Google sends someone to the old one, the server shrugs and says "never heard of it." That's the 404.

On top of that, the `.com` domain isn't connected to your hosting at all. It's sitting on a GoDaddy "forwarding" service that only knows how to bounce people from the front door to the `.co.uk` front door. Anyone arriving at a deeper page — which is every link in that Google result — hits a dead end.

**Two jobs, then:** connect the `.com` to your hosting properly, and teach the site to understand the old Wix addresses.

---

## The decision you've made, and why it's the right one

You've chosen to build on **`.com`** and send `.co.uk` to it. That's the better call, and it makes this whole job easier.

`thegipsyhillsmokehouse.com` is the domain that carries everything you've built up over the years — your Google rankings, the links other websites have made to you, your search history. `.co.uk` is a newer domain starting from a much lower base.

Building on `.com` means **none of that has to move.** You're not asking Google to transfer your reputation to a new address; you're just repairing the address it already knows. It's the difference between fixing your front door and telling everyone you've moved house.

**The exact home address will be:** `https://www.thegipsyhillsmokehouse.com`

With the **www**, because that's the version Google has indexed and the version other websites link to. Everything else — the `.co.uk`, the non-www `.com`, anything starting `http://` — gets sent there automatically, keeping whatever page the person was after.

---

## Two things about your plan I need to adjust slightly

You said you'd *"upload the html files to the cPanel for the .com and forward .co.uk to the .com."* Right instinct, two practical corrections:

**1. There's only one cPanel, and one set of files.**

You have a single hosting account. It has one folder — `public_html` — and that folder is the website. You don't need a second hosting account for the `.com`, and you don't upload the files twice.

What you do instead is tell that hosting account "you also answer to `thegipsyhillsmokehouse.com`". Then both domains serve the same folder, and the instruction file sends everyone to the `.com` version. One set of files, one place to update.

**2. Don't use GoDaddy "Forwarding" for the `.co.uk`.**

This matters. GoDaddy's forwarding is exactly what's broken on your `.com` right now — it's the reason those Google links are dead. It only forwards the front door. Someone arriving at `.co.uk/wedding-catering` would get dumped on the `.com` homepage, or a 404, and lose the page they wanted.

Instead, `.co.uk` stays pointed at your hosting (it already is — **no DNS change needed on the `.co.uk` at all**) and the instruction file does the redirecting properly, keeping the page. `.co.uk/wedding-catering` lands on `.com/wedding-catering`. Every time.

---

## ⚠️ Read this before you touch anything

**Your GHS email lives on the `.com` domain.**

`timclements@thegipsyhillsmokehouse.com` runs on Google Workspace, controlled by DNS settings on `thegipsyhillsmokehouse.com`. In Stage 2 you'll be editing those settings.

You will be changing records of type **A** and **CNAME** only.

You must **NOT** touch, edit or delete records of type **MX** or **TXT**.

If the MX records go, every email to that address stops arriving — silently. No bounce, no warning. Enquiries just vanish. Take a screenshot of the DNS page before you change anything.

---

## What you'll need to hand

- [ ] Your GoDaddy login (the one that owns both domains and the hosting)
- [ ] The website files on your Mac:
      `Documents / CLAUDE COWORK / PROJECTS / THE GIPSY HILL SMOKEHOUSE`
- [ ] A Google account for Search Console — use `timclements@thegipsyhillsmokehouse.com`
- [ ] Two sittings: about 40 minutes, then an hour's wait, then about 40 minutes

---

## The order, and why it changed

```
Stage 1  Back up what's live now              ← safety net, do not skip
Stage 2  Connect the .com to your hosting
Stage 3  Wait for it to take effect, get the padlock
──────  the .com is now a real, working website  ──────
Stage 4  Upload .htaccess — this is the switch
Stage 5  Upload the remaining 13 files
Stage 6  Test everything
Stage 7  (Only if it broke) Undo
Stage 8  Tell Google
Stage 9  Loose ends
```

**Why the domain work comes first this time.** The instruction file (`.htaccess`) redirects *everything* to `www.thegipsyhillsmokehouse.com`. If you upload it before the `.com` is actually working, it would redirect your live `.co.uk` site to a domain that still doesn't work — and take the whole website down.

So: make the `.com` real first. Then flip the switch.

---

# STAGE 1 — Back up the live site

**Why:** You're about to add a file that controls how the whole server behaves. If it goes wrong the site can go down completely. This backup gets it back in two minutes. Five minutes now.

### 1.1 Get into cPanel

1. Go to **godaddy.com** and sign in.
2. Click your name (top right) → **My Products**.
3. Scroll to **Web Hosting**. Find the Gipsy Hill Smokehouse entry.
4. Click **Manage**.
5. On the next page, click **cPanel Admin**.

You should now be looking at cPanel — a page full of small icons in grouped rows.

### 1.2 Open the file area

1. Find the **Files** group and click **File Manager**.
2. In the left-hand column, click the folder called **public_html**.

`public_html` is the live website. Whatever is in here is what the world sees. You should recognise `index.html`, `contact.html`, `styles.css`.

### 1.3 Turn on hidden files

One file you'll upload starts with a dot (`.htaccess`). cPanel hides those by default — meaning you could upload it and not be able to tell whether it arrived.

1. Click **Settings** (top right of File Manager).
2. Tick **Show Hidden Files (dotfiles)**.
3. Click **Save**.

### 1.4 Make the backup

1. Still inside `public_html`, click **Select All**.
2. Click **Compress** → **Zip Archive**.
3. Name it: `backup-before-404-fix-2026-08-05.zip`
4. Click **Compress File(s)**.
5. Find the zip in the list, click it once, click **Download**.
6. Save it to your Desktop.

- [ ] **Checkpoint:** the zip is on your Mac.

Don't continue until that's true.

---

# STAGE 2 — Connect the .com to your hosting

Two parts: tell the hosting to accept the `.com`, then tell the domain where to go.

---

### PART A — Add the .com to the hosting account

1. In **cPanel**, find the **Domains** group and click **Domains**.
   *(On some versions this is called **Aliases** — either is fine.)*
2. Click **Create A New Domain**.
3. In the domain box type exactly: `thegipsyhillsmokehouse.com`
4. Look for a tickbox saying something like **"Share document root with thegipsyhillsmokehouse.co.uk"**, or a folder path box that shows `public_html`.

   > **This is the critical bit.** You want the `.com` pointing at the *same folder* as the `.co.uk`, not a new empty one. If the box shows something like `/home/xxxx/thegipsyhillsmokehouse.com`, change it to just `public_html`. Or tick the "share document root" option.
   >
   > Get this wrong and the `.com` will show an empty page or a "coming soon" holder instead of your site.

5. Click **Submit**.

- [ ] **Checkpoint:** `thegipsyhillsmokehouse.com` appears in your domains list, with document root `public_html`.

---

### PART B — Point the .com at the hosting

Right now the `.com` is set to "Forwarding". You need to remove that and point it at the server properly.

**The address you're pointing it to is:** `92.205.171.218`

*(Write that down — it's your hosting server.)*

#### B1 — Screenshot first

1. **godaddy.com** → your name → **My Products**.
2. Under **Domains**, find `thegipsyhillsmokehouse.com` → click **DNS** (or **Manage DNS**).
3. You'll see a table of records: Type, Name, Value.
4. **Screenshot the whole table now.** Scroll and take more if it doesn't all fit.

That screenshot is your insurance for the email records.

#### B2 — Turn off forwarding

Find the **Forwarding** section — it may be on the DNS page or under the domain's main settings. It'll show something like:

`thegipsyhillsmokehouse.com → https://thegipsyhillsmokehouse.co.uk`

Delete it, or switch it off.

*Why: forwarding overrides everything else. While it's on, you can't point the domain anywhere.*

#### B3 — Set the A record

Back on the DNS records table:

1. Find the row where **Type** is `A` and **Name** is `@`.
2. If it exists: click the pencil/**Edit** icon, change **Value** to `92.205.171.218`, set **TTL** to 1 hour if offered, **Save**.
3. If it doesn't exist: **Add New Record** → Type `A`, Name `@`, Value `92.205.171.218` → Save.

*In DNS, `@` means "the domain on its own" — `thegipsyhillsmokehouse.com` with nothing in front.*

#### B4 — Set the www record

1. Find the row where **Type** is `CNAME` and **Name** is `www`.
2. Edit it so **Value** is `@`.
   *(Some versions want the full `thegipsyhillsmokehouse.com` instead — either works.)*
3. Save.

> `www` is your home address, so this record has to be right. If there's no `www` row at all, add one: Type `CNAME`, Name `www`, Value `@`.

#### B5 — Check what you did NOT change

Compare against your screenshot and confirm these are untouched:

- [ ] **MX** record pointing to `smtp.google.com` — **still there**
- [ ] **TXT** record containing `v=spf1 include:_spf.google.com` — **still there**

#### B6 — Confirm email is alive

Don't wait on this. From your phone, send a test email to `timclements@thegipsyhillsmokehouse.com` and check it arrives.

If it doesn't turn up within a few minutes, restore the MX and TXT records exactly as your screenshot shows them.

- [ ] **Checkpoint:** forwarding off, A record set, www CNAME set, MX and TXT untouched, test email received.

---

### PART C — Leave the .co.uk completely alone

Nothing to do here. Genuinely.

`thegipsyhillsmokehouse.co.uk` already points at your hosting, and that's exactly where you want it. The redirect to `.com` is handled by the file you upload in Stage 4 — properly, keeping the page the visitor asked for.

**Do not set up GoDaddy forwarding on the `.co.uk`.** It would override the good redirect with the broken kind.

---

# STAGE 3 — Wait, then check the .com is real

DNS changes take time to spread. Usually under an hour, occasionally up to 48.

**Go and do something else. Come back in an hour.**

### 3.1 Check the .com now serves your site

Open a **private/incognito window** (Safari: File → New Private Window. Chrome: File → New Incognito Window). Your normal window remembers old pages and will lie to you.

Paste: `http://www.thegipsyhillsmokehouse.com`

**Expect:** your homepage. It may warn you about security — that's fine and expected at this stage, we fix it next. What matters is that your site appears rather than a GoDaddy holding page or an error.

> **If you get a "coming soon" page or an empty folder listing:** Part A went wrong — the `.com` is pointing at its own empty folder rather than `public_html`. Go back to Stage 2 Part A step 4.
>
> **If nothing loads at all:** DNS hasn't spread yet. Wait another hour.

Deep pages like `/event-catering` will still 404 at this point. That's expected — that's what Stage 4 fixes.

- [ ] **Checkpoint:** `www.thegipsyhillsmokehouse.com` shows your homepage.

### 3.2 Get the padlock

Google has your site indexed as `https://` — the secure version. Without a certificate, visitors get a red security warning, which is worse than a 404.

1. In cPanel, find **Security** → **SSL/TLS Status**.
2. Find `thegipsyhillsmokehouse.com` **and** `www.thegipsyhillsmokehouse.com` in the list.
3. Tick both.
4. Click **Run AutoSSL**.
5. Wait — anywhere from two minutes to an hour.

You want both showing a green tick or "Certificate is valid".

Then test: `https://www.thegipsyhillsmokehouse.com` — with the **s**. It should load with a padlock and no warning.

- [ ] **Checkpoint:** `https://www.thegipsyhillsmokehouse.com` loads with a padlock, no warnings.

**Don't move to Stage 4 until this checkpoint passes.** The next step sends all your traffic to the https address — it needs to be trustworthy first.

---

# STAGE 4 — Upload `.htaccess` (this is the switch)

One file. This is the moment everything changes over.

### What this file does

It's the instruction sheet for the server. It contains 46 rules that:

- send every visitor to `https://www.thegipsyhillsmokehouse.com`, keeping their page
- translate every old Wix address into the right new page
- let the tidy short addresses work (`/event-catering` rather than `/event-catering.html`)
- show a proper "page not found" page instead of a blank screen

### 4.1 Find it on your Mac

Your Mac hides dot-files too. In Finder, open the project folder and press:

**Command + Shift + Full stop (.)**

Hidden files appear, greyed out. `.htaccess` is now visible. Same keys again re-hides them later.

### 4.2 Upload it

1. cPanel → **File Manager** → **public_html**.
2. Click **Upload**. A new tab opens.
3. Drag in `.htaccess` on its own.
4. Close the tab, click **Reload** in File Manager.

- [ ] **Checkpoint:** `.htaccess` appears in the list, slightly greyed out.

If you can't see it, go back to **1.3** — hidden files aren't switched on.

### 4.3 Quick check before going further

In your private window, paste: `https://www.thegipsyhillsmokehouse.com`

**Expect:** the homepage, working normally.

> 🚨 **If you get a blank page, "Internal Server Error", or a 500 error** — stop and go to Stage 7. It's fixable in two minutes.

Now try: `https://thegipsyhillsmokehouse.co.uk`

**Expect:** the address bar changes by itself to `https://www.thegipsyhillsmokehouse.com`. That's your `.co.uk` redirect working — no GoDaddy forwarding needed.

- [ ] **Checkpoint:** site loads, and `.co.uk` bounces to `.com`.

---

# STAGE 5 — Upload the remaining 13 files

Ten are updated versions of pages you already have; three are new.

**All in:** `Documents / CLAUDE COWORK / PROJECTS / THE GIPSY HILL SMOKEHOUSE`

### The updated pages (10)

```
index.html                    our-food.html
contact.html                  private-parties.html
event-catering.html           spit-roasts-hog-roasts.html
gallery.html                  testimonials.html
wedding-catering.html         wedding-menus.html
```

*What changed:* menu links now use the tidy short addresses; each page tells Google its official address is the `.com` one; the enquiry forms now say they came from `thegipsyhillsmokehouse.com`.

### The new files (3)

```
404.html      A proper "page not found" page, styled like the site, with links
              back to your main pages. Right now visitors get a blank white
              screen saying "404 Not Found".

robots.txt    Tells Google where to find your sitemap.

sitemap.xml   A list of all 10 pages so Google finds them quickly rather than
              waiting to stumble across them.
```

### 5.1 Upload

1. cPanel → **File Manager** → **public_html**.
2. Click **Upload**.
3. Drag in all 13 at once.
4. When each shows 100%, close the tab and click **Reload**.
5. It'll warn that files already exist and ask to overwrite. Say yes — that's the point.

- [ ] **Checkpoint:** `404.html`, `robots.txt` and `sitemap.xml` now appear in the list.

---

# STAGE 6 — Test everything

Private/incognito window for all of these.

### 6.1 The site works

`https://www.thegipsyhillsmokehouse.com` — homepage, padlock, no warnings.

### 6.2 The tidy addresses work

```
https://www.thegipsyhillsmokehouse.com/event-catering
https://www.thegipsyhillsmokehouse.com/wedding-catering
https://www.thegipsyhillsmokehouse.com/our-food
https://www.thegipsyhillsmokehouse.com/contact
```

### 6.3 The old Wix addresses redirect — the actual fix

Paste each and watch the address bar change by itself.

| Paste this (on `www.thegipsyhillsmokehouse.com`) | Should become |
|---|---|
| `/hog-roast-party` | `/private-parties` |
| `/hogroasts` | `/spit-roasts-hog-roasts` |
| `/contact-us` | `/contact` |
| `/videos-hog-roast-gipsy-hill-smokehouse` | `/gallery` |
| `/gipsy-hill-smokehouse-menu` | `/our-food` |
| `/post/what-is-a-hog-roast` | `/spit-roasts-hog-roasts` |

**These are the links from your Google result.** When they land on real pages, the job is done.

### 6.4 Everything funnels to one address

Each of these should end up on `https://www.thegipsyhillsmokehouse.com/event-catering`:

```
http://www.thegipsyhillsmokehouse.com/event-catering      (no https)
https://thegipsyhillsmokehouse.com/event-catering         (no www)
https://thegipsyhillsmokehouse.co.uk/event-catering       (the .co.uk)
https://www.thegipsyhillsmokehouse.co.uk/event-catering
```

### 6.5 The 404 page

`https://www.thegipsyhillsmokehouse.com/this-page-is-not-real`

**Expect:** a proper Gipsy Hill Smokehouse page saying "That page has moved", with your menu and links. Not a blank white screen.

### 6.6 The enquiry form — the one that matters most

Enquiries are money. Test it properly.

1. Go to `https://www.thegipsyhillsmokehouse.com/contact`
2. Fill it in as a customer would, using your own email.
3. Send.
4. Check `timclements@thegipsyhillsmokehouse.com` for the notification.
5. Repeat on `https://www.thegipsyhillsmokehouse.com/event-catering` — that page has its own form.

- [ ] **Checkpoint:** all six tests pass, including two test enquiries landing in your inbox.

**That's the job done.** Stages 8 and 9 are tidy-up.

---

# STAGE 7 — Only if something broke

Skip if Stage 6 went fine.

### If the site errors out right after Stage 4

The cause is `.htaccess` — you've only added one file, so there's no mystery.

1. cPanel → **File Manager** → **public_html**
2. Click `.htaccess` once to highlight it.
3. Click **Rename**.
4. Change it to `htaccess-BROKEN.txt` (dropping the leading dot switches it off).
5. Reload the site.

If the site comes back, `.htaccess` was it. **Don't delete the file** — leave it renamed and tell me. It tells me which rule the server objected to, and it's usually a one-line fix.

*This is exactly why `.htaccess` goes up on its own in Stage 4, before the other 13 files. If something breaks, there's only one possible cause.*

### If you need to undo everything

1. File Manager → `public_html` → **Upload** → upload your backup zip from Stage 1.
2. Highlight it in the list → **Extract** → extract into `public_html`.
3. Overwrite when asked.

Site returns to how it was this morning. The `.com` domain work in Stage 2 is separate and stays fine.

---

# STAGE 8 — Tell Google

Here's the good news from your decision: because you've stayed on `.com`, **there's no "Change of Address" to file.** Google isn't being asked to move your reputation anywhere. You're just repairing the address it already has. Much less to go wrong.

### 8.1 Search Console

1. Go to **search.google.com/search-console**
2. Sign in with `timclements@thegipsyhillsmokehouse.com`
3. Check whether `https://www.thegipsyhillsmokehouse.com` is already listed in the property dropdown (top left).

If it isn't:
- Property dropdown → **Add property**
- Choose the **URL prefix** option (right-hand box)
- Enter `https://www.thegipsyhillsmokehouse.com`
- Follow the verification steps

### 8.2 Submit the sitemap

1. Select the `www.thegipsyhillsmokehouse.com` property.
2. Left menu → **Sitemaps**.
3. In the box type: `sitemap.xml`
4. Click **Submit**.

You're handing Google the list of your 10 pages rather than making it hunt.

### 8.3 Ask for a recheck

1. Use the search bar at the very top (**Inspect any URL**).
2. Paste `https://www.thegipsyhillsmokehouse.com` and press enter.
3. When it finishes, click **Request Indexing**.
4. Repeat for your four money pages:
   - `/spit-roasts-hog-roasts`
   - `/wedding-catering`
   - `/event-catering`
   - `/private-parties`

### 8.4 Optional — the .co.uk

If `.co.uk` was ever listed in Search Console, add it as a property too and file a **Change of address** pointing to `www.thegipsyhillsmokehouse.com` (Settings → Change of address). Low priority — that domain has little history to move.

- [ ] **Checkpoint:** `.com` property verified, sitemap submitted, indexing requested.

**What to expect:** the Google result may keep showing old-style links for one to three weeks while Google re-crawls. The difference is that from today those links *work* rather than dumping people on an error page. You've stopped the bleeding; the tidy-up follows on Google's schedule.

---

# STAGE 9 — Loose ends

None urgent. All real.

### 9.1 Two pages are still missing

`/privacy-policy` and `/terms-conditions` existed on Wix and don't exist now. They're the only two old addresses still landing on a 404.

More to the point: your contact forms collect names, email addresses and phone numbers. Under UK GDPR a business doing that needs a privacy policy people can actually read. I didn't want to generate a legal document and put it live without you reading it.

**Say the word and I'll draft both.**

### 9.2 Your best content no longer exists

The biggest traffic-earner on the old site was a blog post: *"Why is an apple placed in the mouth of a hog roast?"* — roughly **64% of all your search traffic**. A second, on pork crackling, ranked for **131 different search terms**.

Both are gone. The redirects pass some of their value to your hog roast page, but the articles themselves — the things people were actually searching for and finding — don't exist any more.

That's the highest-value thing you could rebuild. Two or three pieces in your voice, answering the questions people genuinely type into Google about hog roasts.

### 9.3 Every photo is still hosted by Wix

All 75 images load from `static.wixstatic.com`. They work today because Wix hasn't cleaned up your old account.

If that account closes, expires, or gets purged, **every photograph on your website vanishes at once**, with no warning. For a catering business where the photos *are* the sales pitch, that's real exposure. Worth fixing before next season.

### 9.4 A gap in your enquiry filing

While checking your Gmail filters I noticed the "all enquiries" filter covers Feast It, Add to Event, Togather and 123FormBuilder — but **not Formspree**, which is now your main website form. Formspree enquiries do get starred and labelled correctly, they just miss that one aggregate label. Small, but worth straightening out so your enquiry counts are honest.

### 9.5 Your live contact page was out of date

The version on the server was older than the one on your Mac — a change you made to the email link on 31 July never got uploaded. Stage 5 fixes it automatically. Just so you know why it looks different afterwards.

---

## Quick reference

**Home address:** `https://www.thegipsyhillsmokehouse.com`
**Hosting server:** `92.205.171.218`
**Files live in:** cPanel → File Manager → `public_html`
**Files come from:** `Documents / CLAUDE COWORK / PROJECTS / THE GIPSY HILL SMOKEHOUSE`
**Show hidden files on Mac:** Command + Shift + Full stop
**Show hidden files in cPanel:** File Manager → Settings → Show Hidden Files

**If the site goes down:** rename `.htaccess` to `htaccess-BROKEN.txt` and it comes back.

**Never touch:** MX records, TXT records.
**Never turn on:** GoDaddy Forwarding, on either domain.

---

## Stage summary

| | Stage | Time | Can it break anything? |
|---|---|---|---|
| 1 | Back up the live site | 5 min | No |
| 2 | Connect the .com to hosting | 20 min | Yes — email, if you touch MX |
| 3 | Wait an hour, check + padlock | 10 min | No |
| 4 | Upload `.htaccess` — the switch | 5 min | Yes — this is the risky one |
| 5 | Upload the other 13 files | 10 min | No |
| 6 | Test everything | 15 min | No |
| 7 | Undo, if needed | 5 min | No |
| 8 | Tell Google | 15 min | No |
| 9 | Loose ends | later | No |


---

# STAGE 9.6 — The custom 404 page (open item, added 21 Aug 2026)

`404.html` is uploaded and works if you visit it directly at `/404`. But a genuinely missing
page returns a bare 13-byte "404 Not Found" rather than the styled page.

**Cause — verified by experiment, not guessed:** GoDaddy's Apache ignores the `ErrorDocument`
directive from `.htaccess` on this account. Tested by setting `ErrorDocument 404` to a literal
diagnostic string; the string never appeared. So it is not a path problem and not fixable by
editing `.htaccess`.

**Routes still open:**
1. cPanel → Advanced → **Error Pages** → select `thegipsyhillsmokehouse.com` → 404. This writes
   a `404.shtml` into the document root through cPanel's own mechanism, which may be honoured
   where the `.htaccess` directive is not. Untested — attempt was interrupted.
2. Ask GoDaddy support to allow `ErrorDocument` overrides on the account.

**Impact if left as-is:** low. All 46 known legacy URLs redirect to real pages, so a visitor only
meets the bare 404 on an address that was never on the old site.
