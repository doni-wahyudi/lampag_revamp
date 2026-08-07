import React from 'react';
import WireframePlaceholder from '../components/WireframePlaceholder';
import { ArrowRight, ShieldCheck, Cpu, Layers, CheckCircle2, Building2 } from 'lucide-react';

const HomePage = ({ setActivePage, setSelectedProduct, setSelectedProject, blueprintMode }) => {
  const solutions = [
    {
      id: 'windows',
      title: 'Aluminium Windows',
      desc: 'High-performance window systems designed to provide excellent thermal insulation, durability, security, and contemporary aesthetics.',
      cat: 'Windows'
    },
    {
      id: 'doors',
      title: 'Aluminium Doors',
      desc: 'Entrance, sliding, folding, and commercial door systems that combine functionality, safety, and elegant design.',
      cat: 'Doors'
    },
    {
      id: 'facades',
      title: 'Curtain Wall & Façade Systems',
      desc: 'Modern façade solutions that maximize natural light while delivering structural performance, energy efficiency, and architectural flexibility.',
      cat: 'Façades'
    },
    {
      id: 'customized',
      title: 'Customized Solutions',
      desc: 'Tailor-made systems developed to meet unique architectural concepts and project-specific technical requirements.',
      cat: 'Custom'
    },
    {
      id: 'acm',
      title: 'ACM & Decorative Panels',
      desc: 'High-quality aluminium composite materials and decorative cladding solutions designed to enhance architectural aesthetics, durability, and building performance.',
      cat: 'Cladding'
    }
  ];

  const highlights = [
    {
      title: 'Hamburg Commercial Office Hub',
      location: 'Hamburg, Germany',
      sector: 'Commercial',
      systems: 'Curtain Wall Systems & Custom Sliding Doors',
      summary: 'Integrated slim profile sliding doors maximizing natural light while maintaining high thermal performance.'
    },
    {
      title: 'Dortmund Modern Residential Complex',
      location: 'Dortmund, Germany',
      sector: 'Residential',
      systems: 'Schüco AWS 75.SI+ & AD 75 FD',
      summary: 'Energy-efficient triple-glazed aluminium window profiles engineered for acoustic and thermal comfort.'
    }
  ];

  return (
    <div>
      {/* HERO BANNER SECTION */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-dim)' }}>
        <div className="container">
          <div className="wf-tag" style={{ marginBottom: '16px' }}>
            [HERO BANNER SECTION - STICKY HEADER CONCEPT]
          </div>
          
          <div className="grid-2" style={{ alignItems: 'center', gap: '40px' }}>
            <div>
              <span style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.8rem', 
                color: 'var(--blueprint-blue)', 
                fontWeight: 700, 
                textTransform: 'uppercase',
                letterSpacing: '0.05em' 
              }}>
                Willkommen in der Zukunft des Bauens
              </span>
              <h1 style={{ 
                fontSize: '2.5rem', 
                fontWeight: 800, 
                lineHeight: 1.15, 
                color: 'var(--text-main)', 
                margin: '12px 0 16px 0',
                letterSpacing: '-0.03em' 
              }}>
                Precision Aluminium Systems for Modern Architecture
              </h1>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '28px' }}>
                Precision-engineered windows, doors, and curtain wall systems delivering energy efficiency, durability, and lasting performance.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                <button className="btn btn-primary" onClick={() => setActivePage('product')}>
                  Explore Our Solutions <ArrowRight size={16} />
                </button>
                <button className="btn btn-outline" onClick={() => setActivePage('contact')}>
                  Get in Touch
                </button>
              </div>

              <div className="spec-box" style={{ marginTop: '28px' }}>
                <strong>Blueprint Spec Notice:</strong> Certified Schüco System Partner | Part of Alu Group German Manufacturing Network.
              </div>
            </div>

            <div>
              <WireframePlaceholder
                title="HERO BANNER VISUAL"
                direction="High-resolution background image or subtle video of a modern building featuring floor-to-ceiling glass and sleek aluminium frames."
                aspectRatio="16/9"
                height="340px"
                blueprintMode={blueprintMode}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: INTRODUCTION (ABOUT LAMPAG) */}
      <section className="section-padding" style={{ borderBottom: '1px solid var(--border-dim)' }}>
        <div className="container">
          <div className="wf-tag" style={{ marginBottom: '12px' }}>
            [SECTION 1: INTRODUCTION - ABOUT LAMPAG]
          </div>
          
          <div className="section-header" style={{ maxWidth: '800px' }}>
            <h2>Engineering Quality. Elevating Architecture.</h2>
            <p style={{ marginTop: '14px', fontSize: '1.1rem', color: 'var(--text-main)', lineHeight: 1.7 }}>
              Lampag specializes in premium aluminium window, door, and façade systems for modern architectural projects. We deliver innovative solutions that combine engineering expertise, quality craftsmanship, and contemporary design to meet the needs of residential, commercial, and mixed-use developments.
            </p>
          </div>

          <div className="grid-3" style={{ marginTop: '32px' }}>
            <div className="wf-box" style={{ padding: '24px' }}>
              <div className="wf-tag" style={{ marginBottom: '10px' }}>700+ COMPLETED PROJECTS</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>Global Execution</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Over 700 successfully executed projects across residential, commercial, and municipal developments worldwide.</p>
            </div>

            <div className="wf-box" style={{ padding: '24px' }}>
              <div className="wf-tag" style={{ marginBottom: '10px' }}>70,000 M² CAPACITY</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>German Manufacturing</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Annual production capacity exceeding 70,000 m² powered by advanced Schüco CNC machinery.</p>
            </div>

            <div className="wf-box" style={{ padding: '24px' }}>
              <div className="wf-tag" style={{ marginBottom: '10px' }}>50+ YEARS EXPERIENCE</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>Industry Expertise</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Strengthened by a regional engineering team with over 50 years of specialized aluminium construction mastery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SOLUTIONS OVERVIEW */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-dim)' }}>
        <div className="container">
          <div className="wf-tag" style={{ marginBottom: '12px' }}>
            [SECTION 2: OUR SOLUTIONS OVERVIEW - GRID CARDS]
          </div>

          <div className="section-header">
            <h2>Comprehensive Aluminium Systems</h2>
            <p>Engineered to meet demanding architectural and building-performance requirements.</p>
          </div>

          <div className="grid-3">
            {solutions.map((item) => (
              <div 
                key={item.id} 
                className="wf-box" 
                style={{ 
                  padding: '24px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between',
                  cursor: 'pointer' 
                }}
                onClick={() => setActivePage('product')}
              >
                <div>
                  <div className="wf-tag" style={{ marginBottom: '12px' }}>{item.cat}</div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '10px' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{item.desc}</p>
                </div>
                <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', fontWeight: 700, color: 'var(--blueprint-blue)' }}>
                  View Systems & Specs <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: END-TO-END ENGINEERING SUPPORT */}
      <section className="section-padding" style={{ borderBottom: '1px solid var(--border-dim)' }}>
        <div className="container">
          <div className="wf-tag" style={{ marginBottom: '12px' }}>
            [SECTION 3: END-TO-END ENGINEERING SUPPORT]
          </div>

          <div className="grid-2" style={{ alignItems: 'center', gap: '40px' }}>
            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '16px' }}>
                Supporting Your Project at Every Lifecycle Stage
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
                Working closely with architects, developers, contractors, and project partners, we support projects from the early planning stage through engineering, production, and project execution. Our goal is to deliver reliable, customized solutions that seamlessly blend aesthetics, functionality, and long-term performance.
              </p>
              <button className="btn btn-outline" onClick={() => setActivePage('whatweoffer')}>
                Explore Our Process & Services <ArrowRight size={16} />
              </button>
            </div>

            <WireframePlaceholder
              title="ENGINEERING LIFECYCLE DIAGRAM"
              direction="Technical diagram illustrating early planning, CAD/BIM drafting, Schüco CNC production, and site coordination."
              aspectRatio="4/3"
              height="280px"
              blueprintMode={blueprintMode}
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: PORTFOLIO SHOWCASE HIGHLIGHT */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-dim)' }}>
        <div className="container">
          <div className="wf-tag" style={{ marginBottom: '12px' }}>
            [SECTION 4: PORTFOLIO SHOWCASE HIGHLIGHT]
          </div>

          <div className="section-header" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '16px' }}>
            <div>
              <h2>Selected Architectural References</h2>
              <p>A glimpse of our expertise in action across residential, commercial, and public developments.</p>
            </div>
            <button className="btn btn-outline" onClick={() => setActivePage('portfolio')}>
              View All Projects <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid-2">
            {highlights.map((proj, idx) => (
              <div 
                key={idx} 
                className="wf-box" 
                style={{ padding: '20px', cursor: 'pointer' }}
                onClick={() => setSelectedProject(proj)}
              >
                <WireframePlaceholder
                  title={`PORTFOLIO: ${proj.title}`}
                  direction="High-resolution photo of completed architectural reference."
                  aspectRatio="16/9"
                  height="200px"
                  blueprintMode={blueprintMode}
                />
                <div style={{ marginTop: '16px' }}>
                  <div className="wf-tag" style={{ marginBottom: '8px' }}>{proj.sector} • {proj.location}</div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>{proj.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '6px' }}>{proj.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY LAMPAG */}
      <section className="section-padding" style={{ borderBottom: '1px solid var(--border-dim)' }}>
        <div className="container">
          <div className="wf-tag" style={{ marginBottom: '12px' }}>
            [SECTION 5: WHY LAMPAG]
          </div>

          <div className="section-header">
            <h2>Why Leading Partners Choose Lampag</h2>
            <p>At Lampag, we are committed to delivering more than aluminium systems—we provide reliable project solutions built on quality, expertise, and partnership.</p>
          </div>

          <div className="grid-3">
            <div className="wf-box" style={{ padding: '24px' }}>
              <Cpu size={28} color="var(--blueprint-blue)" style={{ marginBottom: '12px' }} />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px' }}>Engineering-Driven</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Tailored technical support from early concept design to final project execution.</p>
            </div>

            <div className="wf-box" style={{ padding: '24px' }}>
              <ShieldCheck size={28} color="var(--blueprint-blue)" style={{ marginBottom: '12px' }} />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px' }}>High Quality Standards</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Precision materials built for uncompromised long-term durability and safety.</p>
            </div>

            <div className="wf-box" style={{ padding: '24px' }}>
              <Layers size={28} color="var(--blueprint-blue)" style={{ marginBottom: '12px' }} />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px' }}>Sustainable Performance</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Energy-efficient thermal insulation systems designed for future-ready buildings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: BOTTOM CALL TO ACTION */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark)', color: '#ffffff' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <div className="wf-tag" style={{ marginBottom: '16px', backgroundColor: '#1e293b', color: '#38bdf8', borderColor: '#334155' }}>
            [SECTION 6: BOTTOM CTA BANNER]
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '12px' }}>
            Ready to bring your architectural vision to life?
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginBottom: '28px' }}>
            Contact our engineering team to discuss your project requirements.
          </p>
          <button className="btn btn-primary" style={{ backgroundColor: '#ffffff', color: 'var(--text-main)' }} onClick={() => setActivePage('contact')}>
            Start Your Project <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
