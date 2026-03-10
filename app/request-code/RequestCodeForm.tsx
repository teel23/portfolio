'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

export default function RequestCodeForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('https://formsubmit.co/ajax/01teel@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="rounded-xl bg-blue-500/10 border border-blue-400/20 p-10 text-center">
        <p className="text-blue-400 font-medium text-lg mb-2">Request received!</p>
        <p className="text-gray-400 text-sm">I&apos;ll review your project details and reach out soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_subject" value="Code Request from c2tbuilds.com" />

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-gray-400 text-sm font-medium" htmlFor="rc-name">Name</label>
          <input
            id="rc-name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="px-4 py-3 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-400/50 transition-colors text-sm"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-gray-400 text-sm font-medium" htmlFor="rc-email">Email</label>
          <input
            id="rc-email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className="px-4 py-3 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-400/50 transition-colors text-sm"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-gray-400 text-sm font-medium" htmlFor="rc-project">Project Description</label>
        <textarea
          id="rc-project"
          name="project"
          required
          rows={6}
          placeholder="Describe what you want built — the more detail, the better. What problem does it solve? Who is it for? Any specific features or tech preferences?"
          className="px-4 py-3 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-400/50 transition-colors text-sm resize-none"
        />
      </div>

      {status === 'error' && (
        <p className="text-red-400 text-sm">Something went wrong — please try again.</p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 disabled:opacity-60 text-white font-medium rounded-lg transition-colors duration-200 self-start"
      >
        <Send size={15} />
        {status === 'sending' ? 'Sending…' : 'Submit Request'}
      </button>
    </form>
  )
}
