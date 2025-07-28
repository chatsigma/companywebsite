import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  schemaData?: any;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Chat Sigma - Official WhatsApp Business API & Automation Tool",
  description = "Automate WhatsApp conversations, manage leads, and boost sales with Chat Sigma's official WhatsApp Business API platform. 0% markup, 14-day free trial.",
  keywords = "WhatsApp Business API, WhatsApp Automation, WhatsApp Chatbot, WhatsApp Marketing, Business Messaging, Chat Automation, WhatsApp API, Business Communication",
  image = "https://chatsigma.com/og-image.jpg",
  url = "https://chatsigma.com/",
  type = "website",
  schemaData
}) => {
  const defaultSchemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ChatSigma Technologies (OPC) Private Limited",
    "alternateName": "ChatSigma",
    "url": "https://chatsigma.com",
    "logo": "https://chatsigma.com/CHAT_SIGMA_LOGO-removebg-preview.png",
    "description": "Official WhatsApp Business API platform for automating customer conversations and growing businesses efficiently.",
    "foundingDate": "2024",
    "founders": [
      {
        "@type": "Person",
        "name": "ChatSigma Founder"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Noida",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "India",
      "postalCode": "201301"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-9220304949",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi"]
      },
      {
        "@type": "ContactPoint",
        "email": "info@chatsigma.com",
        "contactType": "customer service"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/chatsigma",
      "https://twitter.com/chatsigma",
      "https://www.facebook.com/chatsigma"
    ],
    "offers": {
      "@type": "Offer",
      "name": "WhatsApp Business API Automation",
      "description": "Complete WhatsApp automation platform with 0% markup pricing",
      "price": "49",
      "priceCurrency": "USD",
      "priceValidUntil": "2024-12-31",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2000",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const finalSchemaData = schemaData || defaultSchemaData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="ChatSigma Technologies (OPC) Private Limited" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="ChatSigma" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@chatsigma" />
      <meta name="twitter:creator" content="@chatsigma" />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#25D366" />
      <meta name="msapplication-TileColor" content="#25D366" />
      <meta name="application-name" content="ChatSigma" />
      <meta name="apple-mobile-web-app-title" content="ChatSigma" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="mobile-web-app-capable" content="yes" />

      {/* Geo Tags */}
      <meta name="geo.region" content="IN-UP" />
      <meta name="geo.placename" content="Noida" />
      <meta name="geo.position" content="28.5355;77.3910" />
      <meta name="ICBM" content="28.5355, 77.3910" />

      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="Noida Sector 61" />
      <meta name="business:contact_data:locality" content="Noida" />
      <meta name="business:contact_data:region" content="Uttar Pradesh" />
      <meta name="business:contact_data:postal_code" content="201301" />
      <meta name="business:contact_data:country_name" content="India" />
      <meta name="business:contact_data:phone_number" content="+91-9220304949" />
      <meta name="business:contact_data:email" content="info@chatsigma.com" />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchemaData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;