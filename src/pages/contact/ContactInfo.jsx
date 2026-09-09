import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ArrowUpRight, Check, Copy } from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal';

const contactMethods = [
  {
    icon: <Mail className="w-5 h-5 text-[#00D2FF]" />,
    title: 'Email Support',
    value: 'support@pravaahtechnology.in',
    caption: 'Response within 4 hours',
    accent: '#00D2FF',
    actionType: 'copy',
    href: 'mailto:support@pravaahtechnology.in'
  },
  {
    icon: <Phone className="w-5 h-5 text-[#2F54EB]" />,
    title: 'Direct Call',
    value: '+91 8449274276',
    caption: 'Mon-Fri, 11 AM - 9 PM',
    accent: '#2F54EB',
    actionType: 'link',
    href: 'tel:+918449274276'
  },
  {
    icon: <MapPin className="w-5 h-5 text-[#9B51E0]" />,
    title: 'Office Location',
    value: 'Padri Bazar, Gorakhpur',
    caption: 'UP - 273014, India',
    accent: '#9B51E0',
    actionType: 'badge',
    badgeText: 'HQ'
  },
  {
    icon: <Clock className="w-5 h-5 text-cyan-500" />,
    title: 'Working Hours',
    value: '11:00 AM — 09:00 PM',
    caption: 'Weekend on-call standby',
    accent: '#00D2FF',
    actionType: 'badge',
    badgeText: 'Active'
  }
];

const ContactCard = ({ item, index }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <ScrollReveal variant="lift" delay={index * 0.06}>
      <div className="group relative h-full rounded-2xl border border-slate-200/90 bg-white/95 p-4.5 sm:p-5 shadow-xs transition-all duration-300 hover:border-slate-300 hover:shadow-md hover:-translate-y-1 flex flex-col justify-between overflow-hidden">
        
        {/* ટોપ એક્સેન્ટ લાઇન જે હોવર પર બ્રાન્ડ કલરમાં ગ્લો થશે */}
        <div 
          className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ backgroundColor: item.accent }}
        />

        {/* મેઇન કન્ટેન્ટ */}
        <div>
          {/* હેડર: આઇકોન + ક્વિક એક્શન */}
          <div className="flex items-center justify-between mb-3.5">
            <div 
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 group-hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: `${item.accent}0D` }}
            >
              {item.icon}
            </div>

            {item.actionType === 'copy' ? (
              <button
                type="button"
                onClick={() => handleCopy(item.value)}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-colors cursor-pointer"
                title="Copy to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-500" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 text-slate-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            ) : item.actionType === 'link' ? (
              <a
                href={item.href}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors group/btn"
                aria-label="Direct Call"
              >
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: item.accent }} />
                {item.badgeText}
              </span>
            )}
          </div>

          {/* ટાઇટલ */}
          <h3 className="font-display font-bold text-slate-900 text-base group-hover:text-blue-600 transition-colors">
            {item.title}
          </h3>

          {/* વેલ્યૂ (ઈમેલ / ફોન / સરનામું) */}
          <p className="text-slate-800 font-semibold text-sm sm:text-[15px] mt-1 break-words">
            {item.value}
          </p>
        </div>

        {/* ફૂટર: નાનો સબટેક્સ્ટ + એક્સેન્ટ ડોટ */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>{item.caption}</span>
          <span 
            className="w-1.5 h-1.5 rounded-full"
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
      className="py-12 md:py-16 bg-white border-y border-slate-200/80 relative overflow-hidden"
      aria-label="Contact Channels"
    >
      {/* સબટલ બેકગ્રાઉન્ડ મેટ્રિક્સ */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container relative z-10 mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {contactMethods.map((item, index) => (
            <ContactCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;