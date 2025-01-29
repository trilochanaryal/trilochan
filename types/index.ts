export interface PostMetadata {
  title: string;
  publishedAt: string;
  summary?: string;
  description?: string;
  readTime: number;
  tags: string[];
}

export interface Post {
  metadata: PostMetadata;
  slug: string;
  content: string;
  source: 'local' | 'medium';
}

export interface Metadata {
  title: string;
  publishedAt: string;
  summary: string;
  tags: string;
  image?: string;
}

export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
  tools: string[];
}
