import React from 'react';
import PageTransition from '../components/PageTransition';

export default function Insaat() {
  // Bilgi kartları için veri seti
  const infoCards = [
    {
      title: "İksa Yapımı",
      description: "Derin kazı işlemlerinde çevre yapıların ve yol güvenliğinin korunması için, zemin yapısına uygun (ankrajlı, püskürtme betonlu vb.) modern iksa sistemlerini titizlikle projelendirip uyguluyoruz.",
      image: "/projeler/iksa.jpeg" // Kendi resmini koyunca burayı değiştir
    },
    {
      title: "Kuyu Temel",
      description: "Komşu parsellere ve mevcut yapılara zarar vermeden, dar çalışma alanlarında maksimum güvenlik sağlayan; sarsıntısız ve yüksek taşıma kapasiteli geleneksel temel güçlendirme çözümleri sunuyoruz.",
      image: "/projeler/kuyutemel.jpeg"
    },
    {
      title: "Fore Kazık",
      description: "Yapı yüklerini zayıf zeminlerden sağlam tabakalara aktarmak ve zemin taşıma kapasitesini artırmak amacıyla, modern iş makine parkurumuzla yüksek dayanımlı derin temel uygulamaları gerçekleştiriyoruz.",
      image: "/projeler/foreiki.jpeg"
    }
  ];

  return (
    <PageTransition>
      <div className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4">
          
          {/* HEADER */}
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h1 className="text-4xl font-bold mb-4 uppercase inline-block relative">
              İnşaat & <span className="text-[#D3AF37]">Taahhüt</span>
              <div className="w-full h-1.5 bg-[#D3AF37] mt-2"></div>
            </h1>
            <p className="text-gray-500">Temelden çatıya, en ince detayına kadar mühendislik harikası yapılar.</p>
          </div>

          {/* ÜST BÖLÜM: YAZI VE ANA GÖRSEL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
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
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* ALT BÖLÜM: 3 BİLGİ KARTI */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {infoCards.map((card, index) => (
              <div key={index} className="group bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                {/* Kart Resmi - object-cover kullanarak kutuyu tam doldurmasını sağladık */}
                <div className="h-56 overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Kart İçeriği */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#D3AF37] transition-colors uppercase tracking-wide">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </PageTransition>
  );
}