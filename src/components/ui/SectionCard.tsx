interface SectionCardProps {
  title?: string
  children: React.ReactNode
  className?: string
}

export default function SectionCard({ title, children, className = '' }: SectionCardProps) {
  return (
    <div className={`rounded-igem border border-primary/25 bg-primary/10 p-5 ${className}`}>
      {title && (
        <h3 className="font-mono text-lg font-bold text-primary-light mb-3">{title}</h3>
      )}
      <div className="text-primary-light/90">{children}</div>
    </div>
  )
}
