import Link from 'next/link'
import Card from '@/components/ui/Card'
import Section from '@/components/ui/Section'

const navCards = [
  { href: '/project/overview', title: 'Project', description: 'Overview, description, and application of our project.' },
  { href: '/wet-lab/design', title: 'Wet Lab', description: 'Design, experiments, reagents, and results.' },
  { href: '/dry-lab/intro', title: 'Dry Lab', description: 'Introduction, methods, optimization, and validation.' },
  { href: '/human-practices/outreach', title: 'Human Practices', description: 'Outreach and community engagement.' },
  { href: '/team', title: 'Team', description: 'Meet the team behind the project.' },
  { href: '/awards', title: 'Awards', description: 'Awards and recognition.' },
]

export default function HomePage() {
  return (
    <article>
      <section className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 text-center">
        <h1 className="font-mono text-4xl font-bold tracking-tight text-primary-light sm:text-5xl">
          UA iGEM
        </h1>
        <p className="mt-4 text-xl text-primary-light/90 max-w-2xl mx-auto">
          UA iGEM is a student-run synthetic biology club at the University of Arizona.<br />In 2026, we built designed and tested a new framework for growing organoids in pursuit of accelerating in vitro cancer modeling.
        </p>
      </section>

      <Section title="Explore the wiki" className="pt-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
          {navCards.map(({ href, title, description }) => (
            <Card key={href} asLink={href} title={title}>
              <p className="text-primary-light/85 text-sm">{description}</p>
            </Card>
          ))}
        </div>
      </Section>
    </article>
  )
}
