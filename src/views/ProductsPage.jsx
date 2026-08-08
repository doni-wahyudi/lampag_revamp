import React, { useState } from 'react';
import WireframePlaceholder from '../components/WireframePlaceholder';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const ProductsPage = ({ setSelectedProduct }) => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: t.products.catAll },
    { id: 'windows', label: t.products.catWindows },
    { id: 'doors', label: t.products.catDoors },
    { id: 'facades', label: t.products.catFacades },
    { id: 'sliding', label: t.products.catSliding },
    { id: 'custom', label: t.products.catCustom }
  ];

  const catalog = {
    windows: {
      categoryName: 'Aluminium Window Systems',
      tagline: 'Precision engineered thermal insulation and acoustic performance.',
      desc: 'Standard-setting German engineered profile series for modern residential and commercial architecture.',
      items: [
        { name: 'Schüco AWS 75.SI+', spec: 'High thermal insulation with Uf values down to 0.92 W/(m²K), Passive House certified.' },
        { name: 'Schüco AWS 90.SI+', spec: 'Maximum energy efficiency with 90 mm profile depth, meeting stringent zero-emission goals.' },
        { name: 'Schüco AWS 75 BS.SI+', spec: 'Block system with concealed sash design creating frameless modern architectural look.' }
      ]
    },
    doors: {
      categoryName: 'Aluminium Entrance & Commercial Doors',
      tagline: 'High-frequency durability, burglar resistance, and barrier-free access.',
      desc: 'Heavy-duty entrance solutions engineered for commercial traffic and luxury residential requirements.',
      items: [
        { name: 'Schüco ADS 75.SI', spec: 'Robust aluminium doors with multi-point automated locking and burglar resistance up to RC3.' },
        { name: 'Schüco ADS 90.SI', spec: 'Superior thermal insulation for high-prestige entrance portals and smart access controls.' },
        { name: 'Schüco AD UP 90', spec: 'Universal door platform with 5-chamber profile design for extreme architectural durability.' }
      ]
    },
    facades: {
      categoryName: 'Mullion-Transom & Unitized Façades',
      tagline: 'Floor-to-ceiling glass curtain walls and bespoke structural envelopes.',
      desc: 'Engineered for high-rise commercial structures, institutional landmarks, and panoramic glass buildings.',
      items: [
        { name: 'Schüco FWS 50', spec: 'Classic 50 mm slim profile face width supporting triple glazing loads up to 1000 kg.' },
        { name: 'Schüco FWS 60.SG', spec: 'Structural Glazing all-glass appearance with concealed silicone joint profiles.' },
        { name: 'Schüco UCC 65 SG', spec: 'Unitized custom curtain wall modules pre-assembled offsite for rapid skyscraper installation.' }
      ]
    },
    sliding: {
      categoryName: 'Panoramic Sliding & Folding Systems',
      tagline: 'Seamless indoor-outdoor transitions with zero-threshold accessibility.',
      desc: 'Minimalist sliding systems providing expansive panoramic sightlines and effortless automated operation.',
      items: [
        { name: 'Schüco ASE 60', spec: 'Modular sliding and lift-and-slide system with slim interlock widths down to 40 mm.' },
        { name: 'Schüco ASE 80.HI', spec: 'High thermal insulation sliding door with integrated e-slide mechatronic drive.' },
        { name: 'Schüco ASE 67 PD', spec: 'Panorama Design with fully concealed outer frame embedded seamlessly into walls.' }
      ]
    },
    custom: {
      categoryName: 'Specialty Solutions & Bespoke Engineering',
      tagline: 'Custom architectural extrusions, solar shading, and blast-resistant systems.',
      desc: 'Tailor-made structural engineering for unconventional architectural geometries and specialized project demands.',
      items: [
        { name: 'Bespoke CNC Fabrications', spec: '5-axis CNC machined aluminium components tailored to complex architect drawings.' },
        { name: 'Schüco CSB Sun Shading', spec: 'Concealed solar shading blinds offering extreme wind stability up to 25 m/s.' },
        { name: 'Acoustic & Fire Rated Systems', spec: 'Specialized profile assemblies tested for sound reduction up to 48 dB and EI30/EI60 fire rating.' }
      ]
    }
  };

  const keysToDisplay = activeCategory === 'all' 
    ? ['windows', 'doors', 'facades']
    : [activeCategory];

  return (
    <div>
      {/* HERO BANNER - FULL SCREEN 1 */}
      <section 
        className="hero-full-banner"
        style={{
          backgroundImage: 'linear-gradient(rgba(10, 20, 14, 0.82), rgba(10, 20, 14, 0.92)), url("https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=85")'
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
                {t.products.heroTag}
              </span>
              <h1 style={{
                fontSize: '2.8rem',
                fontWeight: 800,
                lineHeight: 1.15,
                color: '#ffffff',
                margin: '10px 0 16px 0',
                letterSpacing: '-0.03em'
              }}>
                {t.products.heroTitle}
              </h1>
              <p style={{
                fontSize: '1.08rem',
                color: '#cbd5e1',
                lineHeight: 1.6,
                marginBottom: '20px',
                maxWidth: '520px'
              }}>
                {t.products.heroDesc}
              </p>

              <div style={{
                padding: '10px 16px',
                backgroundColor: 'rgba(57, 158, 82, 0.15)',
                borderLeft: '3px solid var(--lampag-green)',
                borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                fontSize: '0.86rem',
                color: '#e2e8f0'
              }}>
                <strong style={{ color: 'var(--lampag-green)' }}>Certified Profiles:</strong> Official Schüco Partner systems manufactured with high-precision CNC machining.
              </div>
            </div>

            <div>
              <WireframePlaceholder
                title="ALUMINIUM PRODUCTION FACILITY VISUAL"
                direction="Bright, modern aluminium production facility showcasing precision manufacturing, CNC machining, and technicians assembling window & façade systems."
                aspectRatio="4/3"
                height="320px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CATALOG FILTER & DISPLAY - FULL SCREEN 2 */}
      <section className="screen-section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          {/* Category Filter Tabs with High Contrast */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '24px',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {categories.map(cat => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    style={{
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      padding: '8px 18px',
                      borderRadius: 'var(--radius-pill)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      border: '2px solid',
                      borderColor: isActive ? 'var(--lampag-green)' : '#cbd5e1',
                      backgroundColor: isActive ? 'var(--lampag-green)' : '#ffffff',
                      color: isActive ? '#ffffff' : 'var(--text-main)',
                      boxShadow: isActive ? '0 4px 14px rgba(57, 158, 82, 0.3)' : '0 2px 6px rgba(0, 0, 0, 0.04)'
                    }}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            <span style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600 }}>
              Official Certified Schüco Partner Catalog
            </span>
          </div>

          {/* Render Sections */}
          {keysToDisplay.map((catKey) => {
            const section = catalog[catKey];
            return (
              <div key={catKey} style={{ marginBottom: '32px' }}>
                <div style={{
                  borderBottom: '2px solid var(--lampag-green)',
                  paddingBottom: '8px',
                  marginBottom: '18px'
                }}>
                  <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-main)' }}>{section.categoryName}</h2>
                  <p style={{ color: 'var(--lampag-green-dark)', fontWeight: 700, fontSize: '0.88rem', marginTop: '2px' }}>{section.tagline}</p>
                </div>

                <div className="grid-3" style={{ gap: '18px' }}>
                  {section.items.map((item, idx) => (
                    <div 
                      key={idx}
                      style={{ 
                        padding: '18px',
                        backgroundColor: '#ffffff',
                        border: '1px solid var(--border-dim)',
                        borderRadius: 'var(--radius-md)',
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                        boxShadow: 'var(--shadow-wf)'
                      }}
                      onClick={() => setSelectedProduct({ ...item, category: section.categoryName })}
                    >
                      <div>
                        <div style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          backgroundColor: 'var(--lampag-green-subtle)',
                          color: 'var(--lampag-green-dark)',
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          padding: '2px 6px',
                          borderRadius: 'var(--radius-sm)',
                          marginBottom: '8px'
                        }}>
                          <ShieldCheck size={12} /> SCHÜCO SPEC
                        </div>
                        <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '6px' }}>
                          {item.name}
                        </h3>
                        <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.45 }}>
                          {item.spec}
                        </p>
                      </div>

                      <div style={{ 
                        marginTop: '14px', 
                        paddingTop: '10px',
                        borderTop: '1px dashed var(--border-dim)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        color: 'var(--lampag-green)'
                      }}>
                        <span>View Technical CAD</span>
                        <ArrowUpRight size={14} color="var(--lampag-green)" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
