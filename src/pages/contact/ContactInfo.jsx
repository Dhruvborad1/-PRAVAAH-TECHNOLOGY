import React from 'react';
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal';

// Pre-filled Email Subject and Body Message
const emailSubject = encodeURIComponent("Project Inquiry - Pravaah Technologies");
const emailBody = encodeURIComponent(
  "Hello Pravaah Technologies Team,\n\nI am reaching out regarding a new project inquiry. Here are the brief requirements:\n\n- Project Type:\n- Expected Timeline:\n- Key Objectives:\n\nPlease connect with me at your earliest convenience.\n\nThank you!"
);

// Contact Channels Configuration
const contactMethods = [
  {
    icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#00D2FF]" />,
    title: 'Email Support',
    value: 'support@pravaahtechnology.in',
    caption: 'Reply within 4 hrs',
    accent: '#00D2FF',
    actionType: 'email',
    // Opens directly in Gmail compose window with pre-filled content
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=support@pravaahtechnology.in&su=${emailSubject}&body=${emailBody}`
  },
  {
    icon: <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#2F54EB]" />,
    title: 'Direct Call',
    value: '+91 8449274276',
    caption: 'Mon-Fri, 11AM-9PM',
    accent: '#2F54EB',
    actionType: 'link',
    // Opens phone dialer
    href: 'tel:+918449274276'
  },
  {
    icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#9B51E0]" />,
    title: 'Office Location',
    value: 'Amorina Market, Surat',
    caption: '395011, India',
    accent: '#9B51E0',
    actionType: 'map',
    // Opens the exact Google Maps location link provided
    href: 'https://maps.app.goo.gl/xhQdJpPGNhaDX88V9'
  },
  {
    icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-500" />,
    title: 'Working Hours',
    value: '11:00 AM — 09:00 PM',
    caption: 'Weekend standby',
    accent: '#00D2FF',
    actionType: 'badge',
    badgeText: 'Active'
  }
];

const ContactCard = ({ item, index }) => {
  return (
    <ScrollReveal variant="lift" delay={index * 0.05}>
      <div className="group relative h-full rounded-xl sm:rounded-2xl border border-slate-200/90 bg-white/95 p-3.5 sm:p-5 shadow-xs transition-all duration-300 hover:border-slate-300 hover:shadow-md hover:-translate-y-1 flex flex-col justify-between overflow-hidden">
        
        {/* Top Accent Line Highlight */}
        <div 
          className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ backgroundColor: item.accent }}
        />

        {/* Main Card Content */}
        <div>
          {/* Header: Icon + Action Button */}
          <div className="flex items-center justify-between mb-2.5 sm:mb-3.5">
            <div 
              className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-slate-50 border border-slate-100 group-hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: `${item.accent}0D` }}
            >
              {item.icon}
            </div>

            {/* Email Action Link (Gmail Direct) */}
            {item.actionType === 'email' ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-xs transition-all duration-300 hover:bg-slate-950 hover:text-white hover:border-slate-950 group/btn"
                aria-label="Direct Email via Gmail"
                title="Send inquiry on Gmail"
              >
                <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            ) : item.actionType === 'link' ? (
              /* Phone Action Link */
              <a
                href={item.href}
                className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-xs transition-all duration-300 hover:bg-slate-950 hover:text-white hover:border-slate-950 group/btn"
                aria-label="Direct Call"
                title="Direct Phone Call"
              >
                <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            ) : item.actionType === 'map' ? (
              /* Google Maps Action Link */
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-xs transition-all duration-300 hover:bg-slate-950 hover:text-white hover:border-slate-950 group/btn"
                aria-label="Open in Google Maps"
                title="Open location in Google Maps"
              >
                <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            ) : (
              /* Status Badges */
              <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 rounded-full border border-slate-200 bg-slate-50 text-[10px] sm:text-xs font-semibold text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: item.accent }} />
                {item.badgeText}
              </span>
            )}
          </div>

          {/* Card Title */}
          <h3 className="font-display font-bold text-slate-900 text-xs sm:text-base group-hover:text-blue-600 transition-colors line-clamp-1">
            {item.title}
          </h3>

          {/* Card Value */}
          <p className="text-slate-800 font-semibold text-[11px] sm:text-[15px] mt-1 break-all sm:break-words leading-tight sm:leading-normal">
            {item.value}
          </p>
        </div>

        {/* Footer: Micro Caption + Accent Dot */}
        <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] sm:text-xs text-slate-500">
          <span className="truncate pr-1">{item.caption}</span>
          <span 
            className="w-1.5 h-1.5 rounded-full shrink-0"
            style={{ backgroundColor: item.accent }}
          />
        </div>

      </div>
    </ScrollReveal>
  );
};

const ContactInfo = () => {
  return (
    <section 
      className="py-10 sm:py-12 md:py-16 bg-white border-y border-slate-200/80 relative overflow-hidden"
      aria-label="Contact Channels"
    >
      {/* Background Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-5 md:px-8">
        {/* Mobile: 2x2 Grid (2 on top, 2 on bottom) | Desktop: 4 Columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {contactMethods.map((item, index) => (
            <ContactCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;