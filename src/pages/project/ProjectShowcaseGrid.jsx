import React, { useRef, useEffect, useState } from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Category-specific unified theme configuration tailored for light theme
const categoryThemes = {
  'Web Development': {
    primaryColor: '#06B6D4',
    glowGradient: 'from-[#00D2FF] via-[#2F54EB] to-purple-500',
    badgeBorder: 'border-cyan-200 bg-cyan-50/80 text-cyan-800',
    statusBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
    statusDot: 'bg-emerald-500',
    cardBorderHover: 'hover:border-cyan-300',
    shadowHover: 'hover:shadow-[0_15px_30px_rgba(6,182,212,0.12)]'
  },
  'Mobile Apps': {
    primaryColor: '#2563EB',
    glowGradient: 'from-[#2563EB] via-[#4F46E5] to-indigo-500',
    badgeBorder: 'border-blue-200 bg-blue-50/80 text-blue-800',
    statusBadge: 'bg-blue-50 text-blue-700 border-blue-200/80',
    statusDot: 'bg-blue-500',
    cardBorderHover: 'hover:border-blue-300',
    shadowHover: 'hover:shadow-[0_15px_30px_rgba(37,99,235,0.12)]'
  },
  'Cloud Solutions': {
    primaryColor: '#7C3AED',
    glowGradient: 'from-[#7C3AED] via-[#9333EA] to-purple-500',
    badgeBorder: 'border-purple-200 bg-purple-50/80 text-purple-800',
    statusBadge: 'bg-purple-50 text-purple-700 border-purple-200/80',
    statusDot: 'bg-purple-500',
    cardBorderHover: 'hover:border-purple-300',
    shadowHover: 'hover:shadow-[0_15px_30px_rgba(124,58,237,0.12)]'
  },
  'UI/UX Design': {
    primaryColor: '#DB2777',
    glowGradient: 'from-[#DB2777] via-[#E11D48] to-pink-500',
    badgeBorder: 'border-pink-200 bg-pink-50/80 text-pink-800',
    statusBadge: 'bg-pink-50 text-pink-700 border-pink-200/80',
    statusDot: 'bg-pink-500',
    cardBorderHover: 'hover:border-pink-300',
    shadowHover: 'hover:shadow-[0_15px_30px_rgba(219,39,119,0.12)]'
  }
};

const rawProjectsData = [
  {
    id: '01',
    category: 'Web Development',
    techStack: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
    title: 'B2B E-Commerce Platform',
    client: 'Powerex Petrochem',
    description: 'Custom online ordering platform for petrochemical products with secure payments and real-time order tracking.',
    status: 'Live Deployment',
    link: '#',
  },
  {
    id: '02',
    category: 'Web Development',
    techStack: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    title: 'Logistics Website',
    client: 'ShippingDrop',
    description: 'Customer-facing portal for booking shipping services, tracking orders, and dispatch automation.',
    status: 'Optimized',
    link: '#',
  },
  {
    id: '03',
    category: 'Mobile Apps',
    techStack: ['React Native', 'TypeScript', 'GraphQL'],
    title: 'Predictive Wealth Core',
    client: 'FinTech Corp',
    description: 'Intelligent financial monitoring suite delivering cryptographic audits and continuous expense forecasting.',
    status: 'Production',
    link: '#',
  },
  {
    id: '04',
    category: 'Cloud Solutions',
    techStack: ['Node.js', 'Kafka', 'Redis', 'AWS'],
    title: 'Global Logistics Matrix',
    client: 'GlobalFreight',
    description: 'Streamlined fleet tracking and automated freight dispatch platform built for high-throughput telematics.',
    status: 'Optimized',
    link: '#',
  },
  {
    id: '05',
    category: 'UI/UX Design',
    techStack: ['Figma', 'Design System', 'Prototyping'],
    title: 'Fintech Dashboard Design',
    client: 'Apex Ledger',
    description: 'Design system, wireframing, and interactive component prototypes for a multi-tenant investment dashboard.',
    status: 'Design System',
    link: '#',
  }
];

// Attach unified category theme to every project item
const projectsData = rawProjectsData.map(project => ({
  ...project,
  theme: categoryThemes[project.category] || categoryThemes['Web Development']
}));

// Filter categories
const filters = ['All', 'Web Development', 'Mobile Apps', 'Cloud Solutions', 'UI/UX Design'];

