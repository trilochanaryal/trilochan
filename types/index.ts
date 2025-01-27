export interface Project {
  title: string;
  description: string;
  link: string;
  technologies?: string[];
}

export interface Tab {
  label: string;
  content: React.ReactNode;
}

export type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  tags: string;
  image?: string;
};

export interface Post {
  metadata: {
    title: string;
    publishedAt: string;
    tags: string[];
    description?: string;
  };
  slug: string;
  content: string;
  source: 'medium' | 'local';
}
