import Image from 'next/image';
import { socialLinks } from '@/config';
import Link from 'next/link';

export default function Page() {
  return (
    <section>
      <Link href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={60}
          height={60}
          priority
        />
      </Link>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Portfolio, made simple!
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          A clean, fast, and lightweight portfolio template built with Next.js,
          Vercel, and Tailwind CSS for optimal performance.
        </p>
        <p>
          Nextfolio includes all the essentials for a stunning portfolio: SEO,
          MDX support, RSS, Atom, & JSON feeds, analytics, tweet & YouTube
          embeds, KaTeX integration, and{' '}
          <Link
            target="_blank"
            href="https://github.com/1msirius/Nextfolio?tab=readme-ov-file#features"
          >
            more
          </Link>
          .
        </p>
        <p>
          Nextfolio is{' '}
          <Link href={socialLinks.github} target="_blank">
            open-source
          </Link>{' '}
          and fully customizable, making it easy to add more features.
        </p>
        <p>
          <Link
            href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F1msirius%2FNextfolio"
            target="_blank"
          >
            Deploy
          </Link>{' '}
          your Nextfolio site with Vercel in minutes and follow the set up
          instructions in the{' '}
          <Link href="/blog/getting-started">Getting Started</Link> post.
        </p>
        <p>
          Built and maintained by{' '}
          <Link href="https://github.com/trilochanaryal" target="_blank">
            Trilochan Aryal
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
