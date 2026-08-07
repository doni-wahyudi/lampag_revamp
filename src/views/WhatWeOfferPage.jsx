import React from 'react';
import WireframePlaceholder from '../components/WireframePlaceholder';
import { FileCode, Settings, Users, ShieldCheck, Home, Building2, Hotel, GraduationCap, Stethoscope, Landmark, ArrowUpRight } from 'lucide-react';
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
      icon: <Users size={24} color="var(--lampag-green)" />,
      title: t.whatweoffer.service3Title,
      desc: t.whatweoffer.service3Desc
    },
    {
      icon: <ShieldCheck size={24} color="var(--lampag-green)" />,
      title: t.about.pillar6,
      desc: 'Expert installation and technical oversight provided by our in-house crews and trusted external partners.'
    }
  ];

  const industries = [
    {
      icon: <Home size={20} color="var(--lampag-green)" />,
      title: 'Residential Developments',
      desc: 'Premium window and door solutions focused on thermal comfort, acoustic insulation, and modern living.'
    },
    {
      icon: <Building2 size={20} color="var(--lampag-green)" />,
      title: 'Commercial & Office Buildings',
      desc: 'High-durability façade and entrance systems optimized for heavy usage and energy efficiency.'
    },
    {
      icon: <Hotel size={20} color="var(--lampag-green)" />,
      title: 'Hotels & Hospitality',
      desc: 'Elegant, noise-reducing architectural systems that enhance guest experience and aesthetic appeal.'
    },
    {
      icon: <GraduationCap size={20} color="var(--lampag-green)" />,
      title: 'Educational Facilities',
      desc: 'Safe, durable, and low-maintenance systems built to withstand high activity while maximizing daylight.'
    },
    {
      icon: <Stethoscope size={20} color="var(--lampag-green)" />,
      title: 'Healthcare Facilities',
      desc: 'Hygienic, functional, and secure window and door solutions designed for specialized environments.'
    },
    {
      icon: <Landmark size={20} color="var(--lampag-green)" />,
      title: 'Public Buildings & Mixed-Use',
      desc: 'Versatile curtain wall and custom solutions tailored to large-scale municipal architecture.'
    }
  ];

  const deliveryProcess = [
    { step: '01', title: t.whatweoffer.step1, desc: 'Reaching out & submitting project inquiry specifications.' },
    { step: '02', title: t.whatweoffer.step2, desc: 'Aligning on technical & architectural goals and budget constraints.' },
    { step: '03', title: t.whatweoffer.step3, desc: 'Preparing detailed CAD/BIM shop drawings & structural math.' },
    { step: '04', title: t.whatweoffer.step4, desc: 'Final sign-off & client technical verification.' }
  ];

  return (
    <div>
      {/* HERO BANNER */}
      <section style={{
        backgroundColor: '#0a140e',
        color: '#ffffff',
        padding: '64px 0',
        borderBottom: '1px solid #1b3323',
        backgroundImage: 'linear-gradient(rgba(10, 20, 14, 0.85), rgba(10, 20, 14, 0.92)), url("https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '40px' }}>
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
              <h1 style={{ fontSize: '2.6rem', fontWeight: 800, lineHeight: 1.2, margin: '12px 0 16px 0', color: '#ffffff' }}>
                {t.whatweoffer.heroTitle}
              </h1>
              <p style={{ fontSize: '1.1rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                {t.whatweoffer.heroDesc}
              </p>

              <div style={{
                marginTop: '24px',
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

            <WireframePlaceholder
              title="WHAT WE OFFER VISUAL"
              direction="Architectural drawing board & profile engineering visual."
              aspectRatio="16/9"
              height="280px"
            />
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
