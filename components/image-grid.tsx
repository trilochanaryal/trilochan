import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ImageGridProps {
  images: {
    src: string;
    alt: string;
    href?: string;
  }[];
  columns?: 2 | 3 | 4; // Accepts 2, 3, or 4 columns
}

export const ImageGrid: React.FC<ImageGridProps> = ({
  images,
  columns = 3,
}) => {
  const gridClass = {
    2: 'grid-cols-2 sm:grid-cols-2',
    3: 'grid-cols-2 sm:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-4',
  }[columns];

  return (
    <section>
      <div className={`grid ${gridClass} gap-4 my-8`}>
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden rounded-lg group touch-none"
          >
            {image.href ? (
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={image.href}
                className="block w-full h-full overflow-hidden"
              >
                <Image
                  alt={image.alt}
                  src={image.src}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  priority
                  className="rounded-lg object-cover transition-all duration-500 ease-in-out group-hover:scale-110 hover:scale-110 active:scale-110"
                />
              </Link>
            ) : (
              <Image
                alt={image.alt}
                src={image.src}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                priority
                className="rounded-lg object-cover transition-all duration-500 ease-in-out group-hover:scale-110 hover:scale-110 active:scale-110"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
