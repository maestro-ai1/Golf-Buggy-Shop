'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ShieldCheck,
  Truck,
  Zap,
  Lock,
  ArrowRight,
  AlertTriangle,
  ShoppingBag,
  CreditCard,
  Building,
} from 'lucide-react';
import { useCart } from '@/lib/cart';
import { SITE, SHOP, CONTACT } from '@/config/site';

export default function CheckoutPage() {
  const router = useRouter();
  const {
    items,
    subtotal,
    shipping,
    cryptoDiscount,
    isCryptoSelected,
    setIsCryptoSelected,
    total,
    isMinOrderMet,
    clearCart,
  } = useCart();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    suburb: '',
    state: 'NSW',
    postcode: '',
    tailgateAccess: 'Standard residential driveway access is clear',
    paymentMethod: isCryptoSelected ? 'crypto' : 'eft',
    orderNotes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handlePaymentMethodChange = (val: string) => {
    setFormData((prev) => ({ ...prev, paymentMethod: val }));
    if (val === 'crypto') {
      setIsCryptoSelected(true);
    } else {
      setIsCryptoSelected(false);
    }
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (items.length === 0) {
      setErrorMsg('Your cart is empty. Please add items before placing an order.');
      return;
    }

    if (!isMinOrderMet) {
      setErrorMsg(`Minimum order value is $${SHOP.minOrder} AUD. Please add more items.`);
      return;
    }

    if (!formData.firstName || !formData.email || !formData.phone || !formData.address || !formData.postcode) {
      setErrorMsg('Please complete all mandatory delivery address fields.');
      return;
    }

    setIsSubmitting(true);

    // Generate short Australian order reference (e.g. BFS-4921)
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const orderRef = `BFS-${randomNum}`;

    setTimeout(() => {
      clearCart();
      router.push(
        `/thank-you-order?ref=${orderRef}&total=${total}&method=${encodeURIComponent(
          formData.paymentMethod
        )}&name=${encodeURIComponent(formData.firstName)}`
      );
    }, 1000);
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-8 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 font-mono" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-slate-900">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-slate-900">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#0B2545] font-bold">Secure Checkout</span>
        </nav>

        <div>
          <span className="text-xs font-mono font-bold text-[#D32F2F] uppercase tracking-wider">
            Encrypted Order Portal
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-[#0B2545] uppercase tracking-tight mt-1">
            Australian Buggy Checkout
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Direct depot dispatch with insured heavy vehicle freight across all Australian states.
          </p>
        </div>

        {/* Min Order Warning if below $500 */}
        {!isMinOrderMet && (
          <div className="p-4 bg-amber-50 border border-amber-300 rounded-lg flex items-start gap-3 text-amber-900 text-xs">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-sm font-bold">
                Minimum Order Requirement: ${SHOP.minOrder} AUD
              </strong>
              Your current cart subtotal is <strong>${subtotal.toLocaleString()} AUD</strong>. Please return to the shop and add items to reach the minimum order value before placing your order.
              <div className="pt-2">
                <Link
                  href="/shop"
                  className="inline-block px-3 py-1 bg-[#0B2545] hover:bg-[#D32F2F] text-white rounded font-bold uppercase text-[10px] transition-colors"
                >
                  Return to Shop
                </Link>
              </div>
            </div>
          </div>
        )}

        {errorMsg && (
          <div className="p-4 bg-red-50 border border-red-300 rounded-lg text-red-900 text-xs font-bold">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form: Delivery Address & Details */}
          <div className="lg:col-span-7 space-y-6">
            {/* Delivery Address Card */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm">
              <h2 className="text-sm font-bold text-[#0B2545] uppercase tracking-tight border-b border-slate-100 pb-2 flex items-center justify-between">
                <span>1. Customer & Delivery Address</span>
                <span className="text-xs font-mono text-slate-400">Australia-Wide</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="e.g. Jack"
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-[#D32F2F]"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="e.g. Thompson"
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-[#D32F2F]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Email Address (For Invoicing & Dispatch Alerts) *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jack@property.com.au"
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-[#D32F2F]"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Australian Mobile Phone (Carrier SMS Tracking) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 0412 345 678"
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-[#D32F2F]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Street Delivery Address (Driveway, Property or Business Gate) *
                </label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="e.g. 142 River Road or Lot 4 Outback Highway"
                  className="w-full px-3 py-2 text-xs border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-[#D32F2F]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Suburb / Town *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.suburb}
                    onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                    placeholder="e.g. Dubbo"
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-[#D32F2F]"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    State *
                  </label>
                  <select
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded bg-white font-mono"
                  >
                    <option value="NSW">NSW</option>
                    <option value="VIC">VIC</option>
                    <option value="QLD">QLD</option>
                    <option value="WA">WA</option>
                    <option value="SA">SA</option>
                    <option value="TAS">TAS</option>
                    <option value="ACT">ACT</option>
                    <option value="NT">NT</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Postcode *
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={4}
                    value={formData.postcode}
                    onChange={(e) =>
                      setFormData({ ...formData, postcode: e.target.value.replace(/\D/g, '') })
                    }
                    placeholder="2830"
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-[#D32F2F] font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Tailgate Unloading Notes (Access restrictions, gates, dogs)
                </label>
                <input
                  type="text"
                  value={formData.tailgateAccess}
                  onChange={(e) => setFormData({ ...formData, tailgateAccess: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-[#D32F2F]"
                />
              </div>
            </div>

            {/* Payment Method Card */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm">
              <h2 className="text-sm font-bold text-[#0B2545] uppercase tracking-tight border-b border-slate-100 pb-2 flex items-center justify-between">
                <span>2. Select Payment Method</span>
                <span className="text-xs font-mono text-emerald-700 font-bold">Secure Settlement</span>
              </h2>

              <div className="space-y-3">
                {/* EFT / PayID Option */}
                <label className="flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-all border-slate-200 hover:border-slate-400 bg-slate-50">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="eft"
                    checked={formData.paymentMethod === 'eft'}
                    onChange={() => handlePaymentMethodChange('eft')}
                    className="w-4 h-4 accent-[#D32F2F] mt-0.5"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-slate-900">
                        Direct Australian Bank Transfer (EFT) / PayID
                      </span>
                      <span className="text-[10px] font-mono bg-white border border-slate-200 px-2 py-0.5 rounded">
                        Most Popular
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Direct deposit or instant settlement via PayID ({CONTACT.email}). Vehicle allocated immediately upon payment match.
                    </p>
                  </div>
                </label>

                {/* Crypto Option (5% Discount) */}
                <label className="flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-all border-amber-300 bg-amber-50">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="crypto"
                    checked={formData.paymentMethod === 'crypto'}
                    onChange={() => handlePaymentMethodChange('crypto')}
                    className="w-4 h-4 accent-[#D32F2F] mt-0.5"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-slate-900 flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-[#D32F2F]" />
                        Cryptocurrency (BTC / USDT) — Save 5% Instantly
                      </span>
                      <span className="text-[10px] font-mono bg-[#D32F2F] text-white px-2 py-0.5 rounded font-bold">
                        5% Discount
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-1">
                      Save ${cryptoDiscount > 0 ? cryptoDiscount.toLocaleString() : Math.round(subtotal * 0.05).toLocaleString()} AUD automatically at checkout. QR code and wallet details provided on order confirmation.
                    </p>
                  </div>
                </label>

                {/* Credit Card / Commercial Invoice */}
                <label className="flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-all border-slate-200 hover:border-slate-400 bg-slate-50">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="invoice"
                    checked={formData.paymentMethod === 'invoice'}
                    onChange={() => handlePaymentMethodChange('invoice')}
                    className="w-4 h-4 accent-[#D32F2F] mt-0.5"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-slate-900">
                        Commercial Tax Invoice / Purchase Order
                      </span>
                      <span className="text-[10px] font-mono bg-white border border-slate-200 px-2 py-0.5 rounded">
                        Clubs & Resorts
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1">
                      A formal PDF tax invoice with ABN {CONTACT.abn} will be sent to your accounts department for approval.
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Right Order Summary & Confirmation Button */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm">
              <h2 className="text-sm font-bold text-[#0B2545] uppercase tracking-tight border-b border-slate-100 pb-2">
                Order Summary ({items.length} items)
              </h2>

              <div className="divide-y divide-slate-100 max-h-64 overflow-y-auto pr-1">
                {items.map((item) => (
                  <div key={item.product.slug} className="py-2.5 flex items-center justify-between gap-3 text-xs">
                    <div className="truncate">
                      <div className="font-bold text-slate-900 truncate">
                        {item.quantity}x {item.product.name}
                      </div>
                      {item.selectedOption && (
                        <div className="text-[10px] text-slate-400">
                          {item.selectedOption}
                        </div>
                      )}
                    </div>
                    <span className="font-mono font-bold text-slate-900 shrink-0">
                      {SITE.currencySymbol}{(item.product.price * item.quantity).toLocaleString()} AUD
                    </span>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono font-bold text-slate-900">
                    {SITE.currencySymbol}{subtotal.toLocaleString()} AUD
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Insured Heavy Freight</span>
                  <span className="font-mono font-bold">
                    {shipping === 0 ? (
                      <span className="text-emerald-700">FREE (Orders Over $1,000)</span>
                    ) : (
                      `${SITE.currencySymbol}${shipping} AUD`
                    )}
                  </span>
                </div>

                {isCryptoSelected && (
                  <div className="flex justify-between text-emerald-700 font-bold">
                    <span>Crypto 5% Discount</span>
                    <span className="font-mono">
                      -{SITE.currencySymbol}{cryptoDiscount.toLocaleString()} AUD
                    </span>
                  </div>
                )}

                <div className="flex justify-between text-base font-black text-[#0B2545] pt-3 border-t border-slate-100">
                  <span>Total Amount Due</span>
                  <span className="font-mono text-xl text-[#D32F2F]">
                    {SITE.currencySymbol}{total.toLocaleString()} AUD
                  </span>
                </div>
                <div className="text-[10px] text-slate-400 text-right">
                  Includes 10% Australian GST
                </div>
              </div>

              {/* Place Order Button */}
              <div className="pt-4 space-y-3">
                <button
                  type="submit"
                  disabled={!isMinOrderMet || isSubmitting || items.length === 0}
                  className={`w-full py-4 rounded font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 ${
                    isMinOrderMet && items.length > 0 && !isSubmitting
                      ? 'bg-[#D32F2F] hover:bg-[#B71C1C] text-white'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <Lock className="w-4 h-4" />
                  <span>
                    {isSubmitting ? 'Placing Your Order...' : 'Confirm & Place Order'}
                  </span>
                </button>

                <div className="text-[10px] text-slate-500 text-center leading-relaxed">
                  By clicking Confirm, your order reference is generated and reserved in our Australian warehouse. No card details are charged automatically.
                </div>
              </div>
            </div>

            {/* Trust box */}
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-1.5 text-xs text-slate-700">
              <div className="flex items-center gap-1.5 font-bold text-slate-900">
                <ShieldCheck className="w-4 h-4 text-[#D32F2F]" />
                <span>Australian Business Guarantee</span>
              </div>
              <p className="text-[11px] text-slate-600">
                Operated by Buggies For Sale Australia Pty Ltd (ABN: {CONTACT.abn}). Backed by Australian Consumer Law statutory warranties.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
