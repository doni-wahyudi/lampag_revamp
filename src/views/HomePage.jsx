import React, { useState } from 'react';
import WireframePlaceholder from '../components/WireframePlaceholder';
import { ShieldCheck, Cpu, Layers, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const HomePage = ({ setActivePage, setSelectedProduct, setSelectedProject }) => {
  const { t } = useLanguage();
  const [portfolioIndex, setPortfolioIndex] = useState(0);

  const solutions = [
    {
      id: 'windows',
      title: t.home.sol1,
      desc: t.home.sol1Desc,
      bgImg: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      specs: 'Schüco AWS 75.SI+ & AWS 90.SI+'
    },
    {
      id: 'doors',
      title: t.home.sol2,
      desc: t.home.sol2Desc,
      bgImg: 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=800&q=80',
      specs: 'Schüco ADS 75.SI & AD UP 90'
    },
    {
      id: 'facades',
      title: t.home.sol3,
      desc: t.home.sol3Desc,
      bgImg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      specs: 'Schüco FWS 50 / FWS 60'
    },
    {
      id: 'sliding',
      title: t.home.sol4,
      desc: t.home.sol4Desc,
      bgImg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      specs: 'Schüco ASE 60 / ASE 80.HI'
    }
  ];

  const portfolioProjects = [
    {
      id: 1,
      title: 'Hamburg Commercial Hub',
      sector: t.portfolio.tabCom,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Dortmund Residential Complex',
      sector: t.portfolio.tabRes,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Frankfurt Hospitality Tower',
      sector: t.portfolio.tabHosp,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'Bremen Technical Institute',
      sector: t.portfolio.tabHosp,
      image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      title: 'Munich Luxury Villa Residence',
      sector: t.portfolio.tabRes,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      title: 'Cologne Corporate Headquarters',
      sector: t.portfolio.tabCom,
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const handlePrevProject = () => {
    setPortfolioIndex((prev) => (prev === 0 ? portfolioProjects.length - 1 : prev - 1));
  };

  const handleNextProject = () => {
    setPortfolioIndex((prev) => (prev + 1) % portfolioProjects.length);
  };

  return (
    <div>
      {/* HERO BANNER - FULL SCREEN 1 */}
      <section 
        className="hero-full-banner"
        style={{
          backgroundImage: 'linear-gradient(rgba(10, 20, 14, 0.82), rgba(10, 20, 14, 0.92)), url("https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=85")'
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
                {t.hero.tag}
              </span>
              <h1 style={{
                fontSize: '3rem',
                fontWeight: 800,
                lineHeight: 1.12,
                color: '#ffffff',
                margin: '10px 0 16px 0',
                letterSpacing: '-0.03em'
              }}>
                {t.hero.title}
              </h1>
              <p style={{
                fontSize: '1.1rem',
                color: '#cbd5e1',
                lineHeight: 1.6,
                marginBottom: '24px',
                maxWidth: '520px'
              }}>
                {t.hero.desc}
              </p>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button 
                  className="btn-pill-green"
                  onClick={() => setActivePage('contact')}
                >
                  {t.hero.btnContact} <ArrowUpRight size={18} />
                </button>
                <button 
                  className="btn-pill-green-outline"
                  onClick={() => setActivePage('portfolio')}
                >
                  {t.hero.btnPortfolio}
                </button>
              </div>
            </div>

            <div>
              <WireframePlaceholder
                title="HERO FACADE MOCKUP"
                direction="Curtain wall / commercial glass exterior visual showing precision engineered aluminium systems."
                aspectRatio="4/3"
                height="320px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: ABOUT LAMPAG - FULL SCREEN 2 */}
      <section className="screen-section" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid var(--border-dim)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '880px' }}>
          <span style={{
            fontSize: '0.78rem',
            fontWeight: 800,
            letterSpacing: '0.08em',
            color: 'var(--lampag-green)',
            marginBottom: '6px',
            display: 'block',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-mono)'
          }}>
            {t.home.aboutTag}
          </span>

          <div style={{ margin: '0 auto 20px auto', maxWidth: '640px' }}>
            <WireframePlaceholder
              title="ABOUT LAMPAG ARCHITECTURAL COMPLEX"
              direction="High quality architectural exterior photo showing aluminium systems."
              aspectRatio="16/9"
              height="200px"
            />
          </div>

          <h2 style={{ fontSize: '1.9rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '10px' }}>
            {t.home.aboutTitle}
          </h2>
          <p style={{ fontSize: '0.98rem', color: '#475569', lineHeight: 1.65, marginBottom: '20px' }}>
            {t.home.aboutDesc}
          </p>
          <button className="btn-pill-green-outline" onClick={() => setActivePage('about')}>
            {t.home.aboutBtn} <ArrowUpRight size={16} />
          </button>
        </div>
      </section>

      {/* SECTION 2: COMPREHENSIVE ALUMINIUM SYSTEMS - FULL SCREEN 3 */}
      <section className="screen-section" style={{ backgroundColor: '#f4f8f5', borderBottom: '1px solid var(--border-dim)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '36px', alignItems: 'center' }}>
            {/* Left Column: Heading + Action */}
            <div>
              <span style={{
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                color: 'var(--lampag-green)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '6px'
              }}>
                ALUMINIUM CAPABILITIES
              </span>
              <h2 style={{
                fontSize: '2.2rem',
                fontWeight: 900,
                color: 'var(--text-main)',
                lineHeight: 1.15,
                textTransform: 'uppercase',
                marginBottom: '16px'
              }}>
                {t.home.productsTitle}
              </h2>
              <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '24px' }}>
                {t.home.productsDesc}
              </p>
              <button
                className="btn-pill-green"
                onClick={() => setActivePage('product')}
              >
                Explore Product Catalog <ArrowUpRight size={18} />
              </button>
            </div>

            {/* Right Column: 2x2 Cards Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px'
            }}>
              {solutions.map((item) => (
                <div
                  key={item.id}
                  className="product-card-container"
                  onClick={() => {
                    setSelectedProduct(item);
                    setActivePage('product');
                  }}
                  style={{
                    backgroundColor: '#ffffff',
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.65)), url("${item.bgImg}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '16px',
                    minHeight: '160px',
                    borderRadius: 'var(--radius-md)'
                  }}
                >
                  <h3 style={{
                    fontSize: '1.15rem',
                    fontWeight: 800,
                    color: '#ffffff',
                    textTransform: 'uppercase',
                    lineHeight: 1.25,
                    textShadow: '0 2px 6px rgba(0,0,0,0.6)'
                  }}>
                    {item.title}
                  </h3>

                  <div className="product-card-overlay">
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--lampag-green)', marginBottom: '6px' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '0.82rem', color: '#e2e8f0', lineHeight: 1.45 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: LIFECYCLE STAGE SUPPORT - FULL SCREEN 4 */}
      <section className="screen-section" style={{
        position: 'relative',
        backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderBottom: '1px solid var(--border-dim)'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.45)'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="glass-overlay-80" style={{ maxWidth: '580px', padding: '36px' }}>
            <span style={{
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              color: 'var(--lampag-green)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '6px',
              display: 'block'
            }}>
              {t.home.lifecycleTag}
            </span>
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: 900,
              color: 'var(--text-main)',
              lineHeight: 1.2,
              marginBottom: '14px',
              textTransform: 'uppercase'
            }}>
              {t.home.lifecycleTitle}
            </h2>

            <p style={{ fontSize: '0.95rem', color: '#334155', lineHeight: 1.6, marginBottom: '20px' }}>
              {t.home.lifecycleDesc}
            </p>

            <button
              className="btn-pill-green"
              onClick={() => setActivePage('services')}
              style={{ fontSize: '0.88rem', padding: '10px 20px' }}
            >
              Explore Full Engineering Services <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4: SELECTED ARCHITECTURAL REFERENCES - FULL SCREEN 5 */}
      <section className="screen-section" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid var(--border-dim)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <span style={{
              fontSize: '0.78rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              color: 'var(--lampag-green)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}>
              {t.home.portfolioTag}
            </span>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--text-main)', textTransform: 'uppercase', marginTop: '4px' }}>
              {t.home.portfolioTitle}
            </h2>
          </div>

          {/* Grid of 4 portfolio items with dynamic carousel rotation */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
            marginBottom: '28px'
          }}>
            {[
              portfolioProjects[portfolioIndex % portfolioProjects.length],
              portfolioProjects[(portfolioIndex + 1) % portfolioProjects.length],
              portfolioProjects[(portfolioIndex + 2) % portfolioProjects.length],
              portfolioProjects[(portfolioIndex + 3) % portfolioProjects.length]
            ].map((proj, idx) => (
              <div
                key={`${proj.id}-${idx}`}
                style={{
                  border: idx === 0 ? '1.5px solid var(--lampag-green)' : '1px solid var(--border-dim)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  boxShadow: idx === 0 ? '0 8px 24px rgba(57, 158, 82, 0.18)' : 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{
                  height: '140px',
                  backgroundImage: `url("${proj.image}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative'
                }}>
                  {idx === 0 && (
                    <span style={{
                      position: 'absolute',
                      top: '8px',
                      left: '8px',
                      backgroundColor: 'var(--lampag-green)',
                      color: '#ffffff',
                      fontSize: '0.68rem',
                      fontWeight: 800,
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-sm)',
                      textTransform: 'uppercase'
                    }}>
                      Featured
                    </span>
                  )}
                </div>
                <div style={{ padding: '14px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <span style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: 'var(--lampag-green-dark)',
                      backgroundColor: 'var(--lampag-green-subtle)',
                      padding: '2px 6px',
                      borderRadius: 'var(--radius-sm)',
                      display: 'inline-block',
                      marginBottom: '6px'
                    }}>
                      {proj.sector}
                    </span>
                    <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1.3, marginBottom: '12px', minHeight: '2.2rem' }}>
                      {proj.title}
                    </h4>
                  </div>
                  <button
                    className="btn-pill-green"
                    onClick={() => {
                      if (setSelectedProject) setSelectedProject(proj);
                      setActivePage('portfolio');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    style={{ width: '100%', fontSize: '0.82rem', padding: '6px 12px' }}
                  >
                    {t.portfolio.btnDetails} <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={handlePrevProject}
                aria-label="Previous Project"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  border: '1.5px solid var(--border-strong)',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--lampag-green)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-strong)'}
              >
                <ChevronLeft size={18} color="var(--text-main)" />
              </button>
              <button
                onClick={handleNextProject}
                aria-label="Next Project"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  border: '1.5px solid var(--border-strong)',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--lampag-green)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-strong)'}
              >
                <ChevronRight size={18} color="var(--text-main)" />
              </button>
            </div>

            <button
              className="btn-pill-green"
              onClick={() => {
                setActivePage('portfolio');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              style={{ fontSize: '0.88rem', padding: '8px 18px' }}
            >
              {t.home.portfolioBtn} <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY LEADING PARTNERS CHOOSE LAMPAG - FULL SCREEN 6 */}
      <section className="screen-section" style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid var(--border-dim)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '36px', alignItems: 'center' }}>
            {/* Left Column: Stack of 3 Visual Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-dim)',
                borderRadius: 'var(--radius-md)',
                padding: '18px 22px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                boxShadow: 'var(--shadow-wf)'
              }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--lampag-green-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Cpu size={20} color="var(--lampag-green)" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main)' }}>{t.home.whyPillar1Title}</h3>
                  <p style={{ fontSize: '0.84rem', color: '#64748b' }}>{t.home.whyPillar1Desc}</p>
                </div>
              </div>

              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-dim)',
                borderRadius: 'var(--radius-md)',
                padding: '18px 22px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                boxShadow: 'var(--shadow-wf)'
              }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--lampag-green-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <ShieldCheck size={20} color="var(--lampag-green)" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main)' }}>{t.home.whyPillar2Title}</h3>
                  <p style={{ fontSize: '0.84rem', color: '#64748b' }}>{t.home.whyPillar2Desc}</p>
                </div>
              </div>

              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-dim)',
                borderRadius: 'var(--radius-md)',
                padding: '18px 22px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                boxShadow: 'var(--shadow-wf)'
              }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--lampag-green-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Layers size={20} color="var(--lampag-green)" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main)' }}>{t.home.whyPillar3Title}</h3>
                  <p style={{ fontSize: '0.84rem', color: '#64748b' }}>{t.home.whyPillar3Desc}</p>
                </div>
              </div>
            </div>

            {/* Right Column: Light Greenish Card Container */}
            <div style={{
              backgroundColor: '#eaf5ed',
              border: '1px solid #c6e6cd',
              borderRadius: 'var(--radius-md)',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <h2 style={{
                fontSize: '1.85rem',
                fontWeight: 900,
                color: 'var(--lampag-green-dark)',
                lineHeight: 1.25,
                marginBottom: '12px'
              }}>
                {t.home.whyTitle}
              </h2>
              <p style={{ fontSize: '0.96rem', color: '#2d3748', lineHeight: 1.6, marginBottom: '22px' }}>
                {t.home.whyDesc}
              </p>
              <button
                className="btn-pill-green"
                onClick={() => setActivePage('about')}
                style={{ alignSelf: 'flex-start', fontSize: '0.88rem', padding: '10px 22px' }}
              >
                {t.home.aboutBtn} <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: BOTTOM CALL TO ACTION BANNER - FULL SCREEN 7 */}
      <section className="screen-section" style={{
        backgroundColor: '#0a140e',
        color: '#ffffff',
        borderTop: '2px solid var(--lampag-green)',
        backgroundImage: 'linear-gradient(rgba(10, 20, 14, 0.88), rgba(10, 20, 14, 0.94)), url("https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2 style={{
            fontSize: '2.4rem',
            fontWeight: 900,
            lineHeight: 1.2,
            marginBottom: '14px',
            color: '#ffffff'
          }}>
            {t.home.ctaTitle}
          </h2>
          <p style={{
            fontSize: '1.08rem',
            color: '#cbd5e1',
            lineHeight: 1.6,
            marginBottom: '28px'
          }}>
            {t.home.ctaDesc}
          </p>
          <button
            className="btn-pill-green"
            onClick={() => setActivePage('contact')}
            style={{ fontSize: '1rem', padding: '12px 28px' }}
          >
            {t.home.ctaBtn} <ArrowUpRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
