import React from 'react';
import { Phone, ArrowRight, Check } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface WeddingFormalSectionProps {
  currentLang: Language;
}

export const WeddingFormalSection: React.FC<WeddingFormalSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="wedding" className="py-24 sm:py-32 bg-[#0A0A0A] text-[#F5F2ED] relative border-t border-white/5 overflow-hidden">
      {/* Editorial Luxury Background with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=85&w=2000&auto=format&fit=crop"
          alt="4U Style Platinum Wedding & Black Tie Formal Menswear"
          className="w-full h-full object-cover object-center filter brightness-[0.2] contrast-[1.15]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0A0A0A_95%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 space-y-8">
            <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold block">
              {t.wedding.badge}
            </span>

            <h2
              id="wedding-headline"
              className="text-4xl sm:text-5xl lg:text-6xl font-light font-serif-luxury tracking-tight text-[#F5F2ED] leading-[1.05]"
            >
              {t.wedding.headline}
            </h2>

            <p className="text-sm sm:text-base text-[#F5F2ED]/60 font-light leading-relaxed max-w-2xl text-balance">
              {t.wedding.description}
            </p>

            {/* Wedding Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {t.wedding.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3.5 border border-white/10 bg-[#141414]/90 backdrop-blur-sm"
                >
                  <div className="w-4 h-4 bg-[#D4AF37] flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-black" />
                  </div>
                  <span className="text-xs sm:text-sm text-[#F5F2ED]/85 font-medium tracking-wide">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                id="wedding-explore-btn"
                href="#lookbook"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F5F2ED] hover:bg-[#D4AF37] text-black font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase transition-colors"
              >
                <span>{t.wedding.exploreBtn}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                id="wedding-contact-btn"
                href={`tel:${t.phoneTel}`}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-white/30 hover:border-[#D4AF37] bg-[#0A0A0A]/60 text-[#F5F2ED] hover:text-[#D4AF37] font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase transition-colors backdrop-blur-sm"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{t.wedding.contactBtn}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Visual Showcase */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden border border-white/10 shadow-2xl bg-[#141414] aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=800&auto=format&fit=crop"
                  alt="Black Tie Tuxedo"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 filter brightness-[0.9]"
                  loading="lazy"
                />
              </div>
              <div className="p-4 bg-[#141414] border border-white/10">
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#D4AF37] font-bold block mb-1">
                  Tailored For Milestones
                </span>
                <p className="text-xs text-[#F5F2ED]/70 font-light">
                  {currentLang === 'en' ? 'Groom Tuxedos & Reception Suits' : 'ለሙሽሮችና ለክብር እንግዶች'}
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="p-4 bg-[#141414] border border-white/10">
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#D4AF37] font-bold block mb-1">
                  Consultation
                </span>
                <p className="text-xs text-[#F5F2ED]/70 font-light">
                  Robel Plaza, Cameroon St
                </p>
              </div>
              <div className="overflow-hidden border border-white/10 shadow-2xl bg-[#141414] aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
                  alt="Wedding Groom Ensemble"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 filter brightness-[0.9]"
                  loading="lazy"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

