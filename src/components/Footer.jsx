import React from 'react';
import { ShieldCheck, MapPin, Mail, Phone, Printer } from 'lucide-react';

const Footer = ({ setActivePage }) => {
  return (
    <footer style={{
      backgroundColor: 'var(--bg-dark)',
      color: 'var(--text-inverse)',
      borderTop: '2px solid var(--border-strong)',
      padding: '48px 0 24px 0',
      marginTop: '60px'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          {/* Brand & Partner Statement */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                border: '1.5px solid #ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-mono)',
                fontWeight: 800,
                fontSize: '1.1rem'
              }}>
                L
              </div>
              <span style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.02em' }}>
                LAMPAG GmbH
              </span>
            </div>

            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px' }}>
              Sustainable products for the future. Trust in quality through certified partnerships with leading system suppliers.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              <div style={{ 
                padding: '6px 12px', 
                border: '1px dashed #475569', 
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                color: '#38bdf8',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <ShieldCheck size={14} /> Schüco Partner
              </div>
              <div style={{ 
                padding: '6px 12px', 
                border: '1px dashed #475569', 
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                color: '#cbd5e1'
              }}>
                Part of Alu Group
              </div>
            </div>
          </div>

          {/* Quick Sitemap */}
          <div>
            <h4 style={{ 
              fontFamily: 'var(--font-mono)', 
              fontSize: '0.85rem', 
              color: '#38bdf8', 
              textTransform: 'uppercase', 
              marginBottom: '16px',
              letterSpacing: '0.05em' 
            }}>
              [NAVIGATION WIREFRAME]
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { id: 'home', label: '1. Homepage (/)' },
                { id: 'about', label: '2. About Us (/about)' },
                { id: 'whatweoffer', label: '3. What We Offer (/whatweoffer)' },
                { id: 'product', label: '4. Products (/product)' },
                { id: 'portfolio', label: '5. Single-Page Portfolio (/portfolio)' },
                { id: 'contact', label: '6. Contact (/contact)' },
              ].map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      setActivePage(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#cbd5e1',
                      fontSize: '0.88rem',
                      cursor: 'pointer',
                      textAlign: 'left',
                      padding: 0
                    }}
                    onMouseOver={e => e.target.style.color = '#ffffff'}
                    onMouseOut={e => e.target.style.color = '#cbd5e1'}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Specification */}
          <div>
            <h4 style={{ 
              fontFamily: 'var(--font-mono)', 
              fontSize: '0.85rem', 
              color: '#38bdf8', 
              textTransform: 'uppercase', 
              marginBottom: '16px',
              letterSpacing: '0.05em' 
            }}>
              [HEADQUARTERS & CONTACT]
            </h4>
            <div style={{ color: '#cbd5e1', fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <MapPin size={16} color="#38bdf8" style={{ marginTop: '3px', flexShrink: 0 }} />
                <div>
                  <strong>LAMPAG GmbH</strong><br />
                  Strümpenbusch 3, 44357 Dortmund<br />
                  Neuer Wall 2-6, 20354 Hamburg
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Phone size={16} color="#38bdf8" style={{ flexShrink: 0 }} />
                <span>T: +49 040 571 996 390</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Printer size={16} color="#38bdf8" style={{ flexShrink: 0 }} />
                <span>F: +49 040 571 996 381</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Mail size={16} color="#38bdf8" style={{ flexShrink: 0 }} />
                <span>E-mail: info@lampag.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Legal Blueprint Notice */}
        <div style={{
          borderTop: '1px dashed #334155',
          paddingTop: '20px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.8rem',
          color: '#64748b'
        }}>
          <div>
            © 2026 Lampag GmbH. All Rights Reserved.  |  Imprint  |  Privacy Policy
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#94a3b8' }}>
            [LAMPAG STRUCTURAL WIREFRAME PROTO V1.0]
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
