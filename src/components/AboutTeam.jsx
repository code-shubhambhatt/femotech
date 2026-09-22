import React from 'react';
import { companyData } from '../data/companyData';
import { Users, Phone, Award, Shield, CheckCircle, Network } from 'lucide-react';

export default function AboutTeam() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-slate-200 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Company Background Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-800 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              <Shield className="w-3.5 h-3.5 text-blue-600" />
              <span>Established 2014 • Selaqui, Dehradun</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
              About <span className="text-[#0B3B82]">Femotech Enterprises</span> Pvt Ltd
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We <strong className="text-slate-900">FEMOTECH ENTERPRISES PVT LTD</strong> are a leading supplier and converter of Printed and Plain Aluminium foils used as primary packaging material for the Pharmaceutical &amp; Nutraceuticals Industries. 
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              The promoters of FEMOTECH ENTERPRISES PVT LTD, who have been in the Aluminium industry since 2014, observed there was a critical need for a reliable foil supplier offering quality products with timely delivery at a high level of commitment.
            </p>

            <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-4 text-xs font-medium text-slate-700">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Dust- &amp; Insect-Free Plant</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Central Hope Town, Selaqui Base</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>ISO 15378:2017 Pharma Packaging Standard</span>
              </div>
            </div>
          </div>

          {/* Plant Stats Card */}
          <div className="lg:col-span-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <h3 className="font-heading font-bold text-lg text-slate-900 flex items-center gap-2">
                <Award className="w-5 h-5 text-orange-500" />
                <span>Operational Core Credentials</span>
              </h3>

              <div className="grid grid-cols-2 gap-4 text-left">
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <span className="text-xs text-slate-500 block">Leadership Experience</span>
                  <span className="text-2xl font-heading font-bold text-blue-900">20+ Years</span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">Aluminium Converting</span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <span className="text-xs text-slate-500 block">Manufacturing Base</span>
                  <span className="text-2xl font-heading font-bold text-orange-600">8,500 Sq. Ft.</span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">Selakui Ind. Area</span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <span className="text-xs text-slate-500 block">Quality System</span>
                  <span className="text-2xl font-heading font-bold text-emerald-700">ISO 15378</span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">GMP Primary Packaging</span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <span className="text-xs text-slate-500 block">Audit Response</span>
                  <span className="text-2xl font-heading font-bold text-purple-700">&lt; 15 Days</span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">CAPA Resolution Time</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Leadership Team (With Client Corrected Roles) */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
            <Users className="w-4 h-4" />
            <span>Key Management &amp; Technical Operations</span>
          </div>

          <h3 className="text-2xl font-heading font-bold text-slate-900 tracking-tight mb-8">
            Leadership Team
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {companyData.leadership.map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow relative text-left"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-900 to-slate-800 text-white font-heading font-bold text-lg flex items-center justify-center shadow-md">
                    {member.name.split(' ').slice(1, 3).map(n => n[0]).join('')}
                  </div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold">
                    {member.experience}
                  </span>
                </div>

                <h4 className="font-heading font-bold text-lg text-slate-900">
                  {member.name}
                </h4>

                <span className="inline-block text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
                  {member.position}
                </span>

                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  {member.responsibility}
                </p>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-slate-700">
                  <Phone className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                  <span className="font-mono">{member.phone}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Factory Organogram / Hierarchy Section (from Annexure-I) */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900 mb-2">
            <Network className="w-4 h-4 text-orange-500" />
            <span>Annexure-I Organogram Flow Chart</span>
          </div>

          <h3 className="text-xl font-heading font-bold text-slate-900 tracking-tight mb-6">
            Factory Operational Hierarchy
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            {/* QA/QC */}
            <div className="bg-white border border-slate-200 rounded-xl p-4">
              <span className="font-bold text-blue-900 block text-sm mb-1">QA / QC Department</span>
              <p className="text-slate-600 mb-3">Head of QA/QC overseeing compliance, STP, and batch release (COA).</p>
              <ul className="space-y-1 text-slate-500">
                <li>• Officer QA (STP &amp; Documentation)</li>
                <li>• Officer QC (Pinhole &amp; Bursting Tests)</li>
              </ul>
            </div>

            {/* Production */}
            <div className="bg-white border border-slate-200 rounded-xl p-4">
              <span className="font-bold text-orange-700 block text-sm mb-1">Plant Operation</span>
              <p className="text-slate-600 mb-3">Supervisor Production overseeing shop floor converting &amp; slitting.</p>
              <ul className="space-y-1 text-slate-500">
                <li>• Operators - Printing Presses (5, 4, 3 Colours)</li>
                <li>• Operators - Rewinding &amp; Core Slitting</li>
              </ul>
            </div>

            {/* Admin & Accounts */}
            <div className="bg-white border border-slate-200 rounded-xl p-4">
              <span className="font-bold text-slate-800 block text-sm mb-1">Admin, HR &amp; Store</span>
              <p className="text-slate-600 mb-3">Accounts, Raw Material Store, and Finished Goods dispatch.</p>
              <ul className="space-y-1 text-slate-500">
                <li>• Store &amp; Cylinder Inventory (Room-I &amp; II)</li>
                <li>• Dedicated Fleet &amp; Logistics Management</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
