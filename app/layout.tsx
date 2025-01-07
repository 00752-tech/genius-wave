import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { CookieConsent } from "@/components/cookie-consent";
import Script from "next/script";
import { CustomCursor } from "@/components/custom-cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://trygeniuswave.online"),
  title:
    "Activate Your Genius Wave | Boost Brain Power with Brainwave Entrainment",
  description:
    "Learn how Genius Wave can help you achieve mental clarity and focus. Backed by neuroscience research and trusted by thousands. Special discount available!",
  keywords:
    "brainwave entrainment, boost brain power, genius wave audio, increase creativity, mental clarity techniques, cognitive enhancement, neuroscience audio, brainwave synchronization, improve focus, memory enhancement",
  openGraph: {
    title: "Activate Your Genius Wave | Boost Brain Power",
    description:
      "Unlock your brain's hidden potential with Genius Wave. Achieve mental clarity and focus. Special discount available!",
    url: "https://trygeniuswave.online",
    siteName: "Genius Wave",
    images: [
      {
        url: "https://trygeniuswave.online/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Genius Wave - Boost Your Brain Power",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Activate Your Genius Wave | Boost Brain Power",
    description:
      "Unlock your brain's hidden potential with Genius Wave. Achieve mental clarity and focus. Special discount available!",
    images: ["https://trygeniuswave.online/twitter-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://trygeniuswave.online",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <Script id="schema-product" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Genius Wave",
              "description": "Neuroscience-backed audio technology for cognitive enhancement",
              "image": {
                "@type": "ImageObject",
                "url": "https://gogeniuswave.com/images/s16img.png",
                "width": 1200,
                "height": 800
              }
              "brand": {
                "@type": "Brand",
                "name": "Genius Wave"
              },
              "offers": {
                "@type": "Offer",
                "price": "47.00",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "priceValidUntil": "2025-12-31"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "1024"
              }
            }
          `}
        </Script>
        <Script id="schema-organization" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Genius Wave",
              "url": "https://trygeniuswave.online",
              "logo": "https://trygeniuswave.online/logo.png",
              "sameAs": [
                "https://twitter.com/geniuswave",
                "https://facebook.com/geniuswave",
                "https://linkedin.com/company/geniuswave"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "support@trygeniuswave.online",
                "contactType": "customer service"
              }
            }
          `}
        </Script>
        <Script id="schema-faq" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [{
                "@type": "Question",
                "name": "How does Genius Wave improve cognitive performance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Genius Wave uses advanced brainwave entrainment techniques to synchronize your brain waves with specific frequencies. This process enhances neural connectivity, improves focus, and boosts overall cognitive function."
                }
              }, {
                "@type": "Question",
                "name": "Is Genius Wave safe to use?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Genius Wave is completely safe for most users. It utilizes non-invasive audio technology that has been extensively researched and tested."
                }
              }, {
                "@type": "Question",
                "name": "How long does it take to see results with Genius Wave?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Many users report feeling immediate effects after their first session. For long-term cognitive improvements, consistent use over 4-6 weeks is recommended."
                }
              }]
            }
          `}
        </Script>
        <Script id="schema-article" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Unlock Your Brain's Hidden Potential with Brainwave Entrainment",
              "description": "Learn how Genius Wave's neuroscience-backed audio technology can enhance your cognitive performance.",
              "image": "https://trygeniuswave.online/article-image.jpg",
              "datePublished": "2025-01-06T08:00:00+08:00",
              "dateModified": "2025-01-06T08:00:00+08:00",
              "author": {
                "@type": "Organization",
                "name": "Genius Wave Research Team",
                "url": "https://trygeniuswave.online/about"
              }
            }
          `}
        </Script>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg"></link>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className={inter.className}>
        <CustomCursor />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
