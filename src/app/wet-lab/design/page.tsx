import Section from '@/components/ui/Section'
import SectionCard from '@/components/ui/SectionCard'

export default function WetLabDesignPage() {
  return (
    <main>
      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <h1 className="font-mono text-3xl font-bold text-primary-light mb-4">
          Wet lab — Design
        </h1>
        <p className="text-primary-light/90 mb-8">
          Lab design: constructs, parts, and experimental design. Replace with your design content.
        </p>

        <Section title="Constructs">
          <SectionCard>
            <p>Plasmids, parts, and assembly strategy. Add diagrams or tables as needed.</p>
          </SectionCard>
        </Section>

        <Section title="Experimental design">
          <SectionCard>
            <p>Key experiments and how they validate the design.</p>
          </SectionCard>
        </Section>
      </article>
    </main>
  )
}
