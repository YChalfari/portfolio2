import './About.css';

const stack = [
  { label: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'SQL'] },
  { label: 'Frontend', items: ['React', 'CSS', 'Redux', 'MobX'] },
  { label: 'Backend', items: ['Node.js', 'FastAPI', 'WebRTC'] },
  { label: 'Data, infrastructure & tools', items: ['SQL', 'MongoDB', 'Redis', 'Docker', 'Firebase', 'Git', 'GitHub Actions', 'Google Cloud'] },
  { label: 'AI', items: ['Cursor', 'Claude Code', 'Agentic workflows'] },
  { label: 'Testing', items: ['Jest', 'pytest'] },
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
          <h3>About me</h3>
          <p>
            I enjoy building products from end to end: turning requirements into working
            features, connecting frontend interfaces to backend services, and making sure
            the result behaves as expected.
          </p>
          <p>
            At Faintlines, I worked across React, Python, databases, automated testing,
            and internal developer tools. I also helped onboard developers and document
            the team’s development processes.
          </p>
          <p>I speak English and Hebrew natively.</p>
          <h3>How I use AI</h3>
          <p>
            I use AI as an engineering tool, both in my development workflow and in the
            products I build. I use Cursor to navigate unfamiliar code, explore possible
            implementations, and develop changes that I can verify against existing
            behavior and tests.
          </p>
          <p>I’ve also built AI-powered features and automation pipelines using external model APIs.</p>
          <p>
            On Peek a Phone, I worked on an automated daily headline feature: a model
            selects headlines, filters inappropriate content, and generates a fictional
            headline for players to identify.
          </p>
          <p>
            In Family Recipes, AI can turn a recipe link or screenshot into a draft,
            suggest recipe modifications, and answer questions about recipes the user is
            authorized to access. Suggested changes remain a preview until accepted, and
            recipe history allows previous versions to be restored.
          </p>
        </div>
        <div className="stack">
          <h3 className="stack-title">Technical skills</h3>
          <dl>
            {stack.map((group) => (
              <div key={group.label}>
                <dt>{group.label}</dt>
                <dd>{group.items.join(' · ')}</dd>
              </div>
            ))}
            <div>
              <dt>Additional experience</dt>
              <dd>Next.js · Laravel · PHP</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default About;
