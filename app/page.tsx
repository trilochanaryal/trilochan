'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <section>
      <Image
        src="https://github.com/trilochanaryal/assets/blob/main/portfolio-photos/profile.jpeg?raw=true"
        alt="Profile Picture"
        className="rounded-full aspect-square object-cover cursor-pointer hover:grayscale transition-all duration-300 ease-in-out z-10"
        unoptimized
        width={110}
        height={110}
        priority
      />
      <h1 className="pt-8 mb-6 text-2xl font-medium tracking-tight">
        Trilochan Aryal
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Hi 👋 I’m a software engineer with a passion for building fullstack
          web applications that are as functional as they are user-friendly. My
          focus is always on creating systems that solve real-world problems
          while being scalable and efficient.
        </p>
        <p>
          <Link
            href={
              'https://docs.google.com/document/d/1l8pX7vG4HKG_osDblx560Ui8rYxGbtpzN_QFDdG-iVk/edit'
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </Link>
        </p>
        <p>
          If you'd like to collaborate, please send me an{' '}
          <Link href={'mailto:aryaltrylowchan@gmail.com'} target="_blank">
            email
          </Link>{' '}
          or reach out on any of my social handles.
        </p>
      </div>
    </section>
  );
}
