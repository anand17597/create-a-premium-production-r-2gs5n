import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Create a premium, production-r…',
  description: 'Built with Surge AI — Next.js + Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/*
          Tailwind CDN is included so that dynamically rendered HTML content
          (from dangerouslySetInnerHTML) also gets Tailwind utility classes.
          You can remove this once you migrate to proper TSX components.
        */}
        <Script
          src="https://cdn.tailwindcss.com"
          strategy="beforeInteractive"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
