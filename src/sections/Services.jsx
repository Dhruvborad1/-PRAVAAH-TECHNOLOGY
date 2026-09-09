import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Animation Variants (Snappy & Fast on Scroll)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // દરેક કાર્ડ વચ્ચે માત્ર 80ms નો ગેપ
      delayChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.38,
      ease: [0.25, 1, 0.5, 1], // fast out, smooth stop
    },
  },
};

// Custom Tech Icons
const CodeWindowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-cyan-400 stroke-[1.8]" stroke="currentColor">
    <rect x="2" y="4" width="15" height="12" rx="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 8l2 2-2 2M11 12h2" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="14" y="8" width="8" height="12" rx="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="18" cy="17" r="0.5" fill="currentColor" />
  </svg>
);

const PenRulerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-cyan-400 stroke-[1.8]" stroke="currentColor">
    <rect x="3" y="3" width="13" height="13" rx="2" />
    <path d="M6 6l7 7M6 10l4 4M10 6l4 4" strokeLinecap="round" />
    <circle cx="17" cy="17" r="3.5" />
    <path d="M19.5 19.5l2.5 2.5" strokeLinecap="round" />
  </svg>
);

const AiBrainChipIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-cyan-400 stroke-[1.8]" stroke="currentColor">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2.5 2.5M16.5 16.5L19 19M5 19l2.5-2.5M16.5 7.5L19 5" strokeLinecap="round" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

const VideoPlayerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-cyan-400 stroke-[1.8]" stroke="currentColor">
    <rect x="3" y="6" width="13" height="12" rx="2" />
    <path d="M16 10l5-3v10l-5-3v-4z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 10l3 2-3 2v-4z" fill="currentColor" />
  </svg>
);

const ScreenLayersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-purple-400 stroke-[1.8]" stroke="currentColor">
    <rect x="3" y="4" width="12" height="10" rx="2" />
    <rect x="9" y="8" width="12" height="12" rx="2" />
  </svg>
);

const HandDollarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-purple-400 stroke-[1.8]" stroke="currentColor">
    <circle cx="15" cy="7" r="4" />
    <path d="M15 5.5v3M14 6.5h2a.75.75 0 010 1.5h-2" strokeLinecap="round" />
    <path d="M3 15h6l3.5-1.5a2 2 0 011.8.2L18 16a2 2 0 01-1 3.5H9l-6-2v-2.5z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BrainSideIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-purple-400 stroke-[1.8]" stroke="currentColor">
    <path d="M9.5 4a4.5 4.5 0 00-4.5 4.5c0 .7.15 1.35.42 1.95A4 4 0 004 14a4 4 0 003.8 4h.2a4 4 0 007.8-.5c1.3-.4 2.2-1.6 2.2-3 0-.6-.2-1.2-.5-1.7A4.5 4.5 0 0014 4h-4.5z" strokeLinecap="round" />
    <path d="M10 9a2 2 0 012 2M9 14h2M14 13a1 1 0 011 1" strokeLinecap="round" />
  </svg>
);

const GearIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-purple-400 stroke-[1.8]" stroke="currentColor">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const services = [
  {
    icon: CodeWindowIcon,
    tag: 'Web & Mobile',
    num: '01',
    title: 'Web & App\nDevelopment',
    desc: 'Scalable full-stack web applications, interactive architectures, and performance-first mobile experiences.',
  },
  {
    icon: PenRulerIcon,
    tag: 'Product UI',
    num: '02',
    title: 'UI/UX & Graphic\nDesign',
    desc: 'Human-centered user interfaces, comprehensive design systems, and engaging brand identity assets.',
  },
  {
    icon: AiBrainChipIcon,
    tag: 'Intelligence',
    num: '03',
    title: 'AI & Automation\nSystems',
    desc: 'Integrating cognitive intelligence, LLMs, and custom automation algorithms into core workflows.',
  },
  {
    icon: VideoPlayerIcon,
    tag: 'Motion Studio',
    num: '04',
    title: 'Video & Creative\nServices',
    desc: 'High-impact promotional media, 3D motion graphics, and narrative digital assets for technology products.',
  },
];

