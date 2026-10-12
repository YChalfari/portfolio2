import ProjectGallery from './ProjectGallery';
import { projects } from '../../data/projects';
import './Projects.css';

const shipped = [
  {
    title: 'Peek a Phone',
    note: 'Past 5 million downloads, with a 5-star Google Play rating.',
    url: 'https://play.google.com/store/apps/details?id=com.peekaphone.app&hl=en',
  },
  {
    title: 'The Founder',
    note: 'A Faintlines game I worked on.',
    url: 'https://play.google.com/store/apps/details?id=com.faintlines.investomania&hl=en',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <header className="section-heading">
        <span className="section-index">03</span>
        <h2>Projects</h2>
        <span className="section-hebrew" lang="he">פרויקטים</span>
      </header>

      <div className="project-list">
        {projects.map((project) => (
          <article key={project.id} id={project.id} className="case">
            <div className="case-intro">
              <p className="case-kicker">{project.title}</p>
              <h3>{project.summary}</h3>
              <ul className="case-tech">
                {project.tech.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="case-links">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    className={link.label === project.links[0].label ? 'button button-primary' : 'button button-ghost'}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            {project.media?.length > 0 && (
              <ProjectGallery media={project.media} projectTitle={project.title} />
            )}
            <ul className="tech-points">
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="shipped">
        <h3>Also shipped</h3>
        <ul>
          {shipped.map((game) => (
            <li key={game.title}>
              <a href={game.url} target="_blank" rel="noopener noreferrer">
                <span>{game.title}</span>
                <small>{game.note}</small>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
