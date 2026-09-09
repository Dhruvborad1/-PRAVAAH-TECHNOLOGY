// import React, { useRef, useEffect } from 'react';
// import { ArrowRight, ExternalLink, Activity, Code2, Sparkles } from 'lucide-react';
// import { motion } from 'framer-motion';

// // --- પ્રોજેક્ટ્સ ડેટા ---
// const projectsData = [
//   {
//     id: '01',
//     category: 'Enterprise SaaS',
//     techStack: ['Next.js', 'PostgreSQL', 'AWS'],
//     title: 'B2B Petrochemical Commerce Core',
//     description:
//       'High-throughput B2B digital ecosystem with real-time automated quotation pipelines, ERP integration, and multi-tenant security layers.',
//     status: 'Live Deployment',
//     theme: {
//       primaryColor: '#06B6D4', // Cyan Flow
//       glowGradient: 'from-[#06B6D4] via-[#2563EB] to-transparent',
//       badgeBorder: 'border-cyan-500/30 text-cyan-300 bg-cyan-950/40',
//       statusColor: 'bg-emerald-400',
//     },
//     link: '#',
//   },
//   {
//     id: '02',
//     category: 'Cloud & Telematics',
//     techStack: ['React', 'Node.js', 'Kafka', 'Redis'],
//     title: 'Real-Time Global Logistics Matrix',
//     description:
//       'Streamlined fleet tracking and automated freight dispatch platform built to process multi-carrier telematics with zero latency.',
//     status: 'Optimized',
//     theme: {
//       primaryColor: '#3B82F6', // Deep Blue Stream
//       glowGradient: 'from-[#3B82F6] via-[#7C3AED] to-transparent',
//       badgeBorder: 'border-blue-500/30 text-blue-300 bg-blue-950/40',
//       statusColor: 'bg-cyan-400',
//     },
//     link: '#',
//   },
//   {
//     id: '03',
//     category: 'FinTech Architecture',
//     techStack: ['React Native', 'TypeScript', 'GraphQL'],
//     title: 'Predictive Wealth & Expense Core',
//     description:
//       'Intelligent financial monitoring suite delivering cryptographic audits, ledger automation, and continuous expense forecasting.',
//     status: 'Production',
//     theme: {
//       primaryColor: '#8B5CF6', // Violet Current
//       glowGradient: 'from-[#8B5CF6] via-[#EC4899] to-transparent',
//       badgeBorder: 'border-purple-500/30 text-purple-300 bg-purple-950/40',
//       statusColor: 'bg-purple-400',
//     },
//     link: '#',
//   },
// ];

// // --- ફ્લુઇડ વેવ કેનવાસ (Pravaah Real-time Wave Animation) ---
// const FluidCanvas = ({ color }) => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');
//     let animationFrameId;
//     let step = 0;

//     const render = () => {
//       step += 0.035;
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       const width = canvas.width;
//       const height = canvas.height;

//       // ડબલ વેવ ફ્લો ડ્રોઇંગ
//       for (let j = 0; j < 2; j++) {
//         ctx.beginPath();
//         ctx.moveTo(0, height);

//         for (let x = 0; x <= width; x += 10) {
//           const y =
//             Math.sin(x * 0.02 + step + j * 1.5) * 12 +
//             Math.cos(x * 0.01 + step * 0.8) * 8 +
//             (height / 2 + 10 + j * 8);
//           ctx.lineTo(x, y);
//         }

//         ctx.lineTo(width, height);
//         ctx.closePath();

//         ctx.fillStyle = j === 0 ? `${color}18` : `${color}28`;
//         ctx.fill();
//       }

//       animationFrameId = requestAnimationFrame(render);
//     };

//     render();

//     return () => {
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, [color]);

//   return <canvas ref={canvasRef} width={360} height={180} className="absolute inset-0 h-full w-full opacity-60" />;
// };

// // --- યુનિક Pravaah ટેક કાર્ડ ---
// const PravaahUniqueCard = ({ project, index }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 45 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{ duration: 0.75, delay: index * 0.18, ease: [0.16, 1, 0.3, 1] }}
//       whileHover={{ y: -8 }}
//       className="group relative flex flex-col justify-between overflow-hidden rounded-[30px] border border-slate-800/80 bg-gradient-to-b from-slate-900/90 via-[#070D1E]/95 to-[#020617] p-[1.5px] shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl transition-all duration-500 hover:border-slate-700 hover:shadow-[0_25px_60px_rgba(6,182,212,0.12)]"
//     >
//       {/* 1. Animated Continuous Flow Border Ray (Hover State) */}
//       <div
//         className={`pointer-events-none absolute -inset-[150%] opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-[conic-gradient(from_0deg,transparent_0_300deg,${project.theme.primaryColor}_360deg)] animate-[spin_4s_linear_infinite]`}
//       />

