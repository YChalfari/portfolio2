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
            <span>Full-Stack Developer</span>
            <span className="eyebrow-dot" aria-hidden="true" />
            <span className="eyebrow-hebrew" lang="he">מפתח פול סטאק</span>
            <span className="eyebrow-dot eyebrow-location-dot" aria-hidden="true" />
            <span className="eyebrow-location">Central Israel</span>
          </p>
          <div className="hero-name">
            <img className="hero-avatar" src={myPhoto} alt="" />
            <h1>Yitz Chalfari</h1>
          </div>
          <div className="lede">
            <p>
              I’m a full-stack developer with 3+ years of experience building and shipping
              software at Faintlines. I worked on Peek a Phone, a game with over 5 million
              downloads, building product features, Python services, internal tools, and
              automated content workflows.
            </p>
            <p>
              Outside of work, I build products of my own, including Family Recipes, a
              bilingual recipe app with AI-assisted features, and Meets, a multiplayer
              social game with chat, minigames, and video.
            </p>
          </div>
          <ul className="proof">
            <li>
              <a href={PEEK_A_PHONE} target="_blank" rel="noopener noreferrer">
                <strong>5M+ Downloads</strong>
                <span>Peek a Phone on Google Play</span>
              </a>
            </li>
            <li>
              <a href="#projects">
                <strong>Live projects</strong>
                <span>Family Recipes and Meets</span>
              </a>
            </li>
            <li>
              <a href="#contact">
                <strong>Open</strong>
                <span>to full-stack, a related role, and relocation</span>
              </a>
            </li>
          </ul>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">See the work</a>
            <a className="button button-ghost" href="#contact">Get in touch</a>
          </div>
        </div>
      </div>
      <ProjectReel items={projectReels} />
    </section>
  );
};

export default Hero;
