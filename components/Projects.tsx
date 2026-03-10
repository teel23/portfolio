'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ExternalLink, Github, Star, ChevronLeft, ChevronRight, Download, Clock } from 'lucide-react'

interface Project {
  title: string
  category: string
  description: string
  tags: string[]
  screenshots: string[]
  screenshotLabels?: string[]
  demoUrl?: string
  installUrl?: string
  codeUrl?: string
  beta?: boolean
  comingSoon?: boolean
}

const projects: Project[] = [
  {
    title: 'Darts Scoreboard',
    category: 'PWA',
    screenshots: ['/screenshots/darts-game.png'],
    screenshotLabels: ['Cricket'],
    description:
      'A mobile-first darts scoreboard PWA supporting four game modes: 01 Games (301/501/701), Cricket, Tic Tac Toe Darts, and Bermuda Triangle (Halve-It). Features per-player dart tracking, undo history, auto-advance after 3 darts, a live dartboard display, and installable on any device.',
    tags: ['React', 'JavaScript', 'CSS', 'PWA', 'Vercel'],
    demoUrl: 'https://darts.c2tbuilds.com',
    installUrl: 'https://darts.c2tbuilds.com',
  },
  {
    title: 'AI-Mov',
    category: 'AI App',
    screenshots: ['/screenshots/aimov-card.png'],
    screenshotLabels: ['AI Recommender'],
    description:
      'A cinematic AI-powered movie & TV chat app. Tell it your mood or a film you loved — it responds like a film-obsessed friend, with picks rendered as sleek streaming cards. Built with the Claude API on the backend for real-time streaming recommendations.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Claude API', 'Streaming', 'Vercel'],
    demoUrl: 'https://ai-mov.c2tbuilds.com',
    beta: true,
  },
  {
    title: 'Golf Scorecard',
    category: 'PWA',
    screenshots: [
      '/screenshots/golf-home.png',
      '/screenshots/golf-game.png',
    ],
    screenshotLabels: ['Dashboard', 'Scorecard'],
    description:
      'An offline-first golf scoring PWA with Augusta-inspired design. Manage courses with full 18-hole par data, track strokes hole-by-hole with quick preset buttons (Eagle through Double Bogey), view running totals vs par, and review complete round history with front/back 9 breakdowns — all stored locally on your device.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Dexie.js', 'PWA', 'Vercel'],
    demoUrl: 'https://golf.c2tbuilds.com',
    installUrl: 'https://golf.c2tbuilds.com',
    beta: true,
  },
  {
    title: 'FitTrack',
    category: 'PWA',
    screenshots: ['/screenshots/fittrack-home.png'],
    screenshotLabels: ['Dashboard'],
    description:
      'A mobile-first progressive web app for tracking workouts, body metrics, and fitness progress. Features offline support, installable on any device, workout logging across multiple categories (cardio, strength, body metrics), progress charts powered by Chart.js, and a calendar view of training history.',
    tags: ['JavaScript', 'HTML', 'CSS', 'Chart.js', 'PWA', 'Service Worker', 'Vercel'],
    demoUrl: 'https://fittrack.c2tbuilds.com',
    installUrl: 'https://fittrack.c2tbuilds.com',
    codeUrl: 'https://github.com/teel23/fittrack',
    beta: true,
  },
  {
    title: 'Spin to Decide',
    category: 'Tool',
    screenshots: ['/screenshots/spinwheel.png'],
    screenshotLabels: ['Spin Wheel'],
    description:
      'A sleek decision-making spin wheel. Add up to 20 custom choices, spin to let fate decide, then keep or eliminate the result. Features vivid color-coded segments, smooth eased animation, and a clean dark UI — no login, no fluff, just spin.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Canvas', 'Vercel'],
    demoUrl: 'https://spin.c2tbuilds.com',
    installUrl: 'https://spin.c2tbuilds.com',
    beta: true,
  },
  {
    title: 'Daily News Digest',
    category: 'Automation',
    screenshots: ['/screenshots/daily-news-digest.png'],
    screenshotLabels: ['Email Digest'],
    description:
      'A Python/GitHub Actions pipeline that delivers a personalized morning email covering Illinois basketball, Big Ten, Timberwolves, business, politics, and AI. Pulls live headlines via NewsAPI and summarizes them using the Claude API — runs daily, zero infrastructure.',
    tags: ['Python', 'GitHub Actions', 'NewsAPI', 'Claude API'],
    codeUrl: 'https://github.com/teel23/daily-news-digest',
    comingSoon: true,
    beta: true,
  },
  {
    title: 'Mini Games',
    category: 'Web App',
    screenshots: ['/screenshots/mini-games.png'],
    screenshotLabels: ['Game Hub'],
    description:
      'A collection of 8 browser-based mini games including 2048, Minesweeper, Wordle-style, Sudoku, Solitaire, water sort, sand fall, and tic-tac-toe. Built with Next.js and Tailwind, with leaderboards powered by Supabase.',
    tags: ['Next.js', 'Tailwind CSS', 'Supabase', 'Vercel'],
    codeUrl: 'https://github.com/teel23/mini-games',
    comingSoon: true,
    beta: true,
  },
  {
    title: 'Fantasy Football AI Bot',
    category: 'AI App',
    screenshots: ['/screenshots/ff-bot.png'],
    screenshotLabels: ['AI Assistant'],
    description:
      'An AI-powered fantasy football assistant with a custom weighting engine, self-learning capabilities, and a fully free data stack. Analyzes matchups, suggests waiver pickups, and improves week over week. Currently in active development.',
    tags: ['Python', 'Supabase', 'Claude API'],
    codeUrl: 'https://github.com/teel23/fantasy-football-bot',
    comingSoon: true,
    beta: true,
  },
]

