import React from 'react';
import PageTransition from '../components/PageTransition';

export default function KentselDonusum() {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 bg-white">
        {/* ÜST BAŞLIK ALANI */}
        <div className="container mx-auto px-4 mb-16">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 uppercase tracking-tight">
              Kentsel <span>Dönüşüm</span>
            </h1>
            <div className="w-24 h-1.5 bg-[#D3AF37] mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
             "Riskli yapıları modernize ederek şehrin çehresini değiştiriyor, sağlam temeller üzerinde yeni bir yaşam inşa ediyoruz."
            </p>
          </div>
        </div>

        {/* GÖRSEL VE DETAY ALANI */}
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
            {/* Sol: Görsel */}
            <div className="w-full lg:w-1/2 relative h-[400px]">
              <img 
                src="/projeler/kentselles.jpg" 
                alt="Kentsel Dönüşüm İnşaat" 
                className="w-full h-full object-cover rounded shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D3AF37] -z-10 hidden md:block"></div>
            </div>

            {/* Sağ: Yazı */}
            <div className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">Geleceğinizi Güvenle İnşa Ediyoruz</h3>
              <p className="text-gray-600 leading-relaxed">
                DSN İnşaat olarak, kentsel dönüşüm sürecini sadece bir bina yenileme işi olarak görmüyoruz. Bu süreci, yaşam kalitenizi artıran, aileniz için güvenli bir gelecek kuran ve şehrin dokusuna değer katan bir sosyal sorumluluk projesi olarak ele alıyoruz.
              </p>
              <ul className="space-y-3 pt-4">
                {['Deprem Yönetmeliğine Uygunluk', 'Yüksek Enerji Verimliliği', 'Modern Mimari Tasarım', 'Değer Artışı Garantisi'].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700 font-medium">
                    <span className="w-2 h-2 bg-[#D3AF37] rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* SÜREÇ ADIMLARI (ICONLU) */}
          <div className="bg-gray-50 p-10 rounded-xl">
            <h3 className="text-center text-2xl font-bold mb-12 uppercase tracking-widest">Dönüşüm Süreci</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {/* Adım 1 */}
              <div className="bg-white p-8 rounded shadow-sm hover:shadow-md transition-shadow">
                <div className="text-5xl mb-4 text-[#D3AF37]">01</div>
                <h4 className="text-lg font-bold mb-3">Risk Analizi & Tespit</h4>
                <p className="text-sm text-gray-500">Mevcut binanızın risk raporunun hazırlanması ve resmi süreçlerin başlatılması.</p>
              </div>
              {/* Adım 2 */}
              <div className="bg-white p-8 rounded shadow-sm hover:shadow-md transition-shadow relative top-0 md:-top-4 border-b-4 border-[#D3AF37]">
                <div className="text-5xl mb-4 text-[#D3AF37]">02</div>
                <h4 className="text-lg font-bold mb-3">Proje & Ruhsat</h4>
                <p className="text-sm text-gray-500">Mimari projelerin çizilmesi, belediye onayı ve ruhsat işlemlerinin tamamlanması.</p>
              </div>
              {/* Adım 3 */}
              <div className="bg-white p-8 rounded shadow-sm hover:shadow-md transition-shadow">
                <div className="text-5xl mb-4 text-[#D3AF37]">03</div>
                <h4 className="text-lg font-bold mb-3">İnşaat & Teslim</h4>
                <p className="text-sm text-gray-500">Kaliteli malzeme ve işçilikle binanızın inşa edilmesi ve anahtar teslimi.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}