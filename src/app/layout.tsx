import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { appData } from "./data/AppData";
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
  title: `${appData.aboutMe.name} - ${appData.aboutMe.occupation} | Resume`,
  description: appData.aboutMe.introText,
  openGraph: {
    title: `${appData.aboutMe.name} - ${appData.aboutMe.occupation} | Resume`,
    description: appData.aboutMe.introText,
    url: appData.aboutMe.contact.website,
    siteName: `${appData.aboutMe.name} - ${appData.aboutMe.occupation} | Resume`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${appData.aboutMe.name} - ${appData.aboutMe.occupation} | Resume`,
    description: appData.aboutMe.introText,
  },
  keywords: appData.skills.map((skill) => skill.tech.map((item) => item.name)).flat(),
  authors: [{ name: "William Le Pommelet" }],
  creator: appData.aboutMe.name,
  metadataBase: appData.aboutMe.contact.website ? new URL(appData.aboutMe.contact.website) : undefined,
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
