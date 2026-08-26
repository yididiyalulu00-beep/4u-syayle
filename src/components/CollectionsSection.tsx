import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Language, CategoryItem } from '../types';
import { translations } from '../data/translations';
import { collectionsData } from '../data/fashionData';

interface CollectionsSectionProps {
  currentLang: Language;
  onSelectCategory: (category: CategoryItem) => void;
}

export const CollectionsSection: React.FC<CollectionsSectionProps> = ({
  currentLang,
  onSelectCategory,
}) => {
  const t = translations[currentLang];

  return (
    <section id="collections" className="py-24 sm:py-32 bg-[#0A0A0A] text-[#F5F2ED] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-bold block mb-3">
              {t.collections.badge}
            </span>
            
            <h2
              id="collections-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-light font-serif-luxury tracking-tight text-[#F5F2ED]"
            >
              {t.collections.title}
            </h2>
          </div>
          
          <p className="text-[#F5F2ED]/60 text-sm sm:text-base font-light max-w-md">
            {t.collections.subtitle}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {collectionsData.map((category, index) => {
            const isWide = index === 0 || index === 4;
            const title = currentLang === 'en' ? category.titleEn : category.titleAm;
            const desc = currentLang === 'en' ? category.descriptionEn : category.descriptionAm;
            const highlights = currentLang === 'en' ? category.highlightsEn : category.highlightsAm;

            return (
              <div
                key={category.id}
                onClick={() => onSelectCategory(category)}
                className={`group relative overflow-hidden border border-white/10 bg-[#111111] transition-all duration-500 hover:border-[#D4AF37] flex flex-col justify-end min-h-[440px] cursor-pointer ${
                  isWide && index === 0 ? 'lg:col-span-2' : isWide && index === 4 ? 'lg:col-span-2' : 'col-span-1'
                }`}
              >
                {/* Background Category Image */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={category.image}
                    alt={title}
                    className="w-full h-full object-cover object-center filter brightness-[0.6] contrast-[1.08] transition-transform duration-700 ease-out group-hover:scale-106 group-hover:brightness-[0.7]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-end">
                  
                  {/* Category highlights pills */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {highlights.slice(0, 2).map((hl, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 bg-black/80 border border-white/15 text-[#F5F2ED] backdrop-blur-sm"
                      >
                        {hl}
                      </span>
                    ))}
                  </div>

                  {/* Title & Arrow in Editorial Layout */}
                  <div className="flex items-end justify-between border-b border-white/10 pb-4 group-hover:border-[#D4AF37] transition-colors">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-serif italic text-[#F5F2ED] group-hover:text-[#D4AF37] transition-colors">
                        {title}
                      </h3>
                      <p className="text-[#F5F2ED]/60 text-xs sm:text-sm font-light mt-1 line-clamp-2 max-w-xl">
                        {desc}
                      </p>
                    </div>

                    <span className="text-[#D4AF37] text-2xl group-hover:translate-x-1 transition-transform ml-4 shrink-0">
                      →
                    </span>
                  </div>

                  {/* View Action Prompt */}
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#F5F2ED]/50 group-hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                      <span>{t.collections.viewCollection}</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                    <span className="text-[10px] font-mono tracking-widest text-[#F5F2ED]/30">
                      0{index + 1}
                    </span>
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

