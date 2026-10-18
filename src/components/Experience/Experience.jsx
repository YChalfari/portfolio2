import ExperienceItem from './ExperienceItem';
import './Experience.css';

const experiences = [
  {
    company: 'Faintlines',
    companyUrl: 'https://faintlines.com',
    role: 'Full-Stack Developer',
    note: 'Worked on Peek a Phone and The Founder, contributing to product development, internal tooling, and content-production workflows.',
    date: '2022–2025',
    achievements: [
      'I built the React features and Python services for the games, and kept them running.',
      'A lot of the backend work was internal: CLI tools and dashboards.',
      'Part of the content pipeline uses AI, with models helping produce game content.',
      'When something looked wrong, I used analytics events and Sentry to see what players were doing and where it broke.',
      'I also worked on monetization, the in-game economy, and A/B tests.',
      'Tests are Jest on the frontend and pytest on the Python side.',
      'I onboarded developers, wrote down how we worked, and reviewed code.',
      'The team was spread across time zones. I took bugs and features, and suggested a different approach when I saw one.',
      'I also made some of the game content and the videos.',
    ],
    techStack: ['React', 'Python', 'MongoDB', 'Docker', 'Jest', 'pytest', 'Sentry'],
    links: [
      { label: 'Company', url: 'https://faintlines.com' },
      { label: 'Peek a Phone', url: 'https://play.google.com/store/apps/details?id=com.peekaphone.app&hl=en' },
      { label: 'The Founder', url: 'https://play.google.com/store/apps/details?id=com.faintlines.investomania&hl=en' },
    ],
  },
  {
    company: 'iintoo',
    companyUrl: 'https://iintoo.com',
    role: 'Full-Stack Intern',
    date: '2022',
    achievements: [
      'I led a small team of interns on a form builder, with conditional logic and validation.',
      'The frontend was React and Redux, with Laravel and SQL behind it.',
    ],
    techStack: ['React', 'Redux', 'Laravel', 'SQL'],
    links: [
      { label: 'Company', url: 'https://iintoo.com' },
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience section">
      <header className="section-heading">
        <span className="section-index">02</span>
        <h2>Experience</h2>
        <span className="section-hebrew" lang="he">ניסיון</span>
      </header>
      <div className="experience-timeline">
        {experiences.map((experience) => (
          <ExperienceItem key={experience.company} experience={experience} />
        ))}
      </div>
      <div className="education">
        <p className="education-kicker">Education</p>
        <h3>Appleseeds — Full-Stack Development Program</h3>
        <p className="education-date">2021–2022</p>
        <p>Full-time development program focused on JavaScript, React, Node.js, HTML, and CSS, with frequent hands-on projects.</p>
      </div>
    </section>
  );
};

export default Experience;