// --- Compact Fluid Wave Canvas (Light Variant) ---
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
            Math.sin(x * 0.02 + step + j * 1.5) * 8 +
            Math.cos(x * 0.01 + step * 0.8) * 5 +
            (height / 2 + 5 + j * 6);
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        // Subtle translucent wave colors for bright backgrounds
        ctx.fillStyle = j === 0 ? `${color}1A` : `${color}2A`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [color]);

  return <canvas ref={canvasRef} width={280} height={140} className="absolute inset-0 h-full w-full opacity-80 pointer-events-none" />;
});

FluidCanvas.displayName = 'FluidCanvas';

// --- Compact Pravaah Card with Clean Light Theme ---
const PravaahUniqueCard = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1]
      }}
      whileHover={{
        y: -6,
        transition: { type: "spring", stiffness: 400, damping: 25 }
      }}
      className={`group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:shadow-md ${project.theme.cardBorderHover} ${project.theme.shadowHover} h-full overflow-hidden`}
    >
      {/* Subtle Top Accent Bar on Hover */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
        style={{ backgroundColor: project.theme.primaryColor }}
      />

      {/* Card Inner Container */}
      <div className="relative z-10 flex h-full flex-col justify-between p-4 sm:p-5">

        {/* Top Wave Feature Box */}
        <div className="relative mb-4 h-36 w-full overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50/70 shadow-inner shrink-0">
          {/* Light Architectural Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:14px_14px]" />

          <FluidCanvas color={project.theme.primaryColor} />

          {/* Soft Light Color Bloom */}
          <div
            className="absolute -top-8 -right-8 h-24 w-24 rounded-full blur-xl opacity-25 transition-opacity duration-300 group-hover:opacity-45"
            style={{ background: project.theme.primaryColor }}
          />

          {/* Status Badge & Code ID */}
          <div className="absolute inset-x-2.5 top-2.5 flex items-center justify-between z-10">
            <div className={`flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 shadow-xs backdrop-blur-md ${project.theme.statusBadge}`}>
              <span className={`h-1.5 w-1.5 rounded-full ${project.theme.statusDot} animate-pulse`} />
              <span className="text-[10px] font-mono font-medium tracking-wide">
                {project.status}
              </span>
            </div>

            <span className="font-mono text-[11px] font-bold text-slate-400 tracking-wider">
              #{project.id}
            </span>
          </div>

          {/* Micro Brand Pill */}
          <div className="absolute bottom-2.5 left-2.5 z-10 flex items-center gap-1 rounded-md border border-slate-200/90 bg-white/95 px-2 py-0.5 text-slate-700 shadow-xs backdrop-blur-md transition-colors duration-200">
            <Sparkles className="h-2.5 w-2.5" style={{ color: project.theme.primaryColor }} />
            <span className="text-[10px] font-medium tracking-wide">Pravaah Core</span>
          </div>
        </div>

        {/* Middle Content Details */}
        <div className="flex-1 flex flex-col">
          <div className="mb-2.5 flex items-center justify-between">
            <span
              className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${project.theme.badgeBorder}`}
            >
              {project.category}
            </span>

            <a
              href={project.link}
              aria-label={`Open ${project.title}`}
              className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-xs transition-all duration-200 hover:bg-slate-900 hover:text-white hover:border-slate-900 hover:scale-105"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <h3 className="text-base font-display font-bold tracking-tight text-slate-900 transition-colors duration-200 line-clamp-1 group-hover:text-blue-600">
            {project.title}
          </h3>
          
          <p className="mt-0.5 text-[11px] font-medium text-slate-500">Client: {project.client}</p>

          <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-3 flex-grow">
            {project.description}
          </p>

          {/* Tech Stack Pills */}
          <div className="mt-3.5 flex flex-wrap gap-1 shrink-0">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="rounded border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-mono text-slate-600 transition-colors duration-200 group-hover:border-slate-300 group-hover:text-slate-900"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Accent Bar */}
        <div className="mt-4 pt-3 border-t border-slate-100 shrink-0">
          <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-slate-100">
            <div
              className={`h-full w-0 bg-gradient-to-r ${project.theme.glowGradient} transition-all duration-500 ease-out group-hover:w-full`}
            />
          </div>
        </div>

      </div>
    </motion.div>
  );
};

const ProjectShowcaseGrid = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = projectsData.filter(project => 
    activeFilter === 'All' ? true : project.category === activeFilter
  );

  return (
    <section className="relative overflow-hidden bg-white border-b border-slate-200/60 py-16 md:py-20 selection:bg-cyan-100 selection:text-slate-900">
      {/* Background Subtle Ambience & Grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 select-none overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute top-1/4 -left-32 w-[500px] h-[380px] bg-gradient-to-tr from-cyan-100/30 to-blue-100/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 -right-32 w-[500px] h-[380px] bg-gradient-to-bl from-purple-100/25 to-indigo-100/15 blur-[130px] rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        
       {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/70 bg-blue-50/60 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-blue-700 shadow-xs mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
            BROWSE PROJECTS
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950 leading-[1.14]">
            Our Recent{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#2F54EB] to-[#9B51E0]">
              Work.
            </span>
          </h2>
          <div className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-500 mx-auto" />

          {/* Subtitle Description */}
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Explore our production-grade platforms, high-velocity mobile applications, and resilient cloud architectures crafted for modern scale.
          </p>
        </div>
        
        {/* Animated Filter Navigation (Light Variant of Domain Masteries) */}
        <div className="flex flex-wrap justify-center gap-1.5 p-1.5 rounded-2xl bg-slate-100/80 border border-slate-200/90 backdrop-blur-md max-w-fit mx-auto mb-12 shadow-xs">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button 
                key={filter} 
                onClick={() => setActiveFilter(filter)}
                className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer select-none ${
                  isActive ? 'text-white' : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {/* Active Sliding Background Pill */}
                {isActive && (
                  <motion.div
                    layoutId="activeFilterTab"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 shadow-md shadow-blue-500/20"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30
                    }}
                  />
                )}

                {/* Button Label Text */}
                <span className="relative z-10">{filter}</span>
              </button>
            );
          })}
        </div>
        
        {/* 4-Card Responsive Grid (1 col on mobile, 2 on tablet, 4 on desktop) */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <PravaahUniqueCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
          
          {filteredProjects.length === 0 && (
            <div className="col-span-full py-12 text-center text-slate-500">
              No projects found for this category.
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectShowcaseGrid;





//Darck Theme 

// import React, { useRef, useEffect, useState } from 'react';
// import { ExternalLink, Sparkles } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// // Category-specific unified theme configuration
// const categoryThemes = {
//   'Web Development': {
//     primaryColor: '#06B6D4',
//     glowGradient: 'from-[#06B6D4] via-[#0284C7] to-transparent',
//     badgeBorder: 'border-cyan-500/30 text-cyan-300 bg-cyan-950/40',
//     statusColor: 'bg-cyan-400',
//   },
//   'Mobile Apps': {
//     primaryColor: '#3B82F6',
//     glowGradient: 'from-[#3B82F6] via-[#1D4ED8] to-transparent',
//     badgeBorder: 'border-blue-500/30 text-blue-300 bg-blue-950/40',
//     statusColor: 'bg-blue-400',
//   },
//   'Cloud Solutions': {
//     primaryColor: '#8B5CF6',
//     glowGradient: 'from-[#8B5CF6] via-[#6D28D9] to-transparent',
//     badgeBorder: 'border-purple-500/30 text-purple-300 bg-purple-950/40',
//     statusColor: 'bg-purple-400',
//   },
//   'UI/UX Design': {
//     primaryColor: '#EC4899',
//     glowGradient: 'from-[#EC4899] via-[#BE185D] to-transparent',
//     badgeBorder: 'border-pink-500/30 text-pink-300 bg-pink-950/40',
//     statusColor: 'bg-pink-400',
//   }
// };

// const rawProjectsData = [
//   {
//     id: '01',
//     category: 'Web Development',
//     techStack: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
//     title: 'B2B E-Commerce Platform',
//     client: 'Powerex Petrochem',
//     description: 'Custom online ordering platform for petrochemical products with secure payments and real-time order tracking.',
//     status: 'Live Deployment',
//     link: '#',
//   },
//   {
//     id: '02',
//     category: 'Web Development',
//     techStack: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
//     title: 'Logistics Website',
//     client: 'ShippingDrop',
//     description: 'Customer-facing portal for booking shipping services, tracking orders, and dispatch automation.',
//     status: 'Optimized',
//     link: '#',
//   },
//   {
//     id: '03',
//     category: 'Mobile Apps',
//     techStack: ['React Native', 'TypeScript', 'GraphQL'],
//     title: 'Predictive Wealth Core',
//     client: 'FinTech Corp',
//     description: 'Intelligent financial monitoring suite delivering cryptographic audits and continuous expense forecasting.',
//     status: 'Production',
//     link: '#',
//   },
//   {
//     id: '04',
//     category: 'Cloud Solutions',
//     techStack: ['Node.js', 'Kafka', 'Redis', 'AWS'],
//     title: 'Global Logistics Matrix',
//     client: 'GlobalFreight',
//     description: 'Streamlined fleet tracking and automated freight dispatch platform built for high-throughput telematics.',
//     status: 'Optimized',
//     link: '#',
//   },
//   {
//     id: '05',
//     category: 'UI/UX Design',
//     techStack: ['Figma', 'Design System', 'Prototyping'],
//     title: 'Fintech Dashboard Design',
//     client: 'Apex Ledger',
//     description: 'Design system, wireframing, and interactive component prototypes for a multi-tenant investment dashboard.',
//     status: 'Design System',
//     link: '#',
//   }
// ];

// // Attach unified category theme to every project item
// const projectsData = rawProjectsData.map(project => ({
//   ...project,
//   theme: categoryThemes[project.category] || categoryThemes['Web Development']
// }));

// // Filter categories
// const filters = ['All', 'Web Development', 'Mobile Apps', 'Cloud Solutions', 'UI/UX Design'];

// // --- Compact Fluid Wave Canvas ---
// const FluidCanvas = React.memo(({ color }) => {
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

//       for (let j = 0; j < 2; j++) {
//         ctx.beginPath();
//         ctx.moveTo(0, height);

//         for (let x = 0; x <= width; x += 10) {
//           const y =
//             Math.sin(x * 0.02 + step + j * 1.5) * 8 +
//             Math.cos(x * 0.01 + step * 0.8) * 5 +
//             (height / 2 + 5 + j * 6);
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

//   return <canvas ref={canvasRef} width={280} height={140} className="absolute inset-0 h-full w-full opacity-60 pointer-events-none" />;
// });

// FluidCanvas.displayName = 'FluidCanvas';

// // --- Compact Pravaah Card with Category-Based Color Theming ---
// const PravaahUniqueCard = ({ project }) => {
//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ opacity: 0, scale: 0.95 }}
//       transition={{
//         duration: 0.35,
//         ease: [0.16, 1, 0.3, 1]
//       }}
//       whileHover={{
//         y: -6,
//         transition: { type: "spring", stiffness: 400, damping: 25 }
//       }}
//       className="group relative flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/60 p-[1.5px] shadow-lg backdrop-blur-xl will-change-transform hover:border-slate-600 hover:shadow-[0_15px_35px_rgba(6,182,212,0.15)] h-full"
//     >
//       {/* Category-Specific Glow Aura on Hover */}
//       <div
//         className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
//         style={{
//           background: `radial-gradient(300px circle at 50% 0%, ${project.theme.primaryColor}22, transparent 70%)`
//         }}
//       />

//       {/* Card Inner Container */}
//       <div className="relative z-10 flex h-full flex-col justify-between overflow-hidden rounded-[15px] bg-slate-950/90 p-4 sm:p-5">

//         {/* Top Wave Canvas Feature */}
//         <div className="relative mb-4 h-36 w-full overflow-hidden rounded-xl border border-slate-800/80 bg-[#030712] shadow-inner shrink-0">
//           <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:14px_14px]" />

//           <FluidCanvas color={project.theme.primaryColor} />

//           <div
//             className="absolute -top-8 -right-8 h-24 w-24 rounded-full blur-xl opacity-20 transition-opacity duration-300 group-hover:opacity-40"
//             style={{ background: project.theme.primaryColor }}
//           />

//           {/* Status Badge & Code ID */}
//           <div className="absolute inset-x-2.5 top-2.5 flex items-center justify-between z-10">
//             <div className="flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-900/80 px-2.5 py-0.5 shadow-sm backdrop-blur-md">
//               <span className={`h-1.5 w-1.5 rounded-full ${project.theme.statusColor} animate-pulse`} />
//               <span className="text-[10px] font-mono font-medium tracking-wide text-slate-300">
//                 {project.status}
//               </span>
//             </div>

//             <span className="font-mono text-[11px] font-bold text-slate-500 tracking-wider">
//               #{project.id}
//             </span>
//           </div>

//           {/* Micro Brand Tag */}
//           <div className="absolute bottom-2.5 left-2.5 z-10 flex items-center gap-1 rounded-md border border-slate-800/90 bg-slate-900/90 px-2 py-0.5 text-slate-300 shadow-xs backdrop-blur-md transition-colors duration-200 group-hover:border-slate-700">
//             <Sparkles className="h-2.5 w-2.5" style={{ color: project.theme.primaryColor }} />
//             <span className="text-[10px] font-medium tracking-wide">Pravaah Core</span>
//           </div>
//         </div>

//         {/* Middle Details Content */}
//         <div className="flex-1 flex flex-col">
//           <div className="mb-2.5 flex items-center justify-between">
//             <span
//               className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${project.theme.badgeBorder}`}
//             >
//               {project.category}
//             </span>

