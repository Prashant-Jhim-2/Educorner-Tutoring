import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'The EduCorner Tutoring - Expert Math, Science & IELTS Tutoring in Hamilton',
    template: '%s | The EduCorner Tutoring'
  },
  description: 'Expert tutoring in Mathematics, Science, and IELTS in Hamilton, Ontario. Personalized in-home and online tutoring with experienced tutor Chandan Mehta. Call 437-226-0838 for a free consultation.',
  keywords: [
    'tutoring hamilton',
    'math tutor hamilton',
    'science tutor hamilton',
    'IELTS tutor hamilton',
    'physics tutor hamilton',
    'chemistry tutor hamilton',
    'online tutoring hamilton',
    'in-home tutoring hamilton',
    'private tutor hamilton',
    'academic tutoring hamilton',
    'Chandan Mehta tutor',
    'EduCorner tutoring',
    'high school tutoring',
    'university tutoring',
    'test preparation hamilton'
  ],
  authors: [{ name: 'Chandan Mehta' }],
  creator: 'The EduCorner Tutoring',
  publisher: 'The EduCorner Tutoring',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://theeducornertutoring.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://theeducornertutoring.com',
    siteName: 'The EduCorner Tutoring',
    title: 'The EduCorner Tutoring - Expert Math, Science & IELTS Tutoring in Hamilton',
    description: 'Expert tutoring in Mathematics, Science, and IELTS in Hamilton, Ontario. Personalized in-home and online tutoring with experienced tutor Chandan Mehta.',
    images: [
      {
        url: '/Header.jpg',
        width: 1200,
        height: 630,
        alt: 'The EduCorner Tutoring - Professional Tutoring Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The EduCorner Tutoring - Expert Math, Science & IELTS Tutoring in Hamilton',
    description: 'Expert tutoring in Mathematics, Science, and IELTS in Hamilton, Ontario. Personalized in-home and online tutoring.',
    images: ['/Header.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "The EduCorner Tutoring",
    "description": "Expert tutoring in Mathematics, Science, and IELTS in Hamilton, Ontario. Personalized in-home and online tutoring with experienced tutor Chandan Mehta.",
    "url": "https://theeducornertutoring.com",
    "logo": "https://theeducornertutoring.com/Header.jpg",
    "image": "https://theeducornertutoring.com/Header.jpg",
    "telephone": "+1-437-226-0838",
    "email": "theeducornertutoring@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hamilton",
      "addressRegion": "Ontario",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "43.2557",
      "longitude": "-79.8711"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "$$",
    "currenciesAccepted": "CAD",
    "paymentAccepted": "Cash, Credit Card, E-transfer",
    "areaServed": [
      {
        "@type": "City",
        "name": "Hamilton"
      },
      {
        "@type": "City", 
        "name": "Burlington"
      },
      {
        "@type": "City",
        "name": "Oakville"
      },
      {
        "@type": "City",
        "name": "Mississauga"
      }
    ],
    "serviceType": [
      "In-Home Tutoring",
      "Online Tutoring",
      "Test Preparation",
      "IELTS Preparation"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tutoring Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mathematics Tutoring",
            "description": "Expert tutoring in Algebra, Functions, Trigonometry, Vectors, and Geometry"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Science Tutoring",
            "description": "Comprehensive tutoring in Physics, Chemistry, Biology and more"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "IELTS Preparation",
            "description": "Specialized IELTS test preparation including Speaking and Writing"
          }
        }
      ]
    },
    "founder": {
      "@type": "Person",
      "name": "Chandan Mehta",
      "jobTitle": "Founder & Lead Tutor",
      "description": "Experienced tutor with over 8 years of tutoring experience in math and science/physics"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Student Parent"
        },
        "reviewBody": "Excellent tutoring service. Chandan is very patient and knowledgeable. My child's grades improved significantly."
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "25",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f97316" />
        <meta name="msapplication-TileColor" content="#f97316" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Chandan Mehta" />
        <meta name="copyright" content="The EduCorner Tutoring" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Hamilton, Ontario" />
        <meta name="geo.position" content="43.2557;-79.8711" />
        <meta name="ICBM" content="43.2557, -79.8711" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
