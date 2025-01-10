import './global.css';
import type { Metadata } from 'next';
import { Domine } from 'next/font/google';
import { Navbar } from '@/components/navbar/nav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
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
    images: metaData.ogImage,
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
    card: 'summary_large_image',
  },
  icons: {
    icon: '/logo.svg',
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
    <html lang="en" className={`${domine.className} antialiased`}>
      <body className="antialiased flex flex-col items-center justify-center mx-auto mb-20 lg:mb-40">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-auto min-w-0 mt-2 flex flex-col px-6 sm:px-4 md:px-0 max-w-[640px] w-full">
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
