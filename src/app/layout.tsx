import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "@/components/ScrolltoTop";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gabriel Rocha | Desenvolvedor Full Stack | React, Next.js, Node.js, NestJS, TypeScript",
  description: "Desenvolvedor Full Stack especializado em React, Next.js, Node.js e NestJS. Criação de aplicações web modernas, escaláveis e otimizadas. Portfolio com projetos em JavaScript e TypeScript.",
  keywords: [
    "desenvolvedor full stack",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "TypeScript",
    "JavaScript",
    "desenvolvedor web",
    "Goiânia",
    "frontend developer",
    "backend developer",
    "PostgreSQL",
    "Docker",
    "Figma",
    "UX/UI Designer"
  ],
  authors: [{ name: "Gabriel Rocha" }],
  creator: "Gabriel Rocha",
  publisher: "Gabriel Rocha",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.gabrielrochaa.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Gabriel Rocha - Desenvolvedor Full Stack",
    description: "Portfolio profissional de Gabriel Rocha - Desenvolvedor Full Stack especializado em tecnologias modernas como React, Next.js, Node.js e NestJS",
    url: "https://www.gabrielrochaa.com.br",
    siteName: "Gabriel Rocha Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gabriel Rocha - Desenvolvedor Full Stack especializado em React e Node.js"
      }
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Rocha - Desenvolvedor Full Stack",
    description: "Portfolio profissional com projetos em React, Next.js, Node.js e NestJS",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Gabriel Rocha",
              "jobTitle": "Desenvolvedor Full Stack",
              "url": "https://www.gabrielrochaa.com.br",
              "image": "https://www.gabrielrochaa.com.br/minhafoto.jpeg",
              "sameAs": [
                "https://github.com/gabriel-roocha",
                "https://www.linkedin.com/in/gabriel-rocha-sarno?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
                "https://www.instagram.com/gabrielsarnno/"
              ],
              "knowsAbout": [
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "NestJS",
                "Docker",
                "PostgreSQL",
                "SQLite",
                "Figma",
                "UX/UI Design"
              ],
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Prevest / Fractal"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Goiânia",
                "addressRegion": "GO",
                "addressCountry": "BR"
              },
              "email": "gabrielrochasarnoteles@gmail.com"
            })
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} antialiased bg-neutral-950`}
      >
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}