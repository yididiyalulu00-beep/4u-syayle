import React from 'react';
import { Phone, Navigation, MapPin, Clock } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Robel+Plaza+Cameroon+St+Addis+Ababa+Ethiopia';

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#0A0A0A] text-[#F5F2ED] relative border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 text-center relative z-10">
        
        {/* Section Eyebrow */}
        <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold block mb-4">
          {t.contact.badge}
        </span>

        {/* Section Headline */}
        <h2
          id="contact-headline"
          className="text-4xl sm:text-5xl lg:text-6xl font-light font-serif-luxury tracking-tight text-[#F5F2ED] mb-6"
        >
          {t.contact.headline}
        </h2>

        {/* Supporting Text */}
        <p className="text-sm sm:text-base text-[#F5F2ED]/60 font-light leading-relaxed max-w-2xl mx-auto mb-10 text-balance">
          {t.contact.description}
        </p>

        {/* Big Phone Number Display */}
        <div className="mb-10">
          <a
            href={`tel:${t.phoneTel}`}
            className="inline-block text-2xl sm:text-4xl md:text-5xl font-mono font-bold text-[#D4AF37] hover:text-[#F5F2ED] tracking-wider transition-colors py-3 px-8 bg-[#141414] border border-white/15 shadow-2xl"
          >
            {t.phoneNumber}
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          {/* Call Us Button */}
          <a
            id="contact-call-btn"
            href={`tel:${t.phoneTel}`}
            className="w-full sm:w-auto px-8 py-4 bg-[#F5F2ED] hover:bg-[#D4AF37] text-black font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase transition-colors flex items-center justify-center gap-2.5 shadow-lg"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>{t.contact.callUs}</span>
          </a>

          {/* Get Directions Button */}
          <a
            id="contact-directions-btn"
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 border border-white/20 hover:border-[#D4AF37] bg-[#141414] text-[#F5F2ED] hover:text-[#D4AF37] font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase transition-colors flex items-center justify-center gap-2.5"
          >
            <Navigation className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{t.contact.getDirections}</span>
          </a>
        </div>

        {/* Quick Micro-Info Pills */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#F5F2ED]/50 font-light">
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Robel Plaza, Cameroon St, Addis Ababa, Ethiopia</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Mon–Sat: 8:30 AM – 9:00 PM • Sun: 12:00 PM – 7:30 PM</span>
          </div>
        </div>

      </div>
    </section>
  );
};

