import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, CheckCircle, FileText, ExternalLink, ChevronLeft, ChevronRight, Sliders, Send, Layers } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const ProductModal = ({ product, onClose }) => {
  const { langCode } = useLanguage();
  const isGerman = langCode === 'DE';
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Reset active image when product changes
  useEffect(() => {
    setActiveImageIndex(0);
  }, [product]);

  if (!product) return null;

  const defaultSchuecoUrl = isGerman 
    ? 'https://www.schueco.com/de/architekten/produkte' 
    : 'https://www.schueco.com/de-en/architects/products';
  const targetUrl = (isGerman ? product.schuecoUrlDE : product.schuecoUrlEN) || product.schuecoUrl || defaultSchuecoUrl;

  const imagesList = product.images && product.images.length > 0 
    ? product.images 
    : (product.imageUrl ? [product.imageUrl] : []);

  const currentImage = imagesList[activeImageIndex] || product.imageUrl;

  const specText = isGerman ? (product.specDE || product.spec) : (product.spec || product.description);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        style={{ maxWidth: '740px', padding: '24px 28px' }} 
        onClick={e => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <span style={{
            fontSize: '0.75rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
            color: 'var(--lampag-green)',
            letterSpacing: '0.04em'
          }}>
            {product.isCustom 
              ? (isGerman ? '[SONDERKONSTRUKTION / MASSANFERTIGUNG]' : '[CUSTOM ARCHITECTURAL SOLUTION]')
              : '[OFFICIAL SCHÜCO PROFILE SPECIFICATION]'}
          </span>
          {product.series && (
            <span style={{
              fontSize: '0.68rem',
              backgroundColor: '#e2e8f0',
              color: '#475569',
              fontWeight: 700,
              padding: '2px 6px',
              borderRadius: 'var(--radius-sm)'
            }}>
              {product.series}
            </span>
          )}
        </div>

        <h3 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '6px', color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
          {isGerman && product.nameDE ? product.nameDE : product.name}
        </h3>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px', 
          color: 'var(--lampag-green-dark)', 
          fontWeight: 700,
          fontSize: '0.86rem',
          marginBottom: '18px' 
        }}>
          {product.isCustom ? (
            <>
              <Layers size={16} color="var(--lampag-green)" /> {isGerman ? 'Maßgeschneiderte Sonderlösung | LAMPAG Ingenieurbau' : 'Custom Architectural Solution | LAMPAG Engineering'}
            </>
          ) : (
            <>
              <ShieldCheck size={16} color="var(--lampag-green)" /> {product.categoryName || product.category || 'Aluminium Profile System'} | Certified Schüco Partner
            </>
          )}
        </div>

        {/* Product Image & Gallery View */}
        {currentImage ? (
          <div style={{ marginBottom: '20px' }}>
            <div style={{
              position: 'relative',
              height: '280px',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              border: '1px solid var(--border-dim)',
              backgroundColor: '#0d1a12',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img
                src={currentImage}
                alt={`${product.name} - ${product.category || 'Aluminium System'} technical profile cross-section and specification`}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />

              {/* Prev / Next buttons if multiple images */}
              {imagesList.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImageIndex((prev) => (prev === 0 ? imagesList.length - 1 : prev - 1))}
                    style={{
                      position: 'absolute',
                      left: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(0,0,0,0.6)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer'
                    }}
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <button
                    onClick={() => setActiveImageIndex((prev) => (prev === imagesList.length - 1 ? 0 : prev + 1))}
                    style={{
                      position: 'absolute',
                      right: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(0,0,0,0.6)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer'
                    }}
                    aria-label="Next image"
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              )}

              {/* Bottom tag */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(0,0,0,0.75))',
                padding: '8px 16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{ color: '#ffffff', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                  {product.name} [{activeImageIndex + 1}/{imagesList.length}]
                </span>
                <span style={{
                  backgroundColor: 'var(--lampag-green)',
                  color: '#ffffff',
                  fontSize: '0.65rem',
                  fontWeight: 800,
                  padding: '2px 6px',
                  borderRadius: '2px'
                }}>
                  {product.isCustom ? (isGerman ? 'LAMPAG SONDERFERTIGUNG' : 'CUSTOM FABRICATION') : 'SCHÜCO ORIGINAL ASSET'}
                </span>
              </div>
            </div>

            {/* Thumbnail Gallery Strip */}
            {imagesList.length > 1 && (
              <div style={{
                display: 'flex',
                gap: '8px',
                marginTop: '10px',
                overflowX: 'auto',
                paddingBottom: '4px'
              }}>
                {imagesList.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    style={{
                      border: activeImageIndex === idx ? '2px solid var(--lampag-green)' : '1px solid #cbd5e1',
                      borderRadius: 'var(--radius-sm)',
                      padding: 0,
                      width: '56px',
                      height: '56px',
                      overflow: 'hidden',
                      backgroundColor: '#f8fafc',
                      cursor: 'pointer',
                      flexShrink: 0
                    }}
                  >
                    <img src={imgUrl} alt={`${product.name} architectural detail view ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div style={{ 
            height: '160px', 
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
            <Sliders size={28} color="var(--lampag-green)" style={{ marginBottom: '6px' }} />
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--lampag-green-dark)' }}>
              [CAD / SECTION PROFILE CROSS-SECTION DIAGRAM]
            </div>
            <span style={{ fontSize: '0.76rem', color: '#64748b', marginTop: '4px' }}>
              Technical cross-section detailing profile depth, thermal break, and gasket arrangement.
            </span>
          </div>
        )}

        <p style={{ fontSize: '0.94rem', color: '#334155', lineHeight: 1.6, marginBottom: '18px' }}>
          {specText}
        </p>

        {/* Technical Key Parameters Grid or Custom Engineering Notice */}
        {product.isCustom ? (
          <div style={{
            backgroundColor: '#f8fafc',
            border: '1.5px dashed var(--lampag-green)',
            borderRadius: 'var(--radius-md)',
            padding: '18px 20px',
            marginBottom: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{
                fontSize: '0.72rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 800,
                color: 'var(--lampag-green-dark)',
                backgroundColor: 'rgba(57, 158, 82, 0.12)',
                padding: '3px 10px',
                borderRadius: 'var(--radius-pill)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase'
              }}>
                {isGerman ? 'PROJEKTBEZOGENE SPEZIFIKATION' : 'INDIVIDUAL PROJECT SPECIFICATION'}
              </span>
            </div>
            <h4 style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '6px' }}>
              {isGerman ? 'Abstimmung nach Kunden- & Architekturanforderung' : 'Engineered & Discussed Per Customer Request'}
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
              {isGerman ? product.customSpecNoteDE : product.customSpecNote}
            </p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '10px',
            marginBottom: '18px'
          }}>
            {product.depth && (
              <div style={{ backgroundColor: '#f1f5f9', padding: '8px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '0.7rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>{isGerman ? 'BAUTIEFE' : 'BASIC DEPTH'}</div>
                <div style={{ fontSize: '0.86rem', fontWeight: 800, color: 'var(--text-main)' }}>{product.depth}</div>
              </div>
            )}

            {product.faceWidth && (
              <div style={{ backgroundColor: '#f1f5f9', padding: '8px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '0.7rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>{isGerman ? 'ANSICHTSBREITE' : 'FACE WIDTH'}</div>
                <div style={{ fontSize: '0.86rem', fontWeight: 800, color: 'var(--text-main)' }}>{product.faceWidth}</div>
              </div>
            )}

            {product.uValue && (
              <div style={{ backgroundColor: 'var(--lampag-green-subtle)', padding: '8px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid #c6e6cd' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--lampag-green-dark)', fontFamily: 'var(--font-mono)' }}>{isGerman ? 'WÄRMEDÄMMUNG' : 'THERMAL VALUE'}</div>
                <div style={{ fontSize: '0.86rem', fontWeight: 800, color: 'var(--lampag-green-dark)' }}>{product.uValue}</div>
              </div>
            )}

            {product.soundReduction && (
              <div style={{ backgroundColor: '#f1f5f9', padding: '8px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '0.7rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>{isGerman ? 'SCHALLSCHUTZ' : 'SOUND REDUCTION'}</div>
                <div style={{ fontSize: '0.86rem', fontWeight: 800, color: 'var(--text-main)' }}>{product.soundReduction}</div>
              </div>
            )}

            {product.burglarResistance && (
              <div style={{ backgroundColor: '#f1f5f9', padding: '8px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '0.7rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>{isGerman ? 'EINBRUCHSCHUTZ' : 'SECURITY'}</div>
                <div style={{ fontSize: '0.86rem', fontWeight: 800, color: 'var(--text-main)' }}>{product.burglarResistance}</div>
              </div>
            )}

            {product.glassThickness && (
              <div style={{ backgroundColor: '#f1f5f9', padding: '8px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '0.7rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>{isGerman ? 'GLASDICKE' : 'MAX GLAZING'}</div>
                <div style={{ fontSize: '0.86rem', fontWeight: 800, color: 'var(--text-main)' }}>{product.glassThickness}</div>
              </div>
            )}
          </div>
        )}

        {/* Technical Features Checklist */}
        {((isGerman && product.featuresDE) || product.features) && (
          <div style={{ 
            border: '1px solid #c6e6cd', 
            borderRadius: 'var(--radius-md)', 
            padding: '16px 18px',
            backgroundColor: '#eaf5ed',
            marginBottom: '22px'
          }}>
            <h4 style={{ fontSize: '0.88rem', fontWeight: 800, marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--lampag-green-dark)' }}>
              <FileText size={16} color="var(--lampag-green)" /> {isGerman ? 'Wesentliche Leistungsmerkmale:' : 'Key Engineering Features:'}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.86rem', color: '#1b3323' }}>
              {((isGerman && product.featuresDE) || product.features).map((feat, fIdx) => (
                <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <CheckCircle size={15} color="var(--lampag-green)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', gap: '10px' }}>
          <button className="btn-pill-green-outline" onClick={onClose} style={{ padding: '9px 20px', fontSize: '0.88rem' }}>
            {isGerman ? 'Schließen' : 'Close Specification'}
          </button>
          
          {product.isCustom ? (
            <a
              href={`mailto:info@lampag.de?subject=${encodeURIComponent(isGerman ? `Projektanfrage: ${product.nameDE || product.name}` : `Custom Project Inquiry: ${product.name}`)}`}
              className="btn-pill-green"
              style={{ 
                padding: '9px 22px', 
                fontSize: '0.88rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(57, 158, 82, 0.35)',
                cursor: 'pointer'
              }}
            >
              <Send size={15} />
              <span>{isGerman ? 'Projektanfrage stellen' : 'Inquire for Custom Project'}</span>
            </a>
          ) : (
            <a
              href={targetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill-green"
              style={{ 
                padding: '9px 20px', 
                fontSize: '0.88rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>{isGerman ? 'Offizielle Schüco Produktseite öffnen' : 'Open Schüco Product Page'}</span>
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
