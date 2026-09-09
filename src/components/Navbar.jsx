import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronRight, Home, Info, Briefcase, 
  Cpu, Layers, Factory, Award, Users, BookOpen, 
  Mail, PhoneCall, Sparkles 
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logoDark from '../assets/logo/Logo Horizontal Light Transparent.png';
import logoLight from '../assets/logo/Logo Horizontal Light Transparent.png';

const navLinks = [
  { name: 'Home', path: '/', icon: Home, desc: 'Overview & Highlights' },
  { name: 'About Us', path: '/about', icon: Info, desc: 'Our Mission & Vision' },
  { name: 'Services', path: '/services', icon: Briefcase, desc: 'What We Deliver' },
  { name: 'Projects', path: '/projects', icon: Layers, desc: 'Case Studies' },
  { name: 'Contact', path: '/contact', icon: Mail, desc: 'Get in Touch' },
  // { name: 'Industries', path: '/industries', icon: Factory, desc: 'Domains We Serve' },
  // { name: 'Why Pravaah', path: '/why-pravaah', icon: Award, desc: 'Our Core Value' },
  // { name: 'Careers', path: '/careers', icon: Users, desc: 'Join Our Team', badge: 'Hiring' },
  // { name: 'Blog', path: '/blog', icon: BookOpen, desc: 'Insights & Updates' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Main Desktop & Header Bar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? 'py-2 lg:py-4' 
            : 'py-4 lg:py-6'
        }`}
      >
        <div className="container mx-auto px-5 md:px-8">
          <div className={`flex items-center justify-between relative transition-all duration-500 rounded-2xl ${
            isScrolled 
              ? 'bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.08)] px-4 lg:px-6 py-2' 
              : 'bg-transparent border border-transparent px-0 py-2'
          }`}>
            
            {/* Logo */}
            <Link className="flex items-center relative" to="/" onClick={() => setIsOpen(false)}>
              <img 
                src={isScrolled ? logoLight : logoDark} 
                alt="Pravaah Technology" 
                className={`w-auto object-contain transition-all duration-500 ${
                  isScrolled ? 'h-14 lg:h-16' : 'h-16 lg:h-20'
                }`} 
              />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.path || (location.pathname.startsWith(link.path) && link.path !== '/');
                return (
                  <Link 
                    key={i}
                    to={link.path}
                    className="relative group px-2.5 xl:px-3 py-2 text-[13px] xl:text-sm font-semibold whitespace-nowrap transition-colors duration-300"
                  >
                    <span className={`relative z-10 transition-colors duration-300 ${isActive ? 'text-blue-600' : 'text-slate-600 group-hover:text-blue-600'}`}>
                      {link.name}
                    </span>
                    {isActive && (
                      <motion.div 
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-gradient-to-r from-blue-600 to-cyan-500 rounded-t-full shadow-[0_-2px_10px_rgba(37,99,235,0.4)]"
                        initial={false}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    {!isActive && (
                      <div className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-slate-300 -translate-x-1/2 group-hover:w-[calc(100%-1.5rem)] transition-all duration-300 ease-out rounded-t-full" />
                    )}
                  </Link>
                );
              })}
            </div>
            
            {/* Desktop CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Link 
                className="hidden lg:inline-flex relative overflow-hidden group px-5 xl:px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-[13px] xl:text-sm font-bold text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap" 
                to="/contact"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get a Quote
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              
              <button 
                className={`lg:hidden p-2.5 rounded-xl border transition-all duration-200 ${
                  isScrolled ? 'bg-slate-100 text-slate-800 hover:bg-slate-200 border-slate-200' : 'bg-white/70 backdrop-blur-md text-slate-800 hover:bg-white/90 border-white/60 shadow-sm'
                }`} 
                onClick={() => setIsOpen(true)}
                aria-label="Open Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Light Theme Clean Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[999] lg:hidden">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Drawer Panel */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute top-0 right-0 h-full w-[88%] sm:w-[390px] bg-white text-slate-800 shadow-2xl flex flex-col justify-between border-l border-slate-100"
            >
              {/* Drawer Top Header (Logo Overlay Fix) */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-slate-50/50">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Navigation Menu</span>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                  aria-label="Close Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Nav Links */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1.5">
                {navLinks.map((link, i) => {
                  const Icon = link.icon;
                  const isActive = location.pathname === link.path || (location.pathname.startsWith(link.path) && link.path !== '/');
                  
                  return (
                    <motion.div
                      key={i}
                      initial={{ x: 25, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.03 + 0.05, duration: 0.2 }}
                    >
                      <Link 
                        onClick={() => setIsOpen(false)} 
                        to={link.path}
                        className={`group flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                          isActive 
                            ? 'bg-blue-50/80 text-blue-700 font-semibold border border-blue-100 shadow-sm' 
                            : 'hover:bg-slate-50 text-slate-700 hover:text-blue-600'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg transition-colors ${
                            isActive 
                              ? 'bg-blue-600 text-white' 
                              : 'bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-600'
                          }`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="text-left">
                            <p className="text-sm font-semibold leading-tight">{link.name}</p>
                            <p className={`text-[11px] mt-0.5 ${isActive ? 'text-blue-500' : 'text-slate-400'}`}>
                              {link.desc}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          {link.badge && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
                              {link.badge}
                            </span>
                          )}
                          <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${
                            isActive ? 'text-blue-600' : 'text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5'
                          }`} />
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
              
              {/* Drawer Bottom Actions */}
              <div className="p-5 border-t border-slate-100 bg-slate-50/40">
                <Link 
                  onClick={() => setIsOpen(false)} 
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-sm font-bold text-white shadow-md shadow-blue-500/25 active:scale-[0.98] transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Start Your Project</span>
                </Link>

                <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-slate-200/60">
                  <a 
                    href="mailto:info@pravaah.com" 
                    className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-white border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/30 text-xs font-medium text-slate-600 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-blue-600" />
                    <span>Email Us</span>
                  </a>
                  <a 
                    href="tel:+910000000000" 
                    className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-white border border-slate-200/80 hover:border-emerald-300 hover:bg-emerald-50/30 text-xs font-medium text-slate-600 transition-colors"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Call Us</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;