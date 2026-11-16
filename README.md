# Competitor Radar: NH-2 demo

A static HTML/CSS/JS prototype of the Competitor Radar weekly pulse for Nestlé Vietnam N&H.
All data is synthetic and built into the JavaScript. There is no backend, build step or API.

Live URL (once deployed): https://nh2-demo.sozolab.tech

## Files

```
index.html                 page shell (sidebar, header, empty containers the app fills)
assets/css/styles.css      all styles
assets/js/app.js           the app: synthetic data, rendering, routing, interactions
assets/js/fullscreen.js    full-screen toggle button
assets/img/nestle-logo.png logo, also used as the favicon
CNAME                      custom domain for GitHub Pages
.nojekyll                  serve files as-is, no Jekyll processing
robots.txt                 keeps the demo out of search engines
```

Routing uses the URL hash (`#dashboard`, `#events`, `#weekly-analysis` …), so deep links work on
GitHub Pages without a 404 fallback. The sign-in screen is a mock: any email and password work,
and nothing leaves the browser.

## Run locally

```bash
python3 -m http.server 4173
```

Then open http://localhost:4173.

## Deploy to GitHub Pages

1. Create a repository, for example `nh2-demo`, and push this folder to its `main` branch:

   ```bash
   git init -b main
   git add .
   git commit -m "NH-2 Competitor Radar demo"
   gh repo create <OWNER>/nh2-demo --public --source . --push
   ```

   On GitHub Free, Pages only works on **public** repositories. A private repository needs
   GitHub Pro (personal) or Team/Enterprise (organization).

2. In the repository, open **Settings → Pages**:
   - **Source:** Deploy from a branch
   - **Branch:** `main`, folder `/ (root)`, then **Save**
   - **Custom domain:** `nh2-demo.sozolab.tech` (already set by the `CNAME` file; check it shows here)

## Connect the subdomain in Cloudflare

In the Cloudflare dashboard, open **sozolab.tech → DNS → Records → Add record**:

| Type  | Name       | Target                   | Proxy status           | TTL  |
|-------|------------|--------------------------|------------------------|------|
| CNAME | `nh2-demo` | `<owner>.github.io`      | **DNS only** (grey cloud) | Auto |

`<owner>` is the GitHub user or organization that owns the repository, in lowercase and without the
repository name. Examples: `duwunaung.github.io` or `sozo-lab-tech.github.io`.

Then:

1. Back in **Settings → Pages**, wait for the DNS check to pass (usually a few minutes).
2. Once GitHub has issued the certificate (up to about an hour), tick **Enforce HTTPS**.
3. Open https://nh2-demo.sozolab.tech.

### Cloudflare proxy (orange cloud)

Leave the record on **DNS only**. GitHub issues and renews the HTTPS certificate itself, and that
can fail when Cloudflare sits in front. If you later want the proxy anyway, switch it on only after
**Enforce HTTPS** works, and set **SSL/TLS → Overview → Full** (never *Flexible*, which causes a
redirect loop).

### Recommended: verify the domain with GitHub

This stops anyone else from claiming `*.sozolab.tech` on GitHub Pages if the repository is ever
deleted.

1. On GitHub, open **Settings → Pages → Add a domain** (your user settings, or the organization's
   settings if an org owns the repository) and enter `sozolab.tech`.
2. GitHub shows a TXT record named like `_github-pages-challenge-<owner>`. Add it in Cloudflare
   as a **TXT** record with the value GitHub gives you.
3. Click **Verify**.

## Updating the demo

Edit files, commit and push to `main`. Pages redeploys in about a minute.
