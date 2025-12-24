import React from 'react';

const partners = [
  { id: 1, name: 'Oyak Beton', logo: '/projeler/oyak.jpeg' },
  { id: 2, name: 'Jotun', logo: '/projeler/jotun.jpeg' },
  { id: 3, name: 'Capatects', logo: '/projeler/capatect.jpeg' },
  { id: 4, name: 'Audio', logo: '/projeler/audio.jpeg' },
  { id: 5, name: 'Eca', logo: '/projeler/eca.jpeg' },
  { id: 6, name: 'Fıratpen', logo: '/projeler/firatpen.jpeg' },
  { id: 7, name: 'Star', logo: '/projeler/star.jpeg' },
  { id: 8, name: 'Filli Boya', logo: '/projeler/filli.jpeg' },
  { id: 9, name: 'Çanakkale Seramik', logo: '/projeler/seramik.jpeg' },
  { id: 10, name: 'Mert Asansör', logo: '/projeler/mert.jpeg' },
  { id: 11, name: 'Vortex Asansör', logo: '/projeler/vortex.jpeg' },
  { id: 12, name: 'İzocam', logo: '/projeler/izocam.jpeg' },
  { id: 13, name: '8ekiz', logo: '/projeler/sekiz.jpeg' },
  { id: 14, name: 'Çuhadaroğlu', logo: '/projeler/cuhadar.jpeg' }
];

export default function Ortaklar() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        
        {/* Başlık Alanı */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 uppercase tracking-widest">
            ÇÖZÜM ORTAKLARIMIZ
          </h2>
          <div className="w-20 h-1.5 bg-[#D3AF37] mx-auto mt-4"></div>
        </div>

        {/* Logolar Grid Yapısı */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-16 gap-x-10 items-center justify-items-center">
          {partners.map((partner) => (
            <div 
              key={partner.id} 
              className="w-full flex items-center justify-center group"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                // Renk efektleri kaldırıldı. 
                // max-h-20 (80px) yaparak logoları belirginleştirdik.
                className="max-h-20 w-auto max-w-[160px] object-contain transition-transform duration-300 transform group-hover:scale-110"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}