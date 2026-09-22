import React from 'react';
import { ArrowRight, MessageSquare, Check, ShieldCheck } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Hero({ onNavigate, onOpenRfq }) {
  const handleWhatsApp = () => {
    const text = "Hello Mr. Harinder Singh, I would like to inquire about pharmaceutical foil specifications and commercial rates.";
    window.open(`https://wa.me/${companyData.contacts.whatsapp.replace('+', '')}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="relative bg-white pt-8 pb-14 sm:pt-14 sm:pb-20 lg:py-24 border-b border-slate-200 text-left overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Authoritative Value Proposition */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            
            {/* Experience Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#F37021] animate-pulse" />
              <span className="text-red-700 font-bold uppercase tracking-wide">20+ Years Experience</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600 truncate">Selaqui Industrial Area, Dehradun</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Precision Pharmaceutical <br className="hidden sm:inline" />
              <span className="text-[#0B3B82]">Aluminium Foil</span> &amp;{" "}
              <span className="text-[#F37021]">Packaging</span>
            </h1>

            {/* Concise 2-Line Subhead */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-xl">
              <strong className="text-slate-900 font-semibold">Femotech Enterprises (P) Ltd.</strong> manufactures high-barrier Blister, Alu-Alu, and flexible laminates in an 8,500 sq. ft. dust-free cleanroom facility certified under <span className="text-blue-900 font-semibold">ISO 15378:2017</span>.
            </p>

            {/* 3 Clean Verification Points */}
            <div className="space-y-2.5 pt-1 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span>100% Pinhole-Free &amp; Bursting Strength Certified with Batch COA</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span>High-Speed 5-Colour (2+3) Rotogravure Foil Printing Press</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span>Approved primary packaging vendor to Mankind, Akums &amp; Bal Pharma</span>
              </div>
            </div>

            {/* CTAs with responsive touch targets */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              <button
                onClick={() => onNavigate('products')}
                className="inline-flex items-center justify-center gap-2 bg-[#0B3B82] hover:bg-blue-950 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-98"
              >
                <span>View Product Catalog</span>
                <ArrowRight className="w-4 h-4 text-orange-400" />
              </button>

              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-sm px-5 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-98"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp RFQ</span>
              </button>
            </div>

          </div>

          {/* Right Column: Real Machinery Photograph */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-300/80 bg-slate-950 group">
              
              {/* Actual photo of the 5-colour rotogravure press */}
              <div className="aspect-[16/10] sm:aspect-[16/11] overflow-hidden bg-slate-900">
                <img
                  src="/images/facility/rotogravure_press.jpg"
                  alt="Femotech 5-Colour Rotogravure Foil Printing Press in Selaqui Plant"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                />
              </div>

              {/* Technical Caption Bar */}
              <div className="p-3.5 sm:p-4 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 flex items-center justify-between text-xs text-white">
                <div>
                  <span className="font-heading font-bold text-orange-400 block text-xs sm:text-sm">
                    5-Colour Rotogravure Printing Press
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-slate-400 block mt-0.5 font-mono">
                    ID: FM.PD.PM.004 • Selaqui Cleanroom Hall
                  </span>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 text-[10px] font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Active Production
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

