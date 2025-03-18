import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ViewTransitions } from 'next-view-transitions';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://leerob.com'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Nora Cai',
    template: '%s | Nora Cai',
  },
  description: 'Frontend developer, optimist, community builder.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className={`${inter.className}`}>
        <body className="antialiased tracking-tight">
          <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 bg-white text-gray-900">
            {/* <Header /> */}
            <main className="max-w-[60ch] mx-auto w-full space-y-6">
              {children}
            </main>
            <Footer />
            <Analytics />
          </div>
        </body>
      </html>
    </ViewTransitions>
  );
}

function Header() {
  const navItems = [
    { name: "Intro", href: "#intro" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="py-4">
      <nav className="flex justify-center space-x-6">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
          >
            {item.name}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Footer() {
  const links = [
    { name: "linkedin", url: "https://www.linkedin.com/in/nora-y-cai/" },
    { name: "email", url: "mailto:nora.y.cai@gmail.com" },
    { name: "github", url: "https://github.com/ncai25" },
    { name: "resume", url: "/Nora_Yinuo_Cai_resume.pdf" },
  ];

  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
