import React from 'react';
import { Shirt, Layers, Crown, MapPin } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface WhyChooseUsProps {
  currentLang: Language;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const icons = [
    <Shirt className="w-5 h-5 text-[#D4AF37]" key="1" />,
    <Layers className="w-5 h-5 text-[#D4AF37]" key="2" />,
    <Crown className="w-5 h-5 text-[#D4AF37]" key="3" />,
    <MapPin className="w-5 h-5 text-[#D4AF37]" key="4" />,
  ];

  return (
    <section id="why-us" className="py-24 sm:py-32 bg-[#0A0A0A] text-[#F5F2ED] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-bold block mb-3">
              {t.whyUs.badge}
            </span>
            
            <h2
              id="why-us-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-light font-serif-luxury tracking-tight text-[#F5F2ED]"
            >
              {t.whyUs.title}
            </h2>
          </div>
          
          <p className="text-[#F5F2ED]/60 text-sm sm:text-base font-light max-w-md">
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* 4 Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.whyUs.pillars.map((pillar, index) => (
            <div
              key={index}
              className="p-8 bg-[#141414] border border-white/10 hover:border-[#D4AF37] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 bg-[#1A1A1A] border border-white/10 group-hover:border-[#D4AF37]/60 flex items-center justify-center mb-6 transition-colors">
                  {icons[index]}
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif italic text-[#F5F2ED] mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-[#F5F2ED]/60 text-xs sm:text-sm font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Number indicator */}
              <div className="mt-8 pt-4 border-t border-white/10 flex justify-between items-center text-[10px] font-mono tracking-widest text-[#F5F2ED]/40">
                <span>PILLAR</span>
                <span className="text-[#D4AF37] font-bold">0{index + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

