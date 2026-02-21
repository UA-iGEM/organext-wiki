import Link from 'next/link'

export type WikiSection = 'project' | 'wet-lab' | 'dry-lab' | 'human-practices' | 'team' | 'timeline' | 'awards'

const sectionLinks: { section: WikiSection; label: string; routes: { href: string; label: string }[] }[] = [
  {
    section: 'project',
    label: 'Project',
    routes: [
      { href: '/project/overview', label: 'Overview' },
      { href: '/project/description', label: 'Description' },
      { href: '/project/application', label: 'Application' },
    ],
  },
  {
    section: 'wet-lab',
    label: 'Wet Lab',
    routes: [
      { href: '/wet-lab/design', label: 'Design' },
      { href: '/wet-lab/experiments', label: 'Experiments' },
      { href: '/wet-lab/reagents', label: 'Reagents' },
      { href: '/wet-lab/results', label: 'Results' },
    ],
  },
  {
    section: 'dry-lab',
    label: 'Dry Lab',
    routes: [
      { href: '/dry-lab/intro', label: 'Intro' },
      { href: '/dry-lab/methods', label: 'Methods' },
      { href: '/dry-lab/optimization', label: 'Optimization' },
      { href: '/dry-lab/validation', label: 'Validation' },
    ],
  },
  {
    section: 'human-practices',
    label: 'Human Practices',
    routes: [
      { href: '/human-practices/outreach', label: 'Outreach' },
      { href: '/human-practices/community', label: 'Community' },
    ],
  },
  {
    section: 'team',
    label: 'Team',
    routes: [{ href: '/team', label: 'Team' }],
  },
  {
    section: 'timeline',
    label: 'Timeline',
    routes: [{ href: '/timeline', label: 'Timeline' }],
  },
  {
    section: 'awards',
    label: 'Awards',
    routes: [{ href: '/awards', label: 'Awards' }],
  },
]

interface SidebarProps {
  className?: string
}

export default function Sidebar({ className = '' }: SidebarProps) {
  return (
    <aside className={`rounded-igem-lg border border-primary/30 bg-primary-dark/60 p-4 ${className}`} aria-label="Wiki sections">
      <h2 className="font-mono text-sm font-bold uppercase tracking-wide text-primary-light/80 mb-4">
        Wiki sections
      </h2>
      <ul className="space-y-3">
        {sectionLinks.map(({ section, label, routes }) => (
          <li key={section}>
            <span className="block text-xs font-body text-primary-light/60 mb-1">{label}</span>
            <ul className="space-y-1">
              {routes.map(({ href, label: routeLabel }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block rounded-lg py-1.5 px-2 text-sm text-primary-light/90 transition-colors hover:bg-primary/20 hover:text-primary-light"
                  >
                    {routeLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  )
}
