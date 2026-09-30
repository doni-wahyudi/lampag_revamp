import React, { useState } from 'react';
import { ShieldCheck, Cpu, Layers, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { productsCatalog } from '../data/productsData';
import { portfolioProjects } from '../data/portfolioData';
import homeHeroImg from '../assets/hero/home_hero.webp';
import aboutHeroImg from '../assets/hero/about_hero.webp';

const HomePage = ({ setActivePage, setSelectedProduct, setSelectedProject }) => {
  const { langCode, t } = useLanguage();
  const isGerman = langCode === 'DE';
  const [portfolioIndex, setPortfolioIndex] = useState(0);

  const winProduct = productsCatalog.find(p => p.id === 'aws-75-si') || productsCatalog[0];
  const doorProduct = productsCatalog.find(p => p.id === 'ase-80-hi') || productsCatalog[7];
  const facadeProduct = productsCatalog.find(p => p.id === 'fws-50') || productsCatalog[13];
  const customProduct = productsCatalog.find(p => p.id === 'aluminum-sheet-metal') || productsCatalog.find(p => p.categoryKey === 'custom') || productsCatalog[productsCatalog.length - 1];

  const solutions = [
    {
      ...winProduct,
      id: 'windows',
      title: t.home?.sol1 || (isGerman ? 'Aluminium-Fenster' : 'Aluminium Windows'),
      desc: isGerman ? winProduct.specDE : (t.home?.sol1Desc || winProduct.spec),
      bgImg: winProduct.imageUrl,
      specs: 'Schüco AWS 75.SI+ & AWS 90.SI+'
    },
    {
      ...doorProduct,
      id: 'doors',
      title: t.home?.sol2 || (isGerman ? 'Aluminium-Türen' : 'Aluminium Doors'),
      desc: isGerman ? doorProduct.specDE : (t.home?.sol2Desc || doorProduct.spec),
      bgImg: doorProduct.imageUrl,
      specs: 'Schüco AD 75 FD & ASE 80.HI'
    },
    {
      ...facadeProduct,
      id: 'facades',
      title: t.home?.sol3 || (isGerman ? 'Vorhangfassaden & Systeme' : 'Curtain Wall & Façades'),
      desc: isGerman ? facadeProduct.specDE : (t.home?.sol3Desc || facadeProduct.spec),
      bgImg: facadeProduct.imageUrl,
      specs: 'Schüco FWS 50 & AF UDC 80'
    },
    {
      ...customProduct,
      id: 'custom',
      title: t.home?.sol4 || (isGerman ? 'Maßgeschneiderte Sonderlösungen' : 'Customized Solutions'),
      desc: (isGerman ? t.home?.sol4Desc : t.home?.sol4Desc) || (isGerman ? customProduct.specDE : customProduct.spec),
      bgImg: customProduct.imageUrl,
      specs: isGerman ? 'Blechfassaden, ACM-Platten & Lamellensysteme' : 'Sheet Metal, ACM Panels & Louvers'
    }
  ];


  const handlePrevProject = () => {
    setPortfolioIndex((prev) => (prev === 0 ? portfolioProjects.length - 1 : prev - 1));
  };

  const handleNextProject = () => {
    setPortfolioIndex((prev) => (prev + 1) % portfolioProjects.length);
  };

  const handleNavigate = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* HERO BANNER - FULL SCREEN 1 */}
      <section 
        className="hero-full-banner"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 20, 14, 0.84), rgba(10, 20, 14, 0.94)), url("${homeHeroImg}")`
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
                {t.hero.tag || 'PRECISION ALUMINIUM SYSTEMS'}
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
                  onClick={() => handleNavigate('contact')}
                >
                  {t.hero.btnContact} <ArrowUpRight size={18} />
                </button>
                <button 
                  className="btn-pill-green-outline"
                  onClick={() => handleNavigate('portfolio')}
                >
                  {t.hero.btnPortfolio || 'View Portfolio'}
                </button>
              </div>
            </div>

            <div>
              <div style={{
                position: 'relative',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: '0 20px 45px rgba(0,0,0,0.45)',
                border: '1px solid rgba(57, 158, 82, 0.45)'
              }}>
                <img 
                  src={homeHeroImg} 
                  alt={isGerman 
                    ? "Präzisions-Vorhangfassade mit Schüco Aluminium-Systemen für moderne Gewerbegebäude" 
                    : "Precision-engineered aluminium curtain wall system with Schüco profiles for modern commercial buildings"}
                  style={{ width: '100%', height: '340px', objectFit: 'cover', display: 'block' }}
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
                    <div style={{ color: '#ffffff', fontSize: '0.92rem', fontWeight: 800 }}>
                      {isGerman ? 'Schüco Fassadenbau & Fensterwerke' : 'Schüco Façade & Window Engineering'}
                    </div>
                    <div style={{ color: '#94a3b8', fontSize: '0.74rem', fontFamily: 'var(--font-mono)' }}>
                      {isGerman ? 'Deutsche Ingenieurskunst // Neuer Wall Hamburg' : 'German Engineering // Hamburg, DE'}
                    </div>
                  </div>
                  <div style={{
                    backgroundColor: 'var(--lampag-green)',
                    color: '#ffffff',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-sm)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase'
                  }}>
                    {isGerman ? 'Zertifiziert' : 'Certified'}
                  </div>
                </div>
              </div>
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

          <div style={{
            margin: '0 auto 24px auto',
            maxWidth: '680px',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
            border: '1px solid var(--border-dim)',
            position: 'relative'
          }}>
            <img 
              src={aboutHeroImg}
              alt={isGerman 
                ? "LAMPAG deutsche Ingenieurskunst und hochpräzise Aluminium-Fassadensysteme" 
                : "LAMPAG German engineering and precision aluminium architectural façade systems"}
              style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block' }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(transparent, rgba(10, 20, 14, 0.88))',
              padding: '12px 18px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{ color: '#ffffff', fontSize: '0.85rem', fontWeight: 700 }}>
                {isGerman ? 'Präzisionsfertigung & Fassadenbau' : 'Precision Engineering & Façade Construction'}
              </span>
              <span style={{
                backgroundColor: 'var(--lampag-green)',
                color: '#ffffff',
                fontSize: '0.68rem',
                fontWeight: 800,
                padding: '2px 8px',
                borderRadius: 'var(--radius-sm)',
                textTransform: 'uppercase'
              }}>
                {isGerman ? 'Schüco Partner' : 'Schüco Partner'}
              </span>
            </div>
          </div>

          <h2 style={{ fontSize: '1.9rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '10px' }}>
            {t.home.aboutTitle}
          </h2>
          <p style={{ fontSize: '0.98rem', color: '#475569', lineHeight: 1.65, marginBottom: '20px' }}>
            {t.home.aboutDesc}
          </p>
          <button className="btn-pill-green-outline" onClick={() => handleNavigate('about')}>
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
                onClick={() => handleNavigate('product')}
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
                    handleNavigate('product');
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

            {/* Navigates smoothly to Services view */}
            <button
              className="btn-pill-green"
              onClick={() => handleNavigate('services')}
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
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <img
                    src={proj.image}
                    alt={`${proj.title} - ${proj.systems} architectural aluminium installation in ${proj.location}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  {proj.isOfficialLampag ? (
                    <span style={{
                      position: 'absolute',
                      top: '8px',
                      left: '8px',
                      backgroundColor: 'var(--lampag-green)',
                      color: '#ffffff',
                      fontSize: '0.66rem',
                      fontWeight: 800,
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-sm)',
                      textTransform: 'uppercase',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                    }}>
                      {isGerman ? 'LAMPAG-Referenz' : 'LAMPAG Project'}
                    </span>
                  ) : idx === 0 && (
                    <span style={{
                      position: 'absolute',
                      top: '8px',
                      left: '8px',
                      backgroundColor: 'var(--lampag-green)',
                      color: '#ffffff',
                      fontSize: '0.66rem',
                      fontWeight: 800,
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-sm)',
                      textTransform: 'uppercase'
                    }}>
                      {isGerman ? 'Highlight' : 'Featured'}
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
                      {isGerman ? (proj.sectorDE || proj.sector) : proj.sector}
                    </span>
                    <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1.3, marginBottom: '12px', minHeight: '2.2rem' }}>
                      {isGerman ? (proj.titleDE || proj.title) : proj.title}
                    </h4>
                  </div>
                  <button
                    className="btn-pill-green"
                    onClick={() => {
                      if (setSelectedProject) setSelectedProject(proj);
                      handleNavigate('portfolio');
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
              onClick={() => handleNavigate('portfolio')}
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
                onClick={() => handleNavigate('about')}
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
            onClick={() => handleNavigate('contact')}
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
