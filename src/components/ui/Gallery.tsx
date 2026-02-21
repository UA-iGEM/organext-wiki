interface GalleryProps {
  images?: { src: string; alt: string }[]
  columns?: 1 | 2 | 3 | 4
  className?: string
}

const placeholderCount = 6

export default function Gallery({ images, columns = 3, className = '' }: GalleryProps) {
  const count = images?.length ?? placeholderCount
  const gridClass =
    columns === 1
      ? 'grid-cols-1'
      : columns === 2
        ? 'grid-cols-1 sm:grid-cols-2'
        : columns === 4
          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
          : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'

  return (
    <div className={`grid gap-4 ${gridClass} ${className}`} role="list">
      {images
        ? images.map((img, i) => (
            <figure key={i} className="overflow-hidden rounded-igem border border-primary/30 aspect-[4/3] relative">
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover"
              />
            </figure>
          ))
        : Array.from({ length: count }).map((_, i) => (
            <div
              key={i}
              className="flex aspect-[4/3] items-center justify-center rounded-igem border border-primary/30 bg-primary/10 text-primary-light/50 text-sm"
              aria-hidden
            >
              Image placeholder
            </div>
          ))}
    </div>
  )
}
