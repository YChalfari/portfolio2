import ProjectGallery from './ProjectGallery';
import './Projects.css';

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const decisions = [
  {
    title: 'The model only sees what you can open',
    body: 'A question is answered from the recipes that person is allowed to see, and the answer cites them. Nothing outside that set is in the prompt.',
  },
  {
    title: 'A suggestion is not a save',
    body: 'Ask for a substitution and you get a preview. Accepting it is a normal save, with the same version history as a hand edit. Discard throws it away.',
  },
  {
    title: 'A stale edit does not overwrite',
    body: 'An edit sends the version it started from. If someone else saved first, the write comes back as a conflict.',
  },
  {
    title: 'Language and direction are separate',
    body: 'The interface can be English or Hebrew. Each recipe keeps the direction it was written in, including inside a page in the other language.',
  },
];

const media = [
  {
    type: 'video',
    src: asset('projects/family-recipes/demo.mp4'),
    poster: asset('projects/family-recipes/poster.jpg'),
    alt: 'Screen recording of asking the cookbook, opening the cited recipe, and switching the page to Hebrew',
    caption: 'Ask the cookbook, open the recipe it cites, then switch the page to Hebrew. The recipe stays in its own direction.',
  },
  {
    src: asset('projects/family-recipes/ask.png'),
    alt: "Ask the cookbook. The answer cites Daddy's Pancakes.",
    caption: 'The answer is written from recipes this person can see, and the recipe is cited.',
  },
  {
    src: asset('projects/family-recipes/recipe.png'),
    alt: 'A Hebrew pancake recipe shown right to left inside an English page',
    caption: 'A Hebrew recipe stays right-to-left inside an English page, including the ingredients.',
  },
  {
    src: asset('projects/family-recipes/hebrew.png'),
    alt: 'The same recipe with the interface switched to Hebrew',
    caption: 'The chrome follows the language switch. An English title stays left-to-right inside the Hebrew page.',
  },
  {
    src: asset('projects/family-recipes/suggest.png'),
    alt: 'A preview that replaces milk and butter with pareve substitutes, with Discard and Use this version',
    caption: 'Suggest a change and you get a preview. Nothing is saved until you accept it.',
  },
];

const shipped = [
  {
    title: 'Peek a Phone',
    note: 'A Faintlines game I worked on.',
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

      <article className="case">
        <div className="case-intro">
          <p className="case-kicker">Family Recipes</p>
          <h3>A cookbook that can answer, and can prove where the answer came from.</h3>
          <p>
            Questions are answered from the recipes a person is allowed to see. You can paste
            a link or a photo to draft a recipe, and nothing is stored until you keep it.
            The last recipes stay in the browser, so the book still opens while a free host is waking up.
          </p>
          <ul className="case-tech">
            {['React', 'FastAPI', 'MongoDB', 'Redis', 'Firebase', 'Gemini'].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="case-links">
            <a className="button button-primary" href="https://family-recipes-z1.vercel.app" target="_blank" rel="noopener noreferrer">
              Live demo
            </a>
            <a className="button button-ghost" href="https://github.com/YChalfari/family-recipes" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
        <ProjectGallery media={media} projectTitle="Family Recipes" />
        <ol className="decisions">
          {decisions.map((decision) => (
            <li key={decision.title}>
              <h4>{decision.title}</h4>
              <p>{decision.body}</p>
            </li>
          ))}
        </ol>
      </article>

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
