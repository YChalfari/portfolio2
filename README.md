# Portfolio Website

A minimalistic, IDE-themed dark mode portfolio website built with React and Vite.

## Features

- **IDE-Inspired Design**: Dark theme with syntax-highlight colors and monospace fonts
- **Typing Animations**: Dynamic typing effect in Hero and Skills sections
- **Single Page Layout**: Smooth scrolling with non-intrusive side navigation
- **Project Galleries**: Expandable project cards with image galleries
- **Responsive Design**: Mobile-first approach with full responsiveness
- **Smooth Animations**: Fade-in animations and hover effects throughout

## Sections

1. **Hero**: Introduction with typing animation
2. **About**: Personal introduction and technologies
3. **Experience**: Work history timeline with skills showcase
4. **Projects**: Project cards with galleries and links
5. **Contact**: Social media links and email

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero/Hero.jsx`):
   - Update name in `hero-name`
   - Modify roles array for typing animation

2. **About Section** (`src/components/About/About.jsx`):
   - Update location and description
   - Modify tech list

3. **Experience Section** (`src/components/Experience/Experience.jsx`):
   - Update experiences array with your work history
   - Modify skills in `Skills.jsx`

4. **Projects Section** (`src/components/Projects/Projects.jsx`):
   - Update projects array with your projects
   - Add project images, descriptions, and links

5. **Contact Section** (`src/components/Contact/Contact.jsx`):
   - Update social media links
   - Update email address

### Styling

- Color scheme: `src/styles/variables.css`
- Global styles: `src/styles/globals.css`
- Component styles: Individual CSS files in each component folder

## Technologies Used

- React 19
- Vite
- CSS3 (Custom Properties, Animations)
- Modern JavaScript (ES6+)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
