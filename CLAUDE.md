# Buggies For Sale Australia: Project Rules

React/Next.js (App Router, TypeScript) store for buggiesforsale.com.au, deployed on Vercel from GitHub. Built with the golden-skill (WebForge v11.1 + Golden Keyword Rule + Golden Image Rule).

## Non-negotiable
- Never fabricate awards, press, certifications, stock, specs or reviews. Do not claim inspections, warranties or services that are not real.
- Trustpilot score (4.9, 1,024 reviews, since 2023) and the two review quotes in `content/reviews.ts` come from the owner's previous website: never edit, remove or question them.
- All prices AUD incl. 10% GST. **Price rule: our price = lowest comparable Australian competitor price x 0.98** (2% below). Source and date are recorded per product in `data/catalog.json` (`priceSource`).
- Order rules (owner): min order $500, free delivery over $1,000 (major metro and depot corridors), flat $95 freight below, 5% crypto discount.
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
1 primary (transactional/commercial, KD<=25) + 5 secondary per page, unique, no stuffing. Mapped keywords are never blog targets. Blog: 1500 words, TOC, 5 FAQs, 3+ internal links, alt text.

## Facts
Buggies For Sale Australia Pty Ltd · ABN 53 635 284 267 · 0420 128 746 · sales@buggiesforsale.com.au · Sydney NSW · founded 2023.
