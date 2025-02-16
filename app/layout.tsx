// app/layout.tsx
import Providers from './providers';
import '../styles/globals.css';
import { Suspense } from 'react';

export const metadata = {
  title: 'My Next.js App',
  description: 'A Next.js application with Apollo Client',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Suspense>
          <Providers>{children}</Providers>
        </Suspense>
      </body>
    </html>
  );
}
