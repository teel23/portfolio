'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ExternalLink, Star, ChevronLeft, ChevronRight, Clock } from 'lucide-react'

interface Project {
  title: string
  category: string
  description: string
  tags: string[]
  screenshot?: string
  screenshotLabel?: string
  demoUrl?: string
  beta?: boolean
}

interface ComingSoonProject {
  title: string
  category: string
  description: string
  tags: string[]
}

const projects: Project[] = [
  {
    title: 'Darts Scoreboard',
    category: 'PWA',
    screenshot: '/screenshots/darts-real.png',
    screenshotLabel: 'Cricket',
    description:
      'A mobile-first darts scoreboard PWA supporting four game modes: 01 Games (301/501/701), Cricket, Tic Tac Toe Darts, and Bermuda Triangle (Halve-It). Features per-player dart tracking, undo history, auto-advance after 3 darts, a live dartboard display, and installable on any device.',
    tags: ['React', 'JavaScript', 'CSS', 'PWA', 'Vercel'],
    demoUrl: 'https://darts.c2tbuilds.com',
  },
  {
    title: 'AI-Mov',
    category: 'AI App',
    screenshot: '/screenshots/aimov-real.png',
    screenshotLabel: 'AI Recommender',
    description:
      'A cinematic AI-powered movie & TV chat app. Tell it your mood or a film you loved — it responds like a film-obsessed friend, with picks rendered as sleek streaming cards. Built with the Claude API on the backend for real-time streaming recommendations.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Claude API', 'Streaming', 'Vercel'],
    demoUrl: 'https://ai-mov.c2tbuilds.com',
    beta: true,
  },
  {
    title: 'Golf Scorecard',
    category: 'PWA',
    screenshot: '/screenshots/golf-real.png',
    screenshotLabel: 'Scorecard',
    description:
      'An offline-first golf scoring PWA with Augusta-inspired design. Manage courses with full 18-hole par data, track strokes hole-by-hole with quick preset buttons (Eagle through Double Bogey), view running totals vs par, and review complete round history with front/back 9 breakdowns — all stored locally on your device.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Dexie.js', 'PWA', 'Vercel'],
    demoUrl: 'https://golf.c2tbuilds.com',
    beta: true,
  },
  {
    title: 'FitTrack',
    category: 'PWA',
    description:
      'A mobile-first progressive web app for tracking workouts, body metrics, and fitness progress. Features offline support, installable on any device, workout logging across multiple categories (cardio, strength, body metrics), progress charts powered by Chart.js, and a calendar view of training history.',
    tags: ['JavaScript', 'HTML', 'CSS', 'Chart.js', 'PWA', 'Service Worker', 'Vercel'],
    demoUrl: 'https://fittrack.c2tbuilds.com',
    beta: true,
  },
  {
    title: 'Spin to Decide',
    category: 'Tool',
    description:
      'A sleek decision-making spin wheel. Add up to 20 custom choices, spin to let fate decide, then keep or eliminate the result. Features vivid color-coded segments, smooth eased animation, and a clean dark UI — no login, no fluff, just spin.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Canvas', 'Vercel'],
    demoUrl: 'https://spin.c2tbuilds.com',
    beta: true,
  },
]

const comingSoonProjects: ComingSoonProject[] = [
  {
    title: 'Daily News Digest',
    category: 'Automation',
    description:
      'Morning email digest covering Illinois basketball, Big Ten, Timberwolves, business, politics, and AI — built with Python, GitHub Actions, and the Claude API. Runs daily, zero infrastructure.',
    tags: ['Python', 'GitHub Actions', 'NewsAPI', 'Claude API'],
  },
  {
    title: 'Mini Games',
    category: 'Web App',
    description:
      'A collection of 8 browser-based games — 2048, Minesweeper, Wordle-style, Sudoku, Solitaire, water sort, sand fall, and tic-tac-toe — with Supabase leaderboards.',
    tags: ['Next.js', 'Tailwind CSS', 'Supabase'],
  },
  {
    title: 'Fantasy Football AI Bot',
    category: 'AI App',
    description:
      'AI-powered fantasy football assistant with a custom weighting engine, self-learning capabilities, and a free data stack. Analyzes matchups and suggests waiver pickups week over week.',
    tags: ['Python', 'Supabase', 'Claude API'],
  },
]

