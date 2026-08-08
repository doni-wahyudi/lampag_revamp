import React, { useState, useRef } from 'react';
import WireframePlaceholder from '../components/WireframePlaceholder';
import { MapPin, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const PortfolioPage = ({ setSelectedProject }) => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const gridTopRef = useRef(null);

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
      systems: 'Schüco UCC 65 SG Curtain Wall & Sliding Doors',
      summary: 'Slim profile sliding doors maximizing natural light while maintaining high thermal performance and structural rigidity.'
    },
    {
      id: 2,
      title: 'Dortmund Modern Residential Complex',
      location: 'Dortmund, Germany',
      sectorId: 'residential',
      sector: t.portfolio.tabRes,
      systems: 'Schüco AWS 75.SI+ & AD 75 FD Folding Doors',
      summary: 'Energy-efficient triple-glazed aluminium window profiles engineered for acoustic sound insulation and Passive House efficiency.'
    },
    {
      id: 3,
      title: 'Frankfurt Grand Hospitality Tower',
      location: 'Frankfurt, Germany',
      sectorId: 'hospitality',
      sector: t.portfolio.tabHosp,
      systems: 'Schüco AF UDC 80 Unitized Façade & AWS 75.PD',
      summary: 'Panoramic all-glass unitized façade panels pre-assembled offsite for fast architectural cladding in central business district.'
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
    },
    {
      id: 7,
      title: 'Stuttgart Innovation & Tech Campus',
      location: 'Stuttgart, Germany',
      sectorId: 'commercial',
      sector: t.portfolio.tabCom,
      systems: 'Schüco FWS 60.CV & AWS 90.SI+ Windows',
      summary: 'Concealed vent façade elements delivering architectural transparency, thermal acoustic comfort, and integrated automation.'
    },
    {
      id: 8,
      title: 'Düsseldorf Lakeside Luxury Penthouse',
      location: 'Düsseldorf, Germany',
      sectorId: 'residential',
      sector: t.portfolio.tabRes,
      systems: 'Schüco ASE 80.HI & Panoramic Glass Balustrades',
      summary: 'High thermal insulation sliding systems with motorized drive and zero-threshold flush accessibility facing open water views.'
    },
    {
      id: 9,
      title: 'Berlin Central Boutique Hotel',
      location: 'Berlin, Germany',
      sectorId: 'hospitality',
      sector: t.portfolio.tabHosp,
      systems: 'Schüco AWS 75 BS.SI+ & ADS 90.SI Doors',
      summary: 'Acoustic-rated soundproof block window systems engineered for urban center tranquility and Class RC3 security.'
    },
    {
      id: 10,
      title: 'Hanover Medical Research Pavilion',
      location: 'Hanover, Germany',
      sectorId: 'hospitality',
      sector: t.portfolio.tabHosp,
      systems: 'Schüco FWS 50 & AWS 70.HI Antibacterial Profiles',
      summary: 'Hygienic structural glazing façade with custom solar shading louvres and precision thermal insulation.'
    },
    {
      id: 11,
      title: 'Nuremberg Green Energy Headquarters',
      location: 'Nuremberg, Germany',
      sectorId: 'commercial',
      sector: t.portfolio.tabCom,
      systems: 'Schüco UCC 65 SG & Integrated Photovoltaic BIPV',
      summary: 'Sustainable unitized glass envelope with custom BAPV panels achieving net-zero building energy targets.'
    },
    {
      id: 12,
      title: 'Leipzig Urban Residential Quarter',
      location: 'Leipzig, Germany',
      sectorId: 'residential',
      sector: t.portfolio.tabRes,
      systems: 'Schüco AWS 65 & ADS 65 Entry Systems',
      summary: 'Modern multi-family residential development featuring durable aluminium balcony doors and energy-efficient double glazing.'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.sectorId === filter);

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / itemsPerPage));
  const validCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (validCurrentPage - 1) * itemsPerPage;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

  const handleFilterChange = (categoryId) => {
    setFilter(categoryId);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      if (gridTopRef.current) {
        gridTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div>
      {/* HERO BANNER - FULL SCREEN 1 */}
      <section 
        className="hero-full-banner"
        style={{
          backgroundImage: 'linear-gradient(rgba(10, 20, 14, 0.82), rgba(10, 20, 14, 0.92)), url("https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=2000&q=85")'
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
                {t.portfolio.heroTag}
              </span>
              <h1 style={{
                fontSize: '2.8rem',
                fontWeight: 800,
                lineHeight: 1.15,
                color: '#ffffff',
                margin: '10px 0 16px 0',
                letterSpacing: '-0.03em'
              }}>
                {t.portfolio.heroTitle}
              </h1>
              <p style={{
                fontSize: '1.08rem',
                color: '#cbd5e1',
                lineHeight: 1.6,
                marginBottom: '20px',
                maxWidth: '520px'
              }}>
                {t.portfolio.heroDesc}
              </p>

              <div style={{
                padding: '10px 16px',
                backgroundColor: 'rgba(57, 158, 82, 0.15)',
                borderLeft: '3px solid var(--lampag-green)',
                borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                fontSize: '0.86rem',
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
                height="320px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO GRID SHOWCASE - FULL SCREEN 2 */}
      <section className="screen-section" style={{ backgroundColor: '#ffffff' }} ref={gridTopRef}>
        <div className="container">
          {/* Header Controls: Filters + Count */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            marginBottom: '24px'
          }}>
            {/* Filter Buttons with High Contrast */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {categories.map(cat => {
                const isActive = filter === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleFilterChange(cat.id)}
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

            {/* Results Count Badge */}
            <div style={{
              fontSize: '0.82rem',
              color: '#64748b',
              fontWeight: 600,
              backgroundColor: '#f8fafc',
              padding: '6px 12px',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--border-dim)'
            }}>
              Showing {filteredProjects.length === 0 ? 0 : startIndex + 1}–{Math.min(startIndex + itemsPerPage, filteredProjects.length)} of {filteredProjects.length} projects
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid-3" style={{ gap: '20px', alignItems: 'stretch' }}>
            {paginatedProjects.map(proj => (
              <div 
                key={proj.id} 
                style={{
                  padding: '18px',
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--border-dim)',
                  borderRadius: 'var(--radius-md)',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  boxSizing: 'border-box',
                  boxShadow: 'var(--shadow-wf)'
                }}
                onClick={() => setSelectedProject(proj)}
              >
                <div style={{ width: '100%', height: '140px', overflow: 'hidden', borderRadius: 'var(--radius-sm)' }}>
                  <WireframePlaceholder
                    title={`PROJECT: ${proj.title}`}
                    direction="High-quality photo of completed project."
                    aspectRatio="16/9"
                    height="140px"
                  />
                </div>

                <div style={{ marginTop: '14px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '8px', alignItems: 'center' }}>
                      <span style={{
                        backgroundColor: 'var(--lampag-green-subtle)',
                        color: 'var(--lampag-green-dark)',
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        padding: '2px 8px',
                        borderRadius: 'var(--radius-sm)'
                      }}>
                        {proj.sector}
                      </span>
                      <span style={{ fontSize: '0.78rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <MapPin size={12} color="var(--lampag-green)" /> {proj.location}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '6px', minHeight: '2.6rem', lineHeight: 1.25 }}>
                      {proj.title}
                    </h3>

                    <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.45, marginBottom: '10px', minHeight: '48px' }}>
                      {proj.summary}
                    </p>

                    <div style={{ 
                      padding: '8px 10px', 
                      backgroundColor: '#f8fafc', 
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-dim)',
                      fontSize: '0.76rem',
                      marginBottom: '14px',
                      minHeight: '38px',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <div>
                        <strong style={{ color: 'var(--text-main)' }}>Systems:</strong>{' '}
                        <span style={{ color: 'var(--lampag-green-dark)', fontWeight: 700 }}>{proj.systems}</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '4px' }}>
                    <button className="btn-pill-green" style={{ fontSize: '0.8rem', padding: '6px 14px', width: '100%' }}>
                      {t.portfolio.btnDetails} <ArrowUpRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Clean Interactive Pagination Controls */}
          {totalPages > 1 && (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              marginTop: '28px',
              paddingTop: '16px',
              borderTop: '1px solid var(--border-dim)'
            }}>
              {/* Prev Button */}
              <button
                onClick={() => handlePageChange(validCurrentPage - 1)}
                disabled={validCurrentPage === 1}
                aria-label="Previous Page"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-dim)',
                  backgroundColor: validCurrentPage === 1 ? '#f1f5f9' : '#ffffff',
                  color: validCurrentPage === 1 ? '#94a3b8' : 'var(--text-main)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: validCurrentPage === 1 ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s ease',
                  opacity: validCurrentPage === 1 ? 0.6 : 1
                }}
              >
                <ChevronLeft size={16} />
              </button>

              {/* Numbered Page Buttons */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid',
                    borderColor: validCurrentPage === pageNum ? 'var(--lampag-green)' : 'var(--border-dim)',
                    backgroundColor: validCurrentPage === pageNum ? 'var(--lampag-green)' : '#ffffff',
                    color: validCurrentPage === pageNum ? '#ffffff' : 'var(--text-main)',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: validCurrentPage === pageNum ? '0 4px 12px rgba(57, 158, 82, 0.25)' : 'none'
                  }}
                >
                  {pageNum}
                </button>
              ))}

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(validCurrentPage + 1)}
                disabled={validCurrentPage === totalPages}
                aria-label="Next Page"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-dim)',
                  backgroundColor: validCurrentPage === totalPages ? '#f1f5f9' : '#ffffff',
                  color: validCurrentPage === totalPages ? '#94a3b8' : 'var(--text-main)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: validCurrentPage === totalPages ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s ease',
                  opacity: validCurrentPage === totalPages ? 0.6 : 1
                }}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
