import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.digitalvekst.no'),
  title: {
    default: 'Digital Vekst | Webbyrå som skaper vekst for norske bedrifter',
    template: '%s | Digital Vekst',
  },
  description: 'Vi bygger nettsider med struktur som konverterer. Design, SEO og synlighet for din bedrift. Start fra 14 990,- eks mva.',
  keywords: ['webbyrå', 'nettside', 'webdesign', 'SEO', 'Norge', 'digital markedsføring', 'webdesign Bergen', 'nettside pris', 'webdesign firma', 'lage nettside'],
  authors: [{ name: 'Digital Vekst' }],
  creator: 'Digital Vekst',
  publisher: 'Digital Vekst',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'nb_NO',
    url: 'https://www.digitalvekst.no',
    siteName: 'Digital Vekst',
    title: 'Digital Vekst | Webbyrå som skaper vekst for norske bedrifter',
    description: 'Vi bygger nettsider med struktur som konverterer. Design, SEO og synlighet for din bedrift. Start fra 14 990,- eks mva.',
    images: [
      {
        url: 'https://www.digitalvekst.no/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Digital Vekst – Webbyrå for norske bedrifter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Vekst | Webbyrå som skaper vekst',
    description: 'Vi bygger nettsider med struktur som konverterer. Start fra 14 990,- eks mva.',
    images: ['https://www.digitalvekst.no/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport = {
  themeColor: '#0F172A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="no">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZSDQMJPP7S"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZSDQMJPP7S');
          `}
        </Script>
      </body>
    </html>
  )
}
