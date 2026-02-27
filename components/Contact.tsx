'use client'

import { Mail, Lightbulb, ArrowUpRight } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 w-full">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className="text-blue-400 font-mono text-sm">04.</span>
          <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
        </div>

        <p className="text-gray-400 text-lg leading-relaxed mb-4">
          Have a project idea, feedback on one of my apps, or just want to say hello?
          I&apos;d love to hear from you.
        </p>
        <p className="text-gray-500 mb-12">
          Drop me an email and I&apos;ll get back to you as soon as I can.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:carson@c2tbuilds.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl transition-colors duration-200 group"
          >
            <Mail size={20} />
            Send Me an Email
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </a>

          <a
            href="mailto:carson@c2tbuilds.com?subject=App%20Suggestion&body=Hi%20Carson%2C%0A%0AI%20have%20a%20suggestion%20for%20one%20of%20your%20apps%3A%0A%0A"
            className="inline-flex items-center gap-3 px-8 py-4 border border-white/10 hover:border-blue-400/50 text-gray-300 hover:text-white rounded-xl transition-all duration-200 group"
          >
            <Lightbulb size={20} className="text-yellow-400" />
            Submit a Suggestion
          </a>
        </div>

        <p className="text-gray-600 text-sm mt-8">
          carson@c2tbuilds.com
        </p>
      </div>
    </section>
  )
}
