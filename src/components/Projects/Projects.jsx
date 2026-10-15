import { useState } from 'react';
import ProjectGallery from './ProjectGallery';
import { projects } from '../../data/projects';
import './Projects.css';

const shipped = [
  {
    title: 'Peek a Phone',
    note: 'A mobile game I worked on at Faintlines that has surpassed 5 million downloads on Google Play.',
    url: 'https://play.google.com/store/apps/details?id=com.peekaphone.app&hl=en',
  },
  {
    title: 'The Founder',
    note: 'Another Faintlines game I contributed to.',
    url: 'https://play.google.com/store/apps/details?id=com.faintlines.investomania&hl=en',
  },
];

function LinkIcon({ kind }) {
  if (kind === 'github') {
    return (
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path
          fill="currentColor"
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect x="1.25" y="2.25" width="13.5" height="11.5" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M1.25 5.25h13.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function ProjectPoints({ points }) {
  const [open, setOpen] = useState(false);
  const extra = points.slice(6);

  return (
    <>
      <ul className="tech-points">
        {(open ? points : points.slice(0, 6)).map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      {extra.length > 0 && (
        <button
          type="button"
          className="tech-more"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'show less' : 'show more'}
        </button>
      )}
    </>
  );
}

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
              {project.description && <p>{project.description}</p>}
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
                    <LinkIcon kind={link.label === 'GitHub' ? 'github' : 'demo'} />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            {project.media?.length > 0 && (
              <ProjectGallery media={project.media} projectTitle={project.title} />
            )}
            <ProjectPoints points={project.points} />
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
