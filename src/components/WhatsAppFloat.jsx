import React, { useState } from 'react';
import { Phone, MessageSquare, X } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function WhatsAppFloat({ onOpenRfq }) {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleWhatsApp = () => {
    const text = "Hello Femotech Enterprises, I would like to inquire about pharmaceutical foil specifications and quotation.";
    window.open(`https://wa.me/${companyData.contacts.whatsapp.replace('+', '')}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <>
      {/* 1. Desktop & Tablet Floating WhatsApp Icon (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-2">
        {showTooltip && (
          <div className="bg-white border border-slate-200 text-slate-800 p-3 rounded-2xl shadow-xl max-w-xs text-xs flex items-start gap-2.5 animate-fadeIn relative">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-slate-400 hover:text-slate-600"
              aria-label="Dismiss message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 mt-1 shrink-0 animate-ping" />
            <div className="pr-4">
              <span className="font-bold text-slate-900 block">Instant B2B Foil Inquiry</span>
              <span className="text-slate-500 text-[11px] block mt-0.5">
                Chat directly with Mr. Harinder Singh (Director) on WhatsApp.
              </span>
            </div>
          </div>
        )}

        <button
          onClick={handleWhatsApp}
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center shadow-xl hover:shadow-emerald-500/40 transition-all transform hover:scale-105 active:scale-95 group"
          title="Chat with Director on WhatsApp"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </button>
      </div>

      {/* 2. Mobile Sticky Bottom Quick-Action Bar (< 640px) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-2xl flex items-center justify-between gap-2.5">
        <a
          href={`tel:${companyData.contacts.primaryPhone.replace(/\s+/g, '')}`}
          className="flex-1 flex items-center justify-center gap-1.5 bg-[#0B3B82] text-white py-2.5 px-3 rounded-lg font-semibold text-xs shadow-sm"
        >
          <Phone className="w-4 h-4 text-orange-400" />
          <span>Call Director</span>
        </a>

        <button
          onClick={handleWhatsApp}
          className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366] text-white py-2.5 px-3 rounded-lg font-semibold text-xs shadow-sm"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp RFQ</span>
        </button>

        <button
          onClick={onOpenRfq}
          className="bg-[#F37021] text-white py-2.5 px-3 rounded-lg font-semibold text-xs shrink-0 shadow-sm"
        >
          Quote
        </button>
      </div>
    </>
  );
}
