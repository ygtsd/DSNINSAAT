import React from 'react';
import PageTransition from '../components/PageTransition';

export default function Insaat() {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4">
          
          {/* HEADER */}
          <div className="max-w-3xl mx-auto mb-16 text-center">

  <h1 className="text-4xl font-bold mb-4 uppercase inline-block relative">
    İnşaat & <span>Taahhüt</span>

    <div className="w-full h-1.5 bg-[#D3AF37] mt-2"></div>
  </h1>
  <p className="text-gray-500">Temelden çatıya, en ince detayına kadar mühendislik harikası yapılar.</p>
</div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            


            {/* Sol: Yazı */}
            <div className="order-2 md:order-1 space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Sağlam Temeller, Güçlü Yapılar</h2>
              <p className="text-gray-600 leading-relaxed">
                DSN İnşaat olarak konut, iş merkezi, villa ve sanayi yapıları inşa ediyoruz. İnşaat sürecinin her aşamasında (kaba yapıdan ince işçiliğe) uzman mühendis kadromuzla denetim sağlıyoruz.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="border-l-4 border-[#D3AF37] pl-4">
                  <h4 className="font-bold text-lg">Anahtar Teslim</h4>
                  <p className="text-sm text-gray-500 mt-1">Projenizi A'dan Z'ye tamamlayıp size sadece anahtarı çevirmeyi bırakıyoruz.</p>
                </div>
                <div className="border-l-4 border-[#D3AF37] pl-4">
                  <h4 className="font-bold text-lg">Yüksek Standart</h4>
                  <p className="text-sm text-gray-500 mt-1">C30 ve C35 Beton sınıfı ve sertifikalı demir kullanımıyla maksimum güvenlik.</p>
                </div>
              </div>
            </div>

            {/* Sağ: Görsel */}
            <div className="order-1 md:order-2 h-[450px] relative">
              <img 
                src="/projeler/insaat.jpeg" 
                alt="İnşaat Sahası" 
                className="w-full h-full object-cover rounded-lg shadow-xl filter duration-700"
              />
            </div>
            
          </div>
        </div>
      </div>
    </PageTransition>
  );
}