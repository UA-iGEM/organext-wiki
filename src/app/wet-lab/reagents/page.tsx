import Section from '@/components/ui/Section'
import SectionCard from '@/components/ui/SectionCard'

export default function WetLabReagentsPage() {
  return (
    <main>
      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <h1 className="font-mono text-3xl font-bold text-primary-light mb-4">
          Wet lab — Reagents
        </h1>
        <p className="text-primary-light/90 mb-8">
          Reagents, strains, and materials used in the lab. Replace with your reagents content.
        </p>

        <Section title="Materials">
          <SectionCard title="Strains">
            <p>List strains and sources.</p>
          </SectionCard>
          <SectionCard title="Reagents and kits" className="mt-4">
            <p>Key reagents, enzymes, and kits.</p>
          </SectionCard>
        </Section>
      </article>
    </main>
  )
}
