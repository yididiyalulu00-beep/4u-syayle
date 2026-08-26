import React from 'react';
import { CheckCircle2, MapPin, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface AboutSectionProps {
  currentLang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#0F0F0F] text-[#F5F2ED] relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Editorial Men's Fashion Image */}
          <div className="lg:col-span-5 relative group">
            <div className="relative overflow-hidden border border-white/10 shadow-2xl bg-[#1A1A1A]">
              <img
                src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=85&w=1200&auto=format&fit=crop"
                alt="4U Style Platinum Tailored Menswear Excellence"
                className="w-full h-[500px] sm:h-[600px] object-cover object-top filter brightness-[0.85] contrast-[1.08] transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-70" />
              
              {/* Corner Badge in editorial styling */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#0A0A0A]/95 border border-white/10 backdrop-blur-md">
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 bg-[#D4AF37] flex items-center justify-center text-black font-bold text-xs shrink-0 tracking-wider">
                    4U
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#F5F2ED] tracking-[0.2em] uppercase">
                      4U Style Platinum
                    </h3>
                    <p className="text-[11px] text-[#F5F2ED]/50 tracking-wider mt-0.5">
                      Robel Plaza • Cameroon St • Addis Ababa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Brand Introduction */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Section Eyebrow */}
            <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold">
              {t.about.badge}
            </span>

            {/* Main Section Title */}
            <h2
              id="about-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-light font-serif-luxury tracking-tight text-[#F5F2ED] leading-[1.1]"
            >
              {t.about.title}
            </h2>

            {/* Brand Intro Narrative */}
            <div className="space-y-4 text-[#F5F2ED]/70 text-sm sm:text-base font-light leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p className="text-[#F5F2ED]/90 font-normal">{t.about.p3}</p>
            </div>

            {/* 4 Pillars of Presentation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {t.about.values.map((val, idx) => (
                <div
                  key={idx}
                  className="p-4 border border-white/5 bg-[#141414] hover:border-[#D4AF37]/50 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5F2ED]">
                        {val.title}
                      </h4>
                      <p className="text-xs text-[#F5F2ED]/60 mt-1 leading-relaxed font-light">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to visit location button */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#store"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#1A1A1A] hover:bg-[#D4AF37] hover:text-black border border-white/10 text-[#F5F2ED] text-[10px] uppercase tracking-[0.2em] font-bold transition-all"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>{t.about.callToVisit}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={`tel:${t.phoneTel}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs tracking-[0.15em] uppercase text-[#D4AF37] hover:text-[#F5F2ED] transition-colors font-bold"
              >
                <span>{t.phoneNumber}</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

