'use client'

import { Code2, Layers, Zap } from 'lucide-react'

const highlights = [
  {
    icon: <Code2 size={20} className="text-blue-400" />,
    title: 'Clean Code',
    desc: 'Writing maintainable, readable code that scales with your project.',
  },
  {
    icon: <Layers size={20} className="text-blue-400" />,
    title: 'Full Stack',
    desc: 'Comfortable across the stack — from UI to database to deployment.',
  },
  {
    icon: <Zap size={20} className="text-blue-400" />,
    title: 'Fast Delivery',
    desc: 'Shipping functional products quickly without sacrificing quality.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-blue-400 font-mono text-sm">01.</span>
          <h2 className="text-3xl font-bold text-white">About</h2>
          <div className="flex-1 h-px bg-white/5 ml-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I&apos;m a developer focused on building web applications that are fast, functional,
              and well-designed. I enjoy turning ideas into products that people actually use.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              My approach is simple: understand the problem first, then build the right solution.
              Whether it&apos;s a side project or a production app, I bring the same level of care
              to every line of code.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I&apos;m not coding, I&apos;m exploring new tools, frameworks, and ideas —
              always looking for a better way to build things.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-blue-400/20 transition-colors"
              >
                <div className="mt-0.5 shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-white font-medium mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
