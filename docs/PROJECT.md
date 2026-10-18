# Project record: Buggies For Sale Australia

- Domain: buggiesforsale.com.au (single source: `SITE.domain` in config/site.ts)
- Market: Australia, AUD incl. GST. Target: Vercel via GitHub (Maestro repo `maestro-ai1/Golf-Buggy-Shop`).
- Primary keyword: buggies for sale. Structure: 74 pages from the locked keyword map (docs/keyword-research/).
- Brand: green fairway + sand + sunset-orange theme, golf buggy logo (components/Logo.tsx, app/icon.svg).
- Pricing: 2% below the lowest Australian competitor (sources: eridesolutions.com.au, mgigolf.com, stingergolf.com.au, cartsnparts.com.au, penrithpitbike.com.au; checked 2026-10-18). Re-run `node scripts/build-catalog.mjs` after refreshing data/raw.
- Order rules: min $500, free delivery over $1,000, $95 flat, 5% crypto discount.
- Forms: SMTP only. Reply portal at /admin (ADMIN_PASSCODE), Upstash Redis storage.
- Reviews: Trustpilot 4.9 / 1,024 from the previous website (do not change).
- Open items: brand hero imagery for brands without products, policies review (returns/privacy/terms are conservative drafts), blog posts 7-50 (docs/blog), Google Search Console code, SMTP + Redis env vars in Vercel, Club Car Tempo and golf cart hire decisions.
