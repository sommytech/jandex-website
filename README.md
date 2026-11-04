# Jandex Properties and Facility Management — website

Marketing website for **Jandex Properties and Facility Management Limited (JP&FM Ltd)**.
React 18 + Vite, with every page prerendered to static HTML for search engines and social previews.

## Pages

| Path | Purpose |
| --- | --- |
| `/` | Home: the two business lines, featured listings, process, diaspora owners, enquiry |
| `/properties` | Filterable listings (sale / rent / lease, residential / commercial / land) |
| `/services` | Sales, letting, property management, investment advisory |
| `/facility-management` | FM services, sectors, response times |
| `/about` | Values and FAQ |
| `/contact` | Smart enquiry form (changes fields by enquiry type) + other contact routes |

## Edit the business details

All contact details live in `src/config.js` (email, phone, WhatsApp, address, social links, domain).
Phone, WhatsApp and address are hidden until filled in. Listings, services and FAQs are in `src/data/content.js`.
Listings flagged `sample: true` show a "Sample listing" tag — replace them with real stock before launch.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # static site in dist/ (prerendered pages, sitemap.xml, robots.txt)
npm run assets     # regenerate favicons and the social share image
```

## Deploy to Netlify

1. Push this repository to GitHub.
2. In Netlify: **Add new site → Import an existing project → GitHub →** pick the repo.
   Build settings are read from `netlify.toml` (`npm run build`, publish `dist`).
3. Under **Site configuration → Environment variables**, set `SITE_URL` to the final domain
   (e.g. `https://www.jandexproperties.com`) so canonical links, sitemap and social tags use it.
4. **Forms → Enable form detection**, then redeploy. Enquiries appear under Forms → `enquiry`;
   add an email notification to `Jandexglobal@gmail.com`.

Quick demo without GitHub: run `npm run build` and drag the `dist` folder onto https://app.netlify.com/drop.

## SEO checklist after launch

- Submit `https://<domain>/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
- Create a Google Business Profile with the same name, email and phone as `src/config.js`.
- Add the website link to the Instagram and Facebook bios (@Jandexproperties).
