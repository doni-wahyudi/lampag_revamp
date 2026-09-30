import React, { useState } from 'react';
import WireframePlaceholder from '../components/WireframePlaceholder';
import { 
  ShieldCheck, 
  ArrowUpRight, 
  LayoutGrid, 
  AppWindow, 
  DoorOpen, 
  Building2, 
  Layers
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { productsCatalog } from '../data/productsData';

const ProductsPage = ({ setSelectedProduct }) => {
  const { langCode, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const isGerman = langCode === 'DE';

  const categories = [
    { 
      id: 'all', 
      label: t.products?.catAll || (isGerman ? 'Alle Systeme' : 'All Systems'), 
      icon: <LayoutGrid size={18} />, 
      count: productsCatalog.length 
    },
    { 
      id: 'windows', 
      label: t.products?.catWindows || (isGerman ? 'Aluminium-Fenster' : 'Aluminium Windows'), 
      icon: <AppWindow size={18} />, 
      count: productsCatalog.filter(p => p.categoryKey === 'windows').length 
    },
    { 
      id: 'doors', 
      label: t.products?.catDoors || (isGerman ? 'Aluminium-Türen' : 'Aluminium Doors'), 
      icon: <DoorOpen size={18} />, 
      count: productsCatalog.filter(p => p.categoryKey === 'doors').length 
    },
    { 
      id: 'facades', 
      label: t.products?.catFacades || (isGerman ? 'Vorhang- & Elementfassaden' : 'Curtain Wall & Façades'), 
      icon: <Building2 size={18} />, 
      count: productsCatalog.filter(p => p.categoryKey === 'facades').length 
    },
    { 
      id: 'custom', 
      label: t.products?.catCustom || (isGerman ? 'Sonderlösungen' : 'Custom Solutions'), 
      icon: <Layers size={18} />, 
      count: productsCatalog.filter(p => p.categoryKey === 'custom').length 
    }
  ];

  const categoryHeadings = {
    windows: {
      name: isGerman ? '4.1 Aluminium-Fenster' : '4.1 Aluminium Windows',
      tagline: t.products?.tabWindowsTag || (isGerman 
        ? 'Hochleistungssysteme für moderne Architekturräume.' 
        : 'High-performance systems for modern architectural spaces.'),
      body: t.products?.tabWindowsDesc || (isGerman
        ? 'Hochleistungsfähige Fenstersysteme für exzellente Wärmedämmung, Langlebigkeit, Einbruchschutz und zeitgemäße Ästhetik. Entwickelt für Wohn- und Objektbauten vereinen unsere Fenstersysteme schlanke Ansichten mit höchster Wetterbeständigkeit und Energieeffizienz.'
        : 'High-performance window systems designed to provide excellent thermal insulation, durability, security, and contemporary aesthetics. Designed for both residential and commercial applications, our window systems combine slim sightlines with exceptional weather resistance and energy efficiency.')
    },
    doors: {
      name: isGerman ? '4.2 Aluminium-Türen' : '4.2 Aluminium Doors',
      tagline: t.products?.tabDoorsTag || (isGerman 
        ? 'Kombination aus Funktionalität, Sicherheit und architektonischer Eleganz.' 
        : 'Combining functionality, security, and architectural elegance.'),
      body: t.products?.tabDoorsDesc || (isGerman
        ? 'Eingangs-, Schiebe-, Falt- und Objekttüren, die Funktionalität, Sicherheit und elegantes Design vereinen. Konzipiert für dauerhafte Leichtgängigkeit und Langlebigkeit bieten unsere Türsysteme nahtlose Übergänge zwischen Innen- und Außenbereich.'
        : 'Entrance, sliding, folding, and commercial door systems that combine functionality, safety, and elegant design. Engineered for smooth operation and long-lasting durability, our door systems offer seamless transitions between indoor and outdoor environments.')
    },
    facades: {
      name: isGerman ? '4.3 Vorhang- & Elementfassaden' : '4.3 Curtain Wall & Façade Systems',
      tagline: t.products?.tabFacadesTag || (isGerman 
        ? 'Maximaler Lichteinfall bei optimaler thermischer und statischer Leistung.' 
        : 'Maximizing natural light while optimizing thermal and structural performance.'),
      body: t.products?.tabFacadesDesc || (isGerman
        ? 'Moderne Fassadenlösungen für maximalen Lichteinfall, überragende Tragfähigkeit, Energieeffizienz und gestalterische Flexibilität. Unsere Vorhangfassaden ermöglichen anspruchsvolle Hüllendesigns unter Einhaltung strengster Umwelt- und Akustikstandards.'
        : 'Modern façade solutions that maximize natural light while delivering structural performance, energy efficiency, and architectural flexibility. Our curtain wall systems allow for ambitious exterior designs that meet rigorous environmental and acoustic standards.')
    },
    custom: {
      name: isGerman ? '4.4 Maßgeschneiderte Sonderlösungen' : '4.4 Customized Aluminium Solutions',
      tagline: t.products?.tabCustomTag || (isGerman 
        ? 'Bespoke-Systeme für komplexe architektonische Herausforderungen.' 
        : 'Bespoke systems tailored to complex architectural challenges.'),
      body: t.products?.tabCustomDesc || (isGerman
        ? 'Maßgeschneiderte Systeme für einzigartige architektonische Konzepte und projektspezifische Anforderungen. Wenn Standardprofile nicht ausreichen, entwickelt unser Ingenieurteam in direkter Zusammenarbeit mit Planern individuelle Aluminium-Sonderkonstruktionen.'
        : 'Tailor-made systems developed to meet unique architectural concepts and project-specific technical requirements. When standard profiles are insufficient, our engineering team collaborates directly with designers to create custom-engineered aluminium elements.')
    }
  };

  // Group products by category when 'all' is selected
  const activeCategoryKeys = activeCategory === 'all'
    ? ['windows', 'doors', 'facades', 'custom']
    : [activeCategory];

  return (
    <div>
      {/* HERO BANNER */}
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
                {t.products?.heroTag || (isGerman ? 'PRODUKTKATALOG' : 'PRODUCT CATALOG')}
              </span>
              <h1 style={{
                fontSize: '2.8rem',
                fontWeight: 800,
                lineHeight: 1.15,
                color: '#ffffff',
                margin: '10px 0 16px 0',
                letterSpacing: '-0.03em'
              }}>
                {t.products?.heroTitle || (isGerman ? 'Präzisionsgefertigte Aluminiumsysteme' : 'Precision-Engineered Aluminium Systems')}
              </h1>
              <p style={{
                fontSize: '1.08rem',
                color: '#cbd5e1',
                lineHeight: 1.6,
                marginBottom: '20px',
                maxWidth: '520px'
              }}>
                {t.products?.heroDesc || (isGerman 
                  ? 'Entwickelt für höchste Wärmedämmung, Sicherheit und nahtlose Designintegration.' 
                  : 'Engineered for high thermal insulation, structural safety, and seamless design integration.')}
              </p>

              <div style={{
                padding: '12px 18px',
                backgroundColor: 'rgba(57, 158, 82, 0.15)',
                borderLeft: '3px solid var(--lampag-green)',
                borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                fontSize: '0.88rem',
                color: '#e2e8f0',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <ShieldCheck size={20} color="var(--lampag-green)" style={{ flexShrink: 0 }} />
                <div>
                  <strong style={{ color: 'var(--lampag-green)' }}>
                    {isGerman ? 'Offizieller Schüco-Partner:' : 'Official Certified Schüco Partner:'}
                  </strong>{' '}
                  {isGerman 
                    ? 'Zertifizierte Profilsysteme für Fenster, Türen, Schiebetüren und Fassaden aus deutscher Präzisionsfertigung.'
                    : 'Certified profile systems for windows, doors, sliding systems, and façades with German precision engineering.'}
                </div>
              </div>
            </div>

            <div>
              <WireframePlaceholder
                title="ALUMINIUM PRODUCTION FACILITY VISUAL"
                direction="Modern aluminium CNC production facility showcasing precision manufacturing and technician assembly of Schüco profile systems."
                aspectRatio="4/3"
                height="320px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CATALOG FILTER & DISPLAY */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid var(--border-dim)' }}>
        <div className="container">
          {/* Header & Category Switcher Bar */}
          <div style={{ marginBottom: '36px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '22px' }}>
              <div>
                <span style={{
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  color: 'var(--lampag-green)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}>
                  {isGerman ? 'SYSTEMKATEGORIEN' : 'SYSTEM CATEGORIES'}
                </span>
                <h2 style={{ fontSize: '1.95rem', fontWeight: 900, color: 'var(--text-main)', marginTop: '4px' }}>
                  {isGerman ? 'Schüco Profilkatalog' : 'Explore Our Profile Catalog'}
                </h2>
              </div>

              {/* Official Schüco & Custom Systems Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#ffffff',
                border: '1.5px solid var(--lampag-green)',
                padding: '8px 16px',
                borderRadius: 'var(--radius-pill)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
              }}>
                <ShieldCheck size={18} color="var(--lampag-green)" />
                <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--lampag-green-dark)' }}>
                  {isGerman 
                    ? 'Zertifizierte Schüco- & Sonderprofilsysteme' 
                    : 'Certified Schüco & Custom Profile Systems'}
                </span>
              </div>
            </div>

            {/* MODERN CATEGORY SWITCHER (Segmented Tab Cards with Icons & System Counts) */}
            <div className="product-category-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '12px',
              backgroundColor: '#ffffff',
              padding: '12px',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-dim)',
              boxShadow: 'var(--shadow-wf)',
              marginBottom: '32px'
            }}>
              {categories.map(cat => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-md)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      border: isActive ? '1.5px solid var(--lampag-green)' : '1px solid transparent',
                      backgroundColor: isActive ? '#0d1a12' : '#f8fafc',
                      color: isActive ? '#ffffff' : 'var(--text-main)',
                      boxShadow: isActive ? '0 6px 18px rgba(13, 26, 18, 0.25)' : 'none',
                      textAlign: 'left',
                      minWidth: 0,
                      whiteSpace: 'normal',
                      wordBreak: 'normal',
                      overflow: 'visible'
                    }}
                  >
                    <div style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: isActive ? 'var(--lampag-green)' : 'rgba(57, 158, 82, 0.12)',
                      color: isActive ? '#ffffff' : 'var(--lampag-green-dark)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {cat.icon}
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ 
                        fontSize: '0.88rem', 
                        fontWeight: 800, 
                        lineHeight: 1.25,
                        color: isActive ? '#ffffff' : 'var(--text-main)'
                      }}>
                        {cat.label}
                      </div>
                      <div style={{ 
                        fontSize: '0.72rem', 
                        color: isActive ? 'rgba(255,255,255,0.75)' : '#64748b',
                        marginTop: '2px',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 600
                      }}>
                        {cat.count} {isGerman ? (cat.count === 1 ? 'System' : 'Systeme') : (cat.count === 1 ? 'System' : 'Systems')}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Product Sections Rendered with Real Client Images */}
          {activeCategoryKeys.map((catKey) => {
            const heading = categoryHeadings[catKey];
            const sectionItems = productsCatalog.filter(p => p.categoryKey === catKey);
            if (sectionItems.length === 0) return null;

            return (
              <div key={catKey} style={{ marginBottom: '52px' }}>
                <div style={{
                  borderBottom: '2px solid var(--lampag-green)',
                  paddingBottom: '16px',
                  marginBottom: '28px'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '8px' }}>
                    <div>
                      <h3 style={{ fontSize: '1.55rem', fontWeight: 800, color: 'var(--text-main)' }}>
                        {heading.name}
                      </h3>
                      <p style={{ color: 'var(--lampag-green-dark)', fontWeight: 700, fontSize: '0.94rem', marginTop: '2px' }}>
                        {heading.tagline}
                      </p>
                    </div>
                    <span style={{
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      color: 'var(--lampag-green-dark)',
                      backgroundColor: 'rgba(57, 158, 82, 0.12)',
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-pill)',
                      border: '1px solid rgba(57, 158, 82, 0.3)'
                    }}>
                      {sectionItems.length} {isGerman ? (sectionItems.length === 1 ? 'System' : 'Systeme') : (sectionItems.length === 1 ? 'System' : 'Systems')}
                    </span>
                  </div>
                  {heading.body && (
                    <p style={{ color: '#475569', fontSize: '0.90rem', lineHeight: 1.6, maxWidth: '980px', margin: '6px 0 0 0' }}>
                      {heading.body}
                    </p>
                  )}
                </div>

                {/* Grid of Product Cards WITH CLIENT IMAGES */}
                <div className="grid-3" style={{ gap: '24px' }}>
                  {sectionItems.map((product) => {
                    const primaryImage = product.imageUrl;
                    const specText = isGerman ? product.specDE : product.spec;
                    const taglineText = isGerman ? product.taglineDE : product.tagline;

                    return (
                      <div 
                        key={product.id}
                        style={{ 
                          backgroundColor: '#ffffff',
                          border: '1px solid var(--border-dim)',
                          borderRadius: 'var(--radius-md)',
                          overflow: 'hidden',
                          display: 'flex', 
                          flexDirection: 'column', 
                          justifyContent: 'space-between',
                          cursor: 'pointer',
                          transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                          boxShadow: 'var(--shadow-wf)',
                          position: 'relative'
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.transform = 'translateY(-4px)';
                          e.currentTarget.style.boxShadow = '0 14px 30px rgba(0, 0, 0, 0.12)';
                          e.currentTarget.style.borderColor = 'var(--lampag-green)';
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'var(--shadow-wf)';
                          e.currentTarget.style.borderColor = 'var(--border-dim)';
                        }}
                        onClick={() => setSelectedProduct(product)}
                      >
                        {/* Real Product Image Container */}
                        <div style={{
                          position: 'relative',
                          height: '190px',
                          overflow: 'hidden',
                          backgroundColor: '#0d1a12',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          {primaryImage ? (
                            <img
                              src={primaryImage}
                              alt={`${product.name} - ${product.category || 'Aluminium System'} precision architectural profile`}
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'transform 0.35s ease'
                              }}
                            />
                          ) : (
                            <div style={{ color: '#94a3b8', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
                              [IMAGE: {product.name}]
                            </div>
                          )}

                          {/* Top Badges */}
                          <div style={{
                            position: 'absolute',
                            top: '10px',
                            left: '10px',
                            right: '10px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                          }}>
                            <div style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              backgroundColor: 'rgba(13, 26, 18, 0.88)',
                              backdropFilter: 'blur(4px)',
                              color: '#ffffff',
                              fontSize: '0.68rem',
                              fontWeight: 800,
                              padding: '4px 8px',
                              borderRadius: 'var(--radius-sm)',
                              border: '1px solid rgba(57, 158, 82, 0.5)'
                            }}>
                              {product.isCustom ? (
                                <>
                                  <Layers size={13} color="var(--lampag-green)" /> {isGerman ? 'SONDERLÖSUNG' : 'CUSTOM SOLUTION'}
                                </>
                              ) : (
                                <>
                                  <ShieldCheck size={13} color="var(--lampag-green)" /> SCHÜCO SPEC
                                </>
                              )}
                            </div>

                            {product.images && product.images.length > 1 && (
                              <div style={{
                                backgroundColor: 'rgba(0,0,0,0.7)',
                                color: '#ffffff',
                                fontSize: '0.65rem',
                                fontFamily: 'var(--font-mono)',
                                padding: '2px 6px',
                                borderRadius: 'var(--radius-sm)'
                              }}>
                                📷 {product.images.length}
                              </div>
                            )}
                          </div>

                          {/* Series Label overlay */}
                          <div style={{
                            position: 'absolute',
                            bottom: '8px',
                            left: '10px',
                            backgroundColor: 'rgba(13, 26, 18, 0.82)',
                            color: 'var(--lampag-green)',
                            fontSize: '0.68rem',
                            fontWeight: 700,
                            padding: '2px 6px',
                            borderRadius: '2px',
                            fontFamily: 'var(--font-mono)'
                          }}>
                            {product.series}
                          </div>
                        </div>

                        {/* Card Content Details */}
                        <div style={{ padding: '18px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                          <div>
                            <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '6px' }}>
                              {isGerman && product.nameDE ? product.nameDE : product.name}
                            </h4>
                            <p style={{ fontSize: '0.82rem', color: 'var(--lampag-green-dark)', fontWeight: 700, marginBottom: '8px', lineHeight: 1.3 }}>
                              {taglineText}
                            </p>
                            <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.48, minHeight: '44px' }}>
                              {specText}
                            </p>

                            {/* Key Parameters Chips */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '12px' }}>
                              {product.isCustom ? (
                                <span style={{
                                  fontSize: '0.72rem',
                                  fontFamily: 'var(--font-mono)',
                                  backgroundColor: 'rgba(57, 158, 82, 0.12)',
                                  color: 'var(--lampag-green-dark)',
                                  fontWeight: 700,
                                  padding: '3px 8px',
                                  borderRadius: 'var(--radius-sm)',
                                  border: '1px solid rgba(57, 158, 82, 0.3)'
                                }}>
                                  {isGerman ? '✨ Individuell nach Projektanfrage' : '✨ Custom Engineered Per Request'}
                                </span>
                              ) : (
                                <>
                                  {product.depth && (
                                    <span style={{
                                      fontSize: '0.7rem',
                                      fontFamily: 'var(--font-mono)',
                                      backgroundColor: '#f1f5f9',
                                      color: '#334155',
                                      padding: '2px 6px',
                                      borderRadius: 'var(--radius-sm)',
                                      border: '1px solid #e2e8f0'
                                    }}>
                                      Depth: {product.depth}
                                    </span>
                                  )}
                                  {product.uValue && product.uValue !== 'Non-insulated' && (
                                    <span style={{
                                      fontSize: '0.7rem',
                                      fontFamily: 'var(--font-mono)',
                                      backgroundColor: 'var(--lampag-green-subtle)',
                                      color: 'var(--lampag-green-dark)',
                                      fontWeight: 700,
                                      padding: '2px 6px',
                                      borderRadius: 'var(--radius-sm)'
                                    }}>
                                      {product.uValue}
                                    </span>
                                  )}
                                </>
                              )}
                            </div>
                          </div>

                          {/* Action Bar */}
                          <div style={{ 
                            marginTop: '16px', 
                            paddingTop: '12px',
                            borderTop: '1px dashed var(--border-dim)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                          }}>
                            <span style={{
                              fontSize: '0.84rem',
                              fontWeight: 700,
                              color: 'var(--lampag-green)',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '4px'
                            }}>
                              {product.isCustom 
                                ? (isGerman ? 'Projektanfrage & Details' : 'Custom Details & Inquiry')
                                : (isGerman ? 'Spezifikationen & CAD' : 'View Specifications & CAD')} <ArrowUpRight size={14} />
                            </span>

                            <span style={{
                              fontSize: '0.72rem',
                              fontFamily: 'var(--font-mono)',
                              color: '#94a3b8'
                            }}>
                              {product.isCustom ? 'LAMPAG CUSTOM' : 'SCHÜCO'}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
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
