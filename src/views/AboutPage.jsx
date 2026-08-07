import React from 'react';
import WireframePlaceholder from '../components/WireframePlaceholder';
import { ShieldCheck, CheckCircle2, Factory, Award, Building, Wrench, RefreshCw, Handshake } from 'lucide-react';

const AboutPage = ({ blueprintMode }) => {
  const strengths = [
    {
      icon: <ShieldCheck size={24} color="var(--blueprint-blue)" />,
      title: 'High-Performance Schüco Systems',
      desc: 'Engineered to meet demanding architectural and building-performance requirements.'
    },
    {
      icon: <Wrench size={24} color="var(--blueprint-blue)" />,
      title: 'Design-to-Fabrication Engineering',
      desc: 'Technical expertise integrated into every stage from draft to assembly.'
    },
    {
      icon: <Building size={24} color="var(--blueprint-blue)" />,
      title: 'Project-Specific Solutions',
      desc: 'Tailored advice and custom profile developments to meet specific project needs.'
    },
    {
      icon: <Award size={24} color="var(--blueprint-blue)" />,
      title: 'Building Performance Engineering',
      desc: 'Optimising thermal, acoustic, air-tightness and weather performance for long-lasting systems.'
    },
    {
      icon: <Factory size={24} color="var(--blueprint-blue)" />,
      title: 'Precision Manufacturing',
      desc: 'Powered by advanced Schüco CNC machinery, delivering exceptional consistency.'
    },
    {
      icon: <CheckCircle2 size={24} color="var(--blueprint-blue)" />,
      title: 'Rigorous Quality Assurance',
      desc: 'Uncompromised quality control from materials inspection to final installation.'
    },
    {
      icon: <RefreshCw size={24} color="var(--blueprint-blue)" />,
      title: 'Reliable Project Coordination',
      desc: 'On-time delivery and structured coordination with site contractors.'
    },
    {
      icon: <Handshake size={24} color="var(--blueprint-blue)" />,
      title: 'Long-Term Service & Partnership',
      desc: 'Building trusted relationships built on reliability, service, and performance.'
    }
  ];

  return (
    <div>
      {/* HERO BANNER */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-dim)' }}>
        <div className="container">
          <div className="wf-tag" style={{ marginBottom: '16px' }}>
            [ABOUT US - HERO BANNER]
          </div>

          <div className="grid-2" style={{ alignItems: 'center', gap: '40px' }}>
            <div>
              <h1 style={{ fontSize: '2.4rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '16px' }}>
                Building Trust Through Precision & Innovation
              </h1>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Dedicated to supporting modern architectural projects with end-to-end aluminium engineering solutions.
              </p>

              <div className="spec-box" style={{ marginTop: '24px' }}>
                <strong>German Manufacturing Excellence:</strong> Member of Alu Group with 70,000 m² annual capacity & 700+ worldwide projects.
              </div>
            </div>

            <WireframePlaceholder
              title="ABOUT HERO ARCHITECTURAL CLOSE-UP"
              direction="Architectural close-up highlighting precision engineering, curtain wall glass joints, and clean structural lines."
              aspectRatio="16/9"
              height="300px"
              blueprintMode={blueprintMode}
            />
          </div>
        </div>
      </section>

      {/* SECTION 1: COMPANY PROFILE (WHO WE ARE) */}
      <section className="section-padding" style={{ borderBottom: '1px solid var(--border-dim)' }}>
        <div className="container">
          <div className="wf-tag" style={{ marginBottom: '12px' }}>
            [SECTION 1: COMPANY PROFILE - WHO WE ARE]
          </div>

          <div className="grid-2" style={{ gap: '40px', alignItems: 'flex-start' }}>
            <div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '16px' }}>Who We Are</h2>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--text-main)', marginBottom: '16px' }}>
                Lampag specializes in premium aluminium window, door, and façade systems for modern architectural projects. We deliver innovative solutions that combine engineering expertise, quality craftsmanship, and contemporary design to meet the needs of residential, commercial, and mixed-use developments.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
                Lampag is a German manufacturer of precision-engineered aluminium window, door, and façade systems. As a member of Alu Group, Lampag combines German manufacturing excellence with decades of industry expertise, strengthened by the integration of a regional team with over 50 years of experience in aluminium construction.
              </p>
            </div>

            <div className="wf-box" style={{ padding: '28px', backgroundColor: 'var(--bg-surface)' }}>
              <div className="wf-tag" style={{ marginBottom: '16px' }}>COMPANY AT A GLANCE</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ borderBottom: '1px dashed var(--border-dim)', paddingBottom: '12px' }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--blueprint-blue)' }}>700+</div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Completed projects worldwide across residential & commercial sectors.</div>
                </li>
                <li style={{ borderBottom: '1px dashed var(--border-dim)', paddingBottom: '12px' }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--blueprint-blue)' }}>70,000 m²</div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Annual production capacity with advanced Schüco CNC automation.</div>
                </li>
                <li>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--blueprint-blue)' }}>50+ Years</div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Regional team engineering expertise in aluminium construction.</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 & 3: PHILOSOPHY & APPROACH */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-dim)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '32px' }}>
            <div className="wf-box" style={{ padding: '32px' }}>
              <div className="wf-tag" style={{ marginBottom: '12px' }}>[SECTION 2: OUR PHILOSOPHY]</div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px' }}>Driven by Your Vision</h3>
              <p style={{ fontSize: '0.98rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                We believe that every successful project starts with understanding our clients' vision. By combining technical expertise with practical project experience, we create aluminium solutions that meet architectural ambitions while ensuring efficiency, reliability, and long-term value.
              </p>
            </div>

            <div className="wf-box" style={{ padding: '32px' }}>
              <div className="wf-tag" style={{ marginBottom: '12px' }}>[SECTION 3: OUR APPROACH]</div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px' }}>Collaborative & Detail-Oriented</h3>
              <p style={{ fontSize: '0.98rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Every project is unique. We work closely with our clients to understand their objectives and develop solutions that balance architectural design, technical performance, and commercial practicality. Through open communication and careful planning, we deliver with standard excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: 8 CORE STRENGTHS GRID */}
      <section className="section-padding" style={{ borderBottom: '1px solid var(--border-dim)' }}>
        <div className="container">
          <div className="wf-tag" style={{ marginBottom: '12px' }}>
            [SECTION 4: WHY LAMPAG - 8 CORE STRENGTHS GRID]
          </div>

          <div className="section-header">
            <h2>What Defines Us</h2>
            <p>Our core operational pillars ensuring reliability, precision, and building longevity.</p>
          </div>

          <div className="grid-4">
            {strengths.map((item, index) => (
              <div key={index} className="wf-box" style={{ padding: '20px' }}>
                <div style={{ marginBottom: '12px' }}>{item.icon}</div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '8px' }}>{item.title}</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: SUSTAINABILITY & COMMITMENT */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="wf-tag" style={{ marginBottom: '12px' }}>
            [SECTION 5: SUSTAINABILITY & COMMITMENT]
          </div>

          <div className="grid-2" style={{ gap: '32px' }}>
            <div className="wf-box" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '10px' }}>Sustainable Construction</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Lampag is committed to supporting sustainable construction through durable, energy-efficient aluminium systems that contribute to long-lasting building performance. By combining modern engineering with high-quality materials, we help create buildings that are both functional and future-ready.
              </p>
            </div>

            <div className="wf-box" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '10px' }}>Our Commitment</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Quality, precision, and trust are at the core of everything we do. Whether supporting a residential development or a large-scale commercial project, Lampag is committed to delivering innovative aluminium solutions that meet the highest expectations.
              </p>
            </div>
          </div>

          {/* HIDDEN SECTION 6 ANNOTATION */}
          <div className="spec-box" style={{ marginTop: '32px', backgroundColor: '#fff7ed', borderColor: '#f97316' }}>
            <strong>Blueprint Note:</strong> Section 6 (News Article Update) is currently hidden per client instructions until news content is provided.
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
