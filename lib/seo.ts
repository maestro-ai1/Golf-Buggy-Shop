import type { Metadata } from 'next';
import { BRAND, CONTACT, SITE, type Product, type SitePage } from '@/config/site';

export const abs = (path: string) => SITE.url + (path.startsWith('/') ? path : '/' + path);
export const clampDesc = (s: string, min = 110, max = 158) => {
  let t = s.replace(/\s+/g, ' ').trim();
  if (t.length > max) { t = t.slice(0, max - 1); t = t.slice(0, t.lastIndexOf(' ')).replace(/[,;:\-–]$/, '') + '.'; }
  return t.length >= min ? t : t;
};

export function meta({ title, description, path, image, noindex = false, type = 'website' }: { title: string; description: string; path: string; image?: string; noindex?: boolean; type?: 'website' | 'article' }): Metadata {
  const img = image ? abs(image) : abs('/og-default.png');
  const BR = ' | Buggies For Sale';
  let t = title; if (!t.includes('Buggies For Sale') && t.length + BR.length <= 60) t += BR; if (t.length > 60) t = t.replace(/ | Buggies For Sale$/, '');
  title = t;
  return {
    title: { absolute: t }, description: clampDesc(description),
    alternates: { canonical: abs(path) },
    robots: noindex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: { type, siteName: SITE.name, title: t, description: clampDesc(description), url: abs(path), images: [{ url: img, width: 1200, height: 630 }], locale: 'en_AU' },
    twitter: { card: 'summary_large_image', title: t, description: clampDesc(description), images: [img] },
    other: { 'og:updated_time': new Date().toISOString().slice(0, 10) },
  };
}

export const orgSchema = () => ({
  '@context': 'https://schema.org',
  '@type': ['Store', 'Organization'],
  '@id': abs('/#org'),
  name: SITE.name, legalName: SITE.legalName, url: SITE.url, logo: abs('/icon.svg'),
  description: BRAND.statement, foundingDate: BRAND.foundingYear,
  foundingLocation: { '@type': 'Place', name: BRAND.foundingLocation },
  address: { '@type': 'PostalAddress', addressLocality: 'Sydney', addressRegion: 'NSW', addressCountry: 'AU' },
  areaServed: { '@type': 'Country', name: 'Australia' },
  telephone: CONTACT.phoneInternational, email: CONTACT.email, taxID: CONTACT.abn,
  priceRange: '$$-$$$$', knowsAbout: BRAND.knowsAbout,
  contactPoint: [{ '@type': 'ContactPoint', telephone: CONTACT.phoneInternational, email: CONTACT.email, contactType: 'sales', areaServed: 'AU', availableLanguage: 'English' }],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: SITE.trustpilotScore, reviewCount: SITE.trustpilotTotalReviews, bestRating: 5 },
});

export const siteSchema = () => ({
  '@context': 'https://schema.org', '@type': 'WebSite', '@id': abs('/#website'), url: SITE.url, name: SITE.name, inLanguage: 'en-AU',
  publisher: { '@id': abs('/#org') },
  potentialAction: { '@type': 'SearchAction', target: { '@type': 'EntryPoint', urlTemplate: abs('/search/?q={search_term_string}') }, 'query-input': 'required name=search_term_string' },
});

export const crumbSchema = (trail: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Home', url: '/' }, ...trail].map((t, i) => ({ '@type': 'ListItem', position: i + 1, name: t.name, item: abs(t.url) })),
});

export const faqSchema = (items: [string, string][]) => ({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: items.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) });

export const productSchema = (p: Product) => ({
  '@context': 'https://schema.org', '@type': 'Product', '@id': abs(`/products/${p.slug}/`),
  name: p.name, description: p.shortDescription, sku: p.sku, brand: { '@type': 'Brand', name: p.brand },
  image: p.images.map((i) => abs(i + '.webp')), category: p.subcategory,
  offers: { '@type': 'Offer', url: abs(`/products/${p.slug}/`), priceCurrency: 'AUD', price: String(p.price), priceValidUntil: new Date(Date.now() + 90 * 864e5).toISOString().slice(0, 10), itemCondition: 'https://schema.org/NewCondition', availability: 'https://schema.org/InStock', seller: { '@id': abs('/#org') },
    shippingDetails: { '@type': 'OfferShippingDetails', shippingDestination: { '@type': 'DefinedRegion', addressCountry: 'AU' }, shippingRate: { '@type': 'MonetaryAmount', value: p.price >= 1000 ? '0' : '95', currency: 'AUD' } } },
});

export const listSchema = (page: SitePage, items: { name: string; slug: string }[]) => ({
  '@context': 'https://schema.org', '@type': 'CollectionPage', name: page.h1, url: abs(page.url),
  mainEntity: { '@type': 'ItemList', numberOfItems: items.length, itemListElement: items.slice(0, 24).map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: abs(`/products/${p.slug}/`), name: p.name })) },
});
