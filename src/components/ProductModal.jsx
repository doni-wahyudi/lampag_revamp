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
          [PRODUCT SPECIFICATION DRAWER]
        </span>

        <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '6px', color: 'var(--text-main)' }}>
          {product.name}
        </h3>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px', 
          color: 'var(--lampag-green-dark)', 
          fontWeight: 700,
          fontSize: '0.85rem',
          marginBottom: '20px' 
        }}>
          <ShieldCheck size={16} color="var(--lampag-green)" /> Category: {product.category} | Certified Schüco Profile
        </div>

        {/* Wireframe Diagram Placeholder */}
        <div style={{ 
          height: '180px', 
          backgroundColor: 'var(--lampag-green-subtle)', 
          borderRadius: 'var(--radius-md)',
          border: '1px dashed var(--lampag-green)',
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center',
          marginBottom: '20px',
          padding: '16px',
          textAlign: 'center'
        }}>
          <Sliders size={32} color="var(--lampag-green)" style={{ marginBottom: '8px' }} />
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--lampag-green-dark)' }}>
            [CAD / SECTION PROFILE CROSS-SECTION DIAGRAM]
          </div>
          <span style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '4px' }}>
            Technical cross-section detailing profile depth, thermal break, and gasket arrangement.
          </span>
        </div>

        <p style={{ fontSize: '0.95rem', color: '#334155', lineHeight: 1.6, marginBottom: '20px' }}>
          {product.description || "Precision-engineered profile system manufactured according to strict German quality standards, providing high thermal insulation, durability, and contemporary architectural aesthetics."}
        </p>

        {/* Technical Specs List */}
        <div style={{ 
          border: '1px solid #c6e6cd', 
          borderRadius: 'var(--radius-md)', 
          padding: '18px',
          backgroundColor: '#eaf5ed',
          marginBottom: '24px'
        }}>
          <h4 style={{ fontSize: '0.9rem', fontWeight: 800, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--lampag-green-dark)' }}>
            <FileText size={16} color="var(--lampag-green)" /> Key Technical Parameters:
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', color: '#1b3323' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle size={15} color="var(--lampag-green)" /> Thermal Insulation: High Uf values according to DIN EN ISO 10077-2
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle size={15} color="var(--lampag-green)" /> Security Rating: Burglar resistance up to RC3 (ENV 1627)
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle size={15} color="var(--lampag-green)" /> Sound Reduction: Acoustic insulation up to 48 dB
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle size={15} color="var(--lampag-green)" /> Fabrication: CNC Machined via Schüco Automation Systems
            </li>
          </ul>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
          <button className="btn-pill-green-outline" onClick={onClose} style={{ padding: '8px 18px', fontSize: '0.85rem' }}>
            Close Spec View
          </button>
          <button className="btn-pill-green" onClick={() => { alert(`Inquiry initiated for ${product.name}`); onClose(); }} style={{ padding: '8px 18px', fontSize: '0.85rem' }}>
            Request CAD / BIM File
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
