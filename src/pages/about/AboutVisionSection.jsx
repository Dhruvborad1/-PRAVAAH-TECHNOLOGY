import React from 'react';
import { Compass, Target, Sparkles } from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal';

const AboutVisionSection = () => {
  return (
    <section 
      className="relative bg-white py-24 md:py-32 overflow-hidden border-t border-slate-100"
      aria-label="Vision and Mission Horizon"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-100/30 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-purple-100/25 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Main Container */}
      <div className="container mx-auto px-5 md:px-8 relative z-10">
        
        {/* Top Minimal Badge */}
        <ScrollReveal variant="lift" className="mb-14 md:mb-20 text-center max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/70 bg-blue-50/60 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-blue-700 shadow-sm mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
            North Star
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-950 tracking-tight">
            Purpose That Guides <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#2F54EB] to-[#9B51E0]">Our Flow</span>
          </h2>
          <div className="mx-auto mt-2.5 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-500" />
        </ScrollReveal>

        {/* DUAL HORIZON STREAM (NO CARDS - PURE EDITORIAL FLOW) */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-0 items-stretch">
          
          {/* LEFT: OUR VISION */}
          <div className="lg:col-span-6 lg:pr-14 relative group">
            {/* Background Typographic Watermark */}
            <span className="absolute -top-6 -left-3 font-display font-black text-6xl sm:text-7xl lg:text-8xl tracking-tight text-slate-100/90 select-none pointer-events-none -z-10 transition-colors duration-500 group-hover:text-cyan-50/70">
              VISION
            </span>

            <ScrollReveal variant="slide">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center border border-cyan-100 transition-transform duration-300 group-hover:scale-110 group-hover:bg-slate-900 group-hover:text-cyan-400">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-cyan-600">
                    Direction
                  </span>
                  <h4 className="text-base font-bold text-slate-900">Our Vision</h4>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900 leading-[1.2] transition-colors duration-300 group-hover:text-slate-950">
                To create technology that enables businesses to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] to-[#2F54EB]">
                  move faster, think bigger,
                </span>{' '}
                and grow smarter.
              </h3>

              <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Pioneering adaptable digital ecosystems that transform bold conceptual business milestones into reality.
              </p>

              {/* Bottom Expanding Stream Light */}
              <div className="mt-8 h-[2px] w-12 bg-slate-200 transition-all duration-500 ease-out group-hover:w-32 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-600" />
            </ScrollReveal>
          </div>

          {/* DESKTOP VERTICAL PRAVAAH STREAM DIVIDER */}
          <div className="hidden lg:block lg:col-span-1 relative">
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1px] bg-slate-200">
              <div className="h-full w-full bg-gradient-to-b from-cyan-400 via-blue-600 to-purple-500 opacity-60" />
            </div>
            {/* Center Flow Pulse Orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-600 ring-4 ring-white shadow-sm" />
          </div>

          {/* RIGHT: OUR MISSION */}
          <div className="lg:col-span-5 lg:pl-8 relative group">
            {/* Background Typographic Watermark */}
            <span className="absolute -top-6 -left-3 font-display font-black text-6xl sm:text-7xl lg:text-8xl tracking-tight text-slate-100/90 select-none pointer-events-none -z-10 transition-colors duration-500 group-hover:text-purple-50/70">
              MISSION
            </span>

            <ScrollReveal variant="lift" delay={0.15}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100 transition-transform duration-300 group-hover:scale-110 group-hover:bg-slate-900 group-hover:text-purple-400">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-purple-600">
                    Execution
                  </span>
                  <h4 className="text-base font-bold text-slate-900">Our Mission</h4>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900 leading-[1.2] transition-colors duration-300 group-hover:text-slate-950">
                To combine engineering precision with human design to construct{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F54EB] to-[#9B51E0]">
                  lasting, measurable value.
                </span>
              </h3>

              <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Executing clean architectures, zero-bloat code, and continuous delivery standards for sustained market momentum.
              </p>

              {/* Bottom Expanding Stream Light */}
              <div className="mt-8 h-[2px] w-12 bg-slate-200 transition-all duration-500 ease-out group-hover:w-32 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-500" />
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutVisionSection;