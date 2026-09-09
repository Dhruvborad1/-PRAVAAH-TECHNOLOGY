import React from 'react';
import { Award, Globe, Users, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const featuresData = [
  {
    number: '01',
    icon: Award,
    title: 'Expert Team',
    description:
      'A passionate team of designers, developers and strategists brings practical expertise to every project.',
    iconColor: '#2563EB',
  },
  {
    number: '02',
    icon: Globe,
    title: 'Flexible Collaboration',
    description:
      'We adapt to your tools, workflows and communication style to keep every project aligned.',
    iconColor: '#06B6D4',
  },
  {
    number: '03',
    icon: Users,
    title: 'Client-Centric',
    description:
      'We work as your technology partner, understanding your goals and building around your real business needs.',
    iconColor: '#7C3AED',
  },
  {
    number: '04',
    icon: Layers,
    title: 'Full-Stack Expertise',
    description:
      'From frontend and backend to mobile, cloud and modern technologies, we handle the complete digital stack.',
    iconColor: '#2563EB',
  },
];

// એનિમેશન વેરિઅન્ટ્સ
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18, // દરેક કાર્ડ વચ્ચે ક્રમશઃ ગેપ
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // સ્મૂથ કસ્ટમ ક્યૂબિક બેઝિયર ઇઝિંગ
    },
  },
};

const Features = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FAFF] to-white py-16 md:py-28">
      {/* Background Decorative Flow & Ambient Accents */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
        {/* Soft Radial Glows */}
        <div className="absolute -top-24 left-1/2 h-[500px] w-[750px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-violet-500/10 blur-3xl" />
        <div className="absolute -bottom-20 right-10 h-72 w-72 rounded-full bg-blue-400/5 blur-2xl" />

        {/* Subtle Decorative Geometric Accents */}
        <div className="absolute left-[8%] top-24 h-2 w-2 rounded-sm bg-blue-500/20 rotate-12" />
        <div className="absolute right-[10%] top-36 h-2.5 w-2.5 rounded-sm bg-purple-500/20 -rotate-45" />
        <div className="absolute left-[15%] bottom-20 h-16 w-16 rounded-full border border-blue-200/40" />

        {/* Animated Pravaah Flowing Wave Vector */}
        <motion.svg
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 0.35, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute left-1/2 top-1/2 h-[340px] w-full max-w-7xl -translate-x-1/2 -translate-y-1/2"
          viewBox="0 0 1200 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M 0 160 C 200 80 400 220 600 130 C 800 40 1000 190 1200 100"
            stroke="url(#flow-gradient)"
            strokeWidth="2"
            strokeDasharray="6 8"
          />
          <path
            d="M 0 190 C 250 110 450 240 650 160 C 850 80 1050 210 1200 130"
            stroke="url(#flow-gradient)"
            strokeWidth="1.2"
            strokeOpacity="0.5"
          />
          <defs>
            <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="50%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section Animation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="section-label mb-4">
            <span className="section-label-text">Why Pravaah</span>
          </div>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-[#071536]">
            Why Businesses Choose{' '}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
              Pravaah Technology
            </span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-[#64748B] sm:text-lg">
            We combine technology, creativity and business thinking to build digital solutions that create lasting value.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="relative mt-16 md:mt-20">
          {/* Desktop Connecting Line with Draw Animation */}
          <div
            className="pointer-events-none absolute top-1/2 left-0 hidden w-full -translate-y-1/2 items-center justify-between px-16 lg:flex"
            aria-hidden="true"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: 'easeInOut' }}
              className="relative h-[2px] w-full origin-left bg-gradient-to-r from-[#06B6D4] via-[#2563EB] to-[#7C3AED] opacity-30"
            >
              <span className="absolute -top-1 left-1/4 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-white bg-[#06B6D4] shadow-sm" />
              <span className="absolute -top-1 left-2/4 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-white bg-[#2563EB] shadow-sm" />
              <span className="absolute -top-1 left-3/4 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-white bg-[#7C3AED] shadow-sm" />
            </motion.div>
          </div>

          {/* Staggered Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
          >
            {featuresData.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.number}
                  variants={cardVariants}
                  whileHover={{ y: -6 }}
                  className="group relative flex flex-col justify-between rounded-[24px] border border-[#D9E2F2] bg-white/85 p-7 shadow-[0_12px_40px_rgba(37,99,235,0.06)] backdrop-blur-md transition-shadow duration-300 hover:border-[#93C5FD] hover:shadow-[0_20px_45px_rgba(37,99,235,0.12)]"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold tracking-wider text-[#94A3B8]">
                        {feature.number}
                      </span>
                      <div className="h-1.5 w-1.5 rounded-full bg-slate-300 opacity-60 transition-colors duration-300 group-hover:bg-[#2563EB]" />
                    </div>

                    <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D9E2F2] bg-gradient-to-br from-[#EFF6FF] to-[#F5F3FF] shadow-sm transition-all duration-300 group-hover:border-[#BFDBFE] group-hover:from-white group-hover:to-[#EFF6FF] group-hover:shadow-md">
                      <Icon
                        className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: feature.iconColor }}
                        strokeWidth={2}
                      />
                    </div>

                    <h3 className="mt-6 text-lg font-bold text-[#071536]">
                      {feature.title}
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-[#64748B]">
                      {feature.description}
                    </p>
                  </div>

                  <div className="mt-6 h-0.5 w-0 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] transition-all duration-300 group-hover:w-12" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center md:mt-20"
        >
          <p className="text-base font-medium text-[#0B1B45]">
            Technology that flows with your business.
          </p>
          <p className="mt-1 text-xs font-medium uppercase tracking-widest text-[#94A3B8]">
            Innovation &bull; Collaboration &bull; Quality &bull; Growth
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;