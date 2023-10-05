import '../globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Naiara Silva',
  description: 'Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="w-100vh bg-bg1  mt-[40px] sm:mt-16 mb-0 mx-[10px] sm:mx-20 ">
        {children}
      </body>
    </html>
  );
}
