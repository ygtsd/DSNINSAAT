import React from 'react';
import { Link } from 'react-router-dom'; // ✨ 1. Link bileşenini içeri aktardık

export default function Footer() {
  
  // ✨ 2. Sayfa değişince en üste atma fonksiyonu
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    // Footer genel boyutu sabit (pt-20 pb-10)
    <footer className="bg-black text-white pt-20 pb-10 border-t border-gray-900">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. SÜTUN: LOGO & SOSYAL MEDYA */}
          <div className="flex flex-col items-start">
            
            {/* LOGO ALANI */}
            <div className="mb-12">
               {/* ✨ Logo'ya tıklayınca anasayfaya gitsin */}
               <Link to="/" onClick={scrollToTop}>
                  <img 
                    src="/projeler/dsn-logo.png" 
                    alt="DSN İnşaat" 
                    className="h-20 w-auto object-contain filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" 
                  />
               </Link>
            </div>
            
            <h4 className="text-xs font-bold text-gray-500 tracking-[0.2em] mb-4 uppercase">
              SOSYAL MEDYA
            </h4>
            
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition-all duration-300">
                {/* Instagram İkonu */}
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" /></svg>
              </a>
            </div>
          </div>

          {/* 2. SÜTUN: BİZE ULAŞIN */}
          <div>
            <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-6">
              BİZE ULAŞIN
            </h3>
            <div className="space-y-4 text-gray-400 text-sm font-light leading-relaxed">
              <p>
                    Haznedar Mahallesi, <br />
                    Tevfik Fikret Sokak, <br />
                    Güngören / İstanbul
                  </p>
              <p>
                info@dsninsaat.com<br />
                0(534) 763 9961
              </p>
            </div>
          </div>

          {/* 3. SÜTUN: KURUMSAL */}
          <div>
            <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-6">
              KURUMSAL
            </h3>
            <ul className="space-y-3 text-gray-400 text-sm font-light">
              {/* ✨ Linkler Eklendi */}
              <li>
                <Link to="/hakkimizda" onClick={scrollToTop} className="hover:text-[#D3AF37] transition-colors block">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/kentsel-donusum" onClick={scrollToTop} className="hover:text-[#D3AF37] transition-colors block">
                  Kentsel Dönüşüm
                </Link>
              </li>
              <li>
                <Link to="/iletisim" onClick={scrollToTop} className="hover:text-[#D3AF37] transition-colors block">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. SÜTUN: PROJELER */}
          <div>
            <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-6">
              PROJELER
            </h3>
            <ul className="space-y-3 text-gray-400 text-sm font-light">
              {/* ✨ Linkler Eklendi */}
              <li>
                <Link to="/cozum-ortaklari" onClick={scrollToTop} className="hover:text-[#D3AF37] transition-colors block">
                  Çözüm Ortakları
                </Link>
              </li>
              <li>
                {/* Hash (#) linklerinde scrollToTop kullanmıyoruz, sayfa kendi kayıyor */}
                <Link to="/projeler#devam-eden" className="hover:text-[#D3AF37] transition-colors block">
                  Devam Eden Projeler
                </Link>
              </li>
              <li>
                <Link to="/projeler#tamamlanan" className="hover:text-[#D3AF37] transition-colors block">
                  Tamamlanan Projeler
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* ALT KISIM: COPYRIGHT VE İMZA */}
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          
          <p>&copy; 2025 DSN İnşaat. Tüm hakları saklıdır.</p>
          
          <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">

            {/* İMZA KISMI */}
            <div className="flex items-center gap-1">
              <span className="opacity-100">Web Tasarım:</span>
              <a 
                href="#" 
                className="font-bold text-gray-500 hover:text-[#D3AF37] transition-colors"
              >
               Yiğit SADİ
              </a>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}