import React from 'react';
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
      icon: <Ruler size={20} color="var(--lampag-green)" />,
      title: t.services.s1,
      desc: t.services.s1Desc,
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: <FileText size={20} color="var(--lampag-green)" />,
      title: t.services.s2,
      desc: t.services.s2Desc,
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: <Layers size={20} color="var(--lampag-green)" />,
      title: t.services.s3,
      desc: t.services.s3Desc,
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: <ShieldCheck size={20} color="var(--lampag-green)" />,
      title: t.services.s4,
      desc: t.services.s4Desc,
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: <Truck size={20} color="var(--lampag-green)" />,
      title: t.services.s5,
      desc: t.services.s5Desc,
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18f156f?auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: <CheckCircle2 size={20} color="var(--lampag-green)" />,
      title: t.services.s6,
      desc: t.services.s6Desc,
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const industries = [
    {
      icon: <Building size={18} />,
      title: t.services.ind1,
      desc: t.services.ind1Desc,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: <Home size={18} />,
      title: t.services.ind2,
      desc: t.services.ind2Desc,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: <Store size={18} />,
      title: t.services.ind3,
      desc: t.services.ind3Desc,
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: <Landmark size={18} />,
      title: t.services.ind4,
      desc: t.services.ind4Desc,
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: <Factory size={18} />,
      title: t.services.ind5,
      desc: t.services.ind5Desc,
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: <Layers size={18} />,
      title: t.services.ind6,
      desc: t.services.ind6Desc,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80'
    }
  ];

  // 5-Stage Project Delivery Roadmap (Aligned 100% horizontally in 1 row on desktop)
  const deliveryProcess = [
    { 
      step: '01', 
      title: t.services.step1, 
      desc: t.services.step1Desc,
      icon: <MessageSquare size={18} color="var(--lampag-green)" />,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
    },
    { 
      step: '02', 
      title: t.services.step2, 
      desc: t.services.step2Desc,
      icon: <Compass size={18} color="var(--lampag-green)" />,
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80'
    },
    { 
      step: '03', 
      title: t.services.step3, 
      desc: t.services.step3Desc,
      icon: <Layers size={18} color="var(--lampag-green)" />,
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'
    },
    { 
      step: '04', 
      title: t.services.step4, 
      desc: t.services.step4Desc,
      icon: <ClipboardCheck size={18} color="var(--lampag-green)" />,
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80'
    },
    { 
      step: '05', 
      title: t.services.step5, 
      desc: t.services.step5Desc,
      icon: <Factory size={18} color="var(--lampag-green)" />,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80'
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

            <div style={{
              position: 'relative',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.35)',
              border: '1px solid rgba(57, 158, 82, 0.4)'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80" 
                alt="Precision-engineered aluminium curtain wall and façade CAD BIM structural modeling" 
                style={{ width: '100%', height: '320px', objectFit: 'cover', display: 'block' }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(10, 20, 14, 0.95))',
                padding: '16px 20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <div style={{ color: '#ffffff', fontSize: '0.88rem', fontWeight: 800 }}>CAD & BIM Structural Modeling</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.72rem', fontFamily: 'var(--font-mono)' }}>German Precision Façade Planning</div>
                </div>
                <div style={{
                  backgroundColor: 'var(--lampag-green)',
                  color: '#ffffff',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  padding: '3px 8px',
                  borderRadius: 'var(--radius-sm)'
                }}>
                  SCHÜCO PARTNER
                </div>
              </div>
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
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-dim)',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-wf)',
                transition: 'all 0.2s ease',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
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
                <div style={{ position: 'relative', height: '120px', width: '100%', overflow: 'hidden' }}>
                  <img 
                    src={item.image} 
                    alt={`${item.title} - Precision aluminium engineering and technical consultation service`} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '8px',
                    left: '10px',
                    width: '34px',
                    height: '34px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 3px 8px rgba(0,0,0,0.18)',
                    border: '1px solid #c6e6cd'
                  }}>
                    {item.icon}
                  </div>
                </div>
                <div style={{ padding: '14px 16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.02rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '6px' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.84rem', color: '#64748b', lineHeight: 1.48 }}>{item.desc}</p>
                </div>
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
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-dim)',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-wf)',
                transition: 'all 0.2s ease',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
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
                <div style={{ position: 'relative', height: '120px', width: '100%', overflow: 'hidden' }}>
                  <img 
                    src={ind.image} 
                    alt={`${ind.title} - Architectural aluminium systems and building façade application`} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                  <div style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    width: '32px',
                    height: '32px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'rgba(13, 26, 18, 0.85)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--lampag-green)',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                  }}>
                    {ind.icon}
                  </div>
                </div>
                <div style={{ padding: '14px 16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h4 style={{ fontSize: '1.02rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '6px' }}>{ind.title}</h4>
                  <p style={{ fontSize: '0.84rem', color: '#64748b', lineHeight: 1.48 }}>{ind.desc}</p>
                </div>
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
                  backgroundColor: '#ffffff',
                  border: '1.5px solid var(--border-dim)',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-wf)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.25s ease',
                  overflow: 'hidden'
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
                  {/* Step Image Header with Phase Badge */}
                  <div style={{ position: 'relative', height: '90px', width: '100%', overflow: 'hidden' }}>
                    <img 
                      src={proc.image} 
                      alt={`${proc.title} - LAMPAG engineering and fabrication milestone`} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to bottom, rgba(10, 20, 14, 0.25), rgba(10, 20, 14, 0.85))'
                    }} />
                    <div style={{
                      position: 'absolute',
                      bottom: '8px',
                      left: '8px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      backgroundColor: 'var(--lampag-green)',
                      color: '#ffffff',
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 800
                    }}>
                      PHASE {proc.step}
                    </div>
                  </div>

                  <div style={{ padding: '14px 14px 10px 14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <div style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--lampag-green-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        {proc.icon}
                      </div>
                      <h3 style={{ fontSize: '0.96rem', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1.25 }}>
                        {proc.title}
                      </h3>
                    </div>

                    <p style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.45 }}>
                      {proc.desc}
                    </p>
                  </div>
                </div>

                {/* Subtle Step Bottom Bar */}
                <div style={{
                  padding: '8px 14px',
                  borderTop: '1px dashed var(--border-dim)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.7rem',
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
