import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, HeartHandshake, Zap, Plus } from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal';

import TeamMainImg from '../../assets/about/about-team-main.webp';
import TeamCollabImg from '../../assets/about/about-team-collaboration.webp';
import TeamWorkImg from '../../assets/about/about-team-work.webp';

const cultureCards = [
  {
    id: '01',
    title: 'People-First Core',
    subtitle: 'Autonomy & Radical Ownership',
    desc: 'Empowered engineering minds driving innovation without micro-management or creative bottlenecks.',
    img: TeamMainImg,
    icon: Users,
    gradient: 'from-[#00D2FF] to-[#2F54EB]',
    tag: 'Culture',
  },
  {
    id: '02',
    title: 'Radical Collaboration',
    subtitle: 'Zero Silos, One Vision',
    desc: 'Cross-functional transparency where engineers, designers, and founders iterate in continuous flow.',
    img: TeamCollabImg,
    icon: HeartHandshake,
    gradient: 'from-[#2F54EB] to-[#702FF4]',
    tag: 'Synergy',
  },
  {
    id: '03',
    title: 'Obsessive Craftsmanship',
    subtitle: 'Code Quality as a Religion',
    desc: 'Uncompromising dedication to system resilience, fast hardware execution, and architectural precision.',
    img: TeamWorkImg,
    icon: Zap,
    gradient: 'from-[#702FF4] to-[#9B51E0]',
    tag: 'Execution',
  },
];

// Marquee માટે ડેટા ડુપ્લિકેટ કરીને લૂપ બનાવ્યો છે
const marqueeCards = [...cultureCards, ...cultureCards];

