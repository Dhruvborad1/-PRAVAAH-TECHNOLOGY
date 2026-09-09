import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import {
  ArrowRight,
  Lightbulb,
  Heart,
  Award,
  TrendingUp,
  ShieldCheck,
  Layers,
  Code2,
  CheckCircle2,
  Building2,
  Sparkles
} from 'lucide-react';
import aboutImage from '../assets/ABOUT US.png';

// પ્રીસાઇઝ કાઉન્ટર એનિમેશન
const AnimatedCounter = ({ value, suffix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const motionVal = useMotionValue(0);
  const springVal = useSpring(motionVal, { damping: 30, stiffness: 100, duration: 2 });

  useEffect(() => {
    if (isInView) motionVal.set(value);
  }, [isInView, value, motionVal]);

  useEffect(() => {
    return springVal.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
  }, [springVal, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

const About = () => {
  const imageCardRef = useRef(null);

  const handleImagePointerMove = (event) => {
    if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !imageCardRef.current) return;

    const bounds = imageCardRef.current.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    const card = imageCardRef.current;

    card.style.setProperty('--card-rotate-x', `${y * -4}deg`);
    card.style.setProperty('--card-rotate-y', `${x * 4}deg`);
    card.style.setProperty('--image-shift-x', `${x * -8}px`);
    card.style.setProperty('--image-shift-y', `${y * -8}px`);
    card.style.setProperty('--reflection-x', `${(x + 0.5) * 100}%`);
    card.style.setProperty('--reflection-y', `${(y + 0.5) * 100}%`);
  };

  const resetImagePointer = () => {
    if (!imageCardRef.current) return;

    imageCardRef.current.style.setProperty('--card-rotate-x', '0deg');
    imageCardRef.current.style.setProperty('--card-rotate-y', '0deg');
    imageCardRef.current.style.setProperty('--image-shift-x', '0px');
    imageCardRef.current.style.setProperty('--image-shift-y', '0px');
    imageCardRef.current.style.setProperty('--reflection-x', '50%');
    imageCardRef.current.style.setProperty('--reflection-y', '50%');
  };

  const cards = [
    {
      id: '01',
      icon: <Code2 className="w-5 h-5 text-blue-600" />,
      title: 'Innovation First',
      desc: 'We continuously explore better ideas, modern architectures, and emerging technologies to build high-performance products.'
    },
    {
      id: '02',
      icon: <Building2 className="w-5 h-5 text-indigo-600" />,
      title: 'Client Focused',
      desc: 'We build digital solutions engineered around the core business objectives, workflow needs, and ROI of our clients.'
    },
    {
      id: '03',
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
      title: 'Quality Driven',
      desc: 'We enforce rigorous testing, clean code principles, and reliable infrastructure to ensure enterprise-grade stability.'
    },
    {
      id: '04',
      icon: <Layers className="w-5 h-5 text-indigo-600" />,
      title: 'Built for Growth',
      desc: 'We build scalable cloud architecture designed to seamlessly adapt and grow alongside your growing enterprise.'
    }
  ];

  const enterpriseHighlights = [
    { title: 'End-to-End Delivery', desc: 'From architecture & UI/UX to cloud deployment.' },
    { title: 'Modern Tech Stack', desc: 'React, Node, scalable APIs, and robust databases.' },
    { title: 'Secure & Compliant', desc: 'Built with industry-standard data & security protocols.' }
  ];

  const stats = [
    { value: 50, suffix: '+', label: 'Projects Delivered', desc: 'Successfully deployed across industries' },
    { value: 25, suffix: '+', label: 'Happy Clients', desc: 'Long-term enterprise partnerships' },
    { value: 10, suffix: '+', label: 'Digital Solutions', desc: 'Proprietary & customized platforms' },
    { value: 99, suffix: '%', label: 'Client Satisfaction', desc: 'Consistent delivery & SLA adherence' },
  ];

  const values = [
    { label: 'Innovation', tagline: 'Future-Ready Tech', icon: <Lightbulb className="w-4 h-4 text-blue-600" /> },
    { label: 'Integrity', tagline: 'Uncompromised Trust', icon: <Heart className="w-4 h-4 text-rose-500" /> },
    { label: 'Quality', tagline: 'Zero Defect Delivery', icon: <Award className="w-4 h-4 text-amber-500" /> },
    { label: 'Scalability', tagline: 'Enterprise Growth', icon: <TrendingUp className="w-4 h-4 text-emerald-500" /> },
    { label: 'Security', tagline: 'Bank-Grade Compliance', icon: <ShieldCheck className="w-4 h-4 text-indigo-600" /> }
  ];

  return (
    <section className="relative w-full pt-20 pb-12 bg-[#FBFDFF] text-[#1E293B] overflow-hidden font-sans">
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Badge & Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="section-label mb-4">
            <span className="section-label-text">ABOUT US</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-[#0B132B] tracking-tight">
            Turning Ideas Into<span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent"> Digital Solutions</span>
          </h1>
          <p className="mt-4 text-sm md:text-base text-[#64748B] max-w-xl mx-auto leading-relaxed">
            We combine technology, creativity and innovation to build digital experiences that make a real difference.
          </p>
        </motion.div>

        {/* Middle Graphic & Executive Narrative Section */}
        <div className="grid lg:grid-cols-12 gap-10 items-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 relative flex items-center justify-center group p-2 sm:p-4"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 rounded-[2rem] blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none" />

            <div
              ref={imageCardRef}
              onPointerMove={handleImagePointerMove}
              onPointerLeave={resetImagePointer}
              className="about-image-card relative w-full mx-auto rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.08)] p-[4px] overflow-hidden bg-[#E2E8F0] transition-transform duration-300"
            >
              <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_180deg,#3B82F6_240deg,#6366F1_300deg,#8B5CF6_360deg)]" />

              <div className="about-image-viewport relative z-10 w-full h-full rounded-[1.8rem] overflow-hidden bg-white border-[6px] border-white">
                <div className="about-image-reflection pointer-events-none absolute inset-0 z-10 opacity-0" />
                <div className="about-image-sweep pointer-events-none absolute inset-y-0 -left-1/2 z-20 w-1/3 skew-x-[-18deg]" />
                <img
                  src={aboutImage}
                  alt="About Us"
                  className="about-image w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
              <span>COMPANY OVERVIEW</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#0B132B]">
              Delivering reliable software and transformative digital strategies.
            </h2>

            <p className="text-[#475569] text-sm md:text-base leading-relaxed">
              Pravaah Technologies is a technology and digital solutions company focused on helping businesses transform their ideas into modern, scalable and meaningful digital experiences. From websites and applications to UI/UX, software solutions, AI and automation, we combine creativity with technology to deliver solutions built around real business needs.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pt-2 border-y border-slate-200/80 py-4">
              {enterpriseHighlights.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{item.title}</span>
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="/about"
                className="group relative inline-flex items-center gap-3.5 px-8 py-3.5 bg-[#0B132B] text-white text-sm font-semibold rounded-full overflow-hidden transition-all duration-300 shadow-[0_8px_25px_-4px_rgba(11,19,43,0.35)] hover:shadow-[0_12px_30px_-2px_rgba(99,102,241,0.35)] border border-white/10 hover:border-indigo-500/50 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-sky-500/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                <span className="relative z-10 tracking-wide transition-colors duration-300 group-hover:text-white">
                  Learn More About Us
                </span>
                <div className="relative z-10 w-4 h-4 overflow-hidden">
                  <ArrowRight className="w-4 h-4 text-white absolute transition-transform duration-300 ease-out group-hover:translate-x-6 group-hover:opacity-0" />
                  <ArrowRight className="w-4 h-4 text-cyan-400 absolute -translate-x-6 opacity-0 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100" />
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* 4 Professional Pillar Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-7 border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-100">
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold font-mono text-slate-400">
                    PHASE {item.id}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Stats Bar */}
        <div className="bg-slate-50/70 backdrop-blur-sm rounded-2xl border border-slate-200/90 p-3.5 sm:p-6 mb-14 shadow-sm">
          {/* મોબાઇલમાં 2x2 (grid-cols-2) અને ડેસ્કટોપમાં 4 (lg:grid-cols-4) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-3.5 sm:p-5 border border-slate-200/70 hover:border-blue-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                {/* હોવર એક્સેન્ટ લાઇન */}
                <div className="absolute left-0 top-3 bottom-3 w-1 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* કાઉન્ટર નંબર */}
                  <div className="text-2xl sm:text-4xl font-extrabold font-mono tracking-tight text-[#0B132B] group-hover:text-blue-600 transition-colors mb-1 sm:mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>

                  {/* ટાઇટલ લેબલ */}
                  <div className="text-xs sm:text-sm font-bold text-slate-800 mb-0.5 sm:mb-1 leading-tight">
                    {stat.label}
                  </div>

                  {/* ડિસ્ક્રિપ્શન */}
                  <div className="text-[10px] sm:text-xs text-slate-500 leading-relaxed line-clamp-2 sm:line-clamp-none">
                    {stat.desc}
                  </div>
                </div>

                {/* બોટમ ઇન્ડિકેટર */}
                <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] sm:text-[11px] font-medium text-slate-400">
                  <span>Target Metric</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-emerald-500 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ------------------------------------------------------------- */}
      {/* FULL-WIDTH CORPORATE VALUES MARQUEE WITH FRONT BADGE           */}
      {/* ------------------------------------------------------------- */}
      <div className="relative w-full border-y border-slate-200/90 bg-gradient-to-r from-slate-50/95 via-white to-slate-50/95 backdrop-blur-xl py-3.5 sm:py-3 overflow-hidden group select-none shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(0,0,0,0.03)]">

        {/* બેકગ્રાઉન્ડ એમ્બિયન્ટ લાઇટિંગ */}
        <div className="absolute top-0 left-1/3 w-72 h-full bg-blue-400/5 blur-xl pointer-events-none" />

        {/* મેઈન કન્ટેનર: મોબાઈલમાં ફ્લેક્સ-કોલમ (ઉપર લેબલ), ડેસ્કટોપ પર રો (ડાબી બાજુ લેબલ) */}
        <div className="w-full flex flex-col sm:flex-row items-center gap-3 sm:gap-0">

          {/* CORPORATE VALUES LABEL: મોબાઈલમાં સેન્ટર્ડ-ઉપર, ડેસ્કટોપમાં લેફ્ટ-ફિક્સ */}
          <div className="relative z-30 shrink-0 w-full sm:w-auto flex items-center justify-center sm:justify-start px-4 sm:pl-8 sm:pr-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 sm:py-2 rounded-xl bg-[#0B132B] text-white shadow-[0_4px_14px_rgba(11,19,43,0.18)] border border-slate-750/70 transition-transform duration-300">

              {/* લાઇવ પલ્સ ઇન્ડિકેટર */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>

              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.16em] text-slate-100 font-mono whitespace-nowrap">
                Corporate Values
              </span>
            </div>

            {/* ડેસ્કટોપ ડિવાઇડર લાઇન */}
            <div className="hidden sm:block h-7 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent ml-5" />
          </div>

          {/* MARQUEE ટ્રેક એરિયા */}
          <div className="relative w-full flex-1 overflow-hidden">

            {/* સાઇડ સોફ્ટ ફેડ માસ્ક (મોબાઈલ અને ડેસ્કટોપ માટે એડજસ્ટેડ) */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-r from-[#FBFDFF] via-[#FBFDFF]/80 to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#FBFDFF] via-[#FBFDFF]/80 to-transparent z-10" />

            {/* એનિમેટેડ ટ્રેક */}
            <div className="flex items-center overflow-hidden">
              <div className="flex shrink-0 items-center gap-3.5 sm:gap-5 animate-[marquee_25s_linear_infinite] group-hover:[animation-play-state:paused] py-1">
                {[...values, ...values, ...values].map((v, i) => (
                  <div
                    key={i}
                    className="group/item flex items-center gap-2.5 sm:gap-3 pl-2 pr-3.5 sm:pr-4 py-1.5 rounded-full bg-white/90 border border-slate-200/90 shadow-[0_2px_6px_rgba(0,0,0,0.02)] hover:border-blue-400/80 hover:shadow-[0_4px_16px_rgba(37,99,235,0.12)] transition-all duration-300 cursor-pointer"
                  >
                    {/* સોફ્ટ આઇકોન બેજ */}
                    <div className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-slate-100/90 border border-slate-200/60 group-hover/item:bg-blue-600 transition-all duration-300">
                      <span className="group-hover/item:brightness-0 group-hover/item:invert transition-all duration-300 flex items-center justify-center scale-90 sm:scale-100">
                        {v.icon}
                      </span>
                    </div>

                    {/* ટેક્સ્ટ માહિતી */}
                    <div className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
                      <span className="text-xs sm:text-sm font-bold text-slate-800 tracking-tight group-hover/item:text-blue-600 transition-colors">
                        {v.label}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-slate-300 group-hover/item:bg-blue-400" />
                      <span className="text-[10px] sm:text-xs text-slate-500 font-medium">
                        {v.tagline}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Marquee CSS Keyframes */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
};

export default About;