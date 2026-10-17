'use client';

import React from 'react';
import Link from 'next/link';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Truck, Zap, AlertTriangle } from 'lucide-react';
import { useCart } from '@/lib/cart';
import { SITE, SHOP } from '@/config/site';

export function CartDrawer() {
  const {
    items,
    isOpen,
    setIsOpen,
    removeItem,
    updateQuantity,
    subtotal,
    shipping,
    cryptoDiscount,
    isCryptoSelected,
    setIsCryptoSelected,
    total,
    freeShippingRemaining,
    isMinOrderMet,
    totalCount,
  } = useCart();

  if (!isOpen) return null;

  const freeShippingProgress = Math.min(100, Math.round((subtotal / SHOP.freeShippingThreshold) * 100));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FFFFFF] border-l-2 border-[#1A1A1A] shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-4 bg-[#F4F1EA] border-b border-[#E2DCD5] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#E65F2B]" />
              <h2 className="font-bold text-base text-[#1A1A1A] tracking-tight">
                Your Buggy Cart ({totalCount})
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 text-stone-500 hover:text-[#1A1A1A] hover:bg-[#E2DCD5] rounded transition-colors"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Shipping and Order Progress */}
          <div className="bg-[#EDE8DE] px-4 py-3 border-b border-[#E2DCD5] text-xs space-y-2">
            <div className="flex items-center justify-between text-stone-700 font-medium">
              <span className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-[#E65F2B]" />
                {freeShippingRemaining === 0 ? (
                  <span className="text-emerald-700 font-bold">Free Australia-Wide Delivery Unlocked!</span>
                ) : (
                  <span>
                    Add <strong className="text-[#E65F2B] font-mono">{SITE.currencySymbol}{freeShippingRemaining.toLocaleString()}</strong> for Free Delivery
                  </span>
                )}
              </span>
              <span className="font-mono text-stone-500">{freeShippingProgress}%</span>
            </div>
            {/* Progress bar */}
            <div className="w-full bg-[#D4CEBF] h-2 rounded-full overflow-hidden">
              <div
                className="bg-[#E65F2B] h-full transition-all duration-300 rounded-full"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>

            {/* Min order alert if needed */}
            {!isMinOrderMet && (
              <div className="flex items-center gap-1.5 text-amber-800 bg-amber-50 p-2 rounded border border-amber-200 text-[11px]">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>
                  Minimum order is <strong>{SITE.currencySymbol}{SHOP.minOrder}</strong>. Please add more items to enable online checkout.
                </span>
              </div>
            )}
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 bg-[#F4F1EA] rounded-full mx-auto flex items-center justify-center text-stone-400">
                  <ShoppingBag className="w-8 h-8 text-stone-300" />
                </div>
                <h3 className="font-semibold text-stone-800">Your cart is currently empty</h3>
                <p className="text-xs text-stone-500 max-w-xs mx-auto">
                  Explore our premium off-road buggies, remote golf carts, youth go-karts, and genuine spare parts.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider hover:bg-[#E65F2B] transition-colors"
                  >
                    Start Shopping Buggies
                  </button>
                </div>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.slug}
                  className="flex gap-3 p-3 rounded-lg border border-[#E2DCD5] bg-[#FDFCFB] hover:border-stone-400 transition-colors"
                >
                  <div className="w-16 h-16 rounded overflow-hidden bg-stone-100 shrink-0 border border-stone-200">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-stone-900 truncate">
                      {item.product.name}
                    </h4>
                    {item.selectedOption && (
                      <span className="text-[10px] text-stone-500 block">
                        Option: {item.selectedOption}
                      </span>
                    )}
                    <div className="text-xs font-bold text-[#E65F2B] mt-1 font-mono">
                      {SITE.currencySymbol}
                      {item.product.price.toLocaleString()}
                    </div>
                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-stone-300 rounded bg-white overflow-hidden text-xs">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.slug, -1)}
                          className="px-2 py-0.5 hover:bg-stone-100 text-stone-600 font-bold"
                          aria-label={`Decrease quantity of ${item.product.name}`}
                        >
                          -
                        </button>
                        <span className="px-2 font-mono font-semibold text-stone-900">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.slug, 1)}
                          className="px-2 py-0.5 hover:bg-stone-100 text-stone-600 font-bold"
                          aria-label={`Increase quantity of ${item.product.name}`}
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.product.slug)}
                        className="text-stone-400 hover:text-red-600 p-1 transition-colors"
                        aria-label={`Remove ${item.product.name} from cart`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right shrink-0 font-bold text-xs font-mono text-stone-900">
                    {SITE.currencySymbol}
                    {(item.product.price * item.quantity).toLocaleString()}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary & Checkout */}
          {items.length > 0 && (
            <div className="p-4 bg-[#F4F1EA] border-t-2 border-[#E2DCD5] space-y-3">
              {/* Crypto discount toggle */}
              <label className="flex items-center justify-between p-2.5 rounded-lg bg-[#EDE8DE] border border-[#D4CEBF] cursor-pointer hover:bg-amber-100/50 transition-colors">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={isCryptoSelected}
                    onChange={(e) => setIsCryptoSelected(e.target.checked)}
                    className="w-4 h-4 accent-[#E65F2B] rounded"
                  />
                  <div>
                    <span className="text-xs font-bold text-[#1A1A1A] flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-[#E65F2B]" />
                      Pay with Crypto (Save {SHOP.cryptoDiscount}%)
                    </span>
                    <span className="text-[10px] text-stone-500 block">
                      Pay via BTC or USDT instant rail
                    </span>
                  </div>
                </div>
                {isCryptoSelected && (
                  <span className="text-xs font-bold font-mono text-emerald-700">
                    -{SITE.currencySymbol}{cryptoDiscount.toLocaleString()}
                  </span>
                )}
              </label>

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono font-semibold text-stone-900">
                    {SITE.currencySymbol}{subtotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Freight Delivery</span>
                  <span className="font-mono font-semibold">
                    {shipping === 0 ? (
                      <span className="text-emerald-700 font-bold">FREE (Australia-Wide)</span>
                    ) : (
                      `${SITE.currencySymbol}${shipping}`
                    )}
                  </span>
                </div>
                {isCryptoSelected && (
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>Crypto 5% Discount</span>
                    <span className="font-mono">-{SITE.currencySymbol}{cryptoDiscount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-bold text-[#1A1A1A] pt-2 border-t border-[#E2DCD5]">
                  <span>Total (inc. GST)</span>
                  <span className="font-mono text-base text-[#E65F2B]">
                    {SITE.currencySymbol}{total.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                <Link
                  href="/checkout"
                  onClick={() => setIsOpen(false)}
                  className={`w-full py-3 px-4 rounded-lg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md ${
                    isMinOrderMet
                      ? 'bg-[#E65F2B] hover:bg-[#D44E1C] text-white'
                      : 'bg-stone-300 text-stone-500 cursor-not-allowed pointer-events-none'
                  }`}
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-2 text-center text-xs font-semibold text-stone-600 hover:text-stone-900"
                >
                  Continue Browsing Buggies
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-stone-500 pt-1 border-t border-[#E2DCD5]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Encrypted 256-Bit SSL Checkout • Australian ABN: 53 635 284 267</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
