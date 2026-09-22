import React, { useState } from 'react';
import { MapPin, Phone, Mail, CreditCard, Send, MessageSquare, ExternalLink, Check, Copy } from 'lucide-react';
import { companyData } from '../data/companyData';
import { productsData } from '../data/productsData';

export default function ContactSection() {
  const [product, setProduct] = useState(productsData[0].id);
  const [thickness, setThickness] = useState('25 microns');
  const [quantity, setQuantity] = useState('500 Kg');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedBankIdx, setCopiedBankIdx] = useState(null);

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const selectedProd = productsData.find(p => p.id === product)?.name || product;
    const msg = `*RFQ - FEMOTECH ENTERPRISES (P) LTD.*
Product: ${selectedProd}
Thickness: ${thickness}
Quantity: ${quantity}
Company: ${company || 'Pharma Buyer'}
Phone: ${phone}
---
Requesting technical specifications & commercial quotation.`;

    window.open(`https://wa.me/${companyData.contacts.whatsapp.replace('+', '')}?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
  };

  const handleCopyBanking = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedBankIdx(idx);
    setTimeout(() => setCopiedBankIdx(null), 2000);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-24 bg-slate-50 border-b border-slate-200 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block mb-2">
            Procurement &amp; Plant Inquiries
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
            Contact Plant &amp; Request Quotation
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Reach out directly to plant leadership in Selaqui, Dehradun for technical queries, customized slitting, or immediate dispatch quotes.
          </p>
        </div>

        {/* 2-Column Clean Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          
          {/* Left Column: Direct Plant Contact & Banking Details */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            
            {/* Address Box */}
            <div className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/90 shadow-sm space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 text-orange-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-slate-900">
                    Manufacturing Facility Address
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                    {companyData.address.line1}, {companyData.address.area}, {companyData.address.city} ({companyData.address.state}) - {companyData.address.pincode}
                  </p>
                  <p className="text-xs text-orange-800 font-medium mt-2 bg-orange-50 p-2.5 rounded-xl border border-orange-200/60">
                    <strong>Landmarks:</strong> {companyData.address.landmark}
                  </p>
                </div>
              </div>

              {/* Direct Phone Lines */}
              <div className="pt-4 border-t border-slate-100 space-y-2.5 text-xs sm:text-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-slate-500 font-medium">Director (Mr. Harinder Singh):</span>
                  <a href="tel:+919997308215" className="font-bold text-[#0B3B82] hover:text-orange-600 font-mono transition-colors">
                    +91 99973 08215
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-slate-500 font-medium">Secondary Director Line:</span>
                  <a href="tel:+919219670001" className="font-bold text-[#0B3B82] hover:text-orange-600 font-mono transition-colors">
                    +91 92196 70001
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-slate-500 font-medium">Plant Operation (Mr. Kishor Parida):</span>
                  <a href="tel:+919012705468" className="font-bold text-[#0B3B82] hover:text-orange-600 font-mono transition-colors">
                    +91 90127 05468
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-slate-500 font-medium">Admin (Mr. Satender Singh):</span>
                  <a href="tel:+919027805875" className="font-bold text-[#0B3B82] hover:text-orange-600 font-mono transition-colors">
                    +91 90278 05875
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pt-2 border-t border-slate-100">
                  <span className="text-slate-500 font-medium">Official Plant Email:</span>
                  <a href="mailto:femotechf@gmail.com" className="font-mono text-blue-900 font-semibold hover:underline">
                    femotechf@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Vendor Empanelment Banking Slip Details */}
            <div className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/90 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-heading font-bold text-slate-900">
                  <CreditCard className="w-4 h-4 text-orange-500" />
                  <span>Vendor Empanelment Banking Coordinates</span>
                </div>
                <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-semibold">
                  RTGS / NEFT
                </span>
              </div>
              
              <p className="text-xs text-slate-500">
                Official verified bank coordinates for enterprise vendor master registration:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {companyData.bankingDetails.map((b, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
                    <div>
                      <span className="font-bold text-slate-900 block">{b.bank}</span>
                      <span className="text-[11px] text-slate-500 block">{b.branch}</span>
                      <div className="mt-2 text-[11px] font-mono">
                        <span className="text-slate-500">A/C:</span> <strong className="text-slate-900">{b.accountNo}</strong>
                      </div>
                      <div className="text-[11px] font-mono text-slate-600">
                        <span className="text-slate-500">IFSC:</span> <strong>{b.ifsc}</strong>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCopyBanking(`A/C: ${b.accountNo}, IFSC: ${b.ifsc}, Bank: ${b.bank}`, i)}
                      className="mt-3 inline-flex items-center justify-center gap-1.5 py-1 px-2.5 rounded-lg bg-white border border-slate-200 text-[11px] font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
                    >
                      {copiedBankIdx === i ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span className="text-emerald-700">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-slate-400" />
                          <span>Copy Details</span>
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Clean RFQ Lead Form */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl p-5 sm:p-8 border border-slate-200/90 shadow-lg space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block mb-1">
                  Fast Quotation
                </span>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900">
                  Submit a Procurement Request
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Direct submission to Mr. Harinder Singh (Director).
                </p>
              </div>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Select Product Substrate *
                  </label>
                  <select
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 outline-none focus:ring-2 focus:ring-orange-500 font-medium"
                  >
                    {productsData.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} ({p.badge})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Thickness
                    </label>
                    <select
                      value={thickness}
                      onChange={(e) => setThickness(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-800 outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="20 microns">20 microns</option>
                      <option value="25 microns">25 microns</option>
                      <option value="30 microns">30 microns</option>
                      <option value="40 microns">40 microns</option>
                      <option value="Alu-Alu Composite">Alu-Alu Composite</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Estimated Qty
                    </label>
                    <select
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-800 outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="Trial Batch (250 Kg)">Trial (250 Kg)</option>
                      <option value="500 Kg">500 Kg</option>
                      <option value="1 Metric Ton">1 Metric Ton</option>
                      <option value="Monthly Contract">Monthly Contract</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Pharma Company / Entity Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Akums, Le-Mantus, Mankind"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Contact Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98XXXXXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 outline-none focus:ring-2 focus:ring-orange-500 font-mono"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-sm py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-98"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Direct WhatsApp Inquiry</span>
                </button>
              </form>

              {/* Map link snippet */}
              <div className="pt-2 text-center">
                <a
                  href="https://maps.google.com/?q=Central+Hope+Town,+Camp+Road,+Industrial+Area+Selaqui,+Dehradun,+Uttarakhand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-800 hover:text-orange-600 transition-colors"
                >
                  <span>View Selaqui Plant on Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