function ScreenshotCarousel({ screenshots, labels, title }: { screenshots: string[], labels?: string[], title: string }) {
  const [idx, setIdx] = useState(0)
  const canPrev = idx > 0
  const canNext = idx < screenshots.length - 1

  return (
    <div className="relative md:w-52 md:flex-shrink-0 bg-black/40 flex flex-col overflow-hidden">
      {/* Image */}
      <div className="relative flex-1">
        <Image
          src={screenshots[idx]}
          alt={`${title} – ${labels?.[idx] ?? idx + 1}`}
          width={390}
          height={844}
          className="w-full md:w-52 h-56 md:h-full object-cover object-top transition-opacity duration-300"
        />
        {/* Label pill */}
        {labels && (
          <span className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] font-mono bg-black/60 text-blue-300 px-2 py-0.5 rounded-full whitespace-nowrap backdrop-blur-sm">
            {labels[idx]}
          </span>
        )}
      </div>

      {/* Nav arrows — only if multiple */}
      {screenshots.length > 1 && (
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-1 pointer-events-none">
          <button
            onClick={(e) => { e.stopPropagation(); if (canPrev) setIdx(i => i - 1) }}
            disabled={!canPrev}
            className="pointer-events-auto w-6 h-6 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white disabled:opacity-20 hover:bg-black/80 transition-all"
          >
            <ChevronLeft size={13} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); if (canNext) setIdx(i => i + 1) }}
            disabled={!canNext}
            className="pointer-events-auto w-6 h-6 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white disabled:opacity-20 hover:bg-black/80 transition-all"
          >
            <ChevronRight size={13} />
          </button>
        </div>
      )}

      {/* Dot indicators */}
      {screenshots.length > 1 && (
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
          {screenshots.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setIdx(i) }}
              className={`w-1.5 h-1.5 rounded-full transition-all ${i === idx ? 'bg-blue-400 scale-125' : 'bg-white/30'}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
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
              {/* Screenshot carousel */}
              <ScreenshotCarousel
                screenshots={project.screenshots}
                labels={project.screenshotLabels}
                title={project.title}
              />

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 md:p-7">
                {/* Badges — no icon links */}
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

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 mt-auto pt-5">

                  {/* Launch App — blue */}
                  {project.demoUrl && !project.comingSoon && (
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

                  {/* Install App — green — PWA only */}
                  {project.installUrl && !project.comingSoon && (
                    <a
                      href={project.installUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                    >
                      <Download size={15} />
                      Install App
                    </a>
                  )}

                  {/* View Code — gray */}
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 bg-white/[0.06] hover:bg-white/[0.10] active:bg-white/[0.14] text-gray-300 hover:text-white text-sm font-medium rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200"
                    >
                      <Github size={15} />
                      View Code
                    </a>
                  )}

                  {/* Coming Soon — amber */}
                  {project.comingSoon && (
                    <span className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 bg-amber-500/10 text-amber-400 text-sm font-medium rounded-lg border border-amber-500/20 cursor-not-allowed select-none">
                      <Clock size={15} />
                      Coming Soon
                    </span>
                  )}

                  {/* Mobile PWA install hint */}
                  {project.installUrl && !project.comingSoon && (
                    <p className="text-[10px] text-gray-600 sm:hidden w-full text-center -mt-1">
                      Opens in browser · tap Share → Add to Home Screen
                    </p>
                  )}

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
