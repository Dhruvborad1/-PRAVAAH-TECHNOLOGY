import React from 'react';
import { Check, Sparkles, Clock, Zap, ShieldCheck } from 'lucide-react';

import ServiceHeroImg from '../assets/Service 24_7-amico.png';
import TechMarquee from './Servicespage/TechMarquee';
import WebDevelopment from './Servicespage/WebDevelopment';
import AppDevelopment from './Servicespage/AppDevelopment';
import UIUXDesign from './Servicespage/UIUXDesign';
import AIAutomation from './Servicespage/AIAutomation';
import ServicesCTASection from './Servicespage/ServicesCTASection';

const ServicesHeroSection = () => {
  return (
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

          {/* LEFT COLUMN: HERO COPY (Same baseline as Home & About) */}
          <div className="hero-copy max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            {/* Pill Badge - Fixed height & exact margins */}
            <div className="hero-rise mb-6 inline-flex h-9 items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 text-xs font-bold uppercase tracking-[0.16em] text-blue-700 shadow-sm backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-cyan-500" /> Comprehensive IT Solutions
            </div>

            {/* Main Title Heading */}
            <h1 className="hero-rise hero-rise-delay-1 font-display text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
              High-impact services that drive your digital <span className="pravaah-gradient-text">growth.</span>
            </h1>

            {/* Description Subtext */}
            <p className="hero-rise hero-rise-delay-2 mt-6 max-w-xl mx-auto lg:mx-0 text-base leading-8 text-slate-600 sm:text-lg">
              End-to-end engineering, cloud architecture, and modern product design crafted to scale your business operations and accelerate market delivery.
            </p>

            {/* Feature Checklist */}
            <div className="hero-rise hero-rise-delay-3 mt-10 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-sm font-semibold text-slate-600">
              {['24/7 Availability', 'Cloud-Native Delivery', 'Full-Cycle Support'].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-blue-600" /> {item}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: IMAGE WITH TIGHT FLOATING LABELS */}
          <div className="relative mx-auto w-full max-w-[30rem] lg:max-w-[36rem] flex items-center justify-center">
            <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-20 flex items-center gap-2 rounded-xl border border-blue-100/80 bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-700 shadow-md shadow-blue-100/60 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>24/7 Support</span>
            </div>

            <div className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20 flex items-center gap-1.5 rounded-xl border border-blue-100/80 bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-700 shadow-md shadow-blue-100/60 backdrop-blur-md">
              <Clock className="h-3.5 w-3.5 text-blue-600" />
              <span>Rapid Response</span>
            </div>

            <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 z-20 flex items-center gap-1.5 rounded-xl border border-blue-100/80 bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-700 shadow-md shadow-blue-100/60 backdrop-blur-md">
              <Zap className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
              <span>99.9% Uptime</span>
            </div>

            <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 z-20 flex items-center gap-1.5 rounded-xl border border-blue-100/80 bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-700 shadow-md shadow-blue-100/60 backdrop-blur-md">
              <ShieldCheck className="h-4 w-4 text-cyan-500" />
              <span>SLA Guaranteed</span>
            </div>

            <img
              src={ServiceHeroImg}
              alt="Pravaah Technologies 24/7 Service Solutions"
              className="relative z-10 w-full h-auto object-contain select-none transition-transform duration-700 hover:scale-[1.01]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

const ServicesPage = () => {
  return (
    <>
      <ServicesHeroSection />
      <TechMarquee />
      <WebDevelopment />
      <AppDevelopment />
      <UIUXDesign />
      <AIAutomation />
      <ServicesCTASection />
    </>
  );
};

export default ServicesPage;