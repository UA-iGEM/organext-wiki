import Section from '@/components/ui/Section'
import SectionCard from '@/components/ui/SectionCard'

export default function WetLabExperimentsPage() {
  return (
    <main>
      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <h1 className="font-mono text-3xl font-bold text-primary-light mb-4">
          Wet lab — Experiments
        </h1>
        <p className="text-primary-light/90 mb-8">
          Protocols, procedures, and experimental workflow. Replace with your experiments content.
        </p>

        <Section title="Protocols">
          <SectionCard title="Protocol 1">
            <p>Description and steps. Add protocol details here.</p>
          </SectionCard>
          <SectionCard title="Protocol 2" className="mt-4">
            <p>Second protocol or variant.</p>
          </SectionCard>
        </Section>
      </article>
    </main>
  )
}
