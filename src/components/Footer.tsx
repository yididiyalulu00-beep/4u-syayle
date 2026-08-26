import React from 'react';
import { MapPin, Phone, Clock, ArrowUp, Star } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#collections', label: t.nav.collections },
    { href: '#lookbook', label: t.nav.lookbook },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <footer id="main-footer" className="bg-[#050505] text-[#F5F2ED]/70 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="font-serif italic text-2xl font-normal tracking-[0.1em] text-[#F5F2ED] flex items-center gap-2">
                4U Style
                <span className="text-[#D4AF37] font-sans not-italic text-[10px] tracking-[0.3em] uppercase px-1.5 py-0.5 border border-[#D4AF37]/50 font-bold">
                  Platinum
                </span>
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#F5F2ED]/40 uppercase mt-1">
                {t.tagline}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#F5F2ED]/60 font-light leading-relaxed max-w-sm">
              {t.footer.brandDesc}
            </p>

            <div className="flex items-center gap-2 pt-2">
              <div className="flex items-center text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                ))}
              </div>
              <span className="text-xs text-[#F5F2ED]/80 font-medium">
                4.5/5 Verified Patrons
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-[#F5F2ED]/60 hover:text-[#D4AF37] transition-colors tracking-wider font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Store Information Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold">
              {t.footer.storeInfo}
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-[#F5F2ED]/60 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#F5F2ED] font-medium">Robel Plaza, Cameroon St</p>
                  <p className="text-[#F5F2ED]/50">Addis Ababa, Ethiopia</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href={`tel:${t.phoneTel}`}
                  className="text-[#D4AF37] hover:text-[#F5F2ED] font-mono font-medium transition-colors"
                >
                  +251 94 395 5555
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#F5F2ED]/90">Mon–Sat: 8:30 AM – 9:00 PM</p>
                  <p className="text-[#F5F2ED]/50">Sun: 12:00 PM – 7:30 PM</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F5F2ED]/40">
          <p id="footer-copyright" className="font-light">
            © 2026 4U Style Platinum. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 bg-[#141414] border border-white/15 text-[#F5F2ED]/60 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span className="text-[10px] uppercase tracking-widest font-bold">Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

