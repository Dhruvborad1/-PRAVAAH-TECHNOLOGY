import React from 'react';
import { 
  Check, 
  Sparkles, 
  Target, 
  Award, 
  TrendingUp
} from 'lucide-react';

import ProjectHeroImg from '../assets/Projections-amico.png';
import ProjectStatsBanner from './project/ProjectStatsBanner';
import ProjectShowcaseGrid from './project/ProjectShowcaseGrid';
import ProjectClientTestimonials from './project/ProjectClientTestimonials';
import ProjectCTASection from './project/ProjectCTASection';

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

      <ProjectStatsBanner />
      <ProjectShowcaseGrid />
      <ProjectClientTestimonials />
      <ProjectCTASection />
    </>
  );
};

export default ProjectsPage;