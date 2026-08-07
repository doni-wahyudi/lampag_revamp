import React, { useState } from 'react';
import { Menu, X, Layers, ShieldCheck, Box } from 'lucide-react';

const Navbar = ({ activePage, setActivePage, blueprintMode, setBlueprintMode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About Us', path: '/about' },
    { id: 'whatweoffer', label: 'What We Offer', path: '/whatweoffer' },
    { id: 'product', label: 'Products', path: '/product' },
    { id: 'portfolio', label: 'Portfolio', path: '/portfolio' },
    { id: 'contact', label: 'Contact', path: '/contact' },
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
      backgroundColor: 'var(--bg-surface)',
      borderBottom: '1.5px solid var(--border-dim)',
      boxShadow: 'var(--shadow-wf)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '72px'
      }}>
        {/* Brand Logo & Badges */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div 
            onClick={() => handleNavClick('home')}
            style={{ 
              cursor: 'pointer', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px' 
            }}
          >
            <div style={{
              width: '40px',
              height: '40px',
              border: '2px solid var(--text-main)',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontFamily: 'var(--font-mono)',
              fontSize: '1.2rem',
              backgroundColor: 'var(--bg-subtle)'
            }}>
              L
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.03em', lineHeight: 1 }}>
                LAMPAG
              </div>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', marginTop: '2px' }}>
                Aluminium Systems
              </div>
            </div>
          </div>

          {/* Blueprint Structural Header Badges */}
          <div style={{ display: 'none', md: 'flex', gap: '6px' }} className="partner-badges">
            <span className="wf-tag" title="Certified Partnership">
              <ShieldCheck size={12} /> Schüco Partner
            </span>
            <span className="wf-tag" title="Parent Group Member">
              <Box size={12} /> Alu Group
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{
                background: activePage === item.id ? 'var(--bg-subtle)' : 'transparent',
                border: activePage === item.id ? '1px dashed var(--border-strong)' : '1px solid transparent',
                borderRadius: 'var(--radius-sm)',
                padding: '8px 14px',
                fontSize: '0.88rem',
                fontWeight: activePage === item.id ? 700 : 500,
                color: activePage === item.id ? 'var(--text-main)' : 'var(--text-muted)',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Control Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={() => setBlueprintMode(!blueprintMode)}
            className="btn btn-blueprint"
            title="Toggle Structural Blueprint & Grid Annotations"
          >
            <Layers size={15} />
            <span style={{ display: 'inline' }}>
              {blueprintMode ? 'Grid: ON' : 'Grid: OFF'}
            </span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'none',
              background: 'transparent',
              border: '1px solid var(--border-dim)',
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
          backgroundColor: 'var(--bg-surface)',
          borderTop: '1px dashed var(--border-dim)',
          padding: '16px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{
                textAlign: 'left',
                padding: '10px 14px',
                borderRadius: 'var(--radius-sm)',
                border: activePage === item.id ? '1px dashed var(--border-strong)' : '1px solid transparent',
                backgroundColor: activePage === item.id ? 'var(--bg-subtle)' : 'transparent',
                fontWeight: activePage === item.id ? 700 : 500,
                fontSize: '0.95rem'
              }}
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
          .partner-badges { display: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
