# Jack Delinsky — Portfolio

A single-page portfolio built with React, TypeScript, Tailwind CSS v4, and Vite.
Sections: hero, an interactive scroll-linked project log, experience, and
contact — designed to be the page an NFC card links to.

## Run it locally

```bash
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`).

## Before you publish

1. **Add your resume.** Drop a file named `resume.pdf` into the `public/`
   folder. The "Download resume" button in `src/components/Hero.tsx` already
   links to `/resume.pdf`.
2. **Fill in real links.** Open `src/components/Contact.tsx` and replace the
   placeholder email and LinkedIn URL (marked with `// TODO`). The GitHub
   link is already set to your account.
3. **Swap in project visuals.** The right-hand panel in
   `src/components/ProjectLog.tsx` is a placeholder block with the
   project's initials. Replace it with a screenshot or short clip per
   project once you have one — happy to help wire that in when you're ready.
4. **Edit project/experience content.** Everything shown on the page lives
   in one place: `src/content.ts`. Add, remove, or edit entries there — the
   page updates automatically.

## Deploying (so the NFC card has something to point to)

The easiest free option, and a good move for your GitHub profile at the
same time:

1. Push this folder to a new GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/JackDelinsky/portfolio.git
   git push -u origin main
   ```
2. Go to vercel.com, sign in with GitHub, and import the `portfolio` repo.
   Vercel auto-detects Vite — click deploy.
3. You'll get a URL like `portfolio-jackdelinsky.vercel.app`. You can add a
   custom domain later from the Vercel project settings.
4. That URL is what you'll program onto the NFC card (most NFC-writer apps
   just need you to paste the link).

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4 (`@tailwindcss/vite`)
- lucide-react for icons

## Image credits

- `src/assets/terry-blc.jpg` — UGA Business Learning Community, photo by Brian Powers.
  Source: https://commons.wikimedia.org/wiki/File:UGA_BLC_20240426_017.jpg
  License: CC0 1.0 (public domain dedication — no attribution required).
  Cropped to the building band, converted to grayscale, and compressed for use as a hero texture.
