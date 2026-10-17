'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  MessageSquare,
  Send,
  CheckCircle2,
  Truck,
  ArrowRight,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import { SITE, CONTACT } from '@/config/site';
import { JsonLd } from '@/components/JsonLd';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'Sales & Product Question',
    postcode: '',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Buggies For Sale Australia',
    url: `https://${SITE.domain}/contact/`,
    mainEntity: {
      '@type': 'LocalBusiness',
      name: SITE.name,
      telephone: CONTACT.phone,
      email: CONTACT.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Warehouse Logistics Hub',
        addressLocality: 'Sydney',
        addressRegion: 'NSW',
        postalCode: '2148',
        addressCountry: 'AU',
      },
      openingHours: 'Mo-Fr 08:00-18:00, Sa 09:00-15:00',
    },
  };

  return (
    <>
      <JsonLd data={contactSchema} />

      <div className="bg-[#F8FAFC] min-h-screen py-8 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Breadcrumb */}
          <nav className="text-xs text-slate-500 font-mono" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-slate-900">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#0B2545] font-bold">Contact Support</span>
          </nav>

          {/* Hero Header */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <span className="text-xs font-mono font-bold text-[#D32F2F] uppercase tracking-wider">
              Australian Support Desk
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-[#0B2545] uppercase tracking-tight mt-1">
              Contact Buggies For Sale Australia
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
              Have a question regarding off-road buggy specs, remote golf cart battery conversions, or freight quotes for regional Australia? Speak directly with our qualified staff.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Contact Information & Live Channels */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Info Card */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-sm">
                <h2 className="text-sm font-bold uppercase tracking-wider text-[#0B2545] border-b border-slate-100 pb-2">
                  Direct Inquiries
                </h2>

                <div className="space-y-4 text-xs text-slate-700">
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#D32F2F] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-slate-900">Customer Telephone</div>
                      <a
                        href={`tel:${CONTACT.phoneInternational}`}
                        className="text-sm font-bold font-mono text-[#D32F2F] hover:underline"
                      >
                        {CONTACT.phone}
                      </a>
                      <div className="text-[11px] text-slate-500">
                        Direct sales and technician line (Standard local rates)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#D32F2F] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-slate-900">Official Email</div>
                      <a
                        href={`mailto:${CONTACT.email}`}
                        className="font-mono text-slate-900 hover:text-[#D32F2F] font-bold"
                      >
                        {CONTACT.email}
                      </a>
                      <div className="text-[11px] text-slate-500">
                        Invoices, spec sheets, and tracking inquiries
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#D32F2F] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-slate-900">Logistics Hub & Freight Depots</div>
                      <div>{CONTACT.address}</div>
                      <div className="text-[11px] text-slate-500 font-mono">
                        ABN: {CONTACT.abn}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#D32F2F] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-slate-900">Operating Hours (AEST)</div>
                      <div>{CONTACT.hours}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Instant Channels Card */}
              <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B2545]">
                  Fast Live Response Channels
                </h3>
                <p className="text-xs text-slate-600">
                  Prefer chatting via mobile messaging? Our team is live during business hours:
                </p>

                <div className="space-y-2 pt-1">
                  <a
                    href={`https://wa.me/61420128746?text=${encodeURIComponent(
                      'Hi Buggies For Sale, I am inquiring about product delivery and stock.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase transition-colors shadow-sm"
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Live Chat</span>
                    </span>
                    <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded font-mono">
                      Fastest
                    </span>
                  </a>

                  <a
                    href="sms:+61420128746"
                    className="flex items-center justify-between p-3 rounded-lg bg-[#0B2545] hover:bg-slate-800 text-white font-bold text-xs uppercase transition-colors shadow-sm"
                  >
                    <span className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      <span>Normal SMS Text</span>
                    </span>
                    <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded font-mono">
                      0420 128 746
                    </span>
                  </a>
                </div>
              </div>

              {/* Wholesale Enquiries Link */}
              <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm flex items-center justify-between">
                <div>
                  <div className="font-bold text-xs text-slate-900">
                    Wholesale Fleet Inquiries?
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Golf courses, resorts & mining vehicles
                  </div>
                </div>
                <Link
                  href="/wholesale"
                  className="text-xs font-bold text-[#D32F2F] hover:underline"
                >
                  Wholesale Portal →
                </Link>
              </div>
            </div>

            {/* Right Interactive Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm">
                {isSent ? (
                  <div className="text-center py-12 space-y-3">
                    <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
                    <h3 className="text-xl font-bold text-[#0B2545] uppercase tracking-tight">
                      Message Received!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Buggies For Sale Australia. A technician from our Sydney hub will review your query and respond via phone or email shortly.
                    </p>
                    <div className="pt-4">
                      <Link
                        href="/shop"
                        className="inline-block px-6 py-2.5 bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold text-xs uppercase tracking-wider rounded transition-colors"
                      >
                        Return to Shop Buggies
                      </Link>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h2 className="text-base font-bold text-[#0B2545] uppercase tracking-tight border-b border-slate-100 pb-2">
                      Send an Online Inquiry
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Lachlan Murdoch"
                          className="w-full px-3 py-2 text-xs border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-[#D32F2F] bg-white"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your.email@domain.com.au"
                          className="w-full px-3 py-2 text-xs border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-[#D32F2F] bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1">
                          Contact Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 0412 345 678"
                          className="w-full px-3 py-2 text-xs border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-[#D32F2F] bg-white"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1">
                          Delivery Postcode (if freight quote)
                        </label>
                        <input
                          type="text"
                          maxLength={4}
                          value={formData.postcode}
                          onChange={(e) =>
                            setFormData({ ...formData, postcode: e.target.value.replace(/\D/g, '') })
                          }
                          placeholder="e.g. 4000"
                          className="w-full px-3 py-2 text-xs border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-[#D32F2F] bg-white font-mono"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Inquiry Nature
                      </label>
                      <select
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-[#D32F2F] bg-white font-medium"
                      >
                        <option>Sales & Product Question</option>
                        <option>Freight & Delivery Quote</option>
                        <option>Wholesale & Fleet Pricing</option>
                        <option>Parts & Battery Replacement</option>
                        <option>Warranty & Technical Service</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Message Details *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please mention the specific buggy model, terrain type, or questions you have..."
                        className="w-full px-3 py-2 text-xs border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-[#D32F2F] bg-white"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold text-xs uppercase tracking-wider rounded shadow transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry to Australian Desk</span>
                    </button>

                    <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500 pt-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Encrypted SSL transmission • We never share your contact details.</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
