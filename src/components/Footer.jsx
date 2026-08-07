import React from 'react';
import { Mail, Phone, Printer, MapPin } from 'lucide-react';

const Footer = ({ setActivePage }) => {
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
          gap: '48px',
          marginBottom: '40px'
        }}>
          {/* Left Column: Brand & PART OF Logos */}
          <div>
            {/* Logo Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
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
              Sustainable products for the future. Trust in quality through certified partnerships with leading system suppliers.
            </p>

            {/* PART OF Badges */}
            <div>
              <div style={{
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                color: 'var(--lampag-green)',
                letterSpacing: '0.08em',
                marginBottom: '10px',
                textTransform: 'uppercase'
              }}>
                PART OF
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <div style={{
                  backgroundColor: 'var(--lampag-green)',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-sans)',
                  padding: '8px 18px',
                  borderRadius: 'var(--radius-sm)',
                  letterSpacing: '0.04em'
                }}>
                  LOGO SCHUCO
                </div>
                <div style={{
                  backgroundColor: 'var(--lampag-green)',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-sans)',
                  padding: '8px 18px',
                  borderRadius: 'var(--radius-sm)',
                  letterSpacing: '0.04em'
                }}>
                  LOGO ALU
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: CONTACT & LOCATION */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
            {/* CONTACT block */}
            <div>
              <h4 style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9rem',
                fontWeight: 800,
                color: 'var(--lampag-green)',
                textTransform: 'UPPERCASE',
                marginBottom: '18px',
                letterSpacing: '0.06em'
              }}>
                CONTACT
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: '#e2e8f0', fontSize: '0.88rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '28px', height: '28px', backgroundColor: 'var(--lampag-green)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={14} color="#ffffff" />
                  </div>
                  <span>+49 040 571 996 390</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '28px', height: '28px', backgroundColor: 'var(--lampag-green)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Printer size={14} color="#ffffff" />
                  </div>
                  <span>+49 040 571 996 381</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '28px', height: '28px', backgroundColor: 'var(--lampag-green)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={14} color="#ffffff" />
                  </div>
                  <span>info@lampag.com</span>
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
                textTransform: 'UPPERCASE',
                marginBottom: '18px',
                letterSpacing: '0.06em'
              }}>
                LOCATION
              </h4>
              <div style={{ color: '#e2e8f0', fontSize: '0.88rem', lineHeight: 1.6 }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <div style={{ width: '28px', height: '28px', backgroundColor: 'var(--lampag-green)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <MapPin size={14} color="#ffffff" />
                  </div>
                  <div>
                    <strong style={{ color: '#ffffff' }}>LAMPAG GmbH</strong><br />
                    Neuer Wall 2-6<br />
                    20354 Hamburg
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
            © 2026 Lampag. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
