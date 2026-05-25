# Pano's macOS Portfolio (React + Vite)

A personal portfolio that emulates the macOS desktop experience in the browser. Open and drag windows like Terminal, Safari, Resume, Finder, Notes/Text, Image Viewer, and a Contact app. Built with modern React and smooth GSAP interactions, styled with Tailwind CSS 4.

> Last updated: 2025-12-04

---

## ✨ Features

- macOS-inspired UI: navbar, dock, draggable/resizable windows
- Multiple built-in apps/windows:
  - Terminal
  - Safari (browser-like window)
  - Resume (PDF rendering)
  - Finder
  - Text/Notes
  - Image Viewer
  - Contact
- Smooth drag/interaction animations via GSAP + Draggable
- Centralized state management with Zustand
- Tailwind CSS 4 utility-first styling
- Lucide icons and helpful tooltips

---

## 🧰 Tech Stack

- React 19 + Vite 7
- Tailwind CSS 4 (`@tailwindcss/vite`)
- GSAP 3 + `@gsap/react` + Draggable plugin
- Zustand for state management
- `react-pdf` for PDF/Resume rendering
- `lucide-react` icons, `react-tooltip` for hints
- ESLint 9 with React hooks/refresh plugins

See `package.json` for the full list of dependencies and scripts.

---

## 🚀 Getting Started

Prerequisites:
- Node.js 18+ (LTS recommended)
- npm 9+ (or use pnpm/yarn if you prefer)

Install dependencies:
```bash
npm install
```

Start the dev server:
```bash
npm run dev
```
Then open the URL shown in your terminal (typically `http://localhost:5173`).

Create a production build:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

---

## 📦 Available Scripts

- `npm run dev` — start Vite dev server
- `npm run build` — build for production
- `npm run preview` — locally preview the production build
- `npm run lint` — run ESLint

---

## 📁 Project Structure (high-level)

```
macos_porfolio/
├─ public/
├─ src/
│  ├─ components/
│  │  ├─ Navbar.jsx
│  │  ├─ Dock/
│  │  ├─ WindowControls.jsx
│  │  ├─ Welcome/
│  │  └─ Home.jsx
│  ├─ windows/
│  │  ├─ Terminal.jsx
│  │  ├─ Safari.jsx
│  │  ├─ Resume.jsx
│  │  ├─ Finder.jsx
│  │  ├─ Text.jsx
│  │  ├─ Image.jsx
│  │  └─ Contact.jsx
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
├─ index.html
├─ vite.config.js
├─ jsconfig.json
├─ eslint.config.js
└─ README.md
```

Key entrypoints:
- `src/main.jsx` — React root
- `src/App.jsx` — mounts navigation, dock, and all app windows

---

## 🧭 Path Aliases

This project uses a `jsconfig.json` path alias to simplify imports:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "#*": ["src/*"] }
  },
  "include": ["src"]
}
```

Example usage:
```js
import { Navbar } from '#components';
import { Terminal } from '#windows';
```

---

## 🎨 Styling

- Tailwind CSS 4 with the Vite plugin is enabled.
- Global styles live in `src/index.css`.
- Prefer utility classes; add custom components/utilities under Tailwind layers as needed.

---

## 🎞️ Animations & Dragging

- GSAP is registered with the Draggable plugin in `App.jsx`:
  ```js
  import gsap from 'gsap';
  import { Draggable } from 'gsap/Draggable';
  gsap.registerPlugin(Draggable);
  ```
- Use GSAP timelines or `@gsap/react` where appropriate for performant UI motion.

---

## 🧪 Linting

Run ESLint locally:
```bash
npm run lint
```

The project uses:
- `@eslint/js` rules
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`

---

## 🖼️ Assets & Icons

- Favicon configured in `index.html` (`/macbook.png`).
- Icons via `lucide-react` where appropriate.

---

## 🔒 Accessibility & Performance Tips

- Provide `alt` text for images in the Image Viewer.
- Ensure keyboard focus is visible for window controls.
- Consider reducing motion for users with `prefers-reduced-motion`.

---

## 🌐 Live Demo

If you deploy this project (e.g., Netlify, Vercel, GitHub Pages), add the link here:

- Live: https://your-demo-url.example

---

## 🛣️ Roadmap Ideas

- Window snapping and multi-monitor backgrounds
- Persistent layout via localStorage or URL state
- Theming (Light/Dark/Auto)
- More apps: Calendar, Music, Mail

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or PRs for improvements, bug fixes, or new features.

---

## 📄 License

Specify your license here (e.g., MIT). If you haven’t chosen one yet, consider adding an `LICENSE` file.

---

## 🙏 Acknowledgments

- Built with React and Vite
- Animations by GSAP
- Styling by Tailwind CSS
- Icons by Lucide
- PDF rendering by `react-pdf`

## Motivation
