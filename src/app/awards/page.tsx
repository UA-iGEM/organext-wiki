import Section from '@/components/ui/Section'
import SectionCard from '@/components/ui/SectionCard'

export default function AwardsPage() {
  return (
    <main>
      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <h1 className="font-mono text-3xl font-bold text-primary-light mb-4">
          Awards
        </h1>
        <p className="text-primary-light/90 mb-8">
          Awards, nominations, and recognition. Replace with your awards content.
        </p>

        <Section title="Awards and recognition">
          <SectionCard title="Award or nomination">
            <p>Description of the award and what it was for.</p>
          </SectionCard>
          <SectionCard title="Other recognition" className="mt-4">
            <p>Additional awards, medals, or special mentions.</p>
          </SectionCard>
        </Section>
      </article>
    </main>
  )
}
