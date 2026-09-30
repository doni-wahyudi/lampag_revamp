import React from 'react';
import { X, MapPin, Building, Wrench, Layers, Calendar, UserCheck, ExternalLink, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const ProjectModal = ({ project, onClose }) => {
  const { langCode } = useLanguage();
  const isGerman = langCode === 'DE';

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 1050 }}>
      <div 
        className="modal-content" 
        style={{ 
          maxWidth: '820px', 
          maxHeight: '90vh', 
          overflowY: 'auto',
          borderRadius: 'var(--radius-md)',
          padding: '28px'
        }} 
        onClick={e => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        {/* Top Tag & Official Badge */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
          <span style={{
            fontSize: '0.74rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
            color: 'var(--lampag-green)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase'
          }}>
            {isGerman ? 'ARCHITEKTUR-REFERENZ // LAMPAG' : 'ARCHITECTURAL REFERENCE // LAMPAG'}
          </span>
          {project.isOfficialLampag && (
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              backgroundColor: 'var(--lampag-green)',
              color: '#ffffff',
              fontSize: '0.72rem',
              fontWeight: 800,
              padding: '3px 10px',
              borderRadius: '20px',
              letterSpacing: '0.02em'
            }}>
              <ShieldCheck size={13} />
              {isGerman ? 'Verifizierte LAMPAG-Referenz' : 'Verified LAMPAG Reference'}
            </span>
          )}
        </div>

        <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px', letterSpacing: '-0.02em' }}>
          {isGerman ? (project.titleDE || project.title) : project.title}
        </h3>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px', fontSize: '0.86rem', color: '#64748b', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <MapPin size={15} color="var(--lampag-green)" /> 
            <strong>{isGerman ? 'Standort:' : 'Location:'}</strong> {isGerman ? (project.locationDE || project.location) : project.location}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Building size={15} color="var(--lampag-green)" /> 
            <strong>{isGerman ? 'Sektor:' : 'Sector:'}</strong> {isGerman ? (project.sectorDE || project.sector) : project.sector}
          </div>
          {project.completion && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Calendar size={15} color="var(--lampag-green)" /> 
              <strong>{isGerman ? 'Fertigstellung:' : 'Completion:'}</strong> {project.completion}
            </div>
          )}
          {project.architect && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <UserCheck size={15} color="var(--lampag-green)" /> 
              <strong>{isGerman ? 'Architektur:' : 'Architect:'}</strong> {isGerman ? (project.architectDE || project.architect) : project.architect}
            </div>
          )}
        </div>

        {/* Project Image Banner */}
        <div style={{
          position: 'relative',
          borderRadius: 'var(--radius-sm)',
          overflow: 'hidden',
          marginBottom: '22px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          border: '1px solid var(--border-dim)'
        }}>
          <img 
            src={project.image} 
            alt={isGerman ? (project.titleDE || project.title) : project.title} 
            style={{ width: '100%', maxHeight: '360px', objectFit: 'cover', display: 'block' }}
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80';
            }}
          />
        </div>

        {/* Summary Description */}
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)' }}>
            <Layers size={17} color="var(--lampag-green)" /> 
            {isGerman ? 'Projektdetails & Ausführung:' : 'Engineering Summary:'}
          </h4>
          <p style={{ fontSize: '0.94rem', color: '#334155', lineHeight: 1.65 }}>
            {isGerman ? (project.summaryDE || project.summary) : project.summary}
          </p>
        </div>

        {/* Technical Specifications Grid */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '12px',
          marginBottom: '24px'
        }}>
          <div style={{
            backgroundColor: '#eaf5ed', 
            padding: '14px 16px', 
            borderRadius: 'var(--radius-sm)',
            border: '1px solid #c6e6cd'
          }}>
            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--lampag-green-dark)', textTransform: 'uppercase', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Wrench size={13} color="var(--lampag-green)" /> 
              {isGerman ? 'Eingesetzte Schüco-Systeme:' : 'Schüco Systems Deployed:'}
            </div>
            <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--lampag-green-dark)' }}>
              {isGerman ? (project.systemsDE || project.systems) : project.systems}
            </div>
          </div>

          {(project.glass || project.glassArea) && (
            <div style={{
              backgroundColor: '#f8fafc', 
              padding: '14px 16px', 
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-dim)'
            }}>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#475569', textTransform: 'uppercase', marginBottom: '4px' }}>
                {isGerman ? 'Verglasung / Spezifikation:' : 'Glazing & Performance:'}
              </div>
              <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1e293b' }}>
                {isGerman ? (project.glassDE || project.glass) : project.glass}
                {project.glassArea && ` • ${project.glassArea}`}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', paddingTop: '12px', borderTop: '1px solid var(--border-dim)' }}>
          {project.lampagUrl ? (
            <a 
              href={project.lampagUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--lampag-green-dark)',
                fontSize: '0.86rem',
                fontWeight: 700,
                textDecoration: 'none'
              }}
            >
              <span>{isGerman ? 'Auf lampag.com ansehen' : 'View on lampag.com'}</span>
              <ExternalLink size={14} />
            </a>
          ) : <div />}

          <button className="btn-pill-green" onClick={onClose} style={{ padding: '8px 22px', fontSize: '0.88rem' }}>
            {isGerman ? 'Schließen' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
