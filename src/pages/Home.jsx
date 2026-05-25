import React from 'react';
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import ServicesSection from '../components/landing/ServicesSection';
import AddOnsSection from '../components/landing/AddOnsSection';
import GalleryStrip from '../components/landing/GalleryStrip';
import AboutSection from '../components/landing/AboutSection';
import ContactSection from '../components/landing/ContactSection';
import Footer from '../components/landing/Footer';

import img1 from "./webp/image_1.webp";
import img2 from "./webp/image_2.webp";
import img3 from "./webp/image_3.webp";
import img4 from "./webp/image_4.webp";
const galleryImages = [
  {
    src: img1,
    alt: 'Before and after trunk detail'
  },
  {
    src: img2,
    alt: 'Before and after interior detail'
  },
  {
    src: img3,
    alt: 'Wheel cleaning before during and after'
  },
  {
    src: img4,
    alt: 'Clean car detailing result'
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <GalleryStrip images={galleryImages} />
      <ServicesSection />
      <AddOnsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

// import React from 'react';
// import Navbar from '../components/landing/Navbar';
// import Hero from '../components/landing/Hero';
// import ServicesSection from '../components/landing/ServicesSection';
// import AddOnsSection from '../components/landing/AddOnsSection';
// import GalleryStrip from '../components/landing/GalleryStrip';
// import AboutSection from '../components/landing/AboutSection';
// import ContactSection from '../components/landing/ContactSection';
// import Footer from '../components/landing/Footer';

// import img1 from "./webp/image_1.webp";
// import img2 from "./webp/image_2.webp";
// import img3 from "./webp/image_3.webp";
// import img4 from "./webp/image_4.webp";

// const galleryImages = [
//   {
//     src: img1,
//     alt: 'Before and after trunk detail',
//     size: 'md:col-span-2',
//     aspect: 'aspect-[16/9]',
//   },
//   {
//     src: img2,
//     alt: 'Before and after interior detail',
//     size: '',
//     aspect: 'aspect-[4/3]',
//   },
//   {
//     src: img3,
//     alt: 'Wheel cleaning before during and after',
//     size: '',
//     aspect: 'aspect-[4/3]',
//   },
//   {
//     src: img4,
//     alt: 'Clean car detailing result',
//     size: 'md:col-span-2',
//     aspect: 'aspect-[16/9]',
//   },
// ];

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />
//       <Hero />
//       <GalleryStrip images={galleryImages} />
//       <ServicesSection />
//       <AddOnsSection />
//       <AboutSection />
//       <ContactSection />
//       <Footer />
//     </div>
//   );
// }