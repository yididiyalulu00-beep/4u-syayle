import React, { useState } from 'react';
import { Maximize2, Layers } from 'lucide-react';
import { Language, LookbookCategory, LookbookImage } from '../types';
import { translations } from '../data/translations';
import { lookbookData } from '../data/fashionData';

interface LookbookSectionProps {
  currentLang: Language;
  onOpenLightbox: (image: LookbookImage, allImages: LookbookImage[]) => void;
}

export const LookbookSection: React.FC<LookbookSectionProps> = ({
  currentLang,
  onOpenLightbox,
}) => {
  const [activeCategory, setActiveCategory] = useState<LookbookCategory>('all');
  const t = translations[currentLang];

  const categories: { key: LookbookCategory; label: string }[] = [
    { key: 'all', label: t.lookbook.allTab },
    { key: 'formal', label: t.lookbook.formalTab },
    { key: 'wedding', label: t.lookbook.weddingTab },
    { key: 'business', label: t.lookbook.businessTab },
    { key: 'smart-casual', label: t.lookbook.smartCasualTab },
    { key: 'evening', label: t.lookbook.eveningTab },
  ];

  const filteredImages = activeCategory === 'all'
    ? lookbookData
    : lookbookData.filter((item) => item.category === activeCategory);

  return (
    <section id="lookbook" className="py-24 sm:py-32 bg-[#0F0F0F] text-[#F5F2ED] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-bold block mb-3">
              {t.lookbook.badge}
            </span>
            
            <h2
              id="lookbook-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-light font-serif-luxury tracking-tight text-[#F5F2ED]"
            >
              {t.lookbook.title}
            </h2>
          </div>
          
          <p className="text-[#F5F2ED]/60 text-sm sm:text-base font-light max-w-md">
            {t.lookbook.subtitle}
          </p>
        </div>

        {/* Editorial Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-white/10 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-[#D4AF37] text-black shadow-md'
                  : 'bg-[#141414] text-[#F5F2ED]/70 border border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Magazine-Style Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[340px]">
          {filteredImages.map((item, idx) => {
            const title = currentLang === 'en' ? item.titleEn : item.titleAm;
            const categoryName = currentLang === 'en' ? item.categoryNameEn : item.categoryNameAm;
            const caption = currentLang === 'en' ? item.captionEn : item.captionAm;

            // Varied row spans for editorial magazine effect
            const isTall = idx % 4 === 0 || idx % 4 === 3;
            const rowSpanClass = isTall ? 'sm:row-span-2 min-h-[500px]' : 'row-span-1 min-h-[340px]';

            return (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(item, filteredImages)}
                className={`group relative overflow-hidden border border-white/10 bg-[#141414] cursor-pointer hover:border-[#D4AF37] transition-all duration-500 shadow-2xl ${rowSpanClass}`}
              >
                {/* Editorial Photo */}
                <img
                  src={item.imageUrl}
                  alt={title}
                  className="w-full h-full object-cover object-top filter brightness-[0.85] contrast-[1.08] transition-transform duration-700 ease-out group-hover:scale-106"
                  loading="lazy"
                />
                
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[9px] uppercase tracking-[0.2em] font-bold px-2.5 py-1 bg-black/85 backdrop-blur-md border border-white/10 text-[#D4AF37]">
                    {categoryName}
                  </span>
                </div>

                {/* Hover Expand Icon */}
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 bg-[#D4AF37] text-black flex items-center justify-center shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Bottom Details Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 z-10 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-xl font-serif italic text-[#F5F2ED] group-hover:text-[#D4AF37] transition-colors mb-1">
                    {title}
                  </h3>
                  <p className="text-xs text-[#F5F2ED]/60 font-light line-clamp-2 mb-2">
                    {caption}
                  </p>
                  <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Layers className="w-3 h-3" />
                    <span>{t.lookbook.clickToEnlarge}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

