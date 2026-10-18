const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const PEEK_A_PHONE = 'https://play.google.com/store/apps/details?id=com.peekaphone.app&hl=en';

export { PEEK_A_PHONE };

export const projects = [
  {
    id: 'family-recipes',
    title: 'Family Recipes',
    summary: 'A bilingual family cookbook with AI-assisted recipe management.',
    description: 'Family Recipes helps people organize, share, and explore recipes in English and Hebrew. It combines a practical recipe-management experience with AI-assisted importing, recipe modifications, and question answering.',
    tech: ['React', 'FastAPI', 'MongoDB', 'Redis', 'Firebase', 'Gemini'],
    points: [
      'i18n foundation with 2 current languages: English and Hebrew, including right-to-left layouts.',
      'Kept the interface language independent of each recipe’s language and text direction.',
      'Built AI-assisted recipe importing from links and screenshots.',
      'Implemented AI-suggested recipe changes with a preview-and-accept workflow.',
      'Built question answering grounded in recipes the user is permitted to access, with answers that cite their sources.',
      'Preserved recipe history so users can restore earlier versions after edits.',
      'Added Redis caching for public recipe listings and AI answers, plus rate limiting for model requests.',
      'Implemented authentication using Firebase identity providers and API-issued access and refresh tokens.',
      'Added local recipe persistence and offline support so the cookbook remains useful with an unreliable connection.',
      'Investigated and fixed an import failure caused by a recipe website rejecting server-side requests.',
    ],
    links: [
      { label: 'Demo', href: 'https://family-recipes-z1.vercel.app' },
      { label: 'GitHub', href: 'https://github.com/YChalfari/family-recipes' },
    ],
    videos: [
      {
        src: asset('projects/family-recipes/demo.mp4'),
        poster: asset('projects/family-recipes/poster.jpg'),
        captions: false,
        alt: 'Demo of Family Recipes, showing its bilingual interface and AI-assisted recipe features.',
      },
    ],
    media: [
      {
        type: 'video',
        src: asset('projects/family-recipes/demo.mp4'),
        poster: asset('projects/family-recipes/poster.jpg'),
        captions: false,
        alt: 'Demo of Family Recipes, showing its bilingual interface and AI-assisted recipe features.',
        caption: 'English and Hebrew, each in its own direction.',
      },
      {
        src: asset('projects/family-recipes/ask.png'),
        alt: "An answer that cites Daddy's Pancakes",
        caption: 'Ask a question about your cookbook and get an answer with recipe citations.',
      },
      {
        src: asset('projects/family-recipes/recipe.png'),
        alt: 'A Hebrew pancake recipe shown right to left inside an English page',
        caption: 'Hebrew recipe content remains right-to-left, even inside the English interface.',
      },
      {
        src: asset('projects/family-recipes/hebrew.png'),
        alt: 'The same recipe with the interface switched to Hebrew',
        caption: 'The interface adapts to Hebrew without changing the direction of English text unnecessarily.',
      },
      {
        src: asset('projects/family-recipes/suggest.png'),
        alt: 'A preview that replaces milk and butter, with Discard and Use this version',
        caption: 'Preview an AI-suggested recipe change before deciding whether to save it.',
      },
    ],
  },
  {
    id: 'meets',
    title: 'Meets',
    summary: 'A multiplayer social game with chat, minigames, and voice and video.',
    description: 'Meets is a mobile-first, RPG-style social experience built around a shared virtual space where players can move around, interact, chat, and connect.',
    tech: ['TypeScript', 'React', 'Phaser', 'Colyseus', 'Hono', 'Drizzle', 'SQLite', 'Better Auth', 'WebRTC', 'Docker', 'Caddy'],
    points: [
      'The client is split, with React drawing the controls, chat, and overlays, while Phaser draws the world, collision, and camera. The two only meet through a client event bus.',
      'The live lounge and the HTTP API run in one Node process. Colyseus tracks who is in the room, and Hono handles accounts, profiles, blocks, and mail.',
      'Room state stays in memory and is patched over the WebSocket. Accounts, threads, and scores live in SQLite, so a conversation is still there after you leave.',
      'The game protocol is shared TypeScript, and pool, board games, and arcade physics run on the server. The browser only draws the result.',
      'Call signaling stays on the room socket. Voice and video go directly between the two players over WebRTC, so the server never carries the media.',
      'The live site and staging run on a Linux VPS I have root on. Docker keeps the two environments apart, Caddy serves HTTPS, and GitHub Actions ships each release over SSH.',
      'Accounts, profiles, and blocks go through Hono, Drizzle, and Better Auth.',
      'A guest can upgrade to an email account and keep the same character.',
      'Lounge bots join as Colyseus clients in that same Node process.',
      'Photos and voice messages are files, served from /uploads.',
    ],
    links: [
      { label: 'Demo', href: 'https://meetz.fun' },
      { label: 'GitHub', href: 'https://github.com/YChalfari/meets' },
    ],
    videos: [],
    media: [
      {
        src: asset('projects/meets/architecture.svg'),
        alt: 'Architecture of Meets: a browser, a VPS, one Node process, and saved data',
        caption: 'Meets tech architecture.',
        fit: 'contain',
        maxWidth: '28rem',
      },
    ],
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
