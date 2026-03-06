# Portfolio (Website) — Audit Report
*Generated: March 2026*

## Current State
- Live URL: https://c2tbuilds.com
- GitHub Repo: https://github.com/teel23/portfolio
- Hosting Platform: Vercel ✅
- Auto-Deploy: Yes (push to main → Vercel builds)
- Status: Live

> DNS NOTE: c2tbuilds.com DNS still points to Netlify in Namecheap. Needs migration to `cname.vercel-dns.com` in Namecheap for the custom domain to resolve to Vercel properly.

## Tech Stack
- Framework: Next.js 14.2.5
- Build Tool: Next.js (built-in)
- Key Libraries: React 18, Framer Motion 11, Lucide React, Tailwind CSS 3.4
- Node Version: Not pinned (no .nvmrc, no engines field)
- Deprecated Tech: None

## Deployment Health
- Vercel config: ✅ Not needed — Next.js auto-detected by Vercel
- Netlify files removed: ✅ `.netlify/` directory deleted this session
- Portfolio links correct: ✅ Fixed this session — AI-Mov URL corrected from `https://ai-mov-psi.vercel.app/` to `https://ai-mov.c2tbuilds.com`

### All project URLs verified:
| Project | URL in Portfolio | Status |
|---|---|---|
| Darts | https://darts.c2tbuilds.com | ✅ Correct |
| AI-Mov | https://ai-mov.c2tbuilds.com | ✅ Fixed this session |
| Golf | https://golf.c2tbuilds.com | ✅ Correct |
| FitTrack | https://fittrack.c2tbuilds.com | ✅ Correct |
| Spin to Decide | https://spin-the-wheel-puce.vercel.app | ⚠️ No custom domain yet |

## Dead Code & Waste
- Unused files: `C2T/` and `Website/` subdirs with only `.gitattributes` — leftover from initial repo setup, no code inside
- Unused components: None — all 7 components are imported and used
- Unused assets: `public/screenshots/spinwheel.png` is referenced. Other screenshot paths (darts-home.png, aimov-card.png, etc.) are referenced in Projects.tsx but the actual PNG files are NOT present in public/screenshots/ — these will 404 at runtime
- Console.logs in prod: None
- Other waste: `desktop-tutorial/README.md` — leftover tutorial file from Next.js scaffolding, serves no purpose

## Completion Assessment
**Percent complete: 80%**

### What's done:
- Full portfolio live with 5 project cards
- Screenshot carousel per card
- Contact, About, Hero, TechStack sections
- Auto-deploy via Vercel on push

### What's missing to call this finished:
- Missing screenshot images in public/screenshots/ (most PNGs are referenced but not present — will 404)
- DNS not yet pointed at Vercel (still on Netlify in Namecheap)
- og:image meta tag not set (no social sharing preview)
- Spin to Decide has no custom domain (still on vercel.app URL)
- SpinWheel GitHub link not shown on card
- FitTrack GitHub link not shown on card

## Next Phase Plan
### Phase: Polish & Completeness
**Goal:** Full production quality — no 404 screenshots, proper SEO, working custom domain
**Features:**
- Add all missing screenshots to public/screenshots/
- Migrate DNS from Netlify to Vercel in Namecheap
- Add og:image to layout.tsx for social sharing
- Add spin.c2tbuilds.com custom domain for SpinWheel after DNS migration
- Remove desktop-tutorial/ dir

## Quick Fixes Done This Session
- Deleted `.netlify/` directory
- Fixed AI-Mov URL from `ai-mov-psi.vercel.app` → `ai-mov.c2tbuilds.com`
