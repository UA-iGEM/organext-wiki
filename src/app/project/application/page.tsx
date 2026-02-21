import Section from '@/components/ui/Section'
import SectionCard from '@/components/ui/SectionCard'

export default function ProjectApplicationPage() {
  return (
    <main>
      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <h1 className="font-mono text-3xl font-bold text-primary-light mb-4">
          Application
        </h1>
        <p className="text-primary-light/90 mb-8">
          How your project can be applied: use cases, beneficiaries, and real-world impact. Replace with your application content.
        </p>

        <Section title="Use cases">
          <SectionCard title="Primary application">
            <p>Main use case and target users.</p>
          </SectionCard>
          <SectionCard title="Future applications" className="mt-4">
            <p>Potential extensions or other applications.</p>
          </SectionCard>
        </Section>
      </article>
    </main>
  )
}
