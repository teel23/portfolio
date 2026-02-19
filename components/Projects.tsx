'use client'

import { ExternalLink, Github, Star } from 'lucide-react'

interface Project {
  title: string
  category: string
  description: string
  tags: string[]
  demoUrl?: string
  codeUrl?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    title: 'FitTrack',
    category: 'PWA',
    featured: true,
    description:
      'A mobile-first progressive web app for tracking workouts, body metrics, and fitness progress. Features offline support, installable on any device, workout logging across multiple categories (cardio, strength, body metrics), progress charts powered by Chart.js, and a calendar view of training history.',
    tags: ['JavaScript', 'HTML', 'CSS', 'Chart.js', 'PWA', 'Service Worker', 'Netlify'],
    demoUrl: 'https://fittrack.c2tbuilds.com',
    codeUrl: 'https://github.com/teel23/fitness-tracker',
  },
  {
    title: 'DevLink Dashboard',
    category: 'WEB',
    description:
      'A developer productivity dashboard that aggregates GitHub activity, pull requests, and todos in a single, unified interface.',
    tags: ['React', 'Node.js', 'GitHub API', 'PostgreSQL'],
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'TaskFlow',
    category: 'WEB',
    description:
      'A minimal task management app with drag-and-drop boards, team collaboration, and real-time updates powered by WebSockets.',
    tags: ['Next.js', 'Prisma', 'Socket.io', 'Supabase'],
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'PriceWatch',
    category: 'WEB',
    description:
      'An e-commerce price tracker that monitors product prices and sends email alerts when prices drop below a user-defined threshold.',
    tags: ['Python', 'FastAPI', 'React', 'Celery'],
    demoUrl: '#',
    codeUrl: '#',
  },
]

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-blue-400 font-mono text-sm">02.</span>
          <h2 className="text-3xl font-bold text-white">Projects</h2>
          <div className="flex-1 h-px bg-white/5 ml-4" />
        </div>

        {/* Featured projects */}
        {featured.map((project) => (
          <div
            key={project.title}
            className="group mb-6 flex flex-col p-7 rounded-2xl bg-white/[0.03] border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-blue-400 bg-blue-400/10 px-2 py-1 rounded">
                  {project.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded">
                  <Star size={11} fill="currentColor" /> Featured
                </span>
              </div>
              <div className="flex gap-3">
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-white transition-colors"
                    aria-label="View code"
                  >
                    <Github size={18} />
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-400 transition-colors"
                    aria-label="View demo"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-5">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-gray-400 bg-white/[0.05] px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors duration-200 group/btn"
              >
                <ExternalLink size={15} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                Launch App
              </a>
            )}
          </div>
        ))}

        {/* Other projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {rest.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-blue-400/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-mono text-blue-400 bg-blue-400/10 px-2 py-1 rounded">
                  {project.category}
                </span>
                <div className="flex gap-3">
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-white transition-colors"
                      aria-label="View code"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-400 transition-colors"
                      aria-label="View demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-gray-400 bg-white/[0.05] px-2.5 py-1 rounded-full"
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
