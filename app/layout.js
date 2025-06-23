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

export const metadata = {
  title: "The EduCorner Tutoring - Expert Math, Science & IELTS Tutoring in Toronto",
  description: "Professional tutoring services in Toronto. Expert math, science, and IELTS preparation with personalized learning plans. Contact Chandan Mehta for quality education.",
  keywords: [
    "tutoring Toronto",
    "math tutor Toronto",
    "science tutor Toronto", 
    "IELTS preparation Toronto",
    "private tutor Toronto",
    "online tutoring",
    "in-home tutoring",
    "academic support",
    "Chandan Mehta tutor",
    "EduCorner Tutoring"
  ],
  authors: [{ name: "Chandan Mehta" }],
  creator: "The EduCorner Tutoring",
  publisher: "The EduCorner Tutoring",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://educornertutoring.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "The EduCorner Tutoring - Expert Math, Science & IELTS Tutoring in Toronto",
    description: "Professional tutoring services in Toronto. Expert math, science, and IELTS preparation with personalized learning plans. Contact Chandan Mehta for quality education.",
    url: 'https://educornertutoring.com',
    siteName: 'The EduCorner Tutoring',
    images: [
      {
        url: '/Header.jpg',
        width: 1200,
        height: 630,
        alt: 'The EduCorner Tutoring - Professional Tutoring Services',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "The EduCorner Tutoring - Expert Math, Science & IELTS Tutoring in Toronto",
    description: "Professional tutoring services in Toronto. Expert math, science, and IELTS preparation with personalized learning plans.",
    images: ['/Header.jpg'],
    creator: '@educornertutoring',
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f97316" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "The EduCorner Tutoring",
              "description": "Professional tutoring services in Toronto offering expert math, science, and IELTS preparation with personalized learning plans.",
              "url": "https://educornertutoring.com",
              "logo": "https://educornertutoring.com/Header.jpg",
              "image": "https://educornertutoring.com/Header.jpg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Toronto",
                "addressRegion": "Ontario",
                "addressCountry": "CA"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-437-226-0838",
                "contactType": "customer service",
                "email": "theeducornertutoring@gmail.com"
              },
              "founder": {
                "@type": "Person",
                "name": "Chandan Mehta",
                "jobTitle": "Founder & Tutor",
                "description": "Passionate tutor with over 8 years of experience in math and science tutoring"
              },
              "serviceType": [
                "Math Tutoring",
                "Science Tutoring", 
                "IELTS Preparation",
                "Online Tutoring",
                "In-Home Tutoring"
              ],
              "areaServed": {
                "@type": "City",
                "name": "Toronto"
              },
              "priceRange": "$$",
              "openingHours": "Mo-Su 09:00-21:00"
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
