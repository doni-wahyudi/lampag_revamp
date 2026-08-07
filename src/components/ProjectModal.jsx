import React from 'react';
import { X, MapPin, Building, Wrench, Layers } from 'lucide-react';
import WireframePlaceholder from './WireframePlaceholder';

const ProjectModal = ({ project, onClose, blueprintMode }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" style={{ maxWidth: '750px' }} onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        <span style={{
          fontSize: '0.75rem',
          fontFamily: 'var(--font-mono)',
          fontWeight: 700,
          color: 'var(--lampag-green)',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          marginBottom: '10px',
          display: 'inline-block'
        }}>
          [ARCHITECTURAL REFERENCE LIGHTBOX]
        </span>

        <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
          {project.title}
        </h3>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '0.85rem', color: '#64748b', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <MapPin size={15} color="var(--lampag-green)" /> <strong>Location:</strong> {project.location}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Building size={15} color="var(--lampag-green)" /> <strong>Sector:</strong> {project.sector}
          </div>
        </div>

        {/* Project Photo Wireframe */}
        <WireframePlaceholder
          title={`PROJECT IMAGE: ${project.title}`}
          direction="High-resolution photography showcasing full architectural façade, window profiles, and clean structural lines."
          aspectRatio="16/9"
          height="280px"
          blueprintMode={blueprintMode}
        />

        <div style={{ margin: '20px 0' }}>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 800, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-main)' }}>
            <Layers size={16} color="var(--lampag-green)" /> Engineering Summary:
          </h4>
          <p style={{ fontSize: '0.95rem', color: '#334155', lineHeight: 1.6 }}>
            {project.summary}
          </p>
        </div>

        <div style={{ 
          backgroundColor: '#eaf5ed', 
          padding: '16px', 
          borderRadius: 'var(--radius-md)',
          border: '1px solid #c6e6cd',
          marginBottom: '20px'
        }}>
          <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--lampag-green-dark)', textTransform: 'uppercase', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Wrench size={14} color="var(--lampag-green)" /> Systems & Profiles Deployed:
          </div>
          <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--lampag-green-dark)' }}>
            {project.systems}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button className="btn-pill-green" onClick={onClose} style={{ padding: '8px 18px', fontSize: '0.85rem' }}>
            Close Portfolio View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
