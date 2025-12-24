import React from 'react';
import PageTransition from '../components/PageTransition';

export default function Hakkimizda() {
  return (
    <PageTransition>
    <div className="pt-32 pb-20 container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Hakkımızda</h1>
      <div className="w-20 h-1 bg-[#D3AF37] mb-8"></div>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2">
           <img src="/projeler/hakkimizda.png" alt="Hakkımızda" className="rounded-lg shadow-xl" />
        </div>
        <div className="md:w-1/2 text-gray-600 leading-relaxed space-y-4">
          <p>Sektördeki yolculuğumuza, insanların en temel ihtiyacı olan "güvenli yaşam alanı" arzusuna profesyonel çözümler sunmak amacıyla başladık. Bina güçlendirme, kentsel dönüşüm, proje hizmetleri, taahhüt ve danışmanlık alanlarındaki derin uzmanlığımızla, sadece binalar değil, huzurlu yarınlar inşa ediyoruz.</p>
          <p>Bizim için her proje, topluma ve çevreye karşı duyduğumuz sorumluluğun bir yansımasıdır. Teknik mühendislik becerilerimizi modern mimariyle birleştirerek, estetikten ödün vermeden, depreme dayanıklı ve sürdürülebilir yapılar tasarlıyoruz. Standartları takip eden değil, standartları belirleyen bir hizmet anlayışıyla şehrin çehresini değiştirmeye kararlıyız.</p>
        </div>
      </div>
    </div>
    </PageTransition>
  );
}

