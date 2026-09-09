import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote, ArrowRight } from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Chief Technology Officer, CloudScale',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80',
    content:
      'The engineering precision and design clarity delivered exceeded our highest expectations. Our platform conversion metrics increased by 40% within the first month alone.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Marcus Vance',
    role: 'Founder & CEO, Apex Dynamics',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80',
    content:
      'Working with this team transformed our brand architecture. Their ability to fuse intricate technical systems with high-end modern aesthetics is unmatched in the industry.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Elena Rostova',
    role: 'VP of Product, FinVerse Global',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80',
    content:
      'An absolute masterclass in product execution. Every detail was calibrated to perfection, delivering an experience our enterprise customers rave about daily.',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Chen',
    role: 'Head of Growth, Lumina Health',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80',
    content:
      'Speed, polish, and seamless communication throughout the sprint. They did not just build a product; they elevated our vision into a category-defining reality.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const total = testimonialsData.length;

  const triggerSlide = (nextIdx) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(nextIdx);
    setTimeout(() => {
      setIsAnimating(false);
    }, 700);
  };

  const prevSlide = () => {
    triggerSlide(currentIndex === 0 ? total - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    triggerSlide(currentIndex === total - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => {
    if (index === currentIndex || isAnimating) return;
    triggerSlide(index);
  };

  // Fixed stage coordinate variants (Desktop & Tablet)
  const getStageVariant = (index) => {
    let offset = (index - currentIndex + total) % total;
    if (offset > total / 2) offset -= total;

    if (offset === 0) {
      // Center Active: in-focus, elevated, scale 1, full opacity
      return {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        zIndex: 20,
        pointerEvents: 'auto',
      };
    }
    if (offset === -1) {
      // Left Preview: shifted left, lowered by 20px, scale 0.95, opacity 0.65
      return {
        x: -310,
        y: 20,
        scale: 0.95,
        opacity: 0.65,
        zIndex: 10,
        pointerEvents: 'auto',
      };
    }
    if (offset === 1) {
      // Right Preview: shifted right, lowered by 20px, scale 0.95, opacity 0.65
      return {
        x: 310,
        y: 20,
        scale: 0.95,
        opacity: 0.65,
        zIndex: 10,
        pointerEvents: 'auto',
      };
    }
    // Off-stage buffer items (hidden beyond view)
    return {
      x: offset > 0 ? 450 : -450,
      y: 25,
      scale: 0.88,
      opacity: 0,
      zIndex: 0,
      pointerEvents: 'none',
    };
  };

  const transitionConfig = {
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1],
  };

  return (
    <section className="relative w-full py-20 md:py-28 bg-[#F8FAFC] overflow-hidden select-none">
      {/* Background Soft Radial Gradients & Glow Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[480px] bg-gradient-to-tr from-blue-200/30 via-indigo-100/20 to-purple-200/25 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-10 left-1/4 w-64 h-64 bg-blue-100/35 blur-[85px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-indigo-100/35 blur-[85px] pointer-events-none rounded-full" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Badge, Title & Subtitle */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="section-label mb-4">
            <span className="section-label-text">Testimonials</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0F172A] uppercase">
            What Our  <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">Clients Say</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
            Discover how we have helped visionary leaders and high-growth companies scale their digital impact.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center">
          {/* Circular Left Arrow */}
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            aria-label="Previous testimonial"
            className="hidden sm:flex absolute -left-2 md:left-2 lg:left-4 z-30 items-center justify-center w-11 h-11 rounded-full bg-white/90 border border-slate-200/80 shadow-md hover:shadow-lg hover:border-[#4A72E8] hover:text-[#4A72E8] hover:scale-[1.04] active:scale-95 text-slate-700 transition-all duration-300 backdrop-blur-md focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Stable Fixed-Stage Carousel Platform */}
          <div className="relative w-full max-w-5xl h-[330px] sm:h-[305px] flex items-center justify-center">
            {testimonialsData.map((item, index) => {
              let offset = (index - currentIndex + total) % total;
              if (offset > total / 2) offset -= total;
              const isCenter = offset === 0;

              return (
                <motion.div
                  key={item.id}
                  animate={getStageVariant(index)}
                  transition={transitionConfig}
                  onClick={() => {
                    if (offset === 1) nextSlide();
                    if (offset === -1) prevSlide();
                  }}
                  className={`absolute w-[90%] sm:w-[490px] h-[285px] p-6 sm:p-7 rounded-2xl sm:rounded-3xl border overflow-hidden flex flex-col justify-between transition-shadow duration-300 ${isCenter
                      ? 'bg-white/85 backdrop-blur-xl border-blue-200/80 shadow-[0_16px_40px_rgba(74,114,232,0.11)] ring-1 ring-white/70 cursor-default'
                      : 'hidden lg:flex bg-white/45 backdrop-blur-md border-slate-200/60 shadow-xs cursor-pointer hover:opacity-85'
                    }`}
                >
                  {/* Subtle Internal Glow Blob (Bottom-Right) */}
                  <div
                    className={`absolute -bottom-8 -right-8 w-44 h-44 rounded-full blur-2xl pointer-events-none transition-opacity duration-700 ${isCenter
                        ? 'bg-gradient-to-tl from-[#4A72E8]/22 via-indigo-400/18 to-purple-400/12 opacity-100'
                        : 'bg-blue-300/10 opacity-40'
                      }`}
                  />

                  <div className="relative z-10 flex flex-col justify-between h-full">
                    {/* Top Row: 5 Stars + Quote Icon */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1 text-[#4A72E8]">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className={`fill-current ${isCenter ? 'w-4 h-4 drop-shadow-xs' : 'w-3.5 h-3.5 opacity-75'}`}
                          />
                        ))}
                      </div>
                      <div
                        className={`rounded-full flex items-center justify-center border transition-all ${isCenter
                            ? 'w-8 h-8 bg-blue-50/85 border-blue-100/90 text-[#4A72E8]'
                            : 'w-7 h-7 bg-white/40 border-slate-200/60 text-slate-400'
                          }`}
                      >
                        <Quote className={`${isCenter ? 'w-4 h-4' : 'w-3.5 h-3.5'}`} />
                      </div>
                    </div>

                    {/* Testimonial Review Body */}
                    <p
                      className={`leading-relaxed tracking-normal font-normal ${isCenter
                          ? 'text-sm sm:text-[15px] text-slate-700 my-auto line-clamp-4'
                          : 'text-xs text-slate-500 italic line-clamp-3 my-auto'
                        }`}
                    >
                      "{item.content}"
                    </p>

                    {/* Author Meta */}
                    <div
                      className={`flex items-center gap-3 pt-3.5 border-t ${isCenter ? 'border-slate-100/90' : 'border-slate-200/40'
                        }`}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className={`rounded-full object-cover transition-all ${isCenter
                            ? 'w-11 h-11 ring-2 ring-[#4A72E8]/30 shadow-xs'
                            : 'w-8 h-8 grayscale opacity-75 ring-1 ring-slate-200'
                          }`}
                      />
                      <div className="text-left">
                        <h4
                          className={`font-bold leading-tight ${isCenter ? 'text-sm sm:text-base text-[#0F172A]' : 'text-xs text-slate-700 font-semibold'
                            }`}
                        >
                          {item.name}
                        </h4>
                        <p
                          className={`text-slate-500 font-medium leading-tight mt-0.5 truncate max-w-[240px] ${isCenter ? 'text-xs' : 'text-[11px] text-slate-400'
                            }`}
                        >
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Circular Right Arrow */}
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            aria-label="Next testimonial"
            className="hidden sm:flex absolute -right-2 md:right-2 lg:right-4 z-30 items-center justify-center w-11 h-11 rounded-full bg-white/90 border border-slate-200/80 shadow-md hover:shadow-lg hover:border-[#4A72E8] hover:text-[#4A72E8] hover:scale-[1.04] active:scale-95 text-slate-700 transition-all duration-300 backdrop-blur-md focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex sm:hidden items-center justify-center gap-5 mt-4">
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            aria-label="Previous"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 shadow-xs active:scale-95 transition-transform disabled:opacity-50"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            aria-label="Next"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 shadow-xs active:scale-95 transition-transform disabled:opacity-50"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-6 md:mt-8">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`transition-all duration-300 rounded-full ${currentIndex === index
                  ? 'w-6 h-2 bg-gradient-to-r from-[#4A72E8] to-indigo-600 shadow-xs'
                  : 'w-2 h-2 bg-transparent border border-slate-300 hover:border-slate-400'
                }`}
            />
          ))}
        </div>

        {/* Bottom CTA Block */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 text-center">
          <span className="text-slate-700 font-medium text-sm sm:text-base">
            Ready to create something remarkable?
          </span>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="group relative inline-flex items-center gap-3.5 px-8 py-3.5 bg-[#0B132B] text-white text-sm font-semibold rounded-full overflow-hidden transition-all duration-300 shadow-[0_8px_25px_-4px_rgba(11,19,43,0.35)] hover:shadow-[0_12px_30px_-2px_rgba(99,102,241,0.35)] border border-white/10 hover:border-indigo-500/50 cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-sky-500/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

            <span className="relative z-10 tracking-wide transition-colors duration-300 group-hover:text-white">
              Start Your Project
            </span>

            <div className="relative z-10 w-4 h-4 overflow-hidden">
              <ArrowRight className="w-4 h-4 text-white absolute transition-transform duration-300 ease-out group-hover:translate-x-6 group-hover:opacity-0" />
              <ArrowRight className="w-4 h-4 text-cyan-400 absolute -translate-x-6 opacity-0 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100" />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}