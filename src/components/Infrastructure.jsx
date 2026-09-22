import React, { useState } from 'react';
import { equipmentData } from '../data/equipmentData';
import { companyData } from '../data/companyData';
import { Factory, Microscope, CheckCircle2, ShieldCheck, MapPin, Phone, Building2, Wrench } from 'lucide-react';

export default function Infrastructure() {
  const [activeTab, setActiveTab] = useState('machinery');

  return (
    <section id="facility" className="py-14 sm:py-20 lg:py-24 bg-white border-b border-slate-200 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
            <Building2 className="w-3.5 h-3.5 text-orange-500" />
            <span>Infrastructure &amp; Regulatory Compliance (FM/SMF/01)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
            Selaqui Manufacturing Plant &amp; Testing Lab
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Our 8,500 sq. ft. RCC building in Central Hope Town, Selaqui operates under dust- and insect-free cleanroom parameters, utilizing high-precision rotogravure presses and in-house laboratory testing instruments certified under ISO 15378:2017.
          </p>
        </div>

        {/* Real Plant Visual Feature: Exterior + Rewinding Machine */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-14 sm:mb-16 items-center">
          
          {/* Real Selaqui Building Photo */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100 group">
              <img
                src="/images/facility/selaqui_plant_exterior.jpg"
                alt="Femotech Enterprises Plant Building in Central Hope Town, Selaqui Dehradun"
                className="w-full h-[280px] sm:h-[380px] lg:h-[420px] object-cover object-center group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-transparent p-4 sm:p-5 text-white">
                <span className="text-[10px] sm:text-xs font-bold text-orange-400 uppercase tracking-wider block mb-1">
                  Manufacturing Premises • Selaqui, Dehradun
                </span>
                <p className="text-xs sm:text-sm font-heading font-semibold text-slate-100">
                  8,500 Sq. Ft. RCC Structure with Kota Stone Cleanroom Flooring
                </p>
                <span className="text-[10px] sm:text-[11px] text-slate-300 block mt-0.5 truncate">
                  Khasra No. 323MI, Ground Floor, Central Hope Town, Camp Road
                </span>
              </div>
            </div>
          </div>

          {/* Real Rewinding Machine Photo & Key Capabilities */}
          <div className="lg:col-span-5 space-y-5">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-950 group">
              <div className="aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src="/images/facility/rewinding_machine.jpg"
                  alt="Foil Rewinding & Slitting Line on Cleanroom Floor"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="p-3.5 bg-slate-900 text-white flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-slate-100 block text-xs sm:text-sm">Slitting &amp; Rewinding Line</span>
                  <span className="text-slate-400 text-[10px] sm:text-[11px] font-mono">FM.PD.RM.004 • Cleanroom Hall</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 text-[10px] font-bold uppercase tracking-wider">
                  Active
                </span>
              </div>
            </div>

            {/* Quick Plant Highlights */}
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
                <span><strong>5-Colour Rotogravure Press:</strong> Dual-side printing with front and reverse registration.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
                <span><strong>In-House QC Testing Lab:</strong> Optical pinhole tester and bursting strength testing on every batch.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
                <span><strong>Climate Control:</strong> Ductable air conditioning maintaining strict RH% and ambient temperature.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Tabbed Registry: Machinery vs. Testing Lab */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 border-b border-slate-200 pb-4 mb-6 sm:mb-8">
            <button
              onClick={() => setActiveTab('machinery')}
              className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'machinery'
                  ? 'bg-[#0B3B82] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Factory className="w-4 h-4" />
              <span>Production Machinery ({equipmentData.productionEquipment.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('lab')}
              className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'lab'
                  ? 'bg-[#0B3B82] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Microscope className="w-4 h-4" />
              <span>Quality Testing Instruments ({equipmentData.qcLaboratoryEquipment.length})</span>
            </button>
          </div>

          {activeTab === 'machinery' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {equipmentData.productionEquipment.map((eq) => (
                <div key={eq.id} className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm hover:border-orange-300 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-mono text-[#0B3B82] font-bold bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
                      {eq.id}
                    </span>
                    <span className="text-slate-400 text-[11px]">{eq.type}</span>
                  </div>
                  <h4 className="font-heading font-bold text-sm sm:text-base text-slate-900 mb-1.5">
                    {eq.name}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {eq.purpose}
                  </p>
                  <div className="pt-2.5 border-t border-slate-100 text-[11px] text-slate-500">
                    <strong className="text-slate-700">Features:</strong> {eq.features}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {equipmentData.qcLaboratoryEquipment.map((lab) => (
                <div key={lab.id} className="bg-white p-5 sm:p-6 rounded-2xl border border-blue-200/80 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-mono text-blue-900 font-bold bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200">
                      {lab.id}
                    </span>
                    <span className="text-emerald-700 font-semibold text-xs">{lab.category}</span>
                  </div>
                  <h4 className="font-heading font-bold text-base sm:text-lg text-slate-900 mb-1.5">
                    {lab.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                    {lab.purpose}
                  </p>
                  <div className="pt-3 border-t border-slate-100 text-xs text-slate-700 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Standard:</strong> {lab.standard}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Leadership Team (Updated with Client Annotations) */}
        <div className="mt-14 sm:mt-16 pt-10 sm:pt-12 border-t border-slate-200">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
            <Wrench className="w-3.5 h-3.5 text-orange-500" />
            <span>Unit Leadership &amp; Shop Floor Operations</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 tracking-tight mb-6 sm:mb-8">
            Plant Leadership Team
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {companyData.leadership.map((leader, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 sm:p-6 text-left hover:border-orange-300 hover:shadow-sm transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-orange-600 block mb-1">
                    {leader.position}
                  </span>
                  <h4 className="font-heading font-bold text-base sm:text-lg text-slate-900">
                    {leader.name}
                  </h4>
                  <span className="text-xs text-slate-500 font-medium block mt-0.5 mb-2.5">
                    {leader.experience} Aluminium Converting Experience
                  </span>
                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                    {leader.responsibility}
                  </p>
                </div>
                
                <a
                  href={`tel:${leader.phone.replace(/\s+/g, '')}`}
                  className="pt-3 border-t border-slate-200 flex items-center gap-2 text-xs font-mono text-blue-900 hover:text-orange-600 transition-colors font-semibold"
                >
                  <Phone className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                  <span>{leader.phone}</span>
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

