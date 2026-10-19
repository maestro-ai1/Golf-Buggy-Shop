# Buggies For Sale Australia: Project Rules

React/Next.js (App Router, TypeScript) store for buggiesforsale.com.au, deployed on Vercel from GitHub. Built with the separate skills keyword-engine, buggy-shop-seo and golden-image-rule (golden-skill and the WebForge VIP zip are disabled).

## Non-negotiable
- Never fabricate awards, press, certifications, stock, specs or reviews. Do not claim inspections, warranties or services that are not real.
- Trustpilot score (4.9, 1,024 reviews, since 2023) and the two review quotes in `content/reviews.ts` come from the owner's previous website: never edit, remove or question them.
- All prices AUD incl. 10% GST. **Internal pricing strategy: our price = lowest comparable Australian competitor price x 0.98. NEVER show the 2% / benchmarking / "below market" wording anywhere on the website, in metadata, llms.txt or agent files.** Source and date are recorded per product in `data/catalog.json` (`priceSource`).
- Order rules (owner): min order $250, free delivery over $1,000 (major metro and depot corridors), flat $95 freight below, **10% discount for crypto (Bitcoin / USDT TRC20), applied automatically at checkout only when the customer selects crypto**. Payment methods are ONLY: bank transfer (Osko/EFT), PayID, crypto. No cards, no invoices at checkout. Wallet addresses go in `CRYPTO` in `config/site.ts`.
- Menu: Home, Shop (mega menu), Brands, Blog, About Us, Contact Us (centred). Clearance lives in the footer only.
- One H1 per page. Meta description 110-158 chars. Product title `{Name} | Buy Online Australia` (60 or fewer).
- Mobile-first, no horizontal scroll. WCAG 2.2 AA basics (skip link, labels, focus, contrast).
- Strategy docs live in `docs/` only: never in `public/`.
- Never push to GitHub unless the owner says so in that turn.

## Architecture
- `config/site.ts` is the single source of truth (facts, structure, catalogue, helpers). `data/structure.json` = locked keyword map (74 pages). `data/catalog.json` = products (built by `scripts/build-catalog.mjs` from `data/raw/`).
- Structure pages render from `app/[...slug]/page.tsx`. Copy: `content/pages.ts` (curated) with a catalogue-based fallback in `lib/copy.ts`.
- Products `/products/<slug>/`. Blog `content/blog.ts`. Forms: SMTP only (`lib/server.ts`), no third-party mail or captcha API.
- Reply portal: `/admin` (passcode), storage = Upstash Redis (Vercel Storage), emails light-shell.
- Images: `scripts/process-images.mjs` (square 1:1 on white, WebP+AVIF, <=150KB), heroes `scripts/make-heroes.mjs`, blog covers `scripts/make-blog-images.mjs`.

## Keyword rule
The one rule is the `golden-keyword-rule` skill (global, owner-confirmed). Summary: KD 28 or below, highest volume first; 1 primary (transactional, else commercial) + 5 secondary (T/C) + 5 FAQs per page and per product; N/I go to blogs; alt text = product focus keyword; FAQs on every product and blog post; numbered pagination; no keyword for products we do not stock. Mapped keywords are never blog targets. Blog: 1500 words minimum, TOC, 5 FAQs, outbound + internal + product links.

## Facts
Buggies For Sale Australia Pty Ltd · ABN 53 635 284 267 · 0420 128 746 · sales@buggiesforsale.com.au · Sydney NSW · founded 2023.

## Before saying "done" or pushing (lessons learned)
- Images: run `node scripts/audit-images.mjs` (must print `problems: 0`; checks files, 1200/600 size, white edges, sizes, sources). With the site running (`npm run start`) also run `node scripts/audit-crawl.mjs` (every sitemap page, every image URL returns 200).
- Never reuse a filename for a changed image: `/products/*` is served `immutable` for a year, so browsers keep the old file. Give changed images a new name (e.g. `v2-1`) and update `data/catalog.json` + `data/image-sources.json`.
- Placeholder cards ("Photos on request") are a failure, never a finish. Check for shared image hashes, not just file existence.
- Test the real flow in the browser (click it) before reporting a UI change as working. Push only when the owner says so in that turn.