//             <a
//               href={project.link}
//               aria-label={`Open ${project.title}`}
//               className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-400 transition-all duration-200 group-hover:border-slate-600 group-hover:bg-slate-800 group-hover:text-white group-hover:scale-105"
//             >
//               <ExternalLink className="h-3.5 w-3.5" />
//             </a>
//           </div>

//           <h3 className="text-base font-bold tracking-tight text-white transition-colors duration-200 line-clamp-1 group-hover:text-cyan-300">
//             {project.title}
//           </h3>
          
//           <p className="mt-0.5 text-[11px] font-medium text-slate-500">Client: {project.client}</p>

//           <p className="mt-2 text-xs leading-relaxed text-slate-400 line-clamp-3 flex-grow">
//             {project.description}
//           </p>

//           {/* Tech Stack Tags */}
//           <div className="mt-3.5 flex flex-wrap gap-1 shrink-0">
//             {project.techStack.map((tech, i) => (
//               <span
//                 key={i}
//                 className="rounded border border-slate-800/90 bg-slate-900/50 px-2 py-0.5 text-[10px] font-mono text-slate-400 transition-colors duration-200 group-hover:border-slate-700 group-hover:text-slate-300"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Category Color Fill Bottom Accent */}
//         <div className="mt-4 pt-3 border-t border-slate-800/60 shrink-0">
//           <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-slate-800/80">
//             <div
//               className={`h-full w-0 bg-gradient-to-r ${project.theme.glowGradient} transition-all duration-500 ease-out group-hover:w-full`}
//             />
//           </div>
//         </div>

