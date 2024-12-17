// src\app\layout.tsx
import type { Metadata } from "next";
import { Roboto, Noto_Serif, Poppins } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
  weight: '400',
});

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  variable: '--font-noto-serif',
  display: 'swap',
});

const poppins400 = Poppins({
  subsets: ['latin'],
  variable: '--font-banbas-400',
  display: 'swap',
  weight: '400',
});

const poppins200 = Poppins({
  subsets: ['latin'],
  variable: '--font-banbas-200',
  display: 'swap',
  weight: '200',
});

const poppins600 = Poppins({
  subsets: ['latin'],
  variable: '--font-banbas-600',
  display: 'swap',
  weight: '600',
});

export const metadata: Metadata = {
  title: "Banbas",
  description: "A resort in chitwan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`
          ${roboto.variable} 
          ${notoSerif.variable} 
          ${poppins200.variable} 
          ${poppins400.variable} 
          ${poppins600.variable}
        `}
      >
        {children}
      </body>
    </html>
  );
}
