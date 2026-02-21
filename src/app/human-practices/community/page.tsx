import Section from '@/components/ui/Section'
import SectionCard from '@/components/ui/SectionCard'

export default function HumanPracticesCommunityPage() {
  return (
    <main>
      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <h1 className="font-mono text-3xl font-bold text-primary-light mb-4">
          Human practices — Community
        </h1>
        <p className="text-primary-light/90 mb-8">
          Community engagement: stakeholders, partnerships, and integrated human practices. Replace with your community content.
        </p>

        <Section title="Stakeholders">
          <SectionCard>
            <p>Who you engaged with and how their input shaped the project.</p>
          </SectionCard>
        </Section>
      </article>
    </main>
  )
}
