import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Environment',
  description: 'Environment — Improve your environment',
  icons: {
    icon: '/Icon.png'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
