import React from 'react';

const WireframePlaceholder = ({ 
  title = "IMAGE PLACEHOLDER", 
  direction = "Visual direction from blueprint...",
  aspectRatio = "16/9",
  height = "240px",
  blueprintMode = false 
}) => {
  return (
    <div 
      className="wf-box" 
      style={{ 
        height, 
        width: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '16px',
        backgroundColor: blueprintMode ? 'rgba(2, 132, 199, 0.04)' : 'var(--bg-subtle)',
        border: blueprintMode ? '1.5px dashed #0284c7' : '1.5px dashed #94a3b8',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Corner crosshairs for wireframe effect */}
      <div style={{ position: 'absolute', top: 6, left: 6, fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#94a3b8' }}>+</div>
      <div style={{ position: 'absolute', top: 6, right: 6, fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#94a3b8' }}>+</div>
      <div style={{ position: 'absolute', bottom: 6, left: 6, fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#94a3b8' }}>+</div>
      <div style={{ position: 'absolute', bottom: 6, right: 6, fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#94a3b8' }}>+</div>

      <div className="wf-tag" style={{ marginBottom: '8px' }}>
        📷 {title} [{aspectRatio}]
      </div>
      
      <p style={{ 
        fontSize: '0.8rem', 
        color: 'var(--text-muted)', 
        textAlign: 'center', 
        maxWidth: '85%',
        fontStyle: 'italic',
        lineHeight: 1.4
      }}>
        {direction}
      </p>

      {blueprintMode && (
        <span style={{ 
          position: 'absolute', 
          bottom: '8px', 
          right: '8px', 
          fontFamily: 'var(--font-mono)', 
          fontSize: '0.65rem',
          color: '#0284c7'
        }}>
          ASPECT: {aspectRatio}
        </span>
      )}
    </div>
  );
};

export default WireframePlaceholder;
