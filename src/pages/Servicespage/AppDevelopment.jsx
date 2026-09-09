import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Zap, ShieldCheck, Layers, Code2, Rocket } from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal';
import AppDevImg from '../../assets/Services/App Development.png';
import { Sparkles } from 'lucide-react';

const features = [
  { 
    icon: <Smartphone className="w-5 h-5 text-[#00D2FF]" />, 
    title: "Cross-Platform Excellence", 
    desc: "Native-like performance across iOS and Android using modern frameworks.",
    accent: '#00D2FF'
  },
  { 
    icon: <Zap className="w-5 h-5 text-[#2F54EB]" />, 
    title: "High Performance", 
    desc: "Optimized rendering and smooth animations for a premium user experience.",
    accent: '#2F54EB'
  },
  { 
    icon: <ShieldCheck className="w-5 h-5 text-[#9B51E0]" />, 
    title: "Secure Architecture", 
    desc: "End-to-end encryption, secure local storage, and robust authentication.",
    accent: '#9B51E0'
  },
  { 
    icon: <Layers className="w-5 h-5 text-cyan-500" />, 
    title: "Scalable Infrastructure", 
    desc: "Cloud-native backend integration designed to handle millions of users.",
    accent: '#00D2FF'
  },
];

const AppDevelopment = () => {
  return (
    <section 
      className="relative py-20 lg:py-28 bg-blue-50/40 border-b border-blue-100/60 selection:bg-blue-100 selection:text-slate-900"
      aria-label="Mobile App Development Services"
    >
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[500px] h-[380px] bg-gradient-to-tr from-blue-100/30 to-purple-100/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 left-0 w-[500px] h-[380px] bg-gradient-to-bl from-cyan-100/25 to-blue-100/15 blur-[130px] rounded-full" />
      </div>

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: HEADLINE, DESCRIPTION & FEATURES (6 COLS)      */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 order-1 lg:order-1">
            
            <ScrollReveal variant="lift">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-950 leading-[1.14] tracking-tight">
                Crafting Next-Gen <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F54EB] via-[#9B51E0] to-[#00D2FF]">
                  Mobile Experiences.
                </span>
              </h2>

              <div className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-400" />
            </ScrollReveal>

            <ScrollReveal variant="lift" delay={0.08}>
              <p className="mt-5 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                We build scalable, high-performance mobile applications that users love. From innovative startups to enterprise-grade solutions, our apps are designed for seamless performance across all platforms.
              </p>
            </ScrollReveal>

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

          {/* ========================================================= */}
          {/* RIGHT COLUMN: LABEL + REFINED IMAGE FRAME (6 COLS)         */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 relative order-2 lg:order-2">
            
            <ScrollReveal variant="lift">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/70 bg-blue-50/60 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-blue-700 shadow-sm mb-3">
                <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                MOBILE SOLUTIONS
              </div>
            </ScrollReveal>

            <ScrollReveal variant="blur" delay={0.1}>
              <div className="relative">
                
                <div className="absolute -inset-2 bg-gradient-to-r from-[#2F54EB]/15 via-[#9B51E0]/10 to-[#00D2FF]/15 rounded-[30px] blur-xl -z-10 pointer-events-none" />

                <div 
                  className="relative rounded-[24px] sm:rounded-[30px] p-2 sm:p-2.5 border border-slate-200/90 bg-white/60 backdrop-blur-md transition-all duration-500 hover:border-slate-300 shadow-xs group"
                >
                  <div className="relative w-full rounded-[18px] sm:rounded-[22px] overflow-hidden bg-slate-950 border border-slate-100/80">
                    <img 
                      src={AppDevImg} 
                      alt="Mobile App Development" 
                      className="w-full h-auto object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-white/10 pointer-events-none" />

                    <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 z-20 pointer-events-none">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-slate-200 bg-slate-950/70 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/15">
                        SERVICE // 02
                      </span>
                    </div>
                  </div>

                  <motion.div 
                    animate={{ y: [-3, 3, -3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-4 -left-2 sm:-left-4 hidden sm:flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-slate-200/90 shadow-sm"
                  >
                    <div className="flex -space-x-2">
                      <div className="w-7 h-7 rounded-full bg-blue-50 border border-white flex items-center justify-center text-blue-600">
                        <Code2 className="w-3.5 h-3.5" />
                      </div>
                      <div className="w-7 h-7 rounded-full bg-purple-50 border border-white flex items-center justify-center text-purple-600">
                        <Rocket className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2F54EB]" />
                        <p className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider">APP STORE</p>
                      </div>
                      <p className="text-[11px] font-display font-bold text-slate-900 leading-none mt-0.5">Top Tier Ranked</p>
                    </div>
                  </motion.div>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppDevelopment;
