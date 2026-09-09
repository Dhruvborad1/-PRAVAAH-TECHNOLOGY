import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ChartNoAxesColumnIncreasing, 
  Code2, 
  PenTool, 
  Rocket, 
  Search, 
  Target, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

const stepsData = [
  {
    number: '01',
    phase: 'DISCOVERY',
    title: 'Discover & Market Research',
    desc: 'Deep-dive session to extract core business goals, target user behavior, and project technical scope.',
    icon: Search,
    color: '#0284c7', // Sky Blue
    badgeBg: 'bg-sky-50 text-sky-700 border-sky-200',
    tags: ['Goal Alignment', 'Competitor Audit'],
  },
  {
    number: '02',
    phase: 'ARCHITECTURE',
    title: 'Strategic Blueprinting',
    desc: 'Formulating the technical architecture, selecting modern stacks, and building the project roadmap.',
    icon: Target,
    color: '#2563eb', // Blue
    badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
    tags: ['Tech Stack', 'Milestone Mapping'],
  },
  {
    number: '03',
    phase: 'INTERFACE',
    title: 'UI/UX Visual Crafting',
    desc: 'High-converting interactive wireframes, custom animations, and a cohesive design system for your brand.',
    icon: PenTool,
    color: '#7c3aed', // Purple
    badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
    tags: ['Figma Prototypes', 'Design System'],
  },
  {
    number: '04',
    phase: 'ENGINEERING',
    title: 'Robust Core Development',
    desc: 'Transforming designs into clean, scalable, and secure production-ready code with responsive layouts.',
    icon: Code2,
    color: '#db2777', // Pink
    badgeBg: 'bg-pink-50 text-pink-700 border-pink-200',
    tags: ['Clean Code', 'API Integrations'],
  },
  {
    number: '05',
    phase: 'DEPLOYMENT',
    title: 'QA, Testing & Zero-Downtime Launch',
    desc: 'Comprehensive multi-device testing, security auditing, and deployment to high-availability servers.',
    icon: Rocket,
    color: '#e11d48', // Rose
    badgeBg: 'bg-rose-50 text-rose-700 border-rose-200',
    tags: ['QA Automation', 'Cloud Launch'],
  },
  {
    number: '06',
    phase: 'GROWTH',
    title: 'Scale, Monitor & Continuous Iterate',
    desc: 'Post-launch performance optimization, real-time analytics monitoring, and continuous feature expansion.',
    icon: ChartNoAxesColumnIncreasing,
    color: '#059669', // Emerald
    badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    tags: ['Performance Tuning', 'Scaling'],
  },
];

