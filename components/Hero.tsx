'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Github } from 'lucide-react'

const roles = ['Developer', 'Builder', 'Problem Solver']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 100)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 60)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-blue-400 text-sm font-mono tracking-widest uppercase mb-6 opacity-80">
          Welcome to my portfolio
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
          C2T<span className="text-blue-400">.</span>Builds
        </h1>

        <div className="h-12 flex items-center justify-center mb-8">
          <span className="text-2xl md:text-3xl text-gray-300 font-light">
            {displayed}
            <span className="inline-block w-0.5 h-7 bg-blue-400 ml-1 animate-pulse" />
          </span>
        </div>

        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          Building web applications that solve real problems. Clean code, thoughtful design, and a
          focus on user experience.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/projects"
            className="flex items-center gap-2 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200 group"
          >
            View Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          <a
            href="https://github.com/teel23"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3 border border-white/10 hover:border-blue-400/50 text-gray-300 hover:text-white rounded-lg transition-all duration-200"
          >
            <Github size={18} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
