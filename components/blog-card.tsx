import { ReadMoreIcon } from '@/components/navbar/icons/index';
import Link from 'next/link';
import React from 'react';

type Props = {
  title: string;
  slug: string;
  description: string;
  featured?: boolean;
};

function BlogCard({ title, description, slug, featured }: Props) {
  return (
    <Link href={`/blog/${slug}`}>
      <article
        className={`relative flex flex-col justify-between overflow-hidden
         rounded-xl bg-gradient-to-r from-[var(--blogCardBg)] to-[var(--cardBackground)] p-4 shadow-md transition hover:bg-cardBackground
         ${featured ? 'min-h-[200px] md:min-h-[250px]' : 'min-h-28'}`}
      >
        {featured && (
          <span className="absolute right-4 top-4 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Latest
          </span>
        )}
        <div>
          <h2 className="mb-2 text-lg font-semibold text-foregroundText">
            {title}
          </h2>
          <p className="text-sm font-light text-lightText">
            {description.substring(0, 250)}...
          </p>
        </div>

        <div className="mt-1 flex justify-between">
          <span className="absolute -bottom-3 -left-3 h-9 w-9 -rotate-45 rounded-r-full bg-[var(--blogCardDarkBg)]"></span>
          <span></span>

          <button className="flex text-xs text-lightText">
            <span>Read More</span>
            <ReadMoreIcon className="ml-2 h-4 w-4" stroke="currentColor" />
          </button>
        </div>
      </article>
    </Link>
  );
}

export default BlogCard;
