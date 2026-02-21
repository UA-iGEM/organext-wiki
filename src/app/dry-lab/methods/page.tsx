import Section from '@/components/ui/Section'
import SectionCard from '@/components/ui/SectionCard'

export default function DryLabMethodsPage() {
  return (
    <main>
      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <h1 className="font-mono text-3xl font-bold text-primary-light mb-4">
          Dry lab — Methods
        </h1>
        <p className="text-primary-light/90 mb-8">
          Methods: software, algorithms, or modeling approaches. Replace with your methods content.
        </p>

        <Section title="Methods">
          <SectionCard title="Approach">
            <p>Description of computational or modeling methods used.</p>
          </SectionCard>
          <SectionCard title="Tools" className="mt-4">
            <p>Software, languages, and frameworks.</p>
          </SectionCard>
        </Section>
      </article>
    </main>
  )
}
