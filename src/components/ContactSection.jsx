import React from 'react';
import { MapPin, Phone, Mail, MessageSquare, ExternalLink, Clock, Building2 } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function ContactSection() {
  const handleDirectorWhatsApp = () => {
    const text = "Hello Mr. Harinder Singh, I would like to inquire regarding pharmaceutical foil specifications and dispatch schedules.";
    window.open(`https://wa.me/${companyData.contacts.whatsapp.replace('+', '')}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-24 bg-slate-50 border-b border-slate-200 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
            <Building2 className="w-3.5 h-3.5 text-orange-500" />
            <span>Plant Location &amp; Contact Coordinates</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
            Selaqui Manufacturing Plant &amp; Direct Inquiries
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Reach out directly to plant leadership and operations at our Dehradun facility for technical parameters, slot availability, or facility audit appointments.
          </p>
        </div>

        {/* 2-Column Grid: Contact Coordinates (Left) & Live Google Map (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Plant Leadership & Address Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Manufacturing Address Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 text-orange-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-slate-900">
                    Plant Facility Address
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                    {companyData.address.line1}, {companyData.address.area}, {companyData.address.city} ({companyData.address.state}) - {companyData.address.pincode}
                  </p>
                  <div className="mt-3 p-3 bg-orange-50/80 rounded-xl border border-orange-200/70 text-xs text-orange-900 leading-relaxed">
                    <strong className="text-orange-800">Landmarks:</strong> {companyData.address.landmark}
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="pt-3 border-t border-slate-100 flex items-center gap-2.5 text-xs text-slate-600">
                <Clock className="w-4 h-4 text-[#0B3B82] shrink-0" />
                <span>
                  <strong>Operations:</strong> 24/7 Production • Dispatches: Mon – Sat (8:00 AM – 7:00 PM)
                </span>
              </div>
            </div>

            {/* Direct Phone Lines Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-3.5">
              <h4 className="font-heading font-bold text-sm text-slate-900 uppercase tracking-wider text-slate-500 pb-2 border-b border-slate-100">
                Direct Contact Directory
              </h4>

              <div className="space-y-3 text-xs sm:text-sm">
                {/* Director */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-slate-600 font-medium">Director (Mr. Harinder Singh):</span>
                  <a href="tel:+919997308215" className="font-bold text-[#0B3B82] hover:text-orange-600 font-mono transition-colors">
                    +91 99973 08215
                  </a>
                </div>

                {/* Secondary Director Line */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-slate-600 font-medium">Secondary Director Line:</span>
                  <a href="tel:+919219670001" className="font-bold text-[#0B3B82] hover:text-orange-600 font-mono transition-colors">
                    +91 92196 70001
                  </a>
                </div>

                {/* Plant Operations */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-slate-600 font-medium">Plant Operation (Mr. Kishor Parida):</span>
                  <a href="tel:+919012705468" className="font-bold text-[#0B3B82] hover:text-orange-600 font-mono transition-colors">
                    +91 90127 05468
                  </a>
                </div>

                {/* Administration */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-slate-600 font-medium">Administration (Mr. Satender Singh):</span>
                  <a href="tel:+919027805875" className="font-bold text-[#0B3B82] hover:text-orange-600 font-mono transition-colors">
                    +91 90278 05875
                  </a>
                </div>

                {/* Email */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pt-2.5 border-t border-slate-100">
                  <span className="text-slate-600 font-medium">Official Plant Email:</span>
                  <a href="mailto:femotechf@gmail.com" className="font-mono text-[#0B3B82] font-semibold hover:underline">
                    femotechf@gmail.com
                  </a>
                </div>
              </div>

              {/* Direct Quick WhatsApp Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleDirectorWhatsApp}
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs sm:text-sm py-3 rounded-xl shadow-sm hover:shadow-md transition-all active:scale-98"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat Directly with Director on WhatsApp</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Live Interactive Google Maps Embed */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-white rounded-2xl p-3 sm:p-4 border border-slate-200/90 shadow-md flex flex-col h-full">
              
              {/* Google Maps Live Iframe */}
              <div className="relative w-full flex-1 min-h-[380px] sm:min-h-[460px] rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                <iframe
                  title="Femotech Enterprises Selaqui Manufacturing Plant Location"
                  src="https://maps.google.com/maps?q=Central+Hope+Town,+Camp+Road,+Industrial+Area+Selaqui,+Dehradun,+Uttarakhand+248011&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                />
              </div>

              {/* Map Footer Bar with Direct External Navigation */}
              <div className="pt-3 px-1 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-1.5 text-slate-600">
                  <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
                  <span className="font-medium truncate">
                    Central Hope Town, Camp Road, Industrial Area Selaqui, Dehradun
                  </span>
                </div>

                <a
                  href="https://maps.google.com/?q=Central+Hope+Town,+Camp+Road,+Industrial+Area+Selaqui,+Dehradun,+Uttarakhand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-[#0B3B82] hover:text-orange-600 transition-colors shrink-0"
                >
                  <span>Open in Google Maps App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
