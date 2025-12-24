import React from 'react';
import PageTransition from '../components/PageTransition';

export default function Mimari() {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4">
          
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Sol: Büyük Başlık ve Giriş */}
            <div className="lg:w-1/3">
              <h1 className="text-5xl font-bold text-black leading-tight mb-8">
                Estetik <br />
                <span className="text-[#D3AF37]">Fonksiyon</span> <br />
                ve Yaşam.
              </h1>
              <div className="w-16 h-2 bg-black mb-8"></div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Her çizgi bir anlam taşır. Mimari ekibimiz, hayallerinizdeki yaşam alanını kağıda dökerken sadece estetiği değil, kullanım kolaylığını ve sürdürülebilirliği de tasarlar.
              </p>
            </div>

            {/* Sağ: Görsel Kolajı */}
            <div className="lg:w-2/3 grid grid-cols-2 gap-4 h-[500px]">
              <div className="h-full">
                <img 
                  src="" 
                  alt="Mimari Plan" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-4 h-full">
                <img 
                  src="" 
                  alt="İç Mimari" 
                  className="w-full h-1/2 object-cover rounded-lg"
                />
                <div className="h-1/2 bg-black flex items-center justify-center rounded-lg p-6">
                  <p className="text-white text-center italic font-light">
                    "Mimarlık, donmuş müziktir." <br/> <span className="text-[#D3AF37] text-sm not-italic mt-2 block">- Goethe</span>
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Hizmet Listesi */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-100 pt-12">
            {['Konsept Tasarım', 'İç Mimari & Dekorasyon', '3D Görselleştirme', 'Ruhsat Projeleri', 'Peyzaj Tasarımı', 'Uygulama Kontrolü'].map((service, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-[#D3AF37] group-hover:border-[#D3AF37] transition-all">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="text-lg font-medium text-gray-700 group-hover:text-[#D3AF37] transition-colors">{service}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </PageTransition>
  );
}