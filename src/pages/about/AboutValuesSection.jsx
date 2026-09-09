import React from 'react';
import { Lightbulb, Shield, Target, TrendingUp, Sparkles } from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal';

const values = [
  {
    id: '01',
    title: 'Innovation',
    tagline: 'Thinking Beyond Horizon',
    description: 'We continuously explore groundbreaking architectures and creative engineering to solve high-impact enterprise challenges.',
    icon: Lightbulb,
    gradient: 'from-[#00D2FF] via-[#2F54EB] to-[#702FF4]',
  },
  {
    id: '02',
    title: 'Integrity',
    tagline: 'Radical Transparency',
    description: 'Enduring relationships are forged with honesty, absolute ownership, and enterprise-grade reliability in every commit.',
    icon: Shield,
    gradient: 'from-[#2F54EB] via-[#702FF4] to-[#9B51E0]',
  },
  {
    id: '03',
    title: 'Excellence',
    tagline: 'Precision Execution',
    description: 'We hold our craft to the highest standards across intuitive user experiences, clean architecture, and ultra-fast performance.',
    icon: Target,
    gradient: 'from-[#702FF4] via-[#9B51E0] to-[#D946EF]',
  },
  {
    id: '04',
    title: 'Growth',
    tagline: 'Continuous Momentum',
    description: 'We architect scalable modern technologies that empower visionary businesses to adapt, expand, and dominate.',
    icon: TrendingUp,
    gradient: 'from-[#9B51E0] via-[#D946EF] to-[#00D2FF]',
  }
];

const AboutValuesSection = () => {
  return (
    <section 
      className="relative bg-white py-16 md:py-24 overflow-hidden border-b border-slate-100"
      aria-label="Core Values Information"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] bg-gradient-to-r from-cyan-100/30 via-blue-100/20 to-purple-100/30 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* AboutStorySection જેવી જ સમાન વિડ્થ (container mx-auto px-5 md:px-8) */}
      <div className="container mx-auto px-5 md:px-8 relative z-10">
        
        {/* HEADER */}
        <ScrollReveal variant="lift" className="max-w-2xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50/60 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-blue-700 shadow-sm mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
            Core Philosophy
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-slate-950">
            Principles That <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#2F54EB] to-[#9B51E0]">Drive Our Flow</span>
          </h2>

          <div className="mt-3.5 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-500" />
          
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            The guiding ideals embedded into every line of code, design layout, and partner engagement.
          </p>
        </ScrollReveal>

        {/* PURE EDITORIAL FLOW ROWS */}
        <div className="border-t border-slate-200">
          {values.map((item, idx) => {
            const Icon = item.icon;

            return (
              <ScrollReveal 
                key={item.id} 
                variant="lift" 
                delay={idx * 0.1}
              >
                <div className="group relative border-b border-slate-200/80 transition-all duration-300">
                  
                  {/* Subtle hover stream indicator on left edge */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  <div className="py-8 md:py-10 px-2 sm:px-4 md:px-6 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300 group-hover:pl-5">
                    
                    {/* Left Block: ID + Floating Icon + Heading */}
                    <div className="flex items-center gap-5 sm:gap-6 md:w-5/12">
                      <span className="font-mono text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-600 transition-all duration-300">
                        {item.id}
                      </span>

                      <div className="p-3 rounded-2xl bg-slate-100/90 text-slate-700 group-hover:bg-slate-900 group-hover:text-[#ffff] group-hover:shadow-md transition-all duration-300">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>

                      <div>
                        <span className="block text-[11px] font-mono tracking-widest uppercase font-bold text-slate-400 group-hover:text-cyan-600 transition-colors">
                          {item.tagline}
                        </span>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Right Block: Pure Content Text */}
                    <div className="md:w-7/12">
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>

                  </div>

                  {/* Flowing bottom stream glow */}
                  <div className={`h-[1.5px] w-0 bg-gradient-to-r ${item.gradient} transition-all duration-700 ease-out group-hover:w-full`} />
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AboutValuesSection;