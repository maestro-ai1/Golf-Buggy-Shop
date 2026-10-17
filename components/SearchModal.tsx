'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, X, ArrowRight, Tag } from 'lucide-react';
import { PRODUCTS, CATEGORIES, SITE } from '@/config/site';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProducts = query.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.brand.toLowerCase().includes(query.toLowerCase()) ||
          p.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
          p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  const matchedCategories = query.trim()
    ? CATEGORIES.filter(
        (c) =>
          c.name.toLowerCase().includes(query.toLowerCase()) ||
          c.shortDescription.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-[#FFFFFF] border-2 border-[#1A1A1A] shadow-2xl rounded-xl w-full max-w-2xl overflow-hidden text-[#1A1A1A]"
        role="dialog"
        aria-modal="true"
        aria-label="Search Buggies"
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#E2DCD5] bg-[#F4F1EA]">
          <Search className="w-5 h-5 text-[#E65F2B] shrink-0" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search buggies for sale, golf carts, UTVs, parts..."
            className="w-full bg-transparent border-none text-[#1A1A1A] placeholder-stone-400 text-sm sm:text-base focus:outline-none"
            autoFocus
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-stone-400 hover:text-stone-700 p-1"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="text-xs bg-[#1A1A1A] text-white px-2.5 py-1 rounded font-mono hover:bg-[#E65F2B] transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[65vh] overflow-y-auto p-4 space-y-4">
          {query.trim() === '' ? (
            <div className="space-y-4 text-xs text-stone-500 py-4">
              <p className="font-semibold text-stone-700 uppercase tracking-wider text-[11px]">
                Popular Searches
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Buggies for sale',
                  '4x4 UTV',
                  'Remote golf buggy',
                  'Kids buggy with remote kill',
                  'Lithium golf battery',
                  'Dune buggy go-kart',
                  'MGI Zip Navigator',
                  'Silent electric hunting buggy',
                ].map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => setQuery(term)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F4F1EA] hover:bg-[#E2DCD5] text-stone-800 transition-colors text-xs border border-[#E2DCD5]"
                  >
                    <Tag className="w-3 h-3 text-[#E65F2B]" />
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {matchedCategories.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">
                    Categories ({matchedCategories.length})
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {matchedCategories.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/shop/${c.slug}`}
                        onClick={onClose}
                        className="p-3 bg-[#F4F1EA] hover:bg-[#EDE8DE] rounded-lg border border-[#E2DCD5] flex items-center justify-between group transition-colors"
                      >
                        <div>
                          <div className="font-semibold text-sm text-[#1A1A1A] group-hover:text-[#E65F2B]">
                            {c.name}
                          </div>
                          <div className="text-[11px] text-stone-500 line-clamp-1">
                            {c.shortDescription}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#E65F2B] transition-transform group-hover:translate-x-1" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {filteredProducts.length > 0 ? (
                <div>
                  <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">
                    Products ({filteredProducts.length})
                  </h3>
                  <div className="space-y-2">
                    {filteredProducts.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/shop/${p.category}/${p.slug}`}
                        onClick={onClose}
                        className="flex items-center gap-3 p-2.5 rounded-lg border border-[#E2DCD5] hover:border-[#1A1A1A] bg-white transition-all group"
                      >
                        <div className="w-14 h-12 bg-[#F4F1EA] rounded overflow-hidden shrink-0 border border-stone-200 flex items-center justify-center">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={p.images[0]}
                            alt={p.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm text-[#1A1A1A] group-hover:text-[#E65F2B] truncate">
                            {p.name}
                          </div>
                          <div className="text-xs text-stone-500 truncate">
                            {p.brand} • {p.shortDescription}
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="font-bold text-sm text-[#E65F2B]">
                            {SITE.currencySymbol}
                            {p.price.toLocaleString()}
                          </div>
                          {p.rrp && (
                            <div className="text-[11px] text-stone-400 line-through">
                              {SITE.currencySymbol}
                              {p.rrp.toLocaleString()}
                            </div>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-stone-500 text-sm">
                  No buggies or parts matched &ldquo;{query}&rdquo;.
                  <div className="mt-2 text-xs">
                    Try searching for &quot;UTV&quot;, &quot;Golf&quot;, &quot;Electric&quot;, or &quot;Remote&quot;.
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
