import Section from '@/components/ui/Section'
import SectionCard from '@/components/ui/SectionCard'

export default function DryLabValidationPage() {
  return (
    <main>
      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <h1 className="font-mono text-3xl font-bold text-primary-light mb-4">
          Dry lab — Validation
        </h1>
        <p className="text-primary-light/90 mb-8">
          Validation of models or predictions: comparison with data, sensitivity analysis. Replace with your validation content.
        </p>

        <Section title="Validation">
          <SectionCard>
            <p>How dry lab results were validated against experiments or literature.</p>
          </SectionCard>
        </Section>
      </article>
    </main>
  )
}
