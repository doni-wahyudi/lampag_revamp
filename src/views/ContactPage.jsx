import React, { useState } from 'react';
import { Mail, Phone, Printer, MapPin, Globe, Share2, Upload, CheckCircle2, Send } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import contactHeroImg from '../assets/hero/contact_hero.webp';

const ContactPage = () => {
  const { langCode, t } = useLanguage();
  const isGerman = langCode === 'DE';
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    projectType: 'Residential',
    message: '',
    fileName: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* HERO BANNER */}
      <section 
        className="hero-full-banner"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 20, 14, 0.84), rgba(10, 20, 14, 0.94)), url("${contactHeroImg}")`
        }}
      >
        <div className="container">
          <div className="hero-content-wrapper">
            <div>
              <span style={{
                color: 'var(--lampag-green)',
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-mono)'
              }}>
                {t.contact.heroTag}
              </span>
              <h1 style={{
                fontSize: '3rem',
                fontWeight: 800,
                lineHeight: 1.12,
                color: '#ffffff',
                margin: '12px 0 20px 0',
                letterSpacing: '-0.03em'
              }}>
                {t.contact.heroTitle}
              </h1>
              <p style={{
                fontSize: '1.15rem',
                color: '#cbd5e1',
                lineHeight: 1.6,
                marginBottom: '24px',
                maxWidth: '540px'
              }}>
                {t.contact.heroDesc}
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
                <strong style={{ color: 'var(--lampag-green)' }}>Engineering Desk:</strong> Our technical drafting team is ready to analyze CAD/BIM specifications and issue project estimations.
              </div>
            </div>

            <div>
              <div style={{
                position: 'relative',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: '0 20px 45px rgba(0,0,0,0.45)',
                border: '1px solid rgba(57, 158, 82, 0.45)'
              }}>
                <img 
                  src={contactHeroImg} 
                  alt={isGerman 
                    ? "Moderner Unternehmenshauptsitz und Architekturgebäude am Neuen Wall Hamburg" 
                    : "Modern architectural corporate headquarters building entrance on Neuer Wall Hamburg"} 
                  style={{ width: '100%', height: '340px', objectFit: 'cover', display: 'block' }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(10, 20, 14, 0.95))',
                  padding: '16px 20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <div style={{ color: '#ffffff', fontSize: '0.92rem', fontWeight: 800 }}>
                      {isGerman ? 'LAMPAG Zentrale Neuer Wall Hamburg' : 'LAMPAG Headquarters Neuer Wall Hamburg'}
                    </div>
                    <div style={{ color: '#94a3b8', fontSize: '0.74rem', fontFamily: 'var(--font-mono)' }}>
                      {isGerman ? 'Persönliche Beratung & Technische Kalkulation' : 'Personal Consultation & Estimations'}
                    </div>
                  </div>
                  <div style={{
                    backgroundColor: 'var(--lampag-green)',
                    color: '#ffffff',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-sm)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase'
                  }}>
                    {isGerman ? 'Zentrale' : 'Hamburg HQ'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM & DIRECT DETAILS SECTION */}
      <section className="screen-section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '40px', alignItems: 'flex-start' }}>
            {/* Contact Form Box */}
            <div style={{
              padding: '32px',
              backgroundColor: '#ffffff',
              border: '1px solid var(--border-dim)',
              borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow-wf)'
            }}>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>{t.contact.formTitle}</h2>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '24px' }}>
                {t.contact.formSubtitle}
              </p>

              {submitted ? (
                <div style={{ 
                  padding: '32px 24px', 
                  backgroundColor: '#eaf5ed', 
                  border: '1.5px solid var(--lampag-green)', 
                  borderRadius: 'var(--radius-md)',
                  textAlign: 'center'
                }}>
                  <CheckCircle2 size={42} color="var(--lampag-green)" style={{ marginBottom: '12px' }} />
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--lampag-green-dark)', marginBottom: '6px' }}>{t.contact.successTitle}</h3>
                  <p style={{ fontSize: '0.92rem', color: '#334155' }}>
                    {t.contact.successDesc}
                  </p>
                  <button 
                    className="btn-pill-green" 
                    style={{ marginTop: '20px', fontSize: '0.88rem' }}
                    onClick={() => setSubmitted(false)}
                  >
                    {t.contact.btnAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '6px', color: 'var(--text-main)' }}>
                      {t.contact.fieldName}
                    </label>
                    <input 
                      type="text"
                      required
                      placeholder="e.g. Alexander Weber"
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-dim)',
                        fontSize: '0.92rem',
                        fontFamily: 'var(--font-sans)',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div className="grid-2" style={{ gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '6px', color: 'var(--text-main)' }}>
                        Email Address *
                      </label>
                      <input 
                        type="email"
                        required
                        placeholder="weber@architects.de"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-dim)',
                          fontSize: '0.92rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '6px', color: 'var(--text-main)' }}>
                        Company / Firm Name
                      </label>
                      <input 
                        type="text"
                        placeholder="Weber Architekten GmbH"
                        value={formData.company}
                        onChange={e => setFormData({ ...formData, company: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-dim)',
                          fontSize: '0.92rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '6px', color: 'var(--text-main)' }}>
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={e => setFormData({ ...formData, projectType: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-dim)',
                        fontSize: '0.92rem',
                        backgroundColor: '#ffffff'
                      }}
                    >
                      <option value="Residential">Residential Development</option>
                      <option value="Commercial">Commercial & Office</option>
                      <option value="Mixed-Use">Mixed-Use Development</option>
                      <option value="Other">Other Architectural Application</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '6px', color: 'var(--text-main)' }}>
                      Message / Project Inquiry *
                    </label>
                    <textarea 
                      rows={4}
                      required
                      placeholder="Specify profile preferences, glazing dimensions, or project scope..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-dim)',
                        fontSize: '0.92rem',
                        fontFamily: 'var(--font-sans)',
                        outline: 'none'
                      }}
                    />
                  </div>

                  {/* File Attachment */}
                  <div style={{
                    border: '1.5px dashed var(--border-strong)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '16px',
                    textAlign: 'center',
                    backgroundColor: '#f8fafc'
                  }}>
                    <Upload size={20} color="var(--lampag-green)" style={{ marginBottom: '4px' }} />
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)' }}>
                      File Attachment Option
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                      Upload CAD drawings / project specifications PDF (Max 25MB)
                    </div>
                  </div>

                  <button type="submit" className="btn-pill-green" style={{ marginTop: '8px', width: '100%' }}>
                    Send Project Inquiry <Send size={16} />
                  </button>
                </form>
              )}
            </div>

            {/* Direct Contact Info Box */}
            <div>
              <div style={{
                padding: '28px',
                backgroundColor: '#f8fafc',
                border: '1px solid var(--border-dim)',
                borderRadius: 'var(--radius-md)',
                marginBottom: '24px'
              }}>
                <span style={{
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  color: 'var(--lampag-green)',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase'
                }}>
                  DIRECT CONTACT SPECIFICATIONS
                </span>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '4px', marginBottom: '20px' }}>
                  {t.contact.deskTitle}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', fontSize: '0.92rem' }}>
                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{ width: '32px', height: '32px', backgroundColor: 'var(--lampag-green)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <MapPin size={16} color="#ffffff" />
                    </div>
                    <div>
                      <strong style={{ color: 'var(--text-main)' }}>Hamburg Office:</strong><br />
                      Neuer Wall 2-6, 20354 Hamburg, Germany
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{ width: '32px', height: '32px', backgroundColor: 'var(--lampag-green)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <MapPin size={16} color="#ffffff" />
                    </div>
                    <div>
                      <strong style={{ color: 'var(--text-main)' }}>Dortmund Facility:</strong><br />
                      Strümpenbusch 3, 44357 Dortmund, Germany
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                    <div style={{ width: '32px', height: '32px', backgroundColor: 'var(--lampag-green)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Phone size={16} color="#ffffff" />
                    </div>
                    <div>
                      <strong style={{ color: 'var(--text-main)' }}>{t.contact.phoneLabel || 'Phone:'}</strong> +49 040 571 996 390
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                    <div style={{ width: '32px', height: '32px', backgroundColor: 'var(--lampag-green)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Printer size={16} color="#ffffff" />
                    </div>
                    <div>
                      <strong style={{ color: 'var(--text-main)' }}>{t.contact.faxLabel || 'Fax:'}</strong> +49 040 571 996 381
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                    <div style={{ width: '32px', height: '32px', backgroundColor: 'var(--lampag-green)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Mail size={16} color="#ffffff" />
                    </div>
                    <div>
                      <strong style={{ color: 'var(--text-main)' }}>{t.contact.emailLabel || 'Email:'}</strong> info@lampag.com
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px dashed var(--border-dim)' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b', marginBottom: '10px', textTransform: 'uppercase' }}>
                    {t.contact.socialLabel || 'SOCIAL MEDIA:'}
                  </div>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <a
                      href="https://linkedin.com/company/lampag-gmbh"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: 'var(--lampag-green-subtle)',
                        color: 'var(--lampag-green-dark)',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        padding: '6px 12px',
                        borderRadius: 'var(--radius-sm)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        textDecoration: 'none'
                      }}
                    >
                      <Globe size={13} /> linkedin.com/company/lampag-gmbh
                    </a>
                    <a
                      href="https://instagram.com/lampagcom"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: 'var(--lampag-green-subtle)',
                        color: 'var(--lampag-green-dark)',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        padding: '6px 12px',
                        borderRadius: 'var(--radius-sm)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        textDecoration: 'none'
                      }}
                    >
                      <Share2 size={13} /> @lampagcom
                    </a>
                  </div>
                </div>
              </div>

              {/* Interactive Location Map */}
              <div style={{
                borderRadius: 'var(--radius-sm)',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                border: '1px solid var(--border-dim)',
                height: '190px'
              }}>
                <iframe
                  title="LAMPAG GmbH Neuer Wall Hamburg Location"
                  src="https://maps.google.com/maps?q=Neuer%20Wall%202-6,%2020354%20Hamburg,%20Germany&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
