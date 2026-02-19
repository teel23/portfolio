'use client'

interface Tech {
  name: string
  icon: string
}

const techStack: Tech[] = [
  { name: 'Next.js', icon: '▲' },
  { name: 'React', icon: '⚛' },
  { name: 'TypeScript', icon: 'TS' },
  { name: 'JavaScript', icon: 'JS' },
  { name: 'Python', icon: 'Py' },
  { name: 'Tailwind', icon: '~' },
  { name: 'Node.js', icon: '⬡' },
  { name: 'PostgreSQL', icon: '⛃' },
  { name: 'Prisma', icon: '◈' },
  { name: 'Supabase', icon: '⚡' },
  { name: 'Vercel', icon: '▲' },
  { name: 'Git', icon: '⑂' },
]

export default function TechStack() {
  return (
    <section id="stack" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-blue-400 font-mono text-sm">03.</span>
          <h2 className="text-3xl font-bold text-white">Tech Stack</h2>
          <div className="flex-1 h-px bg-white/5 ml-4" />
        </div>

        <p className="text-gray-400 mb-10 max-w-xl">
          Tools and technologies I use regularly to build and ship products.
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-blue-400/30 hover:bg-blue-400/5 transition-all duration-200 cursor-default"
            >
              <span className="text-xl font-mono text-blue-400 group-hover:scale-110 transition-transform duration-200">
                {tech.icon}
              </span>
              <span className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
