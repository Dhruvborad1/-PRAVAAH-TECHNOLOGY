import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import logoIcon from '../../assets/logo/Logo PNG Icon.png';

// Dynamic Flowing Fluid Wave Stream (Pravaah Light Waveform)
const PravaahLoaderStream = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let step = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      step += 0.022;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const width = canvas.width;
      const height = canvas.height;

      // 3 signature Pravaah waves calibrated for light theme
      const waveLayers = [
        { color: 'rgba(0, 210, 255, 0.16)', amplitude: 46, speed: 0.0055, offset: 0, baseline: height * 0.52 },
        { color: 'rgba(47, 84, 235, 0.13)', amplitude: 60, speed: 0.0045, offset: 2.2, baseline: height * 0.57 },
        { color: 'rgba(155, 81, 224, 0.10)', amplitude: 74, speed: 0.0035, offset: 4.4, baseline: height * 0.62 },
      ];

      waveLayers.forEach((wave) => {
        ctx.beginPath();
        ctx.moveTo(0, height);

        for (let x = 0; x <= width; x += 10) {
          const y =
            Math.sin(x * wave.speed + step + wave.offset) * wave.amplitude +
            Math.cos(x * 0.0028 + step * 0.7) * 18 +
            wave.baseline;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();
        ctx.fillStyle = wave.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-0" 
    />
  );
};

const LoadingScreen = ({ onComplete }) => {
  const line1Full = "Welcome to";
  const line2Full = "Pravaah Technologies";

  const [line1Text, setLine1Text] = useState("");
  const [line2Text, setLine2Text] = useState("");
  const [activeLine, setActiveLine] = useState(1);

  // Two-step sequential typewriter animation
  useEffect(() => {
    const startDelay = setTimeout(() => {
      let index1 = 0;
      const interval1 = setInterval(() => {
        index1++;
        setLine1Text(line1Full.slice(0, index1));
        if (index1 >= line1Full.length) {
          clearInterval(interval1);
          setActiveLine(2);

          // Start typing line 2 after a brief pause
          setTimeout(() => {
            let index2 = 0;
            const interval2 = setInterval(() => {
              index2++;
              setLine2Text(line2Full.slice(0, index2));
              if (index2 >= line2Full.length) {
                clearInterval(interval2);
                setActiveLine(0); // typing complete
              }
            }, 60);
          }, 180);
        }
      }, 70);
    }, 350);

    return () => clearTimeout(startDelay);
  }, []);

  // Auto-close after full animation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 3600);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#F8FAFC] overflow-hidden select-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.03,
        filter: "blur(12px)",
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
      }}
    >
      {/* Quick Skip Button */}
      <button
        onClick={onComplete}
        type="button"
        aria-label="Skip Welcome"
        className="absolute top-6 right-6 z-20 flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-200/90 bg-white/80 backdrop-blur-md text-xs font-mono font-medium text-slate-500 hover:text-slate-900 hover:bg-white shadow-xs transition-all cursor-pointer"
      >
        <span>Skip</span>
        <X className="w-3.5 h-3.5" />
      </button>

      {/* 1. Fluid Waveform Stream in Background */}
      <PravaahLoaderStream />

      {/* 2. Soft Atmospheric Light Blooms */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] bg-cyan-200/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[450px] h-[450px] bg-blue-200/35 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] bg-purple-200/30 rounded-full blur-[140px] pointer-events-none" />

      {/* 3. Subtle Matrix Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* 4. Center Console */}
      <div className="relative z-10 flex flex-col items-center max-w-xl px-6 text-center">
        
        {/* Floating Icon with Kinetic Waves */}
        <div className="relative mb-6 flex items-center justify-center">
          
          {/* Outer Pulse Orbit Ring */}
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.05, 1] }}
            transition={{ 
              rotate: { duration: 18, repeat: Infinity, ease: "linear" },
              scale: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute w-36 h-36 sm:w-40 sm:h-40 rounded-full border border-dashed border-blue-400/40 pointer-events-none"
          />

          {/* Inner Glowing Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-cyan-500/50 border-t-transparent border-b-transparent shadow-[0_0_20px_rgba(0,210,255,0.25)] pointer-events-none"
          />

          {/* Center Light Halo */}
          <motion.div 
            className="absolute inset-0 bg-white/80 rounded-full blur-2xl shadow-xl shadow-blue-500/15"
            animate={{ scale: [0.95, 1.2, 0.95], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* The Nameless Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1, 
              y: [-3, 3, -3] 
            }}
            transition={{ 
              scale: { duration: 0.8, ease: "easeOut" },
              opacity: { duration: 0.8 },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center drop-shadow-[0_12px_24px_rgba(47,84,235,0.25)]"
          >
            <img 
              src={logoIcon} 
              alt="Pravaah Icon" 
              className="w-full h-full object-contain" 
            />
          </motion.div>
        </div>

        {/* 5. Two-Line Typewriter Typography */}
        <div className="space-y-2">
          {/* Top Line: Welcome to */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-semibold text-slate-700 tracking-tight min-h-[1.3em] flex items-center justify-center">
            <span>{line1Text}</span>
            {activeLine === 1 && (
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block w-[2.5px] h-[0.9em] bg-slate-700 ml-1 rounded-full"
              />
            )}
          </h2>

          {/* Bottom Line: Pravaah Technologies (Gradient Brand Name) */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight leading-tight min-h-[1.3em] flex items-center justify-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#2F54EB] to-[#9B51E0]">
              {line2Text}
            </span>
            {activeLine === 2 && (
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block w-[3px] h-[0.85em] bg-blue-600 ml-1.5 rounded-full"
              />
            )}
          </h1>

          {/* Signature Accent Line under Pravaah Technologies */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 1.8 }}
            className="h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-500 mx-auto origin-center mt-3"
          />
        </div>

      </div>
    </motion.div>
  );
};

export default LoadingScreen;