import type { Metadata } from 'next'
import RequestCodeForm from './RequestCodeForm'

export const metadata: Metadata = {
  title: 'Request Code | C2T Builds',
  description: 'Tell me about your project and let\'s build something together.',
}

export default function RequestCodePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-24 pb-16 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-blue-400 font-mono text-sm">→</span>
          <h1 className="text-3xl font-bold text-white">Request Code</h1>
        </div>

        <p className="text-gray-400 text-lg leading-relaxed mb-2">
          Have an idea you want built? Fill out the form below.
        </p>
        <p className="text-gray-500 text-sm mb-10">
          Whether it&apos;s a web app, a tool, or something with AI — describe what you&apos;re looking for and I&apos;ll be in touch.
        </p>

        <RequestCodeForm />
      </div>
    </main>
  )
}
