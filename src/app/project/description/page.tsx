import Section from '@/components/ui/Section'
import SectionCard from '@/components/ui/SectionCard'

export default function ProjectDescriptionPage() {
  return (
    <main>
      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <h1 className="font-mono text-3xl font-bold text-primary-light mb-4">
          Project description
        </h1>
        <p className="text-primary-light/90 mb-8">
          Detailed description of your project: background, design rationale, and scientific context. Replace with your description content.
        </p>

        <Section title="Background">
          <SectionCard>
            <p>Background and motivation. Why this project? What gap does it address?</p>
          </SectionCard>
        </Section>

        <Section title="Design">
          <SectionCard>
            <p>Design choices: parts, system architecture, and key decisions.</p>
          </SectionCard>
        </Section>
      </article>
    </main>
  )
}
