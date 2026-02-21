import Link from 'next/link'

const footerLinks = [
  { href: '/project/overview', label: 'Project' },
  { href: '/wet-lab/design', label: 'Wet Lab' },
  { href: '/dry-lab/intro', label: 'Dry Lab' },
  { href: '/human-practices/outreach', label: 'Human Practices' },
  { href: '/team', label: 'Team' },
  { href: '/timeline', label: 'Timeline' },
  { href: '/awards', label: 'Awards' },
]

export default function Footer() {
  return (
    <footer className="border-t border-primary/30 bg-primary-dark/80 mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer">
          {footerLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-primary-light/80 transition-colors hover:text-primary-light"
            >
              {label}
            </Link>
          ))}
        </nav>
        <p className="mt-6 text-center text-sm text-primary-light/60 font-mono">
          UA iGEM — University of Arizona
        </p>
      </div>
    </footer>
  )
}
