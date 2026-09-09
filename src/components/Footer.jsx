import React from 'react';
import { ArrowUpRight, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PravaahLogo from '../assets/logo/Logo PNG Icon copy.png';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7 }}
      className="relative overflow-hidden border-t border-cyan-500/20 bg-[#070c1e] text-slate-100 font-sans selection:bg-cyan-400 selection:text-[#070c1e]"
    >
      {/* ================= PRAVAAH BRAND BACKGROUND SYSTEM ================= */}
      
      {/* 1. Ambient Lighting Glowing Orbs */}
      <div className="pointer-events-none absolute top-[-20%] left-[-10%] h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-purple-600/15 blur-[150px]" />
      <div className="pointer-events-none absolute top-1/2 left-1/3 h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[130px]" />

      {/* 2. Top Border Flow Gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 via-blue-500 to-transparent opacity-80" />

      {/* 3. Pravaah Curved Wave Lines */}
      <div className="pointer-events-none absolute inset-0 opacity-20 overflow-hidden">
        <svg viewBox="0 0 1440 450" fill="none" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="footerPravaahWave" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d2ff" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <path
            d="M-50,220 C250,80 550,380 950,150 C1150,50 1350,220 1500,120"
            stroke="url(#footerPravaahWave)"
            strokeWidth="2.5"
            strokeDasharray="6 6"
          />
          <path
            d="M-50,270 C270,130 570,430 970,200 C1170,100 1370,270 1520,170"
            stroke="url(#footerPravaahWave)"
            strokeWidth="1.5"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* 4. Pravaah Floating Pixel Accents */}
      <motion.div 
        animate={{ y: [-6, 6, -6], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-16 right-[22%] w-2.5 h-2.5 rounded-sm bg-purple-500 shadow-[0_0_10px_#a855f7] hidden md:block" 
      />
      <motion.div 
        animate={{ y: [6, -6, 6], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="pointer-events-none absolute top-28 right-[15%] w-2 h-2 rounded-sm bg-cyan-400 shadow-[0_0_8px_#22d3ee] hidden md:block" 
      />
      <motion.div 
        animate={{ y: [-5, 5, -5], opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute bottom-24 left-[10%] w-2.5 h-2.5 rounded-sm bg-blue-400 shadow-[0_0_8px_#38bdf8] hidden md:block" 
      />

      {/* ================= FOOTER CONTENT ================= */}

      <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Info */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-xl shadow-cyan-500/20 p-2">
                <img src={PravaahLogo} alt="Pravaah Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                PRAVAAH <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-medium text-sm block tracking-widest -mt-1">TECHNOLOGY</span>
              </span>
            </div>

            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              Transforming businesses through innovative digital solutions, scalable architectures, and next-gen technology.
            </p>

            <div className="pt-2">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-4 py-2.5 text-sm font-semibold text-cyan-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-1 text-cyan-200" />
              </Link>
            </div>
          </motion.div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-5 border-l-2 border-cyan-400 pl-2.5">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2.5">
              {[
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Projects', path: '/projects' },
                { name: 'Careers', path: '/careers' },
                { name: 'Contact', path: '/contact' },
                { name: 'Privacy Policy', path: '/privacy-policy' },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="group flex w-fit items-center text-sm text-slate-400 transition-all duration-300 hover:text-cyan-300"
                >
                  <ArrowRight className="mr-0 h-3.5 w-0 opacity-0 transition-all duration-300 ease-out group-hover:mr-2 group-hover:w-3.5 group-hover:opacity-100 group-hover:translate-x-0.5 text-cyan-300" />
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-5 border-l-2 border-blue-500 pl-2.5">
              Services
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-slate-400">
              {[
                'Web & App Development',
                'UI/UX & Graphic Design',
                'AI & Automation Solutions',
                'Custom Software Development',
                'Digital Business Platforms',
                'Cloud & DevOps',
              ].map((service) => (
                <Link
                  key={service}
                  to="/services"
                  className="group flex w-fit items-center transition-all duration-300 hover:text-cyan-300"
                >
                  <ArrowRight className="mr-0 h-3.5 w-0 opacity-0 transition-all duration-300 ease-out group-hover:mr-2 group-hover:w-3.5 group-hover:opacity-100 group-hover:translate-x-0.5 text-cyan-300" />
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">{service}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Connect & Social */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-5 border-l-2 border-purple-500 pl-2.5">
              Let's Connect
            </h4>
            <div className="flex flex-col gap-3.5 text-sm text-slate-400">
              
              <a href="mailto:support@pravaahtechnology.in" className="group flex items-center gap-2.5 transition-colors hover:text-cyan-300">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0d1530] border border-slate-700/60 text-cyan-300 group-hover:border-cyan-400 transition-colors">
                  <Mail className="h-3.5 w-3.5" />
                </div>
                <span>support@pravaahtechnology.in</span>
              </a>

              <a href="tel:+918449274276" className="group flex items-center gap-2.5 transition-colors hover:text-cyan-300">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0d1530] border border-slate-700/60 text-cyan-300 group-hover:border-cyan-400 transition-colors">
                  <Phone className="h-3.5 w-3.5" />
                </div>
                <span>+91 8449274276</span>
              </a>

              <div className="group flex items-start gap-2.5 transition-colors hover:text-slate-300">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0d1530] border border-slate-700/60 text-purple-300 shrink-0 mt-0.5">
                  <MapPin className="h-3.5 w-3.5" />
                </div>
                <span className="text-xs leading-relaxed">Amina Nagar, Padri Bazar, Gorakhpur - 273014</span>
              </div>

              {/* Social Icons */}
              <div className="mt-3 flex items-center gap-2.5">
                <a
                  href="https://www.instagram.com/webfisher75?igsh=cjI1aGJiNG54ejBs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-9 w-9 items-center justify-center rounded-xl border border-slate-700/70 bg-[#0d1530] text-slate-400 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-md hover:shadow-cyan-500/20"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:scale-110">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>

                <a
                  href="https://www.facebook.com/share/1WFHn3aFML/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-9 w-9 items-center justify-center rounded-xl border border-slate-700/70 bg-[#0d1530] text-slate-400 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:text-blue-300 hover:shadow-md hover:shadow-blue-500/20"
                  aria-label="Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:scale-110">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/company/webfisher"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-9 w-9 items-center justify-center rounded-xl border border-slate-700/70 bg-[#0d1530] text-slate-400 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-400 hover:text-purple-300 hover:shadow-md hover:shadow-purple-500/20"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:scale-110">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col gap-3 border-t border-slate-800/80 pt-8 text-center text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Pravaah Technology. All rights reserved.</p>
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-1.5 transition-colors duration-300 hover:text-cyan-300 text-slate-400"
          >
            <span>Let's create what's next</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

      </div>
    </motion.footer>
  );
};

export default Footer;