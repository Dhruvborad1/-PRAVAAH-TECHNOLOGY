import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal';

const faqs = [
  {
    id: '01',
    category: 'TIMELINE & VELOCITY',
    q: 'How long does a typical project cycle take?',
    a: 'Typical MVP deployments range between 4 to 8 weeks, while complex enterprise platforms require 3 to 6 months. We run structured two-week agile sprints with continuous delivery staging, meaning you review tangible progress every 14 days.',
    highlights: ['Two-week sprint cadences', 'Working staging environment', 'Milestone-based delivery']
  },
  {
    id: '02',
    category: 'COMMERCIALS',
    q: 'What pricing and engagement models do you support?',
    a: 'We provide Fixed-Scope contracts for well-defined blueprints, Time & Material (T&M) for evolving high-growth software, and Dedicated Engineering Pods for scaling tech teams requiring full-stack firepower.',
    highlights: ['Fixed-price milestones', 'Dedicated engineering teams', 'Transparent sprint reporting']
  },
  {
    id: '03',
    category: 'RELIABILITY & SLA',
    q: 'Do you provide post-launch support and SLAs?',
    a: 'Yes. Every project includes 30 days of complimentary stabilization. We also offer enterprise tier maintenance packages with guaranteed 99.9% uptime SLAs, proactive security patches, and sub-hour critical incident response.',
    highlights: ['30-day warranty period', 'Sub-hour response windows', '24/7 server monitoring']
  },
  {
    id: '04',
    category: 'INFRASTRUCTURE',
    q: 'Which technology stacks are supported for new projects?',
    a: 'We engineer exclusively with modern, battle-tested ecosystems: React, Next.js, Node.js, TypeScript, Python, Tailwind CSS, PostgreSQL, MongoDB, Docker containers, and automated AWS/GCP cloud environments.',
    highlights: ['Zero legacy lock-in', 'Cloud-native architecture', 'Type-safe TypeScript core']
  },
  {
    id: '05',
    category: 'INTEGRATION',
    q: 'Can your engineers collaborate with our in-house team?',
    a: 'Absolutely. We seamlessly integrate as an augmented development squad, operating directly inside your existing GitHub repositories, Jira roadmaps, Slack channels, and established code review protocols.',
    highlights: ['Direct Slack / GitHub sync', 'Seamless PR workflows', 'Team knowledge transfers']
  }
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileOpenIndex, setMobileOpenIndex] = useState(0);
  const activeFaq = faqs[activeIndex];

  const handleMobileToggle = (idx) => {
    setMobileOpenIndex(mobileOpenIndex === idx ? null : idx);
  };

  return (
    <section 
      className="relative py-16 md:py-20 lg:py-28 bg-white border-b border-slate-200/60 overflow-hidden selection:bg-cyan-100 selection:text-slate-900"
      aria-label="Frequently Addressed Queries"
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
        
        {/* Centered Section Header */}
        <div className="mb-12 lg:mb-16 text-center max-w-4xl mx-auto">
          <ScrollReveal variant="lift">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/70 bg-blue-50/60 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-blue-700 shadow-sm mb-4">
              <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
              KNOWLEDGE ARCHITECTURE
            </div>

            {/* Single Line Main Headline on Desktop */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-950 leading-[1.14] tracking-tight whitespace-normal lg:whitespace-nowrap">
              Got Questions? <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#2F54EB] to-[#9B51E0]">Here Are Direct Answers.</span>
            </h2>

            {/* Centered Description Subtext */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
              Everything you need to know about our sprint execution, SLA commitments, technical feasibility audits, and engagement contracts.
            </p>

            {/* Centered Decorative Line */}
            <div className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-500 mx-auto" />
          </ScrollReveal>
        </div>

        {/* ========================================================================= */}
        {/* 1. MOBILE-ONLY VIEW: SEAMLESS INTERACTIVE ACCORDION CARDS (< lg)          */}
        {/* ========================================================================= */}
        <div className="block lg:hidden space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = mobileOpenIndex === idx;

            return (
              <ScrollReveal key={`mob-${faq.id}`} variant="lift" delay={idx * 0.05}>
                <div 
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'bg-white border-blue-300/80 shadow-md shadow-slate-900/5 ring-1 ring-blue-500/10' 
                      : 'bg-slate-50/70 border-slate-200/80 hover:border-slate-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => handleMobileToggle(idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-3.5 select-none cursor-pointer"
                  >
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-blue-600 block uppercase">
                        // {faq.id} • {faq.category}
                      </span>
                      <h3 className="font-display font-bold text-slate-950 text-sm sm:text-base leading-snug">
                        {faq.q}
                      </h3>
                    </div>

                    <div 
                      className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 ${
                        isOpen 
                          ? 'bg-blue-600 text-white border-blue-600 rotate-180' 
                          : 'bg-white text-slate-400 border-slate-200'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: 'easeInOut' }}
                      >
                        <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-slate-100 space-y-4">
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-3">
                            {faq.a}
                          </p>

                          <div className="pt-3 border-t border-slate-100 space-y-2">
                            <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-slate-400 block">
                              DELIVERABLE GUARANTEES
                            </span>
                            {faq.highlights.map((point, pIdx) => (
                              <div key={pIdx} className="flex items-center gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                                <span className="text-xs font-semibold text-slate-800">
                                  {point}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* 2. DESKTOP-ONLY VIEW: SPLIT TERMINAL CONSOLE HUB (lg+)                   */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT: SELECTOR LIST (5 COLS) */}
          <div className="lg:col-span-5 space-y-3">
            {faqs.map((faq, idx) => {
              const isSelected = activeIndex === idx;

              return (
                <ScrollReveal key={`desk-${faq.id}`} variant="lift" delay={idx * 0.05}>
                  <button
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 relative group cursor-pointer flex items-center justify-between gap-4 ${
                      isSelected
                        ? 'bg-white border-slate-300 shadow-sm'
                        : 'bg-slate-50/50 border-slate-200/80 hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    {/* Left Active Indicator Bar */}
                    <div 
                      className={`absolute left-0 top-3 bottom-3 w-1 rounded-r-full bg-gradient-to-b from-[#00D2FF] via-[#2F54EB] to-[#9B51E0] transition-opacity duration-300 ${
                        isSelected ? 'opacity-100' : 'opacity-0'
                      }`}
                    />

                    <div>
                      <span className={`text-[10px] font-mono font-bold tracking-widest block mb-1 uppercase transition-colors ${
                        isSelected ? 'text-blue-600' : 'text-slate-400'
                      }`}>
                        // {faq.id} • {faq.category}
                      </span>
                      <h3 className={`font-display font-bold text-sm sm:text-base leading-snug transition-colors ${
                        isSelected ? 'text-slate-950' : 'text-slate-700 group-hover:text-blue-600'
                      }`}>
                        {faq.q}
                      </h3>
                    </div>

                    <div className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isSelected 
                        ? 'bg-blue-600 text-white border-blue-600 shadow-xs' 
                        : 'text-slate-400 border-slate-200 group-hover:border-slate-300 group-hover:text-slate-600 bg-white'
                    }`}>
                      <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-300 ${isSelected ? 'translate-x-0.5' : ''}`} />
                    </div>
                  </button>
                </ScrollReveal>
              );
            })}
          </div>

          {/* RIGHT: FIXED HEIGHT DYNAMIC CONSOLE STAGE (7 COLS) */}
          <div className="lg:col-span-7 lg:sticky lg:top-28">
            <ScrollReveal variant="blur" delay={0.1}>
              <div className="relative min-h-[480px] rounded-[24px] sm:rounded-[30px] border border-slate-200/90 bg-slate-50/60 backdrop-blur-md p-6 sm:p-8 shadow-xs flex flex-col justify-between overflow-hidden">
                
                {/* Console Top Header */}
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse" />
                      <span className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase">
                        ACTIVE SPECIFICATION // {activeFaq.id}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-slate-300" />
                      <div className="w-2 h-2 rounded-full bg-slate-300" />
                      <div className="w-2 h-2 rounded-full bg-blue-600" />
                    </div>
                  </div>

                  {/* Dynamic Content Area */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeFaq.id}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="space-y-4"
                    >
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200/70 text-[10px] font-mono font-bold text-blue-700 tracking-wider uppercase">
                        {activeFaq.category}
                      </span>

                      <h3 className="text-lg sm:text-xl font-display font-bold text-slate-950 tracking-tight leading-snug">
                        {activeFaq.q}
                      </h3>

                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                        {activeFaq.a}
                      </p>

                      {/* Highlights */}
                      <div className="pt-4 border-t border-slate-200/80 space-y-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-1">
                          DELIVERABLE GUARANTEES
                        </span>
                        {activeFaq.highlights.map((point, index) => (
                          <div key={index} className="flex items-center gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                            <span className="text-xs sm:text-sm font-semibold text-slate-800">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Console Static Footer */}
                <div className="mt-8 pt-4 border-t border-slate-200/80 flex items-center justify-between text-[10px] text-slate-400 font-mono tracking-wider uppercase">
                  <span>PRAVAAH DIRECT SLA PROTOCOL</span>
                  <span className="text-blue-600 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF]" /> VERIFIED
                  </span>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FaqSection;