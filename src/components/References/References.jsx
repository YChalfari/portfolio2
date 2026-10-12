import ScrollIndicator from '../ScrollIndicator/ScrollIndicator';
import './References.css';

const References = () => {
  const references = [
    {
      name: 'Tzach Yarimi',
      title: 'CTO',
      relationship: 'Former Manager',
      company: 'Faintlines',
      linkedinUrl: 'https://www.linkedin.com/in/tzachyarimi/',
      email: 'tzach@faintlines.com',
      phone: '+972 (050) 952-9937',
    },
    /*
    {
      name: 'Gilad Landau',
      title: 'CTO',
      relationship: 'Former Manager',
      company: 'iintoo',
      linkedinUrl: 'https://www.linkedin.com/in/giladlandau/',
      phone: '+972 (052) 667-7889',
    },
    */
    {
      name: 'Mordi Ben',
      title: 'Instructor',
      relationship: 'Former Instructor',
      company: 'Appleseeds',
      linkedinUrl: 'https://www.linkedin.com/in/mormben/',
      phone: '+972 (054) 555-3008',
    },
  ];

  return (
    <section id="references" className="references section">
      <h2 className="section-title">
        <span className="section-number">04.</span> References
      </h2>
      <div className="references-content">
        <p className="references-description">
          Professional references available upon request. The following individuals can provide insights into my work, character, and professional capabilities.
        </p>
        <div className="references-grid">
          {references.map((reference, index) => (
            <div key={index} className="reference-card">
              <div className="reference-header">
                <h3 className="reference-name">{reference.name}</h3>
                <span className="reference-relationship">{reference.relationship}</span>
              </div>
              <div className="reference-details">
                <p className="reference-title">{reference.title}</p>
                <p className="reference-company">{reference.company}</p>
              </div>
              <div className="reference-contact">
                {reference.email && (
                  <a 
                    href={`mailto:${reference.email}`}
                    className="reference-link"
                    aria-label={`Email ${reference.name}`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <span>{reference.email}</span>
                  </a>
                )}
                {reference.linkedinUrl && (
                  <a 
                    href={reference.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reference-link"
                    aria-label={`View ${reference.name} on LinkedIn`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span>LinkedIn Profile</span>
                  </a>
                )}
                {reference.phone && (
                  <a 
                    href={`tel:${reference.phone.replace(/[^\d+]/g, '')}`}
                    className="reference-link"
                    aria-label={`Call ${reference.name}`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>{reference.phone}</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <ScrollIndicator currentSectionId="references" />
    </section>
  );
};

export default References;

