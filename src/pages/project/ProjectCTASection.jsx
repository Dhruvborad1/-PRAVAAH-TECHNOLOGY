import React, { useRef, useEffect } from 'react';
import { ArrowRight, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../../components/ScrollReveal';

// Dynamic Light-Theme Fluid Waves & Micro-Particle Stream
const PravaahLightBackgroundStream = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let step = 0;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || 600;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Floating micro-particles for visible flow through the transparent glass
    const particleCount = 26;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * (canvas.width || 1200),
      y: Math.random() * (canvas.height || 600),
      radius: Math.random() * 2 + 1,
      speedX: Math.random() * 1.1 + 0.35,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.45 + 0.2,
      color: Math.random() > 0.5 ? '#00D2FF' : '#2F54EB'
    }));

    // Multi-layer continuous wave rendering tuned for bright backgrounds
    const render = () => {
      step += 0.02;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const width = canvas.width;
      const height = canvas.height;

      // 1. Render Flowing Atmospheric Particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        ctx.globalAlpha = 1.0;
      });

      // 2. High-Clarity Light Wave Layers (Cyan, Royal Blue, Violet)
      const waveLayers = [
        { color: 'rgba(0, 210, 255, 0.16)', amplitude: 44, speed: 0.007, offset: 0, baseline: height * 0.46 },
        { color: 'rgba(47, 84, 235, 0.12)', amplitude: 52, speed: 0.005, offset: 2.1, baseline: height * 0.52 },
        { color: 'rgba(155, 81, 224, 0.10)', amplitude: 60, speed: 0.004, offset: 4.3, baseline: height * 0.58 },
      ];

      waveLayers.forEach((wave) => {
        ctx.beginPath();
        ctx.moveTo(0, height);

        for (let x = 0; x <= width; x += 10) {
          const y =
            Math.sin(x * wave.speed + step + wave.offset) * wave.amplitude +
            Math.cos(x * 0.003 + step * 0.5) * 16 +
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
      window.removeEventListener('resize', resizeCanvas);
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

const ProjectCTASection = () => {
  return (
    <section className="relative py-14 md:py-20 bg-[#F4F8FD] overflow-hidden selection:bg-cyan-100 selection:text-slate-900 border-b border-slate-200/70">
      
      {/* 1. Full Background Flowing Canvas Stream (Pravaah Light Waves) */}
      <PravaahLightBackgroundStream />

      {/* 2. Soft Atmospheric Accent Blooms */}
      <div className="absolute top-1/2 -left-32 -translate-y-1/2 w-[520px] h-[380px] bg-cyan-200/35 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 -right-32 -translate-y-1/2 w-[520px] h-[380px] bg-purple-200/30 rounded-full blur-[140px] pointer-events-none" />

      {/* 3. Subtle Technical Grid Across Entire Canvas */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Expanded Width Container (Max Width 1400px) */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal variant="lift">
          
          {/* Distinct Light Crystal Prism Card (Translucent Glass Effect) */}
          <div className="relative rounded-[32px] bg-white/45 backdrop-blur-md border border-white/80 px-6 sm:px-10 lg:px-14 py-10 md:py-12 shadow-[0_20px_50px_rgba(37,99,235,0.08),inset_0_1px_2px_rgba(255,255,255,0.8)] overflow-hidden group hover:border-blue-300/60 transition-all duration-500">
            
            {/* Fine Inner Blueprint Matrix Overlay */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(#0284C7 1px, transparent 1px), linear-gradient(90deg, #0284C7 1px, transparent 1px)`,
                backgroundSize: '32px 32px',
              }}
            />

            {/* Subtle Blueprint Corner Reticles */}
            <span className="absolute top-3.5 left-4 text-xs font-mono text-slate-400 select-none pointer-events-none">+</span>
            <span className="absolute top-3.5 right-4 text-xs font-mono text-slate-400 select-none pointer-events-none">+</span>
            <span className="absolute bottom-3.5 left-4 text-xs font-mono text-slate-400 select-none pointer-events-none">+</span>
            <span className="absolute bottom-3.5 right-4 text-xs font-mono text-slate-400 select-none pointer-events-none">+</span>

            {/* Horizontal Split Grid: Maintains Compact Height Across 1400px Width */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              {/* Left Column: Heading & Concise Pitch (7 Cols) */}
              <div className="lg:col-span-7 text-center lg:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-200/90 bg-white/85 text-blue-700 text-[10px] sm:text-[11px] font-mono font-bold tracking-widest uppercase mb-3.5 shadow-xs backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                  SPRINT CAPACITY OPEN
                </div>

                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight">
                  Have a Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#2F54EB] to-[#9B51E0]">in Mind?</span>
                </h2>

                <p className="text-slate-600 text-sm sm:text-base mt-2.5 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                  Turn your idea into a production-grade digital platform. Receive a complimentary engineering consultation, milestone roadmap, and timeline estimate.
                </p>
              </div>

              {/* Right Column: CTA Action Button & Guarantees (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center gap-4">
                
                {/* High-Authority Dark Action Button for Strong Contrast */}
                <Link 
                  to="/contact"
                  className="group/btn relative inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:py-4 bg-[#0B132B] text-white rounded-xl font-display font-bold text-sm sm:text-base hover:bg-slate-900 transition-all duration-300 shadow-lg shadow-blue-950/20 hover:shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto overflow-hidden cursor-pointer"
                >
                  {/* Subtle Inner Glow */}
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-600/20 to-purple-600/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />

                  <span className="relative z-10">Start Your Project</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400 transition-transform duration-300 group-hover/btn:translate-x-1 relative z-10" />
                </Link>

                {/* Compact Telemetry Guarantees Strip */}
                <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3 text-xs font-mono text-slate-600">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/80 border border-slate-200/90 shadow-xs backdrop-blur-xs">
                    <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    &lt; 4-Hr Response
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/80 border border-slate-200/90 shadow-xs backdrop-blur-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    Zero Obligation NDA
                  </span>
                </div>

              </div>

            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProjectCTASection;