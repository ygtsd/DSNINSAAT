import React from 'react';
// Swiper kütüphanesini ana sayfada kullandığın gibi içe aktar
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

// Stil dosyalarının zaten ana sayfada yüklü olduğunu varsayıyorum 
// ama eksiklik varsa bunları da kontrol edebilirsin:
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function FooterUstuBilgi() {
  // Slayt için resim listesi
  const sliderImages = [
    "/projeler/hafriyat.jpg",
    "/projeler/jsb.jpeg", // Daha önce bahsettiğimiz iş merkezi görselleri
    "/projeler/katototo.jpeg",
    "/projeler/forekazik.jpeg",
    "/projeler/manitu.jpeg",
  ];

  return (
    <section className="bg-white w-full py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* SOL TARAF: SLAYT ALANI */}
          <div className="w-full lg:w-5/12 relative">
            <Swiper
              modules={[Autoplay, Pagination, EffectFade]}
              effect="fade" // İnşaat resimleri arasında yumuşak geçiş daha profesyonel durur
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true, // Noktaların daha zarif görünmesini sağlar
              }}
              className="w-full h-[500px] shadow-xl overflow-hidden rounded-sm"
            >
              {sliderImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <img 
                    src={img} 
                    alt={`DSN İnşaat Proje ${index + 1}`} 
                    className="w-full h-full object-cover" 
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* SAĞ TARAF: BİLGİ ALANI */}
          <div className="w-full lg:w-7/12 lg:pl-16 flex flex-col justify-center">
            
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 uppercase tracking-tight">
              DSN İNŞAAT
            </h2>
            
            <div className="w-16 h-1 bg-gray-800 mb-10"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
              <div>
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">
                  ADRES
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Tevfik Fikret Sokak<br />
                  Haznedar, Güngören / İstanbul
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">
                  İLETİŞİM
                </h3>
                <div className="text-gray-500 text-sm leading-relaxed space-y-1">
                  <p>Tel: 0(534) 763 9961</p>
                  <p>E-posta: info@dsninsaat.com</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-t border-gray-100 pt-8">
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#D3AF37] hover:text-[#D3AF37] transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}