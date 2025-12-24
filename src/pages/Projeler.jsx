import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

// ==========================================
// 1. KART BİLEŞENİ (Mobil Uyumlu & Slider)
// ==========================================
const ProjectCard = ({ proje, badgeText, badgeColor }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % proje.images.length);
  };

  const prevImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage((prev) => (prev === 0 ? proje.images.length - 1 : prev - 1));
  };

  return (
    <div className="group h-full flex flex-col">
      {/* Resim Alanı */}
      <div className="relative overflow-hidden rounded-lg h-[300px] mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
        
        {/* Sol Üst Etiket */}
        <div className={`absolute top-4 left-4 text-white text-xs font-bold px-3 py-1 uppercase tracking-widest z-20 ${badgeColor}`}>
          {badgeText}
        </div>

        {/* Resim */}
        <img 
          src={proje.images[currentImage]} 
          alt={proje.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* --- OK TUŞLARI (Sadece 1'den fazla resim varsa) --- */}
        {proje.images.length > 1 && (
          <>
            {/* Sol Ok */}
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full z-30 transition-all hover:bg-black/90
                         opacity-100 md:opacity-0 md:group-hover:opacity-100" 
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>

            {/* Sağ Ok */}
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full z-30 transition-all hover:bg-black/90
                         opacity-100 md:opacity-0 md:group-hover:opacity-100" 
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>

            {/* Nokta Göstergeleri */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-1 z-20">
              {proje.images.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-1.5 h-1.5 rounded-full transition-colors shadow-sm ${currentImage === idx ? 'bg-white scale-125' : 'bg-white/50'}`}
                ></div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Yazı Alanı */}
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-gray-900">{proje.title}</h3>
        <p className="text-xs text-gray-400 font-bold uppercase mb-2">{proje.location}</p>
        <p className="text-sm text-gray-600 line-clamp-2">{proje.desc}</p>
      </div>
    </div>
  );
};


// ==========================================
// 2. VERİLER (Örnek Data)
// ==========================================

// ÖRNEK: Devam Eden Projeler (Yapıyı görmen için açtım, içini değiştirebilirsin)
 const devamEdenler = [
  {
    id: 1,
    title: "Vadi Konakları",
    location: "Avcılar / İstanbul",
    images: [
      "https://images.unsplash.com/photo-1590644365607-1c5a38fc43e0?q=80&w=1332&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop",
    ],
    desc: "Modern mimari ve yeşil alanlarıyla aileniz için huzurlu bir yaşam alanı."
  },
  {
    id: 2,
    title: "DSN Plaza",
    location: "Beylikdüzü / İstanbul",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1287&auto=format&fit=crop",
    ],
    desc: "Şehrin kalbinde, iş dünyasının yeni merkezi olacak prestijli ofis projesi."
  }
];


const tamamlananlar = [
  {
    id: 1,
    title: "Beylikdüzü Sahil Konakları",
    location: "Beylikdüzü / İstanbul",
    images: [
      "/projeler/bey2.jpeg", 
      "/projeler/bey3.jpeg",
      "/projeler/bey4.jpeg",
      "/projeler/bey6.jpeg",
      "/projeler/bey5.jpeg",
      "/projeler/bey7.jpeg",
      "/projeler/bey8.jpeg",
      "/projeler/bey1.jpeg",
    ],
  },
  {
    id: 2,
    title: "Çanakkale Akliman Kardeşlik Villaları",
    location: "Çanakkale / Ayvacık",
    images: [
      "/projeler/canakkale-yakin.jpeg",
      "/projeler/canakkale1.jpeg",
      "/projeler/canakkale3.jpeg",
      "/projeler/canakkale4.jpeg",
      "/projeler/canakkale6.jpeg",
    ],
  },
  {
    id: 3,
    title: "Çuhadaroğlu Villaları",
    location: "Büyükçekmece / İstanbul",
    images: [
      "/projeler/cuhadar-hero.jpeg",
      "/projeler/cuhadaroglu-giris.jpeg",
    ],
  },
];

// ==========================================
// 3. ANA SAYFA BİLEŞENİ
// ==========================================
export default function Projeler() {
  const { hash } = useLocation();

  // Scroll İşlemi (Navbar linkleri için)
  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <PageTransition>
      <div className="pt-32 pb-20 bg-white">
 
        {/* 
        
          

        */}
        

        {/* ==============================================
            ESTETİK GEÇİŞ ALANI (Ayırıcı)
           ============================================== */}
        <div className="w-full h-48 bg-gray-50 flex items-center justify-center my-16 relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
           <div className="text-center">
              <span className="text-[#D3AF37] text-4xl font-bold opacity-30 tracking-[1em] uppercase">DSN İNŞAAT</span>
           </div>
        </div>


        {/* ==============================================
            BÖLÜM 2: TAMAMLANAN PROJELER
           ============================================== */}
        <div id="tamamlanan" className="container mx-auto px-4">
          
          {/* Başlık */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 uppercase inline-block relative">
              Tamamlanan <span>Projeler</span>
              <div className="w-full h-1.5 bg-gray-800 mt-2"></div>
            </h2>
            <p className="text-gray-500 mt-4">Güvenle teslim ettiğimiz ve yaşamın başladığı referans projelerimiz.</p>
          </div>

          {/* Kartlar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tamamlananlar.map((proje) => (
              <ProjectCard 
                key={proje.id} 
                proje={proje} 
                badgeText="TESLİM EDİLDİ"
                badgeColor="bg-gray-900"
              />
            ))}
          </div>

        </div>

      </div>
    </PageTransition>
  );
}