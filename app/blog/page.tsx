import Link from 'next/link';
import { formatDate, getBlogPosts, getMediumPosts } from '@/lib/posts';

export const metadata = {
  title: 'Blog',
  description: 'Nextfolio Blog',
};

export default async function BlogPosts() {
  const localPosts = getBlogPosts().sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime(),
  );

  const mediumPosts = await getMediumPosts();

  const allPosts = [
    ...localPosts.map((post) => ({ ...post, source: 'local' })),
    ...mediumPosts.map((post) => ({
      metadata: {
        title: post.title,
        publishedAt: post.date,
        summary: post.description,
        tags: '',
      },
      slug: post.link, // Use full URL for Medium posts
      content: '',
      source: 'medium',
    })),
  ].sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime(),
  );

  const [latestPost, ...otherPosts] = allPosts;

  return (
    <section className="max-w-2xl mx-auto">
      <h1 className="mb-8 text-3xl font-bold tracking-tight">Our Blog</h1>

      {/* Latest Post Section */}
      {latestPost && (
        <div className="mb-12">
          <h2 className="mb-4 text-xl font-semibold">Latest Post</h2>
          <div className="p-6 rounded-lg bg-neutral-50 dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
            <Link
              href={
                latestPost.source === 'medium'
                  ? latestPost.slug
                  : `/blog/${latestPost.slug}`
              }
              target={latestPost.source === 'medium' ? '_blank' : '_self'}
              className="space-y-2"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-black dark:text-white">
                  {latestPost.metadata.title}
                </h3>
                {latestPost.source === 'medium' && (
                  <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                    Medium
                  </span>
                )}
              </div>
              <p className="text-neutral-600 dark:text-neutral-400">
                {formatDate(latestPost.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400">
                {latestPost.metadata.summary.substring(0, 120)}...
              </p>
            </Link>
          </div>
        </div>
      )}

      {/* All Posts List */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">All Posts</h2>
        {otherPosts.map((post) => (
          <Link
            key={post.slug}
            href={post.source === 'medium' ? post.slug : `/blog/${post.slug}`}
            target={post.source === 'medium' ? '_blank' : '_self'}
            className="block group transition-opacity hover:opacity-80"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 border-b border-neutral-200 dark:border-neutral-800">
              <div className="flex-1">
                <h3 className="text-black dark:text-white font-medium">
                  {post.metadata.title}
                  {post.source === 'medium' && (
                    <span className="ml-2 px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                      Medium
                    </span>
                  )}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mt-1 sm:mt-0">
                  {post.metadata.summary.substring(0, 80)}...
                </p>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 sm:mt-0 sm:ml-4">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
