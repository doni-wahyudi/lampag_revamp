import React from 'react';
import { Mail, Phone, Printer, MapPin, Globe } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import lampagLogoWhite from '../assets/brand/lampag_logo_white.webp';
import schuecoPartnerWhite from '../assets/brand/schueco_partner_white.webp';

const Footer = ({ setActivePage }) => {
  const { t } = useLanguage();

  const handleNav = (pageId) => {
    if (setActivePage) {
      setActivePage(pageId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer style={{
      backgroundColor: '#162a1c',
      color: '#ffffff',
      borderTop: '2px solid #1b3323',
      padding: '48px 0 24px 0',
      marginTop: '0'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          {/* Left Column: Brand & PART OF Logos */}
          <div>
            {/* Logo Header */}
            <div 
              onClick={() => handleNav('home')}
              style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', cursor: 'pointer' }}
              aria-label="LAMPAG Home"
            >
              <img 
                src={lampagLogoWhite} 
                alt="LAMPAG - Precision Aluminium Systems" 
                style={{ height: '36px', width: 'auto', display: 'block' }}
              />
            </div>

            <p style={{ color: '#a0aec0', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px', maxWidth: '340px' }}>
              {t.footer.aboutDesc}
            </p>

            {/* Social Media Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <a 
                href="https://de.linkedin.com/company/lampag-gmbh" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LAMPAG on LinkedIn"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: '#0a140e',
                  border: '1px solid #2d4a34',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#cbd5e1',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--lampag-green)'; e.currentTarget.style.color = '#ffffff'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#2d4a34'; e.currentTarget.style.color = '#cbd5e1'; }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z"/>
                </svg>
              </a>

              <a 
                href="https://www.instagram.com/lampagcom/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LAMPAG on Instagram"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: '#0a140e',
                  border: '1px solid #2d4a34',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#cbd5e1',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--lampag-green)'; e.currentTarget.style.color = '#ffffff'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#2d4a34'; e.currentTarget.style.color = '#cbd5e1'; }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>

              <a 
                href="https://lampag.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LAMPAG Official Website"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: '#0a140e',
                  border: '1px solid #2d4a34',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#cbd5e1',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--lampag-green)'; e.currentTarget.style.color = '#ffffff'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#2d4a34'; e.currentTarget.style.color = '#cbd5e1'; }}
              >
                <Globe size={16} />
              </a>
            </div>

            {/* CERTIFIED PARTNER & PART OF / NETWORK BADGES */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px', alignItems: 'center' }}>
              <div>
                <div style={{
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  color: 'var(--lampag-green)',
                  letterSpacing: '0.08em',
                  marginBottom: '8px',
                  textTransform: 'uppercase'
                }}>
                  {t.footer.certifiedPartner || 'CERTIFIED PARTNER'}
                </div>
                {/* Official Schüco Partner Logo Badge */}
                <div style={{
                  backgroundColor: '#0a140e',
                  border: '1.5px solid var(--lampag-green)',
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                  minHeight: '44px'
                }}>
                  <img 
                    src={schuecoPartnerWhite} 
                    alt="Schüco Partner" 
                    style={{ height: '24px', width: 'auto', display: 'block' }}
                  />
                </div>
              </div>

              <div>
                <div style={{
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  color: 'var(--lampag-green)',
                  letterSpacing: '0.08em',
                  marginBottom: '8px',
                  textTransform: 'uppercase'
                }}>
                  {t.footer.partOf || 'PART OF'}
                </div>
                {/* Official ALU Group Badge */}
                <div style={{
                  backgroundColor: '#0a140e',
                  border: '1.5px solid #2d4a34',
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                  minHeight: '44px'
                }}>
                  <div style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    fontSize: '0.92rem',
                    color: '#e2e8f0',
                    letterSpacing: '0.04em'
                  }}>
                    ALU GROUP
                  </div>
                  <span style={{ fontSize: '0.65rem', color: 'var(--lampag-green)', fontWeight: 700, textTransform: 'uppercase' }}>
                    MEMBER
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column: Quick Navigation Links */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              fontWeight: 800,
              color: 'var(--lampag-green)',
              textTransform: 'uppercase',
              marginBottom: '18px',
              letterSpacing: '0.06em'
            }}>
              {t.footer.linksTitle}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <a
                href="#home"
                onClick={(e) => { e.preventDefault(); handleNav('home'); }}
                style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '6px', padding: 0, textDecoration: 'none' }}
              >
                <span>{t.nav.home}</span>
              </a>
              <a
                href="#about"
                onClick={(e) => { e.preventDefault(); handleNav('about'); }}
                style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '6px', padding: 0, textDecoration: 'none' }}
              >
                <span>{t.nav.about}</span>
              </a>
              <a
                href="#services"
                onClick={(e) => { e.preventDefault(); handleNav('services'); }}
                style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '6px', padding: 0, textDecoration: 'none' }}
              >
                <span>{t.nav.services || t.nav.whatweoffer}</span>
              </a>
              <a
                href="#products"
                onClick={(e) => { e.preventDefault(); handleNav('products'); }}
                style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '6px', padding: 0, textDecoration: 'none' }}
              >
                <span>{t.nav.product}</span>
              </a>
              <a
                href="#portfolio"
                onClick={(e) => { e.preventDefault(); handleNav('portfolio'); }}
                style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '6px', padding: 0, textDecoration: 'none' }}
              >
                <span>{t.nav.portfolio}</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNav('contact'); }}
                style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '6px', padding: 0, textDecoration: 'none' }}
              >
                <span>{t.nav.contact}</span>
              </a>
            </div>
          </div>

          {/* Right Column: CONTACT & LOCATION */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '28px' }}>
            {/* CONTACT block */}
            <div>
              <h4 style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9rem',
                fontWeight: 800,
                color: 'var(--lampag-green)',
                textTransform: 'uppercase',
                marginBottom: '18px',
                letterSpacing: '0.06em'
              }}>
                {t.footer.contactTitle}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: '#e2e8f0', fontSize: '0.88rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '28px', height: '28px', backgroundColor: 'var(--lampag-green)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={14} color="#ffffff" />
                  </div>
                  <span style={{ whiteSpace: 'nowrap' }}>+49 040 571 996 390</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '28px', height: '28px', backgroundColor: 'var(--lampag-green)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Printer size={14} color="#ffffff" />
                  </div>
                  <span style={{ whiteSpace: 'nowrap' }}>+49 040 571 996 381</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '28px', height: '28px', backgroundColor: 'var(--lampag-green)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={14} color="#ffffff" />
                  </div>
                  <span style={{ whiteSpace: 'nowrap' }}>info@lampag.com</span>
                </div>
              </div>
            </div>

            {/* LOCATION block */}
            <div>
              <h4 style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9rem',
                fontWeight: 800,
                color: 'var(--lampag-green)',
                textTransform: 'uppercase',
                marginBottom: '18px',
                letterSpacing: '0.06em'
              }}>
                LOCATIONS
              </h4>
              <div style={{ color: '#e2e8f0', fontSize: '0.88rem', lineHeight: 1.6 }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <div style={{ width: '28px', height: '28px', backgroundColor: 'var(--lampag-green)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <MapPin size={14} color="#ffffff" />
                  </div>
                  <div>
                    <strong style={{ color: '#ffffff' }}>Hamburg Office:</strong><br />
                    Neuer Wall 2-6<br />
                    20354 Hamburg
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <div style={{ width: '28px', height: '28px', backgroundColor: 'var(--lampag-green)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <MapPin size={14} color="#ffffff" />
                  </div>
                  <div>
                    <strong style={{ color: '#ffffff' }}>Dortmund Facility:</strong><br />
                    Strümpenbusch 3<br />
                    44357 Dortmund
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid #23422d',
          paddingTop: '20px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.82rem',
          color: '#718096'
        }}>
          <div>
            Imprint &nbsp; | &nbsp; Privacy Policy
          </div>
          <div>
            {t.footer.rights}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
