import React from 'react';
import PageTransition from '../components/PageTransition';

export default function Iletisim() {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 bg-white">
        
        {/* ÜST BAŞLIK */}
        <div className="container mx-auto px-4 mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4 inline-block relative">
            Bize <span className="text-[#D3AF37]">Ulaşın</span>
            <div className="w-full h-1.5 bg-[#D3AF37] mt-2"></div>
          </h1>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Projelerimiz hakkında detaylı bilgi almak veya tanışmak için ofisimize bekleriz.
          </p>
        </div>

        {/* İÇERİK ALANI */}
        <div className="container mx-auto px-4">
          {/* flex-col: Mobilde alt alta diz, lg:flex-row: Bilgisayarda yan yana diz */}
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            
            {/* SOL TARAF: İLETİŞİM BİLGİLERİ */}
            <div className="w-full lg:w-1/2 space-y-8">
              
              {/* Adres Kutusu */}
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg group hover:bg-black hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl h-full max-h-[160px]">
                <div className="w-12 h-12 bg-[#D3AF37] flex items-center justify-center rounded text-white shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#D3AF37]">Ofis Adresi</h3>
                  <p className="text-gray-600 group-hover:text-gray-300">
                    Haznedar Mahallesi, <br />
                    Tevfik Fikret Sokak, <br />
                    Güngören / İstanbul
                  </p>
                </div>
              </div>

              {/* Telefon Kutusu */}
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg group hover:bg-black hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl h-full max-h-[160px]">
                <div className="w-12 h-12 bg-[#D3AF37] flex items-center justify-center rounded text-white shrink-0">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#D3AF37]">Telefon</h3>
                  <p className="text-gray-600 group-hover:text-gray-300">
                    0(534) 763 9961 <br />
                   
                  </p>
                </div>
              </div>

              {/* Mail Kutusu */}
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg group hover:bg-black hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl h-full max-h-[160px]">
                <div className="w-12 h-12 bg-[#D3AF37] flex items-center justify-center rounded text-white shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#D3AF37]">E-Posta</h3>
                  <p className="text-gray-600 group-hover:text-gray-300">
                    info@dsninsaat.com
                  </p>
                </div>
              </div>

            </div>

            {/* SAĞ TARAF: HARİTA */}
            <div className="w-full lg:w-1/2 min-h-[400px] bg-gray-100 rounded-lg shadow-2xl overflow-hidden border-t-4 border-[#D3AF37] relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1505.3311942177036!2d28.872761732451952!3d41.01076214104135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb3481289dc7%3A0xdcd8e71f4920a99b!2zRFNOIMSwTsWeQUFU!5e0!3m2!1str!2str!4v1766369442419!5m2!1str!2str"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Konum Haritası"
                // ✨ MOBİL İYİLEŞTİRMESİ BURADA YAPILDI:
                // grayscale-0: Mobilde hep renkli.
                // md:grayscale: Bilgisayarda (medium screen) siyah-beyaz başla.
                // md:group-hover:grayscale-0: Bilgisayarda üzerine gelince renklen.
                className="grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-700 w-full h-full"
              ></iframe>
            </div>

          </div>
        </div>

      </div>
    </PageTransition>
  );
}