'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Filter,
  Search,
  SlidersHorizontal,
  Star,
  ShoppingBag,
  Check,
  Eye,
  X,
  ArrowRight,
  ShieldCheck,
  Truck,
  Wrench,
} from 'lucide-react';
import { PRODUCTS, CATEGORIES, SITE, Product, SHOP, POPULAR_MAKES } from '@/config/site';
import { useCart } from '@/lib/cart';
import { VehicleSelector } from '@/components/VehicleSelector';

export default function ShopPage() {
  const { addItem, subtotal, totalCount, setIsOpen: openCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedMake, setSelectedMake] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [maxPrice, setMaxPrice] = useState<number>(25000);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [addedSlug, setAddedSlug] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
      if (selectedMake !== 'all' && p.brand.toLowerCase() !== selectedMake.toLowerCase()) return false;
      if (inStockOnly && !p.inStock) return false;
      if (p.price > maxPrice) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesBrand = p.brand.toLowerCase().includes(q);
        const matchesDesc = p.shortDescription.toLowerCase().includes(q);
        const matchesTag = p.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchesName && !matchesBrand && !matchesDesc && !matchesTag) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, selectedMake, searchQuery, sortBy, inStockOnly, maxPrice]);

  const handleAdd = (product: Product) => {
    addItem(product, 1);
    setAddedSlug(product.slug);
    setTimeout(() => setAddedSlug(null), 1800);
  };

  return (
    <>
      <VehicleSelector />

      <div className="bg-[#F8FAFC] min-h-screen py-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Breadcrumb & Title */}
          <div className="mb-6">
            <nav className="text-xs text-slate-500 font-mono mb-2" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-slate-900">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-[#0B2545] font-bold">Shop Buggies</span>
            </nav>

            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-4xl font-black text-[#0B2545] tracking-tight uppercase">
                  Buggies For Sale Catalogue
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                  Shop certified golf buggies, 4x4 UTV workhorses, dune go-karts, lithium conversions, and replacement parts with nationwide freight delivery.
                </p>
              </div>

              {/* Sort By Dropdown */}
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-bold text-slate-500 uppercase">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-white border border-slate-200 text-xs font-bold text-slate-800 rounded px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D32F2F]"
                >
                  <option value="featured">Featured First</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>

          {/* Category Tabs Strip */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 border-b border-slate-200 no-scrollbar">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider shrink-0 transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#0B2545] text-white shadow'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              All Buggies ({PRODUCTS.length})
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                type="button"
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider shrink-0 transition-all ${
                  selectedCategory === cat.slug
                    ? 'bg-[#D32F2F] text-white shadow'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Main Layout: Sidebar Filters + Products Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Filter Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="font-bold text-xs uppercase tracking-wider text-[#0B2545] flex items-center gap-2">
                    <Filter className="w-4 h-4 text-[#D32F2F]" />
                    Filter Catalog
                  </span>
                  {(searchQuery || selectedCategory !== 'all' || selectedMake !== 'all' || inStockOnly || maxPrice < 25000) && (
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCategory('all');
                        setSelectedMake('all');
                        setSearchQuery('');
                        setInStockOnly(false);
                        setMaxPrice(25000);
                      }}
                      className="text-[11px] text-[#D32F2F] hover:underline font-bold"
                    >
                      Reset
                    </button>
                  )}
                </div>

                {/* Keyword Search */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-700 block">
                    Search Keyword / Model
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="e.g. Club Car, Lithium, Winch..."
                      className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-[#D32F2F]"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery('')}
                        className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Make / Brand Filter */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-700 block">
                    Filter By Make
                  </label>
                  <div className="space-y-1">
                    <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer hover:text-slate-900">
                      <input
                        type="radio"
                        name="make"
                        checked={selectedMake === 'all'}
                        onChange={() => setSelectedMake('all')}
                        className="text-[#D32F2F] focus:ring-[#D32F2F]"
                      />
                      <span>All Brands</span>
                    </label>
                    {['Club Car', 'MGI Golf', 'Apex Off-Road', 'Sandstorm Racing', 'Volterra EV', 'Torq Powersports'].map((b) => (
                      <label key={b} className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer hover:text-slate-900">
                        <input
                          type="radio"
                          name="make"
                          checked={selectedMake === b}
                          onChange={() => setSelectedMake(b)}
                          className="text-[#D32F2F] focus:ring-[#D32F2F]"
                        />
                        <span>{b}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Max Price Slider */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold uppercase text-slate-700">Max Budget</span>
                    <span className="font-mono font-bold text-[#D32F2F]">
                      ${maxPrice.toLocaleString()} AUD
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="25000"
                    step="500"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full accent-[#D32F2F]"
                  />
                </div>

                {/* In Stock Toggle */}
                <div className="pt-2 border-t border-slate-100">
                  <label className="flex items-center gap-2.5 text-xs font-bold text-slate-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={inStockOnly}
                      onChange={(e) => setInStockOnly(e.target.checked)}
                      className="rounded text-[#D32F2F] focus:ring-[#D32F2F] w-4 h-4"
                    />
                    <span>In-Stock Ready to Ship Only</span>
                  </label>
                </div>
              </div>

              {/* Need Advice Callout Box */}
              <div className="bg-[#0B2545] text-white p-5 rounded-lg shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-[#D32F2F]">
                  <Wrench className="w-5 h-5 text-white bg-[#D32F2F] p-1 rounded" />
                  <span className="font-bold text-xs uppercase tracking-wider text-white">
                    Expert Cart Advice
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Unsure whether a 48V or 72V system fits your acreage? Speak with our Australian technicians for exact fitment confirmation.
                </p>
                <div className="pt-1">
                  <a
                    href="tel:0420128746"
                    className="block text-center py-2 bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-xs font-bold uppercase rounded transition-colors"
                  >
                    Call 0420 128 746
                  </a>
                </div>
              </div>
            </div>

            {/* Right Product Grid */}
            <div className="lg:col-span-3 space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-200 pb-2">
                <span>
                  Showing <strong className="text-slate-900">{filteredProducts.length}</strong> Buggies & Parts
                </span>
                <span className="font-mono">
                  {selectedCategory !== 'all' ? selectedCategory : 'All Categories'}
                </span>
              </div>

              {filteredProducts.length === 0 ? (
                <div className="bg-white rounded-lg border border-slate-200 p-12 text-center shadow-sm">
                  <h3 className="font-bold text-base text-slate-900">
                    No buggies matched your filter
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                    Try adjusting your budget slider or searching a broader keyword like &quot;golf&quot;, &quot;UTV&quot;, or &quot;Club Car&quot;.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedMake('all');
                      setSearchQuery('');
                      setMaxPrice(25000);
                      setInStockOnly(false);
                    }}
                    className="mt-4 px-5 py-2.5 bg-[#0B2545] hover:bg-[#D32F2F] text-white text-xs font-bold uppercase rounded transition-colors"
                  >
                    Reset All Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filteredProducts.map((product) => {
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

                            {/* Key specs pill */}
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

                        {/* Card Bottom: Price & CTA */}
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
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
