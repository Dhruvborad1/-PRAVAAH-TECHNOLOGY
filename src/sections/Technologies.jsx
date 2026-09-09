import React, { useState } from 'react';
import { ArrowRight, Layers } from 'lucide-react';
import LogoIcon from '../assets/logo/Logo PNG Icon.png';
import { motion, useMotionValue, useTransform } from 'framer-motion';

// કેટેગરી લિસ્ટ
const categories = [
  { id: 'all', label: 'All Technologies' },
  { id: 'frontend', label: 'Frontend & UI' },
  { id: 'backend', label: 'Backend & APIs' },
  { id: 'database', label: 'Databases' },
  { id: 'cloud', label: 'Cloud & DevOps' },
  { id: 'ai', label: 'AI & Tools' },
];

const technologiesList = [
  // LEFT WING (x < 600)
  { id: 'react', name: 'React.js', category: 'frontend', x: 280, y: 140, delay: '0s', icon: 'react' },
  { id: 'next', name: 'Next.js', category: 'frontend', x: 170, y: 240, delay: '1.2s', icon: 'next' },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'frontend', x: 140, y: 350, delay: '0.5s', icon: 'tailwind' },
  { id: 'js', name: 'JavaScript', category: 'frontend', x: 400, y: 210, delay: '1.8s', icon: 'js' },
  { id: 'python', name: 'Python', category: 'backend', x: 280, y: 410, delay: '0.6s', icon: 'python' },
  { id: 'ts', name: 'TypeScript', category: 'frontend', x: 380, y: 490, delay: '3s', icon: 'ts' },

  // RIGHT WING (x > 600)
  { id: 'openai', name: 'OpenAI / LLMs', category: 'ai', x: 780, y: 130, delay: '2.1s', icon: 'openai' },
  { id: 'aws', name: 'AWS Cloud', category: 'cloud', x: 890, y: 200, delay: '1.5s', icon: 'aws' },
  { id: 'docker', name: 'Docker', category: 'cloud', x: 1010, y: 290, delay: '2.7s', icon: 'docker' },
  { id: 'github', name: 'GitHub CI/CD', category: 'cloud', x: 840, y: 310, delay: '0.9s', icon: 'github' },
  { id: 'mongo', name: 'MongoDB', category: 'database', x: 760, y: 410, delay: '0.3s', icon: 'mongo' },
  { id: 'php', name: 'PHP', category: 'backend', x: 630, y: 490, delay: '3.3s', icon: 'php' },
  { id: 'node', name: 'Node.js', category: 'backend', x: 820, y: 490, delay: '2.4s', icon: 'node' },
];

// કેટેગરી કલર મેપિંગ
const categoryBadgeColors = {
  frontend: { dot: 'bg-cyan-500', text: 'text-cyan-600', tag: 'Frontend' },
  backend: { dot: 'bg-emerald-500', text: 'text-emerald-600', tag: 'Backend' },
  database: { dot: 'bg-amber-500', text: 'text-amber-600', tag: 'Database' },
  cloud: { dot: 'bg-blue-600', text: 'text-blue-600', tag: 'Cloud' },
  ai: { dot: 'bg-purple-600', text: 'text-purple-600', tag: 'AI & Tools' },
};

