import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from '../../components/ScrollReveal';

// Testimonials data aligned with Pravaah project portfolio
const testimonials = [
  {
    id: 1,
    quote:
      'Pravaah Technology delivered our website and mobile app beyond our expectations. Their team is professional, responsive and truly understands enterprise workflows. Highly recommended!',
    name: 'Amit Patel',
    role: 'Founder & CEO',
    company: 'Skyline Traders',
    initials: 'AP',
    accent: '#06B6D4',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    quote:
      'The team at Pravaah Technology gave us a smooth experience from planning to deployment. Their UI/UX design and development skills helped us create a modern and user-friendly platform.',
    name: 'Neha Shah',
    role: 'Product Manager',
    company: 'GrowNest Solutions',
    initials: 'NS',
    accent: '#3B82F6',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    quote:
      'We partnered with Pravaah Technology for our digital transformation, and the results have been outstanding. Their attention to detail, technical expertise and ongoing support make them a valuable partner.',
    name: 'Rohan Desai',
    role: 'CTO',
    company: 'Vertex Enterprises',
    initials: 'RD',
    accent: '#8B5CF6',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    quote:
      'Pravaah Technology helped us move our B2B sales online with a fast, easy-to-use platform. The team was responsive and handled everything from design to production deployment without downtime.',
    name: 'Pushpak Goti',
    role: 'CEO & Founder',
    company: 'Powerex Petrochem',
    initials: 'PG',
    accent: '#06B6D4',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: 5,
    quote:
      'From the first call to launch, Pravaah handled our logistics platform professionally. The new tracking site is simple for our team to manage and intuitive for our business clients.',
    name: 'Gausiya Fatima',
    role: 'Founder & Product Lead',
    company: 'ShippingDrop',
    initials: 'GF',
    accent: '#3B82F6',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&auto=format&fit=crop&q=80',
  }
];

const ProjectClientTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalCards = testimonials.length;

  // Navigate carousel 1 card at a time with circular indexing
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? totalCards - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalCards);
  };

  // Computes relative distance on the circle to arrange cards uniformly around a cylindrical carousel
  const getCardTransform = (index) => {
    let diff = index - activeIndex;
    if (diff > totalCards / 2) diff -= totalCards;
    if (diff < -totalCards / 2) diff += totalCards;

    const angle = diff * 45;
    const x = Math.sin((angle * Math.PI) / 180) * 440;
    const z = Math.cos((angle * Math.PI) / 180) * 220 - 220;
    const rotateY = -angle * 0.75;
    const isCenter = diff === 0;
    const isAdjacent = Math.abs(diff) <= 1;

    return {
      x,
      z,
      rotateY,
      scale: isCenter ? 1 : isAdjacent ? 0.9 : 0.75,
      opacity: isCenter ? 1 : isAdjacent ? 0.65 : 0,
      zIndex: isCenter ? 30 : 20 - Math.abs(diff) * 5,
      pointerEvents: isCenter ? 'auto' : 'none',
    };
  };

  return (
    <section 
      className="relative py-16 md:py-24 bg-gradient-to-b from-[#f8fbff] via-white to-[#f4f8ff] border-b border-slate-200/70 overflow-hidden selection:bg-cyan-100 selection:text-slate-900"
      aria-label="Client Testimonials and Feedback"
    >
      {/* 1. Standard Pravaah Architectural Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* 2. Ambient Color Glows Matching Other Sections */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-cyan-100/35 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-purple-100/30 rounded-full blur-[130px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* 3. Standard Centered Section Header Matching Pravaah Design System */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-14">
          <ScrollReveal variant="lift">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/80 bg-white/90 backdrop-blur-md px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-blue-700 shadow-xs mb-4">
              <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
              CLIENT FEEDBACK
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-950 leading-[1.14] tracking-tight">
              Trusted by Businesses.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#2F54EB] to-[#9B51E0]">
                Built for Impact.
              </span>
            </h2>

            {/* Signature 3-Color Gradient Bar */}
            <div className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-500 mx-auto" />

            <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
              Our clients trust us to turn their ideas into powerful digital solutions. Here&apos;s what founders and enterprise leaders say about working with Pravaah Technology.
            </p>
          </ScrollReveal>
        </div>

        {/* 4. Interactive Carousel Stage with Left/Right Flanking Buttons on Desktop */}
        <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center">
          
          {/* Desktop Left Button (Round, Larger, Black/White Invert Hover) */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Testimonial"
            className="hidden md:flex absolute left-0 lg:-left-4 z-40 w-14 h-14 rounded-full border-2 border-slate-300 bg-white text-slate-900 items-center justify-center shadow-lg shadow-slate-200/60 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer active:scale-95"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* 3D Cylindrical Ring / Round Carousel Stage */}
          <div 
            className="relative h-[430px] sm:h-[400px] w-full max-w-5xl flex items-center justify-center"
            style={{ perspective: 1200 }}
          >
            {testimonials.map((item, index) => {
              const transform = getCardTransform(index);

              return (
                <motion.div
                  key={item.id}
                  animate={{
                    x: transform.x,
                    z: transform.z,
                    rotateY: transform.rotateY,
                    scale: transform.scale,
                    opacity: transform.opacity,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 170,
                    damping: 24,
                    mass: 0.9,
                  }}
                  style={{
                    zIndex: transform.zIndex,
                    pointerEvents: transform.pointerEvents,
                  }}
                  className="group absolute w-full max-w-[340px] sm:max-w-[380px] h-[350px] sm:h-[330px] rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white/95 p-6 sm:p-7 shadow-xl shadow-blue-900/5 backdrop-blur-md flex flex-col justify-between overflow-hidden will-change-transform select-none"
                >
                  {/* Subtle Hover Accent Bar */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-[2.5px]"
                    style={{ backgroundColor: item.accent }}
                  />

                  <div>
                    {/* Card Header: Quote Icon & Golden Stars */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100/70 flex items-center justify-center text-blue-600 shadow-xs">
                        <span className="font-serif text-2xl font-black leading-none mt-1">&ldquo;</span>
                      </div>

                      <div className="flex items-center gap-1 bg-slate-50 border border-slate-200/70 px-2.5 py-1 rounded-full">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-3.5 h-3.5 text-amber-400 fill-amber-400" 
                          />
                        ))}
                        <span className="text-[11px] font-mono font-bold text-slate-700 ml-1">5.0</span>
                      </div>
                    </div>

                    {/* Testimonial Quote */}
                    <p className="text-slate-600 text-sm sm:text-[14.5px] leading-relaxed italic font-normal line-clamp-4">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  {/* Card Footer: Client Info */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {item.avatar ? (
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="w-11 h-11 rounded-xl object-cover shadow-xs border border-slate-200"
                          loading="lazy"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      ) : (
                        <div 
                          className="w-11 h-11 rounded-xl flex items-center justify-center font-display font-bold text-sm text-white shadow-xs"
                          style={{
                            background: `linear-gradient(135deg, ${item.accent}, #1e3a8a)`
                          }}
                        >
                          {item.initials}
                        </div>
                      )}

                      <div>
                        <h3 className="font-display font-bold text-slate-950 text-sm sm:text-base leading-snug">
                          {item.name}
                        </h3>
                        <p className="text-slate-400 text-xs mt-0.5">
                          {item.role}
                        </p>
                        <p className="text-blue-600 text-xs font-medium">
                          {item.company}
                        </p>
                      </div>
                    </div>

                    <div className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono font-semibold text-slate-500">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      Verified
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Desktop Right Button (Round, Larger, Black/White Invert Hover) */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Testimonial"
            className="hidden md:flex absolute right-0 lg:-right-4 z-40 w-14 h-14 rounded-full border-2 border-slate-300 bg-white text-slate-900 items-center justify-center shadow-lg shadow-slate-200/60 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer active:scale-95"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* 5. Mobile-Only Bottom Carousel Controls */}
        <div className="flex md:hidden items-center justify-center gap-4 mt-2">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Testimonial"
            className="w-12 h-12 rounded-full border-2 border-slate-300 bg-white text-slate-900 flex items-center justify-center shadow-md hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Testimonial"
            className="w-12 h-12 rounded-full border-2 border-slate-300 bg-white text-slate-900 flex items-center justify-center shadow-md hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProjectClientTestimonials;