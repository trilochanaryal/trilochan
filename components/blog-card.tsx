import { Post } from '@/types/';
import { formatDate } from '@/lib/posts';
import { Clock, ArrowRight } from 'lucide-react';

export const BlogCard = ({ post }: { post: Post }) => (
  <article
    className="w-full p-6 rounded-lg 
    card-gradient
    border border-gray-100/20 dark:border-gray-700/20
    hover:border-gray-200/50 dark:hover:border-gray-600/50
    hover:shadow-lg dark:hover:shadow-gray-900/30
    backdrop-blur-sm
    transition-all duration-300 relative group"
  >
    <div
      className="flex flex-col gap-2"
      aria-label={`Blog post: ${post.metadata.title}`}
    >
      <div className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
        <time dateTime={post.metadata.publishedAt}>
          {formatDate(post.metadata.publishedAt, false)}
        </time>
        <span className="mx-2">-</span>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{post.metadata.readTime} min read</span>
        </div>
      </div>
      <h3 className="font-bold">{post.metadata.title}</h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        {post.metadata.description || 'No description available'}
      </p>
    </div>
    <div
      aria-hidden="true"
      className="absolute right-6 top-1/2 transform -translate-y-1/2 
      transition-transform duration-300 group-hover:translate-x-2"
    >
      <ArrowRight className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
    </div>
  </article>
);
