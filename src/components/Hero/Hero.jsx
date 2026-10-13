import myPhoto from '../../assets/me.jpg';
import { PEEK_A_PHONE, projectReels } from '../../data/projects';
import ProjectReel from './ProjectReel';
import './Hero.css';

const Hero = () => {
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
          <div className="hero-name">
            <img className="hero-avatar" src={myPhoto} alt="" />
            <h1>Yitz Chalfari</h1>
          </div>
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
      </div>
      <ProjectReel items={projectReels} />
    </section>
  );
};

export default Hero;
