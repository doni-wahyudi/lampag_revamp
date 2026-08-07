import React from 'react';
import WireframePlaceholder from '../components/WireframePlaceholder';
import { ShieldCheck, CheckCircle2, Factory, Award, Building, Wrench, RefreshCw, Handshake } from 'lucide-react';

const AboutPage = ({ blueprintMode }) => {
  const strengths = [
    {
      icon: <ShieldCheck size={24} color="var(--lampag-green)" />,
      title: 'High-Performance Schüco Systems',
      desc: 'Engineered to meet demanding architectural and building-performance requirements.'
    },
    {
      icon: <Wrench size={24} color="var(--lampag-green)" />,
      title: 'Design-to-Fabrication Engineering',
      desc: 'Technical expertise integrated into every stage from draft to assembly.'
    },
    {
      icon: <Building size={24} color="var(--lampag-green)" />,
      title: 'Project-Specific Solutions',
      desc: 'Tailored advice and custom profile developments to meet specific project needs.'
    },
    {
      icon: <Award size={24} color="var(--lampag-green)" />,
      title: 'Building Performance Engineering',
      desc: 'Optimising thermal, acoustic, air-tightness and weather performance for long-lasting systems.'
    },
    {
      icon: <Factory size={24} color="var(--lampag-green)" />,
      title: 'Precision Manufacturing',
      desc: 'Powered by advanced Schüco CNC machinery, delivering exceptional consistency.'
    },
    {
      icon: <CheckCircle2 size={24} color="var(--lampag-green)" />,
      title: 'Rigorous Quality Assurance',
      desc: 'Uncompromised quality control from materials inspection to final installation.'
    },
    {
      icon: <RefreshCw size={24} color="var(--lampag-green)" />,
      title: 'Reliable Project Coordination',
      desc: 'On-time delivery and structured coordination with site contractors.'
    },
    {
      icon: <Handshake size={24} color="var(--lampag-green)" />,
      title: 'Long-Term Service & Partnership',
      desc: 'Building trusted relationships built on reliability, service, and performance.'
    }
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
                ABOUT LAMPAG
              </span>
              <h1 style={{ fontSize: '2.6rem', fontWeight: 800, lineHeight: 1.2, margin: '12px 0 16px 0', color: '#ffffff' }}>
                Building Trust Through Precision & Innovation
              </h1>
              <p style={{ fontSize: '1.1rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                Dedicated to supporting modern architectural projects with end-to-end aluminium engineering solutions.
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
                <strong style={{ color: 'var(--lampag-green)' }}>German Manufacturing Excellence:</strong> Member of Alu Group with 70,000 m² annual capacity & 700+ worldwide projects.
              </div>
            </div>

            <WireframePlaceholder
              title="ABOUT HERO ARCHITECTURAL CLOSE-UP"
              direction="Architectural close-up highlighting precision engineering, curtain wall glass joints, and clean structural lines."
              aspectRatio="16/9"
              height="280px"
              blueprintMode={blueprintMode}
            />
          </div>
        </div>
      </section>

      {/* SECTION 1: COMPANY PROFILE (WHO WE ARE) */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid var(--border-dim)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '40px', alignItems: 'flex-start' }}>
            <div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '16px' }}>Who We Are</h2>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--text-main)', marginBottom: '16px' }}>
                Lampag specializes in premium aluminium window, door, and façade systems for modern architectural projects. We deliver innovative solutions that combine engineering expertise, quality craftsmanship, and contemporary design to meet the needs of residential, commercial, and mixed-use developments.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#64748b' }}>
                Lampag is a German manufacturer of precision-engineered aluminium window, door, and façade systems. As a member of Alu Group, Lampag combines German manufacturing excellence with decades of industry expertise, strengthened by the integration of a regional team with over 50 years of experience in aluminium construction.
              </p>
            </div>

            <div style={{
              padding: '28px',
              backgroundColor: '#f8fafc',
              border: '1px solid var(--border-dim)',
              borderRadius: 'var(--radius-md)'
            }}>
              <div style={{
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                color: 'var(--lampag-green)',
                letterSpacing: '0.06em',
                marginBottom: '16px',
                textTransform: 'uppercase'
              }}>
                COMPANY AT A GLANCE
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ borderBottom: '1px dashed var(--border-dim)', paddingBottom: '12px' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--lampag-green)' }}>700+</div>
                  <div style={{ fontSize: '0.88rem', color: '#64748b' }}>Completed projects worldwide across residential & commercial sectors.</div>
                </li>
                <li style={{ borderBottom: '1px dashed var(--border-dim)', paddingBottom: '12px' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--lampag-green)' }}>70,000 m²</div>
                  <div style={{ fontSize: '0.88rem', color: '#64748b' }}>Annual production capacity with advanced Schüco CNC automation.</div>
                </li>
                <li>
                  <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--lampag-green)' }}>50+ Years</div>
                  <div style={{ fontSize: '0.88rem', color: '#64748b' }}>Regional team engineering expertise in aluminium construction.</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 & 3: PHILOSOPHY & APPROACH */}
      <section className="section-padding" style={{ backgroundColor: '#f4f8f5', borderBottom: '1px solid var(--border-dim)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '32px' }}>
            <div style={{
              padding: '32px',
              backgroundColor: '#ffffff',
              border: '1px solid var(--border-dim)',
              borderRadius: 'var(--radius-md)'
            }}>
              <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--lampag-green)' }}>[OUR PHILOSOPHY]</span>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginTop: '6px', marginBottom: '12px', color: 'var(--text-main)' }}>Driven by Your Vision</h3>
              <p style={{ fontSize: '0.98rem', color: '#64748b', lineHeight: 1.6 }}>
                We believe that every successful project starts with understanding our clients' vision. By combining technical expertise with practical project experience, we create aluminium solutions that meet architectural ambitions while ensuring efficiency, reliability, and long-term value.
              </p>
            </div>

            <div style={{
              padding: '32px',
              backgroundColor: '#ffffff',
              border: '1px solid var(--border-dim)',
              borderRadius: 'var(--radius-md)'
            }}>
              <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--lampag-green)' }}>[OUR APPROACH]</span>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginTop: '6px', marginBottom: '12px', color: 'var(--text-main)' }}>Collaborative & Detail-Oriented</h3>
              <p style={{ fontSize: '0.98rem', color: '#64748b', lineHeight: 1.6 }}>
                Every project is unique. We work closely with our clients to understand their objectives and develop solutions that balance architectural design, technical performance, and commercial practicality. Through open communication and careful planning, we deliver with standard excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: 8 CORE STRENGTHS GRID */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid var(--border-dim)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)' }}>What Defines Us</h2>
            <p style={{ color: '#64748b', marginTop: '6px' }}>Our core operational pillars ensuring reliability, precision, and building longevity.</p>
          </div>

          <div className="grid-4">
            {strengths.map((item, index) => (
              <div key={index} style={{
                padding: '20px',
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-dim)',
                borderRadius: 'var(--radius-md)',
                transition: 'border-color 0.2s ease'
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
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>{item.title}</h4>
                <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: SUSTAINABILITY & COMMITMENT */}
      <section className="section-padding" style={{ backgroundColor: '#eaf5ed' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '32px' }}>
            <div style={{ padding: '28px', backgroundColor: '#ffffff', border: '1px solid #c6e6cd', borderRadius: 'var(--radius-md)' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--lampag-green-dark)', marginBottom: '10px' }}>Sustainable Construction</h3>
              <p style={{ fontSize: '0.95rem', color: '#334155', lineHeight: 1.6 }}>
                Lampag is committed to supporting sustainable construction through durable, energy-efficient aluminium systems that contribute to long-lasting building performance. By combining modern engineering with high-quality materials, we help create buildings that are both functional and future-ready.
              </p>
            </div>

            <div style={{ padding: '28px', backgroundColor: '#ffffff', border: '1px solid #c6e6cd', borderRadius: 'var(--radius-md)' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--lampag-green-dark)', marginBottom: '10px' }}>Our Commitment</h3>
              <p style={{ fontSize: '0.95rem', color: '#334155', lineHeight: 1.6 }}>
                Quality, precision, and trust are at the core of everything we do. Whether supporting a residential development or a large-scale commercial project, Lampag is committed to delivering innovative aluminium solutions that meet the highest expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
