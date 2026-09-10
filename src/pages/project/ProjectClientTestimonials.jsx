import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal';

const testimonialsData = [
  {
    id: '01',
    name: 'Pushpak Goti',
    role: 'CEO & Managing Director',
    company: 'Powerex Petrochem',
    scope: 'B2B Procurement Engine',
    accent: '#00D2FF',
    rating: 5,
    outcome: '+310% Online Quote Flow',
    headline: 'Pravaah turned our complex B2B petrochemical trading into a seamless real-time digital operation.',
    fullQuote:
      'Pravaah Technology helped us move our bulk sales online with a fast, easy-to-use platform. Their sprint agility, security architecture, and automated quote dispatch handled everything from design to production without a single hiccup.',
    metrics: [
      { label: 'Latency', value: '<140ms' },
      { label: 'Uptime', value: '99.99%' },
      { label: 'Turnaround', value: '4 Weeks' }
    ]
  },
  {
    id: '02',
    name: 'Gausiya Fatima',
    role: 'Founder & Product Lead',
    company: 'ShippingDrop',
    scope: 'Logistics Telematics Platform',
    accent: '#2F54EB',
    rating: 5,
    outcome: '80% Lower Dispatch Overhead',
    headline: 'Working with Pravaah felt like integrating a veteran internal engineering strike squad.',
    fullQuote:
      'From the initial discovery call to launch, Pravaah handled our website and order ecosystem professionally. The new architecture is simple for our dispatch crew to run and effortless for our customers to track.',
    metrics: [
      { label: 'Speed Score', value: '99/100' },
      { label: 'Coverage', value: 'Pan-India' },
      { label: 'Failures', value: '0.00%' }
    ]
  },
  {
    id: '03',
    name: 'Ankit Mehta',
    role: 'VP of Technology',
    company: 'Apex Ledger',
    scope: 'FinTech Institutional Dashboard',
    accent: '#9B51E0',
    rating: 5,
    outcome: 'Zero-Audit Flaw Clearance',
    headline: 'Their technical fluency in microservices and high-load Next.js pipelines is exceptional.',
    fullQuote:
      'Pravaah built our cryptographic dashboard and high-throughput WebSocket streams with zero data drift. The engineering standards they followed made passing our enterprise security audit effortless.',
    metrics: [
      { label: 'Throughput', value: '10k req/s' },
      { label: 'Compliance', value: 'Level-1' },
      { label: 'Drift Rate', value: 'Zero' }
    ]
  }
];

const ProjectClientTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonialsData[activeIndex];

  return (
    <section 
      className="relative py-20 lg:py-28 bg-white border-y border-slate-200/80 overflow-hidden selection:bg-cyan-100 selection:text-slate-900"
      aria-label="Client Quotes and Verified Performance Audits"
    >
      {/* Background Soft Architectural Lines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Atmospheric Ambient Glow */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full blur-[140px] pointer-events-none opacity-20 transition-colors duration-700"
        style={{ backgroundColor: active.accent }}
      />

      <div className="container relative z-10 mx-auto px-5 md:px-8 max-w-5xl">
        
        {/* Section Header: Matching Pravaah Design System */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <ScrollReveal variant="lift">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/80 bg-white/90 backdrop-blur-md px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-blue-700 shadow-xs mb-4">
              <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
              CLIENT FEEDBACK
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-950 leading-[1.14] tracking-tight whitespace-normal lg:whitespace-nowrap">
              What Clients Say <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#2F54EB] to-[#9B51E0]">About Our Work.</span>
            </h2>

            <div className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-500 mx-auto" />

            <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
              Direct reviews from founders and enterprise leaders who partnered with Pravaah to engineer their core web and cloud solutions.
            </p>
          </ScrollReveal>
        </div>

        {/* Top Interactive Switcher Buttons (Moved Up) */}
        <div className="mb-12 pb-8 border-b border-slate-200/80">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonialsData.map((item, idx) => {
              const isSelected = activeIndex === idx;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`text-left p-4 sm:p-5 rounded-xl transition-all duration-300 relative cursor-pointer group ${
                    isSelected ? 'bg-slate-100/80 shadow-xs' : 'hover:bg-slate-50'
                  }`}
                >
                  {/* Active Top Progress Line */}
                  <div 
                    className={`absolute top-0 left-0 right-0 h-[2.5px] rounded-t-xl transition-all duration-300 ${
                      isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'
                    }`}
                    style={{ backgroundColor: item.accent }}
                  />

                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      // {item.id}
                    </span>
                    <span 
                      className={`text-xs font-mono font-bold uppercase transition-colors ${
                        isSelected ? 'text-blue-600' : 'text-slate-500'
                      }`}
                    >
                      {item.company}
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-slate-950 text-base sm:text-lg leading-snug">
                    {item.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    {item.role}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Large Editorial Quote Stage (Displays Below The Buttons) */}
        <div className="min-h-[360px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              {/* Tag + Rating Row with Larger Typography */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span 
                    className="w-2.5 h-2.5 rounded-full animate-pulse" 
                    style={{ backgroundColor: active.accent }} 
                  />
                  <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-slate-600">
                    {active.scope}
                  </span>
                  <span className="text-slate-300">&bull;</span>
                  <span className="text-xs sm:text-sm font-mono font-semibold text-emerald-600">
                    {active.outcome}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  {[...Array(active.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="text-xs sm:text-sm font-mono font-bold text-slate-700 ml-1">5.0</span>
                </div>
              </div>

              {/* Dominant Headline */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-950 leading-[1.25] tracking-tight">
                &ldquo;{active.headline}&rdquo;
              </h3>

              {/* Paragraph Body */}
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-3xl">
                {active.fullQuote}
              </p>

              {/* Telemetry Metrics Strip with Readable Typography */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200/70 max-w-xl">
                {active.metrics.map((m, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block font-semibold">
                      {m.label}
                    </span>
                    <span className="text-lg sm:text-2xl font-mono font-bold text-slate-900 block">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default ProjectClientTestimonials;