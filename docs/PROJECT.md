# Project record: Buggies For Sale Australia

- Domain: buggiesforsale.com.au (single source: `SITE.domain` in config/site.ts)
- Market: Australia, AUD incl. GST. Target: Vercel via GitHub (Maestro repo `maestro-ai1/Golf-Buggy-Shop`).
- Primary keyword: buggies for sale. Structure: 74 pages from the locked keyword map (docs/keyword-research/).
- Brand: green fairway + sand + sunset-orange theme, golf buggy logo (components/Logo.tsx, app/icon.svg).
- Pricing (internal only, never shown on the site): 2% below the lowest Australian competitor (sources: eridesolutions.com.au, mgigolf.com, stingergolf.com.au, cartsnparts.com.au, penrithpitbike.com.au; checked 2026-10-18). Re-run `node scripts/build-catalog.mjs` after refreshing data/raw.
- Order rules: min $500, free delivery over $1,000, $95 flat, 10% crypto discount (Bitcoin / USDT TRC20, automatic at checkout). Payments: Osko/EFT, PayID, crypto only.
- Forms: SMTP only. Reply portal at /admin (ADMIN_PASSCODE), Upstash Redis storage.
- Reviews: Trustpilot 4.9 / 1,024 from the previous website (do not change).
- Open items: brand hero imagery for brands without products, policies review (returns/privacy/terms are conservative drafts), blog posts 7-50 (docs/blog), Google Search Console code, SMTP + Redis env vars in Vercel, Club Car Tempo and golf cart hire decisions.

## Catalogue pipeline (updated 2026-10-18)
- Raw sources: data/raw/*.json (gitignored) plus data/raw/web.json (committed: AU retailer, brand-store and dealer listings with price, images and source URL).
- Curated products: scripts/catalog-spec.mjs (keyword-mapped brands and models only) -> node scripts/build-catalog.mjs -> node scripts/process-images.mjs -> node scripts/order-images.mjs (white-background image first).
- Image rule: 1 to 3 images per product, white background first, off-white studio backdrops levelled to #fff. Stop any running dev/preview server before bulk image writes (Windows file locks).
- Brand pages with real products: all keyword-map brands except Kubota (new RTV pricing is POA, so the page stays on its quote CTA).
- Audit: node scripts/link-audit.mjs http://localhost:3000 (broken links, duplicate titles and canonicals, missing breadcrumbs).