//       {/* Card Inner Container */}
//       <div className="relative z-10 flex h-full flex-col justify-between overflow-hidden rounded-[28px] bg-slate-950/90 p-6 md:p-7">

//         {/* Top Feature: Interactive Wave Screen */}
//         <div className="relative mb-6 h-48 w-full overflow-hidden rounded-2xl border border-slate-800/80 bg-[#030712] shadow-inner">
//           {/* Tech Mesh Grid Pattern */}
//           <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:16px_16px]" />

//           {/* Animated Real-time Fluid Wave */}
//           <FluidCanvas color={project.theme.primaryColor} />

//           {/* Glowing Ambient Core */}
//           <div
//             className="absolute -top-10 -right-10 h-32 w-32 rounded-full blur-2xl opacity-20 transition-transform duration-500 group-hover:scale-150 group-hover:opacity-40"
//             style={{ background: project.theme.primaryColor }}
//           />

//           {/* Status & Code Tag Bar */}
//           <div className="absolute inset-x-3 top-3 flex items-center justify-between z-10">
//             <div className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 shadow-md backdrop-blur-md">
//               <span className={`h-1.5 w-1.5 rounded-full ${project.theme.statusColor} animate-pulse`} />
//               <span className="text-[11px] font-mono font-medium tracking-wide text-slate-300">
//                 {project.status}
//               </span>
//             </div>

//             <span className="font-mono text-xs font-bold text-slate-500 tracking-wider">
//               #{project.id}
//             </span>
//           </div>

//           {/* Pravaah Fluid Chip Bottom Tag */}
//           <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 rounded-lg border border-slate-800/90 bg-slate-900/90 px-3 py-1 text-slate-300 shadow-sm backdrop-blur-md transition-all duration-300 group-hover:border-slate-700">
//             <Sparkles className="h-3 w-3 text-cyan-400" />
//             <span className="text-xs font-medium tracking-wide">Pravaah Digital Core</span>
//           </div>
//         </div>

//         {/* Middle Details: Category, Header & Summary */}
//         <div className="flex-1">
//           <div className="mb-4 flex items-center justify-between">
//             <span
//               className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${project.theme.badgeBorder}`}
//             >
//               {project.category}
//             </span>

//             <a
//               href={project.link}
//               aria-label={`Open ${project.title}`}
//               className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-400 transition-all duration-300 group-hover:border-slate-600 group-hover:bg-slate-800 group-hover:text-white group-hover:scale-110"
//             >
//               <ExternalLink className="h-4 w-4" />
//             </a>
//           </div>

//           <h3 className="text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300">
//             {project.title}
//           </h3>

//           <p className="mt-3 text-sm leading-relaxed text-slate-400">
//             {project.description}
//           </p>

//           {/* Tech Stack Pills */}
//           <div className="mt-5 flex flex-wrap gap-1.5">
//             {project.techStack.map((tech, i) => (
//               <span
//                 key={i}
//                 className="rounded-md border border-slate-800/90 bg-slate-900/50 px-2.5 py-1 text-[11px] font-mono text-slate-400 transition-colors group-hover:border-slate-700 group-hover:text-slate-300"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Bottom Flow Line */}
//         <div className="mt-7 pt-4 border-t border-slate-800/60">
//           <div className="relative h-[2.5px] w-full overflow-hidden rounded-full bg-slate-800/80">
//             <div
//               className={`h-full w-0 bg-gradient-to-r ${project.theme.glowGradient} transition-all duration-700 ease-out group-hover:w-full`}
//             />
//           </div>
//         </div>

//       </div>
//     </motion.div>
//   );
// };

// // --- મુખ્ય સેક્શન કમ્પોનન્ટ ---
// const Projects = () => {
//   return (
//     <section className="relative overflow-hidden bg-[#020617] py-16 md:py-28">
//       {/* Background Decorative Accents */}
//       <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
//         <div className="absolute top-20 right-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-[100px]" />
//         <div className="absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-purple-600/10 blur-[100px]" />

//         {/* Subtle Decorative Geometric Accents */}
//         <div className="absolute right-[8%] top-24 h-2 w-2 rounded-sm bg-blue-500/30 rotate-12" />
//         <div className="absolute left-[10%] top-36 h-2.5 w-2.5 rounded-sm bg-cyan-500/30 -rotate-45" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="mx-auto max-w-3xl text-center mb-16">
//           {/* Badge */}
//           <div className="section-label mb-4">
//             <span className="section-label-text">Our Work</span>
//           </div>

//           {/* Title */}
//           <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
//             Featured{' '}
//             <span className="bg-gradient-to-r from-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent">
//               Projects
//             </span>
//           </h2>

