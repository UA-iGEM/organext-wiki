import Section from '@/components/ui/Section'
import SectionCard from '@/components/ui/SectionCard'
import Gallery from '@/components/ui/Gallery'

export default function TeamPage() {
  return (
    <main>
      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <h1 className="font-mono text-3xl font-bold text-primary-light mb-4">
          Team
        </h1>
        <p className="text-primary-light/90 mb-8">
          Meet the people behind the project. Replace with your team intro and member profiles.
        </p>

        <Section title="Team members">
          <div className="grid gap-6 sm:grid-cols-2">
            <SectionCard title="Member name">
              <p>Role and short bio. Add photo via Gallery or image.</p>
            </SectionCard>
            <SectionCard title="Member name">
              <p>Role and short bio.</p>
            </SectionCard>
          </div>
        </Section>

        <Section title="Team photo">
          <Gallery columns={1} />
        </Section>
      </article>
    </main>
  )
}
