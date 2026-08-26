import React from 'react';
import { MapPin, Phone, Clock, Star, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { storeSchedule, getStoreStatus } from '../data/fashionData';

interface StoreLocationSectionProps {
  currentLang: Language;
}

export const StoreLocationSection: React.FC<StoreLocationSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const status = getStoreStatus(currentLang);

  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Robel+Plaza+Cameroon+St+Addis+Ababa+Ethiopia';

  return (
    <section id="store" className="py-24 sm:py-32 bg-[#0F0F0F] text-[#F5F2ED] relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-bold block mb-3">
              {t.store.badge}
            </span>
            
            <h2
              id="store-section-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-light font-serif-luxury tracking-tight text-[#F5F2ED]"
            >
              {t.store.title}
            </h2>
          </div>
          
          <p className="text-[#F5F2ED]/60 text-sm sm:text-base font-light max-w-md">
            {t.store.subtitle}
          </p>
        </div>

        {/* Store Information Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Key Business Details & Hours */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            
            {/* Business Verification Card */}
            <div className="p-6 sm:p-8 bg-[#141414] border border-white/10 shadow-2xl space-y-6">
              
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-serif italic text-[#F5F2ED]">
                    4U Style Platinum
                  </h3>
                  <p className="text-[10px] text-[#F5F2ED]/50 tracking-[0.2em] uppercase mt-1">
                    {t.tagline}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 bg-[#1A1A1A] border border-[#D4AF37]/40 text-xs font-semibold text-[#D4AF37]">
                  <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
                  <span>4.5 / 5.0</span>
                </div>
              </div>

              {/* Verified Address Block */}
              <div className="flex items-start gap-4 pt-4 border-t border-white/10">
                <div className="w-9 h-9 bg-[#1A1A1A] border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#F5F2ED]/50 font-bold">
                    {t.store.addressTitle}
                  </h4>
                  <p className="text-base text-[#F5F2ED] font-medium mt-0.5">
                    Robel Plaza, Cameroon St
                  </p>
                  <p className="text-xs text-[#F5F2ED]/60 font-light">
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>

              {/* Verified Direct Phone */}
              <div className="flex items-start gap-4 border-t border-white/10 pt-4">
                <div className="w-9 h-9 bg-[#1A1A1A] border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#F5F2ED]/50 font-bold">
                    {t.store.phoneTitle}
                  </h4>
                  <a
                    href={`tel:${t.phoneTel}`}
                    className="text-lg text-[#D4AF37] hover:text-[#F5F2ED] font-bold tracking-wide transition-colors mt-0.5 block font-mono"
                  >
                    {t.phoneNumber}
                  </a>
                  <p className="text-xs text-[#F5F2ED]/50 font-light">
                    {currentLang === 'en' ? 'Direct store line for inquiries & sizing' : 'ለልኬት እና ለዋጋ ጥያቄ በቀጥታ ይደውሉ'}
                  </p>
                </div>
              </div>

              {/* Live Open / Closed Indicator */}
              <div className="p-4 bg-[#1A1A1A] border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className={`w-2.5 h-2.5 rounded-full ${status.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-500'}`} />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5F2ED]/50">
                      {currentLang === 'en' ? 'Store Status' : 'የመደብሩ ሁኔታ'}
                    </span>
                    <p className="text-sm font-medium text-[#F5F2ED]">
                      {status.statusText}
                    </p>
                  </div>
                </div>
                <Clock className="w-4 h-4 text-[#D4AF37]" />
              </div>

            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                id="store-call-now-btn"
                href={`tel:${t.phoneTel}`}
                className="flex items-center justify-center gap-2.5 py-4 px-6 bg-[#F5F2ED] hover:bg-[#D4AF37] text-black font-bold text-[10px] uppercase tracking-[0.2em] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>{t.store.callNowBtn}</span>
              </a>

              <a
                id="store-get-directions-btn"
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-4 px-6 border border-white/20 hover:border-[#D4AF37] bg-[#141414] text-[#F5F2ED] hover:text-[#D4AF37] font-bold text-[10px] uppercase tracking-[0.2em] transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{t.store.directionsBtn}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Weekly Schedule & Map Preview */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            
            {/* Opening Hours Schedule Table */}
            <div className="p-6 sm:p-8 bg-[#141414] border border-white/10 shadow-2xl">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#D4AF37]" />
                  <h3 className="text-xl font-serif italic text-[#F5F2ED]">
                    {t.store.hoursTitle}
                  </h3>
                </div>
                <span className="text-[10px] text-[#F5F2ED]/40 uppercase tracking-[0.2em] font-mono">
                  Addis Ababa (EAT)
                </span>
              </div>

              <div className="divide-y divide-white/5">
                {storeSchedule.map((item, idx) => {
                  const isCurrentDay = idx === status.currentDayIndex;
                  const dayName = currentLang === 'en' ? item.dayEn : item.dayAm;
                  const hoursText = currentLang === 'en' ? item.hoursEn : item.hoursAm;

                  return (
                    <div
                      key={idx}
                      className={`py-3 px-3 flex items-center justify-between text-xs sm:text-sm transition-colors ${
                        isCurrentDay
                          ? 'bg-[#1A1A1A] border-l-2 border-[#D4AF37] text-[#F5F2ED] font-bold'
                          : 'text-[#F5F2ED]/70 font-light'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{dayName}</span>
                        {isCurrentDay && (
                          <span className="text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 bg-[#D4AF37] text-black">
                            {t.store.today}
                          </span>
                        )}
                      </div>
                      <span className={`font-mono text-xs ${isCurrentDay ? 'text-[#D4AF37]' : 'text-[#F5F2ED]/50'}`}>
                        {hoursText}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#F5F2ED]/50">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{t.store.ratingNote}</span>
                </div>
              </div>
            </div>

            {/* Visual Location Card with Google Maps Link */}
            <div className="p-6 bg-[#141414] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-bold">
                  Cameroon Street, Bole Subcity
                </span>
                <p className="text-xs text-[#F5F2ED]/70 font-light">
                  {currentLang === 'en'
                    ? 'Conveniently accessible near Bole International Airport corridor.'
                    : 'በካሜሮን ጎዳና ሮቤል ፕላዛ በቀላሉ ይጎብኙን።'}
                </p>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 bg-[#1A1A1A] hover:bg-[#D4AF37] hover:text-black border border-white/10 text-xs font-bold text-[#F5F2ED] transition-colors"
              >
                <span>{t.store.viewOnMaps}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

