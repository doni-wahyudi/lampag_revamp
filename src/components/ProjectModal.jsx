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

        <div className="wf-tag" style={{ marginBottom: '12px' }}>
          [ARCHITECTURAL REFERENCE LIGHTBOX]
        </div>

        <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
          {project.title}
        </h3>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <MapPin size={14} color="var(--border-strong)" /> <strong>Location:</strong> {project.location}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Building size={14} color="var(--border-strong)" /> <strong>Sector:</strong> {project.sector}
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
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Layers size={16} /> Engineering Summary:
          </h4>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: 1.6 }}>
            {project.summary}
          </p>
        </div>

        <div style={{ 
          backgroundColor: 'var(--bg-subtle)', 
          padding: '16px', 
          borderRadius: 'var(--radius-sm)',
          border: '1px dashed var(--border-strong)',
          marginBottom: '20px'
        }}>
          <div style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Wrench size={14} /> Systems & Profiles Deployed:
          </div>
          <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--blueprint-blue)' }}>
            {project.systems}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button className="btn btn-primary" onClick={onClose}>
            Close Portfolio View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
