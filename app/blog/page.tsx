import { Metadata } from 'next';
import { getBlogPosts } from '@/lib/posts';
import BlogCard from '@/components/blog-card';

export async function generateMetadata(): Promise<Metadata> {
  const blogs = getBlogPosts();
  const latestBlog = blogs[0];

  return {
    title: 'My Blogs',
    description: latestBlog 
      ? `Latest: ${latestBlog.title}. Explore my developer blogs and tutorials.`
      : 'Explore some very useful blogs created by me which most developers face during development.',
  };
}

function BlogPage() {
  const blogs = getBlogPosts();
  const [latestBlog, ...restBlogs] = blogs;

  return (
     <div className="container mx-auto px-4 py-8">
      {latestBlog && (
        <section className="mb-12">
          <h1 className="mb-6 text-2xl font-bold">Latest Post</h1>
          <BlogCard {...latestBlog} featured={true} />
        </section>
      )}

      <section>
        <h2 className="mb-6 text-xl font-semibold">All Posts</h2>
        <div className="grid h-fit gap-6 sm:grid-cols-1 md:grid-cols-2">
          {restBlogs.map((blog) => (
            <BlogCard key={blog.slug} {...blog} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default BlogPage;
