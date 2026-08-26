import React from 'react';
import { X, Check, Phone, MapPin, Tag } from 'lucide-react';
import { Language, FeaturedLookItem } from '../types';
import { translations } from '../data/translations';

interface OutfitModalProps {
  look: FeaturedLookItem | null;
  currentLang: Language;
  onClose: () => void;
}

export const OutfitModal: React.FC<OutfitModalProps> = ({
  look,
  currentLang,
  onClose,
}) => {
  const t = translations[currentLang];

  if (!look) return null;

  const name = currentLang === 'en' ? look.nameEn : look.nameAm;
  const tag = currentLang === 'en' ? look.tagEn : look.tagAm;
  const desc = currentLang === 'en' ? look.descriptionEn : look.descriptionAm;
  const pieces = currentLang === 'en' ? look.piecesEn : look.piecesAm;
  const fit = currentLang === 'en' ? look.fitEn : look.fitAm;
  const occasion = currentLang === 'en' ? look.occasionEn : look.occasionAm;

  return (
    <div
      id="outfit-modal"
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

        {/* Left Side: Outfit Photo */}
        <div className="md:w-1/2 bg-black flex items-center justify-center p-4 bg-[#0A0A0A]">
          <div className="relative aspect-[3/4] w-full overflow-hidden border border-white/10 bg-[#141414]">
            <img
              src={look.image}
              alt={name}
              className="w-full h-full object-cover object-top filter brightness-[0.9]"
            />
            <div className="absolute top-3 left-3">
              <span className="text-[9px] tracking-[0.2em] uppercase font-bold px-2.5 py-1 bg-black/85 text-[#D4AF37] border border-white/15">
                {tag}
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Outfit Details */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-[#111111]">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#1A1A1A] border border-white/10 text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.2em]">
                <Tag className="w-3 h-3 text-[#D4AF37]" />
                <span>{t.featured.contactForPrice}</span>
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif italic text-[#F5F2ED]">
              {name}
            </h3>

            <p className="text-sm text-[#F5F2ED]/60 font-light leading-relaxed">
              {desc}
            </p>

            {/* Fit & Occasion */}
            <div className="grid grid-cols-2 gap-2 text-xs py-3 border-y border-white/10">
              <div>
                <span className="text-[#F5F2ED]/40 uppercase tracking-[0.2em] block font-bold text-[9px]">
                  {t.featured.fitLabel}
                </span>
                <span className="text-[#F5F2ED] font-medium mt-0.5 block">{fit}</span>
              </div>
              <div>
                <span className="text-[#F5F2ED]/40 uppercase tracking-[0.2em] block font-bold text-[9px]">
                  {t.featured.occasionLabel}
                </span>
                <span className="text-[#F5F2ED] font-medium mt-0.5 block">{occasion}</span>
              </div>
            </div>

            {/* Pieces breakdown */}
            <div className="space-y-2">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#D4AF37]">
                {t.featured.ensembleIncludes}
              </h4>
              <div className="space-y-1.5">
                {pieces.map((piece, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#F5F2ED]/70 font-light">
                    <div className="w-3.5 h-3.5 bg-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2 h-2 text-black" />
                    </div>
                    <span>{piece}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="pt-6 border-t border-white/10 space-y-3 mt-6">
            <a
              href={`tel:${t.phoneTel}`}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#F5F2ED] hover:bg-[#D4AF37] text-black font-bold text-[10px] uppercase tracking-[0.2em] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>{t.featured.contactForPrice} • {t.phoneNumber}</span>
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

