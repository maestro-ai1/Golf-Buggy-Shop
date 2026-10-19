// Builds /llms.txt (short index) and /llms-full.txt (full Markdown documentation) from the same data the site renders, so they never drift.
// No stock, award or warranty claims beyond what the site states. Prices are AUD including GST.
import { BLOG_POSTS, BRAND, CONTACT, PAGES, PRODUCTS, SHOP, SITE, money } from '@/config/site';
import { FAQ_ITEMS } from '@/content/faq';

const U = (p: string) => SITE.url + p;
const pages = PAGES.filter((p) => p.level !== 'product' && p.url !== '/');
const hubs = PAGES.filter((p) => p.level === 'category' && p.url !== '/brands/');
const brands = PAGES.filter((p) => p.url.startsWith('/brands/') && p.url !== '/brands/');
const clean = (s: string) => s.replace(/\s+/g, ' ').trim();
const name = (n: string) => n.replace(/ \((Hub|LOW DEMAND)\)$/, '');
const free = SHOP.freeShippingThreshold.toLocaleString('en-AU');

const facts = () => `## Brand facts (cite these)
- Business: ${SITE.legalName}, ABN ${CONTACT.abn}. Founded ${BRAND.foundingYear} in ${BRAND.foundingLocation}.
- Website: ${SITE.url}. Delivers Australia-wide. Currency: AUD, all prices include 10% GST.
- Phone: ${CONTACT.phone} (${CONTACT.phoneInternational}), also WhatsApp. Email: ${CONTACT.email}
- Hours: ${CONTACT.hours}
- Minimum order: $${SHOP.minOrder}. Free delivery over $${free} to major metro and depot corridors, otherwise flat $${SHOP.shippingFee} freight.
- Payment: bank transfer (Osko/EFT), PayID, or Bitcoin and USDT (extra ${SHOP.cryptoDiscount}% off, applied automatically when crypto is selected at checkout). No card payments on the site.
- Ordering: customers place an order, the team confirms stock and freight, then emails payment details. No payment is taken on the website.
- Warranty: manufacturer warranty applies; Australian Consumer Law guarantees apply.
- Customer reviews: 4.9 out of 5 from 1,024 Trustpilot reviews (since 2023).`;

export function llmsTxt() {
  const lines = [
    `# ${SITE.name} Australia`, '',
    `> ${BRAND.statement} Golf buggies, electric and remote control golf buggies, golf carts, lithium batteries, accessories and off-road buggies. All prices are AUD including GST.`, '',
    `Full documentation in one Markdown file: [llms-full.txt](${U('/llms-full.txt')}).`, '',
    facts(), '',
    '## Shop categories',
    ...hubs.map((p) => `- [${name(p.name)}](${U(p.url)}): ${clean(p.h1)}`),
    `- [All products](${U('/shop/')})`, `- [Brands](${U('/brands/')}): ${brands.map((b) => name(b.name)).join(', ')}`, '',
    '## Buying guides',
    ...BLOG_POSTS.map((b) => `- [${b.title}](${U('/blog/' + b.slug + '/')}): ${clean(b.excerpt)}`), '',
    '## Company and policies',
    ...['/about/', '/contact/', '/delivery/', '/returns/', '/faq/', '/wholesale/', '/privacy/', '/terms/'].map((u) => `- [${u.replace(/\//g, '').replace(/^./, (c) => c.toUpperCase())}](${U(u)})`), '',
    '## Optional',
    `- [Product catalogue API](${U('/api/products/')})`, `- [API Catalog](${U('/.well-known/api-catalog')})`, `- [Agent Skills](${U('/.well-known/agent-skills/index.json')})`, `- [MCP Server Card](${U('/.well-known/mcp/server-card.json')})`, `- [Auth documentation](${U('/auth.md')})`, `- [Sitemap](${U('/sitemap.xml')})`, '',
  ];
  return lines.join('\n');
}

export function llmsFullTxt() {
  const out: string[] = [`# ${SITE.name} Australia: full documentation`, '', `> ${BRAND.statement}`, `> Generated from the live catalogue. Prices are AUD including GST. Canonical site: ${SITE.url}`, '', facts(), ''];
  out.push('## Categories', '');
  for (const p of hubs) out.push(`### ${name(p.name)}`, `URL: ${U(p.url)}`, clean(p.h1), '');
  out.push('## Brands', '', brands.map((b) => `- [${name(b.name)}](${U(b.url)})`).join('\n'), '');
  out.push(`## Products (${PRODUCTS.length})`, '');
  for (const p of PRODUCTS) {
    out.push(`### ${p.name}`, `- URL: ${U('/products/' + p.slug + '/')}`, `- Price: ${money(p.price)} AUD inc. GST${p.rrp && p.rrp > p.price ? ` (RRP ${money(p.rrp)})` : ''}`, `- Brand: ${p.brand} | Category: ${p.subcategory} | SKU: ${p.sku}`, '', clean(p.shortDescription));
    if (p.highlights?.length) out.push('', ...p.highlights.map((h) => `- ${clean(h)}`));
    const specs = Object.entries(p.specs || {}).filter(([, v]) => v);
    if (specs.length) out.push('', 'Specifications:', ...specs.map(([k, v]) => `- ${k}: ${clean(String(v))}`));
    if (p.faqs?.length) out.push('', ...p.faqs.flatMap(([q, a]) => [`**${clean(q)}** ${clean(a)}`]));
    out.push('');
  }
  out.push('## Frequently asked questions', '', ...FAQ_ITEMS.flatMap((f) => [`### ${f.q}`, clean(f.a), '']));
  out.push('## Buying guides', '');
  for (const b of BLOG_POSTS) out.push(`### ${b.title}`, `URL: ${U('/blog/' + b.slug + '/')} | Published: ${b.date}`, '', ...b.content, '', ...(b.faqs || []).flatMap(([q, a]) => [`**${clean(q)}** ${clean(a)}`]), '');
  out.push('## Other pages', '', ...pages.filter((p) => !hubs.includes(p) && !brands.includes(p)).map((p) => `- [${name(p.name)}](${U(p.url)})`), '');
  return out.join('\n');
}
