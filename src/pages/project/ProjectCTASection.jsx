import React from 'react';
import { ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../../components/ScrollReveal';

const ProjectCTASection = () => {
  return (
    <section className="section-padding pb-24 relative bg-white overflow-hidden selection:bg-cyan-100 selection:text-slate-900">
      {/* Background Soft Atmospheric Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-200/30 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-200/25 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8">
        <ScrollReveal variant="lift">
          {/* Main CTA Canvas Matching Original Width & Height Bounds */}
          <div className="relative rounded-3xl bg-[#0A1128] border border-slate-800/90 p-12 md:p-16 text-center text-white shadow-xl shadow-blue-950/20 overflow-hidden group">
            
            {/* Architectural Grid Texture Overlay */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-[0.06]"
              style={{
                backgroundImage: `linear-gradient(#38BDF8 1px, transparent 1px), linear-gradient(90deg, #38BDF8 1px, transparent 1px)`,
                backgroundSize: '36px 36px',
              }}
            />

            {/* Glowing Accent Blobs Inside Card */}
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#00D2FF]/20 rounded-full blur-[90px] pointer-events-none group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#9B51E0]/25 rounded-full blur-[90px] pointer-events-none group-hover:opacity-100 transition-opacity duration-500" />

            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#00D2FF] via-[#2F54EB] to-[#9B51E0]" />

            {/* Headline */}
            <h2 className="relative z-10 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Have a Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#38BDF8] to-[#9B51E0]">in Mind?</span>
            </h2>

            {/* Supporting Copy */}
            <p className="relative z-10 text-slate-300 text-sm sm:text-base md:text-lg mt-4 max-w-xl mx-auto leading-relaxed font-normal">
              Let's turn your idea into a successful digital product. Get a free project consultation and architectural estimate today.
            </p>

            {/* Guarantees Metadata Strip */}
            <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6 text-xs sm:text-sm font-mono text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                Response within 4 hrs
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Zero Obligation & Free Consultation
              </span>
            </div>

            {/* Interactive Call to Action Button */}
            <div className="relative z-10 mt-8">
              <Link 
                to="/contact"
                className="group/btn relative inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-sm sm:text-base hover:bg-slate-50 transition-all duration-300 shadow-lg hover:shadow-cyan-400/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-[18px] h-[18px] transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProjectCTASection;