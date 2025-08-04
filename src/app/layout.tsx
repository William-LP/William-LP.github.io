import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "William Le Pommelet",
  description: "Resume and professional profile of William Le Pommelet, DevOps Engineer with expertise in infrastructure and full-stack development.",
  openGraph: {
    title: "William Le Pommelet",
    description: "Explore the resume and tech background of William Le Pommelet, a DevOps Engineer working across infrastructure, full-stack development, and modern tech fields like cybersecurity, AI, and blockchain.",
    url: "https://william-lp.github.io/",
    siteName: "William Le Pommelet",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "William Le Pommelet",
    description: "DevOps Engineer with a strong background in infrastructure, full-stack development, and interest in cybersecurity, AI, and blockchain.",
  },
  keywords: ["DevOps", "Resume", "William Le Pommelet", "Infrastructure", "Full Stack", "Cybersecurity", "AI", "Blockchain"],
  authors: [{ name: "William Le Pommelet" }],
  creator: "William Le Pommelet",
  metadataBase: new URL("https://william-lp.github.io/"),
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
