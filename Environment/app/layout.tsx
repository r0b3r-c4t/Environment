import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Environment',
  description: 'Environment — smart technology solutions',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
