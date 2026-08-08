import React, { useState } from 'react';
import WireframePlaceholder from '../components/WireframePlaceholder';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const PortfolioPage = ({ setSelectedProject }) => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: t.portfolio.tabAll },
    { id: 'residential', label: t.portfolio.tabRes },
    { id: 'commercial', label: t.portfolio.tabCom },
    { id: 'hospitality', label: t.portfolio.tabHosp }
  ];

  const projects = [
    {
      id: 1,
      title: 'Hamburg Commercial Office Hub',
      location: 'Hamburg, Germany',
      sectorId: 'commercial',
      sector: t.portfolio.tabCom,
      systems: 'Schüco UCC 65 SG Curtain Wall & Custom Sliding Doors',
      summary: 'Integrated slim profile sliding doors maximizing natural light while maintaining high thermal performance and structural rigidity for high-wind loads.'
    },
    {
      id: 2,
      title: 'Dortmund Modern Residential Complex',
      location: 'Dortmund, Germany',
      sectorId: 'residential',
      sector: t.portfolio.tabRes,
      systems: 'Schüco AWS 75.SI+ & AD 75 FD Folding Doors',
      summary: 'Energy-efficient triple-glazed aluminium window profiles engineered for acoustic sound insulation and Passive House thermal efficiency.'
    },
    {
      id: 3,
      title: 'Frankfurt Grand Hospitality Tower',
      location: 'Frankfurt, Germany',
      sectorId: 'hospitality',
      sector: t.portfolio.tabHosp,
      systems: 'Schüco AF UDC 80 Unitized Façade & AWS 75.PD',
      summary: 'Panoramic all-glass unitized façade panels pre-assembled offsite for fast architectural cladding and noise reduction in central business district.'
    },
    {
      id: 4,
      title: 'Bremen Municipal Technical Institute',
      location: 'Bremen, Germany',
      sectorId: 'hospitality',
      sector: t.portfolio.tabHosp,
      systems: 'Schüco FWS 60.SG & AWS 70.HI Windows',
      summary: 'High-durability structural glazing curtain wall installed with automated ventilation actuators and solar shading integration.'
    },
    {
      id: 5,
      title: 'Munich Luxury Villa Residence',
      location: 'Munich, Germany',
      sectorId: 'residential',
      sector: t.portfolio.tabRes,
      systems: 'Schüco ASE 67 PD Sliding Doors & Glass Railings',
      summary: 'Floor-to-ceiling panoramic sliding doors with flush sill thresholds creating seamless indoor-outdoor transitions.'
    },
    {
      id: 6,
      title: 'Cologne Corporate Headquarters',
      location: 'Cologne, Germany',
      sectorId: 'commercial',
      sector: t.portfolio.tabCom,
      systems: 'Schüco FWS 50.SG & ADS 75.SI Entrance Systems',
      summary: 'Custom heavy-traffic entrance system with burglar resistance RC3 and structural glazing glass fins.'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.sectorId === filter);

  return (
    <div>
      {/* HERO BANNER */}
      <section style={{
        backgroundColor: '#0a140e',
        color: '#ffffff',
        padding: '72px 0',
        borderBottom: '1px solid #1b3323',
        backgroundImage: 'linear-gradient(rgba(10, 20, 14, 0.82), rgba(10, 20, 14, 0.92)), url("https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1600&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '480px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '48px' }}>
            <div>
              <span style={{
                color: 'var(--lampag-green)',
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-mono)'
              }}>
                {t.portfolio.heroTag}
              </span>
              <h1 style={{
                fontSize: '3rem',
                fontWeight: 800,
                lineHeight: 1.12,
                color: '#ffffff',
                margin: '12px 0 20px 0',
                letterSpacing: '-0.03em'
              }}>
                {t.portfolio.heroTitle}
              </h1>
              <p style={{
                fontSize: '1.15rem',
                color: '#cbd5e1',
                lineHeight: 1.6,
                marginBottom: '24px',
                maxWidth: '540px'
              }}>
                {t.portfolio.heroDesc}
              </p>

              <div style={{
                marginTop: '20px',
                padding: '12px 18px',
                backgroundColor: 'rgba(57, 158, 82, 0.15)',
                borderLeft: '3px solid var(--lampag-green)',
                borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                fontSize: '0.9rem',
                color: '#e2e8f0'
              }}>
                <strong style={{ color: 'var(--lampag-green)' }}>Architectural Track Record:</strong> 700+ completed projects engineered across Europe and worldwide.
              </div>
            </div>

            <div>
              <WireframePlaceholder
                title="PORTFOLIO HERO PHOTO GRID"
                direction="Grid or hero photo showcasing completed residential & commercial building projects."
                aspectRatio="4/3"
                height="360px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO GRID SHOWCASE */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          {/* Filter Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '36px' }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`btn-pill-green-outline ${filter === cat.id ? 'btn-pill-green' : ''}`}
                style={{
                  fontSize: '0.88rem',
                  padding: '8px 18px',
                  ...(filter === cat.id ? { color: '#ffffff' } : { color: 'var(--text-main)', borderColor: 'var(--border-dim)' })
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid-2" style={{ gap: '28px' }}>
            {filteredProjects.map(proj => (
              <div 
                key={proj.id} 
                style={{
                  padding: '24px',
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--border-dim)',
                  borderRadius: 'var(--radius-md)',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
                onClick={() => setSelectedProject(proj)}
              >
                <WireframePlaceholder
                  title={`PROJECT: ${proj.title}`}
                  direction="High-quality photo of completed project."
                  aspectRatio="16/9"
                  height="220px"
                />

                <div style={{ marginTop: '20px' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '10px', alignItems: 'center' }}>
                    <span style={{
                      backgroundColor: 'var(--lampag-green-subtle)',
                      color: 'var(--lampag-green-dark)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-sm)'
                    }}>
                      {proj.sector}
                    </span>
                    <span style={{ fontSize: '0.82rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={13} color="var(--lampag-green)" /> {proj.location}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
                    {proj.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.5, marginBottom: '16px' }}>
                    {proj.summary}
                  </p>

                  <div style={{ 
                    padding: '12px 14px', 
                    backgroundColor: '#f8fafc', 
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-dim)',
                    fontSize: '0.82rem',
                    marginBottom: '16px'
                  }}>
                    <strong style={{ color: 'var(--text-main)' }}>Systems Used:</strong>{' '}
                    <span style={{ color: 'var(--lampag-green-dark)', fontWeight: 700 }}>{proj.systems}</span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button className="btn-pill-green" style={{ fontSize: '0.82rem', padding: '6px 14px' }}>
                      {t.portfolio.btnDetails} <ArrowUpRight size={14} />
                    </button>
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
