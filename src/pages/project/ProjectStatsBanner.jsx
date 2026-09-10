import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { Layers, Users, TrendingUp, ShieldCheck } from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal';

// Metric Data Definitions with Enlarged Icons
const stats = [
  {
    id: '01',
    numericTarget: 50,
    suffix: '+',
    label: 'Projects Completed',
    subtext: 'High-performance web, app & AI systems',
    icon: <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-[#00D2FF]" />,
    accent: '#00D2FF'
  },
  {
    id: '02',
    numericTarget: 30,
    suffix: '+',
    label: 'Clients Served',
    subtext: 'From disruptive startups to scale-ups',
    icon: <Users className="w-4 h-4 text-[#2F54EB]" />,
    accent: '#2F54EB'
  },
  {
    id: '03',
    numericTarget: 10,
    suffix: '+',
    label: 'Industries Served',
    subtext: 'FinTech, SaaS, Healthcare & Commerce',
    icon: <TrendingUp className="w-4 h-4 text-[#9B51E0]" />,
    accent: '#9B51E0'
  },
  {
    id: '04',
    numericTarget: 100,
    suffix: '%',
    label: 'Delivered On Time',
    subtext: 'Rigorous 2-week sprint accountability',
    icon: <ShieldCheck className="w-4 h-4 text-[#00D2FF]" />,
    accent: '#00D2FF'
  }
];

// Reusable Animated Counter
const AnimatedCounter = ({ value, suffix = '' }) => {
  const ref = useRef(null);
  const motionVal = useMotionValue(0);
  const springVal = useSpring(motionVal, {
    damping: 35,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      motionVal.set(value);
    }
  }, [isInView, value, motionVal]);

  useEffect(() => {
    return springVal.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.floor(latest)}${suffix}`;
      }
    });
  }, [springVal, suffix]);

  return (
    <span
      ref={ref}
      className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#2F54EB] to-[#9B51E0] leading-none select-none inline-block"
    >
      0{suffix}
    </span>
  );
};

const ProjectStatsBanner = () => {
  return (
    <section 
      className="relative py-14 md:py-20 bg-white border-y border-slate-300 overflow-hidden selection:bg-cyan-100 selection:text-slate-900"
      aria-label="Engineering Track Record & Metrics"
    >
      {/* Background Subtle Architectural Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-1/2 -left-40 -translate-y-1/2 w-80 h-80 bg-cyan-100/30 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-1/2 -right-40 -translate-y-1/2 w-80 h-80 bg-purple-100/25 rounded-full blur-[110px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-5 md:px-8">
        
        {/* Metric Grid Display with Darker Slate Dividers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-0 lg:divide-x lg:divide-slate-300">
          {stats.map((item, index) => (
            <ScrollReveal key={item.id} variant="lift" delay={index * 0.06}>
              <div className="group relative p-4 sm:p-6 lg:px-8 transition-all duration-300 rounded-2xl lg:rounded-none border border-slate-300 lg:border-none hover:bg-slate-50/70 flex flex-col justify-between h-full">
                
                {/* Micro Metric Identifier & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase">
                    METRIC // {item.id}
                  </span>
                  
                  {/* Icon Container with Darker Border */}
                  <div 
                    className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl border border-slate-300 shadow-xs group-hover:scale-110 transition-all duration-300"
                    style={{ backgroundColor: `${item.accent}12` }}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Big Animated Numerical Counter with Signature Gradient */}
                <div>
                  <div className="leading-none">
                    <AnimatedCounter value={item.numericTarget} suffix={item.suffix} />
                  </div>

                  {/* Stat Title */}
                  <h3 className="font-display font-bold text-slate-950 text-sm sm:text-base mt-2.5 sm:mt-3.5 group-hover:text-blue-600 transition-colors">
                    {item.label}
                  </h3>

                  {/* Supporting Description */}
                  <p className="text-xs sm:text-sm text-slate-600 font-normal mt-1 leading-relaxed">
                    {item.subtext}
                  </p>
                </div>

                {/* Subtle Hover Indicator Accent Bar */}
                <div 
                  className="mt-4 h-0.5 rounded-full transition-all duration-300 w-0 group-hover:w-8"
                  style={{ backgroundColor: item.accent }}
                />

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectStatsBanner;