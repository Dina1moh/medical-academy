import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: {
    default: "Medical Academy | Anatomy & Embryology Course",
    template: "%s | Medical Academy",
  },
  description:
    "Medical Academy offers a clean, beginner-friendly Anatomy and Embryology course for 1st, 2nd, and 3rd year medical students.",
  applicationName: "Medical Academy",
  keywords: [
    "Medical Academy",
    "Anatomy course",
    "Embryology course",
    "Medical students",
    "Beni Suef",
  ],
  authors: [{ name: "Medical Academy" }],
  creator: "Medical Academy",
  openGraph: {
    title: "Medical Academy | Anatomy & Embryology Course",
    description:
      "Structured Anatomy and Embryology learning for medical students.",
    url: "/",
    siteName: "Medical Academy",
    images: [
      {
        url: "/images/og-placeholder.svg",
        width: 1200,
        height: 630,
        alt: "Medical Academy preview placeholder",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medical Academy | Anatomy & Embryology Course",
    description:
      "Structured Anatomy and Embryology learning for medical students.",
    images: ["/images/og-placeholder.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
