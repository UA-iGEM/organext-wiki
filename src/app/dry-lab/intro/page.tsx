import Section from '@/components/ui/Section'
import SectionCard from '@/components/ui/SectionCard'

export default function DryLabIntroPage() {
  return (
    <main>
      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <h1 className="font-mono text-3xl font-bold text-primary-light mb-4">
          Dry lab — Introduction
        </h1>
        <p className="text-primary-light/90 mb-8">
          Introduction to modeling, bioinformatics, or software work in your project. Replace with your dry lab intro content.
        </p>

        <Section title="Overview">
          <SectionCard>
            <p>What the dry lab contributes: tools, models, or analyses used to support the project.</p>
          </SectionCard>
        </Section>
      </article>
    </main>
  )
}