const renderTechIcon = (type) => {
  const iconClass = "w-4 h-4 sm:w-[18px] sm:h-[18px] text-[#0f172a]";
  switch (type) {
    case 'react':
      return (
        <svg className={`${iconClass} animate-[spin_8s_linear_infinite]`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );
    case 'next':
      return (
        <div className="w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-full bg-[#0f172a] text-white flex items-center justify-center font-bold text-[10px]">
          N
        </div>
      );
    case 'node':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.874 1.996L3.432 6.843A1.97 1.97 0 002.43 8.563v8.948a1.97 1.97 0 001.002 1.72l8.442 4.846a1.977 1.977 0 001.994 0l8.442-4.846a1.972 1.972 0 001.002-1.72V8.564a1.97 1.97 0 00-1.002-1.72L13.868 2a1.988 1.988 0 00-1.994-.004zm-4.7 15.659L3.5 15.539V8.563l3.674 2.115v4.846a1.187 1.187 0 001.782 1.026l2.915-1.68v4.23l-4.697 2.55zM20.5 8.563v6.976l-3.674 2.116V12.81a1.187 1.187 0 00-1.782-1.026l-2.915 1.68V9.234l4.697-2.55zm-1.838-3.176l-6.788 3.906-6.788-3.906L12 1.996zm-9.7 11.75l2.912-1.677 2.912 1.677v3.355L12 22.17l-3.038-1.677z" />
        </svg>
      );
    case 'python':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2c-5.52 0-5.5 2.5-5.5 2.5H12V6H4.5s-2.5-.03-2.5 5.5 2.5 5.5 2.5 5.5h1.5v-2.5c0-2.5 2-2.5 2-2.5h5s2.5.03 2.5-2.5V4.5S17.52 2 12 2zm-2 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm2 18c5.52 0 5.5-2.5 5.5-2.5H12V18h7.5s2.5.03 2.5-5.5c0-5.5-2.5-5.5-2.5-5.5h-1.5v2.5c0 2.5-2 2.5-2 2.5h-5s-2.5-.03-2.5 2.5v5s.03 2.5 3.5 2.5zm2-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
        </svg>
      );
    case 'js':
      return <span className="px-1 py-[1px] bg-[#0f172a] text-white font-bold text-[9px] rounded-[3px]">JS</span>;
    case 'ts':
      return <span className="px-1 py-[1px] bg-[#0f172a] text-white font-bold text-[9px] rounded-[3px]">TS</span>;
    case 'mongo':
      return (
        <svg className="w-3.5 h-4 text-[#0f172a]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.66 0C8.36 0 6.64 3.73 6.64 6.77c0 4.1 3.57 6.42 4.96 11.58.11.41.22 1.34.22 1.34s.13-1.07.24-1.53c1.23-5.22 4.94-7.25 4.94-11.39C17.02 3.73 15.3 0 11.66 0z" />
          <path d="M11.83 24s.73-1.55 1.09-3.79c-1.35.43-3.15-.02-3.15-.02s.54 1.76.99 3.81z" />
        </svg>
      );
    case 'aws':
      return <span className="text-[11px] font-black tracking-tighter text-[#0f172a]">aws</span>;
    case 'docker':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.9 8.2h2.2v2H13.9v-2zm-2.8 0h2.2v2h-2.2v-2zm-2.8 0h2.2v2H8.3v-2zm8.4 2.6h2.2v2h-2.2v-2zm-2.8 0h2.2v2h-2.2v-2zm-2.8 0h2.2v2h-2.2v-2zm-2.8 0h2.2v2H5.5v-2zm14.8.9c-.3-.2-1.3-.7-2.7-.3-.1-.6-.5-1.2-1.1-1.6l-.6-.4-.4.6c-.5.8-.4 1.8.2 2.5-1 .5-2.2.6-3.8.6H2.2c-.6 0-1.1.5-1.1 1.1 0 4.1 3.3 7.5 7.5 7.5 4.9 0 9-3.4 9.8-8.1 1.5-.1 2.3-.9 2.5-1.1l-.6-.8z"/>
        </svg>
      );
    case 'openai':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a4 4 0 0 1 3.8 2.7l.2.8v3.5l1.6-.9a4 4 0 0 1 5.4 1.4l.5.8a4 4 0 0 1-1.4 5.4l-3 1.8v3.6a4 4 0 0 1-2 3.5l-.8.4a4 4 0 0 1-5.4-1.4l-1.6-.9-3 1.7a4 4 0 0 1-5.4-1.4l-.5-.8a4 4 0 0 1 1.4-5.4l3-1.8V8.6a4 4 0 0 1 2-3.5l.8-.4A4 4 0 0 1 12 2z"/>
        </svg>
      );
    case 'github':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      );
    case 'php':
      return <span className="font-extrabold italic text-[10px] text-[#0f172a] border border-[#0f172a] rounded-full px-1.5 py-0.5 bg-slate-100">php</span>;
    case 'tailwind':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
        </svg>
      );
    default:
      return null;
  }
};

