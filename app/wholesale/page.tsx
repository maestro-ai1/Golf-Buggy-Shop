'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Building2,
  Truck,
  ShieldCheck,
  CheckCircle2,
  Send,
  Phone,
  Mail,
  Zap,
  Check,
} from 'lucide-react';
import { SITE, CONTACT } from '@/config/site';

export default function WholesalePage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    abn: '',
    contactName: '',
    email: '',
    phone: '',
    fleetType: 'Golf Club & Resort Fleet (2-6 Seater)',
    quantity: '5-10 units',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-8 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 font-mono" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-slate-900">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#0B2545] font-bold">Wholesale & Fleet Supply</span>
        </nav>

        {/* Hero Header */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-10 shadow-sm">
          <span className="text-xs font-mono font-bold text-[#D32F2F] uppercase tracking-wider">
            Commercial Business-to-Business
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-[#0B2545] uppercase tracking-tight mt-1">
            Commercial Buggy Wholesale & Fleet Supply Australia
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2 max-w-3xl">
            Supplying golf courses, luxury holiday resorts, regional council reserves, agricultural cattle stations, and industrial mining camps with heavy-duty electric and petrol buggy fleets.
          </p>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg border border-slate-200 p-6 space-y-2 shadow-sm">
            <Building2 className="w-8 h-8 text-[#D32F2F]" />
            <h3 className="font-bold text-sm text-[#0B2545] uppercase">
              Tiered Fleet Pricing
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Substantial volume price reductions on orders of 3 or more vehicles, with custom corporate paint and company decal liveries available.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6 space-y-2 shadow-sm">
            <Truck className="w-8 h-8 text-[#D32F2F]" />
            <h3 className="font-bold text-sm text-[#0B2545] uppercase">
              Consolidated Transport
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Dedicated flatbed or enclosed multi-carrier freight deliveries to remote mine sites, regional stations, and metropolitan resorts with zero offloading hassle.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6 space-y-2 shadow-sm">
            <ShieldCheck className="w-8 h-8 text-[#D32F2F]" />
            <h3 className="font-bold text-sm text-[#0B2545] uppercase">
              Priority Parts Dispatch
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Commercial fleet contracts include prioritized access to our Australian spare parts warehouse and dedicated technical support hotlines.
            </p>
          </div>
        </div>

        {/* Fleet Request Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#0B2545] text-white rounded-xl p-6 space-y-4 shadow-sm">
              <h2 className="text-base font-bold uppercase tracking-wider text-white">
                Wholesale Fleet Desk
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                Contact our commercial procurement managers directly to request custom technical tenders or invoice leasing proposals:
              </p>

              <div className="space-y-3 text-xs pt-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#D32F2F]" />
                  <a href={`tel:${CONTACT.phoneInternational}`} className="font-mono font-bold text-white hover:text-[#D32F2F]">
                    {CONTACT.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#D32F2F]" />
                  <a href={`mailto:${CONTACT.email}`} className="font-mono font-bold text-white hover:text-[#D32F2F]">
                    {CONTACT.email}
                  </a>
                </div>
                <div className="text-[11px] text-slate-400 font-mono">
                  ABN: {CONTACT.abn}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-10 space-y-3">
                <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
                <h3 className="text-lg font-bold uppercase text-[#0B2545]">
                  Fleet Inquiry Received
                </h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Our wholesale fleet director will prepare a detailed pricing quote and formal tax proposal within 1 business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-base font-bold text-[#0B2545] uppercase tracking-tight border-b border-slate-100 pb-2">
                  Request Commercial Fleet Proposal
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Business or Entity Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Royal Golf & Country Club"
                      className="w-full px-3 py-2 text-xs border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-[#D32F2F]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      ABN / ACN Number
                    </label>
                    <input
                      type="text"
                      value={formData.abn}
                      onChange={(e) => setFormData({ ...formData, abn: e.target.value })}
                      placeholder="e.g. 53 635 284 267"
                      className="w-full px-3 py-2 text-xs border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-[#D32F2F] font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      placeholder="e.g. General Manager"
                      className="w-full px-3 py-2 text-xs border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-[#D32F2F]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Business Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="gm@countryclub.com.au"
                      className="w-full px-3 py-2 text-xs border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-[#D32F2F]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Target Vehicle Class
                    </label>
                    <select
                      value={formData.fleetType}
                      onChange={(e) => setFormData({ ...formData, fleetType: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-200 rounded bg-white"
                    >
                      <option>Golf Club & Resort Fleet (2-6 Seater)</option>
                      <option>Agricultural 4x4 UTV Side-by-Sides</option>
                      <option>Silent 72V Lithium Utility Buggies</option>
                      <option>Commercial Push & Remote Buggy Fleet</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Estimated Volume
                    </label>
                    <select
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-200 rounded bg-white font-mono"
                    >
                      <option>3 - 5 units</option>
                      <option>5 - 10 units</option>
                      <option>10 - 25 units</option>
                      <option>25+ units (Full Fleet Replacement)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Requirements, Accessories & Delivery Location
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Mention custom windscreens, towing ball hitches, golf bag attachments, delivery postcode..."
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-[#D32F2F]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold text-xs uppercase tracking-wider rounded flex items-center justify-center gap-2 shadow transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Wholesale Tender Request</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
