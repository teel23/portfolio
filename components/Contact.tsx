'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

export default function Contact() {
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

  return (
    <section id="contact" className="py-16 px-6 w-full">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-blue-400 font-mono text-sm">04.</span>
          <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
        </div>

        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          Have a question or want to work together? Send a message and I&apos;ll get back to you.
        </p>

        {status === 'sent' ? (
          <div className="rounded-xl bg-blue-500/10 border border-blue-400/20 p-8 text-center">
            <p className="text-blue-400 font-medium text-lg mb-1">Message sent!</p>
            <p className="text-gray-400 text-sm">I&apos;ll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="Contact from c2tbuilds.com" />

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-gray-400 text-sm font-medium" htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="px-4 py-3 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-400/50 transition-colors text-sm"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-gray-400 text-sm font-medium" htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="px-4 py-3 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-400/50 transition-colors text-sm"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-gray-400 text-sm font-medium" htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder="What's on your mind?"
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
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        )}

        <p className="text-gray-600 text-sm mt-8">
          Carson Teel · <a href="mailto:01teel@gmail.com" className="text-gray-500 hover:text-gray-300 transition-colors">01teel@gmail.com</a>
        </p>
      </div>
    </section>
  )
}
