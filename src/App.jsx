import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Iletisim from './pages/Iletisim';
// Sayfalar (Senin oluşturduğun dosya isimlerine göre)
import Home from './pages/Home';
import Hakkimizda from './pages/Hakkimizda';
import Vizyonumuz from './pages/Vizyonumuz';
import Misyonumuz from './pages/Misyonumuz';

import KentselDonusum from './pages/KentselDonusum';
import Insaat from './pages/Insaat';
import Mimari from './pages/Mimari';
import Projeler from './pages/Projeler';

// ✨ YENİ IMPORT: Çözüm Ortaklarını buraya ekledik
import CozumOrtaklari from './pages/CozumOrtaklari';

// İletişim sayfasını henüz yapmadıysan bu satırı yoruma alabilirsin
// import Iletisim from './pages/Iletisim'; 

export default function App() {
  return (
    <div className="font-sans">
      {/* Navbar her sayfada sabit */}
      <Navbar /> 
      
      {/* Sayfa İçerikleri Burada Değişir */}
      <Routes>
        {/* Anasayfa */}
        <Route path="/" element={<Home />} />
        
        {/* Kurumsal Sayfalar */}
        <Route path="/hakkimizda" element={<Hakkimizda />} />
        <Route path="/vizyonumuz" element={<Vizyonumuz />} />
        <Route path="/misyonumuz" element={<Misyonumuz />} />

        {/* Hizmetler */}
        <Route path="/kentsel-donusum" element={<KentselDonusum />} />
        <Route path="/insaat" element={<Insaat />} />
        <Route path="/mimari" element={<Mimari />} />

        {/* Projeler */}
        <Route path="/projeler" element={<Projeler />} />

        {/* ✨ YENİ ROTA: Menüden tıklandığında burası açılacak */}
        <Route path="/cozum-ortaklari" element={<CozumOrtaklari />} />
        
        <Route path="/iletisim" element={<Iletisim />} />
        {/* <Route path="/iletisim" element={<Iletisim />} /> */}
      </Routes>

      {/* Footer her sayfada sabit */}
      <Footer /> 
    </div>
  )
}