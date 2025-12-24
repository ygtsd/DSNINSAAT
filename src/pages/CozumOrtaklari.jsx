import React from 'react';
// ✨ 1. İmport ettik
import PageTransition from '../components/PageTransition'; 
import Ortaklar from '../components/Ortaklar';

export default function CozumOrtaklari() {
  return (
    // ✨ 2. Bütün sayfayı bununla sarmaladık
    <PageTransition>
      
      <div className="pt-28 pb-10 bg-white min-h-screen">
        
        {/* Üstteki kısa açıklama yazısı */}
        <div className="container mx-auto px-4 text-center mb-[-60px] relative z-10">
           <p className=" max-w-2xl mx-auto">
             Projelerimizde kalite standartlarımızı korumak ve en iyiyi inşa etmek için sektörün dev markalarıyla çalışıyoruz.
           </p>
        </div>

        {/* Senin hazırladığın logolar bileşeni */}
        <Ortaklar />

      </div>

    </PageTransition>
  );
}