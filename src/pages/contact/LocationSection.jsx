import React from 'react';
import { Navigation, Sparkles, Clock, ArrowUpRight, Compass, Building2 } from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal';

const LocationSection = () => {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Amina+Nagar+Padri+Bazar+Gorakhpur+273014";

  return (
    <section 
      className="relative py-16 md:py-20 lg:py-28 bg-gradient-to-b from-[#f4f8ff] via-[#edf4fe] to-[#f6faff] border-y border-blue-100/80 overflow-hidden selection:bg-cyan-100 selection:text-slate-900"
      aria-label="Headquarters Location and Interactive Map"
    >
      {/* Background Soft Blue Ambience & Architectural Grid */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#2F54EB 1px, transparent 1px), linear-gradient(90deg, #2F54EB 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
        {/* Ambient Soft Cyan/Blue Blobs */}
        <div className="absolute top-1/4 -left-32 w-[550px] h-[400px] bg-cyan-200/35 blur-[130px] rounded-full" />
        <div className="absolute bottom-10 -right-32 w-[550px] h-[400px] bg-blue-200/30 blur-[140px] rounded-full" />
      </div>

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        
        {/* Centered Section Header */}
        <div className="mb-12 lg:mb-16 text-center max-w-3xl mx-auto">
          <ScrollReveal variant="lift">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/90 bg-white/80 backdrop-blur-md px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-blue-700 shadow-xs mb-4">
              <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
              PHYSICAL PRESENCE
            </div>

            {/* Single Line Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-950 leading-[1.14] tracking-tight whitespace-normal lg:whitespace-nowrap">
              Our Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#2F54EB] to-[#9B51E0]">Headquarters Node.</span>
            </h2>

            {/* Centered Subtext */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
              Locate our engineering office for scheduled architectural discussions, technical audits, or onsite product collaboration.
            </p>

            {/* Centered Brand Line */}
            <div className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-500 mx-auto" />
          </ScrollReveal>
        </div>

        {/* ========================================================= */}
        {/* SPLIT GRID: DETAILS PANEL (5 COLS) + GOOGLE MAP (7 COLS)  */}
        {/* ========================================================= */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* LEFT: LOCATION BRIEF & ACTIONS (5 COLS) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <ScrollReveal variant="lift" delay={0.05}>
              <div className="p-6 sm:p-8 rounded-[24px] sm:rounded-[30px] border border-blue-100/90 bg-white/90 backdrop-blur-xl shadow-lg shadow-blue-900/5 space-y-6">
                
                {/* Header Tag */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#2F54EB]" />
                    <span className="text-[11px] font-mono font-bold tracking-widest text-slate-500 uppercase">
                      REGISTERED NODE // 01
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 text-[10px] font-mono font-bold tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    OPEN
                  </span>
                </div>

                {/* Address Headline */}
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-950 tracking-tight leading-snug">
                    Amina Nagar, Padri Bazar, <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#2F54EB] to-[#9B51E0]">
                      Gorakhpur — 273014
                    </span>
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    Uttar Pradesh, India. Open for scheduled on-premise architecture discussions, stakeholder meetings, and remote global engineering operations.
                  </p>
                </div>

                {/* Visiting Protocols Info */}
                <div className="space-y-3 pt-2 border-t border-slate-100">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-blue-50/80 border border-blue-100 shrink-0 text-[#2F54EB] mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">OFFICE TIMINGS</p>
                      <p className="text-sm font-semibold text-slate-900 mt-0.5">Monday — Friday: 11:00 AM – 09:00 PM IST</p>
                      <p className="text-xs text-slate-500">Saturday: Standby client SLA monitoring</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-purple-50/80 border border-purple-100 shrink-0 text-[#9B51E0] mt-0.5">
                      <Compass className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">GEO COORDINATES</p>
                      <p className="text-sm font-mono font-semibold text-slate-900 mt-0.5">26.7606° N, 83.3732° E</p>
                    </div>
                  </div>
                </div>

                {/* Direct Google Maps Navigation Button */}
                <div className="pt-2">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl font-display font-bold text-sm text-white bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-600 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-cyan-500/25 hover:brightness-105 transition-all duration-300 group"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT: INTERACTIVE EMBEDDED GOOGLE MAP (7 COLS) */}
          <div className="lg:col-span-7">
            <ScrollReveal variant="blur" delay={0.1}>
              <div className="relative h-full min-h-[380px] lg:min-h-[500px] rounded-[24px] sm:rounded-[30px] border border-blue-100/90 bg-white/90 p-2 sm:p-2.5 backdrop-blur-xl shadow-lg shadow-blue-900/5 overflow-hidden group">
                
                {/* Embedded Live Google Map */}
                <div className="relative w-full h-full min-h-[360px] lg:min-h-[480px] rounded-[18px] sm:rounded-[22px] overflow-hidden bg-slate-100 border border-slate-200/80">
                  <iframe
                    title="Pravaah Technologies Headquarters Location"
                    src="https://maps.google.com/maps?q=Amina%20Nagar%2C%20Padri%20Bazar%2C%20Gorakhpur%2C%20Uttar%20Pradesh%20273014&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full absolute inset-0 border-0 filter saturate-[0.9] contrast-[1.05] transition-all duration-700"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                  {/* Floating Map Pin Badge */}
                  <div className="absolute top-3.5 left-3.5 z-20 pointer-events-none">
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/95 backdrop-blur-md px-3 py-1.5 text-[11px] font-mono font-bold text-slate-800 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse" />
                      PRAVAAH HQ NODE
                    </div>
                  </div>

                  {/* Micro Map Overlay Tip */}
                  <div className="absolute bottom-3.5 right-3.5 z-20 pointer-events-none hidden sm:block">
                    <div className="inline-flex items-center gap-1.5 rounded-lg border border-blue-100 bg-white/95 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono text-slate-600 shadow-xs">
                      <Navigation className="w-3 h-3 text-blue-600" />
                      Interactive Satellite & Street Map
                    </div>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};

export default LocationSection;