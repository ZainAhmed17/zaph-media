// File: /src/app/layout.tsx
import './globals.css';
import Navbar from '@/components/nav-bar/navBar';
import Footer from '@/components/footer/footer';

export const metadata = {
  title: 'ZAPH',
  description: 'Tech. Music. Media.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