//           {/* Description */}
//           <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
//             Take a look at some of our recent work that has helped businesses achieve their digital goals.
//           </p>
//         </div>

//         {/* Grid Container */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projectsData.map((project, index) => (
//             <PravaahUniqueCard key={project.id} project={project} index={index} />
//           ))}
//         </div>

//         {/* Section Bottom CTA */}
//         <div className="mt-16 text-center">
//           <a
//             className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-8 py-3.5 text-sm font-semibold text-slate-300 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-slate-800 hover:text-white hover:border-slate-600 hover:shadow-[0_8px_20px_rgba(0,0,0,0.4)]"
//             href="/projects"
//           >
//             View All Projects <ArrowRight className="h-4 w-4" />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;


import React, { useRef, useEffect } from 'react';
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

// --- પ્રોજેક્ટ્સ ડેટા ---
const projectsData = [
  {
    id: '01',
    category: 'Enterprise SaaS',
    techStack: ['Next.js', 'PostgreSQL', 'AWS'],
    title: 'B2B Petrochemical Commerce Core',
    description:
      'High-throughput B2B digital ecosystem with real-time automated quotation pipelines, ERP integration, and multi-tenant security layers.',
    status: 'Live Deployment',
    theme: {
      primaryColor: '#06B6D4',
      glowGradient: 'from-[#06B6D4] via-[#2563EB] to-transparent',
      badgeBorder: 'border-cyan-500/30 text-cyan-300 bg-cyan-950/40',
      statusColor: 'bg-emerald-400',
    },
    link: '#',
  },
  {
    id: '02',
    category: 'Cloud & Telematics',
    techStack: ['React', 'Node.js', 'Kafka', 'Redis'],
    title: 'Real-Time Global Logistics Matrix',
    description:
      'Streamlined fleet tracking and automated freight dispatch platform built to process multi-carrier telematics with zero latency.',
    status: 'Optimized',
    theme: {
      primaryColor: '#3B82F6',
      glowGradient: 'from-[#3B82F6] via-[#7C3AED] to-transparent',
      badgeBorder: 'border-blue-500/30 text-blue-300 bg-blue-950/40',
      statusColor: 'bg-cyan-400',
    },
    link: '#',
  },
  {
    id: '03',
    category: 'FinTech Architecture',
    techStack: ['React Native', 'TypeScript', 'GraphQL'],
    title: 'Predictive Wealth & Expense Core',
    description:
      'Intelligent financial monitoring suite delivering cryptographic audits, ledger automation, and continuous expense forecasting.',
    status: 'Production',
    theme: {
      primaryColor: '#8B5CF6',
      glowGradient: 'from-[#8B5CF6] via-[#EC4899] to-transparent',
      badgeBorder: 'border-purple-500/30 text-purple-300 bg-purple-950/40',
      statusColor: 'bg-purple-400',
    },
    link: '#',
  },
];

