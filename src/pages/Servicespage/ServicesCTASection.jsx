import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../../components/ScrollReveal';

const ServicesCTASection = () => {
  return (
    <section className="relative bg-white py-24 md:py-32 overflow-hidden border-t border-slate-100">

      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full blur-[100px] opacity-60"></div>

        {/* Faster Flowing Lines */}
        <svg className="absolute w-full h-full opacity-40" viewBox="0 0 1000 400" preserveAspectRatio="none">
          <path
            d="M0,200 C300,100 400,300 1000,150"
            fill="none"
            stroke="url(#cta-gradient-services)"
            strokeWidth="1.5"
            style={{ animation: 'hero-float 3.5s ease-in-out infinite' }}
          />
          <path
            d="M0,250 C400,350 500,50 1000,200"
            fill="none"
            stroke="url(#cta-gradient-services)"
            strokeWidth="1.5"
            style={{ animation: 'hero-float 4.5s ease-in-out infinite reverse' }}
          />
          <defs>
            <linearGradient id="cta-gradient-services" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop stopColor="#00D2FF" />
              <stop offset="0.5" stopColor="#2F54EB" />
              <stop offset="1" stopColor="#9B51E0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          <ScrollReveal variant="lift"> 
            <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/70 bg-blue-50/60 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-blue-700 shadow-sm mb-3">
              <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
              READY TO START?
            </div>
          </ScrollReveal>

          <ScrollReveal variant="lift" delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-[1.1] tracking-tight mb-8">
              Let's Build the Future of Your <span className="pravaah-gradient-text">Business.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="lift" delay={0.2}>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-12 max-w-2xl mx-auto">
              Ready to accelerate your digital transformation? Our team of experts is here to turn your vision into reality with cutting-edge solutions.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="lift" delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">

              <Link to="/contact" className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] w-full sm:w-auto">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link to="/projects" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-full font-semibold transition-all hover:bg-slate-50 hover:border-slate-300 hover:shadow-xs w-full sm:w-auto">
                Explore Our Work
              </Link>

            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default ServicesCTASection;
