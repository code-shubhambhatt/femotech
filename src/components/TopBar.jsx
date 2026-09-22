import React from 'react';
import { Phone, Mail, MapPin, Award } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function TopBar() {
  return (
    <div className="bg-slate-900 text-slate-300 text-xs border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 sm:py-2.5 gap-1.5 sm:gap-2">
          
          {/* Direct Contact & Location */}
          <div className="flex items-center justify-between sm:justify-start gap-x-6 gap-y-1 text-slate-300 font-medium">
            <a 
              href={`tel:${companyData.contacts.primaryPhone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 hover:text-orange-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-orange-400 shrink-0" />
              <span className="font-mono">{companyData.contacts.primaryPhone}</span>
            </a>

            <a 
              href={`mailto:${companyData.contacts.emails[0]}`}
              className="hidden md:flex items-center gap-1.5 hover:text-orange-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-orange-400 shrink-0" />
              <span>{companyData.contacts.emails[0]}</span>
            </a>

            <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
              <span>Selaqui Industrial Area, Dehradun</span>
            </div>

            {/* Mobile-only GSTIN */}
            <span className="sm:hidden font-mono text-[10px] text-slate-400">
              GST: {companyData.gstin}
            </span>
          </div>

          {/* Clean ISO Badge & Desktop GSTIN */}
          <div className="flex items-center gap-3 text-[11px] text-slate-400 justify-between sm:justify-end">
            <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <Award className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="tracking-tight">ISO 9001:2015 &amp; ISO 15378:2017 Certified</span>
            </div>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="hidden sm:inline font-mono text-slate-400">GST: {companyData.gstin}</span>
          </div>

        </div>
      </div>
    </div>
  );
}

