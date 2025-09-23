import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import StructuredData from "@/components/structured-data"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Gosen Retreat - Online Psychiatric Clinic | Remote Mental Health Services",
  description:
    "Professional remote psychiatric care and mental health services. Expert online therapy, counseling, and psychiatric consultations. Call 954-366-8644 for personalized mental wellness programs.",
  keywords:
    "online psychiatrist, remote mental health, psychiatric clinic, online therapy, mental health services, telepsychiatry, remote counseling, psychiatric consultation, mental wellness, anxiety treatment, depression therapy",
  authors: [{ name: "Gosen Retreat" }],
  creator: "Gosen Retreat",
  publisher: "Gosen Retreat",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://gosenretreat.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gosen Retreat - Online Psychiatric Clinic",
    description:
      "Professional remote psychiatric care and mental health services. Expert online therapy and psychiatric consultations.",
    url: "https://gosenretreat.com",
    siteName: "Gosen Retreat",
    images: [
      {
        url: "/images/logodemo.png",
        width: 1200,
        height: 630,
        alt: "Gosen Retreat - Online Psychiatric Clinic",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gosen Retreat - Online Psychiatric Clinic",
    description:
      "Professional remote psychiatric care and mental health services. Expert online therapy and psychiatric consultations.",
    images: ["/images/logodemo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Healthcare",
  classification: "Mental Health Services",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Gosen Retreat",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#A8D5BA",
    "theme-color": "#A8D5BA",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
