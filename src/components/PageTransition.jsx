import React from 'react';
import { motion } from 'framer-motion';

export default function PageTransition({ children }) {
  return (
    <motion.div
      // Başlangıç hali (Görünmez ve 30px yukarıda)
      initial={{ opacity: 0, y: -30 }}
      
      // Bitiş hali (Tam görünür ve yerine oturmuş)
      animate={{ opacity: 1, y: 0 }}
      
      // Çıkış hali (Sayfa değişirken hafifçe aşağı kayıp yok olsun)
      exit={{ opacity: 0, y: 20 }}
      
      // Geçiş hızı ve yumuşaklığı (Daha estetik bir curve ayarı)
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}