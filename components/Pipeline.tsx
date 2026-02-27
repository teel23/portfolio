'use client'

import { Newspaper, Clock } from 'lucide-react'

interface PipelineItem {
  icon: React.ReactNode
  title: string
  description: string
  tags: string[]
  status: 'building' | 'planned'
}

const pipeline: PipelineItem[] = [
  {
    icon: <Newspaper size={22} />,
    title: 'Daily Newsletter',
    description:
      'A curated daily digest that cuts through the noise. Top stories across tech, sports, and culture — filtered, summarized, and delivered in under 5 minutes of reading time.',
    tags: ['Next.js', 'News API', 'AI Summarization', 'Email'],
    status: 'planned',
  },
]

const statusConfig = {
  building: { label: 'In Progress', color: 'text-blue-400 bg-blue-400/10 border-blue-400/20' },
  planned: { label: 'Coming Soon', color: 'text-purple-400 bg-purple-400/10 border-purple-400/20' },
}

export default function Pipeline() {
  return (
    <section id="pipeline" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-blue-400 font-mono text-sm">03.</span>
          <h2 className="text-3xl font-bold text-white">Pipeline</h2>
          <div className="flex-1 h-px bg-white/5 ml-4" />
        </div>
        <p className="text-gray-500 text-sm mb-10 ml-10">What&apos;s being built next</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {pipeline.map((item) => {
            const { label, color } = statusConfig[item.status]
            return (
              <div
                key={item.title}
                className="flex flex-col rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-blue-400/20 transition-all duration-300 p-6 gap-4"
              >
                {/* Header row */}
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-blue-400">
                    {item.icon}
                  </div>
                  <span className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border ${color}`}>
                    <Clock size={10} />
                    {label}
                  </span>
                </div>

                {/* Title + description */}
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-gray-600 bg-white/[0.03] border border-white/[0.06] px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
