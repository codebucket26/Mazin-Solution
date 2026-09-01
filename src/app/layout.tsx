import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupForm } from "@/components/PopupForm";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Mazin Solution | Industrial Supply & Services",
  description: "Mazin Solution - Industrial Supply & Services | توريد وخدمات صناعية",
  keywords: ["Mazin Solution", "Industrial Supply", "Services", "Saudi Arabia", "توريد", "خدمات صناعية", "Industrial Equipment"],
  authors: [{ name: "Mazin Solution" }],
  creator: "Mazin Solution",
  publisher: "Mazin Solution",
  openGraph: {
    title: "Mazin Solution | Industrial Supply & Services",
    description: "Mazin Solution - Industrial Supply & Services | توريد وخدمات صناعية",
    url: "https://mazinsolution.com",
    siteName: "Mazin Solution",
    locale: "en_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mazin Solution | Industrial Supply & Services",
    description: "Mazin Solution - Industrial Supply & Services | توريد وخدمات صناعية",
  },
  alternates: {
    canonical: "https://mazinsolution.com",
  },
  other: {
    "geo.region": "SA", 
    "geo.placename": "Saudi Arabia",
    "geo.position": "23.885942;45.079162",
    "ICBM": "23.885942, 45.079162",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col pt-0" suppressHydrationWarning>
        <Script id="schema-org" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Mazin Solution",
            "url": "https://mazinsolution.com",
            "logo": "https://mazinsolution.com/icon.jpeg",
            "description": "Mazin Solution - Industrial Supply & Services | توريد وخدمات صناعية",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "SA",
              "addressRegion": "Saudi Arabia"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer support"
            }
          })
        }} />
        <PopupForm />
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
