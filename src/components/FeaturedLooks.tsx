import React from 'react';
import { Phone, ChevronRight, Eye } from 'lucide-react';
import { Language, FeaturedLookItem } from '../types';
import { translations } from '../data/translations';
import { featuredLooksData } from '../data/fashionData';

interface FeaturedLooksProps {
  currentLang: Language;
  onSelectLook: (look: FeaturedLookItem) => void;
}

export const FeaturedLooks: React.FC<FeaturedLooksProps> = ({
  currentLang,
  onSelectLook,
}) => {
  const t = translations[currentLang];

  return (
    <section id="featured" className="py-24 sm:py-32 bg-[#0F0F0F] text-[#F5F2ED] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-bold block mb-3">
              {t.featured.badge}
            </span>
            
            <h2
              id="featured-looks-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-light font-serif-luxury tracking-tight text-[#F5F2ED]"
            >
              {t.featured.title}
            </h2>
          </div>
          
          <p className="text-[#F5F2ED]/60 text-sm sm:text-base font-light max-w-md">
            {t.featured.subtitle}
          </p>
        </div>

        {/* Featured Looks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredLooksData.map((look) => {
            const name = currentLang === 'en' ? look.nameEn : look.nameAm;
            const tag = currentLang === 'en' ? look.tagEn : look.tagAm;
            const desc = currentLang === 'en' ? look.descriptionEn : look.descriptionAm;

            return (
              <div
                key={look.id}
                className="group relative bg-[#141414] border border-white/10 overflow-hidden flex flex-col hover:border-[#D4AF37] transition-all duration-500"
              >
                {/* Outfit Card Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-[#1A1A1A]">
                  <img
                    src={look.image}
                    alt={name}
                    className="w-full h-full object-cover object-top filter brightness-[0.9] contrast-[1.06] transition-transform duration-700 ease-out group-hover:scale-106"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-80" />
                  
                  {/* Category Tag pill */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[9px] tracking-widest uppercase font-bold px-2.5 py-1 bg-black/85 backdrop-blur-md text-[#D4AF37] border border-white/10">
                      {tag}
                    </span>
                  </div>

                  {/* Price Requirement Pill: "Contact for Price" */}
                  <div className="absolute top-3 right-3">
                    <span className="text-[9px] tracking-wider uppercase font-semibold px-2.5 py-1 bg-black/90 backdrop-blur-md text-[#F5F2ED] border border-[#D4AF37]/50 flex items-center gap-1">
                      <Phone className="w-2.5 h-2.5 text-[#D4AF37]" />
                      <span>{t.featured.contactForPrice}</span>
                    </span>
                  </div>

                  {/* Quick View Button overlay on hover */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <button
                      onClick={() => onSelectLook(look)}
                      className="px-5 py-3 bg-[#F5F2ED] hover:bg-[#D4AF37] text-black font-bold text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 shadow-xl cursor-pointer transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>{t.featured.viewDetails}</span>
                    </button>
                  </div>
                </div>

                {/* Outfit Card Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-serif italic text-[#F5F2ED] group-hover:text-[#D4AF37] transition-colors mb-2 leading-snug">
                      {name}
                    </h3>
                    <p className="text-xs text-[#F5F2ED]/60 font-light leading-relaxed line-clamp-2 mb-4">
                      {desc}
                    </p>
                  </div>

                  {/* Action Footer */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => onSelectLook(look)}
                      className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#D4AF37] hover:text-[#F5F2ED] transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>{t.featured.viewDetails}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={`tel:${t.phoneTel}`}
                      title={t.featured.contactForPrice}
                      className="p-1.5 border border-white/10 hover:border-[#D4AF37] text-[#F5F2ED]/70 hover:text-[#D4AF37] transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

