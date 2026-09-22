import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, PhoneCall, Home, Layers, Factory, Mail, FileText } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Navbar({ activeTab, setActiveTab, onOpenRfq }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'products', label: 'Product Catalog', icon: Layers },
    { id: 'facility', label: 'Plant & Facility', icon: Factory },
    { id: 'contact', label: 'Contact & RFQ', icon: Mail },
  ];

  // Close drawer on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo with official branding */}
          <button 
            onClick={() => handleTabClick('overview')}
            className="flex items-center gap-3 sm:gap-3.5 group text-left focus:outline-none min-w-0"
          >
            {/* Custom SVG Logo Emblem */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-blue-950 to-[#0B3B82] p-1.5 shadow-md flex items-center justify-center shrink-0 border border-blue-900 group-hover:scale-105 transition-transform">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                <path d="M18 20 H48 V34 H32 V46 H44 V58 H32 V80 H18 Z" fill="#F37021"/>
                <path d="M46 80 V32 L62 56 L78 32 V80 H66 V52 L57 66 L48 52 V80 Z" fill="#FFFFFF"/>
                <circle cx="82" cy="22" r="6" fill="#F37021"/>
              </svg>
            </div>

            <div className="flex flex-col min-w-0">
              <div className="flex items-baseline gap-1 sm:gap-1.5 flex-wrap">
                <span className="font-heading font-extrabold text-lg sm:text-2xl tracking-tight text-[#F37021]">
                  Femotech
                </span>
                <span className="font-heading font-bold text-sm sm:text-lg tracking-tight text-[#0B3B82]">
                  Enterprises <span className="text-xs sm:text-sm font-semibold text-slate-600">Pvt Ltd</span>
                </span>
              </div>
              
              <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-medium text-slate-500 truncate">
                <span className="text-orange-600 italic font-semibold">Serving Beyond Boundaries</span>
                <span className="hidden sm:inline text-slate-300">•</span>
                <span className="hidden sm:inline text-slate-600 font-semibold">(ISO 9001:2015 &amp; ISO 15378:2017)</span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-1 p-1 bg-slate-100/80 rounded-xl border border-slate-200">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === item.id
                    ? 'bg-white text-[#0B3B82] shadow-sm font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action: Request a Quote CTA (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenRfq()}
              className="inline-flex items-center gap-2 bg-[#F37021] hover:bg-[#D3580E] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Instant Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 active:scale-95 transition-all"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-slate-900" /> : <Menu className="w-5 h-5 text-slate-900" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu with Backdrop */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex flex-col justify-start">
          {/* Backdrop overlay */}
          <div 
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content sheet */}
          <div className="relative bg-white border-b border-slate-200 px-5 pt-4 pb-8 space-y-4 shadow-2xl animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Navigation Menu
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleTabClick(item.id)}
                    className={`flex items-center gap-3 text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-orange-50 text-orange-600 font-bold border-l-4 border-[#F37021] shadow-xs'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <IconComponent className={`w-4 h-4 ${isActive ? 'text-orange-500' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRfq();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#F37021] hover:bg-[#D3580E] text-white py-3 rounded-xl font-semibold text-sm shadow-sm active:scale-98 transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>Request for Quotation (RFQ)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <a
                href={`tel:${companyData.contacts.primaryPhone.replace(/\s+/g, '')}`}
                className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white py-2.5 rounded-xl font-medium text-xs transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-orange-400" />
                <span>Call Director ({companyData.contacts.primaryPhone})</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

