import React from 'react';
import type { Metadata } from 'next';
import { ImageGrid } from '@/components/image-grid';

export const metadata: Metadata = {
  title: 'Photos',
  description: 'My Photos',
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Photos</h1>
      <ImageGrid
        columns={2}
        images={[
          {
            src: '/photos/photo1.jpg',
            alt: 'florista hut',
            href: 'https://github.com/trilochanaryal/assets/blob/main/portfolio-photos/florista.jpg?raw=true',
          },
          {
            src: '/photos/photo2.jpg',
            alt: 'way to muktinath',
            href: 'https://github.com/trilochanaryal/assets/blob/main/portfolio-photos/waytomustang.jpg?raw=true',
          },
          {
            src: '/photos/photo3.jpg',
            alt: 'rupse waterfall',
            href: 'https://github.com/trilochanaryal/assets/blob/main/portfolio-photos/rupse.jpg?raw=true',
          },
          {
            src: '/photos/photo4.jpg',
            alt: 'shot taken at funpark',
            href: 'https://github.com/trilochanaryal/assets/blob/main/portfolio-photos/funpark.jpg?raw=true',
          },
        ]}
      />
    </section>
  );
}
