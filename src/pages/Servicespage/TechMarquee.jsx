import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// SVG Icons Dictionary
const TechIcon = ({ name, className = "w-4 h-4 sm:w-5 sm:h-5" }) => {
  switch (name) {
    case 'React':
    case 'React Native':
      return (
        <svg className={className} viewBox="-11.5 -10.232 23 20.463" fill="#00D2FF">
          <circle cx="0" cy="0" r="2.05" />
          <g stroke="#00D2FF" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case 'Node.js':
      return (
        <svg className={className} viewBox="0 0 256 289" fill="#5FA04E">
          <path d="M128 0L256 74v141l-128 74L0 215V74L128 0z" fillOpacity="0.15" />
          <path d="M128 0L256 74v141l-128 74L0 215V74L128 0z" stroke="#5FA04E" strokeWidth="16" fill="none" />
        </svg>
      );
    case 'TypeScript':
      return (
        <svg className={className} viewBox="0 0 256 256" fill="#3178C6">
          <rect width="256" height="256" rx="32" />
          <path d="M70 110h44v86h22v-86h44V90H70v20zm128 54c-5-4-13-8-22-8-12 0-17 6-17 12 0 8 7 11 19 15 17 6 27 15 27 28 0 16-13 27-34 27-14 0-26-5-33-11l8-17c6 5 16 9 25 9 12 0 17-5 17-11 0-7-6-10-18-14-17-6-28-13-28-29 0-16 13-26 33-26 13 0 23 4 29 8l-7 16z" fill="#fff" />
        </svg>
      );
    case 'Python':
      return (
        <svg className={className} viewBox="0 0 256 255">
          <path d="M126.9 0C60.9 0 65 28.6 65 28.6l.1 29.6h63v8.9H39.4S0 62.7 0 128.4c0 65.8 34.3 63.4 34.3 63.4h20.5v-28.8s-1.1-34.3 33.7-34.3h58.3s32.6.5 32.6-31.5V31.5S185.3 0 126.9 0zm-35.3 19.8a9.4 9.4 0 1 1 0 18.8 9.4 9.4 0 0 1 0-18.8z" fill="#3776AB" />
          <path d="M129.1 254.8c66 0 61.9-28.6 61.9-28.6l-.1-29.6h-63v-8.9h88.7s39.4 4.4 39.4-61.3c0-65.8-34.3-63.4-34.3-63.4h-20.5v28.8s1.1 34.3-33.7 34.3H109.6s-32.6-.5-32.6 31.5v65.7s-5.9 31.5 52.1 31.5zm35.3-19.8a9.4 9.4 0 1 1 0-18.8 9.4 9.4 0 0 1 0 18.8z" fill="#FFD43B" />
        </svg>
      );
    case 'Docker':
      return (
        <svg className={className} viewBox="0 0 256 256" fill="#2496ED">
          <path d="M246 122c-3-2-24-14-36-7-1-12-9-23-22-29l-9 8c8 5 14 13 14 23-14 1-28 7-36 17H12v22c0 38 31 69 69 69h94c44 0 80-35 80-79 0-8-2-17-7-24h4z" />
          <rect x="74" y="104" width="22" height="18" rx="2" />
          <rect x="102" y="104" width="22" height="18" rx="2" />
          <rect x="130" y="104" width="22" height="18" rx="2" />
        </svg>
      );
    case 'Next.js':
      return (
        <svg className={className} viewBox="0 0 256 256" fill="#000">
          <circle cx="128" cy="128" r="128" fill="#0F172A" />
          <path d="M178 78h-22v72l-58-72H78v100h22v-72l58 72h20V78z" fill="#fff" />
        </svg>
      );
    case 'Tailwind CSS':
      return (
        <svg className={className} viewBox="0 0 256 154" fill="#06B6D4">
          <path d="M64 0C28.7 0 7.2 18 0 54c14.3-18 31-24.7 50.3-20.2 11 2.6 18.8 10.6 27.5 19.5C92 67.8 108.5 84.7 144 84.7c35.3 0 56.8-18 64-54-14.3 18-31 24.7-50.3 20.2-11-2.6-18.8-10.6-27.5-19.5C116 16.9 99.5 0 64 0zm80 69.3c-35.3 0-56.8 18-64 54 14.3-18 31-24.7 50.3-20.2 11 2.6 18.8 10.6 27.5 19.5 14.2 14.5 30.7 31.4 66.2 31.4 35.3 0 56.8-18 64-54-14.3 18-31 24.7-50.3 20.2-11-2.6-18.8-10.6-27.5-19.5-14.2-14.5-30.7-31.4-66.2-31.4z" />
        </svg>
      );
    case 'MongoDB':
      return (
        <svg className={className} viewBox="0 0 256 570" fill="#47A248">
          <path d="M128 0S53 176 53 331c0 102 75 197 75 197s75-95 75-197C203 176 128 0 128 0z" />
        </svg>
      );
    case 'PostgreSQL':
      return (
        <svg className={className} viewBox="0 0 256 264" fill="#4169E1">
          <path d="M128 0C60 0 4 45 4 120c0 40 18 73 50 95l14-25c-20-15-32-38-32-70 0-56 42-88 92-88s92 32 92 88c0 32-12 55-32 70l14 25c32-22 50-55 50-95 0-75-56-120-124-120z" />
        </svg>
      );
    case 'AWS':
      return (
        <svg className={className} viewBox="0 0 256 154" fill="#FF9900">
          <path d="M128 115c-44 0-83 15-112 39-4 3-2 8 3 5 31-21 68-34 109-34s78 13 109 34c5 3 7-2 3-5-29-24-68-39-112-39z" />
        </svg>
      );
    case 'GraphQL':
      return (
        <svg className={className} viewBox="0 0 256 256" fill="#E10098">
          <path d="M128 18l95 55v110l-95 55-95-55V73l95-55zm0 18L49 82v92l79 46 79-46V82l-79-46z" />
        </svg>
      );
    default:
      return <span className="w-2 h-2 rounded-full bg-[#00D2FF]" />;
  }
};

const technologies = [
  "React", "Node.js", "TypeScript", "Next.js", "Tailwind CSS",
  "PostgreSQL", "MongoDB", "GraphQL", "Python", "Docker", "AWS"
];

const TechMarquee = () => {
  const prefersReduced = useReducedMotion();

  return (
    <section 
      className="relative py-3 sm:py-4 bg-white border-y border-slate-200/80 overflow-hidden select-none"
      aria-label="Technologies and Frameworks Stack"
    >
      {/* ડાબી અને જમણી બાજુ સ્મૂથ ફેડ માસ્ક */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

      {/* SINGLE LINE SEAMLESS TRACK */}
      <div className="flex w-max group">
        <motion.div
          animate={prefersReduced ? {} : { x: ['0%', '-50%'] }}
          transition={{
            duration: 25,
            ease: 'linear',
            repeat: Infinity,
          }}
          className="flex shrink-0 items-center space-x-3 sm:space-x-4 group-hover:[animation-play-state:paused]"
        >
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={`${tech}-${index}`}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200/80 bg-slate-50/70 hover:bg-white hover:border-slate-300 hover:shadow-sm transition-all duration-300 shrink-0 cursor-default"
            >
              <TechIcon name={tech} />
              <span className="font-mono text-xs sm:text-[13px] font-bold uppercase tracking-wider text-slate-700">
                {tech}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechMarquee;