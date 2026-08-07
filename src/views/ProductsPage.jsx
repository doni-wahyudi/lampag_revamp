import React, { useState } from 'react';
import WireframePlaceholder from '../components/WireframePlaceholder';
import { Sliders, ShieldCheck, ArrowRight, Layers, Box, Check } from 'lucide-react';

const ProductsPage = ({ setSelectedProduct, blueprintMode }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const catalog = {
    windows: {
      categoryName: '4.1 Aluminium Windows',
      tagline: 'High-performance systems for modern architectural spaces.',
      desc: 'High-performance window systems designed to provide excellent thermal insulation, durability, security, and contemporary aesthetics. Designed for both residential and commercial applications, our window systems combine slim sightlines with exceptional weather resistance.',
      items: [
        { name: 'Schüco AWS 50.NI', spec: 'Non-insulated aluminium window system for interior & moderate climate zones.' },
        { name: 'Schüco AWS 65', spec: 'Standard thermal insulation window system for cost-effective modern building designs.' },
        { name: 'Schüco AWS 70.HI', spec: 'High-insulation window profile meeting stringent European energy standards.' },
        { name: 'Schüco AWS 75.SI+', spec: 'Super-insulated system for sustainable green building certifications (Passive House compatible).' },
        { name: 'Schüco AWS 75.PD', spec: 'Panorama design window with ultra-slim sightlines for maximum transparency.' },
        { name: 'Schüco AWS 90.SI+', spec: 'Maximum thermal insulation matching Passive House structural standards.' },
        { name: 'Schüco FWS 60.CV', spec: 'Concealed vent window integrated seamlessly into mullion-transom façade lines.' }
      ]
    },
    doors: {
      categoryName: '4.2 Aluminium Doors',
      tagline: 'Combining functionality, security, and architectural elegance.',
      desc: 'Entrance, sliding, folding, and commercial door systems that combine functionality, safety, and elegant design. Engineered for smooth operation and long-lasting durability.',
      items: [
        { name: 'Schüco ADS 50', spec: 'Heavy-duty non-insulated commercial entrance door system.' },
        { name: 'Schüco ADS 65', spec: 'Robust thermal insulation door system for high-frequency entrance doors.' },
        { name: 'Schüco ADS 70.HI', spec: 'High-insulation entrance system combining security RC2/RC3 with durability.' },
        { name: 'Schüco ADS 75.SI', spec: 'Super insulated door profile for extreme weather resistance and acoustic control.' },
        { name: 'Schüco ADS 90.SI', spec: 'Premium heavy-duty entrance door with maximum thermal efficiency.' },
        { name: 'AD 75 FD', spec: 'Folding door system providing wide open transitions for hospitality & residential.' },
        { name: 'AD 90 FD', spec: 'Super-insulated folding door for large span openings and weather tightness.' },
        { name: 'ASE80', spec: 'Sliding and lift-and-slide system with high thermal insulation profiles.' },
        { name: 'ASE60', spec: 'Standard depth sliding system with modular security and operation options.' },
        { name: 'AS PD 75 HI', spec: 'Panorama Design high-insulation sliding door with floor-integrated outer frame.' },
        { name: 'ASE 67 PD', spec: 'Ultra-slim Panorama Design sliding door maximizing panoramic glass view.' }
      ]
    },
    facades: {
      categoryName: '4.3 Curtain Wall & Façade Systems',
      tagline: 'Maximizing natural light while optimizing thermal and structural performance.',
      desc: 'Modern façade solutions that maximize natural light while delivering structural performance, energy efficiency, and architectural flexibility. Our curtain wall systems allow for ambitious exterior designs.',
      items: [
        { name: 'Schüco UCC 65 SG', spec: 'Unitized custom curtain wall system with structural glazing aesthetics.' },
        { name: 'Schüco AF UDC 80', spec: 'Unitized Dynamic Construction façade system for high-rise building projects.' },
        { name: 'Schüco AF UDC 80.CV', spec: 'Unitized façade with concealed vents for homogeneous all-glass exterior appearance.' },
        { name: 'Schüco AF UDC 80.SG', spec: 'Structural glazing unitized system for sleek glass architectural envelopes.' },
        { name: 'Custom Unitized System', spec: 'Project-specific unitized façade panels pre-assembled offsite for fast installation.' },
        { name: 'Schüco FWS 50', spec: 'Classic mullion-transom façade system with 50 mm face width.' },
        { name: 'Schüco FWS 60', spec: 'Mullion-transom curtain wall with 60 mm face width for heavy glazing loads.' },
        { name: 'Schüco FWS 50.SG', spec: 'Structural Glazing variant with flush glass surfaces and shadow joints.' },
        { name: 'Schüco FWS 60.SG', spec: 'Heavy-duty structural glazing façade system for large glass pane formats.' }
      ]
    },
    custom: {
      categoryName: '4.4 Customized Aluminium Solutions',
      tagline: 'Bespoke systems tailored to complex architectural challenges.',
      desc: 'Tailor-made systems developed to meet unique architectural concepts and project-specific technical requirements. When standard profiles are insufficient, our engineering team collaborates directly with designers.',
      items: [
        { name: 'Glass Roofs', spec: 'Custom sloped skylights & glass roof structures with integrated drainage channels.' },
        { name: 'All-Glass Solutions', spec: 'Frameless glass partitions, structural glass fins, and spider fitting assemblies.' },
        { name: 'Fall Protection', spec: 'Integrated glass Juliet balconies & French window fall prevention barriers.' },
        { name: 'All-Glass Railings', spec: 'Bottom-channel mounted glass balustrades for un-obstructed views.' },
        { name: 'Post Railing', spec: 'Precision aluminium post balustrade systems for balconies and staircases.' },
        { name: 'Aluminum Sheet Metal', spec: 'Custom-formed aluminium cladding sheets, column covers, and fascia trims.' },
        { name: 'Aluminum Composite Panels', spec: 'High-grade ACM panels providing durable, lightweight architectural cladding.' }
      ]
    }
  };

  const categories = [
    { id: 'all', label: 'All Systems' },
    { id: 'windows', label: 'Aluminium Windows' },
    { id: 'doors', label: 'Aluminium Doors' },
    { id: 'facades', label: 'Curtain Wall & Façades' },
    { id: 'custom', label: 'Customized Solutions' }
  ];

  const keysToDisplay = activeCategory === 'all' 
    ? ['windows', 'doors', 'facades', 'custom']
    : [activeCategory];

  return (
    <div>
      {/* HERO BANNER */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-dim)' }}>
        <div className="container">
          <div className="wf-tag" style={{ marginBottom: '16px' }}>
            [PRODUCT CATALOG - HERO BANNER]
          </div>

          <div className="grid-2" style={{ alignItems: 'center', gap: '40px' }}>
            <div>
              <h1 style={{ fontSize: '2.4rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '16px' }}>
                Precision-Engineered Aluminium Systems
              </h1>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Engineered for high thermal insulation, structural safety, and seamless design integration.
              </p>

              <div className="spec-box" style={{ marginTop: '24px' }}>
                <strong>Certified Profiles:</strong> Official Schüco Partner systems manufactured with high-precision CNC machining.
              </div>
            </div>

            <WireframePlaceholder
              title="ALUMINIUM PRODUCTION FACILITY VISUAL"
              direction="Bright, modern aluminium production facility showcasing precision manufacturing, CNC machining, and technicians assembling window & façade systems."
              aspectRatio="16/9"
              height="290px"
              blueprintMode={blueprintMode}
            />
          </div>
        </div>
      </section>

      {/* CATALOG FILTER & DISPLAY */}
      <section className="section-padding">
        <div className="container">
          <div className="wf-tag" style={{ marginBottom: '16px' }}>
            [CATALOG NAVIGATION & PRODUCT CARDS WIREFRAME]
          </div>

          {/* Category Filter Tabs */}
          <div className="filter-tabs">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`filter-tab ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Render Sections */}
          {keysToDisplay.map((catKey) => {
            const section = catalog[catKey];
            return (
              <div key={catKey} style={{ marginBottom: '56px' }}>
                <div style={{
                  borderBottom: '2px solid var(--text-main)',
                  paddingBottom: '12px',
                  marginBottom: '20px'
                }}>
                  <div className="wf-tag" style={{ marginBottom: '6px' }}>{section.categoryName}</div>
                  <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)' }}>{section.categoryName.replace(/[\d\.]+\s/, '')}</h2>
                  <p style={{ color: 'var(--blueprint-blue)', fontWeight: 600, fontSize: '0.95rem' }}>{section.tagline}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginTop: '6px', maxWidth: '900px' }}>{section.desc}</p>
                </div>

                <div className="grid-3">
                  {section.items.map((item, idx) => (
                    <div 
                      key={idx}
                      className="wf-box"
                      style={{ 
                        padding: '20px', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'space-between',
                        cursor: 'pointer'
                      }}
                      onClick={() => setSelectedProduct({ ...item, category: section.categoryName })}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--blueprint-blue)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', marginBottom: '8px' }}>
                          <ShieldCheck size={14} /> SCHÜCO SPEC PROFILE
                        </div>
                        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
                          {item.name}
                        </h3>
                        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                          {item.spec}
                        </p>
                      </div>

                      <div style={{ 
                        marginTop: '16px', 
                        paddingTop: '12px',
                        borderTop: '1px dashed var(--border-dim)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        color: 'var(--text-main)'
                      }}>
                        <span>Click for CAD & Specs</span>
                        <ArrowRight size={14} color="var(--blueprint-blue)" />
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
