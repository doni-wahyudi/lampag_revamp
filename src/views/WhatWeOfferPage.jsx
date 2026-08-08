import React from 'react';
import WireframePlaceholder from '../components/WireframePlaceholder';
import { Ruler, FileText, CheckCircle2, ShieldCheck, Truck, Headphones, Layers, Building, Factory, Home, Store, Landmark, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const WhatWeOfferPage = ({ setActivePage }) => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Ruler size={22} color="var(--lampag-green)" />,
      title: t.services.s1,
      desc: t.services.s1Desc
    },
    {
      icon: <FileText size={22} color="var(--lampag-green)" />,
      title: t.services.s2,
      desc: t.services.s2Desc
    },
    {
      icon: <Layers size={22} color="var(--lampag-green)" />,
      title: t.services.s3,
      desc: t.services.s3Desc
    },
    {
      icon: <ShieldCheck size={22} color="var(--lampag-green)" />,
      title: t.services.s4,
      desc: t.services.s4Desc
    },
    {
      icon: <Truck size={22} color="var(--lampag-green)" />,
      title: t.services.s5,
      desc: t.services.s5Desc
    },
    {
      icon: <CheckCircle2 size={22} color="var(--lampag-green)" />,
      title: t.services.s6,
      desc: t.services.s6Desc
    }
  ];

  const industries = [
    {
      icon: <Building size={20} color="var(--lampag-green)" />,
      title: t.services.ind1,
      desc: t.services.ind1Desc
    },
    {
      icon: <Home size={20} color="var(--lampag-green)" />,
      title: t.services.ind2,
      desc: t.services.ind2Desc
    },
    {
      icon: <Store size={20} color="var(--lampag-green)" />,
      title: t.services.ind3,
      desc: t.services.ind3Desc
    },
    {
      icon: <Landmark size={20} color="var(--lampag-green)" />,
      title: t.services.ind4,
      desc: t.services.ind4Desc
    },
    {
      icon: <Factory size={20} color="var(--lampag-green)" />,
      title: t.services.ind5,
      desc: t.services.ind5Desc
    },
    {
      icon: <Layers size={20} color="var(--lampag-green)" />,
      title: t.services.ind6,
      desc: t.services.ind6Desc
    }
  ];

  const deliveryProcess = [
    { step: '01', title: t.services.step1, desc: t.services.step1Desc },
    { step: '02', title: t.services.step2, desc: t.services.step2Desc },
    { step: '03', title: t.services.step3, desc: t.services.step3Desc },
    { step: '04', title: t.services.step4, desc: t.services.step4Desc },
    { step: '05', title: t.services.step5, desc: t.services.step5Desc }
  ];

  return (
    <div>
      {/* HERO BANNER - FULL SCREEN 1 */}
      <section 
        className="hero-full-banner"
        style={{
          backgroundImage: 'linear-gradient(rgba(10, 20, 14, 0.82), rgba(10, 20, 14, 0.92)), url("https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=85")'
        }}
      >
        <div className="container">
          <div className="hero-content-wrapper">
            <div>
              <span style={{
                color: 'var(--lampag-green)',
                fontWeight: 700,
                fontSize: '0.82rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-mono)'
              }}>
                {t.services.heroTag}
              </span>
              <h1 style={{
                fontSize: '2.8rem',
                fontWeight: 800,
                lineHeight: 1.15,
                color: '#ffffff',
                margin: '10px 0 16px 0',
                letterSpacing: '-0.03em'
              }}>
                {t.services.heroTitle}
              </h1>
              <p style={{
                fontSize: '1.08rem',
                color: '#cbd5e1',
                lineHeight: 1.6,
                marginBottom: '20px',
                maxWidth: '520px'
              }}>
                {t.services.heroDesc}
              </p>

              <div style={{
                padding: '10px 16px',
                backgroundColor: 'rgba(57, 158, 82, 0.15)',
                borderLeft: '3px solid var(--lampag-green)',
                borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                fontSize: '0.86rem',
                color: '#e2e8f0'
              }}>
                <strong style={{ color: 'var(--lampag-green)' }}>Turnkey Engineering:</strong> From initial CAD modeling to high-precision CNC fabrication.
              </div>
            </div>

            <div>
              <WireframePlaceholder
                title="WHAT WE OFFER VISUAL"
                direction="Architectural drawing board & profile engineering visual."
                aspectRatio="4/3"
                height="320px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE OVERVIEW & BREAKDOWN - FULL SCREEN 2 */}
      <section className="screen-section" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid var(--border-dim)' }}>
        <div className="container">
          <div className="section-header" style={{ maxWidth: '820px', marginBottom: '24px', textAlign: 'center', margin: '0 auto 24px auto' }}>
            <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--lampag-green)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              CAPABILITIES & SERVICES
            </span>
            <h2 style={{ fontSize: '2.1rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '4px' }}>End-to-End Technical Expertise</h2>
            <p style={{ marginTop: '6px', fontSize: '0.96rem', color: '#475569', lineHeight: 1.55 }}>
              Lampag supports clients throughout the entire project lifecycle with professional engineering and in-house fabrication.
            </p>
          </div>

          <div className="grid-3" style={{ gap: '18px' }}>
            {services.map((item, idx) => (
              <div key={idx} style={{
                padding: '20px',
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-dim)',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-wf)'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--lampag-green-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '12px'
                }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '6px' }}>{item.title}</h3>
                <p style={{ fontSize: '0.86rem', color: '#64748b', lineHeight: 1.48 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE - FULL SCREEN 3 */}
      <section className="screen-section" style={{ backgroundColor: '#f4f8f5', borderBottom: '1px solid var(--border-dim)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '24px', textAlign: 'center' }}>
            <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--lampag-green)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              SECTOR EXPERTISE
            </span>
            <h2 style={{ fontSize: '2.1rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '4px' }}>Applications Across Sectors</h2>
            <p style={{ color: '#64748b', fontSize: '0.95rem', marginTop: '6px' }}>Adaptable aluminium solutions engineered for diverse structural requirements.</p>
          </div>

          <div className="grid-3" style={{ gap: '18px' }}>
            {industries.map((ind, idx) => (
              <div key={idx} style={{
                padding: '20px',
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-dim)',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-wf)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    backgroundColor: 'var(--lampag-green-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {ind.icon}
                  </div>
                  <h4 style={{ fontSize: '1.02rem', fontWeight: 800, color: 'var(--text-main)' }}>{ind.title}</h4>
                </div>
                <p style={{ fontSize: '0.84rem', color: '#64748b', lineHeight: 1.5 }}>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT DELIVERY PROCESS - FULL SCREEN 4 */}
      <section className="screen-section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '24px', textAlign: 'center' }}>
            <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--lampag-green)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              ENGINEERING ROADMAP
            </span>
            <h2 style={{ fontSize: '2.1rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '4px' }}>Our Project Delivery Process</h2>
            <p style={{ color: '#64748b', fontSize: '0.95rem', marginTop: '6px' }}>Structured, transparent engineering workflow from initial consultation to manufacturing delivery.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
            gap: '16px'
          }}>
            {deliveryProcess.map((proc, idx) => (
              <div key={idx} style={{
                padding: '20px 16px',
                backgroundColor: '#f8fafc',
                border: '1px solid var(--border-dim)',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-wf)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.8rem',
                    fontWeight: 900,
                    color: 'var(--lampag-green)',
                    marginBottom: '8px'
                  }}>
                    {proc.step}
                  </div>
                  <h4 style={{ fontSize: '1.02rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '6px', lineHeight: 1.3 }}>{proc.title}</h4>
                  <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.45 }}>{proc.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '32px', textAlign: 'center' }}>
            <button className="btn-pill-green" onClick={() => setActivePage('contact')} style={{ fontSize: '0.92rem', padding: '10px 24px' }}>
              Contact Us <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeOfferPage;
