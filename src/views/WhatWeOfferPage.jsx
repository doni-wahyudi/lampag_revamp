import React from 'react';
import WireframePlaceholder from '../components/WireframePlaceholder';
import { FileCode, Settings, Users, ShieldCheck, Home, Building2, Hotel, GraduationCap, Stethoscope, Landmark, ArrowUpRight, Layers, Cpu } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const WhatWeOfferPage = ({ setActivePage }) => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <FileCode size={24} color="var(--lampag-green)" />,
      title: t.whatweoffer.service1Title,
      desc: t.whatweoffer.service1Desc
    },
    {
      icon: <Settings size={24} color="var(--lampag-green)" />,
      title: t.whatweoffer.service2Title,
      desc: t.whatweoffer.service2Desc
    },
    {
      icon: <Layers size={24} color="var(--lampag-green)" />,
      title: t.whatweoffer.service3Title,
      desc: t.whatweoffer.service3Desc
    },
    {
      icon: <Cpu size={24} color="var(--lampag-green)" />,
      title: t.whatweoffer.service4Title,
      desc: t.whatweoffer.service4Desc
    },
    {
      icon: <FileCode size={24} color="var(--lampag-green)" />,
      title: t.whatweoffer.service5Title,
      desc: t.whatweoffer.service5Desc
    },
    {
      icon: <Users size={24} color="var(--lampag-green)" />,
      title: t.whatweoffer.service6Title,
      desc: t.whatweoffer.service6Desc
    },
    {
      icon: <ShieldCheck size={24} color="var(--lampag-green)" />,
      title: t.whatweoffer.service7Title,
      desc: t.whatweoffer.service7Desc
    }
  ];

  const industries = [
    {
      icon: <Home size={20} color="var(--lampag-green)" />,
      title: t.whatweoffer.sector1Title,
      desc: t.whatweoffer.sector1Desc
    },
    {
      icon: <Building2 size={20} color="var(--lampag-green)" />,
      title: t.whatweoffer.sector2Title,
      desc: t.whatweoffer.sector2Desc
    },
    {
      icon: <Hotel size={20} color="var(--lampag-green)" />,
      title: t.whatweoffer.sector3Title,
      desc: t.whatweoffer.sector3Desc
    },
    {
      icon: <GraduationCap size={20} color="var(--lampag-green)" />,
      title: t.whatweoffer.sector4Title,
      desc: t.whatweoffer.sector4Desc
    },
    {
      icon: <Stethoscope size={20} color="var(--lampag-green)" />,
      title: t.whatweoffer.sector5Title,
      desc: t.whatweoffer.sector5Desc
    },
    {
      icon: <Landmark size={20} color="var(--lampag-green)" />,
      title: t.whatweoffer.sector6Title,
      desc: t.whatweoffer.sector6Desc
    }
  ];

  const deliveryProcess = [
    { step: '01', title: t.whatweoffer.step1Title, desc: t.whatweoffer.step1Desc },
    { step: '02', title: t.whatweoffer.step2Title, desc: t.whatweoffer.step2Desc },
    { step: '03', title: t.whatweoffer.step3Title, desc: t.whatweoffer.step3Desc },
    { step: '04', title: t.whatweoffer.step4Title, desc: t.whatweoffer.step4Desc },
    { step: '05', title: t.whatweoffer.step5Title, desc: t.whatweoffer.step5Desc }
  ];

  return (
    <div>
      {/* HERO BANNER */}
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
                fontSize: '0.85rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-mono)'
              }}>
                {t.whatweoffer.heroTag}
              </span>
              <h1 style={{
                fontSize: '3rem',
                fontWeight: 800,
                lineHeight: 1.12,
                color: '#ffffff',
                margin: '12px 0 20px 0',
                letterSpacing: '-0.03em'
              }}>
                {t.whatweoffer.heroTitle}
              </h1>
              <p style={{
                fontSize: '1.15rem',
                color: '#cbd5e1',
                lineHeight: 1.6,
                marginBottom: '24px',
                maxWidth: '540px'
              }}>
                {t.whatweoffer.heroDesc}
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
                <strong style={{ color: 'var(--lampag-green)' }}>Turnkey Engineering:</strong> From initial CAD drafting to site installation and handover.
              </div>
            </div>

            <div>
              <WireframePlaceholder
                title="WHAT WE OFFER VISUAL"
                direction="Architectural drawing board & profile engineering visual."
                aspectRatio="4/3"
                height="360px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE OVERVIEW & BREAKDOWN */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid var(--border-dim)' }}>
        <div className="container">
          <div className="section-header" style={{ maxWidth: '800px' }}>
            <h2 style={{ fontSize: '2.1rem', fontWeight: 800, color: 'var(--text-main)' }}>End-to-End Technical Expertise</h2>
            <p style={{ marginTop: '12px', fontSize: '1.05rem', color: '#475569', lineHeight: 1.7 }}>
              Lampag supports clients throughout the entire project lifecycle with professional engineering, technical expertise, and an experienced in-house service team. Our collaborative approach ensures every solution is carefully developed, installed, and supported.
            </p>
          </div>

          <div className="grid-2" style={{ marginTop: '32px' }}>
            {services.map((item, idx) => (
              <div key={idx} style={{
                padding: '24px',
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-dim)',
                borderRadius: 'var(--radius-md)'
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
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="section-padding" style={{ backgroundColor: '#f4f8f5', borderBottom: '1px solid var(--border-dim)' }}>
        <div className="container">
          <div className="section-header">
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)' }}>Applications Across Sectors</h2>
            <p style={{ color: '#64748b' }}>Adaptable aluminium solutions engineered for diverse structural requirements.</p>
          </div>

          <div className="grid-3">
            {industries.map((ind, idx) => (
              <div key={idx} style={{
                padding: '20px',
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-dim)',
                borderRadius: 'var(--radius-md)'
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
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main)' }}>{ind.title}</h4>
                </div>
                <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.5 }}>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT DELIVERY PROCESS */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)' }}>Our Project Delivery Process</h2>
            <p style={{ color: '#64748b' }}>Structured, transparent engineering workflow from initial consultation to manufacturing delivery.</p>
          </div>

          <div className="grid-3" style={{ gap: '20px' }}>
            {deliveryProcess.map((proc, idx) => (
              <div key={idx} style={{
                padding: '24px',
                backgroundColor: '#f8fafc',
                border: '1px solid var(--border-dim)',
                borderRadius: 'var(--radius-md)'
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.8rem',
                  fontWeight: 900,
                  color: 'var(--lampag-green)',
                  marginBottom: '8px'
                }}>
                  {proc.step}
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '6px' }}>{proc.title}</h4>
                <p style={{ fontSize: '0.88rem', color: '#64748b' }}>{proc.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <button className="btn-pill-green" onClick={() => setActivePage('contact')}>
              Initiate Project Delivery Process <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeOfferPage;
