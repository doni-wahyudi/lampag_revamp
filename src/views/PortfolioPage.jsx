import React, { useState } from 'react';
import WireframePlaceholder from '../components/WireframePlaceholder';
import { MapPin, Building, Wrench, ExternalLink } from 'lucide-react';

const PortfolioPage = ({ setSelectedProject, blueprintMode }) => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Hamburg Commercial Office Hub',
      location: 'Hamburg, Germany',
      sector: 'Commercial & Office',
      systems: 'Schüco UCC 65 SG Curtain Wall & Custom Sliding Doors',
      summary: 'Integrated slim profile sliding doors maximizing natural light while maintaining high thermal performance and structural rigidity for high-wind loads.'
    },
    {
      id: 2,
      title: 'Dortmund Modern Residential Complex',
      location: 'Dortmund, Germany',
      sector: 'Residential',
      systems: 'Schüco AWS 75.SI+ & AD 75 FD Folding Doors',
      summary: 'Energy-efficient triple-glazed aluminium window profiles engineered for acoustic sound insulation and Passive House thermal efficiency.'
    },
    {
      id: 3,
      title: 'Frankfurt Grand Hospitality Tower',
      location: 'Frankfurt, Germany',
      sector: 'Hospitality & Public',
      systems: 'Schüco AF UDC 80 Unitized Façade & AWS 75.PD',
      summary: 'Panoramic all-glass unitized façade panels pre-assembled offsite for fast architectural cladding and noise reduction in central business district.'
    },
    {
      id: 4,
      title: 'Bremen Municipal Technical Institute',
      location: 'Bremen, Germany',
      sector: 'Hospitality & Public',
      systems: 'Schüco FWS 60.SG & AWS 70.HI Windows',
      summary: 'High-durability structural glazing curtain wall installed with automated ventilation actuators and solar shading integration.'
    },
    {
      id: 5,
      title: 'Munich Luxury Villa Residence',
      location: 'Munich, Germany',
      sector: 'Residential',
      systems: 'Schüco ASE 67 PD Sliding Doors & Glass Railings',
      summary: 'Floor-to-ceiling panoramic sliding doors with flush sill thresholds creating seamless indoor-outdoor transitions.'
    },
    {
      id: 6,
      title: 'Cologne Corporate Headquarters',
      location: 'Cologne, Germany',
      sector: 'Commercial & Office',
      systems: 'Schüco FWS 50.SG & ADS 75.SI Entrance Systems',
      summary: 'Custom heavy-traffic entrance system with burglar resistance RC3 and structural glazing glass fins.'
    }
  ];

  const categories = ['All', 'Residential', 'Commercial & Office', 'Hospitality & Public'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.sector === filter);

  return (
    <div>
      {/* HERO BANNER */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-dim)' }}>
        <div className="container">
          <div className="wf-tag" style={{ marginBottom: '16px' }}>
            [PORTFOLIO - HERO BANNER]
          </div>

          <div className="grid-2" style={{ alignItems: 'center', gap: '40px' }}>
            <div>
              <h1 style={{ fontSize: '2.4rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '16px' }}>
                Our Project Portfolio
              </h1>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Explore our selection of completed aluminium window, door, and façade implementations.
              </p>

              <div className="spec-box" style={{ marginTop: '24px' }}>
                <strong>Architectural Track Record:</strong> 700+ completed projects engineered across Europe and worldwide.
              </div>
            </div>

            <WireframePlaceholder
              title="PORTFOLIO HERO PHOTO GRID"
              direction="Grid or hero photo showcasing completed residential & commercial building projects."
              aspectRatio="16/9"
              height="280px"
              blueprintMode={blueprintMode}
            />
          </div>
        </div>
      </section>

      {/* PORTFOLIO GRID SHOWCASE */}
      <section className="section-padding">
        <div className="container">
          <div className="wf-tag" style={{ marginBottom: '16px' }}>
            [5.1 PROJECT SHOWCASE GRID & CATEGORY TABS]
          </div>

          {/* Filter Buttons */}
          <div className="filter-tabs">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-tab ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid-2" style={{ gap: '28px' }}>
            {filteredProjects.map(proj => (
              <div 
                key={proj.id} 
                className="wf-box" 
                style={{ padding: '20px', cursor: 'pointer' }}
                onClick={() => setSelectedProject(proj)}
              >
                <WireframePlaceholder
                  title={`PROJECT: ${proj.title}`}
                  direction="High-quality photo of completed project."
                  aspectRatio="16/9"
                  height="220px"
                  blueprintMode={blueprintMode}
                />

                <div style={{ marginTop: '16px' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                    <span className="wf-tag">{proj.sector}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={12} /> {proj.location}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
                    {proj.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '12px' }}>
                    {proj.summary}
                  </p>

                  <div style={{ 
                    padding: '10px 12px', 
                    backgroundColor: 'var(--bg-subtle)', 
                    borderRadius: 'var(--radius-sm)',
                    border: '1px dashed var(--border-dim)',
                    fontSize: '0.82rem'
                  }}>
                    <strong style={{ color: 'var(--text-main)' }}>Systems Used:</strong>{' '}
                    <span style={{ color: 'var(--blueprint-blue)' }}>{proj.systems}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
