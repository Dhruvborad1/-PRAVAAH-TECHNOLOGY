import React, { useRef, useState, useEffect } from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import ScrollReveal from '../../components/ScrollReveal';
import FlowBgImg from '../../assets/about/about-flow-bg.webp';

const differentiators = [
  { id: '01', title: 'Business-first thinking', subtitle: 'Strategic ROI & Value Mapping' },
  { id: '02', title: 'Scalable engineering', subtitle: 'Cloud-Native & Modular Stacks' },
  { id: '03', title: 'Human-centered design', subtitle: 'Frictionless Conversion Journeys' },
  { id: '04', title: 'Transparent collaboration', subtitle: 'Open Agility & Zero Guesswork' },
  { id: '05', title: 'Long-term partnership', subtitle: 'Continuous Evolution & Scaling' }
];

const aboutStats = [
  { 
    numericValue: 5,
    suffix: '+',
    label: 'Projects Delivered',
    gradient: 'from-[#00D2FF] to-[#2F54EB]',
  },
  { 
    numericValue: 8,
    suffix: '+',
    label: 'Team Members',
    gradient: 'from-[#2F54EB] to-[#702FF4]',
  },
  { 
    numericValue: 10,
    suffix: '+',
    label: 'Technologies',
    gradient: 'from-[#702FF4] to-[#9B51E0]',
  },
  { 
    numericValue: 99,
    suffix: '%',
    label: 'Commitment to Quality',
    gradient: 'from-[#9B51E0] to-[#00D2FF]',
  }
];

const Counter = ({ target, suffix, inView }) => {
  const [count, setCount] = useState(0);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) {
      setCount(target);
      return;
    }

    if (!inView) return;

    let frame = 0;
    const duration = 1400;
    const totalFrames = Math.round(duration / (1000 / 60));

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(easeOut * target);

      setCount(current);

      if (frame >= totalFrames) {
        clearInterval(timer);
        setCount(target);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [inView, target, prefersReduced]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const StatItem = ({ stat, index, total }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className={`flex flex-col items-center justify-center text-center py-6 px-4 sm:px-6 lg:px-8 ${
        index !== total - 1 ? 'lg:border-r lg:border-slate-300' : ''
      } ${index % 2 === 0 ? 'border-r border-slate-300 lg:border-r' : ''}`}
    >
      {/* મોટો બોલ્ડ આંકડો */}
      <h3 className={`text-5xl sm:text-6xl lg:text-7xl font-mono font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient}`}>
        <Counter target={stat.numericValue} suffix={stat.suffix} inView={isInView} />
      </h3>

      {/* ટાઈટલ */}
      <p className="mt-3 text-sm sm:text-base font-medium text-slate-700">
        {stat.label}
      </p>

      {/* મિનિમલ સેન્ટર્ડ લાઇન */}
      <div className={`mt-4 h-[2.5px] w-10 rounded-full bg-gradient-to-r ${stat.gradient} opacity-90`} />
    </motion.div>
  );
};

const AboutWhySection = () => {
  return (
    <section 
      className="relative bg-white pt-20 md:pt-28 pb-14 md:pb-18 overflow-hidden border-b border-slate-200"
      aria-label="Why Choose Pravaah"
    >
      {/* ========================================================= */}
      {/* 1. BRAND AMBIENT & WATER-FLOW BACKGROUND                  */}
      {/* ========================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <img 
          src={FlowBgImg} 
          alt="" 
          aria-hidden="true"
          className="absolute w-full h-full object-cover opacity-[0.16] md:opacity-[0.20] mix-blend-multiply" 
        />
        
        {/* Soft Edge Mask */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/70" />
        
        {/* Ambient Glows */}
        <div className="absolute top-1/3 left-10 w-[500px] h-[400px] bg-cyan-100/40 blur-[130px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-purple-100/35 blur-[140px] rounded-full" />
      </div>

      {/* ========================================================= */}
      {/* 2. MAIN CONTENT AREA                                      */}
      {/* ========================================================= */}
      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Vision Statement (6 Cols) */}
          <div className="lg:col-span-6">
            <ScrollReveal variant="slide">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/80 bg-blue-50/70 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-blue-700 shadow-sm mb-6">
                <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                Why Pravaah?
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-950 leading-[1.15] tracking-tight">
                Technology should not only work.{' '}
                <span className="block mt-1 text-slate-400 font-semibold">
                  It should create{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#2F54EB] to-[#9B51E0]">
                    momentum.
                  </span>
                </span>
              </h2>

              <div className="mt-5 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-500" />

              <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
                We bridge the gap between abstract business ambitions and living software architecture. Every system we deploy is structured to adapt, scale, and unlock immediate commercial value.
              </p>
            </ScrollReveal>
          </div>

          {/* Right Column: Differentiator Stream (6 Cols) */}
          <div className="lg:col-span-6 relative">
            
            {/* વર્ટિકલ લાઇન */}
            <div className="absolute left-5 -translate-x-1/2 top-6 bottom-6 w-[2px] bg-slate-200 pointer-events-none">
              <div className="h-full w-full bg-gradient-to-b from-[#00D2FF] via-[#2F54EB] to-[#9B51E0] opacity-85" />
            </div>

            {/* લિસ્ટ આઇટમ્સ */}
            <div className="flex flex-col space-y-4 sm:space-y-5">
              {differentiators.map((diff, index) => (
                <ScrollReveal 
                  key={diff.id} 
                  variant="lift" 
                  delay={index * 0.08}
                >
                  <div className="group relative flex items-center min-h-[76px]">
                    
                    {/* સેન્ટર પોઇન્ટ */}
                    <div className="absolute left-5 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 pointer-events-none flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-white border-2 border-slate-300 group-hover:border-cyan-500 group-hover:scale-110 group-hover:shadow-[0_0_12px_rgba(0,210,255,0.7)] transition-all duration-300 flex items-center justify-center shadow-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-600 transition-colors" />
                      </div>
                    </div>

                    {/* કાર્ડ કન્ટેન્ટ */}
                    <div className="ml-11 flex-1 flex items-center justify-between p-3.5 sm:p-4 rounded-2xl border border-transparent transition-all duration-300 hover:border-blue-100 hover:bg-white/90 hover:backdrop-blur-md hover:shadow-lg hover:shadow-blue-500/5 hover:translate-x-1 cursor-default">
                      <div className="pr-3">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono text-xs sm:text-sm font-bold tracking-wider text-cyan-600 uppercase">
                            {diff.id} • Standard
                          </span>
                        </div>

                        <h3 className="text-base sm:text-lg font-display font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
                          {diff.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-500 font-normal mt-0.5">
                          {diff.subtitle}
                        </p>
                      </div>

                      <div className="text-slate-300 group-hover:text-cyan-500 transition-colors shrink-0">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    </div>

                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>

        </div>

        {/* ========================================================= */}
        {/* 3. METRICS ROW (ઝીરો ગેપ + ઘાટી લાઈનો સાથે)               */}
        {/* ========================================================= */}
        <div className="mt-14 sm:mt-16 pt-8 sm:pt-10 border-t border-slate-300">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0">
            {aboutStats.map((stat, index) => (
              <StatItem 
                key={index} 
                stat={stat} 
                index={index} 
                total={aboutStats.length} 
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutWhySection;