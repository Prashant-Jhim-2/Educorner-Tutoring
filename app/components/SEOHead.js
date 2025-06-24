'use client'
import Head from 'next/head'

const SEOHead = ({ 
  title, 
  description, 
  keywords = [], 
  canonical, 
  ogImage = '/Header.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image'
}) => {
  const fullTitle = title ? `${title} | The EduCorner Tutoring` : 'The EduCorner Tutoring - Expert Math, Science & IELTS Tutoring in Hamilton'
  const fullDescription = description || 'Expert tutoring in Mathematics, Science, and IELTS in Hamilton, Ontario. Personalized in-home and online tutoring with experienced tutor Chandan Mehta. Call 437-226-0838 for a free consultation.'
  const fullKeywords = keywords.length > 0 ? keywords.join(', ') : 'tutoring hamilton, math tutor hamilton, science tutor hamilton, IELTS tutor hamilton, online tutoring hamilton, in-home tutoring hamilton'
  const fullCanonical = canonical ? `https://theeducornertutoring.com${canonical}` : 'https://theeducornertutoring.com'

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={`https://theeducornertutoring.com${ogImage}`} />
      <meta property="og:site_name" content="The EduCorner Tutoring" />
      <meta property="og:locale" content="en_CA" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={`https://theeducornertutoring.com${ogImage}`} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="author" content="Chandan Mehta" />
      <meta name="copyright" content="The EduCorner Tutoring" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="CA-ON" />
      <meta name="geo.placename" content="Hamilton, Ontario" />
      <meta name="geo.position" content="43.2557;-79.8711" />
      <meta name="ICBM" content="43.2557, -79.8711" />
      
      {/* Business Information */}
      <meta name="contact:phone" content="+1-437-226-0838" />
      <meta name="contact:email" content="theeducornertutoring@gmail.com" />
      <meta name="business:contact_data:street_address" content="Hamilton, Ontario" />
      <meta name="business:contact_data:locality" content="Hamilton" />
      <meta name="business:contact_data:region" content="Ontario" />
      <meta name="business:contact_data:postal_code" content="L8" />
      <meta name="business:contact_data:country_name" content="Canada" />
    </Head>
  )
}

export default SEOHead 