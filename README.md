# Personal Portfolio — Head Constable, IT & Communications (Telangana Police)

A clean, modern and responsive single-page portfolio built with **Next.js (App Router)**,
**TypeScript**, **Tailwind CSS** and **Lucide icons**. Designed for an experienced IT
professional: subtle animations, dark/light mode, fast and lightweight, and ready for
Vercel deployment.

> **Content policy:** every word on the site comes from one file —
> [`src/content/profile.ts`](src/content/profile.ts). Nothing is invented. Replace the
> `[placeholders]` with your real details, and never add police internal systems, IPs,
> URLs, network/infrastructure details, case information, credentials, API keys or any
> confidential information.

---

## Tech stack

| Layer     | Choice                                          |
| --------- | ----------------------------------------------- |
| Framework | Next.js 16 (App Router, TypeScript)             |
| Styling   | Tailwind CSS v4                                 |
| Icons     | `lucide-react` (+ inline brand SVGs)            |
| Fonts     | Geist / Geist Mono via `next/font` (self-hosted)|
| Deploy    | Vercel                                          |

---

## Project structure

```text
src/
├── app/
│   ├── layout.tsx        # Root layout: fonts, metadata, theme script, header/footer
│   ├── page.tsx          # Single page — assembles all sections
│   └── globals.css       # Design tokens, dark mode, subtle animation utilities
├── components/
│   ├── Header.tsx        # Sticky nav, active-section highlight, mobile menu (client)
│   ├── ThemeToggle.tsx   # Dark/light toggle, persisted in localStorage (client)
│   ├── Reveal.tsx        # Subtle scroll-in animation, respects reduced motion (client)
│   ├── Section.tsx       # Shared section wrapper (eyebrow, title, description)
│   ├── Footer.tsx
│   ├── icons.tsx         # GitHub / LinkedIn marks
│   └── sections/         # Hero, About, Experience, Skills, Projects,
│                         # Certifications, Education, Achievements, Contact
└── content/
    └── profile.ts        # ⭐ ALL editable content lives here
public/
└── resume.pdf            # ⭐ Replace with your real resume (same file name)
```

---

## Editing your content

1. Open `src/content/profile.ts`.
2. Press `Ctrl+F` / `Cmd+F` and search for `[` to find every placeholder.
3. Update:
   - `site` — name, monogram, designation, department, organisation, location, email,
     phone, GitHub, LinkedIn, `resumePath`, `url`, `defaultTheme`.
   - `hero`, `about`, `experience`, `skills`, `projects`, `certifications`,
     `trainings`, `education`, `achievements`, `contact` — one object per section.
4. Delete any entry you do not want; the layout adapts automatically.
5. Drop your resume at `public/resume.pdf`.

**Before publishing, double-check that no placeholder text and no confidential/internal
detail remains.**

---

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other commands:

```bash
npm run build   # production build (must succeed before deploying)
npm run start   # serve the production build locally
npm run lint    # ESLint
```

---

## Deploy with GitHub + Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

(The project is already a git repository and already ignores `.next/`, `node_modules/`,
`.vercel/` and `.env*`.)

### 2. Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
2. **Import** your repository.
3. Vercel auto-detects **Next.js** — no build settings are required.
   - Framework: Next.js
   - Build command: `next build`
   - Output: handled automatically
4. Click **Deploy**. Done.

### 3. After the first deploy

1. Set the real domain in `site.url` (used for canonical/OG metadata), or update the
   Vercel domain under *Project → Settings → Domains*.
2. Push to `main` again — Vercel redeploys automatically on every push.

---

## Features

- Single-page layout with smooth anchor navigation and active-section highlighting
- Responsive from mobile to desktop (hamburger menu below `lg`)
- Dark/light mode with no flash on load, persisted between visits
- Subtle scroll-in animations that respect `prefers-reduced-motion`
- Accessible: semantic sections, skip-to-content link, visible focus rings
- Static output, no backend, no external API calls — trivial to host and audit

## Content checklist

- [ ] All `[placeholder]` values replaced
- [ ] `public/resume.pdf` replaced with your real resume
- [ ] GitHub / LinkedIn URLs updated
- [ ] No internal system names, IPs, URLs, infrastructure, case data or credentials
- [ ] `npm run build` passes
