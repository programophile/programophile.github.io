# Personal Portfolio Website

A modern, responsive portfolio website built with React and Vite.

## Features

- Dark theme design
- Smooth scrolling navigation
- Animated components with Framer Motion
- Fully responsive layout
- SEO-friendly
- GitHub Pages ready

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Customization

Replace placeholder content in the following files:

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update your name
   - Update your title
   - Update your introduction

2. **About Section** (`src/components/About.jsx`):
   - Update professional summary
   - Update statistics
   - Add your photo in `about-image` div

3. **Skills Section** (`src/components/Skills.jsx`):
   - Modify skill categories
   - Update skill levels
   - Add/remove technologies

4. **Projects Section** (`src/components/Projects.jsx`):
   - Replace project data
   - Update GitHub links
   - Update live demo links
   - Add project images

5. **Contact Section** (`src/components/Contact.jsx`):
   - Update email address
   - Update GitHub profile
   - Update LinkedIn profile
   - Update Twitter handle

6. **Navbar & Footer**:
   - Update logo/name
   - Update social links

## Deployment to GitHub Pages

1. Install `gh-pages`:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio-website",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## Technologies Used

- React 18
- Vite
- Framer Motion
- React Icons
- CSS Modules

## License

MIT
