import React, { useState } from 'react';
import WireframePlaceholder from '../components/WireframePlaceholder';
import { Mail, Phone, Printer, MapPin, Globe, Share2, Upload, CheckCircle2, Send } from 'lucide-react';

const ContactPage = ({ blueprintMode }) => {
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
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-dim)' }}>
        <div className="container">
          <div className="wf-tag" style={{ marginBottom: '16px' }}>
            [CONTACT - HERO BANNER]
          </div>

          <div className="grid-2" style={{ alignItems: 'center', gap: '40px' }}>
            <div>
              <h1 style={{ fontSize: '2.4rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '16px' }}>
                Get in Touch
              </h1>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Let's discuss your upcoming architectural project or engineering requirements.
              </p>

              <div className="spec-box" style={{ marginTop: '24px' }}>
                <strong>Engineering Desk:</strong> Our technical drafting team is ready to analyze CAD/BIM specifications and issue project estimations.
              </div>
            </div>

            <WireframePlaceholder
              title="CONTACT HERO BRANDING"
              direction="Clean, welcoming contact hero banner with subtle branding elements and structural profile cross-section."
              aspectRatio="16/9"
              height="260px"
              blueprintMode={blueprintMode}
            />
          </div>
        </div>
      </section>

      {/* CONTACT FORM & DIRECT DETAILS SECTION */}
      <section className="section-padding">
        <div className="container">
          <div className="wf-tag" style={{ marginBottom: '16px' }}>
            [6.1 CONTACT FORM & DIRECT DETAILS WIREFRAME]
          </div>

          <div className="grid-2" style={{ gap: '40px', alignItems: 'flex-start' }}>
            {/* Contact Form Box */}
            <div className="wf-box" style={{ padding: '32px', backgroundColor: 'var(--bg-surface)' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '8px' }}>Send Us a Message</h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
                Fill in your project details below to request a technical consultation or quote.
              </p>

              {submitted ? (
                <div style={{ 
                  padding: '24px', 
                  backgroundColor: 'var(--blueprint-bg)', 
                  border: '1.5px solid var(--blueprint-blue)', 
                  borderRadius: 'var(--radius-sm)',
                  textAlign: 'center'
                }}>
                  <CheckCircle2 size={36} color="var(--blueprint-blue)" style={{ marginBottom: '12px' }} />
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '6px' }}>Inquiry Submitted Successfully</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    Thank you, {formData.fullName || 'Partner'}. Our engineering team will review your inquiry and contact you shortly.
                  </p>
                  <button 
                    className="btn btn-outline" 
                    style={{ marginTop: '16px' }}
                    onClick={() => setSubmitted(false)}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                      Full Name *
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
                        fontFamily: 'var(--font-sans)'
                      }}
                    />
                  </div>

                  <div className="grid-2" style={{ gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
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
                          fontSize: '0.92rem'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
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
                          fontSize: '0.92rem'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
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
                        backgroundColor: 'var(--bg-surface)'
                      }}
                    >
                      <option value="Residential">Residential Development</option>
                      <option value="Commercial">Commercial & Office</option>
                      <option value="Mixed-Use">Mixed-Use Development</option>
                      <option value="Other">Other Architectural Application</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
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
                        fontFamily: 'var(--font-sans)'
                      }}
                    />
                  </div>

                  {/* File Attachment Placeholder */}
                  <div style={{
                    border: '1.5px dashed var(--border-strong)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '14px',
                    textAlign: 'center',
                    backgroundColor: 'var(--bg-subtle)'
                  }}>
                    <Upload size={20} color="var(--border-strong)" style={{ marginBottom: '4px' }} />
                    <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                      File Attachment Option
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      Upload CAD drawings / project specifications PDF (Max 25MB)
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ marginTop: '8px' }}>
                    Send Project Inquiry <Send size={15} />
                  </button>
                </form>
              )}
            </div>

            {/* Direct Contact Info Box */}
            <div>
              <div className="wf-box" style={{ padding: '28px', backgroundColor: 'var(--bg-surface)', marginBottom: '24px' }}>
                <div className="wf-tag" style={{ marginBottom: '12px' }}>DIRECT CONTACT SPECIFICATIONS</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px' }}>LAMPAG GmbH Contact Desk</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.92rem' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <MapPin size={18} color="var(--blueprint-blue)" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <strong>Office Locations:</strong><br />
                      Strümpenbusch 3, 44357 Dortmund<br />
                      Neuer Wall 2-6, 20354 Hamburg
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <Mail size={18} color="var(--blueprint-blue)" style={{ flexShrink: 0 }} />
                    <div>
                      <strong>Email:</strong> info@lampag.com
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <Phone size={18} color="var(--blueprint-blue)" style={{ flexShrink: 0 }} />
                    <div>
                      <strong>Telephone:</strong> +49 040 571 996 390
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <Printer size={18} color="var(--blueprint-blue)" style={{ flexShrink: 0 }} />
                    <div>
                      <strong>Fax:</strong> +49 040 571 996 381
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px dashed var(--border-dim)' }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '8px' }}>
                    SOCIAL MEDIA SPECIFICATIONS:
                  </div>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <span className="wf-tag" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Globe size={12} /> linkedin.com/company/lampag-gmbh
                    </span>
                    <span className="wf-tag" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Share2 size={12} /> @lampagcom
                    </span>
                  </div>
                </div>
              </div>

              {/* Map Wireframe Placeholder */}
              <WireframePlaceholder
                title="GEOGRAPHIC LOCATION MAP WIREFRAME"
                direction="Interactive map placeholder showing Hamburg and Dortmund facilities."
                aspectRatio="16/9"
                height="200px"
                blueprintMode={blueprintMode}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
