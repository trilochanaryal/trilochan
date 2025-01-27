import Link from 'next/link';
import { Post } from '@/types/';
import { formatDate } from '@/lib/posts';
import { Arrow } from '@/components/navbar/icons/index';

export const BlogPostCard = ({ post }: { post: Post }) => (
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 border-b border-neutral-200 dark:border-neutral-800">
    <p className="text-sm text-neutral-600 dark:text-neutral-400">
      {formatDate(post.metadata.publishedAt, false)}
    </p>

    <h3 className="text-neutral-900 dark:text-white font-medium flex-1 mx-4">
      {post.metadata.title}
    </h3>

    <div className="flex items-center gap-2">
      {post.metadata.tags?.map((tag) => (
        <span
          key={tag}
          className="px-2 py-1 text-xs rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300"
        >
          {tag}
        </span>
      ))}
      <Arrow />
    </div>
  </div>
);

export const LatestBlogPost = ({ post }: { post: Post }) => (
  <div className="p-6 rounded-lg bg-neutral-50 dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
    <Link href={`/blog/${post.slug}`} className="group flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
        <p className="text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt, false)}
        </p>
        <h3 className="text-lg font-medium text-neutral-900 dark:text-white flex-1">
          {post.metadata.title}
        </h3>
        <div className="flex items-center gap-2">
          {post.metadata.tags?.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300"
            >
              {tag}
            </span>
          ))}
          <Arrow />
        </div>
      </div>
    </Link>
  </div>
);
