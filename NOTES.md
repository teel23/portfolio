# Portfolio Website — Project Notes
> Your reference for jumping back into this project anytime.
> **Update the Recent Changes section after every session.**

---

## What It Is
Your public-facing developer portfolio at c2tbuilds.com. Shows all your projects with screenshot carousels, descriptions, tech tags, and launch buttons.

## Live URL
🌐 **https://c2tbuilds.com**

## GitHub
📁 **https://github.com/teel23/portfolio** ✅ Connected and auto-deploying

---

## Most Common Edits
- **Add/reorder/update a project** → `components/Projects.tsx` → edit the `projects` array
- **Add a screenshot** → drop image in `public/screenshots/`, reference it in Projects.tsx
- **Update About or bio** → `components/About.tsx`
- **Update contact info** → `components/Contact.tsx`

## Important Rule — Be Selective on Commits
Netlify counts build minutes. Only commit the files you actually changed:
```
git add components/Projects.tsx   ← specific file, not git add .
git commit -m "what changed"
git push
```

---

## Project Card Order (as of Feb 2026)
1. Darts Scoreboard — Featured ⭐
2. AI-Mov — Beta
3. Golf Scorecard — Beta
4. FitTrack — Beta

---

## Status
✅ Live | 🔗 GitHub connected | ⚡ Auto-deploy on push

---

## Recent Changes (keep updated)
| Date | What Changed |
|---|---|
| Feb 2026 | New project card layout with screenshot carousels |
| Feb 2026 | Reordered: Darts, AI-Mov, Golf, FitTrack |
| Feb 2026 | Updated AI-Mov URL to ai-mov.c2tbuilds.com |

---

## Next Steps
- [ ] Add "Coming Soon" card for Mov/TV Rec project
- [ ] Add FitTrack GitHub link to card
- [ ] SEO: add og:image for social sharing previews
- [ ] Consider adding a simple changelog or blog section
