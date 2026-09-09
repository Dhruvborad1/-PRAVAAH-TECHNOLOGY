import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  PenTool, 
  Cpu, 
  Layers, 
  Workflow, 
  Sparkles, 
  CheckCircle2, 
  Zap,
  ChevronDown
} from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal';
import AboutExpertiseImg from '../../assets/about/about-expertise.webp';

const capabilities = [
  { 
    id: 'web', 
    title: 'Web Engineering', 
    badge: 'Scalable Platforms',
    icon: Code,
    headline: 'High-Performance Web Architecture Built for Scale',
    description: 'We build ultra-fast, search-optimized web applications with resilient modern frameworks, robust security standards, and seamless microservices.',
    points: ['Next-Gen SSR / SPA Architectures', 'Edge Runtime & Serverless Deployment', 'API-Driven Microservices Logic'],
    techStack: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS'],
    stats: { value: '99.9%', label: 'Architecture Reliability' }
  },
  { 
    id: 'mobile', 
    title: 'Mobile Apps', 
    badge: 'Native & Cross-Platform',
    icon: Smartphone,
    headline: 'Fluid Native & Hybrid iOS and Android Solutions',
    description: 'Delivering pixel-perfect, responsive mobile experiences that operate intuitively with hardware-accelerated fluid motion.',
    points: ['Cross-Platform Code Reusability', 'Offline-First Synchronization', 'High-FPS Hardware Acceleration'],
    techStack: ['Flutter', 'React Native', 'Swift', 'Kotlin'],
    stats: { value: '60 FPS', label: 'Fluid Motion Performance' }
  },
  { 
    id: 'uiux', 
    title: 'UI/UX Design', 
    badge: 'Design Systems',
    icon: PenTool,
    headline: 'Human-Centered Interfaces with Scientific Precision',
    description: 'Turning complicated business logic into elegant, conversion-focused user journeys through robust design tokens and iterative user testing.',
    points: ['Enterprise Design Token Systems', 'Interactive Micro-Animations', 'User Journey & Conversion Testing'],
    techStack: ['Figma', 'Prototyping', 'Design Tokens', 'User Research'],
    stats: { value: '3.5x', label: 'User Retention Boost' }
  },
  { 
    id: 'ai', 
    title: 'AI Solutions', 
    badge: 'Smart Automation',
    icon: Cpu,
    headline: 'Intelligent Machine Learning & Workflow Intelligence',
    description: 'Infusing modern enterprise workflows with autonomous AI agents, semantic neural models, and real-time automated data processing.',
    points: ['Enterprise LLM Fine-Tuning', 'Predictive Decision Workflows', 'Cognitive Neural Automation'],
    techStack: ['PyTorch', 'OpenAI APIs', 'Python', 'LangChain', 'FastAPI'],
    stats: { value: '70%', label: 'Workflow Efficiency Gain' }
  },
  { 
    id: 'custom', 
    title: 'Custom Software', 
    badge: 'Enterprise Logic',
    icon: Layers,
    headline: 'Bespoke Engineering for Unique Business Frontiers',
    description: 'Custom-tailored software systems designed from ground zero to replace legacy bloat and unlock hyper-scale operational clarity.',
    points: ['Modular Domain-Driven Design', 'Zero-Downtime Migration', 'High-Concurrence Data Pipelines'],
    techStack: ['Docker', 'Kubernetes', 'PostgreSQL', 'AWS / Cloud'],
    stats: { value: '100%', label: 'Custom Code Ownership' }
  },
  { 
    id: 'digital', 
    title: 'Transformation', 
    badge: 'Modernization',
    icon: Workflow,
    headline: 'Architecting Legacy Systems for the Next Generation',
    description: 'Auditing legacy bottlenecks and transitioning your digital infrastructure into clean, secure, and modern agile ecosystems.',
    points: ['Cloud-Native Modernization', 'Automated CI/CD Workflows', 'Zero-Trust Security Frameworks'],
    techStack: ['DevOps', 'Microservices', 'GraphQL', 'Cloud Architecture'],
    stats: { value: '4x', label: 'Deployment Velocity' }
  },
];

