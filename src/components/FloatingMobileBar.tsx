import React from 'react';
import { Phone, Navigation } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface FloatingMobileBarProps {
  currentLang: Language;
}

export const FloatingMobileBar: React.FC<FloatingMobileBarProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Robel+Plaza+Cameroon+St+Addis+Ababa+Ethiopia';

  return (
    <div
      id="floating-mobile-bar"
      className="lg:hidden fixed bottom-4 inset-x-4 z-40 bg-[#0A0A0A]/95 backdrop-blur-md border border-white/15 p-2 shadow-2xl flex items-center gap-2"
    >
      <a
        href={`tel:${t.phoneTel}`}
        className="flex-1 flex items-center justify-center gap-2 py-3 px-3 bg-[#F5F2ED] hover:bg-[#D4AF37] text-black font-bold text-[10px] uppercase tracking-[0.2em] transition-colors"
      >
        <Phone className="w-3.5 h-3.5 fill-current" />
        <span>{t.store.callNowBtn}</span>
      </a>

      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 px-3 bg-[#141414] border border-white/20 hover:border-[#D4AF37] text-[#F5F2ED] hover:text-[#D4AF37] font-bold text-[10px] uppercase tracking-[0.2em] transition-colors"
      >
        <Navigation className="w-3 h-3 text-[#D4AF37]" />
        <span>{t.nav.getDirections}</span>
      </a>
    </div>
  );
};

