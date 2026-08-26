import React, { useState } from 'react';
import { Language, CategoryItem, FeaturedLookItem, LookbookImage } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CollectionsSection } from './components/CollectionsSection';
import { FeaturedLooks } from './components/FeaturedLooks';
import { WeddingFormalSection } from './components/WeddingFormalSection';
import { LookbookSection } from './components/LookbookSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { StoreLocationSection } from './components/StoreLocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { CollectionModal } from './components/CollectionModal';
import { OutfitModal } from './components/OutfitModal';
import { FloatingMobileBar } from './components/FloatingMobileBar';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  
  // Modal states
  const [lightboxImage, setLightboxImage] = useState<LookbookImage | null>(null);
  const [lightboxList, setLightboxList] = useState<LookbookImage[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<CategoryItem | null>(null);
  const [selectedLook, setSelectedLook] = useState<FeaturedLookItem | null>(null);

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === 'en' ? 'am' : 'en'));
  };

  const handleOpenLightbox = (image: LookbookImage, allImages: LookbookImage[]) => {
    setLightboxImage(image);
    setLightboxList(allImages);
  };

  return (
    <div
      id="app-root"
      className={`min-h-screen bg-[#0A0A0A] text-[#F5F2ED] selection:bg-[#D4AF37]/30 selection:text-[#F5F2ED] ${
        currentLang === 'am' ? 'font-amharic' : 'font-sans-luxury'
      }`}
    >
      {/* Top Sticky Luxury Navbar */}
      <Navbar currentLang={currentLang} onToggleLang={toggleLanguage} />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Full-Screen Campaign Hero */}
        <Hero currentLang={currentLang} />

        {/* Brand Editorial Split-Screen About Section */}
        <AboutSection currentLang={currentLang} />

        {/* Collections Showcase (Suits, Clothing, Shoes, Accessories, Wedding) */}
        <CollectionsSection
          currentLang={currentLang}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
        />

        {/* Featured Looks with Garment Breakdown */}
        <FeaturedLooks
          currentLang={currentLang}
          onSelectLook={(look) => setSelectedLook(look)}
        />

        {/* Dedicated Black-Tie & Wedding Occasions Section */}
        <WeddingFormalSection currentLang={currentLang} />

        {/* Visual Magazine Fashion Lookbook with Filter Tabs */}
        <LookbookSection
          currentLang={currentLang}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Why 4U Style Platinum Feature Blocks */}
        <WhyChooseUs currentLang={currentLang} />

        {/* Verified Store Information, Live Schedule & Map Section */}
        <StoreLocationSection currentLang={currentLang} />

        {/* Contact Section */}
        <ContactSection currentLang={currentLang} />
      </main>

      {/* Luxury Footer */}
      <Footer currentLang={currentLang} />

      {/* Floating Bottom Quick Action Bar for Mobile */}
      <FloatingMobileBar currentLang={currentLang} />

      {/* Modals */}
      <LightboxModal
        image={lightboxImage}
        allImages={lightboxList}
        currentLang={currentLang}
        onClose={() => setLightboxImage(null)}
        onSelectImage={(img) => setLightboxImage(img)}
      />

      <CollectionModal
        category={selectedCategory}
        currentLang={currentLang}
        onClose={() => setSelectedCategory(null)}
      />

      <OutfitModal
        look={selectedLook}
        currentLang={currentLang}
        onClose={() => setSelectedLook(null)}
      />
    </div>
  );
}
