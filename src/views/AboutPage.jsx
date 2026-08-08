import React from 'react';
import WireframePlaceholder from '../components/WireframePlaceholder';
import { ShieldCheck, CheckCircle2, Factory, Award, Building, Wrench, RefreshCw, Handshake } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const AboutPage = () => {
  const { t } = useLanguage();

  const strengths = [
    {
      icon: <ShieldCheck size={24} color="var(--lampag-green)" />,
      title: t.about.pillar1,
      desc: t.about.pillar1Desc
    },
    {
      icon: <Wrench size={24} color="var(--lampag-green)" />,
      title: t.about.pillar2,
      desc: t.about.pillar2Desc
    },
    {
      icon: <Building size={24} color="var(--lampag-green)" />,
      title: t.about.pillar3,
      desc: t.about.pillar3Desc
    },
    {
      icon: <Award size={24} color="var(--lampag-green)" />,
      title: t.about.pillar4,
      desc: t.about.pillar4Desc
    },
    {
      icon: <Factory size={24} color="var(--lampag-green)" />,
      title: t.about.pillar5,
      desc: t.about.pillar5Desc
    },
    {
      icon: <CheckCircle2 size={24} color="var(--lampag-green)" />,
      title: t.about.pillar6,
      desc: t.about.pillar6Desc
    },
    {
      icon: <RefreshCw size={24} color="var(--lampag-green)" />,
      title: t.about.pillar7,
      desc: t.about.pillar7Desc
    },
    {
      icon: <Handshake size={24} color="var(--lampag-green)" />,
      title: t.about.pillar8,
      desc: t.about.pillar8Desc
    }
  ];

  return (
    <div>
      {/* HERO BANNER */}
      <section 
        className="hero-full-banner"
        style={{
          backgroundImage: 'linear-gradient(rgba(10, 20, 14, 0.82), rgba(10, 20, 14, 0.92)), url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85")'
        }}
      >
        <div className="container">
          <div className="hero-content-wrapper">
            <div>
              <span style={{
                color: 'var(--lampag-green)',
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-mono)'
              }}>
                {t.about.heroTag}
              </span>
              <h1 style={{
                fontSize: '3rem',
                fontWeight: 800,
                lineHeight: 1.12,
                color: '#ffffff',
                margin: '12px 0 20px 0',
                letterSpacing: '-0.03em'
              }}>
                {t.about.heroTitle}
              </h1>
              <p style={{
                fontSize: '1.15rem',
                color: '#cbd5e1',
                lineHeight: 1.6,
                marginBottom: '24px',
                maxWidth: '540px'
              }}>
                {t.about.heroDesc}
              </p>

              <div style={{
                marginTop: '20px',
                padding: '12px 18px',
                backgroundColor: 'rgba(57, 158, 82, 0.15)',
                borderLeft: '3px solid var(--lampag-green)',
                borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                fontSize: '0.9rem',
                color: '#e2e8f0'
              }}>
                <strong style={{ color: 'var(--lampag-green)' }}>German Manufacturing Excellence:</strong> Member of Alu Group with 70,000 m² annual capacity & 700+ worldwide projects.
              </div>
            </div>

            <div>
              <WireframePlaceholder
                title="ABOUT HERO ARCHITECTURAL CLOSE-UP"
                direction="Architectural close-up highlighting precision engineering, curtain wall glass joints, and clean structural lines."
                aspectRatio="4/3"
                height="360px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: COMPANY PROFILE (WHO WE ARE) */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid var(--border-dim)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '40px', alignItems: 'flex-start' }}>
            <div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '16px' }}>{t.about.whoTitle}</h2>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--text-main)', marginBottom: '16px' }}>
                {t.about.whoP1}
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#64748b', marginBottom: '16px' }}>
                {t.about.whoP2}
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#64748b' }}>
                {t.about.whoP3}
              </p>
            </div>

            <div style={{
              padding: '28px',
              backgroundColor: '#f8fafc',
              border: '1px solid var(--border-dim)',
              borderRadius: 'var(--radius-md)'
            }}>
              <div style={{
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                color: 'var(--lampag-green)',
                letterSpacing: '0.06em',
                marginBottom: '16px',
                textTransform: 'uppercase'
              }}>
                COMPANY AT A GLANCE
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ borderBottom: '1px dashed var(--border-dim)', paddingBottom: '12px' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--lampag-green)' }}>700+</div>
                  <div style={{ fontSize: '0.88rem', color: '#64748b' }}>Completed projects worldwide across residential & commercial sectors.</div>
                </li>
                <li style={{ borderBottom: '1px dashed var(--border-dim)', paddingBottom: '12px' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--lampag-green)' }}>70,000 m²</div>
                  <div style={{ fontSize: '0.88rem', color: '#64748b' }}>Annual production capacity with advanced Schüco CNC automation.</div>
                </li>
                <li>
                  <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--lampag-green)' }}>50+ Years</div>
                  <div style={{ fontSize: '0.88rem', color: '#64748b' }}>Regional team engineering expertise in aluminium construction.</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 & 3: PHILOSOPHY & APPROACH */}
      <section className="section-padding" style={{ backgroundColor: '#f4f8f5', borderBottom: '1px solid var(--border-dim)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '32px' }}>
            <div style={{
              padding: '32px',
              backgroundColor: '#ffffff',
              border: '1px solid var(--border-dim)',
              borderRadius: 'var(--radius-md)'
            }}>
              <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--lampag-green)' }}>[OUR PHILOSOPHY]</span>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginTop: '6px', marginBottom: '12px', color: 'var(--text-main)' }}>{t.about.philosophyTitle}</h3>
              <p style={{ fontSize: '0.98rem', color: '#64748b', lineHeight: 1.6 }}>
                {t.about.philosophyDesc}
              </p>
            </div>

            <div style={{
              padding: '32px',
              backgroundColor: '#ffffff',
              border: '1px solid var(--border-dim)',
              borderRadius: 'var(--radius-md)'
            }}>
              <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--lampag-green)' }}>[OUR APPROACH]</span>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginTop: '6px', marginBottom: '12px', color: 'var(--text-main)' }}>{t.about.approachTitle}</h3>
              <p style={{ fontSize: '0.98rem', color: '#64748b', lineHeight: 1.6 }}>
                {t.about.approachDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: 8 CORE STRENGTHS GRID */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid var(--border-dim)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)' }}>{t.about.strengthsTitle}</h2>
            <p style={{ color: '#64748b', marginTop: '6px' }}>Our core operational pillars ensuring reliability, precision, and building longevity.</p>
          </div>

          <div className="grid-4">
            {strengths.map((item, index) => (
              <div key={index} style={{
                padding: '20px',
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-dim)',
                borderRadius: 'var(--radius-md)',
                transition: 'border-color 0.2s ease'
              }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--lampag-green-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '14px'
                }}>
                  {item.icon}
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>{item.title}</h4>
                <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: SUSTAINABILITY & COMMITMENT */}
      <section className="section-padding" style={{ backgroundColor: '#eaf5ed' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--lampag-green-dark)' }}>
              {t.about.sustainabilityTitle}
            </h2>
          </div>
          <div className="grid-2" style={{ gap: '32px' }}>
            <div style={{ padding: '28px', backgroundColor: '#ffffff', border: '1px solid #c6e6cd', borderRadius: 'var(--radius-md)' }}>
              <p style={{ fontSize: '0.95rem', color: '#334155', lineHeight: 1.6 }}>
                {t.about.sustainabilityP1}
              </p>
            </div>

            <div style={{ padding: '28px', backgroundColor: '#ffffff', border: '1px solid #c6e6cd', borderRadius: 'var(--radius-md)' }}>
              <p style={{ fontSize: '0.95rem', color: '#334155', lineHeight: 1.6 }}>
                {t.about.sustainabilityP2}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
