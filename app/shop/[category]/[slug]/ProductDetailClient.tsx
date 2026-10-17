'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Star,
  ShoppingBag,
  Check,
  Truck,
  ShieldCheck,
  Zap,
  MapPin,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Wrench,
  BatteryCharging,
  FileText,
  Phone,
} from 'lucide-react';
import { Product, Category, SITE, SHOP, CONTACT } from '@/config/site';
import { useCart } from '@/lib/cart';

interface Props {
  product: Product;
  category: Category;
  relatedProducts: Product[];
}

export function ProductDetailClient({ product, category, relatedProducts }: Props) {
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedOption, setSelectedOption] = useState(
    product.options?.[0] || 'Standard Factory Spec'
  );
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  // Postcode freight calculator state
  const [postcode, setPostcode] = useState('');
  const [freightResult, setFreightResult] = useState<{
    zone: string;
    rate: string;
    eta: string;
  } | null>(null);

  const handleAddToCart = () => {
    addItem(product, quantity, selectedOption);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleCalculateFreight = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postcode || postcode.length < 3) return;
    const firstDigit = postcode.charAt(0);
    let zone = 'Regional Freight Corridor';
    let eta = '3-5 business days via heavy tailgate transport';

    if (firstDigit === '2') {
      zone = 'NSW / Sydney Metro & Surrounds';
      eta = '1-2 business days from Eastern Creek Logistics Hub';
    } else if (firstDigit === '3') {
      zone = 'VIC / Melbourne Metro & Regional';
      eta = '2-3 business days via Melbourne Depot';
    } else if (firstDigit === '4') {
      zone = 'QLD / Brisbane & Coast';
      eta = '2-4 business days via Brisbane Depot';
    } else if (firstDigit === '6') {
      zone = 'WA / Perth Freight Network';
      eta = '4-6 business days via Perth Regional Depot';
    } else if (firstDigit === '5') {
      zone = 'SA / Adelaide Metro';
      eta = '3-4 business days via Adelaide Hub';
    }

    const rate =
      product.price >= SHOP.freeShippingThreshold
        ? 'FREE (Orders Over $1,000)'
        : `$${SHOP.shippingFee} Flat Rate`;

    setFreightResult({ zone, rate, eta });
  };

  return (
    <div className="space-y-10">
      {/* Top Product Hero: Gallery + Buying Panel */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-50 border border-slate-200 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.images[selectedImage] || product.images[0]}
                alt={`${product.name} - View ${selectedImage + 1}`}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <div className="absolute top-3 left-3 bg-[#D32F2F] text-white text-[11px] font-bold uppercase px-3 py-1 rounded shadow">
                  {product.badge}
                </div>
              )}
              <div className="absolute top-3 right-3 bg-[#0B2545]/90 text-white text-[11px] font-bold uppercase px-2.5 py-1 rounded backdrop-blur">
                {product.brand}
              </div>
            </div>

            {/* Thumbnail Selectors */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-1">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedImage(i)}
                    className={`w-20 h-16 rounded-md overflow-hidden border-2 shrink-0 transition-all ${
                      selectedImage === i
                        ? 'border-[#D32F2F] scale-105 shadow-md'
                        : 'border-slate-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img}
                      alt={`${product.name} thumb ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Fitment Guarantee Banner */}
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-center gap-3 text-xs text-slate-700">
              <Wrench className="w-5 h-5 text-[#D32F2F] shrink-0" />
              <div>
                <span className="font-bold text-[#0B2545] uppercase block">
                  Guaranteed Exact Fitment
                </span>
                <span className="text-slate-500 text-[11px]">
                  Engineered and verified for {product.brand} and Australian specifications.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Title, Pricing, Selectors, Add to Cart */}
          <div className="lg:col-span-5 space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#D32F2F] uppercase tracking-wider">
                  {product.brand} • {product.subcategory}
                </span>
                <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-slate-800">{product.rating}</span>
                  <span className="text-slate-400">({product.reviewsCount} reviews)</span>
                </div>
              </div>

              {/* Exact H1 for product */}
              <h1 className="text-2xl sm:text-3xl font-black text-[#0B2545] uppercase tracking-tight leading-tight">
                {product.name}
              </h1>

              {/* Price Display */}
              <div className="flex items-baseline gap-3 pt-1">
                <div className="text-3xl font-black font-mono text-[#D32F2F]">
                  {SITE.currencySymbol}
                  {product.price.toLocaleString()} AUD
                </div>
                {product.rrp && (
                  <div className="text-sm text-slate-400 line-through font-mono">
                    RRP {SITE.currencySymbol}
                    {product.rrp.toLocaleString()}
                  </div>
                )}
                <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Save {SITE.currencySymbol}
                  {(product.rrp ? product.rrp - product.price : 0).toLocaleString()}
                </span>
              </div>

              {/* Crypto Incentive Notice */}
              <div className="flex items-center gap-2 p-2.5 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-900">
                <Zap className="w-4 h-4 text-[#D32F2F] shrink-0" />
                <span>
                  Pay with Crypto at checkout and save an extra <strong>5% (Save {SITE.currencySymbol}{Math.round(product.price * 0.05).toLocaleString()})</strong>
                </span>
              </div>

              {/* Short summary */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Variant / Option Selector */}
              {product.options && product.options.length > 0 && (
                <div className="space-y-1.5 pt-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    Select Model Option / Color:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.options.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setSelectedOption(opt)}
                        className={`px-3 py-1.5 rounded text-xs font-bold uppercase transition-all ${
                          selectedOption === opt
                            ? 'bg-[#0B2545] text-white shadow'
                            : 'bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selector + Add to Cart Button */}
              <div className="space-y-3 pt-3 border-t border-slate-200">
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-slate-300 rounded-md overflow-hidden bg-white">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="px-3 py-2 text-sm font-black hover:bg-slate-100 text-slate-700"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="px-4 font-mono font-bold text-sm text-slate-900">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      className="px-3 py-2 text-sm font-black hover:bg-slate-100 text-slate-700"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className={`flex-1 py-3 px-6 rounded-md font-black text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 ${
                      isAdded
                        ? 'bg-emerald-600 text-white'
                        : 'bg-[#D32F2F] hover:bg-[#B71C1C] text-white'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added to Cart!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add to Cart ({SITE.currencySymbol}{(product.price * quantity).toLocaleString()} AUD)</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-[11px] text-slate-500 flex items-center justify-between">
                  <span className="flex items-center gap-1 text-emerald-700 font-bold">
                    <Check className="w-3.5 h-3.5" />
                    {product.leadTime || 'In Stock — Sydney / Brisbane Logistics Hub'}
                  </span>
                  <span className="font-mono">SKU: {product.sku}</span>
                </div>
              </div>

              {/* Postcode Freight Checker */}
              <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 space-y-2 mt-2">
                <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#D32F2F]" />
                  Australia Postcode Delivery Calculator
                </span>
                <form onSubmit={handleCalculateFreight} className="flex gap-2">
                  <input
                    type="text"
                    maxLength={4}
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value.replace(/\D/g, ''))}
                    placeholder="Enter 4-digit Postcode (e.g. 2000)"
                    className="flex-1 px-3 py-1.5 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-[#D32F2F] font-mono text-slate-900"
                  />
                  <button
                    type="submit"
                    className="px-4 py-1.5 bg-[#0B2545] hover:bg-[#D32F2F] text-white text-xs font-bold uppercase rounded transition-colors"
                  >
                    Calculate
                  </button>
                </form>

                {freightResult && (
                  <div className="text-xs p-2.5 bg-white rounded border border-slate-200 space-y-1">
                    <div className="flex justify-between font-bold text-slate-900">
                      <span>{freightResult.zone}</span>
                      <span className="text-emerald-700 font-mono">{freightResult.rate}</span>
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono">
                      Estimated transit: {freightResult.eta}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Guarantees */}
            <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-200 text-[11px] font-bold text-slate-700">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#D32F2F]" />
                <span>Australian Consumer Warranty</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-[#D32F2F]" />
                <span>Hydraulic Tailgate Unload</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Specifications & Content Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Full Specifications & Engineering Details */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
            <h2 className="text-xl font-bold text-[#0B2545] uppercase tracking-tight flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#D32F2F]" />
              Technical Specifications & Engineering
            </h2>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {product.description}
            </p>

            {/* Specs Table */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <table className="w-full text-xs text-left">
                <tbody>
                  {Object.entries(product.specs).map(([specKey, specVal], index) => (
                    <tr
                      key={specKey}
                      className={index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}
                    >
                      <th className="py-2.5 px-4 font-bold text-slate-700 w-1/3 border-b border-slate-200">
                        {specKey}
                      </th>
                      <td className="py-2.5 px-4 text-slate-900 font-mono border-b border-slate-200">
                        {specVal}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 42-Point PDI Quality Statement */}
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B2545] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#D32F2F]" />
                Australian 42-Point Pre-Delivery Inspection (PDI)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Prior to crate packaging, this vehicle undergoes a thorough diagnostic check by qualified Australian technicians. Fluid pressures, electrical terminals, suspension bolts, and battery state-of-health are formally signed off to ensure 100% turnkey readiness upon delivery.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Assembly, Battery Storage & Links */}
        <div className="lg:col-span-5 space-y-6">
          {/* Preparation & Assembly Guidance */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-tight text-[#0B2545] flex items-center gap-2">
              <Wrench className="w-4 h-4 text-[#D32F2F]" />
              Uncrating & Initial Assembly
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Machines arrive 90% pre-assembled in protective steel crate packaging. Simple final assembly entails roll-cage bolting, wheel attachment, steering column alignment, and battery terminal connection using standard metric tools. Full instruction manual included.
            </p>
            <div className="text-[11px] text-slate-500 font-mono">
              Estimated assembly duration: 45–60 minutes.
            </div>
          </div>

          {/* Battery Care & Storage Guidance */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-tight text-[#0B2545] flex items-center gap-2">
              <BatteryCharging className="w-4 h-4 text-[#D32F2F]" />
              Storage & Lithium Battery Protocol
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              For optimal lithium battery longevity in Australian summer heat, store machines in a shaded garage or shed. If storing unused for over 30 days, maintain battery charge between 50% and 70%. Never leave uncharged over winter.
            </p>
          </div>

          {/* Need help or advice? */}
          <div className="bg-[#0B2545] text-white rounded-xl p-6 space-y-3 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#D32F2F]">
              Direct Tech Support Desk
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Have questions regarding tow hitches, lift kits, or charging specs? Speak with our Sydney workshop mechanics.
            </p>
            <div className="pt-1 flex flex-col gap-2">
              <a
                href={`tel:${CONTACT.phoneInternational}`}
                className="py-2 px-4 bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-xs font-bold uppercase rounded text-center transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {CONTACT.phone}</span>
              </a>
              <Link
                href="/contact"
                className="py-2 px-4 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase rounded text-center transition-colors border border-slate-600"
              >
                Send Online Enquiry
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <h3 className="text-lg font-bold text-[#0B2545] uppercase">
              Customer Reviews for {product.name}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-800">
                {product.rating} / 5.0 ({product.reviewsCount} verified reviews)
              </span>
            </div>
          </div>

          <div className="text-xs text-slate-500 font-mono">
            [INSERT VERIFIED CUSTOMER REVIEW PLATFORM WIDGET HERE]
          </div>
        </div>

        <p className="text-xs text-slate-600 italic">
          Customer reviews will appear here once verified review collection is connected. Only administrator-approved verified buyer reviews are published.
        </p>
      </div>

      {/* Related Products Carousel / Grid */}
      {relatedProducts.length > 0 && (
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black text-[#0B2545] uppercase tracking-tight">
              Related Buggies & Equipment
            </h2>
            <Link
              href={`/shop/${category.slug}`}
              className="text-xs font-bold text-[#D32F2F] uppercase hover:underline"
            >
              View More in {category.name} →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((rel) => (
              <div
                key={rel.slug}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all"
              >
                <div>
                  <div className="aspect-[4/3] bg-white p-2 overflow-hidden border-b border-slate-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={rel.images[0]}
                      alt={rel.name}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="p-3.5 space-y-1.5">
                    <span className="text-[10px] font-mono text-slate-500 uppercase">
                      {rel.brand}
                    </span>
                    <Link href={`/shop/${rel.category}/${rel.slug}`}>
                      <h4 className="font-bold text-xs text-[#0B2545] hover:text-[#D32F2F] truncate">
                        {rel.name}
                      </h4>
                    </Link>
                    <div className="text-xs font-black font-mono text-[#D32F2F]">
                      {SITE.currencySymbol}
                      {rel.price.toLocaleString()} AUD
                    </div>
                  </div>
                </div>
                <div className="p-3.5 pt-0">
                  <Link
                    href={`/shop/${rel.category}/${rel.slug}`}
                    className="w-full py-1.5 text-center text-[11px] font-bold uppercase rounded bg-slate-100 hover:bg-[#D32F2F] hover:text-white transition-colors block text-slate-800"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
