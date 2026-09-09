import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Layout, Eye, Sparkles, Target, Users } from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal';
import UIUXImg from '../../assets/Services/uiux.png';

const features = [
  { 
    icon: <Users className="w-5 h-5 text-[#00D2FF]" />, 
    title: "User-Centric Architecture", 
    desc: "Empathy-driven research to ensure intuitive, low-friction user journeys.",
    accent: '#00D2FF'
  },
  { 
    icon: <Layout className="w-5 h-5 text-[#2F54EB]" />, 
    title: "Interactive Prototyping", 
    desc: "High-fidelity clickable systems to validate mental models and flows rapidly.",
    accent: '#2F54EB'
  },
  { 
    icon: <Sparkles className="w-5 h-5 text-[#9B51E0]" />, 
    title: "Pixel-Perfect Precision", 
    desc: "Refined visual interfaces harmonized with comprehensive design systems.",
    accent: '#9B51E0'
  },
  { 
    icon: <Eye className="w-5 h-5 text-cyan-500" />, 
    title: "Accessibility Standards", 
    desc: "WCAG-compliant contrast and inclusive patterns for global usability.",
    accent: '#00D2FF'
  },
];

const UIUXDesign = () => {
  return (
    <section 
      className="relative py-20 lg:py-28 overflow-hidden bg-white border-b border-slate-200/60 selection:bg-cyan-100 selection:text-slate-900"
      aria-label="UI/UX and Creative Design Services"
    >
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute top-1/4 -left-32 w-[500px] h-[380px] bg-gradient-to-tr from-cyan-100/25 to-blue-100/15 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 -right-32 w-[500px] h-[380px] bg-gradient-to-bl from-purple-100/20 to-indigo-100/10 blur-[130px] rounded-full" />
      </div>

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: LABEL + REFINED IMAGE FRAME (6 COLS)          */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            
            {/* લેબલ ઇમેજની બરાબર ઉપર */}
            <ScrollReveal variant="lift">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/70 bg-blue-50/60 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-blue-700 shadow-sm mb-3">
                <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                CREATIVE DESIGN
              </div>
            </ScrollReveal>

            <ScrollReveal variant="blur" delay={0.1}>
              <div className="relative">
                
                {/* હળવો સોફ્ટ અંડરગ્લો */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#00D2FF]/15 via-[#2F54EB]/10 to-[#9B51E0]/15 rounded-[30px] blur-xl -z-10 pointer-events-none" />

                {/* પ્રીમિયમ સ્લીક ગ્લાસ ફ્રેમ */}
                <div 
                  className="relative rounded-[24px] sm:rounded-[30px] p-2 sm:p-2.5 border border-slate-200/90 bg-slate-50/60 backdrop-blur-md transition-all duration-500 hover:border-slate-300 shadow-xs group"
                >
                  {/* ઇમેજ વ્યૂપોર્ટ */}
                  <div className="relative w-full rounded-[18px] sm:rounded-[22px] overflow-hidden bg-slate-950 border border-slate-100/80">
                    <img 
                      src={UIUXImg} 
                      alt="UI/UX Design Process at Pravaah" 
                      className="w-full h-auto object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />

                    {/* હળવો લાઇટ શીન ઓવરલે */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-white/10 pointer-events-none" />

                    {/* કોર્નર ટેગ */}
                    <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 z-20 pointer-events-none">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-slate-200 bg-slate-950/70 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/15">
                        SERVICE // 02
                      </span>
                    </div>
                  </div>

                  {/* ફ્લોટિંગ બેજ */}
                  <motion.div 
                    animate={{ y: [-3, 3, -3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-4 -right-2 sm:-right-4 hidden sm:flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-slate-200/90 shadow-sm"
                  >
                    <div className="flex -space-x-2">
                      <div className="w-7 h-7 rounded-full bg-cyan-50 border border-white flex items-center justify-center text-cyan-600">
                        <PenTool className="w-3.5 h-3.5" />
                      </div>
                      <div className="w-7 h-7 rounded-full bg-blue-50 border border-white flex items-center justify-center text-blue-600">
                        <Target className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF]" />
                        <p className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider">AESTHETICS</p>
                      </div>
                      <p className="text-[11px] font-display font-bold text-slate-900 leading-none mt-0.5">Award Winning</p>
                    </div>
                  </motion.div>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: HEADLINE, DESCRIPTION & FEATURES (6 COLS)     */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            
            {/* હેડલાઇન */}
            <ScrollReveal variant="lift">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-950 leading-[1.14] tracking-tight">
                Design that <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#2F54EB] to-[#9B51E0]">
                  Inspires Action.
                </span>
              </h2>

              <div className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-500" />
            </ScrollReveal>

            {/* ડિસ્ક્રિપ્શન */}
            <ScrollReveal variant="lift" delay={0.08}>
              <p className="mt-5 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                We blend cognitive psychology, human interaction patterns, and clean engineering to create interfaces that don't just look compelling, but drive frictionless engagement and measurable conversion.
              </p>
            </ScrollReveal>

            {/* ફીચર્સ ગ્રીડ */}
            <div className="grid sm:grid-cols-2 gap-3.5 sm:gap-4 mt-8">
              {features.map((feature, index) => (
                <ScrollReveal 
                  key={index}
                  variant="lift" 
                  delay={0.12 + (index * 0.06)}
                >
                  <div className="group relative p-4 rounded-xl bg-white border border-slate-200/80 transition-all duration-300 hover:border-slate-300 hover:shadow-sm hover:-translate-y-0.5">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 shrink-0 group-hover:scale-105 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-sm font-display font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-xs text-slate-500 font-normal leading-relaxed mt-0.5">
                          {feature.desc}
                        </p>
                      </div>
                    </div>

                    <div 
                      className="mt-3 h-[1.5px] w-5 rounded-full transition-all duration-300 group-hover:w-10"
                      style={{ backgroundColor: feature.accent }}
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default UIUXDesign;