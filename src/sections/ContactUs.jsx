import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, Check, ChevronDown, Sparkles } from 'lucide-react';

const ContactUs = () => {
  const projectTypes = ['Web Development', 'Mobile App Development', 'AI & Automation', 'Custom Software'];
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#070c1e] px-4 py-20 font-sans text-white selection:bg-cyan-400 selection:text-[#070c1e] sm:px-6 md:py-28 lg:px-8">

      {/* ================= PRAVAAH BRAND THEME ANIMATED BACKGROUND ================= */}

      {/* 1. Ambient Lighting & Depth Meshes */}
      <div className="pointer-events-none absolute top-[-10%] left-[-10%] h-[550px] w-[550px] rounded-full bg-cyan-500/10 blur-[150px]" />
      <div className="pointer-events-none absolute top-[30%] right-[-10%] h-[600px] w-[600px] rounded-full bg-purple-600/15 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-[-10%] left-[20%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />

      {/* 2. Pravaah Curved Flow Wave (Behind the content) */}
      <div className="pointer-events-none absolute inset-0 opacity-25 overflow-hidden">
        <svg viewBox="0 0 1440 800" fill="none" className="w-full h-full preserve-3d" preserveAspectRatio="none">
          <defs>
            <linearGradient id="pravaahWave" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d2ff" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <path
            d="M-100,200 C300,50 600,600 1100,250 C1300,100 1500,300 1600,200"
            stroke="url(#pravaahWave)"
            strokeWidth="3"
            strokeDasharray="8 8"
          />
          <path
            d="M-100,260 C320,110 620,660 1120,310 C1320,160 1520,360 1620,260"
            stroke="url(#pravaahWave)"
            strokeWidth="2"
            opacity="0.6"
          />
          <path
            d="M-100,320 C340,170 640,720 1140,370 C1340,220 1540,420 1640,320"
            stroke="url(#pravaahWave)"
            strokeWidth="1.5"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* 3. Pravaah Dispersed Logo Pixels (Floating Animation) */}
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

      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <div className="mb-14 text-center md:mb-16">

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-4"
          >
            <span className="section-label-text">Contact Us</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold tracking-tight leading-tight"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Let's Build Something Great Together
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base"
          >
            Have an idea, project or business challenge?<br />Let's turn it into a powerful digital solution.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16"
        >
          {/* Left Column */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="mb-3 text-3xl font-bold text-white">Let's Talk</h3>
            <p className="max-w-sm text-sm leading-relaxed text-slate-400 sm:text-base">
              Whether you need a new website, custom software, AI solution, automation or full-scale digital innovation.
            </p>

            <div className="mt-8 space-y-4">
              <a href="mailto:hello@pravaahtechnologies.com" className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-cyan-300 group">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-400/10 group-hover:scale-105 transition-transform">
                  <Mail className="h-4 w-4 text-cyan-300" />
                </span>
                hello@pravaahtechnologies.com
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-cyan-300 group">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-400/10 group-hover:scale-105 transition-transform">
                  <Phone className="h-4 w-4 text-cyan-300" />
                </span>
                +91 98765 43210
              </a>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-purple-400/40 bg-purple-400/10">
                  <MapPin className="h-4 w-4 text-purple-300" />
                </span>
                Surat, Gujarat, India
              </div>
            </div>

            <p className="mt-9 text-xs uppercase tracking-widest text-slate-500 font-semibold">
              START A CONVERSATION
            </p>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-700/80 bg-[#0d142d]/85 p-6 shadow-[0_0_40px_rgba(6,182,212,0.06)] backdrop-blur-xl sm:p-8">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    aria-label="Full Name"
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-xl border border-slate-700/60 bg-[#080d20]/80 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 transition-all"
                  />
                  <input
                    aria-label="Email Address"
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-xl border border-slate-700/60 bg-[#080d20]/80 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 transition-all"
                  />
                </div>

                <input
                  aria-label="Company or Business"
                  type="text"
                  placeholder="Company / Business"
                  className="w-full rounded-xl border border-slate-700/60 bg-[#080d20]/80 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 transition-all"
                />

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
                      className={`flex w-full items-center justify-between rounded-xl border bg-[#080d20]/80 px-4 py-3 text-left text-sm outline-none transition-all focus:ring-1 focus:ring-cyan-400/40 ${isProjectTypeOpen ? 'border-cyan-400 shadow-[0_0_18px_rgba(6,182,212,0.15)]' : 'border-slate-700/60 hover:border-slate-600'}`}
                    >
                      <span className={selectedProjectType ? 'text-white' : 'text-slate-500'}>
                        {selectedProjectType || 'Select Project Type'}
                      </span>
                      <ChevronDown aria-hidden="true" className={`h-4 w-4 shrink-0 text-cyan-300 transition-transform duration-200 ${isProjectTypeOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isProjectTypeOpen && (
                      <ul role="listbox" aria-labelledby="projectType" className="absolute left-0 right-0 z-30 mt-2 overflow-hidden rounded-xl border border-slate-700 bg-[#0a1128] p-1.5 shadow-2xl backdrop-blur-xl">
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
                              className={`flex w-full items-center justify-between rounded-lg px-3.5 py-2.5 text-left text-sm transition-colors ${selectedProjectType === projectType ? 'bg-cyan-500/15 text-cyan-300 font-semibold' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}
                            >
                              {projectType}
                              {selectedProjectType === projectType && <Check aria-hidden="true" className="h-4 w-4 text-cyan-300" />}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400" htmlFor="projectMessage">
                    Tell us about your project
                  </label>
                  <textarea
                    id="projectMessage"
                    rows="4"
                    placeholder="Tell us about your goals, features or requirements..."
                    className="w-full resize-none rounded-xl border border-slate-700/60 bg-[#080d20]/80 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 transition-all"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.985 }}
                  type="submit"
                  className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 py-3.5 px-6 text-sm font-bold text-white transition hover:brightness-110 shadow-lg shadow-cyan-500/20 leading-normal"
                >
                  <span className="flex items-center self-center">Send Message</span>
                  <ArrowRight className="h-4 w-4 shrink-0 self-center transition-transform group-hover:translate-x-1" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;