// Single source of truth for buggiesforsale.com.au
// Catalogue: data/catalog.json (built by scripts/build-catalog.mjs). Structure: data/structure.json (locked keyword map).
import catalogJson from '@/data/catalog.json';
import structureJson from '@/data/structure.json';

export interface FaqItem { q: string; a: string }
export interface Product {
  slug: string;
  sku: string;
  name: string;
  price: number;
  rrp?: number;
  category: string;       // primary category path e.g. /golf-buggies/for-sale/
  subcategory: string;    // display name of the primary category
  categories: string[];   // every category path this product appears in
  brand: string;
  brandPage: string;      // slug of /brands/<slug>/ or ''
  group: string;
  groupLabel: string;
  shortDescription: string;
  description: string;
  paragraphs: string[];
  highlights: string[];
  specs: Record<string, string>;
  faqs: [string, string][];
  images: string[];       // base paths without extension: /products/<slug>/1
  inStock: boolean;
  badge?: string;
  featured?: boolean;
  tags: string[];
  leadTime?: string;
  options?: string[];
}
export interface PageKeyword { keyword: string; volume: number; kd: number; intent?: string }
export interface SitePage {
  name: string; url: string; slug: string; level: string; parent: string;
  primary: PageKeyword | null; secondary: PageKeyword[]; support: string[];
  h1: string; titleTag: string; faqSeed: { q: string; angle: string; volume: number }[]; lowDemand: boolean;
}
export interface Category { slug: string; name: string; h1: string; shortDescription: string; introCopy: string; subcategories: { slug: string; name: string; description: string }[]; image: string; featured?: boolean }
export interface BlogPost { slug: string; title: string; seoTitle: string; excerpt: string; category: string; date: string; readTime: string; targetKeyword: string; image: string; content: string[]; faqs?: [string, string][]; products?: string[]; tags?: string[] }

export const SITE = {
  name: 'Buggies For Sale',
  legalName: 'Buggies For Sale Australia Pty Ltd',
  tagline: "Australia's Golf Buggy, Golf Cart & Off-Road Buggy Superstore",
  domain: 'buggiesforsale.com.au',
  url: 'https://buggiesforsale.com.au',
  locale: 'en-AU',
  currency: 'AUD',
  currencySymbol: '$',
  target: 'vercel',
  primaryColor: '#0F3D2E',
  accentColor: '#F07A1F',
  gscVerification: 'GSC_VERIFICATION_PLACEHOLDER',
  indexNowKey: 'bfs-indexnow-key-2026',
  cartKey: 'bfs-cart-v2',
  // Trustpilot figures come from the owner's previous website and must not be altered.
  trustpilotScore: 4.9,
  trustpilotTotalReviews: 1024,
  trustpilotSince: 2023,
  pricePromise: 'Competitive prices on every model, with free delivery over $1,000.',
};

export const CONTACT = {
  phone: '0420 128 746',
  phoneInternational: '+61420128746',
  email: 'sales@buggiesforsale.com.au',
  abn: '53 635 284 267',
  address: 'Commercial Logistics & Freight Hub, Sydney NSW 2148 [AUSTRALIA-WIDE DEPOTS]',
  hq: 'Sydney, New South Wales, Australia',
  country: 'Australia',
  hours: 'Mon-Fri: 8:00 AM – 6:00 PM AEST | Sat: 9:00 AM – 3:00 PM',
  whatsappUrl: 'https://wa.me/61420128746',
};

export const SHOP = {
  minOrder: 500,
  freeShippingThreshold: 1000,
  shippingFee: 95,
  cryptoDiscount: 10,
  priceFactor: 0.98,
  paymentMethods: [
    'Bank Transfer (Osko / EFT)',
    'PayID',
    'Cryptocurrency (Bitcoin / USDT) - 10% Discount',
  ],
};

export const FORMS = {
  provider: 'smtp',
  smtpFrom: 'sales@buggiesforsale.com.au',
  destinations: { contact: 'sales@buggiesforsale.com.au', order: 'sales@buggiesforsale.com.au', wholesale: 'sales@buggiesforsale.com.au' },
};

