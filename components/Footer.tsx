import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 px-6 py-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-gray-600 text-sm font-mono">
          © {year} C2T<span className="text-blue-400">.</span>Builds
        </span>

        <Link
          href="/request-code"
          className="text-gray-600 hover:text-white text-sm transition-colors"
        >
          Request Code
        </Link>
      </div>
    </footer>
  )
}
