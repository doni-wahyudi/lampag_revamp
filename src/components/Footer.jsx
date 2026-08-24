import React from 'react';
import { Mail, Phone, Printer, MapPin } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

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
            >
              <div style={{
                width: '38px',
                height: '38px',
                backgroundColor: 'var(--lampag-green)',
                clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                color: '#ffffff',
                fontSize: '1.15rem',
                fontFamily: 'var(--font-mono)'
              }}>
                L
              </div>
              <span style={{ fontWeight: 800, fontSize: '1.4rem', letterSpacing: '-0.02em', color: '#ffffff' }}>
                LAMPAG
              </span>
            </div>

            <p style={{ color: '#a0aec0', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '24px', maxWidth: '340px' }}>
              {t.footer.aboutDesc}
            </p>

            {/* PART OF / CERTIFIED PARTNER BADGES */}
            <div>
              <div style={{
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                color: 'var(--lampag-green)',
                letterSpacing: '0.08em',
                marginBottom: '12px',
                textTransform: 'uppercase'
              }}>
                {t.footer.partOf}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
                {/* Official Schüco Partner Styled Badge */}
                <div style={{
                  backgroundColor: '#0a140e',
                  border: '1.5px solid var(--lampag-green)',
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.25)'
                }}>
                  <div style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 900,
                    fontSize: '1rem',
                    color: '#ffffff',
                    letterSpacing: '0.04em',
                    lineHeight: 1
                  }}>
                    SCHÜCO
                  </div>
                  <div style={{
                    backgroundColor: 'var(--lampag-green)',
                    color: '#ffffff',
                    fontSize: '0.68rem',
                    fontWeight: 800,
                    padding: '2px 6px',
                    borderRadius: '2px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    lineHeight: 1.2
                  }}>
                    PARTNER
                  </div>
                </div>

                {/* Official ALU Group Badge */}
                <div style={{
                  backgroundColor: '#0a140e',
                  border: '1.5px solid #2d4a34',
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.25)'
                }}>
                  <div style={{
                    fontFamily: 'var(--font-sans)',
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
              <button
                onClick={() => handleNav('home')}
                style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '6px', padding: 0 }}
              >
                <span>{t.nav.home}</span>
              </button>
              <button
                onClick={() => handleNav('about')}
                style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '6px', padding: 0 }}
              >
                <span>{t.nav.about}</span>
              </button>
              <button
                onClick={() => handleNav('services')}
                style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '6px', padding: 0 }}
              >
                <span>{t.nav.services || t.nav.whatweoffer}</span>
              </button>
              <button
                onClick={() => handleNav('product')}
                style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '6px', padding: 0 }}
              >
                <span>{t.nav.product}</span>
              </button>
              <button
                onClick={() => handleNav('portfolio')}
                style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '6px', padding: 0 }}
              >
                <span>{t.nav.portfolio}</span>
              </button>
              <button
                onClick={() => handleNav('contact')}
                style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '6px', padding: 0 }}
              >
                <span>{t.nav.contact}</span>
              </button>
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
