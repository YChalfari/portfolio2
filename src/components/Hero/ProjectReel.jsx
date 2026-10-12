import { useState } from 'react';
import Chevron from '../Chevron';
import './ProjectReel.css';

const ProjectReel = ({ items }) => {
  const [index, setIndex] = useState(0);

  if (!items.length) return null;

  const current = items[index % items.length];
  const hasMany = items.length > 1;

  const step = (delta) => {
    setIndex((value) => (value + delta + items.length) % items.length);
  };

  return (
    <div className="reel" aria-roledescription="carousel" aria-label="Project videos">
      <div className="reel-stage">
        {hasMany && (
          <button type="button" className="reel-nav reel-prev" onClick={() => step(-1)} aria-label="Previous project">
            <Chevron direction="prev" />
          </button>
        )}
        <a className="reel-frame" href={current.href}>
          <video
            key={current.key}
            src={current.src}
            poster={current.poster}
            muted
            loop
            playsInline
            autoPlay
            aria-label={current.alt || current.title}
          />
        </a>
        {hasMany && (
          <button type="button" className="reel-nav reel-next" onClick={() => step(1)} aria-label="Next project">
            <Chevron direction="next" />
          </button>
        )}
      </div>
      <a className="reel-caption" href={current.href}>
        <strong>{current.title}</strong>
        {hasMany && <em>{index + 1} / {items.length}</em>}
      </a>
    </div>
  );
};

export default ProjectReel;
