import React from 'react';
import HeroSlider from '../components/HeroSlider';
import Services from '../components/Services';
import ProjectShowcase from '../components/ProjectShowcase';
import DevamEdenProjelerMain from '../components/DevamEdenProjelerMain';
import Ortaklar from '../components/Ortaklar';
import FooterUstuBilgi from '../components/FooterUstuBilgi';

export default function Home() {
  return (
    <>
      {/* PADDING YOK: Resim direkt en tepeden başlar, Navbar üstüne biner */}
      <HeroSlider />
      
      <Services />
      <ProjectShowcase />
      <DevamEdenProjelerMain />
      <Ortaklar />
      <FooterUstuBilgi />
    </>
  );
}