const Process = () => {
  return (
    <section className="relative w-full py-28 bg-[#fafcff] text-slate-900 overflow-hidden font-sans">
      
      {/* Background Soft Floating Orbs */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-sky-200/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Animated Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-28"
        >
          <div className="section-label mb-4">
            <span className="section-label-text">Our Process</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-slate-900 mb-5">
            From Raw Idea to <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">Market Leader</span>
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            A continuous, collaborative development journey engineered for speed, quality, and precision.
          </p>
        </motion.div>

        {/* Dynamic Zigzag Timeline */}
        <div className="relative">
          
          {/* Animated Central Vertical Spine Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-6 bottom-6 -translate-x-1/2 w-[3px] bg-slate-200/80 rounded-full overflow-hidden">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-sky-500 via-purple-500 to-emerald-500"
            />
          </div>
          
          {/* Central Line (Mobile) */}
          <div className="lg:hidden absolute left-6 top-6 bottom-6 w-[2px] bg-gradient-to-b from-sky-400 via-purple-400 to-emerald-400 opacity-50" />

          <div className="space-y-16 lg:space-y-24">
            {stepsData.map((step, idx) => {
              const IconComp = step.icon;
              const isEven = idx % 2 === 1;

              return (
                <div 
                  key={idx} 
                  className={`relative flex flex-col lg:flex-row items-start lg:items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Area with Slide Animation */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={`w-full lg:w-[45%] pl-16 lg:pl-0 ${isEven ? 'lg:pl-12 lg:text-left' : 'lg:pr-12 lg:text-right'}`}
                  >
                    
                    {/* Badge & Number Row */}
                    <div className={`flex items-center gap-3 mb-2.5 ${isEven ? 'lg:justify-start' : 'lg:justify-end'}`}>
                      <span className={`text-[11px] font-bold px-3 py-0.5 rounded-full border shadow-sm ${step.badgeBg}`}>
                        {step.phase}
                      </span>
                      <span className="text-sm font-mono text-slate-400 font-bold">
                        PHASE {step.number}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 tracking-tight">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed mb-5">
                      {step.desc}
                    </p>

                    {/* Tags */}
                    <div className={`flex flex-wrap gap-2 ${isEven ? 'lg:justify-start' : 'lg:justify-end'}`}>
                      {step.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200/80 px-3 py-1 rounded-md shadow-[0_2px_6px_rgba(0,0,0,0.02)]"
                        >
                          <CheckCircle2 className="w-3 h-3 text-slate-400" />
                          {tag}
                        </span>
                      ))}
                    </div>

                  </motion.div>

                  {/* Center Node with Bounce & Scale Animation */}
                  <div className="absolute left-0 lg:left-1/2 -translate-x-0 lg:-translate-x-1/2 flex items-center justify-center shrink-0">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      className="relative group cursor-pointer"
                    >
                      {/* Ambient Pulse Glow */}
                      <div 
                        className="absolute inset-0 rounded-full blur-lg opacity-20 group-hover:opacity-60 transition-opacity duration-300"
                        style={{ backgroundColor: step.color }}
                      />
                      
                      {/* Node Center */}
                      <div 
                        className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border-2 flex items-center justify-center shadow-lg transition-all duration-300"
                        style={{ borderColor: step.color }}
                      >
                        <IconComp 
                          className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300" 
                          style={{ color: step.color }}
                          strokeWidth={2} 
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for 2-column balance */}
                  <div className="hidden lg:block w-[45%]" />

                </div>
              );
            })}
          </div>

        </div>

        {/* Floating Light CTA */}
       <motion.div 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mt-20 sm:mt-28 lg:mt-32 relative text-center px-4 w-full flex justify-center"
>
  {/* રિસ્પોન્સિવ કન્ટેનર: મોબાઇલમાં રાઉન્ડેડ બોક્સ અને ડેસ્કટોપમાં ફુલ પિલ (Pill) */}
  <div className="w-full max-w-xl sm:max-w-none sm:w-auto inline-flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 p-3 sm:p-2 sm:pr-2 bg-white/90 border border-slate-200/80 rounded-2xl sm:rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.05)] backdrop-blur-md">
    
    {/* ટેક્સ્ટ અને સ્ટેટસ ડોટ */}
    <div className="flex items-center gap-2.5 sm:gap-3 px-2 sm:pl-4 py-1 sm:py-0">
      <span className="flex h-2.5 w-2.5 sm:h-3 sm:w-3 relative shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-emerald-500"></span>
      </span>
      <span className="text-xs sm:text-sm font-medium text-slate-700 text-center sm:text-left leading-snug">
        Ready to transform your idea into reality?
      </span>
    </div>

    <motion.a
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      href="#contact"
      className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 sm:gap-3.5 px-6 sm:px-8 py-3 sm:py-3.5 bg-[#0B132B] text-white text-xs sm:text-sm font-semibold rounded-xl sm:rounded-full overflow-hidden transition-all duration-300 shadow-[0_8px_25px_-4px_rgba(11,19,43,0.35)] hover:shadow-[0_12px_30px_-2px_rgba(99,102,241,0.35)] border border-white/10 hover:border-indigo-500/50 cursor-pointer shrink-0"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-sky-500/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

      <span className="relative z-10 tracking-wide transition-colors duration-300 group-hover:text-white whitespace-nowrap">
        Start Your Project
      </span>

      <div className="relative z-10 w-3.5 h-3.5 sm:w-4 sm:h-4 overflow-hidden shrink-0">
        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white absolute transition-transform duration-300 ease-out group-hover:translate-x-6 group-hover:opacity-0" />
        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 absolute -translate-x-6 opacity-0 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100" />
      </div>
    </motion.a>
  </div>
</motion.div>

      </div>
    </section>
  );
};

export default Process;