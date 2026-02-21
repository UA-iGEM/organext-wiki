import Section from '@/components/ui/Section'
import SectionCard from '@/components/ui/SectionCard'
import Gallery from '@/components/ui/Gallery'

export default function ProjectOverviewPage() {
  return (
    <main>
      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <h1 className="font-mono text-3xl font-bold text-primary-light mb-4">
          Project overview
        </h1>
        <p className="text-primary-light/90 mb-8">
          High-level summary of your iGEM project: problem, approach, and expected impact. Replace with your overview content.
        </p>

        <Section title="Key objectives">
          <SectionCard title="Objective one">
            <p>First main goal of the project. Add 1–2 sentences.</p>
          </SectionCard>
          <SectionCard title="Objective two" className="mt-4">
            <p>Second main goal. Add 1–2 sentences.</p>
          </SectionCard>
        </Section>

        <Section title="Visuals">
          <Gallery columns={3} />
        </Section>
      </article>
    </main>
  )
}
