import './About.css';

const stack = [
  { label: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'SQL'] },
  { label: 'Product', items: ['React', 'FastAPI', 'Node.js'] },
  { label: 'Data and ops', items: ['MongoDB', 'Redis', 'Docker', 'Git'] },
  { label: 'Tests', items: ['Jest', 'pytest'] },
];

const About = () => {
  return (
    <section id="about" className="about section">
      <header className="section-heading">
        <span className="section-index">01</span>
        <h2>About</h2>
        <span className="section-hebrew" lang="he">אודות</span>
      </header>
      <div className="about-layout">
        <div className="about-copy">
          <p>
            I like the part of a product that has to stay correct. Who can see a record,
            what gets saved, and what happens when two people edit it at once.
          </p>
          <p>
            At Faintlines that meant React features, Python services, CLI tools, and the
            tests around them. I onboarded developers and wrote the process down, so the
            next person could pick the work up.
          </p>
          <h3>How I work with models</h3>
          <p>
            On Family Recipes the useful parts are an i18n foundation with a Hebrew
            translation, and AI that drafts, suggests, and answers from the book. A model
            can draft. A person accepts it before it becomes the record.
          </p>
        </div>
        <dl className="stack">
          {stack.map((group) => (
            <div key={group.label}>
              <dt>{group.label}</dt>
              <dd>{group.items.join(' · ')}</dd>
            </div>
          ))}
          <div>
            <dt>Also</dt>
            <dd>Laravel, PHP, Next.js, Firebase</dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default About;
