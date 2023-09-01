import Navbar from '@/components/navbar/navbar_mobile';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/utils/redux/provider';
import BodyTemplate from '@/components/body/body';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='manifest' href='/manifest.json' />
        <link rel='apple-touch-icon' href='/icon.png'></link>
        <meta name='theme-color' content='#fff' />
      </head>

      <Providers>
        <body className={inter.className}>
          <Navbar />

          <BodyTemplate>{children}</BodyTemplate>
        </body>
      </Providers>
    </html>
  );
}
