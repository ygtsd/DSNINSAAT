import React from 'react';

// Proje detayları için veri
const projectDetails = [
  { label: 'Konum', value: 'Beylikdüzü / İstanbul' },
  { label: 'KONUT PLANI', value: '2+1, 3+1' },
];

export default function ProjectShowcase() {
  // Unsplash'ten seçilen mimari görseller
  const backImage = "/projeler/bey1.jpeg";
  const frontImage = "/projeler/bey2.jpeg";

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* SOL TARAF: Bindirmeli (Overlapping) Görseller */}
          <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[600px]">
            
            {/* Arka Plandaki Görsel (Daha büyük, geride) */}
            <div className="absolute top-0 right-0 w-4/5 h-4/5 z-0 transform translate-x-8 -translate-y-8 lg:translate-x-12 lg:-translate-y-12">
              <img 
                src={backImage} 
                alt="Proje Arka Plan" 
                className="w-full h-full object-cover rounded-lg shadow-lg opacity-90 grayscale-[20%]"
              />
            </div>
            
            {/* Ön Plandaki Görsel (Öne çıkan, gölgeli) */}
            <div className="absolute bottom-0 left-0 w-4/5 h-4/5 z-10">
              <img 
                src={frontImage} 
                alt="Proje Ön Plan" 
                className="w-full h-full object-cover rounded-lg shadow-2xl border-4 border-white"
              />
            </div>

            {/* Dekoratif Arka Plan Şekli (İsteğe bağlı) */}
            <div className="absolute inset-0 bg-[#D3AF37]/10 z-[-1] transform -skew-y-6 rounded-3xl hidden lg:block"></div>
          </div>

          {/* SAĞ TARAF: İçerik ve Detaylar */}
          <div className="w-full lg:w-1/2 lg:pl-12">
            
            {/* Başlık */}
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Beylikdüzü <br className="hidden md:block" />
              Sahil Konakları
            </h2>
            
            {/* Ayırıcı Çizgi */}
            <div className="w-20 h-1 bg-[#D3AF37] mb-8"></div>
            
            {/* Açıklama Metni */}
            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
              "Beylikdüzü’nün en prestijli noktasında, denizin mavisiyle yeşilin huzurunu buluşturan benzersiz bir yaşam sizi bekliyor. Modern mimariyi konforla harmanlayan Sahil Konakları, her sabah eşsiz bir deniz manzarasına uyanmanız için tasarlandı. Geniş peyzaj alanları ve ferah daire planlarıyla, ailenizle birlikte güvenle ve huzurla vakit geçirebileceğiniz bir yuva vadediyoruz."
            </p>

            {/* Proje Detayları Tablosu */}
            <div className="space-y-6 mb-12">
              {projectDetails.map((detail, index) => (
                <div key={index} className="flex flex-col md:flex-row justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-900 font-bold uppercase tracking-wider md:w-1/3 mb-1 md:mb-0">
                    {detail.label}
                  </span>
                  <span className="text-gray-600 md:w-2/3 md:text-right font-medium">
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>

          



          </div>
        </div>
      </div>
    </section>
  );
}