const solutions = [
  {
    icon: ScreenLayersIcon,
    tag: 'Custom Platform',
    num: '01',
    title: 'Custom Software\nSolutions',
    desc: 'Purpose-built enterprise platforms engineered to transform operations and streamline team workflows.',
  },
  {
    icon: HandDollarIcon,
    tag: 'Ecosystem',
    num: '02',
    title: 'Digital Business\nPlatforms',
    desc: 'Scalable multi-tenant business software with centralized challans, billing, and real-time dashboards.',
  },
  {
    icon: BrainSideIcon,
    tag: 'Cognitive Tech',
    num: '03',
    title: 'AI-Powered\nBusiness Solutions',
    desc: 'Data-driven predictive systems and smart decision engines built for modern digital-first enterprises.',
  },
  {
    icon: GearIcon,
    tag: 'Process Flow',
    num: '04',
    title: 'Workflow & Process\nAutomation',
    desc: 'Automating repetitive pipelines with zero friction, event webhooks, and secure cloud integrations.',
  },
];

const ServicesAndSolutions = () => {
  return (
    <section className="relative min-h-screen bg-[#070b18] text-slate-100 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans selection:bg-blue-500/30">

      {/* Pravaah Fluid Keyframe Styles */}
      <style>{`
        @keyframes beamFlow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes verticalBeam {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes borderRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes waterFlow {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 200%; }
        }
        .animate-beam-flow {
          animation: beamFlow 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .animate-vertical-beam {
          animation: verticalBeam 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .border-spin {
          animation: borderRotate 6s linear infinite;
        }
        .pravaah-water-bg {
          background-size: 200% 200%;
          animation: waterFlow 12s linear infinite;
        }
      `}</style>

      {/* Radial Glows */}
      <div className="absolute top-[18%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-cyan-900/15 rounded-full blur-[150px] pointer-events-none" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{
          backgroundImage: `radial-gradient(rgba(56, 189, 248, 0.3) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="section-label mb-4">
            <span className="section-label-text">WHAT WE DO</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
            Services &amp; Solutions For the <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">Digital Future</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-[15px] leading-relaxed max-w-xl mx-auto">
            We combine creativity, technology and innovation to deliver digital services and business solutions designed around your goals.
          </p>
        </motion.div>

        {/* INTERACTIVE CARDS GRID */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* Central Divider */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-[1px] -translate-x-1/2 z-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400 to-purple-500 opacity-75 blur-[0.5px] animate-vertical-beam" />
          </div>

          {/* Left Column: OUR SERVICES */}
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35 }}
              className="flex items-center justify-between pb-3 border-b border-slate-800/80 px-2 mb-2"
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
                <h3 className="text-xl font-bold tracking-tight text-white">
                  OUR SERVICES
                </h3>
              </div>
              <span className="text-[11px] font-mono text-cyan-400/90 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/20">
                Design & Engineering
              </span>
            </motion.div>

            {/* Staggered Cards Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {services.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={cardVariants}
                    whileHover={{ y: -5, scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    className="group relative rounded-2xl p-[1px] overflow-hidden transition-all duration-300 min-h-[225px]"
                  >
                    <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#06b6d4_360deg)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-spin" />

                    <div className="relative w-full h-full bg-[#090f22]/95 backdrop-blur-xl rounded-[15px] p-5 flex flex-col justify-between overflow-hidden border border-slate-800/90 group-hover:border-cyan-500/20">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.04] via-blue-600/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pravaah-water-bg pointer-events-none" />

                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-3.5">
                          <div className="relative">
                            <span className="absolute inset-0 rounded-xl bg-cyan-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative w-10 h-10 rounded-xl bg-[#101735] border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400 transition-all duration-300">
                              <Icon />
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] font-mono text-cyan-400/80 font-bold tracking-wider">
                              {card.num}
                            </span>
                            <span className="text-[9.5px] font-mono uppercase tracking-wider text-slate-400 px-2 py-0.5 rounded bg-slate-900/90 border border-slate-800">
                              {card.tag}
                            </span>
                          </div>
                        </div>

                        <h4 className="text-[15px] font-bold text-white mb-2 leading-snug whitespace-pre-line group-hover:text-cyan-200 transition-colors">
                          {card.title}
                        </h4>

                        <p className="text-slate-400 text-xs leading-relaxed">
                          {card.desc}
                        </p>
                      </div>

                      <div className="relative z-10 flex items-center justify-between pt-3 mt-3 border-t border-slate-800/60 text-slate-400 group-hover:text-cyan-300 text-[11px] font-medium transition-colors">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-cyan-400 group-hover:animate-ping" />
                          <span className="tracking-wide">Explore Stream</span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: OUR SOLUTIONS */}
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35 }}
              className="flex items-center justify-between pb-3 border-b border-slate-800/80 px-2 mb-2"
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_10px_#c084fc]" />
                <h3 className="text-xl font-bold tracking-tight text-white">
                  OUR SOLUTIONS
                </h3>
              </div>
              <span className="text-[11px] font-mono text-purple-400/90 bg-purple-950/60 px-3 py-1 rounded-full border border-purple-500/20">
                Enterprise & Systems
              </span>
            </motion.div>

            {/* Staggered Cards Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {solutions.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={cardVariants}
                    whileHover={{ y: -5, scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    className="group relative rounded-2xl p-[1px] overflow-hidden transition-all duration-300 min-h-[225px]"
                  >
                    <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#c084fc_360deg)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-spin" />

                    <div className="relative w-full h-full bg-[#0d0f26]/95 backdrop-blur-xl rounded-[15px] p-5 flex flex-col justify-between overflow-hidden border border-slate-800/90 group-hover:border-purple-500/20">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.04] via-indigo-600/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pravaah-water-bg pointer-events-none" />

                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-3.5">
                          <div className="relative">
                            <span className="absolute inset-0 rounded-xl bg-purple-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative w-10 h-10 rounded-xl bg-[#171435] border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:border-purple-400 transition-all duration-300">
                              <Icon />
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] font-mono text-purple-400/80 font-bold tracking-wider">
                              {card.num}
                            </span>
                            <span className="text-[9.5px] font-mono uppercase tracking-wider text-slate-400 px-2 py-0.5 rounded bg-slate-900/90 border border-slate-800">
                              {card.tag}
                            </span>
                          </div>
                        </div>

                        <h4 className="text-[15px] font-bold text-white mb-2 leading-snug whitespace-pre-line group-hover:text-purple-200 transition-colors">
                          {card.title}
                        </h4>

                        <p className="text-slate-400 text-xs leading-relaxed">
                          {card.desc}
                        </p>
                      </div>

                      <div className="relative z-10 flex items-center justify-between pt-3 mt-3 border-t border-slate-800/60 text-slate-400 group-hover:text-purple-300 text-[11px] font-medium transition-colors">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-purple-400 group-hover:animate-ping" />
                          <span className="tracking-wide">Explore System</span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>

        {/* Horizontal Stream Divider */}
        <div className="relative w-full h-px mt-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-purple-500 opacity-75 blur-[1px] animate-beam-flow" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-90 animate-beam-flow" />
        </div>

        {/* Bottom CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Have a unique business requirement?
            </h4>
            <p className="text-slate-400 text-sm sm:text-base mt-1">
              Let's create the right digital solution for you.
            </p>
          </div>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="group relative inline-flex items-center gap-3.5 px-8 py-3.5 bg-white text-black text-sm font-semibold rounded-full overflow-hidden transition-all duration-300 shadow-[0_8px_25px_-4px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_30px_-2px_rgba(99,102,241,0.35)] border border-slate-200 hover:border-indigo-500/50 cursor-pointer shrink-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-sky-500/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

            <span className="relative z-10 tracking-wide transition-colors duration-300 group-hover:text-slate-900 whitespace-nowrap">
              Start Your Project
            </span>

            <div className="relative z-10 w-4 h-4 overflow-hidden">
              <ArrowRight className="w-4 h-4 text-black absolute transition-transform duration-300 ease-out group-hover:translate-x-6 group-hover:opacity-0" />
              <ArrowRight className="w-4 h-4 text-indigo-600 absolute -translate-x-6 opacity-0 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100" />
            </div>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesAndSolutions;