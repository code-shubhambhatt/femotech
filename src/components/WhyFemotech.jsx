import React from 'react';
import { companyData } from '../data/companyData';
import { ShieldCheck, PhoneCall, Truck, Users, Cpu, Award, CheckCircle } from 'lucide-react';

export default function WhyFemotech() {
  const iconMap = {
    ShieldCheck: ShieldCheck,
    Headphones: PhoneCall,
    Truck: Truck,
    Users: Users,
    Cpu: Cpu,
    Award: Award
  };

  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-slate-50 border-b border-slate-200 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
            <CheckCircle className="w-3.5 h-3.5 text-orange-500" />
            <span>The Femotech Standard</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
            Why Pharmaceutical Leaders Choose Us
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Engineered around zero-defect packaging, strict regulatory compliance, and rapid logistics to support uninterrupted pharmaceutical production schedules across North India.
          </p>
        </div>

        {/* 6 Minimalist Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {companyData.whyFemotech.map((pillar, index) => {
            const IconComponent = iconMap[pillar.icon] || ShieldCheck;

            return (
              <div
                key={pillar.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:border-orange-300 hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-[#F37021] group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-300 group-hover:text-orange-400 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 mb-2 group-hover:text-[#0B3B82] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.shortDesc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs text-slate-400">
                  <span>Standard Operating Protocol</span>
                  <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    GMP Certified
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

