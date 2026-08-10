import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tehelka News | Hyperlocal Indian News",
  description: "A modern mobile-media company delivering short, local news in the language you think in.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body suppressHydrationWarning className="antialiased font-sans bg-paper text-ink selection:bg-brand-red selection:text-white">
        {children}
      </body>
    </html>
  );
}
