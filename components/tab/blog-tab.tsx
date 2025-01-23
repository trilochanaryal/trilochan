import { getBlogPosts } from '@/lib/posts';
import { PostCard } from '@/components/postcard';

export default function BlogContent() {
  const allBlogs = getBlogPosts();

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {allBlogs
        .sort(
          (a, b) =>
            new Date(b.metadata.publishedAt).getTime() -
            new Date(a.metadata.publishedAt).getTime(),
        )
        .map((post) => (
          <PostCard
            key={post.slug}
            title={post.metadata.title}
            date={new Date(post.metadata.publishedAt).toLocaleDateString()}
            link={`/blog/${post.slug}`}
          />
        ))}
    </div>
  );
}
