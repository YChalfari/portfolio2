import ExperienceItem from './ExperienceItem';
import './Experience.css';

const experiences = [
  {
    company: 'Faintlines',
    companyUrl: 'https://faintlines.com',
    role: 'Full Stack Developer',
    note: 'Also designed game content and made videos for the titles.',
    date: '2022 – 2025',
    achievements: [
      'Contributed to mobile games with 1.5M+ downloads, including Peek a Phone and The Founder',
      'Built React features and Python services, including microservices around the games',
      'Built CLI tools, dashboards, and AI-backed automation for content production',
      'Onboarded developers, wrote the development process, and reviewed code before it shipped',
      'Added Jest coverage on the frontend and pytest coverage on the backend',
    ],
    techStack: ['React', 'Python', 'MongoDB', 'Docker', 'Jest', 'pytest'],
    links: [
      { label: 'Company', url: 'https://faintlines.com' },
      { label: 'Peek a Phone', url: 'https://play.google.com/store/apps/details?id=com.peekaphone.app&hl=en' },
      { label: 'The Founder', url: 'https://play.google.com/store/apps/details?id=com.faintlines.investomania&hl=en' },
    ],
  },
  {
    company: 'iintoo',
    companyUrl: 'https://iintoo.com',
    role: 'Full Stack Intern',
    date: '2022',
    achievements: [
      'Led a team of interns building a form builder with conditional logic and validation',
      'Implemented it in React and Redux, with Laravel and SQL on the backend',
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
        <h3>Appleseeds · Full-stack program</h3>
        <p>2021 – 2022. Full-time, five days a week. React, JavaScript, and Node.js, with a project most days.</p>
      </div>
    </section>
  );
};

export default Experience;