const Technologies = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <section className="relative w-full py-12 lg:py-20 bg-[#e6eaf0] text-slate-900 overflow-hidden font-sans select-none border-t border-white/60">
      
      {/* Keyframe Styles */}
      <style>{`
        @keyframes float-badge {
          0%, 100% { transform: translate(-50%, -50%) translateY(0); }
          50% { transform: translate(-50%, -50%) translateY(-6px); }
        }
        @keyframes line-flow {
          from { stroke-dashoffset: 60; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes subtle-pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.45; }
          50% { transform: translate(-50%, -50%) scale(1.18); opacity: 0.8; }
        }
      `}</style>

      {/* Grid Background Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.3]" 
        style={{
          backgroundImage: `radial-gradient(rgba(71, 85, 105, 0.3) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }} 
      />

      {/* Ambient Glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-sky-400/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[550px] h-[550px] bg-indigo-400/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
          <div className="section-label mb-3 inline-flex items-center gap-1.5">
            <span className="section-label-text">TECHNOLOGIES</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0f172a] mb-3 tracking-tight leading-tight">
            Powered by Modern  <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">Technology</span>
          </h2>
          <p className="text-[#475569] text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-medium">
            We architect and build reliable, high-performance solutions with proven and emerging modern tools.
          </p>
        </div>

        {/* ======================================================================= */}
        {/* DESKTOP VIEW: PROPORTIONAL GRID (SIDEBAR + SVG GRAPH) */}
        {/* ======================================================================= */}
        <div className="hidden md:grid md:grid-cols-12 gap-6 items-center w-full max-w-[1360px] mx-auto">
          
          {/* 1. LEFT SIDEBAR FILTERS (Col Span 3) */}
          <div className="md:col-span-3 flex flex-col gap-2 p-3.5 bg-white/80 backdrop-blur-xl rounded-2xl border border-white/90 shadow-[0_10px_35px_rgba(15,23,42,0.06)] z-30">
            <div className="px-3 py-1.5 text-[11px] font-mono font-bold tracking-wider text-slate-400 uppercase border-b border-slate-200/70 mb-1 flex items-center justify-between">
              <span>Filter Categories</span>
              <span className="text-[10px] text-slate-400">({technologiesList.length})</span>
            </div>

            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = cat.id === 'all' 
                ? technologiesList.length 
                : technologiesList.filter(t => t.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-2.5 rounded-xl text-left text-xs font-semibold transition-all duration-200 flex items-center justify-between gap-2 ${
                    isActive
                      ? 'bg-[#0f172a] text-white shadow-md scale-[1.02]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/90'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />}
                    <span>{cat.label}</span>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* 2. GRAPH DISPLAY AREA (Col Span 9) */}
          <div className="md:col-span-9 relative w-full aspect-[1200/600] rounded-3xl bg-white/30 border border-white/60 backdrop-blur-sm shadow-[inset_0_2px_10px_rgba(255,255,255,0.6)] overflow-visible">
            
            {/* SVG Connecting Lines */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none" 
              viewBox="0 0 1200 600" 
              preserveAspectRatio="none"
            >
              <g 
                fill="none" 
                stroke="#6366f1" 
                strokeWidth="1.5" 
                className="opacity-45" 
                style={{ strokeDasharray: '4 8', animation: 'line-flow 18s linear infinite' }}
              >
                <path d="M 600 300 C 480 200, 380 140, 280 140" />
                <path d="M 600 300 C 440 250, 270 240, 170 240" />
                <path d="M 600 300 C 400 330, 260 350, 140 350" />
                <path d="M 600 300 C 510 240, 460 210, 400 210" />
                <path d="M 600 300 C 490 380, 370 410, 280 410" />
                <path d="M 600 300 C 510 420, 440 490, 380 490" />
                
                <path d="M 600 300 C 690 190, 730 130, 780 130" />
                <path d="M 600 300 C 740 240, 810 200, 890 200" />
                <path d="M 600 300 C 770 300, 890 290, 1010 290" />
                <path d="M 600 300 C 730 310, 780 310, 840 310" />
                <path d="M 600 300 C 690 380, 720 410, 760 410" />
                <path d="M 600 300 C 620 420, 625 470, 630 490" />
                <path d="M 600 300 C 700 430, 760 480, 820 490" />
              </g>

              {/* Glowing Dots on Endpoints */}
              <g fill="#38bdf8">
                {technologiesList.map((tech) => {
                  const isMatch = activeCategory === 'all' || activeCategory === tech.category;
                  return (
                    <circle
                      key={`dot-${tech.id}`}
                      cx={tech.x}
                      cy={tech.y}
                      r={isMatch ? "4.5" : "2.5"}
                      className="transition-all duration-300"
                      fill={isMatch ? '#38bdf8' : '#94a3b8'}
                      opacity={isMatch ? 0.9 : 0.25}
                    />
                  );
                })}
              </g>
            </svg>

            {/* Center Logo Hub */}
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[24%] max-w-[260px] aspect-square flex items-center justify-center z-10 pointer-events-none">
              <div 
                className="absolute top-[50%] left-[50%] w-[90%] h-[90%] bg-blue-500/25 rounded-full blur-[40px]" 
                style={{ animation: 'subtle-pulse 4s ease-in-out infinite' }} 
              />
              <img 
                src={LogoIcon} 
                alt="Core Stack Hub" 
                className="w-[90%] h-[90%] object-contain drop-shadow-[0_16px_36px_rgba(59,130,246,0.35)] relative z-10"
              />
            </div>

            {/* Floating Tech Badges */}
            {technologiesList.map((tech) => {
              const isMatch = activeCategory === 'all' || activeCategory === tech.category;
              const catInfo = categoryBadgeColors[tech.category];

              return (
                <div
                  key={tech.id}
                  className={`absolute z-20 transition-all duration-500 ${
                    isMatch ? 'opacity-100 scale-100' : 'opacity-20 scale-90 grayscale pointer-events-none'
                  }`}
                  style={{
                    left: `${(tech.x / 1200) * 100}%`,
                    top: `${(tech.y / 600) * 100}%`,
                    transform: 'translate(-50%, -50%)',
                    animation: isMatch ? 'float-badge 4.5s ease-in-out infinite' : 'none',
                    animationDelay: tech.delay
                  }}
                >
                  <div className={`flex flex-col gap-0.5 px-3 py-1.5 lg:px-3.5 lg:py-2 bg-white/95 backdrop-blur-md rounded-[16px] shadow-[0_6px_18px_rgba(0,0,0,0.06)] border ${
                    isMatch ? 'border-white hover:border-slate-300' : 'border-slate-200'
                  } hover:bg-white hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)] hover:scale-105 transition-all duration-300 cursor-default group`}>
                    
                    <div className="flex items-center gap-1.5">
                      <div className="group-hover:scale-110 transition-transform duration-300 shrink-0">
                        {renderTechIcon(tech.icon)}
                      </div>
                      <span className="text-[12px] lg:text-[13px] font-bold text-slate-800 tracking-tight whitespace-nowrap">
                        {tech.name}
                      </span>
                      <span className={`w-1.5 h-1.5 rounded-full ${catInfo.dot}`} />
                    </div>

                    <span className={`text-[8.5px] font-semibold tracking-wider uppercase pl-5 ${catInfo.text}`}>
                      {catInfo.tag}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* ======================================================================= */}
        {/* MOBILE VIEW */}
        {/* ======================================================================= */}
        <div className="w-full flex md:hidden flex-col items-center gap-6 my-2 relative z-10">
          
          <div className="w-[150px] h-[150px] flex items-center justify-center relative">
            <div className="absolute top-[50%] left-[50%] w-[90%] h-[90%] bg-blue-400/25 rounded-full blur-2xl" style={{ animation: 'subtle-pulse 3s ease-in-out infinite' }} />
            <img 
              src={LogoIcon} 
              alt="Logo Core" 
              className="w-full h-auto object-contain drop-shadow-[0_10px_25px_rgba(59,130,246,0.3)] z-10 relative"
            />
          </div>

          {/* Mobile Categories */}
          <div className="flex flex-wrap justify-center gap-1.5 p-1.5 bg-white/80 rounded-2xl border border-white max-w-[360px] shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                  activeCategory === cat.id ? 'bg-[#0f172a] text-white' : 'text-slate-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Mobile Badge Chips */}
          <div className="flex flex-wrap justify-center gap-2 max-w-[380px] px-2">
            {technologiesList.map((item, idx) => {
              const isMatch = activeCategory === 'all' || activeCategory === item.category;
              const catInfo = categoryBadgeColors[item.category];

              return (
                <div
                  key={idx}
                  className={`bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-white flex items-center gap-2 text-[12px] font-semibold text-slate-800 transition-all duration-300 ${
                    isMatch ? 'opacity-100 scale-100' : 'opacity-30 scale-95 grayscale'
                  }`}
                >
                  {renderTechIcon(item.icon)}
                  <span>{item.name}</span>
                  <span className={`w-1.5 h-1.5 rounded-full ${catInfo.dot}`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* FOOTER CTA */}
        <div className="text-center mt-12 z-20 flex flex-col items-center relative">
          <p className="text-sm sm:text-[15px] text-slate-700 font-medium mb-3">
            Built with the right technology for the right solution.
          </p>
          
         <div className="pt-2">
  <motion.a
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    href="#technologies"
    className="group relative inline-flex items-center gap-3.5 px-8 py-3.5 bg-[#0B132B] text-white text-sm font-semibold rounded-full overflow-hidden transition-all duration-300 shadow-[0_8px_25px_-4px_rgba(11,19,43,0.35)] hover:shadow-[0_12px_30px_-2px_rgba(99,102,241,0.35)] border border-white/10 hover:border-indigo-500/50 cursor-pointer"
  >
    {/* બેકગ્રાઉન્ડ હોવર ગ્રેડિયન્ટ ઇફેક્ટ */}
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-sky-500/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

    {/* બટન ટેક્સ્ટ */}
    <span className="relative z-10 tracking-wide transition-colors duration-300 group-hover:text-white">
      Explore Our Technology Stack
    </span>

    {/* યુનિક ડ્યુઅલ એરો એનિમેશન */}
    <div className="relative z-10 w-4 h-4 overflow-hidden">
      <ArrowRight className="w-4 h-4 text-white absolute transition-transform duration-300 ease-out group-hover:translate-x-6 group-hover:opacity-0" />
      <ArrowRight className="w-4 h-4 text-cyan-400 absolute -translate-x-6 opacity-0 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100" />
    </div>
  </motion.a>
</div>
        </div>

      </div>
    </section>
  );
};

export default Technologies;