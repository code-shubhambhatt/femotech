import React, { useState } from 'react';
import { productsData } from '../data/productsData';
import { ArrowRight, FileText, Check, Shield } from 'lucide-react';
import ProductModal from './ProductModal';

export default function ProductCatalog({ isCompact = false, onNavigateAll, onOpenRfq }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalProduct, setActiveModalProduct] = useState(null);

  const categories = [
    { id: 'all', label: 'All Products (6)' },
    { id: 'blister', label: 'Blister Foil' },
    { id: 'alu-alu', label: 'Alu-Alu Cold Form' },
    { id: 'strip', label: 'Strip Foil' },
    { id: 'laminates', label: 'Paper & CR Laminates' },
    { id: 'films', label: 'PVC / PVDC Films' },
  ];

  const displayedProducts = isCompact
    ? productsData.slice(0, 3)
    : (selectedCategory === 'all' ? productsData : productsData.filter(p => p.category === selectedCategory));

  return (
    <section id="products" className="py-14 sm:py-20 lg:py-24 bg-white border-b border-slate-200 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
              <Shield className="w-3.5 h-3.5 text-orange-500" />
              <span>Annexure-II Primary Packaging Range</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
              {isCompact ? "Featured Pharmaceutical Foils" : "Pharmaceutical Packaging Catalog"}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              Manufactured in our Selaqui facility to exact pharmacopoeia tolerances with pinhole-free barrier guarantees and batch Certificate of Analysis (COA).
            </p>
          </div>

          {isCompact && (
            <button
              onClick={() => onNavigateAll('products')}
              className="inline-flex items-center gap-2 font-semibold text-sm text-[#0B3B82] hover:text-[#F37021] transition-colors self-start md:self-auto py-1 group"
            >
              <span>Explore All 6 Product Lines</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>

        {/* Filter Tabs (Only shown when not in compact mode) */}
        {!isCompact && (
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 sm:mb-10 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#0B3B82] text-white shadow-sm font-bold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {/* Clean, Image-Led Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              {/* Product Card Top: Real Roll Photography */}
              <div>
                <div className="relative aspect-[16/11] bg-slate-100 overflow-hidden border-b border-slate-200">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-900/85 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider shadow-sm">
                    {product.badge}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 group-hover:text-[#0B3B82] transition-colors mb-2">
                    {product.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
                    {product.summary}
                  </p>

                  {/* 3 Clean Engineering Bullets */}
                  <div className="space-y-1.5 text-xs text-slate-700 bg-slate-50 p-3 sm:p-3.5 rounded-xl border border-slate-200/80 font-medium">
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[2.5]" />
                      <span>Gauge: <strong className="font-mono text-slate-900">{product.specs.thickness || "Custom"}</strong></span>
                    </div>
                    {product.specs.coatingOptions && (
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[2.5]" />
                        <span className="truncate">Coating: <span className="text-slate-800">{product.specs.coatingOptions}</span></span>
                      </div>
                    )}
                    {product.specs.sealingCompatibility && (
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[2.5]" />
                        <span className="truncate">Seals: <span className="text-slate-800">{product.specs.sealingCompatibility}</span></span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-5 sm:px-6 py-3.5 border-t border-slate-100 bg-slate-50/60 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveModalProduct(product)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B3B82] hover:text-[#F37021] transition-colors py-1"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Technical Specs</span>
                </button>

                <button
                  onClick={() => onOpenRfq(product.id)}
                  className="inline-flex items-center gap-1.5 bg-[#F37021] hover:bg-[#D3580E] text-white text-xs font-semibold px-3.5 py-1.5 rounded-lg shadow-sm hover:shadow transition-all active:scale-95"
                >
                  <span>Get Quote</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Modal Sheet */}
        {activeModalProduct && (
          <ProductModal
            product={activeModalProduct}
            onClose={() => setActiveModalProduct(null)}
            onOpenRfq={onOpenRfq}
          />
        )}

      </div>
    </section>
  );
}

