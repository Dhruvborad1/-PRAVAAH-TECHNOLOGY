import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Layers3, 
  TrendingUp, 
  Sparkles, 
  ArrowUpRight 
} from 'lucide-react';

const journeyMilestones = [
  {
    id: '01',
    title: 'Idea',
    description: 'Recognizing the need for scalable, high-quality digital solutions.',
    icon: Lightbulb,
    position: 'above',
  },
  {
    id: '02',
    title: 'Foundation',
    description: 'Establishing a passionate team of elite engineers and designers.',
    icon: Layers3,
    position: 'below',
  },
  {
    id: '03',
    title: 'Growth',
    description: 'Expanding core capabilities across modern cloud and AI systems.',
    icon: TrendingUp,
    position: 'above',
  },
  {
    id: '04',
    title: 'Innovation',
    description: 'Delivering digital products that build real, sustained enterprise value.',
    icon: Sparkles,
    position: 'below',
  },
  {
    id: '05',
    title: "What's Next",
    description: 'Continuously pioneering with adaptive tech to shape tomorrow.',
    icon: ArrowUpRight,
    position: 'above',
  },
];

// Desktop wave coordinates (viewBox: 1180 x 260)
const DESKTOP_SVG_PATH =
  'M 70 130 C 160 50, 250 50, 330 130 C 410 210, 510 210, 590 130 C 670 50, 770 50, 850 130 C 930 210, 1030 210, 1110 130';

const DESKTOP_NODE_COORDS = [
  { cx: 70, cy: 130 },
  { cx: 330, cy: 130 },
  { cx: 590, cy: 130 },
  { cx: 850, cy: 130 },
  { cx: 1110, cy: 130 },
];

// Mobile Flow Stream Path (Centered smooth wave stream)
const MOBILE_STREAM_PATH =
  'M 24 20 C 10 120, 38 180, 24 280 C 10 380, 38 440, 24 540 C 10 640, 38 700, 24 800 C 10 900, 38 960, 24 1020';