export const REPLY = {
  brand: { primary: '#0F3D2E', headerDark: '#0B2E22' },
  currency: { code: 'AUD', symbol: '$' },
  orderPrefix: 'BFS',
  headerTagline: "Australia's Buggy Superstore · Sydney, Brisbane, Melbourne Depots",
  dispatchLine: 'Depot dispatch within 24-48 business hours via insured heavy freight carrier.',
  bizNumber: { label: 'ABN', value: '53 635 284 267' },
  channels: { email: 'sales@buggiesforsale.com.au', whatsapp: '0420 128 746', whatsappCountryCode: '61' },
  deadlineHours: 48,
  paymentMethods: [
    { id: 'eft', label: 'Bank Transfer (Osko / EFT)', opening: 'Please transfer {amount} using order reference {ref}.', closing: 'Payment confirmed same business day. Delivery allocated immediately upon receipt.' },
    { id: 'payid', label: 'PayID', opening: 'Please pay {amount} by PayID using order reference {ref}.', closing: 'PayID payments settle instantly. Delivery allocated immediately upon receipt.', instantRailNote: 'PayID: sales@buggiesforsale.com.au (Instant settlement)' },
    { id: 'crypto', label: 'Cryptocurrency (10% Discount applied)', opening: 'Transfer {amount} in Bitcoin or USDT (TRC20 or ERC20). Your 10% crypto discount is already included in this amount.', closing: 'Blockchain confirmation required before freight booking.', discount: { percent: 10, label: '10% Crypto Discount' } },
  ],
};

// Owner crypto wallets (paste the addresses here). Shown to the customer only in the payment-details email after an order is placed.
export const CRYPTO = {
  bitcoinAddress: 'bc1q26x7nc3r2vjzyzjvv2mzg56sudtwum4xteg3hd',
  usdtTrc20Address: 'TXsafxfWLDFPdU8aNNec7fTZH4jkKfWYDP',
  usdtErc20Address: '0xaF80aa1ca688A1318e1F39E273cAf5895bE12749',
};

export const CHAT = {
  channels: [
    { type: 'whatsapp', label: 'WhatsApp Live Support', value: '61420128746', url: 'https://wa.me/61420128746?text=' + encodeURIComponent('Hi Buggies For Sale, ') },
    { type: 'phone', label: 'Call 0420 128 746', value: '0420 128 746', url: 'tel:+61420128746' },
    { type: 'email', label: 'Email Sales & Support', value: 'sales@buggiesforsale.com.au', url: 'mailto:sales@buggiesforsale.com.au' },
    { type: 'sms', label: 'SMS Text Message', value: '0420 128 746', url: 'sms:+61420128746' },
  ],
};

export const BRAND = {
  foundingYear: '2023',
  foundingLocation: 'Sydney, New South Wales, Australia',
  statement: "Buggies For Sale is a Sydney-based Australian retailer of golf buggies, golf carts, off-road buggies and parts, established in 2023. We deliver Australia-wide.",
  knowsAbout: ['golf buggies', 'electric golf buggies', 'remote control golf buggies', 'golf carts', 'lithium golf cart batteries', 'golf cart accessories', 'dune buggies', 'side by side buggies', 'kids buggies', 'go karts'],
  sameAs: [] as string[],
};

