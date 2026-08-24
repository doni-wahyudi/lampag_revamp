import React from 'react';
import WireframePlaceholder from '../components/WireframePlaceholder';
import { 
  Ruler, 
  FileText, 
  CheckCircle2, 
  ShieldCheck, 
  Truck, 
  Layers, 
  Building, 
  Factory, 
  Home, 
  Store, 
  Landmark, 
  ArrowUpRight,
  MessageSquare,
  Compass,
  ClipboardCheck,
  ChevronRight
} from 'lucide-react';
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

  // 5-Stage Project Delivery Roadmap (Aligned 100% horizontally in 1 row on desktop)
  const deliveryProcess = [
    { 
      step: '01', 
      title: t.services.step1, 
      desc: t.services.step1Desc,
      icon: <MessageSquare size={20} color="var(--lampag-green)" />
    },
    { 
      step: '02', 
      title: t.services.step2, 
      desc: t.services.step2Desc,
      icon: <Compass size={20} color="var(--lampag-green)" />
    },
    { 
      step: '03', 
      title: t.services.step3, 
      desc: t.services.step3Desc,
      icon: <Layers size={20} color="var(--lampag-green)" />
    },
    { 
      step: '04', 
      title: t.services.step4, 
      desc: t.services.step4Desc,
      icon: <ClipboardCheck size={20} color="var(--lampag-green)" />
    },
    { 
      step: '05', 
      title: t.services.step5, 
      desc: t.services.step5Desc,
      icon: <Factory size={20} color="var(--lampag-green)" />
    }
  ];

  const handleContact = () => {
    if (setActivePage) {
      setActivePage('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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
                title="SERVICES & ENGINEERING VISUAL"
                direction="Architectural drawing board & profile engineering visual showing CAD modeling and structural façade planning."
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
                boxShadow: 'var(--shadow-wf)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--lampag-green)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(57, 158, 82, 0.12)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border-dim)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-wf)';
              }}
              >
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
                boxShadow: 'var(--shadow-wf)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--lampag-green)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(57, 158, 82, 0.12)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border-dim)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-wf)';
              }}
              >
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

      {/* PROJECT DELIVERY PROCESS - 5-STEP HORIZONTAL ROADMAP (100% BALANCED WITH ZERO VOID) */}
      <section className="screen-section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '36px', textAlign: 'center' }}>
            <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--lampag-green)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              ENGINEERING ROADMAP
            </span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--text-main)', marginTop: '4px' }}>
              Our Project Delivery Process
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.96rem', marginTop: '6px', maxWidth: '640px', margin: '6px auto 0 auto' }}>
              Structured, transparent 5-stage engineering workflow from initial consultation to precision manufacturing delivery.
            </p>
          </div>

          {/* 5-Step Horizontal Connected Pipeline (1 row on desktop, vertical on mobile/tablet) */}
          <div className="process-roadmap-grid" style={{ marginBottom: '40px' }}>
            {deliveryProcess.map((proc, idx) => (
              <div 
                key={idx} 
                style={{
                  padding: '22px 18px',
                  backgroundColor: '#ffffff',
                  border: '1.5px solid var(--border-dim)',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-wf)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.25s ease',
                  position: 'relative'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--lampag-green)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(57, 158, 82, 0.14)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border-dim)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-wf)';
                }}
              >
                <div>
                  {/* Top Step Badge & Icon */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '16px'
                  }}>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      backgroundColor: 'var(--lampag-green-subtle)',
                      padding: '3px 8px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid #c6e6cd'
                    }}>
                      <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '1.15rem',
                        fontWeight: 900,
                        color: 'var(--lampag-green)',
                        lineHeight: 1
                      }}>
                        {proc.step}
                      </span>
                    </div>

                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: '#f8fafc',
                      border: '1px solid var(--border-dim)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {proc.icon}
                    </div>
                  </div>

                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px', lineHeight: 1.3 }}>
                    {proc.title}
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.5 }}>
                    {proc.desc}
                  </p>
                </div>

                {/* Subtle Step Bottom Bar */}
                <div style={{
                  marginTop: '16px',
                  paddingTop: '10px',
                  borderTop: '1px dashed var(--border-dim)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#94a3b8'
                }}>
                  <span>STAGE {proc.step}/05</span>
                  {idx < deliveryProcess.length - 1 && (
                    <ChevronRight size={14} color="var(--lampag-green)" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Action Button */}
          <div style={{ textAlign: 'center' }}>
            <button className="btn-pill-green" onClick={handleContact} style={{ fontSize: '0.95rem', padding: '12px 28px' }}>
              Contact Us <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeOfferPage;
