import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Headphones, CheckCircle2, ChevronDown, Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from '../../components/ScrollReveal';

const consultationSteps = [
  { 
    step: '01', 
    title: 'Architectural Audit', 
    desc: 'We examine requirements, technology stack feasibility, and API dependencies.' 
  },
  { 
    step: '02', 
    title: 'Direct Engineer Discovery', 
    desc: 'Coordinate a 30-minute discovery session with lead system architects.' 
  },
  { 
    step: '03', 
    title: 'Scope & Sprint Roadmap', 
    desc: 'Transparent deliverable milestones, SLA guarantees, and exact estimates.' 
  },
  { 
    step: '04', 
    title: 'Sprint Execution', 
    desc: 'Full-velocity sprint development begins with private staging access.' 
  }
];

const projectTypes = [
  'Web Development',
  'Mobile App Development',
  'AI & Automation',
  'Custom Software'
];

const InquiryForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedProjectType, setSelectedProjectType] = useState('');
  const [isProjectTypeOpen, setIsProjectTypeOpen] = useState(false);
  const projectTypeRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!projectTypeRef.current?.contains(event.target)) {
        setIsProjectTypeOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <section 
      id="inquiry-form"
      className="relative overflow-hidden bg-[#070c1e] px-4 py-20 font-sans text-white selection:bg-cyan-400 selection:text-[#070c1e] sm:px-6 md:py-28 lg:px-8 border-b border-slate-800"
      aria-label="Inquiry Form and Process"
    >
      <div className="pointer-events-none absolute top-[-10%] left-[-10%] h-[550px] w-[550px] rounded-full bg-cyan-500/10 blur-[150px]" />
      <div className="pointer-events-none absolute top-[30%] right-[-10%] h-[600px] w-[600px] rounded-full bg-purple-600/15 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-[-10%] left-[20%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="pointer-events-none absolute inset-0 opacity-25 overflow-hidden">
        <svg viewBox="0 0 1440 800" fill="none" className="w-full h-full preserve-3d" preserveAspectRatio="none">
          <defs>
            <linearGradient id="pravaahWaveContact" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d2ff" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <path
            d="M-100,200 C300,50 600,600 1100,250 C1300,100 1500,300 1600,200"
            stroke="url(#pravaahWaveContact)"
            strokeWidth="3"
            strokeDasharray="8 8"
          />
          <path
            d="M-100,260 C320,110 620,660 1120,310 C1320,160 1520,360 1620,260"
            stroke="url(#pravaahWaveContact)"
            strokeWidth="2"
            opacity="0.6"
          />
          <path
            d="M-100,320 C340,170 640,720 1140,370 C1340,220 1540,420 1640,320"
            stroke="url(#pravaahWaveContact)"
            strokeWidth="1.5"
            opacity="0.3"
          />
        </svg>
      </div>

      <motion.div
        animate={{ y: [-8, 8, -8], x: [-4, 4, -4], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-28 right-[18%] w-3 h-3 rounded-sm bg-purple-500 shadow-[0_0_12px_#a855f7] hidden md:block"
      />
      <motion.div
        animate={{ y: [6, -6, 6], x: [3, -3, 3], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="pointer-events-none absolute top-36 right-[14%] w-2 h-2 rounded-sm bg-blue-400 shadow-[0_0_8px_#38bdf8] hidden md:block"
      />
      <motion.div
        animate={{ y: [-5, 5, -5], opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute top-48 right-[12%] w-2.5 h-2.5 rounded-sm bg-cyan-400 shadow-[0_0_10px_#22d3ee] hidden md:block"
      />
      <motion.div
        animate={{ y: [7, -7, 7], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-36 left-[8%] w-3 h-3 rounded-sm bg-cyan-400/40 border border-cyan-300 hidden md:block"
      />
      <motion.div
        animate={{ y: [-6, 6, -6], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="pointer-events-none absolute bottom-52 left-[12%] w-2 h-2 rounded-sm bg-purple-400 shadow-[0_0_8px_#c084fc] hidden md:block"
      />

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal variant="lift">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-cyan-300 shadow-sm mb-4">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                CONSULTATION PROTOCOL
              </div>

              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight leading-[1.15]">
                Accelerate from concept to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                  engineered scale.
                </span>
              </h2>

              {/* Centered Decorative Line */}
              <div className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-500" />  

              <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
                Every technical engagement begins with direct partner-level strategy. We discard bloated discovery cycles and validate feasibility immediately.
              </p>
            </ScrollReveal>

            <div className="space-y-3.5 pt-2">
              {consultationSteps.map((item, idx) => (
                <ScrollReveal key={idx} variant="lift" delay={idx * 0.08}>
                  <div className="group flex gap-4 p-3.5 rounded-xl border border-slate-700/60 bg-[#080d20]/80 hover:border-cyan-400/40 hover:bg-[#0d142d] transition-all duration-300">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-400/40 text-cyan-300 font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-slate-200 group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal variant="lift" delay={0.3}>
              <div className="rounded-2xl border border-slate-700/60 bg-[#0d142d]/85 p-5 backdrop-blur-xl shadow-[0_0_40px_rgba(6,182,212,0.06)]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-cyan-400/10 text-cyan-300 border border-cyan-400/30">
                    <Headphones className="w-4 h-4" />
                  </div>
                  <h4 className="font-display font-bold text-sm text-white">Direct Advisory Support</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Time-sensitive systems or live production incidents? Reach our senior engineering desk directly at <span className="font-bold text-cyan-300 font-mono">+91 8449274276</span>.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7">
            <ScrollReveal variant="blur" delay={0.1}>
              <div className="rounded-2xl border border-slate-700/80 bg-[#0d142d]/85 p-6 shadow-[0_0_40px_rgba(6,182,212,0.06)] backdrop-blur-xl sm:p-8">

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-14 text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white">Inquiry Successfully Dispatched</h3>
                    <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                      Your project specs have been sent directly to our solutions desk. A system architect will reach out within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 px-6 py-2.5 rounded-full border border-slate-700 bg-slate-800 text-xs font-mono font-bold tracking-wider text-slate-300 hover:text-white transition cursor-pointer"
                    >
                      SUBMIT ANOTHER INQUIRY
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-700/60 pb-4 mb-5">
                      <div>
                        <h3 className="font-display text-xl font-bold text-white">Send Us a Message</h3>
                        <p className="text-xs text-slate-400 mt-0.5">Let's turn your idea into a powerful digital solution</p>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-cyan-300 bg-cyan-950/60 px-2.5 py-1 rounded-full border border-cyan-500/30">
                        NDA // CONFIDENTIAL
                      </span>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <input
                        required
                        aria-label="Full Name"
                        type="text"
                        placeholder="Full Name *"
                        className="w-full rounded-xl border border-slate-700/60 bg-[#080d20]/80 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 transition-all"
                      />
                      <input
                        required
                        aria-label="Email Address"
                        type="email"
                        placeholder="Corporate Email Address *"
                        className="w-full rounded-xl border border-slate-700/60 bg-[#080d20]/80 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <input
                        aria-label="Phone or WhatsApp"
                        type="tel"
                        placeholder="Phone / WhatsApp"
                        className="w-full rounded-xl border border-slate-700/60 bg-[#080d20]/80 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 transition-all"
                      />
                      <input
                        aria-label="Company or Business"
                        type="text"
                        placeholder="Company / Organization"
                        className="w-full rounded-xl border border-slate-700/60 bg-[#080d20]/80 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400" htmlFor="projectType">
                        Project Type
                      </label>
                      <div ref={projectTypeRef} className="relative">
                        <button
                          id="projectType"
                          type="button"
                          aria-haspopup="listbox"
                          aria-expanded={isProjectTypeOpen}
                          onClick={() => setIsProjectTypeOpen((isOpen) => !isOpen)}
                          className={`flex w-full items-center justify-between rounded-xl border bg-[#080d20]/80 px-4 py-3 text-left text-sm outline-none transition-all focus:ring-1 focus:ring-cyan-400/40 cursor-pointer ${
                            isProjectTypeOpen
                              ? 'border-cyan-400 shadow-[0_0_18px_rgba(6,182,212,0.15)]'
                              : 'border-slate-700/60 hover:border-slate-600'
                          }`}
                        >
                          <span className={selectedProjectType ? 'text-white' : 'text-slate-500'}>
                            {selectedProjectType || 'Select Project Type'}
                          </span>
                          <ChevronDown
                            aria-hidden="true"
                            className={`h-4 w-4 shrink-0 text-cyan-300 transition-transform duration-200 ${
                              isProjectTypeOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {isProjectTypeOpen && (
                          <ul
                            role="listbox"
                            aria-labelledby="projectType"
                            className="absolute left-0 right-0 z-30 mt-2 overflow-hidden rounded-xl border border-slate-700 bg-[#0a1128] p-1.5 shadow-2xl backdrop-blur-xl"
                          >
                            {projectTypes.map((projectType) => (
                              <li key={projectType}>
                                <button
                                  type="button"
                                  role="option"
                                  aria-selected={selectedProjectType === projectType}
                                  onClick={() => {
                                    setSelectedProjectType(projectType);
                                    setIsProjectTypeOpen(false);
                                  }}
                                  className={`flex w-full items-center justify-between rounded-lg px-3.5 py-2.5 text-left text-sm transition-colors cursor-pointer ${
                                    selectedProjectType === projectType
                                      ? 'bg-cyan-500/15 text-cyan-300 font-semibold'
                                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                                  }`}
                                >
                                  {projectType}
                                  {selectedProjectType === projectType && (
                                    <Check aria-hidden="true" className="h-4 w-4 text-cyan-300" />
                                  )}
                                </button>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400" htmlFor="projectMessage">
                        Tell us about your project *
                      </label>
                      <textarea
                        id="projectMessage"
                        required
                        rows="4"
                        placeholder="Tell us about your goals, expected features, timeline or requirements..."
                        className="w-full resize-none rounded-xl border border-slate-700/60 bg-[#080d20]/80 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 transition-all"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.015 }}
                      whileTap={{ scale: 0.985 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 py-3.5 px-6 text-sm font-bold text-white transition hover:brightness-110 shadow-lg shadow-cyan-500/20 leading-normal cursor-pointer disabled:opacity-50"
                    >
                      <span className="flex items-center self-center">
                        {isSubmitting ? 'Transmitting Specs...' : 'Send Message'}
                      </span>
                      <ArrowRight className="h-4 w-4 shrink-0 self-center transition-transform group-hover:translate-x-1" />
                    </motion.button>
                  </form>
                )}

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InquiryForm;
