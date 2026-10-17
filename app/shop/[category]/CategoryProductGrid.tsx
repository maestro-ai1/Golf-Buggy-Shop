'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Check, Star, ArrowRight, Truck } from 'lucide-react';
import { Product, Category, SITE, SHOP } from '@/config/site';
import { useCart } from '@/lib/cart';

interface Props {
  products: Product[];
  category: Category;
}

export function CategoryProductGrid({ products, category }: Props) {
  const { addItem } = useCart();
  const [addedSlug, setAddedSlug] = useState<string | null>(null);

  const handleAdd = (product: Product) => {
    addItem(product, 1);
    setAddedSlug(product.slug);
    setTimeout(() => setAddedSlug(null), 1800);
  };

  if (products.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-slate-200 p-12 text-center shadow-sm">
        <h3 className="font-bold text-base text-slate-900">
          New shipment arriving for {category.name}
        </h3>
        <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
          Contact our Australian sales desk on 0420 128 746 for upcoming container arrivals and pre-orders.
        </p>
        <Link
          href="/shop"
          className="inline-block mt-4 px-5 py-2.5 bg-[#0B2545] hover:bg-[#D32F2F] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors"
        >
          View All Current Stock
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => {
        const isAdded = addedSlug === product.slug;
        return (
          <div
            key={product.slug}
            className="bg-white rounded-lg border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-lg hover:border-slate-300 transition-all group"
          >
            <div>
              {/* Product Image */}
              <div className="relative aspect-[4/3] bg-white p-3 overflow-hidden border-b border-slate-100 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.images[0]}
                  alt={`${product.name} - Buggies For Sale Australia`}
                  className="w-full h-full object-cover rounded group-hover:scale-105 transition-transform duration-300"
                />
                {product.badge && (
                  <div className="absolute top-3 left-3 bg-[#D32F2F] text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded shadow-sm">
                    {product.badge}
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-[#0B2545]/90 text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded">
                  {product.brand}
                </div>
              </div>

              {/* Product Info */}
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

                {/* Specs quick tags */}
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

            {/* Bottom: Price, Stock & Buttons */}
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
                  onClick={() => handleAdd(product)}
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
  );
}
