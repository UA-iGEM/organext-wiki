import Section from '@/components/ui/Section'
import SectionCard from '@/components/ui/SectionCard'

export default function DryLabOptimizationPage() {
  return (
    <main>
      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <h1 className="font-mono text-3xl font-bold text-primary-light mb-4">
          Dry lab — Optimization
        </h1>
        <p className="text-primary-light/90 mb-8">
          Optimization work: parameter tuning, design choices, or performance improvements. Replace with your optimization content.
        </p>

        <Section title="Optimization">
          <SectionCard>
            <p>How you optimized models, designs, or parameters. Add results if relevant.</p>
          </SectionCard>
        </Section>
      </article>
    </main>
  )
}
