interface VideoEmbedProps {
  src: string
  title?: string
  className?: string
}

export default function VideoEmbed({ src, title = 'Video', className = '' }: VideoEmbedProps) {
  return (
    <div className={`overflow-hidden rounded-igem-lg border border-primary/30 aspect-video bg-primary-dark/80 ${className}`}>
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
      />
    </div>
  )
}
