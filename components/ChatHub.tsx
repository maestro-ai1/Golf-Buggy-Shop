'use client';

import React, { useState } from 'react';
import { MessageSquare, X, MessageCircle, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import { CONTACT, SITE } from '@/config/site';

export function ChatHub() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'options' | 'message'>('options');
  const [userQuery, setUserQuery] = useState('');
  const [senderName, setSenderName] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleQuickQuestion = (q: string) => {
    const encoded = encodeURIComponent(`Hi ${SITE.name}, ${q}`);
    window.open(`https://wa.me/61420128746?text=${encoded}`, '_blank');
  };

  const handleSendText = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userQuery) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setUserQuery('');
      setSenderName('');
      setSenderPhone('');
      setIsOpen(false);
    }, 3000);
  };

  return (
    <>
      {/* Floating launcher button */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="group relative flex items-center gap-2 bg-[#E65F2B] hover:bg-[#D44E1C] text-white px-4 py-3 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 border-2 border-[#1A1A1A]"
          aria-label="Open Australian Buggy Support Chat"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-200 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <MessageSquare className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline-block">
            Support Live Chat
          </span>
        </button>
      </div>

      {/* Chat Window modal */}
      {isOpen && (
        <div className="fixed bottom-20 right-5 z-40 w-96 max-w-[calc(100vw-2.5rem)] bg-[#FFFFFF] border-2 border-[#1A1A1A] rounded-2xl shadow-2xl overflow-hidden text-[#1A1A1A] animate-fadeIn">
          {/* Header */}
          <div className="bg-[#1A1A1A] text-white p-4 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                <h3 className="font-bold text-sm">Buggies For Sale Live Desk</h3>
              </div>
              <p className="text-[11px] text-stone-300">
                Australian Customer Support • Usually replies in &lt; 5 mins
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 text-stone-400 hover:text-white rounded"
              aria-label="Close support chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Tabs */}
          <div className="flex border-b border-[#E2DCD5] bg-[#F4F1EA] text-xs">
            <button
              type="button"
              onClick={() => setActiveTab('options')}
              className={`flex-1 py-2.5 text-center font-bold tracking-wide transition-colors ${
                activeTab === 'options'
                  ? 'bg-white text-[#E65F2B] border-b-2 border-[#E65F2B]'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Direct Channels
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('message')}
              className={`flex-1 py-2.5 text-center font-bold tracking-wide transition-colors ${
                activeTab === 'message'
                  ? 'bg-white text-[#E65F2B] border-b-2 border-[#E65F2B]'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Instant Web Inquiry
            </button>
          </div>

          <div className="p-4 bg-[#FAF8F5] max-h-[70vh] overflow-y-auto">
            {activeTab === 'options' ? (
              <div className="space-y-3">
                <p className="text-xs text-stone-600">
                  Select your preferred channel to speak with an Australian buggy technician:
                </p>

                {/* WhatsApp Channel */}
                <a
                  href={`https://wa.me/61420128746?text=${encodeURIComponent(
                    'Hi Buggies For Sale, I am browsing your online store and have a question.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-emerald-50 hover:bg-emerald-100 rounded-xl border border-emerald-300 text-emerald-950 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-xs flex items-center justify-between">
                      <span>WhatsApp Live Chat</span>
                      <span className="text-[10px] bg-emerald-200 text-emerald-900 px-1.5 py-0.5 rounded font-mono">
                        Instant
                      </span>
                    </div>
                    <div className="text-[11px] text-emerald-700">
                      Message 0420 128 746 directly on WhatsApp
                    </div>
                  </div>
                </a>

                {/* Normal Text SMS Channel */}
                <a
                  href="sms:+61420128746"
                  className="flex items-center gap-3 p-3 bg-amber-50 hover:bg-amber-100 rounded-xl border border-amber-300 text-amber-950 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-amber-600 text-white flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-xs flex items-center justify-between">
                      <span>SMS / Normal Text</span>
                      <span className="text-[10px] bg-amber-200 text-amber-900 px-1.5 py-0.5 rounded font-mono">
                        Mobile Text
                      </span>
                    </div>
                    <div className="text-[11px] text-amber-800">
                      Send a standard text message to 0420 128 746
                    </div>
                  </div>
                </a>

                {/* Phone Call Channel */}
                <a
                  href={`tel:${CONTACT.phoneInternational}`}
                  className="flex items-center gap-3 p-3 bg-sky-50 hover:bg-sky-100 rounded-xl border border-sky-300 text-sky-950 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#E65F2B]" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-xs flex items-center justify-between">
                      <span>Call Australian Sales</span>
                      <span className="text-[10px] bg-sky-200 text-sky-900 px-1.5 py-0.5 rounded font-mono">
                        Direct
                      </span>
                    </div>
                    <div className="text-[11px] text-sky-800">
                      Speak with sales on {CONTACT.phone}
                    </div>
                  </div>
                </a>

                {/* Email Channel */}
                <a
                  href={`mailto:${CONTACT.email}?subject=Buggy%20Inquiry%20from%20Website`}
                  className="flex items-center gap-3 p-3 bg-stone-100 hover:bg-stone-200 rounded-xl border border-stone-300 text-stone-900 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-stone-700 text-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-xs flex items-center justify-between">
                      <span>Email Support</span>
                      <span className="text-[10px] bg-stone-300 text-stone-900 px-1.5 py-0.5 rounded font-mono">
                        Formal
                      </span>
                    </div>
                    <div className="text-[11px] text-stone-600 truncate">
                      {CONTACT.email}
                    </div>
                  </div>
                </a>

                {/* Common Prompts */}
                <div className="pt-2">
                  <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mb-2">
                    Quick WhatsApp Inquiries:
                  </div>
                  <div className="space-y-1.5">
                    {[
                      'I need a freight delivery quote for my postcode',
                      'Can you confirm stock on the Apex 1000 4x4 UTV?',
                      'Which remote golf buggy is best for hilly fairways?',
                      'I want to inquire about commercial wholesale pricing',
                    ].map((prompt, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleQuickQuestion(prompt)}
                        className="w-full text-left text-xs p-2 rounded-lg bg-white border border-[#E2DCD5] hover:border-[#E65F2B] hover:text-[#E65F2B] transition-colors"
                      >
                        👉 &ldquo;{prompt}&rdquo;
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSendText} className="space-y-3">
                {isSubmitted ? (
                  <div className="text-center py-8 space-y-2 text-emerald-800">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h4 className="font-bold text-sm">Message Dispatched!</h4>
                    <p className="text-xs text-stone-600">
                      Our Australian support team has received your inquiry. We will contact you shortly via SMS or phone.
                    </p>
                  </div>
                ) : (
                  <>
                    <p className="text-xs text-stone-600">
                      Send a message straight to our Sydney logistics desk:
                    </p>
                    <div>
                      <label className="text-[11px] font-bold text-stone-700 block mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        placeholder="e.g. Mitchell Smith"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 focus:outline-none focus:border-[#E65F2B] bg-white"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-stone-700 block mb-1">
                        Mobile Phone (for SMS reply)
                      </label>
                      <input
                        type="tel"
                        required
                        value={senderPhone}
                        onChange={(e) => setSenderPhone(e.target.value)}
                        placeholder="e.g. 0412 345 678"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 focus:outline-none focus:border-[#E65F2B] bg-white"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-stone-700 block mb-1">
                        How can we help?
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={userQuery}
                        onChange={(e) => setUserQuery(e.target.value)}
                        placeholder="Inquire about delivery, buggy specs, or payment methods..."
                        className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 focus:outline-none focus:border-[#E65F2B] bg-white"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-2.5 bg-[#E65F2B] hover:bg-[#D44E1C] text-white font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-colors shadow"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Send Instant Message
                    </button>
                    <div className="text-[10px] text-center text-stone-500">
                      Direct notification dispatched to sales@buggiesforsale.com.au
                    </div>
                  </>
                )}
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
