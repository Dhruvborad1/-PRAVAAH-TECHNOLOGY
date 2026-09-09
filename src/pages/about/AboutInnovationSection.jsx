import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import ScrollReveal from '../../components/ScrollReveal';
import InnovationImg from '../../assets/about/about-human-technology.webp';

const quoteText = "In a rapidly evolving digital landscape, we don't just write code. We architect solutions that empower people, streamline operations, and unlock new possibilities for the future.";

const AboutInnovationSection = () => {
  const quoteRef = useRef(null);
  const isInView = useInView(quoteRef, { once: true, amount: 0.5 });
  const prefersReduced = useReducedMotion();

  // Typing state
  const [displayedCount, setDisplayedCount] = useState(prefersReduced ? quoteText.length : 0);
  const [isTypingDone, setIsTypingDone] = useState(prefersReduced);
  const [showCursor, setShowCursor] = useState(!prefersReduced);

  useEffect(() => {
    if (prefersReduced) {
      setDisplayedCount(quoteText.length);
      setIsTypingDone(true);
      setShowCursor(false);
      return;
    }

    if (!isInView) return;

    let timeoutId;

    const typeNextChar = (currentIndex) => {
      if (currentIndex >= quoteText.length) {
        setIsTypingDone(true);
        // Keep cursor blinking for ~1.8s post completion, then fade out
        timeoutId = setTimeout(() => {
          setShowCursor(false);
        }, 1800);
        return;
      }

      setDisplayedCount(currentIndex + 1);

      // Natural typing cadence with cadence shifts
      const char = quoteText[currentIndex];
      let delay = 38 + Math.random() * 12; // Base: 38-50ms

      if (char === ',') {
        delay += 100;
      } else if (char === '.') {
        delay += 180;
      } else if (char === ' ') {
        delay -= 10;
      }

      timeoutId = setTimeout(() => {
        typeNextChar(currentIndex + 1);
      }, Math.max(delay, 20));
    };

    // Initial slight pause before typing starts
    timeoutId = setTimeout(() => {
      typeNextChar(0);
    }, 250);

    return () => clearTimeout(timeoutId);
  }, [isInView, prefersReduced]);

  const visibleText = quoteText.slice(0, displayedCount);

  return (
    <section 
      className="relative w-full py-28 md:py-40 lg:py-48 overflow-hidden border-b border-slate-100 bg-slate-950 select-none flex items-center justify-center"
      aria-label="Human + Technology Innovation"
    >
      {/* ================================================================= */}
      {/* 1. COMPLETELY STATIC FULL-WIDTH BACKGROUND IMAGE                  */}
      {/* ================================================================= */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none select-none z-0"
        style={{ backgroundImage: `url(${InnovationImg})` }}
      />

      {/* Natural Dark Overlay (No Colors, for Clear Readability) */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none z-10" />

      {/* ================================================================= */}
      {/* 2. FLOATING EDITORIAL LABELS                                      */}
      {/* ================================================================= */}
      <div className="absolute top-6 left-6 sm:top-10 sm:left-10 z-20 pointer-events-none">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/50 border border-white/20 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-slate-200 uppercase">
            OUR INNOVATION PHILOSOPHY
          </span>
        </div>
      </div>

      <div className="absolute top-6 right-6 sm:top-10 sm:right-10 z-20 pointer-events-none hidden sm:block">
        <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-widest text-white/90 bg-black/50 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/20">
          INNOVATION / 01
        </span>
      </div>

      <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 z-20 pointer-events-none">
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-black/50 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span className="text-[10px] sm:text-[11px] font-mono font-medium tracking-wider text-slate-200 uppercase">
            Human + Technology
          </span>
        </div>
      </div>

      {/* ================================================================= */}
      {/* 3. MAIN FOREGROUND CONTENT (WITH REALISTIC TYPEWRITER EFFECT)     */}
      {/* ================================================================= */}
      <div className="container mx-auto px-5 md:px-8 relative z-20 max-w-5xl flex flex-col items-center justify-center text-center">
        
        {/* Main Headline */}
        <ScrollReveal variant="lift">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.12] tracking-tight mb-8">
            Technology Is What We Build. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#2F54EB] to-[#9B51E0]">
              Progress Is What We Create.
            </span>
          </h2>
        </ScrollReveal>

        {/* Quote Block with Big Dual Decorative Quotes */}
        <div ref={quoteRef} className="relative inline-block max-w-3xl mx-auto px-8 sm:px-12 py-2">
          
          {/* Opening Big Quote Mark (Top Left) */}
          <span 
            aria-hidden="true" 
            className="absolute -top-10 left-0 sm:-left-4 text-7xl sm:text-8xl font-serif font-black select-none pointer-events-none text-white/25 leading-none"
          >
            “
          </span>

          {/* Screen Reader Full Content (Accessible hidden layer) */}
          <span className="sr-only">{quoteText}</span>

          {/* Character-by-Character Typewriter Presentation */}
          <p 
            aria-hidden="true"
            className="relative z-10 text-lg sm:text-xl md:text-2xl text-slate-200 font-normal leading-relaxed italic drop-shadow-md inline"
          >
            <span>{visibleText}</span>

            {/* Inline Blinking Cursor */}
            {showCursor && (
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="inline-block w-[2px] h-[1.1em] align-middle bg-white ml-[2px] rounded-full"
              />
            )}
          </p>

          {/* Closing Big Quote Mark (Bottom Right) */}
          <span 
            aria-hidden="true" 
            className="absolute -bottom-10 right-0 sm:-right-4 text-7xl sm:text-8xl font-serif font-black select-none pointer-events-none text-white/25 leading-none"
          >
            ”
          </span>

        </div>

        {/* Brand Accent Bar */}
        <div className="mt-12 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />
      </div>
    </section>
  );
};

export default AboutInnovationSection;