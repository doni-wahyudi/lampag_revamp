import React, { useState } from 'react';
import { Menu, X, Layers, Globe, ChevronDown } from 'lucide-react';

const Navbar = ({ activePage, setActivePage, blueprintMode, setBlueprintMode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState({ code: 'DE', name: 'Deutschland', flag: '🇩🇪' });

  const languages = [
    { code: 'DE', name: 'Deutschland', flag: '🇩🇪' },
    { code: 'EN', name: 'English', flag: '🇬🇧' }
  ];

  const navItems = [
    { id: 'about', label: 'ABOUT', path: '/about' },
    { id: 'whatweoffer', label: 'WHAT WE OFFER', path: '/whatweoffer' },
    { id: 'product', label: 'PRODUCT', path: '/product' },
    { id: 'portfolio', label: 'PORTFOLIO', path: '/portfolio' },
    { id: 'contact', label: 'CONTACT', path: '/contact' },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 900,
      backgroundColor: '#0d1a12',
      borderBottom: '1px solid #1b3323',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '76px'
      }}>
        {/* Brand Logo with Green Polygon Shape */}
        <div 
          onClick={() => handleNavClick('home')}
          style={{ 
            cursor: 'pointer', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px' 
          }}
        >
          {/* Green Polygon Shape Logo */}
          <div style={{
            width: '42px',
            height: '42px',
            backgroundColor: 'var(--lampag-green)',
            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 900,
            color: '#ffffff',
            fontSize: '1.25rem',
            fontFamily: 'var(--font-mono)'
          }}>
            L
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.35rem', letterSpacing: '-0.02em', color: '#ffffff', lineHeight: 1 }}>
              LAMPAG
            </div>
            <div style={{ fontSize: '0.62rem', color: '#829ab1', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', marginTop: '3px' }}>
              PRECISION ALUMINIUM SYSTEMS
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="desktop-nav">
          <button
            onClick={() => handleNavClick('home')}
            className={`nav-link-item ${activePage === 'home' ? 'active' : ''}`}
            style={{ color: activePage === 'home' ? '#ffffff' : '#cbd5e1' }}
          >
            HOME
          </button>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`nav-link-item ${activePage === item.id ? 'active' : ''}`}
              style={{ color: activePage === item.id ? '#ffffff' : '#cbd5e1' }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Section: Language Switcher Dropdown & Blueprint Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {/* Language Selector Dropdown */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                padding: '6px 12px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              <Globe size={14} color="var(--lampag-green)" />
              <span>{currentLang.flag} {currentLang.code}</span>
              <ChevronDown size={14} />
            </button>

            {langOpen && (
              <div style={{
                position: 'absolute',
                top: '110%',
                right: 0,
                backgroundColor: '#1b3323',
                border: '1px solid var(--lampag-green)',
                borderRadius: 'var(--radius-md)',
                boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
                minWidth: '150px',
                overflow: 'hidden',
                zIndex: 1000
              }}>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setCurrentLang(lang);
                      setLangOpen(false);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      width: '100%',
                      padding: '10px 14px',
                      backgroundColor: currentLang.code === lang.code ? 'rgba(57, 158, 82, 0.25)' : 'transparent',
                      border: 'none',
                      color: '#ffffff',
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Grid Toggle */}
          <button
            onClick={() => setBlueprintMode(!blueprintMode)}
            className="btn btn-blueprint"
            title="Toggle Structural Blueprint Annotations"
            style={{ padding: '6px 12px', borderRadius: 'var(--radius-pill)' }}
          >
            <Layers size={14} />
            <span>{blueprintMode ? 'Grid: ON' : 'Grid: OFF'}</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'none',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#ffffff',
              padding: '6px',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer'
            }}
            className="mobile-toggle"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div style={{
          backgroundColor: '#0d1a12',
          borderTop: '1px solid #1b3323',
          padding: '16px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          <button
            onClick={() => handleNavClick('home')}
            className={`nav-link-item ${activePage === 'home' ? 'active' : ''}`}
            style={{ textAlign: 'left', color: '#ffffff' }}
          >
            HOME
          </button>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`nav-link-item ${activePage === item.id ? 'active' : ''}`}
              style={{ textAlign: 'left', color: '#ffffff' }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
