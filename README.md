# First Practice Prep

Phone app with a three-week basketball checklist (Sep 28 - Oct 18, 2026) leading to the first team practice. Three tabs:

- **Daily Plan**: calendar, daily checklist, and a Week 1 vs Week 3 progress tracker.
- **How-To**: dribbling, layups, BEEF shooting, free throws, passing, footwork, defense, boxing out.
- **Glossary**: about 50 basketball terms with search and category filters.

## Local

```bash
npm install
npm test
npm run dev
```

Open `http://localhost:5282/`.

## Publish to GitHub Pages

The workflow in `.github/workflows/pages.yml` audits, tests, type-checks, builds, and deploys on every push to `main`. The repo's **Settings > Pages > Source** must be **GitHub Actions**.

The app is served at `https://YOUR_USER.github.io/first-practice-prep/`. The production build uses `base: /first-practice-prep/`; change `base` in `vite.config.ts` if you host elsewhere.

## Install on a phone

**iPhone**
1. Open the Pages URL in **Safari**.
2. Share > **Add to Home Screen**.
3. Open the **Hoops Prep** icon. It runs full-screen and works offline.

**Android**
1. Open the Pages URL in **Chrome**.
2. Menu > **Add to Home screen** (or **Install app**).

Progress stays on that phone. Clearing browser data for the site resets checkboxes.

## Tests and audit

```bash
npm test
npm run lint
npm audit
```
