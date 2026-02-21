import Section from '@/components/ui/Section'
import SectionCard from '@/components/ui/SectionCard'

export default function TimelinePage() {
  return (
    <main>
      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <h1 className="font-mono text-3xl font-bold text-primary-light mb-4">
          Timeline
        </h1>
        <p className="text-primary-light/90 mb-8">
          Project milestones and schedule. Replace with your timeline content.
        </p>

        <Section title="Milestones">
          <SectionCard title="Phase 1">
            <p>Key dates and deliverables for the first phase.</p>
          </SectionCard>
          <SectionCard title="Phase 2" className="mt-4">
            <p>Key dates and deliverables for the second phase.</p>
          </SectionCard>
          <SectionCard title="Phase 3" className="mt-4">
            <p>Key dates and deliverables for the final phase.</p>
          </SectionCard>
        </Section>
      </article>
    </main>
  )
}
