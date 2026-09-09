import React from 'react';
import { 
  Check, 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Headphones, 
  Send, 
  MessageSquare, 
  ShieldCheck, 
  Zap 
} from 'lucide-react';

import ContactHeroImg from '../assets/Contact us-rafiki.png';

const ContactPage = () => {
  return (
    <>
      {/* ========================================================================= */}
      {/* 1. CONTACT HERO SECTION (MATCHED EXACT BASELINE & DESIGN SYSTEM)          */}
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
          {/* items-start ensures identical baseline alignment across all pages */}
          <div className="grid items-start gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">

            {/* LEFT COLUMN: HERO COPY */}
            <div className="hero-copy max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
              {/* Pill Badge */}
              <div className="hero-rise mb-6 inline-flex h-9 items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 text-xs font-bold uppercase tracking-[0.16em] text-blue-700 shadow-sm backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-cyan-500" /> Start a Conversation
              </div>

              {/* Main Title Heading */}
              <h1 className="hero-rise hero-rise-delay-1 font-display text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
                Let’s build something clear, scalable, and <span className="pravaah-gradient-text">impactful.</span>
              </h1>

              {/* Description Subtext */}
              <p className="hero-rise hero-rise-delay-2 mt-6 max-w-xl mx-auto lg:mx-0 text-base leading-8 text-slate-600 sm:text-lg">
                Have a project in mind, need technical advisory, or want to discuss enterprise solutions? Reach out directly and let's map out the next steps for your digital growth.
              </p>

              {/* Feature Checklist */}
              <div className="hero-rise hero-rise-delay-3 mt-10 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-sm font-semibold text-slate-600">
                {['24-Hour Response Window', 'Direct Tech Consultation', 'Clear Project Estimates'].map((item) => (
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
                <span>Quick Response</span>
              </div>

              {/* 2. Top-Right Badge */}
              <div className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20 flex items-center gap-1.5 rounded-xl border border-blue-100/80 bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-700 shadow-md shadow-blue-100/60 backdrop-blur-md">
                <MessageSquare className="h-3.5 w-3.5 text-blue-600" />
                <span>Active Inquiry</span>
              </div>

              {/* 3. Bottom-Left Badge */}
              <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 z-20 flex items-center gap-1.5 rounded-xl border border-blue-100/80 bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-700 shadow-md shadow-blue-100/60 backdrop-blur-md">
                <Zap className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                <span>Direct Expert Access</span>
              </div>

              {/* 4. Bottom-Right Badge */}
              <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 z-20 flex items-center gap-1.5 rounded-xl border border-blue-100/80 bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-700 shadow-md shadow-blue-100/60 backdrop-blur-md">
                <ShieldCheck className="h-4 w-4 text-cyan-500" />
                <span>NDA Protected</span>
              </div>

              {/* Pure Contact Hero Image */}
              <img
                src={ContactHeroImg}
                alt="Contact Pravaah Technologies"
                className="relative z-10 w-full h-auto object-contain select-none transition-transform duration-700 hover:scale-[1.01]"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CONTACT INFO CARDS                                                     */}
      {/* ========================================================================= */}
      <section className="py-16 bg-slate-50/70 border-y border-slate-100">
        <div className="container mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm text-center h-full flex flex-col items-center justify-center">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-slate-900">Email Us</h4>
              <p className="text-slate-800 font-semibold text-sm mt-2">support@pravaahtechnology.in</p>
              <p className="text-xs text-slate-500 mt-1">We reply within 24 hours</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm text-center h-full flex flex-col items-center justify-center">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-slate-900">Call Us</h4>
              <p className="text-slate-800 font-semibold text-sm mt-2">+91 8449274276</p>
              <p className="text-xs text-slate-500 mt-1">Mon-Fri, 11AM-9PM</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm text-center h-full flex flex-col items-center justify-center">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-slate-900">Location</h4>
              <p className="text-slate-800 font-semibold text-sm mt-2">Amina Nagar, Padri Bazar, Gorakhpur</p>
              <p className="text-xs text-slate-500 mt-1">Serving clients worldwide</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm text-center h-full flex flex-col items-center justify-center">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-slate-900">Office Hours</h4>
              <p className="text-slate-800 font-semibold text-sm mt-2">Mon - Fri: 11 AM - 9 PM</p>
              <p className="text-xs text-slate-500 mt-1">Sat: 10AM - 2PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. INQUIRY FORM & WORKFLOW                                                */}
      {/* ========================================================================= */}
      <section className="section-padding py-24">
        <div className="container mx-auto px-5 md:px-8 grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2">
            <div className="space-y-8">
              <div>
                <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.16em]">Direct Communication</span>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mt-2 mb-4">Get in Touch</h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Whether you have a product concept, need infrastructure guidance, or require an engineering team, our specialists are ready to discuss your objectives.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-display font-bold text-slate-900">What happens next?</h4>
                <div className="flex gap-3.5 items-start">
                  <div className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</div>
                  <p className="text-sm text-slate-600">We receive your message and perform an initial technical feasibility review.</p>
                </div>
                <div className="flex gap-3.5 items-start">
                  <div className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</div>
                  <p className="text-sm text-slate-600">A solutions engineer reaches out to coordinate a discovery call.</p>
                </div>
                <div className="flex gap-3.5 items-start">
                  <div className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</div>
                  <p className="text-sm text-slate-600">We present an architectural scope, timelines, and transparent estimates.</p>
                </div>
                <div className="flex gap-3.5 items-start">
                  <div className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</div>
                  <p className="text-sm text-slate-600">Upon approval, dedicated sprint development begins immediately.</p>
                </div>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Headphones className="w-5 h-5 text-blue-600" />
                  <h4 className="font-display font-bold text-slate-900">Need Urgent Assistance?</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  For time-sensitive systems or live production incidents, reach us directly at <span className="font-bold text-slate-900">+91 8449274276</span>.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-10 shadow-xl shadow-slate-100">
              <form className="space-y-6">
                <h3 className="font-display text-xl font-bold text-slate-900 mb-2">Send Us a Message</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Full Name *</label>
                    <input required type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 focus:bg-white transition text-sm font-medium" name="fullName" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Email *</label>
                    <input required type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 focus:bg-white transition text-sm font-medium" name="email" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Phone</label>
                    <input type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 focus:bg-white transition text-sm font-medium" name="phone" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Company</label>
                    <input type="text" placeholder="Your Organization" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 focus:bg-white transition text-sm font-medium" name="company" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Service Required</label>
                  <select name="serviceInterestedIn" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 focus:bg-white transition text-sm font-medium">
                    <option value="">Select a service category</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="Cloud Solutions">Cloud Solutions</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="Enterprise IT">Enterprise Architecture</option>
                    <option value="Other">Other Query</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Project Details *</label>
                  <textarea name="projectDetails" required rows="5" placeholder="Outline your requirements, target timeline, and goals..." className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 focus:bg-white transition resize-none text-sm font-medium"></textarea>
                </div>

                <button type="submit" className="pravaah-btn-primary w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-white shadow-lg shadow-blue-200 inline-flex items-center justify-center gap-2 cursor-pointer transition">
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. FAQ SECTION                                                            */}
      {/* ========================================================================= */}
      <section className="section-padding bg-slate-50/70 py-24 border-y border-slate-100">
        <div className="container mx-auto max-w-3xl px-5 md:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.16em]">Inquiry FAQ</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mt-2">Frequently Asked Questions</h2>
            <p className="text-slate-600 mt-4 leading-relaxed">Quick answers regarding project initiation, delivery schedules, and contracts.</p>
          </div>
          <div className="space-y-3">
            {[
              'How long does a typical project cycle take?',
              'What pricing and engagement models do you support?',
              'Do you provide post-launch support and SLAs?',
              'Which technology stacks are supported for new projects?',
              'Can your engineers collaborate with our in-house team?'
            ].map((faq) => (
              <div key={faq} className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
                <button type="button" className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 group">
                  <span className="font-display font-bold text-slate-900 text-sm sm:text-base group-hover:text-blue-600 transition-colors">{faq}</span>
                  <span className="text-blue-600 font-bold text-xl shrink-0">+</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. LOCATION FOOTER BLOCK                                                  */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white flex items-center justify-center">
        <div className="text-center px-4">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
            <MapPin className="w-6 h-6" />
          </div>
          <h4 className="font-display font-bold text-slate-900 text-base sm:text-lg">Amina Nagar, Padri Bazar, Gorakhpur - 273014</h4>
          <p className="text-sm text-slate-500 mt-1">Available for onsite visits or remote consultations worldwide</p>
        </div>
      </section>
    </>
  );
};

export default ContactPage;