// --- ફ્લુઇડ વેવ કેનવાસ ---
const FluidCanvas = React.memo(({ color }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let step = 0;

    const render = () => {
      step += 0.035;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const width = canvas.width;
      const height = canvas.height;

      for (let j = 0; j < 2; j++) {
        ctx.beginPath();
        ctx.moveTo(0, height);

        for (let x = 0; x <= width; x += 10) {
          const y =
            Math.sin(x * 0.02 + step + j * 1.5) * 12 +
            Math.cos(x * 0.01 + step * 0.8) * 8 +
            (height / 2 + 10 + j * 8);
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        ctx.fillStyle = j === 0 ? `${color}18` : `${color}28`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [color]);

  return <canvas ref={canvasRef} width={360} height={180} className="absolute inset-0 h-full w-full opacity-60 pointer-events-none" />;
});

FluidCanvas.displayName = 'FluidCanvas';

// --- સ્મૂથ Pravaah ટેક કાર્ડ ---
const PravaahUniqueCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1]
      }}
      whileHover={{
        y: -8,
        transition: { type: "spring", stiffness: 400, damping: 25 }
      }}
      className="group relative flex flex-col justify-between rounded-[30px] border border-slate-800/80 bg-slate-900/60 p-[1.5px] shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl will-change-transform hover:border-slate-600 hover:shadow-[0_20px_45px_rgba(6,182,212,0.15)]"
    >
      {/* Dynamic Glow Aura on Hover */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[30px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at 50% 0%, ${project.theme.primaryColor}22, transparent 70%)`
        }}
      />

      {/* Card Inner Container */}
      <div className="relative z-10 flex h-full flex-col justify-between overflow-hidden rounded-[28px] bg-slate-950/90 p-6 md:p-7">

        {/* Top Feature: Interactive Wave Screen */}
        <div className="relative mb-6 h-48 w-full overflow-hidden rounded-2xl border border-slate-800/80 bg-[#030712] shadow-inner">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:16px_16px]" />

          <FluidCanvas color={project.theme.primaryColor} />

          <div
            className="absolute -top-10 -right-10 h-32 w-32 rounded-full blur-2xl opacity-20 transition-opacity duration-300 group-hover:opacity-40"
            style={{ background: project.theme.primaryColor }}
          />

          {/* Status & Code Tag Bar */}
          <div className="absolute inset-x-3 top-3 flex items-center justify-between z-10">
            <div className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 shadow-md backdrop-blur-md">
              <span className={`h-1.5 w-1.5 rounded-full ${project.theme.statusColor} animate-pulse`} />
              <span className="text-[11px] font-mono font-medium tracking-wide text-slate-300">
                {project.status}
              </span>
            </div>

            <span className="font-mono text-xs font-bold text-slate-500 tracking-wider">
              #{project.id}
            </span>
          </div>

          {/* Bottom Tag */}
          <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 rounded-lg border border-slate-800/90 bg-slate-900/90 px-3 py-1 text-slate-300 shadow-sm backdrop-blur-md transition-colors duration-200 group-hover:border-slate-700">
            <Sparkles className="h-3 w-3 text-cyan-400" />
            <span className="text-xs font-medium tracking-wide">Pravaah Digital Core</span>
          </div>
        </div>

        {/* Middle Details */}
        <div className="flex-1">
          <div className="mb-4 flex items-center justify-between">
            <span
              className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${project.theme.badgeBorder}`}
            >
              {project.category}
            </span>

            <a
              href={project.link}
              aria-label={`Open ${project.title}`}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-400 transition-all duration-200 group-hover:border-slate-600 group-hover:bg-slate-800 group-hover:text-white group-hover:scale-110"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <h3 className="text-xl font-bold tracking-tight text-white transition-colors duration-200 group-hover:text-cyan-300">
            {project.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            {project.description}
          </p>

          {/* Tech Stack Pills */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="rounded-md border border-slate-800/90 bg-slate-900/50 px-2.5 py-1 text-[11px] font-mono text-slate-400 transition-colors duration-200 group-hover:border-slate-700 group-hover:text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Flow Line */}
        <div className="mt-7 pt-4 border-t border-slate-800/60">
          <div className="relative h-[2.5px] w-full overflow-hidden rounded-full bg-slate-800/80">
            <div
              className={`h-full w-0 bg-gradient-to-r ${project.theme.glowGradient} transition-all duration-500 ease-out group-hover:w-full`}
            />
          </div>
        </div>

      </div>
    </motion.div>
  );
};

// --- મુખ્ય સેક્શન કમ્પોનન્ટ ---
const Projects = () => {
  return (
    <section className="relative overflow-hidden bg-[#020617] py-16 md:py-28">
      {/* Background Decorative Accents */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
        <div className="absolute top-20 right-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-[100px]" />
        <div className="absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-purple-600/10 blur-[100px]" />

        <div className="absolute right-[8%] top-24 h-2 w-2 rounded-sm bg-blue-500/30 rotate-12" />
        <div className="absolute left-[10%] top-36 h-2.5 w-2.5 rounded-sm bg-cyan-500/30 -rotate-45" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="section-label mb-4">
            <span className="section-label-text">Our Work</span>
          </div>

          <h2 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight text-white">
            Featured{' '}
            <span className="bg-gradient-to-r from-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            Take a look at some of our recent work that has helped businesses achieve their digital goals.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <PravaahUniqueCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Section Bottom CTA */}
        <div className="mt-16 text-center">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="/projects"
            className="group relative inline-flex items-center gap-3.5 px-8 py-3.5 bg-white text-black text-sm font-semibold rounded-full overflow-hidden transition-all duration-300 shadow-[0_8px_25px_-4px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_30px_-2px_rgba(99,102,241,0.35)] border border-slate-200 hover:border-indigo-500/50 cursor-pointer shrink-0"
          >
            {/* Background Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-sky-500/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

            {/* Button Text */}
            <span className="relative z-10 tracking-wide transition-colors duration-300 group-hover:text-slate-900 whitespace-nowrap">
              View All Projects
            </span>

            {/* Dual Arrow Swipe Animation (Black to Indigo) */}
            <div className="relative z-10 w-4 h-4 overflow-hidden">
              <ArrowRight className="w-4 h-4 text-black absolute transition-transform duration-300 ease-out group-hover:translate-x-6 group-hover:opacity-0" />
              <ArrowRight className="w-4 h-4 text-indigo-600 absolute -translate-x-6 opacity-0 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100" />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;