// Markdown versions of pages for AI agents that send "Accept: text/markdown" (the HTML stays the default for browsers).
import { BLOG_POSTS, BRAND, CONTACT, PRODUCTS, SHOP, SITE, listProductsFor, money, pageByUrl } from '@/config/site';
import { FAQ_ITEMS } from '@/content/faq';
import { llmsTxt } from '@/lib/llms';

const U = (p: string) => SITE.url + p;
const clean = (s: string) => s.replace(/\s+/g, ' ').trim();
const facts = `- Prices are AUD including GST. Minimum order $${SHOP.minOrder}. Free delivery over $${SHOP.freeShippingThreshold.toLocaleString('en-AU')}, otherwise flat $${SHOP.shippingFee}.\n- Payment: bank transfer (Osko/EFT), PayID, Bitcoin or USDT (extra ${SHOP.cryptoDiscount}% off). Phone ${CONTACT.phone}, email ${CONTACT.email}.`;
const STATIC = ['/about/', '/contact/', '/delivery/', '/returns/', '/wholesale/', '/shop/', '/blog/', '/privacy/', '/terms/', '/cookies/'];

export function markdownFor(path: string): string | null {
  const p = path.replace(/^\/+|\/+$/g, '') ? '/' + path.replace(/^\/+|\/+$/g, '') + '/' : '/';
  const prod = p.match(/^\/products\/([^/]+)\/$/);
  if (prod) {
    const x = PRODUCTS.find((q) => q.slug === prod[1]); if (!x) return null;
    const specs = Object.entries(x.specs || {}).filter(([, v]) => v).map(([k, v]) => `- ${k}: ${clean(String(v))}`);
    return [`# ${x.name}`, '', `Price: **${money(x.price)} AUD** inc. GST. Brand: ${x.brand}. Category: ${x.subcategory}. SKU: ${x.sku}.`, `Canonical: ${U(p)}`, '', clean(x.shortDescription), '', ...(x.highlights || []).map((h) => `- ${clean(h)}`), ...(specs.length ? ['', '## Specifications', ...specs] : []), ...(x.faqs?.length ? ['', '## FAQ', ...x.faqs.flatMap(([q, a]) => [`**${clean(q)}** ${clean(a)}`, ''])] : []), '', facts, ''].join('\n');
  }
  const blog = p.match(/^\/blog\/([^/]+)\/$/);
  if (blog) {
    const b = BLOG_POSTS.find((q) => q.slug === blog[1]); if (!b) return null;
    return [`# ${b.title}`, '', `Published ${b.date}. Canonical: ${U(p)}`, '', ...b.content, ...(b.faqs?.length ? ['', '## FAQ', ...b.faqs.flatMap(([q, a]) => [`**${clean(q)}** ${clean(a)}`, ''])] : []), ''].join('\n');
  }
  if (p === '/faq/') return ['# Frequently asked questions', '', `Canonical: ${U(p)}`, '', ...FAQ_ITEMS.flatMap((f) => [`## ${f.q}`, clean(f.a), ''])].join('\n');
  if (p === '/') return [`# ${SITE.name} Australia`, '', BRAND.statement, '', facts, '', 'Full site map in Markdown: ' + U('/llms.txt'), ''].join('\n');
  const page = pageByUrl(p);
  if (page && page.level !== 'product') {
    const list = listProductsFor(page).slice(0, 60);
    return [`# ${clean(page.h1)}`, '', `Canonical: ${U(p)}`, '', list.length ? `## Products (${list.length})` : '', ...list.map((x) => `- [${x.name}](${U('/products/' + x.slug + '/')}): ${money(x.price)} AUD`), '', facts, ''].join('\n');
  }
  if (STATIC.includes(p)) return [`# ${p.replace(/\//g, '').replace(/^./, (c) => c.toUpperCase())}`, '', `This page is available as HTML at ${U(p)}. A Markdown index of the whole site is at ${U('/llms.txt')}.`, '', facts, ''].join('\n');
  return null;
}
export const markdownFallback = () => llmsTxt();
