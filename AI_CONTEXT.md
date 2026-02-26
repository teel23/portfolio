# AI_CONTEXT — Portfolio Website (c2tbuilds.com)
> For AI assistant use. Read this at the start of every session to get up to speed instantly.
> **Update this file after every meaningful change.**

---

## Project Identity
- **Name:** C2T Builds — Portfolio
- **Type:** Portfolio / Project Showcase (Next.js)
- **Live URL:** https://c2tbuilds.com
- **GitHub:** https://github.com/teel23/portfolio ✅ (already connected)
- **Netlify:** Auto-deploys on every push to `main`
- **Status:** Live

---

## Tech Stack
| Layer | Tech |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Deployment | Netlify + @netlify/plugin-nextjs |
| Icons | Lucide React |

---

## Key File Map
```
app/
  page.tsx              ← Home page (assembles all sections)
  layout.tsx            ← Global layout + metadata
  globals.css           ← Global styles
  contact/              ← Contact page
  projects/             ← Projects page

components/
  Header.tsx            ← Nav header
  Hero.tsx              ← Landing hero section
  Projects.tsx          ← ⭐ PROJECT CARDS — edit this to add/reorder/update projects
  TechStack.tsx         ← Skills/tools section
  About.tsx             ← About section
  Contact.tsx           ← Contact form
  Footer.tsx            ← Footer
  Pipeline.tsx          ← Pipeline / process section

public/
  screenshots/          ← Project screenshot images used in cards
    darts-home.png, darts-game.png, darts-tictactoe.png
    golf-home.png, golf-game.png
    fittrack-home.png, fittrack-game.png
    aimov-card.png
```

---

## Projects Array (components/Projects.tsx)
Current order and URLs:
| # | Project | URL | Status |
|---|---|---|---|
| 1 | Darts Scoreboard | https://darts.c2tbuilds.com | Featured ⭐ |
| 2 | AI-Mov | https://ai-mov.c2tbuilds.com | Beta 🔶 |
| 3 | Golf Scorecard | https://golf.c2tbuilds.com | Beta 🔶 |
| 4 | FitTrack | https://fittrack.c2tbuilds.com | Beta 🔶 |

To add a new project: add an entry to the `projects` array in `components/Projects.tsx`.
To reorder: rearrange the array entries.
To update a URL: change the `demoUrl` field.

---

## Deployment Flow
1. Edit files in `/AI/Website/`
2. `git add components/SomeFile.tsx` (be specific — don't use `git add .`)
3. `git commit -m "message"`
4. `git push` → Netlify auto-deploys in ~2 min
5. Update this file

> ⚠️ The user is watching Netlify build minutes carefully. Only push what's needed.

---

## Recent Changes (update after each session)
| Date | Change |
|---|---|
| Feb 2026 | Updated Projects.tsx — new project card layout with screenshot carousel |
| Feb 2026 | Reordered projects: Darts, AI-Mov, Golf, FitTrack |
| Feb 2026 | Updated AI-Mov URL from netlify subdomain to ai-mov.c2tbuilds.com |
| Feb 2026 | Added AI_CONTEXT.md and NOTES.md |

---

## Next Steps
- [ ] Add FitTrack GitHub link to its project card (already has teel23/fitness-tracker)
- [ ] Add a new project card when a new project launches
- [ ] Add a "Coming Soon" card for Mov/TV Rec project
- [ ] Consider adding a blog or changelog section
- [ ] SEO improvements (og:image, structured data)
