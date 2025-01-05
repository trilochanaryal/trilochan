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
        columns={3}
        images={[
          {
            src: '/photos/photo1.jpg',
            alt: 'florista hut',
            href: 'https://github.com/trilochanaryal/assets/blob/main/portfolio-photos/florista.jpg',
          },
          {
            src: '/photos/photo2.jpg',
            alt: 'way to muktinath',
            href: 'https://github.com/trilochanaryal/assets/blob/main/portfolio-photos/waytomustang.jpg',
          },
          {
            src: '/photos/photo3.jpg',
            alt: 'rupse waterfall',
            href: 'https://github.com/trilochanaryal/assets/blob/main/portfolio-photos/rupse.jpg',
          },
          {
            src: '/photos/photo4.jpg',
            alt: 'shot taken at funpark',
            href: 'https://github.com/trilochanaryal/assets/blob/main/portfolio-photos/funpark.jpg',
          },
        ]}
      />

      {/* {
            src: '/photos/photo5.jpg',
            alt: 'Taj Mahal',
            href: 'https://unsplash.com/photos/taj-mahal-india-IPlPkWPJ2fo',
          },
          {
            src: '/photos/photo6.jpg',
            alt: 'Colosseum',
            href: 'https://unsplash.com/photos/brown-concrete-building-under-blue-sky-during-daytime-3cyBR1rIJmA?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash',
          }, */}

      <ImageGrid
        columns={2}
        images={[
          { src: '/photos/photo1.jpg', alt: 'Roman columns' },
          { src: '/photos/photo2.jpg', alt: 'Big Ben' },
          { src: '/photos/photo3.jpg', alt: 'Sacré-Cœur Basilica' },
          { src: '/photos/photo4.jpg', alt: 'Eiffel Tower' },
        ]}
      />

      <ImageGrid
        columns={4}
        images={[
          { src: '/photos/photo1.jpg', alt: 'Roman columns' },
          { src: '/photos/photo2.jpg', alt: 'Big Ben' },
          { src: '/photos/photo3.jpg', alt: 'Sacré-Cœur Basilica' },
          { src: '/photos/photo4.jpg', alt: 'Eiffel Tower' },
          // { src: '/photos/photo5.jpg', alt: 'Taj Mahal' },
          // { src: '/photos/photo6.jpg', alt: 'Colosseum' },
        ]}
      />
    </section>
  );
}
