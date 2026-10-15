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
      'Built and maintained React features and Python backend services for mobile game products.',
      'Developed backend functionality and internal tools, including CLI utilities and dashboards.',
      'Built AI-powered features and automation pipelines to support game content production.',
      'Used analytics events and Sentry to investigate player behavior, identify issues, and diagnose errors.',
      'Contributed to monetization, in-game economy, and A/B testing work.',
      'Added and maintained automated tests using Jest and pytest.',
      'Helped onboard developers, documented development workflows, and reviewed code.',
      'Collaborated with product and engineering teammates across time zones, proposing improvements and taking ownership of bugs and features.',
      'Also contributed to game content creation and video production.',
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
      'Led a team of interns building a form builder with conditional logic and validation.',
      'Implemented frontend functionality using React and Redux, backed by Laravel and SQL.',
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
