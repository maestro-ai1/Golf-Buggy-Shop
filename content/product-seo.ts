import { PART_A } from '@/content/product-seo-a';
import { PART_B } from '@/content/product-seo-b';
import { PART_C } from '@/content/product-seo-c';
import { PART_D } from '@/content/product-seo-d';
import { PART_E } from '@/content/product-seo-e';
import { PART_F } from '@/content/product-seo-f';
import { PART_G } from '@/content/product-seo-g';
import { PART_H } from '@/content/product-seo-h';
import { PART_I } from '@/content/product-seo-i';

// Batch 5: per-product keyword map and copy. One keyword = one URL; every keyword here is unique across pages, products and blog targets.
export type ProductSEO = {
  primary: string;
  secondary: string[];
  lead: string; // replaces the short description under the H1; contains the primary
  sec: [string, string][]; // extra H2 sections (heading, paragraph) carrying the secondaries
  faq: [string, string][]; // five FAQs, each carrying a keyword and, where it helps, an internal link
};

export const PRODUCT_SEO: Record<string, ProductSEO> = { ...PART_A, ...PART_B, ...PART_C, ...PART_D, ...PART_E, ...PART_F, ...PART_G, ...PART_H, ...PART_I };

export const fillPrice = (t: string, price: string) => t.replace(/\{price\}/g, price);
