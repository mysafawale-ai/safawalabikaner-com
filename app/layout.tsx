import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Premium Wedding Turbans in ubikaner | Safawala ubikaner Safa & Pagdi Services",
  description:
    "Safawala ubikaner - ubikaner's most trusted wedding turban specialists. Expert safa, pagdi, feta & sehra tying. Master specialists, same-day service. Free consultation. Book now: +91-9725295692",
  keywords:
    "wedding turban ubikaner, safa ubikaner, pagdi tying service ubikaner, groom turban ubikaner, wedding safa ubikaner, turban tying ubikaner, best turban service ubikaner, safa tying service ubikaner, pagdi design ubikaner, feta tying ubikaner, sehra service ubikaner",
  authors: [{ name: "Safawala ubikaner" }],
  creator: "Safawala ubikaner",
  publisher: "Safawala ubikaner",
  icons: {
    icon: "/image.png",
    shortcut: "/image.png",
    apple: "/image.png",
  },
  metadataBase: new URL("https://safawalabikaner.com"),
  alternates: {
    canonical: "https://safawalabikaner.com",
  },
  openGraph: {
    title: "Premium Wedding Turbans in ubikaner | Safawala ubikaner",
    description:
      "Expert safa, pagdi, feta & sehra tying for grooms, baraatis & destination weddings. Master specialists, same-day service.",
    url: "https://safawalabikaner.com",
    siteName: "Safawala ubikaner",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safawala ubikaner - Wedding Turbans | Expert Safa & Pagdi Service",
    description: "40+ years of heritage. Master specialists, same-day service, premium quality.",
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "Wedding Services",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/image.png?v=1" type="image/png" />
        <link rel="shortcut icon" href="/image.png?v=1" type="image/png" />
        <link rel="apple-touch-icon" href="/image.png?v=1" />
        <meta name="theme-color" content="#8b1a1a" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
