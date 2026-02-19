import type { Metadata } from 'next'
import Contact from '@/components/Contact'

export const metadata: Metadata = {
  title: 'Contact | C2T Builds',
  description: 'Get in touch with C2T Builds.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-24 flex items-center">
      <Contact />
    </main>
  )
}
