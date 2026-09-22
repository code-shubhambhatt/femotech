import React from 'react';
import { Award, Factory, Users, ShieldCheck } from 'lucide-react';

export default function QuickStats() {
  const stats = [
    {
      value: "20+",
      unit: "Years",
      label: "Converting Experience",
      desc: "Aluminium converting & foil engineering",
      icon: Award
    },
    {
      value: "8,500",
      unit: "Sq. Ft.",
      label: "Selaqui Facility",
      desc: "Dust- & insect-free RCC cleanroom",
      icon: Factory
    },
    {
      value: "5-Colour",
      unit: "Rotogravure",
      label: "Printing Press",
      desc: "Precision front & back registration",
      icon: Users
    },
    {
      value: "100%",
      unit: "Batch Tested",
      label: "COA Certification",
      desc: "Pinhole & bursting strength verified",
      icon: ShieldCheck
    }
  ];

  return (
    <div className="bg-slate-50/60 border-b border-slate-200 py-8 sm:py-10 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 hover:border-orange-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading font-extrabold text-xl sm:text-3xl text-slate-900 tracking-tight group-hover:text-[#0B3B82] transition-colors">
                      {stat.value}
                    </span>
                    <span className="text-[10px] sm:text-xs font-bold text-[#F37021] uppercase">
                      {stat.unit}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-xl bg-orange-50 border border-orange-200/60 text-[#F37021] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <span className="font-heading font-bold text-xs sm:text-sm text-slate-800 block">
                  {stat.label}
                </span>
                <span className="text-[11px] sm:text-xs text-slate-500 block mt-0.5 line-clamp-1">
                  {stat.desc}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

