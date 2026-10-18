import { COPY, type PageCopy } from '@/content/pages';
import { SITE, money, type Product, type SitePage } from '@/config/site';
import { clampDesc } from '@/lib/seo';

const BRAND_FAQ = (brand: string): [string, string][] => [
  [`Do you sell ${brand} products?`, `We list the ${brand} models shown on this page. If you are after another ${brand} model or part, tell us and we will check availability.`],
  [`How much does ${brand} cost in Australia?`, `Prices are shown on each listing and include GST.`],
  [`Do you deliver ${brand} products Australia-wide?`, 'Yes. Orders over $1,000 ship free to major metro and depot corridors, and a flat $95 freight fee applies below that.'],
  [`Is there a warranty on ${brand} products?`, 'The manufacturer warranty applies. Warranty details and conditions are provided with your order confirmation.'],
  ['How can I pay?', 'We accept bank transfer (Osko or EFT), PayID, and Bitcoin or USDT with an extra 10% off.'],
];

export function copyFor(page: SitePage, products: Product[]): PageCopy & { fallback: boolean } {
  const c = COPY[page.url];
  if (c) return { ...c, fallback: false };
  const name = page.name.replace(/ \(Hub\)$/, '');
  const primary = page.primary?.keyword || name.toLowerCase();
  const prices = products.map((p) => p.price).sort((a, b) => a - b);
  const range = prices.length ? `from ${money(prices[0])} to ${money(prices[prices.length - 1])}` : '';
  if (page.level === 'brand') {
    const brand = name.replace(/ Buggies$/, '');
    const n = products.length;
    return {
      fallback: true,
      intro: n
        ? [`Shop ${brand} online in Australia. We list ${n} ${brand} product${n === 1 ? '' : 's'} ${range}.`, `Every order ships Australia-wide with free delivery over $1,000. Compare specifications below, or message us if you need help choosing the right ${brand} model for your cart or course.`]
        : [`Looking for ${primary}? ${brand} is one of the brands Australian buyers ask us about. We do not list a ${brand} model online yet, but we can check availability and quote you.`, 'Tell us the model you want and your location, and we will confirm price, stock and delivery. In the meantime, browse our related ranges below.'],
      guides: [{ h2: `Before you buy ${brand}`, p: ['Check compatibility with your cart or course, confirm warranty terms and ask about delivery to your postcode. Our team can answer questions on 0420 128 746.'] }],
      faqs: BRAND_FAQ(brand),
    };
  }
  const isParts = /parts-accessories/.test(page.url);
  return {
    fallback: true,
    intro: [
      `Shop ${primary} at ${SITE.name}${range ? `, with ${products.length} option${products.length === 1 ? '' : 's'} ${range}` : ''}. Free delivery over $1,000.`,
      `Delivery is Australia-wide, free over $1,000. ${isParts ? 'Check compatibility with your cart or buggy model before ordering, and message us if you are unsure.' : 'Compare specifications below, or contact us for help choosing.'}`,
    ],
    guides: [{ h2: `Choosing ${name.toLowerCase()}`, p: ['Compare price, specifications and warranty. Check the delivered cost, not just the sticker price.', 'If you cannot find what you need, tell us and we will source it.'] }],
    faqs: [
      [`Where can I buy ${primary} in Australia?`, `You can buy ${primary} online from ${SITE.name} with Australia-wide delivery.`],
      ['Do prices include GST?', 'Yes. All prices are in Australian dollars and include 10% GST.'],
      ['How much is delivery?', 'Free over $1,000 to major metro and depot corridors, otherwise a flat $95 freight fee.'],
      ['Is there a warranty?', 'The manufacturer warranty applies. Details come with your order confirmation.'],
      ['Can you help me choose?', 'Yes. Call 0420 128 746 or message us on WhatsApp.'],
    ],
  };
}

export const descFor = (page: SitePage, intro: string) => {
  const base = intro.replace(/\s+/g, ' ');
  const tail = ' Free delivery over $1,000 across Australia.';
  return clampDesc(base.length < 112 ? base + tail : base);
};
