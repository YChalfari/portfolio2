import './Contact.css';

const links = [
  { name: 'Email', href: 'mailto:chalfari@gmail.com', label: 'chalfari@gmail.com' },
  { name: 'GitHub', href: 'https://github.com/YChalfari', label: 'YChalfari' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/itzik-chalfari', label: 'itzik-chalfari' },
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
      <p className="contact-lead">
        I’m looking for a full-stack role in Israel or remote. The fastest way to reach me is email.
      </p>
      <ul className="contact-links">
        {links.map((link) => (
          <li key={link.name}>
            <a href={link.href} target={link.href.startsWith('mailto:') ? undefined : '_blank'} rel="noopener noreferrer">
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
