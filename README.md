# cv-website-modern-motion

Next.js (App Router) + Tailwind + Framer Motion.
- Project carousel auto grayscale (hover reveal)
- Modal popup detail
- Global tone editor (password protected: 270298)
- Modern, fast animations

## Run local
```bash
npm i
npm run dev
```

## Deploy (Vercel)
- Import this GitHub repo in Vercel
- Framework: Next.js (auto-detect)
- Build command: `next build` (default)
- Output: default

## Replace data
Edit: `data/projects.ts`
Replace images in: `public/projects/*`


## New Feature: Web Upload
- Upload avatar directly from web interface
- Upload CV PDF directly from web interface
- Access admin page at /admin


## Content management (data-driven)

### Add / edit featured projects
- File: `data/projects.ts`
- Add a new object in `projects[]`
- Add images to: `public/projects/`
- Then reference images by path, e.g. `"/projects/lt1.jpg"`

### Add / edit skills
- File: `data/skills.ts`
- Add `{ name, levelLabel, value, group }`
  - `value`: 0–100 (drives bar length)

### Add / edit employment history
- File: `data/experience.ts`
- Update `experience[]` items (period, company, role, highlights)

### Replace avatar / CV PDF on the website
- Default assets:
  - Avatar: `public/uploads/avatar.png`
  - CV PDF: `public/uploads/cv.pdf`
- Upload from web UI: open `/admin` and upload new files.
