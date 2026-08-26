import React, { useState } from 'react';
import { X, Check, Phone, MapPin } from 'lucide-react';
import { Language, CategoryItem } from '../types';
import { translations } from '../data/translations';

interface CollectionModalProps {
  category: CategoryItem | null;
  currentLang: Language;
  onClose: () => void;
}

export const CollectionModal: React.FC<CollectionModalProps> = ({
  category,
  currentLang,
  onClose,
}) => {
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  const t = translations[currentLang];

  if (!category) return null;

  const title = currentLang === 'en' ? category.titleEn : category.titleAm;
  const desc = currentLang === 'en' ? category.descriptionEn : category.descriptionAm;
  const highlights = currentLang === 'en' ? category.highlightsEn : category.highlightsAm;

  const images = category.featuredImages && category.featuredImages.length > 0
    ? category.featuredImages
    : [category.image];

  return (
    <div
      id="collection-modal"
      className="fixed inset-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 md:p-8 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#111111] border border-white/15 overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-[#1A1A1A] hover:bg-[#D4AF37] text-[#F5F2ED] hover:text-black transition-colors border border-white/10 cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left Side: Images */}
        <div className="md:w-1/2 bg-black flex flex-col justify-between p-4 bg-[#0A0A0A]">
          <div className="relative aspect-[3/4] overflow-hidden border border-white/10 bg-[#141414]">
            <img
              src={images[selectedImgIndex]}
              alt={title}
              className="w-full h-full object-cover object-center filter brightness-[0.9]"
            />
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImgIndex(i)}
                  className={`w-16 h-16 overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                    selectedImgIndex === i ? 'border-[#D4AF37] opacity-100 scale-105' : 'border-white/10 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Description and Highlights */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-[#111111]">
          <div className="space-y-5">
            <span className="text-[9px] uppercase tracking-[0.2em] font-bold px-2.5 py-1 bg-[#1A1A1A] border border-white/10 text-[#D4AF37] inline-block">
              4U Style Platinum Collection
            </span>

            <h3 className="text-3xl font-serif italic text-[#F5F2ED]">
              {title}
            </h3>

            <p className="text-sm text-[#F5F2ED]/60 font-light leading-relaxed">
              {desc}
            </p>

            <div className="space-y-2 pt-2">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#D4AF37]">
                {currentLang === 'en' ? 'Collection Highlights' : 'የስብስቡ ዋና ዋና ባህሪያት'}
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {highlights.map((hl, index) => (
                  <div key={index} className="flex items-center gap-2.5 text-xs text-[#F5F2ED]/85 font-light">
                    <div className="w-3.5 h-3.5 bg-[#D4AF37] flex items-center justify-center shrink-0">
                      <Check className="w-2 h-2 text-black" />
                    </div>
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 bg-[#141414] border border-white/10 text-xs text-[#F5F2ED]/60 font-light">
              <p>
                {currentLang === 'en'
                  ? 'Personal styling and custom fitting available at Robel Plaza, Cameroon Street.'
                  : 'በካሜሮን ጎዳና ሮቤል ፕላዛ በሚገኘው መደብራችን የልኬት አገልግሎት ያገኛሉ።'}
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3 mt-6">
            <a
              href={`tel:${t.phoneTel}`}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#F5F2ED] hover:bg-[#D4AF37] text-black font-bold text-[10px] uppercase tracking-[0.2em] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>{t.store.callNowBtn} ({t.phoneNumber})</span>
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Robel+Plaza+Cameroon+St+Addis+Ababa+Ethiopia"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 border border-white/20 bg-[#141414] text-[#F5F2ED] hover:text-[#D4AF37] hover:border-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.2em] transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{t.nav.getDirections}</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