// PWA install tooltip — shown once per device
function PWATooltip() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const seen = localStorage.getItem('pwa-tip-seen')
    if (!seen) {
      const t = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(t)
    }
  }, [])

  function dismiss() {
    localStorage.setItem('pwa-tip-seen', '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-sm">
      <div className="bg-[#111] border border-blue-400/30 rounded-2xl shadow-xl shadow-black/40 p-5">
        <p className="text-white font-medium text-sm mb-3">Install any app to your home screen</p>
        <ul className="text-gray-400 text-xs space-y-1.5 mb-4">
          <li><span className="text-blue-400 font-mono">iOS:</span> Tap Share → Add to Home Screen</li>
          <li><span className="text-blue-400 font-mono">Android:</span> Tap the browser menu → Add to Home Screen</li>
        </ul>
        <button
          onClick={dismiss}
          className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium rounded-lg transition-colors"
        >
          Got it
        </button>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6">
      <PWATooltip />
      <div className="max-w-5xl mx-auto">

        {/* ── Live Projects ─────────────────────────────────── */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-blue-400 font-mono text-sm">02.</span>
          <h2 className="text-3xl font-bold text-white">Projects</h2>
          <div className="flex-1 h-px bg-white/5 ml-4" />
        </div>

        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col md:flex-row gap-0 rounded-2xl bg-white/[0.03] border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 overflow-hidden"
            >
              {project.screenshot && (
                <div className="relative md:w-52 md:flex-shrink-0 bg-black/40 overflow-hidden">
                  <Image
                    src={project.screenshot}
                    alt={`${project.title} – ${project.screenshotLabel ?? 'screenshot'}`}
                    width={390}
                    height={844}
                    className="w-full md:w-52 h-56 md:h-full object-cover object-top"
                  />
                  {project.screenshotLabel && (
                    <span className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] font-mono bg-black/60 text-blue-300 px-2 py-0.5 rounded-full whitespace-nowrap backdrop-blur-sm">
                      {project.screenshotLabel}
                    </span>
                  )}
                </div>
              )}

              <div className="flex flex-col flex-1 p-5 md:p-7">
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <span className="text-xs font-mono text-blue-400 bg-blue-400/10 px-2 py-1 rounded">
                    {project.category}
                  </span>
                  {project.beta ? (
                    <span className="text-xs text-orange-400 bg-orange-400/10 border border-orange-400/20 px-2 py-1 rounded">
                      BETA
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-xs text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded">
                      <Star size={11} fill="currentColor" /> Featured
                    </span>
                  )}
                </div>

                <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-gray-400 bg-white/[0.05] px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 mt-auto pt-5">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                    >
                      <ExternalLink size={15} />
                      Launch App
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Coming Soon ───────────────────────────────────── */}
        <div className="flex items-center gap-3 mt-20 mb-8">
          <span className="text-amber-400/60 font-mono text-sm">03.</span>
          <h2 className="text-xl font-bold text-white/60">Coming Soon</h2>
          <div className="flex-1 h-px bg-white/5 ml-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {comingSoonProjects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col gap-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-amber-400/20 transition-colors duration-300 p-5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-amber-400/70 bg-amber-400/10 px-2 py-1 rounded">
                  {project.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] text-amber-400/60 font-medium">
                  <Clock size={11} />
                  In progress
                </span>
              </div>

              <h3 className="text-white/80 font-semibold text-base">
                {project.title}
              </h3>

              <p className="text-gray-500 text-xs leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] text-gray-600 bg-white/[0.04] px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
