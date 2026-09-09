import React from 'react';
import { Heart, Globe, BookOpen, Coffee, Plane, Award, Users, Zap, CircleCheckBig, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CareersPage = () => {
  return (
    <>
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-muted flex items-center justify-center">
             <span className="text-muted-foreground">Office Image Placeholder</span>
          </div>
          <div className="absolute inset-0 bg-foreground/70"></div>
        </div>
        <div className="container mx-auto text-center relative z-10 px-4">
          <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary-foreground border border-primary/30 rounded-full text-sm font-medium mb-6">We're Hiring!</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-2">
            Build Your Career at Pravaah Technology
          </h1>
          <p className="text-primary-foreground/80 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Join a team of passionate innovators building the future of technology. We offer meaningful work, great benefits, and endless growth opportunities.
          </p>
          <a href="#positions" className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity">
            View Open Positions <ArrowRight className="w-[18px] h-[18px]" />
          </a>
        </div>
      </section>

      <section className="section-padding py-24 bg-primary-soft">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Benefits & Perks</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Why Work With Us</h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              We believe happy people do their best work. That's why we invest in our team's wellbeing, growth, and happiness.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4"><Heart className="w-[22px] h-[22px] text-primary" /></div>
              <h4 className="font-display font-semibold text-foreground">Health & Wellness</h4>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">Comprehensive health, dental, and vision insurance for you and your family.</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4"><Globe className="w-[22px] h-[22px] text-primary" /></div>
              <h4 className="font-display font-semibold text-foreground">Remote-Friendly</h4>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">Work from anywhere with flexible remote and hybrid options available.</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4"><BookOpen className="w-[22px] h-[22px] text-primary" /></div>
              <h4 className="font-display font-semibold text-foreground">Learning Budget</h4>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">$2,000 annual budget for courses, conferences, certifications, and books.</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4"><Coffee className="w-[22px] h-[22px] text-primary" /></div>
              <h4 className="font-display font-semibold text-foreground">Flexible Hours</h4>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">We trust you to manage your time. Core hours with flexibility around them.</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4"><Plane className="w-[22px] h-[22px] text-primary" /></div>
              <h4 className="font-display font-semibold text-foreground">Paid Time Off</h4>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">Generous PTO policy with 20+ vacation days plus company holidays.</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4"><Award className="w-[22px] h-[22px] text-primary" /></div>
              <h4 className="font-display font-semibold text-foreground">Growth Path</h4>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">Clear career progression with regular reviews, promotions, and mentorship.</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4"><Users className="w-[22px] h-[22px] text-primary" /></div>
              <h4 className="font-display font-semibold text-foreground">Team Events</h4>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">Quarterly team retreats, monthly socials, and annual company offsite.</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4"><Zap className="w-[22px] h-[22px] text-primary" /></div>
              <h4 className="font-display font-semibold text-foreground">Latest Tech</h4>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">Top-of-the-line equipment and tools. MacBook Pro, monitors, and more.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding py-24">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl relative h-[400px] bg-muted flex items-center justify-center">
              <span className="text-muted-foreground">Team Culture Image Placeholder</span>
            </div>
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Culture</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">A Place Where You Belong</h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                At Pravaah Technology, we've built a culture that values creativity, collaboration, and continuous learning. We believe the best ideas come from diverse teams working together in an environment of trust and respect.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3"><CircleCheckBig className="w-[18px] h-[18px] text-primary shrink-0" /><span className="text-muted-foreground text-sm">We celebrate diversity and inclusion</span></div>
                <div className="flex items-center gap-3"><CircleCheckBig className="w-[18px] h-[18px] text-primary shrink-0" /><span className="text-muted-foreground text-sm">Open-door policy with flat hierarchy</span></div>
                <div className="flex items-center gap-3"><CircleCheckBig className="w-[18px] h-[18px] text-primary shrink-0" /><span className="text-muted-foreground text-sm">Innovation time — 10% of work for side projects</span></div>
                <div className="flex items-center gap-3"><CircleCheckBig className="w-[18px] h-[18px] text-primary shrink-0" /><span className="text-muted-foreground text-sm">Weekly knowledge-sharing sessions</span></div>
                <div className="flex items-center gap-3"><CircleCheckBig className="w-[18px] h-[18px] text-primary shrink-0" /><span className="text-muted-foreground text-sm">Collaborative and supportive environment</span></div>
                <div className="flex items-center gap-3"><CircleCheckBig className="w-[18px] h-[18px] text-primary shrink-0" /><span className="text-muted-foreground text-sm">Continuous feedback and growth culture</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-soft py-24">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Team Voices</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">What Our Team Says</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 h-full flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-warning fill-warning" />)}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed italic flex-grow">
                "For me, Pravaah Technology is about ownership and trust. We keep the team lean, collaborate closely, and stay very close to the problems we are solving for clients."
              </p>
              <div className="mt-6">
                <p className="font-display font-semibold text-foreground text-sm">Amit Yadav</p>
                <p className="text-muted-foreground text-xs">CEO, Founder & Developer</p>
              </div>
            </div>
            
            <div className="glass-card p-8 h-full flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-warning fill-warning" />)}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed italic flex-grow">
                "We focus on writing clean, maintainable code and shipping features that actually matter. Everyone has a voice in how we design and build our products."
              </p>
              <div className="mt-6">
                <p className="font-display font-semibold text-foreground text-sm">Belal Ahmad</p>
                <p className="text-muted-foreground text-xs">Co-Founder & Developer</p>
              </div>
            </div>
            
            <div className="glass-card p-8 h-full flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-warning fill-warning" />)}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed italic flex-grow">
                "Design is involved from day one here. I get to work directly with founders and developers to create interfaces that are simple, clear, and easy to use."
              </p>
              <div className="mt-6">
                <p className="font-display font-semibold text-foreground text-sm">Manish Kumar</p>
                <p className="text-muted-foreground text-xs">UI/UX & Graphic Designer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="positions" className="section-padding py-24">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Open Positions</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Join Our Team</h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              We're always looking for talented people who share our passion for technology and innovation.
            </p>
          </div>
          <div className="space-y-4 max-w-4xl mx-auto">
            <p className="text-center text-muted-foreground py-8">Loading open positions...</p>
          </div>
        </div>
      </section>

      <section className="section-padding py-24 bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">Don't See Your Perfect Role?</h2>
          <p className="text-primary-foreground/80 mt-4 max-w-xl mx-auto leading-relaxed">
            We're always looking for exceptional talent. Send us your resume and we'll reach out when a matching opportunity opens up.
          </p>
          <Link className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-primary-foreground text-primary rounded-xl font-semibold hover:opacity-90 transition-opacity" to="/contact">
            Submit General Application <ArrowRight className="w-[18px] h-[18px]" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default CareersPage;
