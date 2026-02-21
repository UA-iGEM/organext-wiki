import Section from '@/components/ui/Section'
import SectionCard from '@/components/ui/SectionCard'
import Gallery from '@/components/ui/Gallery'

export default function WetLabResultsPage() {
  return (
    <main>
      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <h1 className="font-mono text-3xl font-bold text-primary-light mb-4">
          Wet lab — Results
        </h1>
        <p className="text-primary-light/90 mb-8">
          Experimental results: data, figures, and interpretation. Replace with your results content.
        </p>

        <Section title="Key results">
          <SectionCard>
            <p>Summary of main findings. Add data and conclusions.</p>
          </SectionCard>
        </Section>

        <Section title="Figures">
          <Gallery columns={2} />
        </Section>
      </article>
    </main>
  )
}
