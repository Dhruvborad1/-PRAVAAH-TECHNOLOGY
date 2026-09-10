import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
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

      // 3 high-clarity waves calibrated for crisp white/light aesthetic
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
  const [progress, setProgress] = useState(0);

  // Exact 3.5-second runtime (3500ms) with smooth step interpolation
  useEffect(() => {
    const duration = 3500;
    const intervalTime = 25;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 350);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#F8FAFC] overflow-hidden select-none"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.03,
        filter: "blur(12px)",
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
      }}
    >
      {/* 1. Real-time Fluid Waveform Stream in Background */}
      <PravaahLoaderStream />

      {/* 2. Soft Light Atmospheric Accent Blooms */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] bg-cyan-200/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[450px] h-[450px] bg-blue-200/35 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] bg-purple-200/30 rounded-full blur-[140px] pointer-events-none" />

      {/* 3. Blueprint Matrix Grid (Light Slate) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* 4. Center Console: Single Icon & Prismatic Light Rings */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Floating Icon with Rotating Kinetic Rings */}
        <div className="relative mb-12 flex items-center justify-center">
          
          {/* Outer Wave Pulse Orbit Ring */}
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              rotate: { duration: 18, repeat: Infinity, ease: "linear" },
              scale: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute w-44 h-44 sm:w-48 sm:h-48 rounded-full border border-dashed border-blue-400/40 pointer-events-none"
          />

          {/* Inner Glowing Gradient Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute w-36 h-36 sm:w-40 sm:h-40 rounded-full border border-cyan-500/50 border-t-transparent border-b-transparent shadow-[0_0_20px_rgba(0,210,255,0.25)] pointer-events-none"
          />

          {/* Central Radial Light Aura for Crisp Icon Contrast */}
          <motion.div 
            className="absolute inset-0 bg-white/70 rounded-full blur-2xl shadow-xl shadow-blue-500/10"
            animate={{ 
              scale: [0.95, 1.2, 0.95],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />

          {/* Single Name-less Logo Icon */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              y: [-4, 4, -4]
            }}
            transition={{ 
              scale: { duration: 0.8, ease: "easeOut" },
              opacity: { duration: 0.8 },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center drop-shadow-[0_12px_24px_rgba(47,84,235,0.22)]"
          >
            <img 
              src={logoIcon} 
              alt="Pravaah Icon" 
              className="w-full h-full object-contain" 
            />
          </motion.div>
        </div>

        {/* 5. Fluid Progress Bar Console (Light Mode) */}
        {/* 5. Fluid Progress Bar Console (Light Mode - Thicker Bar) */}
<motion.div 
  className="w-72 sm:w-80 flex flex-col items-center"
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  {/* Progress Bar Frame (Increased thickness to h-3.5) */}
  <div className="w-full h-3.5 bg-white/95 rounded-full overflow-hidden relative border border-slate-200 shadow-[inset_0_2px_4px_rgba(0,0,0,0.06),0_6px_20px_rgba(37,99,235,0.08)] p-0.5">
    {/* Gradient Fill Wave */}
    <motion.div 
      className="h-full bg-gradient-to-r from-[#00D2FF] via-[#2F54EB] to-[#9B51E0] rounded-full shadow-[0_0_14px_rgba(47,84,235,0.45)]"
      style={{ width: `${progress}%` }}
    />
    {/* Shimmer Light Ray */}
    <motion.div 
      className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-[-25deg]"
      animate={{ x: ['-200%', '350%'] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>

  {/* Telemetry Metrics Row */}
  <div className="mt-4 flex items-center justify-between w-full text-[11px] font-mono tracking-widest text-slate-600">
    <motion.span 
      animate={{ opacity: [0.55, 1, 0.55] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      className="uppercase flex items-center gap-1.5 font-semibold"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping" />
      Initializing Stream
    </motion.span>
    <span className="font-bold tabular-nums text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#2F54EB] to-[#9B51E0]">
      {Math.round(progress)}%
    </span>
  </div>
</motion.div>

      </div>
    </motion.div>
  );
};

export default LoadingScreen;