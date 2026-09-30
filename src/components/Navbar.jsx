import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { FlagDE, FlagEN } from './FlagIcons';
import lampagLogoWhite from '../assets/brand/lampag_logo_white.webp';

const Navbar = ({ activePage, setActivePage }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { langCode, setLangCode, t } = useLanguage();

  const languages = [
    { code: 'DE', name: 'Deutsch', flagComp: <FlagDE width={20} height={14} /> },
    { code: 'EN', name: 'English', flagComp: <FlagEN width={20} height={14} /> }
  ];

  const navItems = [
    { id: 'about', label: t.nav.about, path: '/about' },
    { id: 'services', label: t.nav.services || t.nav.whatweoffer, path: '/services' },
    { id: 'products', label: t.nav.products || t.nav.product, path: '/products' },
    { id: 'portfolio', label: t.nav.portfolio, path: '/portfolio' },
    { id: 'contact', label: t.nav.contact, path: '/contact' },
  ];

  const isNavActive = (itemId) => {
    if (activePage === itemId) return true;
    if ((itemId === 'products' || itemId === 'product') && (activePage === 'products' || activePage === 'product')) return true;
    if ((itemId === 'services' || itemId === 'whatweoffer') && (activePage === 'services' || activePage === 'whatweoffer')) return true;
    return false;
  };

  const currentLangObj = languages.find(l => l.code === langCode) || languages[0];

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
        {/* Official Brand Logo */}
        <a 
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
          style={{ 
            cursor: 'pointer', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px',
            textDecoration: 'none'
          }}
          aria-label="LAMPAG Home"
        >
          <img 
            src={lampagLogoWhite} 
            alt="LAMPAG - Precision Aluminium Systems" 
            style={{ height: '34px', width: 'auto', display: 'block' }}
          />
          <div style={{ borderLeft: '1px solid #23422d', paddingLeft: '12px', display: 'flex', flexDirection: 'column' }} className="brand-subtext">
            <span style={{ fontSize: '0.62rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', letterSpacing: '0.12em', lineHeight: 1.2 }}>
              PRECISION SYSTEMS
            </span>
            <span style={{ fontSize: '0.58rem', color: 'var(--lampag-green)', fontWeight: 700, letterSpacing: '0.08em', marginTop: '2px' }}>
              SCHÜCO PARTNER
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="desktop-nav">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
            className={`nav-link-item ${activePage === 'home' ? 'active' : ''}`}
            style={{ color: activePage === 'home' ? '#ffffff' : '#cbd5e1', textDecoration: 'none' }}
          >
            {t.nav.home}
          </a>
          {navItems.map((item) => {
            const active = isNavActive(item.id);
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.id); }}
                className={`nav-link-item ${active ? 'active' : ''}`}
                style={{ color: active ? '#ffffff' : '#cbd5e1', textDecoration: 'none' }}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Section: Language Switcher Dropdown */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {/* Language Selector Dropdown */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                padding: '6px 14px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {currentLangObj.flagComp}
              </div>
              <span style={{ fontWeight: 700 }}>{currentLangObj.code}</span>
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
                minWidth: '160px',
                overflow: 'hidden',
                zIndex: 1000
              }}>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLangCode(lang.code);
                      setLangOpen(false);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      width: '100%',
                      padding: '10px 14px',
                      backgroundColor: langCode === lang.code ? 'rgba(57, 158, 82, 0.35)' : 'transparent',
                      border: 'none',
                      color: '#ffffff',
                      fontSize: '0.85rem',
                      fontWeight: langCode === lang.code ? 700 : 500,
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      {lang.flagComp}
                    </div>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

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
            aria-label="Toggle navigation menu"
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
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
            className={`nav-link-item ${activePage === 'home' ? 'active' : ''}`}
            style={{ textAlign: 'left', color: '#ffffff', textDecoration: 'none' }}
          >
            {t.nav.home}
          </a>
          {navItems.map((item) => {
            const active = isNavActive(item.id);
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.id); }}
                className={`nav-link-item ${active ? 'active' : ''}`}
                style={{ textAlign: 'left', color: '#ffffff', textDecoration: 'none' }}
              >
                {item.label}
              </a>
            );
          })}
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
