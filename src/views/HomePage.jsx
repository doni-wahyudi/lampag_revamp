import React, { useState } from 'react';
import WireframePlaceholder from '../components/WireframePlaceholder';
import { ArrowUpRight, ChevronLeft, ChevronRight, Cpu, ShieldCheck, Layers } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const HomePage = ({ setActivePage, setSelectedProduct, setSelectedProject }) => {
  const { t } = useLanguage();

  // Solutions data for Section 2 (2x2 grid as per wireframe)
  const solutions = [
    {
      id: 'windows',
      title: t.home.catWindows,
      desc: t.home.catWindowsDesc,
      cat: 'Windows',
      bgImg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'doors',
      title: t.home.catDoors,
      desc: t.home.catDoorsDesc,
      cat: 'Doors',
      bgImg: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'facades',
      title: t.home.catFacades,
      desc: t.home.catFacadesDesc,
      cat: 'Façades',
      bgImg: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'customized',
      title: t.home.catCustom,
      desc: t.home.catCustomDesc,
      cat: 'Custom',
      bgImg: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
    }
  ];

  // Portfolio items (4 items for Section 4)
  const portfolioProjects = [
    {
      id: 1,
      title: '26 COTTAGE ST. JEYSEY CITY NJ, USA',
      location: 'Jersey City, USA',
      sector: 'Residential Complex',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      title: '26 COTTAGE ST. JEYSEY CITY NJ, USA',
      location: 'Jersey City, USA',
      sector: 'Commercial Tower',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      title: '26 COTTAGE ST. JEYSEY CITY NJ, USA',
      location: 'Jersey City, USA',
      sector: 'Mixed-Use Development',
      image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 4,
      title: '26 COTTAGE ST. JEYSEY CITY NJ, USA',
      location: 'Jersey City, USA',
      sector: 'Luxury Apartments',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const [portfolioIndex, setPortfolioIndex] = useState(0);

  const handlePrevProject = () => {
    setPortfolioIndex((prev) => (prev === 0 ? portfolioProjects.length - 1 : prev - 1));
  };

  const handleNextProject = () => {
    setPortfolioIndex((prev) => (prev === portfolioProjects.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      {/* HERO BANNER SECTION */}
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
                fontSize: '0.85rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-mono)'
              }}>
                {t.hero.subtitle}
              </span>
              <h1 style={{
                fontSize: '3rem',
                fontWeight: 800,
                lineHeight: 1.12,
                color: '#ffffff',
                margin: '12px 0 20px 0',
                letterSpacing: '-0.03em'
              }}>
                {t.hero.title}
              </h1>
              <p style={{
                fontSize: '1.15rem',
                color: '#cbd5e1',
                lineHeight: 1.6,
                marginBottom: '36px',
                maxWidth: '540px'
              }}>
                {t.hero.desc}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                <button
                  className="btn-pill-green"
                  onClick={() => setActivePage('whatweoffer')}
                >
                  {t.hero.btnExplore} <ArrowUpRight size={18} />
                </button>
                <button
                  className="btn-pill-green-outline"
                  onClick={() => setActivePage('contact')}
                  style={{ color: '#ffffff', borderColor: 'var(--lampag-green)' }}
                >
                  {t.hero.btnContact} <ArrowUpRight size={18} />
                </button>
              </div>
            </div>

            <div>
              <WireframePlaceholder
                title="HERO ARCHITECTURAL BUILDING"
                direction="Modern glass building with precision aluminium curtain wall facade."
                aspectRatio="4/3"
                height="360px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: ABOUT LAMPAG */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid var(--border-dim)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            letterSpacing: '0.08em',
            color: 'var(--text-main)',
            marginBottom: '32px',
            textTransform: 'uppercase'
          }}>
            {t.home.aboutTag}
          </div>

          <div style={{ maxWidth: '820px', margin: '0 auto 40px auto' }}>
            <WireframePlaceholder
              title="ABOUT LAMPAG ARCHITECTURAL COMPLEX"
              direction="High quality architectural exterior photo showing aluminium systems."
              aspectRatio="16/9"
              height="320px"
            />
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.1rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '16px' }}>
              {t.home.aboutTitle}
            </h2>
            <p style={{ fontSize: '1.08rem', color: '#475569', lineHeight: 1.75, marginBottom: '24px' }}>
              {t.home.aboutDesc}
            </p>
            <button className="btn-pill-green-outline" onClick={() => setActivePage('about')}>
              {t.home.aboutBtn} <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: COMPREHENSIVE ALUMINIUM SYSTEM */}
      <section className="section-padding" style={{ backgroundColor: '#f4f8f5', borderBottom: '1px solid var(--border-dim)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '48px', alignItems: 'flex-start' }}>
            {/* Left Column: Heading + Action */}
            <div style={{ sticky: true, top: '100px' }}>
              <h2 style={{
                fontSize: '2.4rem',
                fontWeight: 900,
                color: 'var(--text-main)',
                lineHeight: 1.15,
                textTransform: 'uppercase',
                marginBottom: '28px'
              }}>
                {t.home.productsTitle}
              </h2>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '28px' }}>
                {t.home.productsDesc}
              </p>
              <button
                className="btn-pill-green"
                onClick={() => setActivePage('contact')}
              >
                {t.hero.btnContact} <ArrowUpRight size={18} />
              </button>
            </div>

            {/* Right Column: 2x2 Cards Grid with Hover Reveal */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px'
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
                    padding: '20px'
                  }}
                >
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: '#ffffff',
                    textTransform: 'uppercase',
                    lineHeight: 1.25,
                    textShadow: '0 2px 6px rgba(0,0,0,0.6)'
                  }}>
                    {item.title}
                  </h3>

                  {/* Hover reveal overlay containing description */}
                  <div className="product-card-overlay">
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--lampag-green)', marginBottom: '10px' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: '#e2e8f0', lineHeight: 1.5 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: LIFECYCLE STAGE SUPPORT */}
      <section style={{
        position: 'relative',
        padding: '96px 0',
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
          {/* Floating Left Container with 80% Transparency */}
          <div className="glass-overlay-80" style={{ maxWidth: '580px' }}>
            <span style={{
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              color: 'var(--lampag-green)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '8px',
              display: 'block'
            }}>
              {t.home.lifecycleTag}
            </span>
            <h2 style={{
              fontSize: '1.8rem',
              fontWeight: 900,
              color: 'var(--text-main)',
              lineHeight: 1.2,
              marginBottom: '20px',
              textTransform: 'uppercase'
            }}>
              {t.home.lifecycleTitle}
            </h2>

            <p style={{ fontSize: '0.98rem', color: '#334155', lineHeight: 1.65, marginBottom: '16px' }}>
              {t.home.lifecycleDesc}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: SELECTED ARCHITECTURAL REFERENCES */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid var(--border-dim)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
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
            <h2 style={{ fontSize: '2.1rem', fontWeight: 900, color: 'var(--text-main)', textTransform: 'uppercase', marginTop: '6px' }}>
              {t.home.portfolioTitle}
            </h2>
          </div>

          {/* Grid of 4 portfolio items */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
            marginBottom: '36px'
          }}>
            {portfolioProjects.map((proj) => (
              <div
                key={proj.id}
                style={{
                  border: '1px solid var(--border-dim)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{
                  height: '180px',
                  backgroundImage: `url("${proj.image}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }} />
                <div style={{ padding: '18px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <h4 style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1.3, marginBottom: '16px' }}>
                    {proj.title}
                  </h4>
                  <button
                    className="btn-pill-green"
                    onClick={() => {
                      setSelectedProject(proj);
                      setActivePage('portfolio');
                    }}
                    style={{ width: '100%', fontSize: '0.85rem', padding: '8px 14px' }}
                  >
                    {t.portfolio.btnDetails} <ArrowUpRight size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={handlePrevProject}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '1.5px solid var(--border-strong)',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <ChevronLeft size={20} color="var(--text-main)" />
              </button>
              <button
                onClick={handleNextProject}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '1.5px solid var(--border-strong)',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <ChevronRight size={20} color="var(--text-main)" />
              </button>
            </div>

            <button
              className="btn-pill-green"
              onClick={() => setActivePage('portfolio')}
            >
              {t.home.portfolioBtn} <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY LEADING PARTNERS CHOOSE LAMPAG */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid var(--border-dim)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '40px', alignItems: 'stretch' }}>
            {/* Left Column: Stack of 3 Visual Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-dim)',
                borderRadius: 'var(--radius-md)',
                padding: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                boxShadow: 'var(--shadow-wf)'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--lampag-green-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Cpu size={24} color="var(--lampag-green)" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)' }}>{t.home.whyPillar1Title}</h3>
                  <p style={{ fontSize: '0.88rem', color: '#64748b' }}>{t.home.whyPillar1Desc}</p>
                </div>
              </div>

              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-dim)',
                borderRadius: 'var(--radius-md)',
                padding: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                boxShadow: 'var(--shadow-wf)'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--lampag-green-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <ShieldCheck size={24} color="var(--lampag-green)" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)' }}>{t.home.whyPillar2Title}</h3>
                  <p style={{ fontSize: '0.88rem', color: '#64748b' }}>{t.home.whyPillar2Desc}</p>
                </div>
              </div>

              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-dim)',
                borderRadius: 'var(--radius-md)',
                padding: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                boxShadow: 'var(--shadow-wf)'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--lampag-green-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Layers size={24} color="var(--lampag-green)" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)' }}>{t.home.whyPillar3Title}</h3>
                  <p style={{ fontSize: '0.88rem', color: '#64748b' }}>{t.home.whyPillar3Desc}</p>
                </div>
              </div>
            </div>

            {/* Right Column: Light Greenish Card Container */}
            <div style={{
              backgroundColor: '#eaf5ed',
              border: '1px solid #c6e6cd',
              borderRadius: 'var(--radius-md)',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: 900,
                color: 'var(--lampag-green-dark)',
                lineHeight: 1.25,
                marginBottom: '20px',
                textTransform: 'uppercase'
              }}>
                WHY LEADING PARTNERS CHOOSE LAMPAG
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#2d4a34', lineHeight: 1.7 }}>
                At Lampag, we are committed to delivering more than aluminium systems. We provide reliable project solutions built on quality, expertise, and partnership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: READY TO BRING YOUR ARCHITECTURAL VISION TO LIFE */}
      <section style={{
        padding: '80px 0',
        backgroundColor: '#0a140e',
        color: '#ffffff',
        backgroundImage: 'linear-gradient(rgba(10, 20, 14, 0.85), rgba(10, 20, 14, 0.85)), url("https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <h2 style={{
            fontSize: '2.4rem',
            fontWeight: 900,
            color: '#ffffff',
            lineHeight: 1.2,
            marginBottom: '16px',
            textTransform: 'uppercase'
          }}>
            READY TO BRING YOUR ARCHITECTURAL VISION TO LIFE?
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#cbd5e1', marginBottom: '32px' }}>
            Contact our engineering team to discuss your project requirements
          </p>
          <button
            className="btn-pill-green"
            onClick={() => setActivePage('contact')}
          >
            Start Your Project <ArrowUpRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