const   AboutExpertiseSection = () => {
  const [activeTab, setActiveTab] = useState(capabilities[0].id);
  const activeData = capabilities.find(c => c.id === activeTab) || capabilities[0];

  return (
    <section 
      className="relative py-16 md:py-28 overflow-hidden bg-slate-950 text-white border-b border-white/10"
      aria-label="Capabilities & Expertise"
    >
      {/* ========================================================= */}
      {/* 1. FIXED BACKGROUND IMAGE (ક્યારેય ઉપર-નીચે નહીં હલે)    */}
      {/* ========================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
          style={{ 
            backgroundImage: `url(${AboutExpertiseImg})`,
          }}
        />

        {/* Minimal soft dark tint */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

        {/* Soft edge blend */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* ========================================================= */}
      {/* 2. FOREGROUND CONTENT                                     */}
      {/* ========================================================= */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* HEADER */}
        <ScrollReveal variant="lift" className="mb-8 md:mb-14 text-center max-w-3xl mx-auto">
          <div 
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-1 text-[11px] font-bold uppercase tracking-widest text-cyan-200 shadow-sm mb-3 border border-white/20"
            style={{
              background: 'rgba(0, 0, 0, 0.40)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
            }}
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Domain Masteries
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight drop-shadow-md">
            Where Technology Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#3B82F6] to-[#C084FC]">Possibility</span>
          </h2>

          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-500 shadow-sm" />

          <p className="mt-3.5 text-slate-100 text-sm sm:text-base leading-relaxed font-normal drop-shadow">
            Explore the specialized capabilities we orchestrate to build high-momentum digital experiences.
          </p>
        </ScrollReveal>

        {/* ========================================================= */}
        {/* A. MOBILE VIEW: DIRECT ACCORDION (NO UP-DOWN SCROLLING!)  */}
        {/* ========================================================= */}
        <div className="lg:hidden space-y-3">
          {capabilities.map((item) => {
            const Icon = item.icon;
            const isOpen = activeTab === item.id;

            return (
              <div 
                key={item.id}
                className="rounded-2xl border transition-all duration-300 overflow-hidden"
                style={{
                  background: isOpen ? 'rgba(0, 0, 0, 0.55)' : 'rgba(0, 0, 0, 0.35)',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  borderColor: isOpen ? 'rgba(0, 210, 255, 0.4)' : 'rgba(255, 255, 255, 0.15)',
                  boxShadow: isOpen ? '0 10px 30px rgba(0, 0, 0, 0.5)' : 'none',
                }}
              >
                {/* Accordion Header Button */}
                <button
                  type="button"
                  onClick={() => setActiveTab(isOpen ? '' : item.id)}
                  className="w-full py-4 px-4 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl border ${
                      isOpen 
                        ? 'bg-gradient-to-tr from-[#00D2FF] to-[#2F54EB] text-white border-transparent' 
                        : 'bg-white/10 text-cyan-300 border-white/10'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 block">
                        {item.badge}
                      </span>
                      <span className="text-base font-bold text-white">
                        {item.title}
                      </span>
                    </div>
                  </div>

                  <ChevronDown className={`w-4 h-4 text-slate-300 transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-400' : ''}`} />
                </button>

                {/* Inline Expandable Content (સીધું નીચે જ ખુલી જશે) */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="px-4 pb-5 pt-2 border-t border-white/10"
                    >
                      <h4 className="text-lg font-bold text-white leading-snug">
                        {item.headline}
                      </h4>

                      <p className="mt-2 text-xs sm:text-sm text-slate-200 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="mt-4 space-y-2">
                        {item.points.map((pt, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span className="text-xs text-slate-100 font-medium">{pt}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack */}
                      <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
                        {item.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-0.5 rounded-md text-[11px] font-medium text-cyan-200 border border-white/10 bg-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Mini Stat Badge */}
                      <div className="mt-4 p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/20 flex items-center justify-between">
                        <div>
                          <p className="text-xs font-semibold text-slate-300">{item.stats.label}</p>
                          <p className="text-xs text-slate-400 font-mono">Verified Standard</p>
                        </div>
                        <p className="text-xl font-black font-mono text-cyan-400">
                          {item.stats.value}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* B. DESKTOP VIEW: HORIZONTAL TABS + EDITORIAL VIEW         */}
        {/* ========================================================= */}
        <div className="hidden lg:block">
          
          {/* HORIZONTAL GLASS CAPSULE TABS */}
          <div className="flex items-center justify-center gap-2.5 overflow-x-auto pb-4 pt-1 mb-10 no-scrollbar">
            {capabilities.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative shrink-0 flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                    isActive
                      ? 'text-white shadow-[0_4px_20px_rgba(0,210,255,0.35)] border-white/40'
                      : 'text-slate-100 hover:text-white hover:border-white/40'
                  }`}
                  style={!isActive ? {
                    background: 'rgba(0, 0, 0, 0.35)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    borderColor: 'rgba(255, 255, 255, 0.25)',
                    boxShadow: '0 4px 15px 0 rgba(0, 0, 0, 0.25)',
                  } : {}}
                >
                  {isActive && (
                    <motion.div
                      layoutId="glassActiveTabSubtle"
                      className="absolute inset-0 bg-gradient-to-r from-[#00D2FF] via-[#2F54EB] to-[#702FF4] rounded-full -z-10 shadow-inner"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-cyan-300'}`} />
                  <span>{item.title}</span>
                </button>
              );
            })}
          </div>

          {/* OPEN EDITORIAL LAYOUT (Fixed min-height to prevent jitter) */}
          <div className="relative w-full min-h-[380px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="grid lg:grid-cols-12 gap-12 items-center"
              >
                {/* Left Details (8 cols) */}
                <div className="lg:col-span-8 flex flex-col justify-between">
                  <div>
                    {/* Category Pill */}
                    <div 
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-200 mb-4 border"
                      style={{
                        background: 'rgba(6, 182, 212, 0.2)',
                        borderColor: 'rgba(6, 182, 212, 0.4)',
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      {activeData.badge}
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl lg:text-4xl font-display font-bold text-white leading-tight drop-shadow-md">
                      {activeData.headline}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 text-slate-100 text-base leading-relaxed font-normal drop-shadow-sm">
                      {activeData.description}
                    </p>

                    {/* Points */}
                    <div className="mt-6 space-y-3">
                      {activeData.points.map((point, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-cyan-300 shrink-0 drop-shadow" />
                          <span className="text-sm font-semibold text-white drop-shadow-sm">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mt-8 pt-6 border-t border-white/20 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-bold text-slate-200 mr-2 uppercase tracking-wider">
                      Core Stack:
                    </span>
                    {activeData.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg text-xs font-semibold text-white border"
                        style={{
                          background: 'rgba(255, 255, 255, 0.12)',
                          backdropFilter: 'blur(8px)',
                          WebkitBackdropFilter: 'blur(8px)',
                          borderColor: 'rgba(255, 255, 255, 0.25)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Stat Widget (4 cols) */}
                <div className="lg:col-span-4 flex flex-col items-center justify-center">
                  <div 
                    className="w-full rounded-2xl p-8 text-center border transition-all duration-300 relative overflow-hidden"
                    style={{
                      background: 'rgba(0, 0, 0, 0.45)',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      borderColor: 'rgba(255, 255, 255, 0.25)',
                      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.2)',
                    }}
                  >
                    <div className="flex justify-center mb-2 text-cyan-400">
                      <Zap className="w-6 h-6" />
                    </div>

                    <p className="text-5xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#3B82F6] to-[#C084FC] drop-shadow">
                      {activeData.stats.value}
                    </p>
                    
                    <p className="text-sm font-bold text-white mt-2 drop-shadow">
                      {activeData.stats.label}
                    </p>

                    <div className="mx-auto my-3 h-[2px] w-12 rounded-full bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-500" />

                    <p className="text-xs text-slate-200 font-medium">
                      Verified Pravaah Engineering Benchmark
                    </p>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutExpertiseSection;