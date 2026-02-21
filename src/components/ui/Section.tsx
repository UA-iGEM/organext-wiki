interface SectionProps {
  id?: string
  title?: string
  children: React.ReactNode
  className?: string
}

export default function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-8 sm:py-10 ${className}`} aria-labelledby={title ? `${id || 'section'}-heading` : undefined}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {title && (
          <h2 id={id ? `${id}-heading` : 'section-heading'} className="font-mono text-2xl font-bold text-primary-light mb-6">
            {title}
          </h2>
        )}
        <div className="prose prose-invert max-w-none prose-p:text-primary-light/90 prose-headings:font-mono prose-headings:text-primary-light">
          {children}
        </div>
      </div>
    </section>
  )
}
