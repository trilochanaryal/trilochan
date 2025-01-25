import { ReadMoreIcon } from '@/components/navbar/icons';
import Link from 'next/link';
import React from 'react';

type BlogCardProps = {
  title: string;
  slug: string;
  description: string;
  featured?: boolean;
  source?: 'local' | 'medium';
};

export const BlogCard = ({
  title,
  description,
  slug,
  featured = false,
  source = 'local',
}: BlogCardProps) => {
  const isExternal = source === 'medium';
  const cardClasses = [
    'relative flex flex-col justify-between overflow-hidden rounded-xl',
    'bg-gradient-to-r from-[var(--blogCardBg)] to-[var(--cardBackground)]',
    'p-4 shadow-md transition hover:bg-cardBackground',
    featured ? 'min-h-[200px] md:min-h-[250px]' : 'min-h-28',
  ].join(' ');

  return (
    <Link
      href={isExternal ? slug : `/blog/${slug}`}
      target={isExternal ? '_blank' : '_self'}
      passHref
    >
      <article className={cardClasses}>
        {featured && <FeaturedBadge>Latest</FeaturedBadge>}

        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-foregroundText">{title}</h2>
          <p className="text-sm font-light text-lightText line-clamp-3">
            {description}
          </p>
        </div>

        <CardFooter />
      </article>
    </Link>
  );
};

const FeaturedBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="absolute right-4 top-4 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
    {children}
  </span>
);

const CardFooter = () => (
  <div className="mt-1 flex justify-between">
    <span className="absolute -bottom-3 -left-3 h-9 w-9 -rotate-45 rounded-r-full bg-[var(--blogCardDarkBg)]" />
    <button className="flex items-center text-xs text-lightText hover:text-primary transition-colors">
      Read More
      <ReadMoreIcon className="ml-2 h-4 w-4" stroke="currentColor" />
    </button>
  </div>
);