//       </div>
//     </motion.div>
//   );
// };

// const ProjectShowcaseGrid = () => {
//   const [activeFilter, setActiveFilter] = useState('All');

//   const filteredProjects = projectsData.filter(project => 
//     activeFilter === 'All' ? true : project.category === activeFilter
//   );

//   return (
//     <section className="relative overflow-hidden bg-[#020617] py-20">
//       {/* Background Ambience Elements */}
//       <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
//         <div className="absolute top-20 right-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-[100px]" />
//         <div className="absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-purple-600/10 blur-[100px]" />
//       </div>

//       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Section Header */}
//         <div className="text-center max-w-2xl mx-auto mb-8">
//           <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-[0.16em] mb-4">
//             <Sparkles className="w-3.5 h-3.5" />
//             Browse Projects
//           </div>
//           <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white mt-2">
//             Our Recent{' '}
//             <span className="bg-gradient-to-r from-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent">
//               Work
//             </span>
//           </h2>
//         </div>
        
//         {/* Animated Filter Navigation (Domain Masteries Style Shared Pill) */}
//         <div className="flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md max-w-fit mx-auto mb-10">
//           {filters.map((filter) => {
//             const isActive = activeFilter === filter;
//             return (
//               <button 
//                 key={filter} 
//                 onClick={() => setActiveFilter(filter)}
//                 className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer select-none ${
//                   isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
//                 }`}
//               >
//                 {/* Active Sliding Background Pill */}
//                 {isActive && (
//                   <motion.div
//                     layoutId="activeFilterTab"
//                     className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-[0_0_20px_rgba(37,99,235,0.45)] border border-blue-400/30"
//                     transition={{
//                       type: "spring",
//                       stiffness: 400,
//                       damping: 30
//                     }}
//                   />
//                 )}

//                 {/* Button Label Text */}
//                 <span className="relative z-10">{filter}</span>
//               </button>
//             );
//           })}
//         </div>
        
//         {/* 4-Card Responsive Grid (1 col on mobile, 2 on tablet, 4 on desktop) */}
//         <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
//           <AnimatePresence>
//             {filteredProjects.map((project) => (
//               <PravaahUniqueCard key={project.id} project={project} />
//             ))}
//           </AnimatePresence>
          
//           {filteredProjects.length === 0 && (
//             <div className="col-span-full py-12 text-center text-slate-400">
//               No projects found for this category.
//             </div>
//           )}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ProjectShowcaseGrid;