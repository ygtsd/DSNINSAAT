import React, { useState } from 'react';

// ==========================================
// 1. KART BİLEŞENİ (Galeri Özellikli)
// ==========================================
const ProjectCard = ({ project }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white h-full flex flex-col">
      
      {/* Görsel Alanı */}
      <div className="relative h-72 overflow-hidden group">
        <img 
          src={project.images[currentImage]} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Sağ Üst Etiket */}
        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded z-20">
          {project.type}
        </div>

        {/* --- OK TUŞLARI (Sadece 1'den fazla resim varsa) --- */}
        {project.images.length > 1 && (
          <>
            {/* Sol Ok */}
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full z-30 transition-all hover:bg-black/90
                         opacity-100 md:opacity-0 md:group-hover:opacity-100" // Mobilde hep açık, PC'de hover
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>

            {/* Sağ Ok */}
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full z-30 transition-all hover:bg-black/90
                         opacity-100 md:opacity-0 md:group-hover:opacity-100" // Mobilde hep açık, PC'de hover
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>

            {/* Nokta Göstergeleri */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-1 z-20">
              {project.images.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-1.5 h-1.5 rounded-full transition-colors shadow-sm ${currentImage === idx ? 'bg-white scale-125' : 'bg-white/50'}`}
                ></div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Bilgi Alanı */}
      <div className="p-6 flex-grow">
        <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-[#D3AF37] transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-500 text-sm flex items-center gap-2 mb-4">
          <svg className="w-5 h-5 text-[#D3AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          {project.location}
        </p>
      </div>

    </div>
  );
};


// ==========================================
// 2. VERİLER (Artık 'images' dizisi var)
// ==========================================
const projects = [
  {
    id: 1,
    title: 'Çanakkale Akliman Kardeşlik Villaları',
    location: 'Çanakkale / Ayvacık',
    type: 'Tamamlandı',
    // 1. Resim orijinal, diğerleri örnek (sen doldurursun)
    images: [
      "/projeler/canakkale-yakin.jpeg",
      "/projeler/canakkale1.jpeg",
      "/projeler/canakkale3.jpeg",
      "/projeler/canakkale4.jpeg",
      "/projeler/canakkale6.jpeg",
    ],
  },
  {
    id: 2,
    title: 'Beylikdüzü Sahil Konakları',
    location: 'İstanbul / Beylikdüzü',
    type: 'Tamamlandı',
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
    id: 3,
    title: 'Çuhadaroğlu Villaları',
    location: 'İstanbul / Büyükçekmece',
    type: 'Tamamlandı',
    images: [
      "/projeler/cuhadar-hero.jpeg",
      "/projeler/cuhadaroglu-giris.jpeg",
    ],
  }
];

export default function DevamEdenProjelerMain() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* ÜST KISIM (BAŞLIK VE AÇIKLAMA) */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              TAMAMLANAN <br />
              <span className="text-gray-900">PROJELERİMİZ</span>
            </h2>
            <div className="w-64 h-1.5 bg-[#D3AF37]"></div>
          </div>

          <div className="md:w-1/2">
            <p className="text-gray-600 text-lg leading-relaxed border-l-4 border-gray-200 pl-6 italic">
              "Modern mimari anlayışımızla hayata geçirdiğimiz projelerimiz, 
              estetik ve fonksiyonelliği bir araya getirerek yeni yaşam alanları sunuyor."
            </p>
          </div>
        </div>

        {/* PROJE KARTLARI (3 SÜTUNLU YAPI) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
             // Burada artık ProjectCard bileşenini kullanıyoruz
             <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}