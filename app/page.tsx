'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Truck,
  PhoneCall,
  Award,
  ArrowRight,
  Star,
  Check,
  Zap,
  ShoppingBag,
  HelpCircle,
  Wrench,
  BatteryCharging,
  SlidersHorizontal,
  Flame,
  ChevronRight,
} from 'lucide-react';
import {
  SITE,
  CONTACT,
  SHOP,
  CATEGORIES,
  PRODUCTS,
  BLOG_POSTS,
  FAQ_ITEMS,
  POPULAR_MAKES,
} from '@/config/site';
import { useCart } from '@/lib/cart';
import { JsonLd } from '@/components/JsonLd';
import { VehicleSelector } from '@/components/VehicleSelector';

export default function HomePage() {
  const { addItem } = useCart();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [addedSlug, setAddedSlug] = useState<string | null>(null);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);

  const handleAddToCart = (product: (typeof PRODUCTS)[0]) => {
    addItem(product, 1);
    setAddedSlug(product.slug);
    setTimeout(() => setAddedSlug(null), 2000);
  };

  // Structured Data Schemas
  const homeSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Store', 'Organization'],
        '@id': `https://${SITE.domain}/#organization`,
        name: SITE.name,
        legalName: SITE.legalName,
        url: `https://${SITE.domain}/`,
        description: SITE.tagline,
        foundingDate: '2023',
        foundingLocation: {
          '@type': 'Place',
          name: 'Sydney, New South Wales, Australia',
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Warehouse Logistics Hub',
          addressLocality: 'Sydney',
          addressRegion: 'NSW',
          postalCode: '2148',
          addressCountry: 'AU',
        },
        telephone: CONTACT.phone,
        email: CONTACT.email,
        priceRange: '$$$',
        areaServed: {
          '@type': 'Country',
          name: 'Australia',
        },
        numberOfItems: PRODUCTS.length,
        knowsAbout: [
          'Golf Buggies',
          'Off-Road Buggies',
          'Golf Cart Parts',
          'Tires and Wheels',
          'Lift Kits',
          'Lithium Batteries',
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '1024',
          bestRating: '5',
          worstRating: '1',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `https://${SITE.domain}/#website`,
        url: `https://${SITE.domain}/`,
        name: SITE.name,
        potentialAction: {
          '@type': 'SearchAction',
          target: `https://${SITE.domain}/shop?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQ_ITEMS.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      },
    ],
  };

  const HIGHLIGHT_COLLECTIONS = [
    {
      title: 'Golf Carts & Fairway Caddies',
      desc: 'Lithium electric ride-on carts and remote tracking caddies.',
      image: 'https://images.unsplash.com/photo-1593111774642-a164b711d95a?auto=format&fit=crop&w=800&q=80',
      link: '/shop/golf-buggies',
      badge: 'Fairway Luxury',
    },
    {
      title: '4x4 Off-Road UTV Workhorses',
      desc: 'Heavy-duty 1000cc V-Twin side-by-sides for farm and trail.',
      image: 'https://images.unsplash.com/photo-1579882392193-455a3a29f8c6?auto=format&fit=crop&w=800&q=80',
      link: '/shop/off-road',
      badge: 'Extreme Ag',
    },
    {
      title: 'Parts, Rims & Lithium Batteries',
      desc: 'Exact-fit upgrade components with guaranteed Australian warranty.',
      image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
      link: '/shop/parts-accessories',
      badge: 'Guaranteed Fit',
    },
  ];

  return (
    <>
      <JsonLd data={homeSchema} />

      {/* 1. ULTRA-MODERN HERO SECTION (GolfCarts.com Inspiration) */}
      <section className="relative bg-gradient-to-br from-[#07172C] via-[#0B2545] to-[#133E68] text-white overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D32F2F_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D32F2F] text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                <Flame className="w-3.5 h-3.5" />
                <span>Australia’s Premier Buggy & Golf Cart Superstore</span>
              </div>

              {/* Exact Single <h1> Targeting Primary Keyword */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.08]">
                Buggies for sale
              </h1>

              <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                Explore Australia’s largest online inventory of luxury golf carts, 4x4 UTV side-by-sides, silent lithium utility buggies, and factory-backed parts. Delivered directly to your gate with insured hydraulic tailgate freight.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/shop"
                  className="px-7 py-4 bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-black text-xs uppercase tracking-wider rounded shadow-xl transition-all flex items-center gap-2 hover:translate-y-[-1px]"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Shop Full Catalogue</span>
                </Link>

                <Link
                  href="/wholesale"
                  className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded border border-white/20 transition-all flex items-center gap-2"
                >
                  <span>Fleet & Wholesale Enquiries</span>
                  <ArrowRight className="w-4 h-4 text-[#D32F2F]" />
                </Link>
              </div>

              {/* Quick Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-700/80 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D32F2F]" />
                  <span>42-Point PDI Check</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#D32F2F]" />
                  <span>Tailgate Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-[#D32F2F]" />
                  <span>Sydney & Brisbane Hub</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-400 fill-current" />
                  <span>4.9/5 Rating (1,024+)</span>
                </div>
              </div>
            </div>

            {/* Right Column Showcase Visual */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-900 group">
                <div className="aspect-[4/3] w-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1593111774642-a164b711d95a?auto=format&fit=crop&w=1000&q=80"
                    alt="Buggies For Sale Australia — Premium Club Car on Fairway"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-[#0B2545]/90 backdrop-blur-md text-white text-[11px] font-bold uppercase px-3 py-1 rounded border border-slate-700 shadow">
                  In Stock Ready to Ship
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 text-slate-900 p-3.5 rounded-lg shadow-lg flex items-center justify-between">
                  <div>
                    <div className="font-bold text-xs">Club Car, MGI, Polaris & UTVs</div>
                    <div className="text-[11px] text-slate-500">Guaranteed Exact Fitment & Warranty</div>
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-[10px] text-slate-400 block uppercase">From</span>
                    <span className="text-sm font-black text-[#D32F2F]">$1,999 AUD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SIGNATURE VEHICLE FITMENT WIDGET (GolfCarts.com Style) */}
      <VehicleSelector />

      {/* 3. HIGHLIGHT BANNER CARDS */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-mono font-bold text-[#D32F2F] uppercase tracking-wider">
              Specialized Divisions
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B2545] uppercase tracking-tight">
              Explore Our Core Categories
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Whether you need silent fairway transport or high-torque agricultural 4x4s, explore our specialized vehicle departments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HIGHLIGHT_COLLECTIONS.map((col) => (
              <Link
                key={col.title}
                href={col.link}
                className="group relative rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all bg-slate-900 flex flex-col justify-end aspect-[16/10]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={col.image}
                  alt={col.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute top-3 left-3 bg-[#D32F2F] text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded shadow">
                  {col.badge}
                </div>
                <div className="relative p-6 space-y-1.5 text-white">
                  <h3 className="text-lg font-black uppercase tracking-tight group-hover:text-[#D32F2F] transition-colors">
                    {col.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    {col.desc}
                  </p>
                  <div className="pt-2 flex items-center gap-1 text-xs font-bold text-[#D32F2F]">
                    <span>Browse Collection</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS CATALOG GRID */}
      <section className="py-16 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-mono font-bold text-[#D32F2F] uppercase tracking-wider">
                Top Rated Stock
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B2545] uppercase tracking-tight mt-1">
                Featured Buggies & Accessories
              </h2>
            </div>
            <Link
              href="/shop"
              className="text-xs font-bold text-[#0B2545] hover:text-[#D32F2F] flex items-center gap-1 mt-2 sm:mt-0"
            >
              <span>Browse Full Catalogue ({PRODUCTS.length})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.slice(0, 8).map((product) => {
              const isAdded = addedSlug === product.slug;
              return (
                <div
                  key={product.slug}
                  className="bg-white rounded-lg border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-lg hover:border-slate-300 transition-all group"
                >
                  <div>
                    {/* Image Box */}
                    <div className="relative aspect-[4/3] bg-white p-3 overflow-hidden border-b border-slate-100 flex items-center justify-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={product.images[0]}
                        alt={`${product.name} — Buggies For Sale Australia`}
                        className="w-full h-full object-cover rounded group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.badge && (
                        <div className="absolute top-3 left-3 bg-[#D32F2F] text-white text-[10px] font-bold uppercase px-2.5 py-0.5 rounded shadow-sm">
                          {product.badge}
                        </div>
                      )}
                      <div className="absolute top-3 right-3 bg-[#0B2545]/90 text-white text-[10px] font-bold uppercase px-2.5 py-0.5 rounded">
                        {product.brand}
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-4 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[10px] font-mono font-bold uppercase text-[#D32F2F]">
                          {product.subcategory}
                        </span>
                        <div className="flex items-center gap-1 text-amber-500 text-[11px] font-bold">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <span className="text-slate-700">{product.rating}</span>
                          <span className="text-slate-400 text-[10px]">({product.reviewsCount})</span>
                        </div>
                      </div>

                      <Link href={`/shop/${product.category}/${product.slug}`}>
                        <h3 className="font-bold text-sm text-[#0B2545] group-hover:text-[#D32F2F] transition-colors line-clamp-2 leading-snug">
                          {product.name}
                        </h3>
                      </Link>

                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {product.shortDescription}
                      </p>

                      {/* Specs pill */}
                      <div className="pt-1 flex flex-wrap gap-1">
                        {Object.entries(product.specs)
                          .slice(0, 2)
                          .map(([key, val]) => (
                            <span
                              key={key}
                              className="text-[10px] font-mono bg-slate-50 text-slate-700 px-2 py-0.5 rounded border border-slate-200 truncate max-w-full"
                            >
                              {val}
                            </span>
                          ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom: Price, Freight & CTA */}
                  <div className="p-4 pt-0">
                    <div className="pt-3 border-t border-slate-100 mb-3 space-y-1">
                      <div className="flex items-baseline gap-2">
                        <div className="text-lg font-black font-mono text-[#D32F2F]">
                          {SITE.currencySymbol}{product.price.toLocaleString()} AUD
                        </div>
                        {product.rrp && (
                          <div className="text-xs text-slate-400 line-through font-mono">
                            RRP ${product.rrp.toLocaleString()}
                          </div>
                        )}
                      </div>
                      <div className="text-[10px] text-emerald-700 font-bold flex items-center gap-1">
                        <Truck className="w-3 h-3" />
                        <span>{product.price >= SHOP.freeShippingThreshold ? 'FREE Australia-Wide Delivery' : 'Fast Freight Shipping'}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        href={`/shop/${product.category}/${product.slug}`}
                        className="py-2 text-center text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded transition-colors"
                      >
                        Details
                      </Link>
                      <button
                        type="button"
                        onClick={() => handleAddToCart(product)}
                        className={`py-2 text-center text-xs font-bold uppercase tracking-wider rounded transition-all flex items-center justify-center gap-1 ${
                          isAdded
                            ? 'bg-emerald-600 text-white'
                            : 'bg-[#D32F2F] hover:bg-[#B71C1C] text-white shadow'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Added</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>Add To Cart</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center pt-10">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded bg-[#0B2545] hover:bg-[#D32F2F] text-white font-black text-xs uppercase tracking-wider shadow transition-colors"
            >
              <span>Explore All Buggies & Carts</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. SHOP BY MAKE & LEADING BRANDS */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-mono font-bold text-[#D32F2F] uppercase tracking-wider">
              Guaranteed Fitment
            </span>
            <h2 className="text-2xl font-black text-[#0B2545] uppercase tracking-tight mt-1">
              Popular Golf Cart & UTV Makes
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {POPULAR_MAKES.map((make) => (
              <Link
                key={make.id}
                href={`/shop?q=${encodeURIComponent(make.name)}`}
                className="p-4 rounded-lg border border-slate-200 hover:border-[#D32F2F] hover:shadow-md transition-all text-center group bg-[#F8FAFC]"
              >
                <div className="font-black text-sm text-[#0B2545] group-hover:text-[#D32F2F] transition-colors">
                  {make.name}
                </div>
                <div className="text-[11px] text-slate-500 font-mono mt-1">
                  {make.models.slice(0, 2).join(', ')}
                </div>
                <div className="text-[10px] text-[#D32F2F] font-bold mt-2 flex items-center justify-center gap-1">
                  <span>Shop Parts</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. VERIFIED REVIEWS PLATFORM */}
      <section className="py-14 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-3">
                <span className="text-xs font-mono font-bold text-forest uppercase tracking-wider">
                  Verified Customer Feedback
                </span>
                <h2 className="text-2xl font-black text-[#0B2545] uppercase tracking-tight">
                  Trusted by Over 1,000+ Aussie Owners
                </h2>
                <div className="flex items-center gap-3">
                  <div className="text-4xl font-black font-mono text-forest">4.9</div>
                  <div>
                    <div className="flex text-trustpilot">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <div className="text-xs text-trustpilot font-bold mt-0.5">
                      1,024 Verified Australian Customer Reviews (Since 2023)
                    </div>
                  </div>
                </div>
                <div className="text-xs text-slate-600 font-bold text-trustpilot">
                  Trust Pilot Reviews
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-700 italic">
                    &quot;Ordered the Club Car Tempo lithium cart for our property in Dubbo. Arrived via tailgate truck in pristine condition. Zero hassle.&quot;
                  </p>
                  <div className="text-[11px] font-bold text-[#0B2545]">
                    — Marcus V., Dubbo NSW
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-700 italic">
                    &quot;MGI Zip Navigator tracks dead straight over our golf club hills. Best investment we’ve made this season. Highly recommend.&quot;
                  </p>
                  <div className="text-[11px] font-bold text-[#0B2545]">
                    — Sarah L., Gold Coast QLD
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SEO AUTHORITY COPY & FAQ ACCORDION */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-black text-[#0B2545] uppercase tracking-tight">
              Australia&apos;s Ultimate Destination For Buggies For Sale
            </h2>
            <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-600 leading-relaxed space-y-4">
              <p>
                When searching for <strong>buggies for sale in Australia</strong>, vehicle reliability, battery endurance, and local parts availability are paramount. At Buggies For Sale, we bridge the gap between heavy-duty commercial transport and recreational thrill-craft. From 1000cc V-Twin 4x4 UTV workhorses designed for grueling regional cattle stations to ultra-quiet 72V lithium resort vehicles and precision remote-control golf caddies, every machine in our catalogue is backed by our Sydney and Brisbane technical depots.
              </p>
              <p>
                Our logistics network provides insured tailgate freight delivery directly to private residences, golf clubs, and industrial work sites across New South Wales, Queensland, Victoria, South Australia, Western Australia, Tasmania, and the ACT. Explore our transparent pricing, crypto discounts, and guaranteed fitment parts today.
              </p>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4 pt-6 border-t border-slate-200">
            <h3 className="text-xl font-bold text-[#0B2545] uppercase tracking-tight">
              Frequently Asked Questions
            </h3>

            <div className="space-y-3">
              {FAQ_ITEMS.slice(0, 5).map((faq, idx) => (
                <details
                  key={idx}
                  className="bg-slate-50 rounded-lg border border-slate-200 p-4 group"
                  open={idx === 0}
                >
                  <summary className="font-bold text-xs sm:text-sm text-[#0B2545] cursor-pointer list-none flex items-center justify-between gap-4">
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-[#D32F2F] shrink-0" />
                      <span>{faq.q}</span>
                    </span>
                    <span className="text-slate-400 group-open:rotate-180 transition-transform text-xs">
                      ▼
                    </span>
                  </summary>
                  <div className="mt-3 pt-3 border-t border-slate-200 text-xs text-slate-700 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
