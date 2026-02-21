import Link from 'next/link'

interface CardProps {
  title?: string
  children: React.ReactNode
  className?: string
  asLink?: string
}

export default function Card({ title, children, className = '', asLink }: CardProps) {
  const styles =
    'rounded-igem-lg border border-primary/30 bg-primary-dark/70 p-6 text-primary-light shadow-lg transition-colors hover:border-primary/50 hover:bg-primary-dark/80'

  const content = (
    <>
      {title && <h3 className="font-mono text-xl font-bold mb-3">{title}</h3>}
      {children}
    </>
  )

  if (asLink) {
    return (
      <Link href={asLink} className={`block ${styles} ${className}`}>
        {content}
      </Link>
    )
  }

  return <div className={`${styles} ${className}`}>{content}</div>
}
