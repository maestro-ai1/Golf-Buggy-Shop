'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Search, ShoppingBag, ArrowRight, Tag, Star, Check } from 'lucide-react';
import { PRODUCTS, CATEGORIES, SITE, Product } from '@/config/site';
import { useCart } from '@/lib/cart';

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const { addItem } = useCart();
  const [addedSlug, setAddedSlug] = useState<string | null>(null);

  const matchedProducts = query.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.brand.toLowerCase().includes(query.toLowerCase()) ||
          p.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
          p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      )
    : PRODUCTS;

  const handleAdd = (product: Product) => {
    addItem(product, 1);
    setAddedSlug(product.slug);
    setTimeout(() => setAddedSlug(null), 1800);
  };

  return (
    <div className="bg-[#F4F1EA] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <nav className="text-xs text-stone-500 font-mono" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-stone-900">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#1A1A1A] font-bold">Search Results</span>
        </nav>

        <div className="bg-white rounded-2xl border-2 border-[#1A1A1A] p-6 sm:p-8 shadow-sm space-y-4">
          <h1 className="text-2xl sm:text-4xl font-black text-[#1A1A1A] uppercase tracking-tight">
            Search Results for &ldquo;{query || 'All Products'}&rdquo;
          </h1>
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search golf buggies, 4x4 UTVs, parts..."
              className="flex-1 px-4 py-2.5 text-xs border border-stone-300 rounded-lg focus:outline-none focus:border-[#E65F2B]"
            />
            <span className="text-xs font-mono font-bold text-stone-500">
              {matchedProducts.length} items found
            </span>
          </div>
        </div>

        {matchedProducts.length === 0 ? (
          <div className="bg-white rounded-2xl border-2 border-[#1A1A1A] p-12 text-center space-y-3">
            <h3 className="font-bold text-base text-stone-900 uppercase">
              No matching products found
            </h3>
            <p className="text-xs text-stone-500 max-w-sm mx-auto">
              Try searching broader terms like &quot;Club Car&quot;, &quot;battery&quot;, &quot;lift kit&quot;, or &quot;utility&quot;.
            </p>
            <Link
              href="/shop"
              className="inline-block mt-2 px-6 py-2.5 bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-wider rounded-lg"
            >
              View Full Catalogue
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {matchedProducts.map((product) => {
              const isAdded = addedSlug === product.slug;
              return (
                <div
                  key={product.slug}
                  className="bg-white rounded-xl border-2 border-[#1A1A1A] overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all group"
                >
                  <div>
                    <div className="relative aspect-[4/3] bg-[#F4F1EA] overflow-hidden border-b-2 border-[#1A1A1A]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {product.badge && (
                        <div className="absolute top-2.5 left-2.5 bg-[#E65F2B] text-white text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded shadow">
                          {product.badge}
                        </div>
                      )}
                    </div>
                    <div className="p-4 space-y-2">
                      <div className="text-[10px] font-mono text-stone-500 font-bold uppercase">
                        {product.brand} • {product.subcategory}
                      </div>
                      <Link href={`/shop/${product.category}/${product.slug}`}>
                        <h3 className="font-bold text-sm text-[#1A1A1A] group-hover:text-[#E65F2B] transition-colors line-clamp-2">
                          {product.name}
                        </h3>
                      </Link>
                      <div className="text-sm font-black font-mono text-[#E65F2B]">
                        {SITE.currencySymbol}
                        {product.price.toLocaleString()} AUD
                      </div>
                    </div>
                  </div>
                  <div className="p-4 pt-0">
                    <button
                      type="button"
                      onClick={() => handleAdd(product)}
                      className={`w-full py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors border-2 border-[#1A1A1A] ${
                        isAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-[#1A1A1A] hover:bg-[#E65F2B] text-white shadow'
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
                          <span>Add to Cart</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-xs font-mono">Loading search...</div>}>
      <SearchResultsContent />
    </Suspense>
  );
}
