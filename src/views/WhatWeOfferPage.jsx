import React from 'react';
import WireframePlaceholder from '../components/WireframePlaceholder';
import { FileCode, Settings, Users, ShieldCheck, Home, Building2, Hotel, GraduationCap, Stethoscope, Landmark, ArrowRight } from 'lucide-react';

const WhatWeOfferPage = ({ setActivePage, blueprintMode }) => {
  const services = [
    {
      icon: <FileCode size={28} color="var(--blueprint-blue)" />,
      title: 'Technical Consultation',
      desc: 'Early-stage technical guidance to define project requirements, structural feasibility, and system profiles.'
    },
    {
      icon: <Settings size={28} color="var(--blueprint-blue)" />,
      title: 'Engineering & Drafting',
      desc: 'Detailed CAD/BIM drawings, structural calculations, thermal and acoustic performance data, and technical specifications.'
    },
    {
      icon: <Users size={28} color="var(--blueprint-blue)" />,
      title: 'Project Coordination',
      desc: 'Seamless collaboration with contractors and project managers for smooth on-site execution and logistics.'
    },
    {
      icon: <ShieldCheck size={28} color="var(--blueprint-blue)" />,
      title: 'Installation Support',
      desc: 'Expert installation and technical oversight provided by our in-house crews and trusted external partners to ensure system integrity.'
    }
  ];

  const industries = [
    {
      icon: <Home size={22} color="var(--text-main)" />,
      title: 'Residential Developments',
      desc: 'Premium window and door solutions focused on thermal comfort, acoustic insulation, and modern living.'
    },
    {
      icon: <Building2 size={22} color="var(--text-main)" />,
      title: 'Commercial & Office Buildings',
      desc: 'High-durability façade and entrance systems optimized for heavy usage and energy efficiency.'
    },
    {
      icon: <Hotel size={22} color="var(--text-main)" />,
      title: 'Hotels & Hospitality',
      desc: 'Elegant, noise-reducing architectural systems that enhance guest experience and aesthetic appeal.'
    },
    {
      icon: <GraduationCap size={22} color="var(--text-main)" />,
      title: 'Educational Facilities',
      desc: 'Safe, durable, and low-maintenance systems built to withstand high activity while maximizing daylight.'
    },
    {
      icon: <Stethoscope size={22} color="var(--text-main)" />,
      title: 'Healthcare Facilities',
      desc: 'Hygienic, functional, and secure window and door solutions designed for specialized environments.'
    },
    {
      icon: <Landmark size={22} color="var(--text-main)" />,
      title: 'Public Buildings & Mixed-Use',
      desc: 'Versatile curtain wall and custom solutions tailored to large-scale municipal architecture.'
    }
  ];

  const deliveryProcess = [
    { step: '01', title: 'Initial Contact', desc: 'Reaching out & submitting project inquiry specifications.' },
    { step: '02', title: 'Project Consultation', desc: 'Aligning on technical & architectural goals and budget constraints.' },
    { step: '03', title: 'Technical Drafting', desc: 'Preparing detailed CAD/BIM shop drawings & structural math.' },
    { step: '04', title: 'Production Approval', desc: 'Final sign-off & client technical verification.' },
    { step: '05', title: 'Manufacturing & Fabrication', desc: 'Precision crafting of aluminium systems with Schüco CNC machinery.' }
  ];

  return (
    <div>
      {/* HERO BANNER */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-dim)' }}>
        <div className="container">
          <div className="wf-tag" style={{ marginBottom: '16px' }}>
            [WHAT WE OFFER - HERO BANNER]
          </div>

          <div className="grid-2" style={{ alignItems: 'center', gap: '40px' }}>
            <div>
              <h1 style={{ fontSize: '2.4rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '16px' }}>
                Comprehensive Project Support
              </h1>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Partnering with you from early planning through design, engineering, and final execution.
              </p>

              <div className="spec-box" style={{ marginTop: '24px' }}>
                <strong>Lifecycle Support:</strong> End-to-end technical guidance, CAD/BIM engineering, CNC manufacturing & installation oversight.
              </div>
            </div>

            <WireframePlaceholder
              title="TECHNICAL DRAWINGS & BLUEPRINTS HERO"
              direction="Technical drawings/blueprints overlaid with an engineering team reviewing glass/aluminium installation."
              aspectRatio="16/9"
              height="300px"
              blueprintMode={blueprintMode}
            />
          </div>
        </div>
      </section>

      {/* SERVICE OVERVIEW & BREAKDOWN */}
      <section className="section-padding" style={{ borderBottom: '1px solid var(--border-dim)' }}>
        <div className="container">
          <div className="wf-tag" style={{ marginBottom: '12px' }}>
            [3.1.1 SERVICE OVERVIEW & 3.1.2 DETAILED SERVICE BREAKDOWN]
          </div>

          <div className="section-header" style={{ maxWidth: '800px' }}>
            <h2>End-to-End Technical Expertise</h2>
            <p style={{ marginTop: '12px', fontSize: '1.05rem', color: 'var(--text-main)', lineHeight: 1.7 }}>
              Lampag supports clients throughout the entire project lifecycle with professional engineering, technical expertise, and an experienced in-house service team. Our collaborative approach ensures every solution is carefully developed, installed, and supported.
            </p>
          </div>

          <div className="grid-2" style={{ marginTop: '32px' }}>
            {services.map((item, idx) => (
              <div key={idx} className="wf-box" style={{ padding: '24px' }}>
                <div style={{ marginBottom: '12px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-dim)' }}>
        <div className="container">
          <div className="wf-tag" style={{ marginBottom: '12px' }}>
            [3.1.3 INDUSTRIES WE SERVE]
          </div>

          <div className="section-header">
            <h2>Applications Across Sectors</h2>
            <p>Adaptable aluminium solutions engineered for diverse structural requirements.</p>
          </div>

          <div className="grid-3">
            {industries.map((ind, idx) => (
              <div key={idx} className="wf-box" style={{ padding: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <div style={{ padding: '8px', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)' }}>
                    {ind.icon}
                  </div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700 }}>{ind.title}</h4>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT DELIVERY PROCESS */}
      <section className="section-padding">
        <div className="container">
          <div className="wf-tag" style={{ marginBottom: '12px' }}>
            [3.1.4 OUR PROJECT DELIVERY PROCESS]
          </div>

          <div className="section-header">
            <h2>Our Project Delivery Process</h2>
            <p>Structured, transparent engineering workflow from initial consultation to manufacturing delivery.</p>
          </div>

          <div className="grid-3" style={{ gap: '20px' }}>
            {deliveryProcess.map((proc, idx) => (
              <div key={idx} className="wf-box" style={{ padding: '24px', backgroundColor: 'var(--bg-surface)' }}>
                <div style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '1.8rem', 
                  fontWeight: 800, 
                  color: 'var(--blueprint-blue)',
                  marginBottom: '8px'
                }}>
                  {proc.step}
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '6px' }}>{proc.title}</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>{proc.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <button className="btn btn-primary" onClick={() => setActivePage('contact')}>
              Initiate Project Delivery Process <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeOfferPage;