const AboutCultureSection = () => {
  const [hovered, setHovered] = useState(0);

  return (
    <section
      className="relative bg-white py-20 md:py-32 overflow-hidden border-b border-slate-100"
      aria-label="Pravaah Culture Stream"
    >
      {/* ========================================================= */}
      {/* 1. LAYERED BACKGROUND WITH GRID & BRAND GLOWS             */}
      {/* ========================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(to right, #0f172a 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />

        <div className="absolute top-1/4 -left-28 w-[650px] h-[480px] bg-cyan-100/45 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 -right-28 w-[650px] h-[480px] bg-purple-100/40 blur-[150px] rounded-full" />

        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white via-white/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>

      {/* ========================================================= */}
      {/* 2. MAIN CONTAINER                                         */}
      {/* ========================================================= */}
      <div className="container mx-auto px-5 md:px-8 relative z-10">

        {/* HEADER */}
        <ScrollReveal variant="lift" className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/80 bg-blue-50/70 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-blue-700 shadow-sm mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
            Cultural DNA
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-950 tracking-tight">
            People Behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#2F54EB] to-[#9B51E0]">the Progress</span>
          </h2>

          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-500" />

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            We don't build within rigid corporate walls. We cultivate an open digital laboratory where bold thinkers engineer with velocity and passion.
          </p>
        </ScrollReveal>

        {/* ========================================================= */}
        {/* A. MOBILE & TABLET VIEW: INFINITE SMOOTH MARQUEE STREAM   */}
        {/* ========================================================= */}
        <div className="block lg:hidden relative -mx-5 sm:-mx-8 overflow-hidden py-2">
          {/* Edge Blur Gradients */}
          <div className="absolute left-0 inset-y-0 w-6 bg-gradient-to-r from-white/40 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-6 bg-gradient-to-l from-white/40 to-transparent z-20 pointer-events-none" />

          <motion.div
            className="flex gap-4 sm:gap-5 w-max px-5 sm:px-8"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 24,
              ease: 'linear',
              repeat: Infinity,
            }}
          >
            {marqueeCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={`${card.id}-${idx}`}
                  className="relative w-[300px] sm:w-[360px] h-[440px] shrink-0 rounded-3xl overflow-hidden border border-slate-200/80 shadow-lg bg-slate-950 flex flex-col justify-between p-6 select-none"
                >
                  {/* Background Image */}
                  <img
                    src={card.img}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover object-center scale-105"
                  />

                  {/* Dark Glass Shade Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20" />

                  {/* Top Badge */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div
                      className="flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider text-white border"
                      style={{
                        background: 'rgba(0, 0, 0, 0.50)',
                        backdropFilter: 'blur(10px)',
                        borderColor: 'rgba(255, 255, 255, 0.20)',
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      <span>{card.id} • {card.tag}</span>
                    </div>

                    <div className="w-8 h-8 rounded-full flex items-center justify-center border border-white/20 bg-black/40 text-white/80">
                      <Plus className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#00D2FF] to-[#2F54EB] text-white flex items-center justify-center shadow-lg shadow-cyan-500/25 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono font-semibold text-cyan-300 block leading-tight">
                          {card.subtitle}
                        </span>
                        <h3 className="text-xl font-display font-bold text-white leading-tight">
                          {card.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal line-clamp-3">
                      {card.desc}
                    </p>

                    <div className="mt-3.5 h-[2px] w-12 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* ========================================================= */}
        {/* B. DESKTOP VIEW: KINETIC ACCORDION FILMSTRIP              */}
        {/* ========================================================= */}
        <div className="hidden lg:flex gap-5 h-[520px] w-full items-stretch">
          {cultureCards.map((card, index) => {
            const isExpanded = hovered === index;
            const Icon = card.icon;

            return (
              <motion.div
                key={card.id}
                onMouseEnter={() => setHovered(index)}
                onClick={() => setHovered(index)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border ${isExpanded
                  ? 'flex-[3.5] border-cyan-400/40 shadow-2xl shadow-blue-500/10'
                  : 'flex-[1.2] border-slate-200/80 shadow-md'
                  } h-full`}
              >
                {/* Background Image with Dynamic Zoom */}
                <img
                  src={card.img}
                  alt={card.title}
                  className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ${isExpanded ? 'scale-105 filter-none' : 'scale-110 grayscale-[35%] brightness-85'
                    }`}
                />

                {/* Ambient Deep Shadow Gradient */}
                <div className={`absolute inset-0 transition-opacity duration-500 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/10 ${isExpanded ? 'opacity-90' : 'opacity-80'
                  }`} />

                {/* Top Badge: Index + Tag */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-20 pointer-events-none">
                  <div
                    className="flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider text-white border"
                    style={{
                      background: 'rgba(0, 0, 0, 0.45)',
                      backdropFilter: 'blur(10px)',
                      borderColor: 'rgba(255, 255, 255, 0.20)',
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span>{card.id} • {card.tag}</span>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border border-white/20 transition-transform duration-500 ${isExpanded ? 'rotate-45 bg-cyan-500 text-white' : 'bg-black/30 text-white/70'
                    }`}>
                    <Plus className="w-4 h-4" />
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-8 z-20 flex flex-col justify-end">

                  {/* Collapsed View */}
                  {!isExpanded && (
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-cyan-300">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-display font-bold text-white tracking-wide truncate">
                          {card.title}
                        </h3>
                      </div>
                    </div>
                  )}

                  {/* Expanded View */}
                  {isExpanded && (
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#00D2FF] to-[#2F54EB] text-white flex items-center justify-center shadow-lg shadow-cyan-500/30">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-xs font-mono font-semibold text-cyan-300">
                            {card.subtitle}
                          </span>
                          <h3 className="text-3xl font-display font-bold text-white leading-tight">
                            {card.title}
                          </h3>
                        </div>
                      </div>

                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: 0.1 }}
                        className="text-base text-slate-200 leading-relaxed font-normal max-w-xl"
                      >
                        {card.desc}
                      </motion.p>

                      <div className="mt-4 h-[2px] w-14 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />
                    </div>
                  )}

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AboutCultureSection;