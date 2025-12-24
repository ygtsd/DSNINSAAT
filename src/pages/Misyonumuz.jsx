import React from 'react';
import PageTransition from '../components/PageTransition';

export default function Misyon() {
  return (
    <PageTransition>
    <div className="pt-32 pb-20 container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Misyonumuz</h1>
        <div className="w-20 h-1 bg-[#D3AF37] mx-auto mb-8"></div>
        <p className="text-xl text-gray-600 leading-relaxed">
          "Müşteri beklentilerini istikrarlı bir kalite anlayışıyla karşılayarak sürdürülebilir değer yaratmayı temel önceliğimiz kabul ediyoruz. Rekabetçi büyüme potansiyelimiz ve müşteri odaklı stratejilerimizle, sektörel değerleri "en iyi" şekilde yönetmek için varız.

Projelerimizin odağına aldığımız sürdürülebilir iş güvenliği ve çalışan sağlığı bilincini, sadece bir zorunluluk değil, bir kurum kültürü olarak benimsiyoruz. Hedefimiz; karşılıklı güven ve saygı esasına dayalı insan kaynakları politikamızla en iyi yetenekleri bünyemizde toplamak, örnek projelerimizle iş güvenliği bilincini sektöre yaymak ve geleceğin güvenli yapılarını inşa ederek sektöre öncülük etmektir."
        </p>
      </div>
    </div>
    </PageTransition>
  );
}