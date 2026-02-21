import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/project/overview', label: 'Project' },
  { href: '/wet-lab/design', label: 'Wet Lab' },
  { href: '/dry-lab/intro', label: 'Dry Lab' },
  { href: '/human-practices/outreach', label: 'Human Practices' },
  { href: '/team', label: 'Team' },
  { href: '/awards', label: 'Awards' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-primary/30 bg-primary-dark/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-6 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-4 rounded-igem transition-opacity hover:opacity-90 font-mono font-bold text-primary-light text-3xl"
          aria-label="Home"
        >
          <Image
            src="/logo.png"
            alt=""
            width={300}
            height={96}
            className="h-18 w-auto"
          />
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-2 sm:gap-4" aria-label="Main">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-igem px-4 py-4 text-xl font-mono font-bold text-primary-light/90 transition duration-300 hover:scale-110 hover:text-primary-light"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
