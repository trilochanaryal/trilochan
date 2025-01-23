import BlogLayout from '@/components/tab/blog-tab';
import MediumLayout from '@/components/tab/medium-tab';
import TabLayout from '@/components/tab/tab-layout';
import { Tab } from '@/types';

export const metadata = {
  title: 'Blog & Projects',
  description: 'Nextfolio Blog and Projects',
};

export default function Blog() {
  const tabs: Tab[] = [
    {
      label: 'Blog',
      content: <BlogLayout />,
    },
    {
      label: 'Medium',
      content: <MediumLayout />,
    },
  ];

  return (
    <section className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Blog</h1>
      <TabLayout tabs={tabs} />
    </section>
  );
}
