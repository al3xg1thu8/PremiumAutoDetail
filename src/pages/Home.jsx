import React from 'react';
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import ServicesSection from '../components/landing/ServicesSection';
import AddOnsSection from '../components/landing/AddOnsSection';
import GalleryStrip from '../components/landing/GalleryStrip';
import AboutSection from '../components/landing/AboutSection';
import ContactSection from '../components/landing/ContactSection';
import Footer from '../components/landing/Footer';

const galleryImages = [
  { src: 'https://media.base44.com/images/public/6a023549fb9a48452355f2a6/d909f3156_generated_e11c0476.png', alt: 'Wheel detail with iron remover treatment' },
  { src: 'https://media.base44.com/images/public/6a023549fb9a48452355f2a6/4f5c9935f_generated_fdc24f61.png', alt: 'Pristine dashboard interior detail' },
  { src: 'https://media.base44.com/images/public/6a023549fb9a48452355f2a6/d1242eb31_generated_423ab0a0.png', alt: 'Water beading on waxed surface' },
  { src: 'https://media.base44.com/images/public/6a023549fb9a48452355f2a6/56670e4fc_generated_6318286d.png', alt: 'Pristine leather seat detail' },
  { src: 'https://media.base44.com/images/public/6a023549fb9a48452355f2a6/cc575fca1_generated_e9657e3f.png', alt: 'Polished paint surface close-up' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ServicesSection />
      {/* <GalleryStrip images={galleryImages} /> */}
      <AddOnsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}