import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Phone, MapPin } from 'lucide-react';
import { Language, LookbookImage } from '../types';
import { translations } from '../data/translations';

interface LightboxModalProps {
  image: LookbookImage | null;
  allImages: LookbookImage[];
  currentLang: Language;
  onClose: () => void;
  onSelectImage: (img: LookbookImage) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  image,
  allImages,
  currentLang,
  onClose,
  onSelectImage,
}) => {
  const t = translations[currentLang];

  useEffect(() => {
    if (!image) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scroll
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [image, allImages]);

  if (!image) return null;

  const currentIndex = allImages.findIndex((item) => item.id === image.id);

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    onSelectImage(allImages[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % allImages.length;
    onSelectImage(allImages[nextIndex]);
  };

  const title = currentLang === 'en' ? image.titleEn : image.titleAm;
  const categoryName = currentLang === 'en' ? image.categoryNameEn : image.categoryNameAm;
  const caption = currentLang === 'en' ? image.captionEn : image.captionAm;

  return (
    <div
      id="lookbook-lightbox"
      className="fixed inset-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full bg-[#111111] border border-white/15 overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-[#1A1A1A] hover:bg-[#D4AF37] text-[#F5F2ED] hover:text-black transition-colors border border-white/10 cursor-pointer"
          aria-label="Close Lightbox"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left / Main: High-Res Image Viewport */}
        <div className="relative lg:w-3/5 bg-black flex items-center justify-center min-h-[360px] sm:min-h-[480px] lg:min-h-[580px] overflow-hidden group">
          <img
            src={image.imageUrl}
            alt={title}
            className="w-full h-full object-contain object-center max-h-[75vh] filter brightness-[0.9]"
          />

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-3 bg-black/80 hover:bg-[#D4AF37] text-[#F5F2ED] hover:text-black border border-white/10 transition-colors cursor-pointer"
            aria-label="Previous Look"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-black/80 hover:bg-[#D4AF37] text-[#F5F2ED] hover:text-black border border-white/10 transition-colors cursor-pointer"
            aria-label="Next Look"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right: Editorial Details Panel */}
        <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-[#111111]">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[9px] uppercase tracking-[0.2em] font-bold px-2.5 py-1 bg-[#1A1A1A] border border-white/10 text-[#D4AF37]">
                {categoryName}
              </span>
              <span className="text-xs font-mono text-[#F5F2ED]/40">
                {currentIndex + 1} / {allImages.length}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif italic text-[#F5F2ED]">
              {title}
            </h3>

            <p className="text-sm text-[#F5F2ED]/60 font-light leading-relaxed">
              {caption}
            </p>

            <div className="p-4 bg-[#141414] border border-white/10 space-y-2">
              <span className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-[0.2em] block">
                4U Style Platinum
              </span>
              <p className="text-xs text-[#F5F2ED]/60 font-light">
                {currentLang === 'en'
                  ? 'All pieces tailored and available at our Robel Plaza boutique on Cameroon Street.'
                  : 'ሁሉም አልባሳት በአዲስ አበባ ካሜሮን ጎዳና ሮቤል ፕላዛ በሚገኘው መደብራችን ይገኛሉ።'}
              </p>
            </div>
          </div>

          {/* Action CTA buttons */}
          <div className="pt-6 border-t border-white/10 space-y-3">
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

