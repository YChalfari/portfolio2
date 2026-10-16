import myPhoto from '../../assets/me.jpg';
import { PEEK_A_PHONE, projectReels } from '../../data/projects';
import ProjectReel from './ProjectReel';
import './Hero.css';

const resumeUrl = `${import.meta.env.BASE_URL}Itzik-Halfari-CV.pdf`;

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
            <a className="button button-ghost" href={resumeUrl} download="Itzik-Halfari-CV.pdf">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  d="M12 4v10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
                <path
                  d="M8 10.5 L12 14.5 L16 10.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 16.5V18a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              CV
            </a>
            <a className="button button-ghost" href="#contact">Get in touch</a>
          </div>
        </div>
      </div>
      <ProjectReel items={projectReels} />
    </section>
  );
};

export default Hero;
