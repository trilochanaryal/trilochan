import { getAllPosts } from '@/lib/posts';
import { BlogPostCard, LatestBlogPost } from '@/components/blog-card';
import Link from 'next/link';

export const metadata = {
  title: 'Blog',
  description: 'Trilochan Aryal Blog',
};

export default async function BlogPosts() {
  const allPosts = await getAllPosts();
  const [latestPost, ...otherPosts] = allPosts;

  return (
    <section className="max-w-2xl mx-auto">
      <h1 className="mb-8 text-3xl font-bold tracking-tight">Our Blog</h1>

      {latestPost && (
        <div className="mb-12">
          <h2 className="mb-4 text-xl font-semibold">Latest Post</h2>
          <LatestBlogPost post={latestPost} />
        </div>
      )}

      <div className="space-y-6">
        <h2 className="text-xl font-semibold">All Posts</h2>
        {otherPosts.map((post) => (
          <Link
            key={post.slug}
            href={post.source === 'medium' ? post.slug : `/blog/${post.slug}`}
            target={post.source === 'medium' ? '_blank' : '_self'}
            className="block group transition-opacity hover:opacity-90"
          >
            <BlogPostCard post={post} />
          </Link>
        ))}
      </div>
    </section>
  );
}
