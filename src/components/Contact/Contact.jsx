import './Contact.css';

const resumeUrl = `${import.meta.env.BASE_URL}Itzik-Halfari-CV.pdf`;

const links = [
  { name: 'Email', href: 'mailto:chalfari@gmail.com', label: 'chalfari@gmail.com' },
  { name: 'GitHub', href: 'https://github.com/YChalfari', label: 'YChalfari' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/itzik-chalfari', label: 'itzik-chalfari' },
  { name: 'Resume', href: resumeUrl, label: 'Download PDF', download: true },
];

const references = [
  {
    name: 'Tzach Yarimi',
    detail: 'CTO, Faintlines · former manager',
    href: 'https://www.linkedin.com/in/tzachyarimi/',
  },
  {
    name: 'Mordi Ben',
    detail: 'Instructor, Appleseeds',
    href: 'https://www.linkedin.com/in/mormben/',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <header className="section-heading">
        <span className="section-index">04</span>
        <h2>Contact</h2>
        <span className="section-hebrew" lang="he">קשר</span>
      </header>
      <h3 className="contact-heading">Let’s talk</h3>
      <p className="contact-lead">
        I’m looking for full-stack development opportunities in Israel or remotely. I’m also open to roles where my development and testing experience would be useful.
      </p>
      <p className="contact-lead">Email is the quickest way to reach me.</p>
      <ul className="contact-links">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              download={link.download ? 'Itzik-Halfari-CV.pdf' : undefined}
              target={link.href.startsWith('mailto:') || link.download ? undefined : '_blank'}
              rel="noopener noreferrer"
            >
              <span>{link.name}</span>
              <strong>{link.label}</strong>
            </a>
          </li>
        ))}
      </ul>
      <div className="contact-references">
        <h3>References</h3>
        <p>Happy to make an introduction. LinkedIn is the right place to start.</p>
        <ul>
          {references.map((reference) => (
            <li key={reference.name}>
              <a href={reference.href} target="_blank" rel="noopener noreferrer">
                <span>{reference.name}</span>
                <small>{reference.detail}</small>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
