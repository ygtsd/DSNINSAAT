import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  // Hangi sayfada olduğumuzu anlıyoruz
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'ANASAYFA', href: '/' },
    { 
      name: 'KURUMSAL', 
      href: '#', 
      subLinks: [
        { name: 'Hakkımızda', href: '/hakkimizda' },
        { name: 'Vizyonumuz', href: '/vizyonumuz' },
        { name: 'Misyonumuz', href: '/misyonumuz' }
      ] 
    },
    { name: 'HİZMETLERİMİZ', href: '#', 
      subLinks: [
        { name: 'Kentsel Dönüşüm', href: '/kentsel-donusum' },
        { name: 'İnşaat', href: '/insaat' },

      ]
    },
    { name: 'PROJELER', href: '#', 
      subLinks: [
        { name: 'Tamamlanan Projeler', href: '/projeler#tamamlanan' },
        { name: 'Devam Eden Projeler', href: '/projeler#devam-eden' }
      ]
    },
    // ✨ DÜZELTİLEN KISIM BURASI: href="#" yerine doğru adresi yazdık
    { name: 'ÇÖZÜM ORTAKLARI', href: '/cozum-ortaklari' },
    
    { name: 'İLETİŞİM', href: '/iletisim' } // İletişim sayfasını yapınca burayı da düzeltiriz
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 
      ${
        // MANTIK: Eğer Anasayfa DEĞİLSE veya Scroll yapıldıysa -> SİYAH OL
        !isHomePage || scrolled 
          ? 'bg-black py-4 shadow-lg' 
          : 'bg-transparent py-6' 
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/* LOGO ALANI */}
        <Link to="/" className="z-50 flex items-center">
          <img 
            src="/projeler/dsn-logo.png" 
            alt="DSN İnşaat" 
            className="h-12 w-auto object-contain filter brightness-0 invert"
          />
        </Link>

        {/* MASAÜSTÜ MENÜ */}
        <div className="hidden md:flex space-x-8 items-center">
          {links.map((link) => (
            <div 
              key={link.name} 
              className="relative group"
              onMouseEnter={() => setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                to={link.href} 
                className="text-white text-sm font-bold hover:text-[#D3AF37] transition-colors flex items-center gap-1 py-2"
                // Eğer alt menüsü yoksa tıklayınca menü kapansın (Dropdown state'ini temizle)
                onClick={() => !link.subLinks && setActiveDropdown(null)}
              >
                {link.name}
                {link.subLinks && (
                  <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                )}
              </Link>

              {/* Dropdown - Sadece alt menüsü varsa görünür */}
              {link.subLinks && (
                <div className={`absolute left-0 top-full pt-2 w-56 transition-all duration-300 transform origin-top ${activeDropdown === link.name ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
                  <div className="bg-white rounded shadow-xl overflow-hidden py-2 border-t-4 border-[#D3AF37]">
                    {link.subLinks.map((subItem) => (
                      <Link 
                        key={subItem.name} 
                        to={subItem.href} 
                        className="block px-6 py-3 text-sm text-gray-800 hover:bg-gray-50 hover:text-[#D3AF37] transition-colors border-b border-gray-100 last:border-0"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* MOBİL MENÜ BUTONU */}
        <button className="md:hidden text-white z-50 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* MOBİL MENÜ */}
        <div className={`fixed inset-0 bg-black bg-opacity-95 z-40 flex flex-col justify-center items-center space-y-6 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {links.map((link) => (
            <div key={link.name} className="text-center">
              <Link 
                to={link.href} 
                className="text-2xl text-white font-bold hover:text-[#D3AF37] block"
                // Eğer alt menü yoksa (Anasayfa veya Çözüm Ortakları gibi) tıklandığında menüyü kapat
                onClick={() => !link.subLinks && setIsOpen(false)}
              >
                {link.name}
              </Link>
              
              {link.subLinks && (
                <div className="mt-2 space-y-2">
                  {link.subLinks.map((subItem) => (
                    <Link 
                      key={subItem.name} 
                      to={subItem.href} 
                      className="block text-gray-400 hover:text-white"
                      // Alt linklere tıklayınca menüyü kapat
                      onClick={() => setIsOpen(false)}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </nav>
  );
}