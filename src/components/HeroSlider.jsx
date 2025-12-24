import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';

export default function HeroSlider() {
  
  // Sadece resimleri tutuyoruz, yazı sabit olacak. RESİMLER DEĞİŞECEĞİ ZAMAN BURADAN DEĞİŞECEK
  const sliderImages = [
    {
      id: 1,
      image: "/projeler/bey1.jpeg",
    },
    {
      id: 2,
      image: "/projeler/bey2.jpeg",
    },
    {
      id: 3,
      image: "/projeler/cuhadar-hero.jpeg",
    },
    {
      id: 4,
      image: "/projeler/bey3.jpeg",
    },
    {
      id: 5,
      image: "/projeler/canakkale-yakin.jpeg",
    },
    {
      id: 6,
      image: "/projeler/canakkale1.jpeg",
    }
  ];

  return (
    // h-screen yapıyoruz ki tüm ekranı kaplasın (Navbar üstüne bineceği için)
    <div className="w-full h-screen relative group">
      
      {/*  YENİ: SABİT YAZI ALANI (Swiper'ın dışında ve üstünde) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white z-20 pointer-events-none">
        {/* pointer-events-none: Yazının altındaki resme tıklamayı/kaydırmayı engellemesin diye. 
            Ama butona tıklanabilsin diye butona pointer-events-auto vereceğiz. */}
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg tracking-wide animate-fade-in-up">
          DSN İNŞAAT
        </h1>
        <p className="text-lg md:text-2xl font-light max-w-2xl mb-8 drop-shadow-md text-gray-200">
          Doğru Sağlam Nitelikli
        </p>
        
        
      </div>

      {/* SLIDER (ARKAPLAN) */}
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect={'fade'}
        spaceBetween={0}
        slidesPerView={1}
        navigation={true} 
        pagination={{ clickable: true }}
        // ✨ YENİ: Otomatik geçiş ayarı
        autoplay={{
          delay: 4000, // 4 saniyede bir değişsin
          disableOnInteraction: false, // Kullanıcı dokunsa bile devam etsin
        }}
        loop={true}
        className="w-full h-full z-10"
      >
        {sliderImages.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Resim */}
              <img 
                src={slide.image} 
                alt="Slider Görsel" 
                className="w-full h-full object-cover"
              />
              
              {/* Karartma (Overlay) - Yazıların daha net görünmesi için */}
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}