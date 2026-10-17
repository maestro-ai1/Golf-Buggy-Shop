import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { PRODUCTS, CATEGORIES, SITE, CONTACT, SHOP, Product } from '@/config/site';
import { JsonLd } from '@/components/JsonLd';
import { ProductDetailClient } from './ProductDetailClient';

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({
    category: p.category,
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return {};

  return {
    title: `${product.name} | Buy Online Australia`,
    description: `${product.shortDescription} Price: $${product.price.toLocaleString()} AUD. Australia-wide insured freight delivery & 42-point PDI inspection.`,
    alternates: {
      canonical: `https://${SITE.domain}/shop/${product.category}/${product.slug}/`,
    },
    openGraph: {
      title: `${product.name} | Buy Online Australia`,
      description: product.shortDescription,
      url: `https://${SITE.domain}/shop/${product.category}/${product.slug}/`,
      type: 'website',
      images: [
        {
          url: product.images[0],
          width: 800,
          height: 600,
          alt: `${product.name} - Buggies For Sale Australia`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | Buy Online Australia`,
      description: product.shortDescription,
      images: [product.images[0]],
    },
    other: {
      'og:updated_time': new Date().toISOString(),
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { category: catSlug, slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  const category = CATEGORIES.find((c) => c.slug === catSlug) || CATEGORIES[0];
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  ).slice(0, 4);

  // Valid Schema JSON-LD
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.images,
    description: product.description,
    sku: `BFS-${product.slug.toUpperCase()}`,
    brand: {
      '@type': 'Brand',
      name: product.brand,
    },
    offers: {
      '@type': 'Offer',
      url: `https://${SITE.domain}/shop/${product.category}/${product.slug}/`,
      priceCurrency: 'AUD',
      price: product.price,
      priceValidUntil: '2027-12-31',
      itemCondition: 'https://schema.org/NewCondition',
      availability: product.inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: SITE.name,
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating.toString(),
      reviewCount: product.reviewsCount.toString(),
      bestRating: '5',
      worstRating: '1',
    },
  };

  const breadcrumbsSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `https://${SITE.domain}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Shop',
        item: `https://${SITE.domain}/shop/`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: category.name,
        item: `https://${SITE.domain}/shop/${category.slug}/`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: product.name,
        item: `https://${SITE.domain}/shop/${category.slug}/${product.slug}/`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={[productSchema, breadcrumbsSchema]} />

      <div className="bg-[#F4F1EA] min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="text-xs text-stone-500 font-mono mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-stone-900">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/shop" className="hover:text-stone-900">
              Shop
            </Link>
            <span className="mx-2">/</span>
            <Link href={`/shop/${category.slug}`} className="hover:text-stone-900">
              {category.name}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#1A1A1A] font-bold truncate max-w-xs inline-block align-bottom">
              {product.name}
            </span>
          </nav>

          {/* Interactive Client Component: Gallery, Selectors, Postcode Calc, Add to Cart */}
          <ProductDetailClient
            product={product}
            category={category}
            relatedProducts={relatedProducts}
          />
        </div>
      </div>
    </>
  );
}
