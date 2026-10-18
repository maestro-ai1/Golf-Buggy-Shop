// Buyer-question layer: supporting keywords from the keyword ledger are placed in real question-and-answer pairs on the page that owns them (Golden Keyword Rule:
// supporting keywords go in body, H2, FAQ and alt text, each used naturally, one keyword = one URL). Content lives in data/support-faqs.json.
// Answers may use {count}, {from} and {to}: the number of products on the page and the lowest and highest GST-inclusive price, filled from the live catalogue.
import raw from '@/data/support-faqs.json';
import { money, type Product } from '@/config/site';

type Item = { q: string; a: string };
const DATA = raw as Record<string, Item[]>;

export function supportFaqsFor(url: string, products: Pick<Product, 'price'>[]): [string, string][] {
  const items = DATA[url] || [];
  if (!items.length) return [];
  const prices = products.map((p) => p.price).sort((a, b) => a - b);
  const fill = (s: string) => s.replace(/\{count\}/g, String(products.length)).replace(/\{from\}/g, prices.length ? money(prices[0]) : '').replace(/\{to\}/g, prices.length ? money(prices[prices.length - 1]) : '');
  return items.map((i) => [fill(i.q), fill(i.a)] as [string, string]);
}