// ---------- Structure (locked keyword map)
export const PAGES = structureJson as unknown as SitePage[];
export const pageByUrl = (url: string) => PAGES.find((p) => p.url === url);
export const pageBySlug = (slug: string) => PAGES.find((p) => p.slug === slug.replace(/^\/|\/$/g, ''));
export const childrenOf = (name: string) => PAGES.filter((p) => p.parent === name);
export const brandPages = () => PAGES.filter((p) => p.level === 'brand');
export function breadcrumbsFor(page: SitePage): { name: string; url: string }[] {
  // The locations landing page is a stand-alone geo page (Home > Locations), not a product category.
  if (page.url === '/golf-buggies/for-sale-locations/') return [{ name: 'Locations & Delivery', url: page.url }];
  const trail: { name: string; url: string }[] = [];
  let cur: SitePage | undefined = page;
  while (cur) { trail.unshift({ name: cur.name.replace(/ \(Hub\)$/, ''), url: cur.url }); cur = cur.parent ? PAGES.find((p) => p.name === cur!.parent || p.name.replace(' (LOW DEMAND)', '') === cur!.parent) : undefined; }
  const crumbs = trail.filter((t) => t.url !== '/');
  // Brands and the shop categories sit under the Shop landing page; Home is added by the Breadcrumbs component and the schema.
  const root = crumbs[0];
  return root && root.url !== '/brands/' && !root.url.startsWith('/brands/') ? [{ name: 'Shop', url: '/shop/' }, ...crumbs] : crumbs;
}

// ---------- Catalogue
const rawCatalog = catalogJson as unknown as (Omit<Product, 'description' | 'category' | 'subcategory' | 'tags'> & { description: string[] })[];
export const PRODUCTS: Product[] = rawCatalog
  .filter((p) => p.images && p.images.length > 0)
  .map((p) => {
    const primaryPage = pageByUrl(p.categories[0]);
    const tags = (p as { tags?: string[] }).tags?.length ? (p as { tags?: string[] }).tags! : [...new Set([p.groupLabel, p.brand, ...(primaryPage ? [primaryPage.primary?.keyword || '', ...primaryPage.secondary.map((s) => s.keyword)] : [])])].filter(Boolean).slice(0, 5);
    return {
      ...p,
      paragraphs: p.description,
      description: p.description.join(' '),
      category: p.categories[0],
      subcategory: primaryPage ? primaryPage.name.replace(/ \(Hub\)$/, '') : 'Shop',
      tags,
      leadTime: 'Dispatch within 24-48 business hours',
      featured: ['MGI ZIP X3 Electric Golf Buggy', 'ECAR Lithium Magnum 2S 2 Seat Golf Cart', 'Stinger SG-5 V2 Golf Push Buggy', 'Trailmaster Cheetah 175cc Dune Buggy', 'ECAR Lithium IKON HD 4S 4 Seat Golf Cart', 'MGI Ai Navigator GPS+ Remote Control Golf Buggy', 'Kayo S150 Side by Side Buggy', 'PRO-Li Plus 48V 150Ah Lithium Battery Package for Club Car Precedent'].includes(p.name),
    } as Product;
  });
export const productBySlug = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
export const productsForPage = (page: SitePage): Product[] => {
  if (page.level === 'brand') { const slug = page.slug.split('/').pop(); return PRODUCTS.filter((p) => p.brandPage === slug); }
  if (page.level === 'home') return PRODUCTS;
  return PRODUCTS.filter((p) => p.categories.some((c) => c === page.url || c.startsWith(page.url)));
};
export const money = (n: number) => '$' + n.toLocaleString('en-AU', { minimumFractionDigits: Number.isInteger(n) ? 0 : 2, maximumFractionDigits: 2 });

// ---------- Compatibility exports for the live API layer (MCP / ACP / UCP / search)
export const CATEGORIES: Category[] = PAGES.filter((p) => p.level === 'category' && p.url !== '/brands/').map((p) => ({
  slug: p.slug,
  name: p.name.replace(/ \(Hub\)$/, ''),
  h1: p.h1,
  shortDescription: '',
  introCopy: '',
  subcategories: childrenOf(p.name).map((c) => ({ slug: c.slug, name: c.name, description: '' })),
  image: '',
}));

export { BLOG_POSTS } from '@/content/blog';
export { FAQ_ITEMS } from '@/content/faq';
export const POPULAR_MAKES = ['MGI', 'Stinger', 'PowerBug', 'ECAR', 'Tomberlin', 'Trailmaster', 'Kayo', 'Hammerhead', 'Club Car', 'EZGO', 'Yamaha'];

export const inCategory = (p: Product, slug: string) => p.categories.some((c) => c.replace(/^\/|\/$/g, '').startsWith(slug.replace(/^\/|\/$/g, '')));
