import React from 'react';
import { 
  Check, 
  Sparkles, 
  Layers, 
  Target, 
  Award, 
  TrendingUp, 
  ArrowRight, 
  Star, 
  Users 
} from 'lucide-react';
import { Link } from 'react-router-dom';

import ProjectHeroImg from '../assets/Projections-amico.png';

const ProjectsPage = () => {
  return (
    <>
      {/* ========================================================================= */}
      {/* 1. PROJECTS HERO SECTION (MATCHED EXACT BASELINE & DESIGN SYSTEM)          */}
      {/* ========================================================================= */}
      <section className="hero-light relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Background Mesh Grid */}
        <div className="hero-light-grid absolute inset-0 pointer-events-none" />

        {/* Atmospheric Ambient Glow */}
        <div 
          className="hero-screen-glow absolute left-1/3 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 pointer-events-none" 
          aria-hidden="true" 
        />

        <div className="container relative z-10 mx-auto px-5 md:px-8">
          {/* items-start ensures all pages start copy from the exact vertical top line */}
          <div className="grid items-start gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">

            {/* LEFT COLUMN: HERO COPY (Same baseline as Home, About & Services) */}
            <div className="hero-copy max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
              {/* Pill Badge - Fixed height & exact margins */}
              <div className="hero-rise mb-6 inline-flex h-9 items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 text-xs font-bold uppercase tracking-[0.16em] text-blue-700 shadow-sm backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-cyan-500" /> Featured Portfolio
              </div>

              {/* Main Title Heading */}
              <h1 className="hero-rise hero-rise-delay-1 font-display text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
                Real-world solutions built to scale your digital <span className="pravaah-gradient-text">future.</span>
              </h1>

              {/* Description Subtext */}
              <p className="hero-rise hero-rise-delay-2 mt-6 max-w-xl mx-auto lg:mx-0 text-base leading-8 text-slate-600 sm:text-lg">
                Explore our portfolio of delivered client platforms in web development and enterprise e-commerce. Built with clean code, purposeful design, and measurable results.
              </p>

              {/* Feature Checklist */}
              <div className="hero-rise hero-rise-delay-3 mt-10 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-sm font-semibold text-slate-600">
                {['Production-Ready Code', 'Custom Architecture', '100% On-Time Delivery'].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-600" /> {item}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: TRANSPARENT IMAGE DISPLAY WITH 4 TIGHT FLOATING BADGES */}
            <div className="relative mx-auto w-full max-w-[30rem] lg:max-w-[36rem] flex items-center justify-center">
              
              {/* 1. Top-Left Badge */}
              <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-20 flex items-center gap-2 rounded-xl border border-blue-100/80 bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-700 shadow-md shadow-blue-100/60 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>50+ Projects Shipped</span>
              </div>

              {/* 2. Top-Right Badge */}
              <div className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20 flex items-center gap-1.5 rounded-xl border border-blue-100/80 bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-700 shadow-md shadow-blue-100/60 backdrop-blur-md">
                <Target className="h-3.5 w-3.5 text-blue-600" />
                <span>100% Delivery Rate</span>
              </div>

              {/* 3. Bottom-Left Badge */}
              <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 z-20 flex items-center gap-1.5 rounded-xl border border-blue-100/80 bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-700 shadow-md shadow-blue-100/60 backdrop-blur-md">
                <Award className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                <span>Top Rated Work</span>
              </div>

              {/* 4. Bottom-Right Badge */}
              <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 z-20 flex items-center gap-1.5 rounded-xl border border-blue-100/80 bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-700 shadow-md shadow-blue-100/60 backdrop-blur-md">
                <TrendingUp className="h-3.5 w-3.5 text-cyan-500" />
                <span>High Performance</span>
              </div>

              {/* Pure Project Hero Image */}
              <img
                src={ProjectHeroImg}
                alt="Pravaah Technologies Featured Projects"
                className="relative z-10 w-full h-auto object-contain select-none transition-transform duration-700 hover:scale-[1.01]"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. STATS BANNER                                                           */}
      {/* ========================================================================= */}
      <section className="py-16 bg-slate-50/70 border-y border-slate-100">
        <div className="container mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-blue-600">50+</div>
              <div className="text-sm font-semibold text-slate-500 mt-1">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-blue-600">30+</div>
              <div className="text-sm font-semibold text-slate-500 mt-1">Clients Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-blue-600">10+</div>
              <div className="text-sm font-semibold text-slate-500 mt-1">Industries Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-blue-600">100%</div>
              <div className="text-sm font-semibold text-slate-500 mt-1">Delivered On Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. PROJECT SHOWCASE GRID                                                  */}
      {/* ========================================================================= */}
      <section className="section-padding py-24">
        <div className="container mx-auto px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.16em]">Browse Projects</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mt-2">Our Recent Work</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button className="px-5 py-2.5 rounded-xl text-sm font-bold transition-all bg-blue-600 text-white shadow-sm">All</button>
            <button className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600">Web Development</button>
            <button className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600">Mobile Apps</button>
            <button className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600">Cloud Solutions</button>
            <button className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600">UI/UX Design</button>
            <button className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600">Digital Marketing</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
              <div className="h-56 overflow-hidden relative bg-slate-100 flex items-center justify-center">
                <span className="text-slate-400 font-medium">Powerex Image Placeholder</span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs text-blue-600 font-bold uppercase tracking-wider">Web Development</span>
                <h3 className="font-display text-lg font-bold text-slate-900 mt-1">B2B E-Commerce Platform</h3>
                <p className="text-xs text-slate-500 mt-1 font-medium">Client: Powerex Petrochem</p>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed flex-grow">
                  Custom online ordering platform for petrochemical products with secure payments, role-based access, and an admin panel to track quotes and orders in real time.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {['React', 'Next.js', 'Node.js', 'PostgreSQL'].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 bg-slate-50 border border-slate-200/60 text-slate-700 text-xs rounded-lg font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
              <div className="h-56 overflow-hidden relative bg-slate-100 flex items-center justify-center">
                <span className="text-slate-400 font-medium">ShippingDrop Image Placeholder</span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs text-blue-600 font-bold uppercase tracking-wider">Web Development</span>
                <h3 className="font-display text-lg font-bold text-slate-900 mt-1">Logistics E-Commerce Website</h3>
                <p className="text-xs text-slate-500 mt-1 font-medium">Client: ShippingDrop</p>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed flex-grow">
                  Customer-facing website for booking shipping services, managing orders, and tracking deliveries with automated email updates.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {['React', 'Next.js', 'Node.js', 'PostgreSQL'].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 bg-slate-50 border border-slate-200/60 text-slate-700 text-xs rounded-lg font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. TRUSTED CLIENTS                                                        */}
      {/* ========================================================================= */}
      <section className="section-padding bg-slate-50/70 py-20 border-y border-slate-100">
        <div className="container mx-auto px-5 md:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.16em]">Trusted By</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mt-2">Our Valued Clients</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="px-8 py-4 bg-white border border-slate-200 rounded-xl shadow-sm">
              <span className="font-display font-bold text-slate-700">Powerex Petrochem</span>
            </div>
            <div className="px-8 py-4 bg-white border border-slate-200 rounded-xl shadow-sm">
              <span className="font-display font-bold text-slate-700">ShippingDrop</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CLIENT TESTIMONIALS                                                    */}
      {/* ========================================================================= */}
      <section className="section-padding py-24">
        <div className="container mx-auto px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.16em]">Client Feedback</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mt-2">What Clients Say About Our Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-slate-200/80 p-8 h-full flex flex-col shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed italic flex-grow">
                "Pravaah Technology helped us move our B2B sales online with a fast, easy-to-use platform. The team was responsive and handled everything from design to deployment."
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-display font-bold text-slate-900 text-sm">Pushpak Goti</p>
                  <p className="text-slate-500 text-xs">CEO, Powerex Petrochem</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl border border-slate-200/80 p-8 h-full flex flex-col shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed italic flex-grow">
                "From the first call to launch, Pravaah Technology handled our website professionally. The new site is simple for our team to manage and easy for our customers to use."
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-display font-bold text-slate-900 text-sm">Gausiya Fatima</p>
                  <p className="text-slate-500 text-xs">Founder, ShippingDrop</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. CALL TO ACTION                                                         */}
      {/* ========================================================================= */}
      <section className="section-padding pb-24">
        <div className="container mx-auto px-5 md:px-8">
          <div className="pravaah-btn-primary rounded-3xl p-12 md:p-16 text-center text-white shadow-xl shadow-blue-500/10">
            <h2 className="font-display text-3xl md:text-4xl font-bold">Have a Project in Mind?</h2>
            <p className="text-blue-100 mt-4 max-w-xl mx-auto leading-relaxed">
              Let's turn your idea into a successful digital product. Get a free project consultation and estimate today.
            </p>
            <Link className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-slate-50 transition-colors shadow-lg" to="/contact">
              Start Your Project <ArrowRight className="w-[18px] h-[18px]" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;