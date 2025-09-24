import '@/app/ui/global.css'
import { inter } from './ui/font';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jooooo Dashboard',
  description: 'The official next js course dashboard, buith with app router',
  metadataBase: new URL('https://rumahjooocode.com')
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
