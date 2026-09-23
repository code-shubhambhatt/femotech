import React from 'react';
import { companyData } from '../data/companyData';
import { Award, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Identity */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-950 to-[#0B3B82] p-1.5 flex items-center justify-center shrink-0 border border-blue-900">
                <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                  <path d="M18 20 H48 V34 H32 V46 H44 V58 H32 V80 H18 Z" fill="#F37021"/>
                  <path d="M46 80 V32 L62 56 L78 32 V80 H66 V52 L57 66 L48 52 V80 Z" fill="#FFFFFF"/>
                  <circle cx="82" cy="22" r="6" fill="#F37021"/>
                </svg>
              </div>

              <div>
                <span className="font-heading font-extrabold text-xl text-[#F37021]">
                  Femotech
                </span>
                <span className="font-heading font-bold text-base text-white ml-1.5">
                  Enterprises <span className="text-xs text-slate-400">Pvt Ltd</span>
                </span>
                <span className="block text-[11px] text-orange-400 italic">
                  Serving Beyond Boundaries
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Primary packaging foil manufacturer in Selaqui Industrial Area, Dehradun. 20+ years of aluminium converting experience for pharmaceutical and FMCG formulations.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <Award className="w-4 h-4 shrink-0" />
              <span>AN ISO 9001:2015 &amp; ISO 15378:2017 Certified Company</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-200">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('overview')} className="hover:text-white transition-colors">
                  Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-white transition-colors">
                  Product Catalog (Annexure-II)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('facility')} className="hover:text-white transition-colors">
                  Selaqui Plant &amp; QC Lab
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
                  Plant Location &amp; Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Coordinates */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-200">
              Plant Coordinates
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>Central Hope Town, Camp Road, Selaqui Industrial Area, Dehradun - 248011</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <a href="tel:+919997308215" className="hover:text-white font-mono">
                  +91 99973 08215 (Director)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <a href="mailto:femotechf@gmail.com" className="hover:text-white font-mono">
                  femotechf@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span>© {new Date().getFullYear()} Femotech Enterprises (P) Ltd. All Rights Reserved.</span>
            <span>•</span>
            <span className="font-mono text-slate-400">GSTIN: {companyData.gstin}</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
