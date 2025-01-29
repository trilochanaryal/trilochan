import './global.css';
import type { Metadata } from 'next';
import { Domine } from 'next/font/google';
import { Navbar } from '@/components/navbar/nav';
import { Analytics } from '@vercel/analytics/react';
import Footer from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';
import { metaData } from '@/config';

export const metadata: Metadata = {
  metadataBase: new URL(metaData.baseUrl),
  title: {
    default: metaData.title,
    template: `%s | ${metaData.title}`,
  },
  description: metaData.description,
  openGraph: {
    images: [
      {
        url: `${metaData.baseUrl}/apple-touch-icon.png`,
        width: 1200,
        height: 630,
        alt: 'Trilochan Aryal Portfolio',
      },
    ],
    title: metaData.title,
    description: metaData.description,
    url: metaData.baseUrl,
    siteName: metaData.name,
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: metaData.name,
    description: metaData.description,
    images: [`${metaData.baseUrl}/og-image.png`],
    card: 'summary_large_image',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/logo.svg', type: 'image/svg', sizes: '32x32' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/logo.svg', sizes: '180x180', type: 'image/svg' }],
    other: [
      {
        rel: 'mask-icon',
        url: '/logo.svg',
      },
    ],
  },
};

const domine = Domine({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${domine.className} `} suppressHydrationWarning>
      <body className="antialiased max-w-2xl mx-auto">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="w-full lg:my-3 px-3 md:px-0">
            {children}
            <Footer />
            <Analytics />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
