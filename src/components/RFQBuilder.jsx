import React, { useState } from 'react';
import { Send, Phone, MessageSquare, CheckCircle, Calculator, FileCheck } from 'lucide-react';
import { productsData } from '../data/productsData';
import { companyData } from '../data/companyData';

export default function RFQBuilder({ defaultProductId = '', isModal = false, onClose = () => {} }) {
  const [formData, setFormData] = useState({
    product: defaultProductId || productsData[0].id,
    thickness: '25 microns',
    printing: 'Printed (Multi-Colour Custom)',
    quantity: '500 Kg',
    companyName: '',
    contactName: '',
    phone: '',
    email: '',
    destinationCity: 'Dehradun / North India',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const selectedProductObj = productsData.find(p => p.id === formData.product) || productsData[0];

  const handleSubmit = (channel) => {
    const selectedProd = productsData.find(p => p.id === formData.product)?.name || formData.product;
    
    const message = `*NEW RFQ - FEMOTECH ENTERPRISES (P) LTD.*
━━━━━━━━━━━━━━━━━━━━
*Product:* ${selectedProd}
*Thickness:* ${formData.thickness}
*Printing:* ${formData.printing}
*Estimated Qty:* ${formData.quantity}
*Destination:* ${formData.destinationCity}
━━━━━━━━━━━━━━━━━━━━
*Company:* ${formData.companyName || 'Not specified'}
*Contact Person:* ${formData.contactName || 'Not specified'}
*Phone:* ${formData.phone || 'Not specified'}
*Email:* ${formData.email || 'Not specified'}
*Notes:* ${formData.notes || 'None'}
━━━━━━━━━━━━━━━━━━━━
_Requesting official technical spec sheet & commercial price quote._`;

    if (channel === 'whatsapp') {
      const waUrl = `https://wa.me/${companyData.contacts.whatsapp.replace('+', '')}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank');
      setSubmitted(true);
    } else {
      const mailtoUrl = `mailto:${companyData.contacts.emails[0]}?subject=${encodeURIComponent(`RFQ for ${selectedProd} - ${formData.companyName}`)}&body=${encodeURIComponent(message)}`;
      window.location.href = mailtoUrl;
      setSubmitted(true);
    }
  };

  return (
    <section id="rfq" className={`${isModal ? 'p-0' : 'py-16 sm:py-24 bg-slate-100/70 border-b border-slate-200'} text-left`}>
      <div className={`${isModal ? '' : 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'}`}>
        
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 to-blue-950 text-white p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-semibold text-orange-400 uppercase tracking-wider mb-2">
              <Calculator className="w-4 h-4" />
              <span>Direct Procurement Portal</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
              Request a Commercial Quote (RFQ)
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Select product specifications and receive instant dispatch rates from our Selaqui, Dehradun plant.
            </p>
          </div>

          {/* Form */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Step 1: Product Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                1. Select Foil or Laminate Substrate *
              </label>
              <select
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              >
                {productsData.map(p => (
                  <option key={p.id} value={p.id}>
                    {p.name} ({p.badge})
                  </option>
                ))}
              </select>
            </div>

            {/* Step 2: Technical Parameters */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Thickness / Micron
                </label>
                <select
                  value={formData.thickness}
                  onChange={(e) => setFormData({ ...formData, thickness: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-orange-500 outline-none"
                >
                  <option value="20 microns">20 microns (Blister)</option>
                  <option value="25 microns">25 microns (Standard)</option>
                  <option value="30 microns">30 microns (Heavy duty)</option>
                  <option value="40 microns">40 microns (Specialty)</option>
                  <option value="Alu-Alu Cold Form (135µ composite)">Alu-Alu Composite</option>
                  <option value="Custom Specification">Custom Requirement</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Printing Requirement
                </label>
                <select
                  value={formData.printing}
                  onChange={(e) => setFormData({ ...formData, printing: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-orange-500 outline-none"
                >
                  <option value="Plain Foil (Unprinted)">Plain Foil (Unprinted)</option>
                  <option value="Single Colour Printing">1 Colour Printing</option>
                  <option value="2 to 3 Colour Printing">2–3 Colour Printing</option>
                  <option value="4 to 5 Colour Rotogravure">4–5 Colour High Speed</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Estimated Quantity
                </label>
                <select
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-orange-500 outline-none"
                >
                  <option value="Trial Batch (100 - 250 Kg)">Trial Batch (100–250 Kg)</option>
                  <option value="500 Kg">500 Kg</option>
                  <option value="1 Metric Ton (1000 Kg)">1 Metric Ton (1000 Kg)</option>
                  <option value="3 to 5 Metric Tons">3–5 Metric Tons</option>
                  <option value="Regular Monthly Contract">Monthly Rolling Contract</option>
                </select>
              </div>
            </div>

            {/* Step 3: Company & Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-200">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Pharma Company / Firm Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g., Le-Mantus Pharmaceuticals"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-orange-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Contact Person *
                </label>
                <input
                  type="text"
                  placeholder="Purchase / Quality Manager"
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-orange-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Direct Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  placeholder="+91 98XXXXXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-orange-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Delivery Destination
                </label>
                <input
                  type="text"
                  placeholder="City (e.g. Baddi, Roorkee, Dehradun, Haridwar)"
                  value={formData.destinationCity}
                  onChange={(e) => setFormData({ ...formData, destinationCity: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>
            </div>

            {/* Special Instructions / Notes */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Special Specifications / Artwork Details
              </label>
              <textarea
                rows="2"
                placeholder="Mention roll width, core ID (76mm), or repeat artwork cylinder requirements..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500 flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-emerald-600" />
                <span>Quotation backed by Certificate of Analysis (COA)</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => handleSubmit('whatsapp')}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-sm px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleSubmit('email')}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#F37021] hover:bg-[#D3580E] text-white font-semibold text-sm px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit via Email</span>
                </button>
              </div>
            </div>

            {submitted && (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-800 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Your inquiry has been formulated and sent directly to Mr. Harinder Singh (Director). We will revert within 2 hours.</span>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
