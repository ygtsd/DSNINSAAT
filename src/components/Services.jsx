import React from 'react';

const services = [
  {
    title: 'KENTSEL DÖNÜŞÜM',
    description: 'Eski ve riskli yapıları, modern standartlara uygun ve depreme dayanıklı yaşam alanlarına dönüştürerek şehre değer katıyoruz.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: 'KONUT PROJELERİ',
    description: 'Estetik ve fonksiyonelliği bir araya getiren yenilikçi projelerimizle, hayalindeki konforlu ve huzurlu yuvayı titizlikle inşa ediyoruz.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    title: 'GÜVENLİ YAPILAR',
    description: 'İleri mühendislik teknikleri ve en kaliteli malzemeleri kullanarak, sevdiklerinle güven içinde yaşayacağın sağlam temeller atıyoruz.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    )
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Bölüm Başlığı */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            HİZMETLERİMİZ
          </h2>
          <div className="w-24 h-1 bg-[#D3AF37] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Modern mimari ve sağlam mühendislik çözümlerimizle geleceğin güvenli yaşam alanlarını inşa ediyoruz.
          </p>
        </div>

        {/* Kartlar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-[#D3AF37] relative overflow-hidden"
            >
              {/* Hover Arka Plan Efekti */}
              <div className="absolute inset-0 bg-[#D3AF37] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>

              {/* İkon */}
              <div className="text-[#D3AF37] mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Başlık */}
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#D3AF37] transition-colors">
                {service.title}
              </h3>

              {/* Açıklama */}
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}