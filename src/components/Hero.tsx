import React from 'react';
import { ArrowRight, MapPin, Star, ChevronDown, Compass } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { getStoreStatus } from '../data/fashionData';

interface HeroProps {
  currentLang: Language;
}

export const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const status = getStoreStatus(currentLang);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* High-Resolution Fashion Background Image with Editorial Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=85&w=2000&auto=format&fit=crop"
          alt="4U Style Platinum Menswear Campaign"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.12]"
          loading="eager"
        />
        {/* Subtle Radial Gradient from theme */}
        <div className="absolute inset-0 bg-[#0A0A0A]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0A0A0A_95%)]" />
        <div className="absolute top-24 left-10 md:left-24 w-px h-64 bg-gradient-to-b from-[#D4AF37] to-transparent opacity-30 pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center pt-32 pb-24 flex flex-col items-center">
        {/* Verified Location & Store Rating Tag */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 border border-white/10 bg-[#0A0A0A]/85 backdrop-blur-md mb-8">
          <div className="flex items-center text-[#D4AF37]">
            <Star className="w-3 h-3 fill-[#D4AF37]" />
            <span className="text-[11px] font-bold tracking-wider ml-1">4.5 / 5.0</span>
          </div>
          <span className="text-white/20">•</span>
          <span className="text-[11px] text-[#F5F2ED]/70 uppercase tracking-widest flex items-center gap-1.5 font-medium">
            <MapPin className="w-3 h-3 text-[#D4AF37]" />
            Robel Plaza, Cameroon St
          </span>
          <span className="hidden sm:inline-block text-white/20">•</span>
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-[#D4AF37] font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {status.isOpen ? (currentLang === 'en' ? 'Open Now' : 'አሁን ክፍት ነው') : (currentLang === 'en' ? 'Open Today' : 'ዛሬ ክፍት')}
          </span>
        </div>

        {/* Editorial Eyebrow Tag */}
        <span className="text-[#D4AF37] text-xs uppercase tracking-[0.4em] font-bold mb-4">
          {t.hero.subtitle}
        </span>

        {/* Main Headline with Georgia / Cormorant Editorial Serif */}
        <h1
          id="hero-headline"
          className="text-5xl sm:text-7xl md:text-8xl font-light leading-[0.95] tracking-tighter text-[#F5F2ED] mb-6 font-serif-luxury"
        >
          YOUR STYLE.<br />
          <span className="italic font-serif text-[#D4AF37]">YOUR STATEMENT.</span>
        </h1>

        {/* Supporting Text */}
        <p
          id="hero-description"
          className="max-w-xl text-sm sm:text-base text-[#F5F2ED] opacity-60 leading-relaxed mb-10 font-light"
        >
          {t.hero.description}
        </p>

        {/* Primary and Secondary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Primary Button */}
          <a
            id="hero-explore-btn"
            href="#collections"
            className="w-full sm:w-auto bg-[#F5F2ED] text-black px-8 py-4 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#D4AF37] transition-colors flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>{t.hero.exploreBtn}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Secondary Button */}
          <a
            id="hero-visit-btn"
            href="#store"
            className="w-full sm:w-auto border border-white/30 text-white hover:border-[#D4AF37] hover:text-[#D4AF37] px-8 py-4 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold transition-colors bg-[#0A0A0A]/60 backdrop-blur-sm flex items-center justify-center gap-2.5"
          >
            <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{t.hero.visitBtn}</span>
          </a>
        </div>
      </div>

      {/* Bottom Scroll Prompt */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1 opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
        <a href="#about" className="flex flex-col items-center text-[#F5F2ED]">
          <span className="text-[9px] tracking-[0.25em] uppercase font-semibold">
            {t.hero.scrollPrompt}
          </span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce mt-1 text-[#D4AF37]" />
        </a>
      </div>
    </section>
  );
};

