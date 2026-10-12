import { useState } from 'react';
import myPhoto from '../../assets/me.jpg';
import { PEEK_A_PHONE, projectReels } from '../../data/projects';
import ProjectReel from './ProjectReel';
import './Hero.css';

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
      <div className="hero-top">
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
            I worked on Peek a Phone at Faintlines, past 5 million downloads with a 5-star
            Google Play rating, and I built the tools the team used to ship it. On my own
            time I ship product too: a bilingual recipes app with useful AI features, and
            Meets, mobile-first RPG-style dating with minigames, chat, and video.
          </p>
          <ul className="proof">
            <li>
              <a href={PEEK_A_PHONE} target="_blank" rel="noopener noreferrer">
                <strong>5M+</strong>
                <span>Peek a Phone on Google Play</span>
              </a>
            </li>
            <li>
              <a href="#projects">
                <strong>Live</strong>
                <span>Family Recipes and Meets</span>
              </a>
            </li>
            <li>
              <strong>Open</strong>
              <span>to full-stack, QA, or a related role</span>
            </li>
          </ul>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">See the work</a>
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
        </div>
      </div>
      <ProjectReel items={projectReels} />
    </section>
  );
};

export default Hero;
