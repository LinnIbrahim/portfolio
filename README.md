# Lin Ibrahim — Portfolio

Personal portfolio site. **Website Designer · Software Engineer · Humanitarian.**
Built with React + Vite. No backend, fully static — deploys anywhere.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build & preview

```bash
npm run build    # outputs to /dist
npm run preview  # serve the production build locally
```

## Editing content

All copy, links, projects, skills and contact details live in **one file**:

```
src/data/profile.js
```

Change values there — components read from it, so you never touch JSX for a
content tweak.

> ⚠️ Before going live, replace the placeholder `github` / `linkedin` URLs in
> `src/data/profile.js` (`contact` section) with your real profiles.

## Assets

- `public/portrait.jpg` — about-section photo (swap the file, keep the name)
- `public/Lin_Ibrahim_CV.pdf` — linked from the hero/contact "Download CV"

## Deploy

The `dist/` folder is a static bundle. Drag it into Netlify, or:

- **Vercel / Netlify** — import the repo, framework preset "Vite", done.
- **GitHub Pages** — push `dist/` (set Vite `base` if not served from root).

## Design

Editorial, low-chrome layout. Palette and mood are pulled from the portrait —
warm cream, eucalyptus, ink. Type: Fraunces (display) + Inter (body).
Scroll reveals respect `prefers-reduced-motion`.
