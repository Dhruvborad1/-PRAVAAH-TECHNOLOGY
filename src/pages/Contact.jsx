import React from 'react';
import {
  Check,
  Sparkles,
  MessageSquare,
  ShieldCheck,
  Zap
} from 'lucide-react';
import ContactHeroImg from '../assets/Contact us-rafiki.png';

import ContactInfo from './contact/ContactInfo';
import InquiryForm from './contact/InquiryForm';
import FaqSection from './contact/FaqSection';
import LocationSection from './contact/LocationSection';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      
      {/* ===================================================================== */}
      {/* SECTION 1: CONTACT HERO SECTION                                       */}
      {/* ===================================================================== */}
      <section 
        className="hero-light relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24"
        aria-label="Contact Hero"
      >
        {/* Ambient Grid & Lighting */}
        <div className="hero-light-grid absolute inset-0 pointer-events-none" />
        <div
          className="hero-screen-glow absolute left-1/3 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 pointer-events-none"
          aria-hidden="true"
        />

        <div className="container relative z-10 mx-auto px-5 md:px-8">
          <div className="grid items-start gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">

            {/* --- Left Column: Hero Editorial Copy --- */}
            <div className="hero-copy max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
              
              {/* Editorial Pill Badge */}
              <div className="hero-rise mb-6 inline-flex h-9 items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 text-xs font-bold uppercase tracking-[0.16em] text-blue-700 shadow-sm backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-cyan-500" /> Start a Conversation
              </div>

              {/* Main Headline */}
              <h1 className="hero-rise hero-rise-delay-1 font-display text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
                Let’s build something clear, scalable, and <span className="pravaah-gradient-text">impactful.</span>
              </h1>

              {/* Description Paragraph */}
              <p className="hero-rise hero-rise-delay-2 mt-6 max-w-xl mx-auto lg:mx-0 text-base leading-8 text-slate-600 sm:text-lg">
                Have a project in mind, need technical advisory, or want to discuss enterprise solutions? Reach out directly and let's map out the next steps for your digital growth.
              </p>

              {/* Assurance Feature Badges */}
              <div className="hero-rise hero-rise-delay-3 mt-10 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-sm font-semibold text-slate-600">
                {['24-Hour Response Window', 'Direct Tech Consultation', 'Clear Project Estimates'].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-600" /> {item}
                  </span>
                ))}
              </div>
            </div>

            {/* --- Right Column: Hero Art & 4 Floating Status Tags --- */}
            <div className="relative mx-auto w-full max-w-[30rem] lg:max-w-[36rem] flex items-center justify-center">

              {/* Tag 1: Quick Response */}
              <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-20 flex items-center gap-2 rounded-xl border border-blue-100/80 bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-700 shadow-md shadow-blue-100/60 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Quick Response</span>
              </div>

              {/* Tag 2: Active Inquiry */}
              <div className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20 flex items-center gap-1.5 rounded-xl border border-blue-100/80 bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-700 shadow-md shadow-blue-100/60 backdrop-blur-md">
                <MessageSquare className="h-3.5 w-3.5 text-blue-600" />
                <span>Active Inquiry</span>
              </div>

              {/* Tag 3: Direct Expert Access */}
              <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 z-20 flex items-center gap-1.5 rounded-xl border border-blue-100/80 bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-700 shadow-md shadow-blue-100/60 backdrop-blur-md">
                <Zap className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                <span>Direct Expert Access</span>
              </div>

              {/* Tag 4: NDA Protected */}
              <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 z-20 flex items-center gap-1.5 rounded-xl border border-blue-100/80 bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-700 shadow-md shadow-blue-100/60 backdrop-blur-md">
                <ShieldCheck className="h-4 w-4 text-cyan-500" />
                <span>NDA Protected</span>
              </div>

              {/* Main Artwork */}
              <img
                src={ContactHeroImg}
                alt="Contact Pravaah Technologies"
                className="relative z-10 w-full h-auto object-contain select-none transition-transform duration-700 hover:scale-[1.01]"
              />
            </div>

          </div>
        </div>
      </section>

      <ContactInfo />
      <InquiryForm />
      <FaqSection />
      <LocationSection />

    </div>
  );
};

export default ContactPage;