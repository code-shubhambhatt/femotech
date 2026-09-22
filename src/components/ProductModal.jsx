import React, { useEffect } from 'react';
import { X, CheckCircle2, Layers, ShieldCheck, ArrowRight, Printer, MessageSquare, Download } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function ProductModal({ product, onClose, onOpenRfq }) {
  if (!product) return null;

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const handleInquire = () => {
    onClose();
    onOpenRfq(product.id);
  };

  const handleWhatsApp = () => {
    const text = `Hello Femotech Enterprises, I would like to inquire about specifications and commercial rates for: ${product.name}.`;
    window.open(`https://wa.me/${companyData.contacts.whatsapp.replace('+', '')}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden my-4 sm:my-8 text-left z-10 flex flex-col max-h-[92vh]">
        
        {/* Sticky Header with real photo snippet */}
        <div className="sticky top-0 z-20 bg-slate-900 text-white p-4 sm:p-6 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl overflow-hidden border border-slate-700 bg-slate-800 shrink-0 shadow-inner">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-w-0">
              <span className="inline-block px-2 py-0.5 rounded bg-[#F37021] text-white text-[10px] font-bold uppercase tracking-wider mb-0.5">
                {product.badge}
              </span>
              <h3 className="font-heading font-extrabold text-base sm:text-xl text-white truncate">
                {product.name}
              </h3>
              <p className="text-[11px] text-slate-400 truncate">
                Technical Data Sheet • Femotech Annexure-II (Rev-03)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0 ml-3">
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 text-xs font-semibold transition-colors"
              title="Print Specification Sheet"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print TDS</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-4 sm:p-7 space-y-6 overflow-y-auto flex-1">
          
          {/* Summary */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Description &amp; Use
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {product.summary}
            </p>
          </div>

          {/* Layer Composition */}
          {product.specs.structure && (
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900 mb-3">
                <Layers className="w-4 h-4 text-orange-500" />
                <span>Multi-Layer Lamination Architecture</span>
              </div>

              <div className="space-y-2">
                {product.specs.structure.map((layer, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200 text-xs sm:text-sm"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-slate-100 border border-slate-300 font-bold text-[11px] text-slate-600 flex items-center justify-center shrink-0">
                        L{idx + 1}
                      </span>
                      <div>
                        <span className="font-bold text-slate-900 block">{layer.name}</span>
                        <span className="text-xs text-slate-500">{layer.desc}</span>
                      </div>
                    </div>
                    <span className="w-3 h-3 rounded-full shrink-0 shadow-xs" style={{ backgroundColor: layer.color }} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technical Specifications Table */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Technical Specifications &amp; Quality Parameters
            </h4>
            <div className="border border-slate-200 rounded-xl overflow-hidden text-xs sm:text-sm shadow-xs">
              <table className="min-w-full divide-y divide-slate-200">
                <tbody className="divide-y divide-slate-200">
                  {product.specs.thickness && (
                    <tr className="spec-table-row">
                      <td className="px-4 py-2.5 font-semibold text-slate-800 bg-slate-50/70 w-1/3">Thickness</td>
                      <td className="px-4 py-2.5 text-slate-700 font-mono font-bold">{product.specs.thickness}</td>
                    </tr>
                  )}
                  {product.specs.temper && (
                    <tr className="spec-table-row">
                      <td className="px-4 py-2.5 font-semibold text-slate-800 bg-slate-50/70">Temper &amp; Alloy</td>
                      <td className="px-4 py-2.5 text-slate-600">{product.specs.temper}</td>
                    </tr>
                  )}
                  {product.specs.coatingOptions && (
                    <tr className="spec-table-row">
                      <td className="px-4 py-2.5 font-semibold text-slate-800 bg-slate-50/70">Coating Options</td>
                      <td className="px-4 py-2.5 text-slate-600">{product.specs.coatingOptions}</td>
                    </tr>
                  )}
                  {product.specs.heatSealStrength && (
                    <tr className="spec-table-row">
                      <td className="px-4 py-2.5 font-semibold text-slate-800 bg-slate-50/70">Heat Seal Strength</td>
                      <td className="px-4 py-2.5 text-slate-600 font-mono">{product.specs.heatSealStrength}</td>
                    </tr>
                  )}
                  {product.specs.ldpeSpecs && (
                    <tr className="spec-table-row">
                      <td className="px-4 py-2.5 font-semibold text-slate-800 bg-slate-50/70">LDPE Specification</td>
                      <td className="px-4 py-2.5 text-slate-600">{product.specs.ldpeSpecs}</td>
                    </tr>
                  )}
                  {product.specs.structureLayers && (
                    <tr className="spec-table-row">
                      <td className="px-4 py-2.5 font-semibold text-slate-800 bg-slate-50/70">Structure Composition</td>
                      <td className="px-4 py-2.5 text-slate-600 font-mono">{product.specs.structureLayers}</td>
                    </tr>
                  )}
                  {product.specs.printing && (
                    <tr className="spec-table-row">
                      <td className="px-4 py-2.5 font-semibold text-slate-800 bg-slate-50/70">Printing</td>
                      <td className="px-4 py-2.5 text-slate-600">{product.specs.printing}</td>
                    </tr>
                  )}
                  {product.specs.sealingCompatibility && (
                    <tr className="spec-table-row">
                      <td className="px-4 py-2.5 font-semibold text-slate-800 bg-slate-50/70">Base Compatibility</td>
                      <td className="px-4 py-2.5 text-slate-600">{product.specs.sealingCompatibility}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Applications */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Primary Applications
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
              {product.applications.map((app, i) => (
                <li key={i} className="flex items-start gap-2 bg-slate-50/80 p-2.5 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{app}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Sticky Modal Footer Actions */}
        <div className="sticky bottom-0 z-20 bg-slate-50 px-4 sm:px-6 py-3.5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <span className="hidden sm:inline text-xs text-slate-500">
            Custom slit widths (core 76mm) &amp; GSM coating thicknesses available upon request.
          </span>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={handleWhatsApp}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-sm transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </button>

            <button
              onClick={handleInquire}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 bg-[#F37021] hover:bg-[#D3580E] text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-md transition-all active:scale-98"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

