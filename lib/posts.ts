import fs from 'fs';
import path from 'path';
import { Metadata, Post } from '@/types';
import { parse } from 'rss-to-json';

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = match![1];
  const content = fileContent.replace(frontmatterRegex, '').trim();
  const frontMatterLines = frontMatterBlock.trim().split('\n');
  const metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(': ');
    let value = valueArr.join(': ').trim();
    value = value.replace(/^['"](.*)['"]$/, '$1');
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, 'utf-8');
  return parseFrontmatter(rawContent);
}

function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));
    const readTime = calculateReadTime(content);

    return {
      metadata: {
        ...metadata,
        readTime,
      },
      slug,
      content,
    };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'content'));
}

export function formatDate(date: string, includeRelative = false) {
  const currentDate = new Date();
  if (!date.includes('T')) {
    date = `${date}T00:00:00`;
  }
  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = '';

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = 'Today';
  }

  const fullDate = targetDate.toLocaleString('en-us', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}

function cleanHtmlContent(content: string): string {
  // Remove figure tags and their contents
  content = content.replace(/<figure[^>]*>.*?<\/figure>/g, '');

  // Remove img tags
  content = content.replace(/<img[^>]*>/g, '');

  // Remove multiple consecutive line breaks
  content = content.replace(/(\r\n|\n|\r){2,}/gm, '\n');

  // Remove all HTML tags
  content = content.replace(/<[^>]*>/g, '');

  // Remove multiple spaces
  content = content.replace(/\s\s+/g, ' ');

  return content.trim();
}

export async function getMediumPosts() {
  try {
    const rss = await parse('https://medium.com/feed/@Trilochanaryal');
    return rss.items.map((item: any) => {
      const pubDate = new Date(item.published);
      const cleanContent = cleanHtmlContent(
        item.content || item.description || '',
      );
      const readTime = calculateReadTime(cleanContent);
      return {
        title: item.title,
        description: cleanContent,
        link: item.link,
        category: item.category || [],
        date: pubDate.toISOString(),
        readTime,
      };
    });
  } catch (error) {
    console.error('Error fetching Medium posts:', error);
    return [];
  }
}

function truncateDescription(
  description: string,
  wordLimit: number = 15,
): string {
  const words = description.split(/\s+/);
  if (words.length <= wordLimit) return description;
  return words.slice(0, wordLimit).join(' ') + '...';
}

export async function getAllPosts(): Promise<Post[]> {
  const mdxPost = getBlogPosts();
  const mediumPosts = await getMediumPosts();

  const allPosts: Post[] = [
    ...mdxPost.map((post) => ({
      ...post,
      source: 'local' as const,
      metadata: {
        ...post.metadata,
        readTime: calculateReadTime(post.content),
        description: truncateDescription(post.metadata.summary || ''),
        tags: [],
      },
    })),
    ...mediumPosts.map((post) => ({
      metadata: {
        title: post.title,
        publishedAt: post.date,
        description: truncateDescription(post.description || ''),
        readTime: post.readTime,
        tags: [],
      },
      slug: post.link,
      content: '',
      source: 'medium' as const,
    })),
  ].sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime(),
  );

  return allPosts;
}
