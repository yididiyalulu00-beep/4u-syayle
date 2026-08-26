import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Menu, X, Globe, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { getStoreStatus } from '../data/fashionData';

interface NavbarProps {
  currentLang: Language;
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLang, onToggleLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLang];
  const storeStatus = getStoreStatus(currentLang);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#collections', label: t.nav.collections },
    { href: '#featured', label: t.nav.featured },
    { href: '#wedding', label: t.nav.wedding },
    { href: '#lookbook', label: t.nav.lookbook },
    { href: '#store', label: t.nav.store },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl'
          : 'bg-gradient-to-b from-[#0A0A0A]/95 via-[#0A0A0A]/60 to-transparent py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            id="brand-logo"
            href="#home"
            className="group flex flex-col focus:outline-none"
          >
            <span className="text-xl sm:text-2xl font-bold tracking-[0.2em] text-[#D4AF37] group-hover:opacity-90 transition-opacity">
              4U STYLE PLATINUM
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-[#F5F2ED]/40 uppercase mt-0.5 font-sans">
              Addis Ababa • Cameroon St
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.15em] font-medium text-[#F5F2ED] opacity-70 hover:opacity-100 hover:text-[#D4AF37] transition-all py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Section */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            {/* Language Switcher */}
            <button
              id="lang-switcher-btn"
              onClick={onToggleLang}
              aria-label="Toggle language"
              className="text-[11px] tracking-widest font-semibold px-2 py-1 transition-colors cursor-pointer text-[#F5F2ED] hover:text-[#D4AF37]"
            >
              <span className={currentLang === 'en' ? 'font-bold text-[#D4AF37]' : 'opacity-50'}>
                EN
              </span>
              <span className="opacity-30 mx-1.5">|</span>
              <span className={currentLang === 'am' ? 'font-bold text-[#D4AF37] font-amharic' : 'opacity-50 font-amharic'}>
                አማ
              </span>
            </button>

            {/* Direct Call / Contact Button (Desktop) */}
            <a
              id="nav-call-btn"
              href={`tel:${t.phoneTel}`}
              className="hidden sm:inline-flex items-center gap-2 px-6 py-2 border border-white/20 text-[10px] uppercase tracking-widest font-bold text-[#F5F2ED] hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all"
            >
              <Phone className="w-3 h-3 fill-current" />
              <span>{t.nav.callNow}</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 border border-white/20 bg-[#141414] text-[#F5F2ED] hover:text-[#D4AF37] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="lg:hidden fixed inset-x-0 top-full bg-[#0A0A0A]/98 border-b border-white/10 shadow-2xl backdrop-blur-xl transition-all duration-300 max-h-[85vh] overflow-y-auto"
        >
          <div className="px-6 py-6 space-y-4">
            {/* Live Status indicator */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs">
              <div className="flex items-center gap-2 text-[#F5F2ED]/70">
                <span className={`w-2 h-2 rounded-full ${storeStatus.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-500'}`} />
                <span className="font-medium">{storeStatus.statusText}</span>
              </div>
              <div className="flex items-center gap-1 text-[#D4AF37] font-semibold text-xs tracking-wider">
                <Sparkles className="w-3 h-3" />
                <span>4.5 ★</span>
              </div>
            </div>

            {/* Nav list */}
            <div className="grid grid-cols-1 gap-1 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 px-3 text-xs uppercase tracking-[0.15em] text-[#F5F2ED]/70 hover:text-[#D4AF37] hover:bg-[#141414] transition-colors font-medium border-l-2 border-transparent hover:border-[#D4AF37]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Contact Quick Actions */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <a
                href={`tel:${t.phoneTel}`}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-widest shadow-lg"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>{t.nav.callNow} ({t.phoneNumber})</span>
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Robel+Plaza+Cameroon+St+Addis+Ababa+Ethiopia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 border border-white/20 bg-[#141414] text-[#F5F2ED] hover:text-[#D4AF37] text-xs font-bold uppercase tracking-widest"
              >
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>{t.nav.getDirections}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
