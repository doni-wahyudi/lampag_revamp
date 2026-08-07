import React from 'react';
import { X, ShieldCheck, CheckCircle, FileText, Sliders } from 'lucide-react';

const ProductModal = ({ product, onClose, blueprintMode }) => {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        <div className="wf-tag" style={{ marginBottom: '12px' }}>
          [PRODUCT SPECIFICATION DRAWER]
        </div>

        <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '6px', color: 'var(--text-main)' }}>
          {product.name}
        </h3>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '10px', 
          color: 'var(--blueprint-blue)', 
          fontFamily: 'var(--font-mono)', 
          fontSize: '0.82rem',
          marginBottom: '20px' 
        }}>
          <ShieldCheck size={14} /> Category: {product.category} | Certified Schüco Profile
        </div>

        {/* Wireframe Diagram Placeholder */}
        <div className="wf-box" style={{ 
          height: '180px', 
          backgroundColor: 'var(--bg-subtle)', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center',
          marginBottom: '20px',
          padding: '16px',
          textAlign: 'center'
        }}>
          <Sliders size={32} color="var(--border-strong)" style={{ marginBottom: '8px' }} />
          <div className="wf-tag">[CAD / SECTION PROFILE CROSS-SECTION DIAGRAM]</div>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '4px' }}>
            Technical cross-section detailing profile depth, thermal break, and gasket arrangement.
          </span>
        </div>

        <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: 1.6, marginBottom: '20px' }}>
          {product.description || "Precision-engineered profile system manufactured according to strict German quality standards, providing high thermal insulation, durability, and contemporary architectural aesthetics."}
        </p>

        {/* Technical Specs List */}
        <div style={{ 
          border: '1px solid var(--border-dim)', 
          borderRadius: 'var(--radius-sm)', 
          padding: '16px',
          backgroundColor: 'var(--bg-primary)',
          marginBottom: '20px'
        }}>
          <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FileText size={16} /> Key Technical Parameters:
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle size={14} color="var(--blueprint-blue)" /> Thermal Insulation: High Uf values according to DIN EN ISO 10077-2
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle size={14} color="var(--blueprint-blue)" /> Security Rating: Burglar resistance up to RC3 (ENV 1627)
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle size={14} color="var(--blueprint-blue)" /> Sound Reduction: Acoustic insulation up to 48 dB
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle size={14} color="var(--blueprint-blue)" /> Fabrication: CNC Machined via Schüco Automation Systems
            </li>
          </ul>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
          <button className="btn btn-outline" onClick={onClose}>
            Close Spec View
          </button>
          <button className="btn btn-primary" onClick={() => { alert(`Inquiry initiated for ${product.name}`); onClose(); }}>
            Request CAD / BIM File
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
