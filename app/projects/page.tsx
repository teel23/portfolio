import type { Metadata } from 'next'
import Projects from '@/components/Projects'

export const metadata: Metadata = {
  title: 'Projects | C2T Builds',
  description: 'Web applications and projects built by C2T Builds.',
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-24">
      <Projects />
    </main>
  )
}
