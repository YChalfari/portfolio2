import { useState } from 'react';
import myPhoto from '../../assets/me.jpg';
import './Hero.css';

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const Hero = () => {
  const [shift, setShift] = useState({ x: 0, y: 0, tilt: 0 });

  const followPortrait = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setShift({ x: x * 18, y: y * 18, tilt: x * 4 });
  };

  const resetPortrait = () => setShift({ x: 0, y: 0, tilt: 0 });

  return (
    <section id="hero" className="hero">
      <div className="hero-copy">
        <p className="eyebrow">
          <span>Full-stack engineer</span>
          <span className="eyebrow-dot" aria-hidden="true" />
          <span className="eyebrow-hebrew" lang="he">מפתח פול סטאק</span>
          <span className="eyebrow-dot" aria-hidden="true" />
          <span>Central Israel</span>
        </p>
        <h1>Yitz Chalfari</h1>
        <p className="lede">
          I worked on mobile games past 1.5 million downloads at Faintlines, and I built the
          tools the team used to ship them. Family Recipes is a bilingual cookbook where the
          model only answers from recipes that person is allowed to see.
        </p>
        <ul className="proof">
          <li>
            <strong>1.5M+</strong>
            <span>downloads on the games I worked on</span>
          </li>
          <li>
            <strong>Live</strong>
            <span>cookbook you can try</span>
          </li>
          <li>
            <strong>Open</strong>
            <span>to full-stack roles, Israel or remote</span>
          </li>
        </ul>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">View the cookbook</a>
          <a className="button button-ghost" href="mailto:chalfari@gmail.com">chalfari@gmail.com</a>
        </div>
      </div>
      <div className="hero-visual">
        <div
          className="hero-portrait"
          onMouseMove={followPortrait}
          onMouseLeave={resetPortrait}
        >
          <img
            src={myPhoto}
            alt="Yitz Chalfari"
            style={{
              transform: `translate(${shift.x}px, ${shift.y}px) rotate(${shift.tilt}deg) scale(1.08)`,
            }}
          />
        </div>
        <a className="hero-reel" href="#projects">
          <video
            src={asset('projects/family-recipes/demo.mp4')}
            poster={asset('projects/family-recipes/poster.jpg')}
            muted
            loop
            playsInline
            autoPlay
            aria-label="Family Recipes demo"
          />
          <span>Family Recipes · ask, then open the cited recipe</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
