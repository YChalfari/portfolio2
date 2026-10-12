import TypingAnimation from '../Hero/TypingAnimation';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    'Frontend Development',
    'Backend Development',
    'Full Stack Solutions',
    'Automation Tools',
    'Mobile Development',
  ];

  return (
    <div className="skills">
      <h3 className="skills-title">Skills & Expertise</h3>
      <div className="skills-animation">
        <span className="skills-prefix">Specialized in: </span>
        <TypingAnimation texts={skillCategories} typingSpeed={80} deletingSpeed={40} pauseDuration={2500} />
      </div>
      <div className="skills-grid">
        <div className="skill-category">
          <h4>Languages</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Python</li>
            <li>SQL</li>
          </ul>
        </div>
        <div className="skill-category">
          <h4>Frameworks</h4>
          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Next.js</li>
          </ul>
        </div>
        <div className="skill-category">
          <h4>Tools</h4>
          <ul>
            <li>Git</li>
            <li>Docker</li>
            <li>CI / CD</li>
            <li>MongoDB</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Premiere Pro</li>
          </ul>
        </div>
        <div className="skill-category">
          <h4>AI Tools</h4>
          <ul>
            <li>Cursor</li>
            <li>Claude</li>
            <li>ChatGPT</li>
            <li>Gemini</li>
            <li>Grok</li>
            <li>Perplexity</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;

