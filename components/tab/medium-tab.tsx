import { PostCard } from '@/components/postcard';

interface MediumPost {
  guid: string;
  title: string;
  pubDate: string;
  link: string;
  description: string;
}

const posts = [
  {
    guid: 'https://medium.com/@Trilochanaryal/continuous-integration-ci-with-github-actions-2dc7f9cf2491',
    title: 'Continuous Integration (CI) with GitHub Actions',
    pubDate: '2021-08-24T11:00:00.000Z',
    link: 'https://medium.com/@Trilochanaryal/continuous-integration-ci-with-github-actions-2dc7f9cf2491',
    description: 'Continuous Integration (CI) with GitHub Actions',
  },
];

export default function MediumContent() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {posts.map((post: MediumPost) => (
        <PostCard
          key={post.guid}
          title={post.title}
          date={new Date(post.pubDate).toLocaleDateString()}
          description={post.description}
          link={post.link}
          isExternal={true}
        />
      ))}
    </div>
  );
}
