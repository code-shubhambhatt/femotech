import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickStats from './components/QuickStats';
import ClientMarquee from './components/ClientMarquee';
import ProductCatalog from './components/ProductCatalog';
import WhyFemotech from './components/WhyFemotech';
import Infrastructure from './components/Infrastructure';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import RFQBuilder from './components/RFQBuilder';
import { X, ArrowRight, Factory, ShieldCheck, Phone, MessageSquare } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isRfqModalOpen, setIsRfqModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState('');

  const handleOpenRfq = (productId = '') => {
    setSelectedProductId(productId);
    setIsRfqModalOpen(true);
  };

  const handleCloseRfq = () => {
    setIsRfqModalOpen(false);
  };

  const handleNavigate = (tabId) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans antialiased pb-20 sm:pb-0">
      {/* 1. Minimal Top Bar */}
      <TopBar />

      {/* 2. Sleek Navbar with Tab Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleNavigate}
        onOpenRfq={() => handleOpenRfq()}
      />

      {/* 3. Main Dynamic View Container */}
      <main className="flex-1">
        
        {/* VIEW 1: OVERVIEW (Minimal, Curated, Image-Led ~1,800px) */}
        {activeTab === 'overview' && (
          <div className="animate-fadeIn">
            {/* Hero with Real 5-Colour Rotogravure Press Photo */}
            <Hero
              onNavigate={handleNavigate}
              onOpenRfq={() => handleOpenRfq()}
            />

            {/* Quantitative Quality & Scale Stats */}
            <QuickStats />

            {/* Client Validation Bar (Mankind, Akums, Bal Pharma, Zeon) */}
            <ClientMarquee />

            {/* Featured Products (Only Top 3 with Real Roll Photos) */}
            <ProductCatalog
              isCompact={true}
              onNavigateAll={handleNavigate}
              onOpenRfq={handleOpenRfq}
            />


            {/* Real Facility Highlight Banner */}
            <section className="py-16 sm:py-20 bg-slate-900 text-white text-left">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  
                  {/* Photo of Selaqui Plant - Full & Uncropped */}
                  <div className="lg:col-span-6">
                    <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-xl bg-slate-950">
                      <img
                        src="/images/facility/selaqui_plant_exterior.jpg"
                        alt="Femotech Selaqui Manufacturing Plant"
                        className="w-full h-auto object-contain block hover:scale-[1.01] transition-transform duration-700"
                      />
                    </div>
                  </div>

                  {/* Copy & Details */}
                  <div className="lg:col-span-6 space-y-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                      Selaqui Industrial Hub • 8,500 Sq. Ft.
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
                      Dust-Free Cleanroom Packaging Facility
                    </h2>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Constructed with heavy-duty RCC and Kota stone flooring, our Dehradun facility operates multi-colour rotogravure printing, automated core cutting, and precision slitting under climate-controlled ductable air conditioning.
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={() => handleNavigate('facility')}
                        className="inline-flex items-center gap-2 bg-[#F37021] hover:bg-[#D3580E] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-all"
                      >
                        <span>View Machinery &amp; Testing Lab</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* Why Femotech - 6 Core Pillars (Minimalist Grid) */}
            <WhyFemotech />

            {/* Quick Procurement Action Strip */}
            <section className="py-14 bg-white border-b border-slate-200 text-center">
              <div className="max-w-3xl mx-auto px-4 sm:px-6">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block mb-2">
                  Direct Director Line
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 tracking-tight">
                  Need Immediate Foil Specifications or Samples?
                </h3>
                <p className="text-sm text-slate-600 mt-2 mb-6">
                  Speak directly with Mr. Harinder Singh (Director) for technical parameters, slot availability, and bulk commercial rates.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="tel:+919997308215"
                    className="inline-flex items-center gap-2 bg-[#0B3B82] hover:bg-blue-950 text-white font-semibold text-sm px-6 py-3 rounded-lg shadow-sm transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call +91 99973 08215</span>
                  </a>
                  <a
                    href="https://wa.me/919997308215?text=Hello%20Mr.%20Harinder%20Singh%2C%20I%20would%20like%20to%20inquire%20regarding%20pharmaceutical%20foil%20specifications."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-sm px-6 py-3 rounded-lg shadow-sm transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Director</span>
                  </a>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* VIEW 2: PRODUCT CATALOG (All 6 Products with Real Roll Photos & Specs) */}
        {activeTab === 'products' && (
          <div className="animate-fadeIn">
            <ProductCatalog
              isCompact={false}
              onNavigateAll={handleNavigate}
              onOpenRfq={handleOpenRfq}
            />
          </div>
        )}

        {/* VIEW 3: PLANT & FACILITY (Real Selaqui Building, 5-Colour Press, QC Lab) */}
        {activeTab === 'facility' && (
          <div className="animate-fadeIn">
            <Infrastructure />
          </div>
        )}

        {/* VIEW 4: CONTACT & RFQ (Map, Phone Numbers, RFQ Form, Bank Details) */}
        {activeTab === 'contact' && (
          <div className="animate-fadeIn">
            <ContactSection />
          </div>
        )}

      </main>

      {/* 4. Minimalist Corporate Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* 5. Floating WhatsApp Button & Mobile Action Bar */}
      <WhatsAppFloat onOpenRfq={() => handleOpenRfq()} />

      {/* 6. RFQ Modal Popup */}
      {isRfqModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
          <div className="relative w-full max-w-2xl my-8">
            <button
              onClick={handleCloseRfq}
              className="absolute -top-3 -right-3 sm:top-4 sm:right-4 z-10 w-9 h-9 rounded-full bg-slate-800 text-white flex items-center justify-center shadow-lg hover:bg-slate-700 transition-colors"
              aria-label="Close quote modal"
            >
              <X className="w-5 h-5" />
            </button>
            <RFQBuilder
              defaultProductId={selectedProductId}
              isModal={true}
              onClose={handleCloseRfq}
            />
          </div>
        </div>
      )}
    </div>
  );
}
