import React from 'react';
import ScrollReveal from '../../components/ScrollReveal';
import AboutStoryImg from '../../assets/about/about-story.webp.png';
import { Sparkles } from 'lucide-react';
const AboutStorySection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="container mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left: Image Column */}
          <ScrollReveal variant="slide" className="relative isolate">
  {/* તમારી મૂળ ક્રોસ બેકગ્રાઉન્ડ ફ્રેમ (ગાયબ થવાનો બગ ફિક્સ કર્યો) */}
  <div 
    aria-hidden="true" 
    className="absolute -inset-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl -rotate-3 z-0 pointer-events-none transform-gpu"
  />
  
  {/* તમારી મૂળ મેઇન ઇમેજ ફ્રેમ */}
  <div className="relative z-10 rounded-2xl shadow-2xl border border-slate-100 bg-slate-50">
    <div className="relative overflow-hidden rounded-2xl aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]">
      <img 
        src={AboutStoryImg} 
        alt="Pravaah Workspace" 
        loading="eager"
        className="w-full h-full object-cover" 
      />
    </div>

    {/* ફ્લોટિંગ એલિમેન્ટ (ફ્રેમની બહાર) */}
    <div className="absolute bottom-6 -right-6 lg:bottom-12 lg:-right-8 bg-white/95 backdrop-blur-md border border-slate-100 shadow-xl rounded-xl p-4 sm:p-5 pr-8 animate-[float3D_6s_ease-in-out_infinite] z-20">
      <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Building with purpose</p>
      <p className="text-sm sm:text-base font-semibold text-slate-900">Technology • Design • Innovation</p>
    </div>
  </div>
</ScrollReveal>

          {/* Right: Content Column */}
          <div className="max-w-xl">
            <ScrollReveal variant="lift" delay={0.1}>
              {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6">
                <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                Who We Are
              </div> */}
              <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/70 bg-blue-50/60 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-blue-700 shadow-sm mb-3">
                <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                Who We Are
              </div>

            </ScrollReveal>

            <ScrollReveal variant="lift" delay={0.2}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
                Building Digital Experiences That Move Businesses <span className="pravaah-gradient-text">Forward.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="lift" delay={0.3}>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
                At Pravaah Technologies, we believe that software should do more than just function—it should create momentum. We combine deep software engineering expertise, strategic product thinking, and human-centered UI/UX to build digital innovations that scale.
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
                Whether leveraging AI to streamline operations or crafting scalable technology architectures for tomorrow's challenges, our focus is always on delivering international-grade quality and lasting value.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="lift" delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                <div className="border-l-2 border-blue-500 pl-4">
                  <p className="text-2xl font-bold text-slate-900">100%</p>
                  <p className="text-sm font-medium text-slate-500">In-house Talent</p>
                </div>
                <div className="border-l-2 border-cyan-500 pl-4">
                  <p className="text-2xl font-bold text-slate-900">Client-First</p>
                  <p className="text-sm font-medium text-slate-500">Approach</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutStorySection;
