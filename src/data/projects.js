const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const PEEK_A_PHONE = 'https://play.google.com/store/apps/details?id=com.peekaphone.app&hl=en';

export { PEEK_A_PHONE };

export const projects = [
  {
    id: 'family-recipes',
    title: 'Family Recipes',
    summary: 'Bilingual recipes app with useful AI-powered features.',
    tech: ['React', 'FastAPI', 'MongoDB', 'Redis', 'Firebase', 'Gemini'],
    points: [
      'i18n foundation for English and Hebrew, with a full Hebrew translation of the interface',
      'Ask the book a question about its recipes. The catalog is read in batches that fit a token budget, then the model writes the answer from the matches',
      'Use AI to turn a recipe link or a screenshot into a recipe draft',
      'Ask AI to change a recipe or substitute an ingredient',
      'Share recipes with a group, or keep them private',
      'Every save keeps the previous version, so a recipe can be restored if an edit goes wrong',
      'Redis caches the public list and AI answers, so a repeat visit or a repeat question comes back faster',
      'Sign-in across two hosts: Firebase for Google and Facebook, then API-issued access and refresh tokens',
      'IndexedDB stores recipes on the device so the book still works offline',
    ],
    links: [
      { label: 'Live demo', href: 'https://family-recipes-z1.vercel.app' },
      { label: 'GitHub', href: 'https://github.com/YChalfari/family-recipes' },
    ],
    videos: [
      {
        src: asset('projects/family-recipes/demo.mp4'),
        poster: asset('projects/family-recipes/poster.jpg'),
        alt: 'Family Recipes demo',
      },
    ],
    media: [
      {
        type: 'video',
        src: asset('projects/family-recipes/demo.mp4'),
        poster: asset('projects/family-recipes/poster.jpg'),
        alt: 'Family Recipes demo, including the Hebrew interface',
        caption: 'The interface switches between English and Hebrew. A recipe keeps the direction it was written in.',
      },
      {
        src: asset('projects/family-recipes/ask.png'),
        alt: "An answer that cites Daddy's Pancakes",
        caption: 'Ask the book a question about its recipes.',
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
        alt: 'A preview that replaces milk and butter, with Discard and Use this version',
        caption: 'Suggest a change and you get a preview. Nothing is saved until you accept it.',
      },
    ],
  },
  {
    id: 'meets',
    title: 'Meets',
    summary: 'Mobile-first, RPG-style dating, with minigames, chat, and video.',
    tech: ['TypeScript', 'React', 'Phaser', 'Colyseus', 'Hono', 'Drizzle', 'WebRTC'],
    points: [
      'Phaser draws the room, collision, and camera. React draws the HUD: joystick, sheets, chat, and auth',
      'A Colyseus room is the live state: positions, sitting, invites, and chat. Clients send input; the server moves the body',
      'Hono and Drizzle hold accounts, profiles, and blocks. SQLite locally, with a Postgres-shaped schema',
      'Better Auth starts as a guest cookie and upgrades that same character to an email account',
      'A shared TypeScript package is the room protocol for the browser and the server',
      '1:1 voice and video are WebRTC, signaled through the room, and stay a mini player over the lounge',
      'One Node process serves the client, the API, and the room',
    ],
    links: [
      { label: 'Live', href: 'https://meetz.fun' },
      { label: 'GitHub', href: 'https://github.com/YChalfari/meets' },
    ],
    videos: [],
    media: [],
  },
];

export const projectReels = projects.flatMap((project) =>
  (project.videos || []).map((video, index) => ({
    ...video,
    key: `${project.id}-${index}`,
    title: project.title,
    href: `#${project.id}`,
  })),
);
