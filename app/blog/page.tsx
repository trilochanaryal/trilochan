import { notFound } from 'next/navigation';
import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';
import { BlogPostCard } from '@/components/blog-card';
import { Pagination } from '@/components/pagination';
import { Metadata } from 'next';
import { getPageNumbers } from '@/lib/pagination';

interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}
export const metadata: Metadata = {
  title: 'Blogs',
  description: 'Blogs',
};

export default async function BlogPosts({ searchParams }: Props) {
  const POSTS_PER_PAGE = 5;
  const pageParam = (await searchParams)?.page || 1;
  const page = typeof pageParam === 'string' ? parseInt(pageParam, 10) : 1;
  const allPosts = await getAllPosts();

  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  if (page > totalPages) return notFound();

  const currentPosts = allPosts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE,
  );

  return (
    <div className="max-w-2xl mx-auto px-4 min-h-screen">
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Blogs</h1>
      <div className="space-y-6">
        {currentPosts.map((post) => (
          <Link
            key={post.slug}
            href={post.source === 'medium' ? post.slug : `/blog/${post.slug}`}
            target={post.source === 'medium' ? '_blank' : '_self'}
            className="block group"
          >
            <BlogPostCard post={post} />
          </Link>
        ))}
      </div>
      {totalPages > 1 && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          baseUrl="/blog"
        />
      )}
    </div>
  );
}