const AboutJourneySection = () => {
  return (
    <section 
      className="relative bg-gradient-to-b from-slate-50/80 via-white to-slate-100/70 pt-10 pb-14 md:pt-12 md:pb-16 overflow-hidden border-b border-slate-200/70"
      aria-label="Our Journey Timeline"
    >
      {/* Soft Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[550px] h-[340px] bg-cyan-200/40 blur-[110px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[340px] bg-purple-200/35 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[650px] h-[250px] bg-blue-200/30 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* HEADER (Gap Removed: Minimal bottom margin) */}
        <div className="text-center max-w-xl mx-auto mb-0 md:mb-2">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/80 bg-white/70 backdrop-blur-md px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-blue-700 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
            Our Journey
          </div>

          <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-950">
            Growing Through Every Chapter
          </h2>

          <div className="mx-auto mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-500" />

          <p className="mt-2 text-sm sm:text-base text-slate-600 font-normal">
            From a simple idea to meaningful digital innovation, every step shapes where we go next.
          </p>
        </div>

        {/* ================================================== */}
        {/* DESKTOP TIMELINE (Flow Wave Animation + Glass)     */}
        {/* ================================================== */}
        {/* Pulling the timeline upward with -mt to remove the dead gap */}
        <div className="hidden lg:block relative max-w-[1180px] mx-auto h-[500px] -mt-4 lg:-mt-6">
          
          {/* Animated SVG Stream */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[260px] pointer-events-none">
            <svg 
              className="w-full h-full overflow-visible" 
              viewBox="0 0 1180 260" 
              fill="none" 
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="pravaahFlowGradientDesktop" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="35%" stopColor="#2563eb" />
                  <stop offset="70%" stopColor="#7c3aed" />
                  <stop offset="100%" stopColor="#c084fc" />
                </linearGradient>
              </defs>

              <path
                d={DESKTOP_SVG_PATH}
                stroke="#e2e8f0"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />

              <motion.path
                d={DESKTOP_SVG_PATH}
                stroke="url(#pravaahFlowGradientDesktop)"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
              />
            </svg>
          </div>

          {/* Milestone Nodes & Glass Cards */}
          <div className="relative w-full h-full">
            {journeyMilestones.map((item, idx) => {
              const coords = DESKTOP_NODE_COORDS[idx];
              const Icon = item.icon;
              const isAbove = item.position === 'above';
              const leftPercent = (coords.cx / 1180) * 100;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: isAbove ? -16 : 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.15 + idx * 0.12, ease: "easeOut" }}
                  className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-default"
                  style={{ left: `${leftPercent}%` }}
                >
                  {/* Central Node */}
                  <div className="relative flex items-center justify-center z-30">
                    <div className="absolute -inset-1.5 rounded-full bg-cyan-400/25 blur-sm group-hover:bg-cyan-400/50 transition-all duration-300 pointer-events-none" />

                    <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 p-[2px] shadow-md shadow-blue-500/20 transition-transform duration-300 group-hover:scale-110">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-blue-600 transition-colors duration-300 group-hover:bg-gradient-to-tr group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:text-white">
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>
                  </div>

                  {/* Desktop Static Connector Stem */}
                  <div
                    className={`absolute z-10 pointer-events-none flex flex-col items-center ${
                      isAbove 
                        ? 'bottom-[22px] flex-col-reverse' 
                        : 'top-[22px] flex-col'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-sm" />
                    <div className="w-[2px] h-[36px] bg-gradient-to-b from-cyan-500 via-blue-600 to-purple-600 opacity-80" />
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-sm" />
                  </div>

                  {/* Desktop Frosted Glass Card */}
                  <div
                    className={`absolute z-20 w-60 rounded-2xl p-4 text-left border transition-all duration-300 group-hover:-translate-y-1 ${
                      isAbove ? 'bottom-[64px]' : 'top-[64px]'
                    }`}
                    style={{
                      background: 'rgba(255, 255, 255, 0.45)',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      borderColor: 'rgba(255, 255, 255, 0.75)',
                      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.08), inset 0 1px 1px 0 rgba(255, 255, 255, 0.85)',
                    }}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-mono text-[10px] font-extrabold tracking-widest text-cyan-700 uppercase">
                        Phase {item.id}
                      </span>
                      <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 opacity-80" />
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
                      {item.title}
                    </h3>

                    <div className="my-2 h-[2px] w-7 rounded-full bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-500 group-hover:w-12 transition-all duration-300" />

                    <p className="text-xs leading-relaxed text-slate-700 font-normal">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ==================================================================== */}
        {/* MOBILE & TABLET TIMELINE (Unbreakable Connected Stream + Glass Cards)*/}
        {/* ==================================================================== */}
        <div className="lg:hidden relative max-w-md mx-auto mt-4">
          
          {/* Animated Vertical Wave Stream (Pravaah Background) */}
          <div className="absolute left-0 top-0 bottom-0 w-[48px] pointer-events-none overflow-hidden">
            <svg 
              className="w-full h-full" 
              viewBox="0 0 48 1040" 
              fill="none" 
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="pravaahFlowGradientMobile" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="35%" stopColor="#2563eb" />
                  <stop offset="70%" stopColor="#7c3aed" />
                  <stop offset="100%" stopColor="#c084fc" />
                </linearGradient>
              </defs>

              {/* Passive Wave Track */}
              <path
                d={MOBILE_STREAM_PATH}
                stroke="#e2e8f0"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />

              {/* Animated Glowing Pravaah Wave */}
              <motion.path
                d={MOBILE_STREAM_PATH}
                stroke="url(#pravaahFlowGradientMobile)"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
              />
            </svg>
          </div>

          {/* List of Connected Milestones */}
          <div className="space-y-4 relative z-10 py-1">
            {journeyMilestones.map((item, idx) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.1 + idx * 0.1 }}
                  className="flex items-center w-full"
                >
                  {/* 1. ICON ON THE STREAM LINE */}
                  <div className="w-[48px] flex justify-center items-center shrink-0">
                    <div className="relative flex items-center justify-center">
                      <div className="absolute -inset-1 rounded-full bg-cyan-400/30 blur-sm pointer-events-none" />
                      
                      <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 p-[2px] shadow-md shadow-blue-500/20">
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-blue-600">
                          <Icon className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 2. UNBREAKABLE SOLID CONNECTOR LINE */}
                  <div className="w-5 shrink-0 flex items-center">
                    <div className="w-full h-[2px] bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400 relative">
                      <span className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-sm" />
                    </div>
                  </div>

                  {/* 3. TRANSLUCENT FROSTED GLASS CARD */}
                  <div 
                    className="flex-1 rounded-2xl p-4 border transition-shadow"
                    style={{
                      background: 'rgba(255, 255, 255, 0.60)',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      borderColor: 'rgba(255, 255, 255, 0.85)',
                      boxShadow: '0 8px 24px 0 rgba(31, 38, 135, 0.08), inset 0 1px 1px 0 rgba(255, 255, 255, 0.95)',
                    }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-[10px] font-bold tracking-wider text-cyan-700 uppercase">
                        Phase {item.id}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-400">#{item.id}</span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <div className="my-1.5 h-[2px] w-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600" />

                    <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutJourneySection;