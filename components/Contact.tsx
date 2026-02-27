'use client'

import { Github, ArrowUpRight } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 w-full">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className="text-blue-400 font-mono text-sm">04.</span>
          <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
        </div>

        <p className="text-gray-400 text-lg leading-relaxed mb-4">
          Have a project in mind or want to collaborate? I&apos;m always open to interesting ideas
          and new opportunities.
        </p>
        <p className="text-gray-500 mb-12">
          The best way to reach me is through GitHub.
        </p>

        <a
          href="https://github.com/teel23"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl transition-colors duration-200 group"
        >
          <Github size={20} />
          View GitHub Profile
          <ArrowUpRight
            size={16}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
          />
        </a>
      </div>
    </section>
  )
}
