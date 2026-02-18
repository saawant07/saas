import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HardCoded - The AI-Powered Reddit Organic Marketing Software",
  description: "The ultimate toolkit for building modern SaaS applications. Fast, secure, and scalable.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hardcoded.io",
    siteName: "HardCoded",
    title: "HardCoded - The AI-Powered Reddit Organic Marketing Software",
    description: "The ultimate toolkit for building modern SaaS applications.",
    images: [
      {
        url: "https://launchui.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LaunchUI Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HardCoded - The AI-Powered Reddit Organic Marketing Software",
    description: "The ultimate toolkit for building modern SaaS applications.",
    creator: "@launchui",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased selection:bg-brand-500/30`}>
        {children}
      </body>
    </html>
  );
}
