import Section from '@/components/ui/Section'
import SectionCard from '@/components/ui/SectionCard'

export default function HumanPracticesOutreachPage() {
  return (
    <main>
      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <h1 className="font-mono text-3xl font-bold text-primary-light mb-4">
          Human practices — Outreach
        </h1>
        <p className="text-primary-light/90 mb-8">
          Outreach activities: education, public engagement, and communication. Replace with your outreach content.
        </p>

        <Section title="Outreach activities">
          <SectionCard title="Education">
            <p>Workshops, talks, or educational materials.</p>
          </SectionCard>
          <SectionCard title="Public engagement" className="mt-4">
            <p>Events, social media, or other public-facing activities.</p>
          </SectionCard>
        </Section>
      </article>
    </main>
  )
}
