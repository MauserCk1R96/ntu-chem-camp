import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "@/component/Navbar";
import {
  siteDescription,
  siteKeywords,
  siteTitle,
  siteUrl,
} from "@/app/seo";
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
  metadataBase: new URL(siteUrl),
  applicationName: "台大化學營",
  title: {
    default: siteTitle,
    template: "%s｜台大化學營",
  },
  description: siteDescription,
  keywords: siteKeywords,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/site-icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/site-icon.svg",
    apple: "/site-icon.svg",
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "台大化學營",
    capable: true,
    statusBarStyle: "black-translucent",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "台大化學營",
    locale: "zh_TW",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
  verification: {
  google: "mRajCIbmLCvk97JZAf1w7vxTen5vNciBuVz61HkcFJ0",
}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hant-TW"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7084651179601480"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
