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
      'The app has an i18n foundation, with two languages so far: English and Hebrew, including right-to-left layouts.',
      'The interface language stays separate from each recipe’s language and text direction.',
      'AI can turn a link or a screenshot into a recipe draft.',
      'AI can suggest a change to a recipe, and you get to preview it before keeping it.',
      'You can ask a question and get an answer drawn only from recipes you’re allowed to see, with the sources cited.',
      'Recipe history keeps earlier versions, so an edit can be undone.',
      'Public recipe lists and AI answers are cached in Redis, and model requests are rate limited.',
      'Sign-in goes through Firebase, and the API issues its own access and refresh tokens.',
      'Recipes are also stored on the device, so the cookbook still works on a bad connection.',
      'One import kept failing because a recipe site was rejecting server-side requests. I tracked that down and fixed it.',
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
      'Seemless transition from a guest account to a verified email account.',
      'Added lounge bots that join as Colyseus clients in that same Node process initially as a dev tool to test UI on.',
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
  {
    id: 'not-google-photos',
    title: 'Not Google Photos',
    summary: 'A household photo library that lives on the PC.',
    description: 'I built it to stop paying Google for photo storage and use the disk already in my PC. The household library runs there.',
    tech: ['TypeScript', 'React', 'Hono', 'Drizzle', 'Postgres', 'pgvector', 'Capacitor', 'FastAPI', 'Docker'],
    points: [
      'The phone hashes each file, uploads only what the server is missing, and can delete its copy once the PC has it.',
      'Photos are stored as their SHA-256, so the same file from two people only takes space once.',
      'Uploads stream to a temp file and are renamed into place, so a crash doesn’t leave a partial file. If the library drive is unplugged, uploads stop.',
      'InsightFace finds the faces and SigLIP embeds the picture for search, both on ONNX, in a service that never opens the database. A correction you make by hand sticks the next time it runs.',
      'A year in the search becomes a date filter, and the other words match those vectors, in Hebrew or English.',
      'The Android app is the same React UI, loaded from localhost, so it uses the pairing token instead of a cookie. Backup can wait for Wi-Fi or charging.',
      'Photo URLs are short-lived signatures. They load without a cookie, access is still checked, and the ETag is the file hash.',
      'The Mac advertises itself with Bonjour, since Docker on a Mac can’t. The phone tries home first, and uses Tailscale or a Cloudflare Tunnel when it’s away.',
      'The library uses the date in the photo, so a late-night shot stays on that day.',
      'Thumbnails are separate WebP files, with a ThumbHash until the image loads. A job reads the EXIF and builds them.',
      'Finding a similar face or photo is a nearest-neighbor search in Postgres, with an HNSW index. Thumbnail, recognition, memory, and cleanup jobs live there too, and are safe to retry.',
      'A change to the app or the backup engine builds a signed APK onto a GitHub Release. Phones install it with Obtainium, and it updates in place only if every build uses the same key.',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/YChalfari/not-google-photos' },
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
