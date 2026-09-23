import React from 'react';
import { clientsData } from '../data/clientsData';

export default function ClientMarquee() {
  // Split clients into two balanced rows for the staggered multi-row look
  const half = Math.ceil(clientsData.length / 2);
  const row1Clients = clientsData.slice(0, half);
  const row2Clients = clientsData.slice(half);

  // Duplicate each row for seamless continuous infinite looping
  const row1List = [...row1Clients, ...row1Clients, ...row1Clients];
  const row2List = [...row2Clients, ...row2Clients, ...row2Clients];

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80 overflow-hidden relative text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        {/* Understated Section Header matching user reference */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
          Trusted Partners
        </h2>
      </div>

      {/* Multi-Row Staggered Marquee Container */}
      <div className="relative w-full space-y-4 sm:space-y-6">
        {/* Left Gradient Fade Mask */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />

        {/* Right Gradient Fade Mask */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        {/* ROW 1: Moving Left to Right */}
        <div className="overflow-hidden py-1">
          <div className="animate-marquee-ltr flex items-center marquee-track">
            {row1List.map((client, idx) => (
              <div
                key={`row1-${client.id}-${idx}`}
                className="shrink-0 mx-2 sm:mx-3 transition-transform duration-300 hover:scale-105 hover:-translate-y-0.5 cursor-default"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  title={client.name}
                  className="w-48 sm:w-60 h-auto object-contain shadow-2xs hover:shadow-md transition-shadow"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Moving Left to Right (Staggered offset & timing) */}
        <div className="overflow-hidden py-1">
          <div className="animate-marquee-ltr-slow flex items-center marquee-track">
            {row2List.map((client, idx) => (
              <div
                key={`row2-${client.id}-${idx}`}
                className="shrink-0 mx-2 sm:mx-3 transition-transform duration-300 hover:scale-105 hover:-translate-y-0.5 cursor-default"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  title={client.name}
                  className="w-48 sm:w-60 h-auto object-contain shadow-2xs hover:shadow-md transition-shadow"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
