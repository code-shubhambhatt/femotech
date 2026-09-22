import React from 'react';
import { clientsData } from '../data/clientsData';
import { ShieldCheck } from 'lucide-react';

export default function ClientMarquee() {
  const featuredClients = clientsData.slice(0, 8);

  return (
    <section className="py-10 sm:py-14 bg-slate-50 border-b border-slate-200 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Understated Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 mb-6 sm:mb-8">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#0B3B82]" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
              Verified Primary Packaging Vendor To
            </span>
          </div>

          <span className="text-[11px] sm:text-xs text-slate-400 font-mono">
            Annexure-III Vendor Roster (FM/SMF/01)
          </span>
        </div>

        {/* Clean, Non-Gimmicky Client Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5">
          {featuredClients.map((client) => (
            <div
              key={client.name}
              className="bg-white border border-slate-200/90 rounded-2xl p-3.5 sm:p-5 flex items-center gap-3 hover:border-orange-300 hover:shadow-md transition-all group"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-xs text-slate-700 shrink-0 font-mono group-hover:bg-orange-50 group-hover:text-orange-600 group-hover:border-orange-200 transition-colors">
                {client.name.substring(0, 2).toUpperCase()}
              </div>

              <div className="flex flex-col min-w-0">
                <span className="font-heading font-bold text-xs sm:text-sm text-slate-900 truncate group-hover:text-[#0B3B82] transition-colors">
                  {client.name}
                </span>
                <span className="text-[10px] sm:text-[11px] text-slate-500 truncate">
                  {client.tagline}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

