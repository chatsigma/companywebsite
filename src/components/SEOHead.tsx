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
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
  breadcrumbs?: Array<{
    name: string;
    url: string;
  }>;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "ChatSigma - Official WhatsApp Business API & Automation Platform | 0% Markup",
  description = "Automate WhatsApp conversations, manage leads, and boost sales with ChatSigma's official WhatsApp Business API. 0% markup pricing, AI chatbot, bulk messaging, and analytics. Start your 14-day free trial today.",
  keywords = "WhatsApp Business API, WhatsApp Automation, WhatsApp Chatbot, AI Chatbot, Bulk Messaging, WhatsApp Marketing, Business Messaging, Chat Automation, WhatsApp API, Business Communication, Customer Engagement, Lead Management",
  image = "https://chatsigma.com/image.png",
  url = "https://chatsigma.com/",
  type = "website",
  schemaData,
  article,
  breadcrumbs
}) => {
  const defaultSchemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ChatSigma Technologies (OPC) Private Limited",
    "alternateName": "ChatSigma",
    "url": "https://chatsigma.com",
    "logo": "https://chatsigma.com/image.png",
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

  // Generate breadcrumb schema if breadcrumbs provided
  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  } : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="ChatSigma Technologies (OPC) Private Limited" />
      <meta name="publisher" content="ChatSigma Technologies (OPC) Private Limited" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="rating" content="general" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="format-detection" content="telephone=no" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="ChatSigma" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="hi_IN" />

      {/* Article specific Open Graph tags */}
      {article && type === 'article' && (
        <>
          {article.publishedTime && <meta property="article:published_time" content={article.publishedTime} />}
          {article.modifiedTime && <meta property="article:modified_time" content={article.modifiedTime} />}
          {article.author && <meta property="article:author" content={article.author} />}
          {article.section && <meta property="article:section" content={article.section} />}
          {article.tags && article.tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@chatsigma" />
      <meta name="twitter:creator" content="@chatsigma" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:domain" content="chatsigma.com" />
      <meta name="twitter:url" content={url} />

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

      {/* Schema.org JSON-LD for Organization/Other Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchemaData)}
      </script>

      {/* Breadcrumb Schema if provided */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}

      {/* WebPage Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": title,
          "description": description,
          "url": url,
          "inLanguage": "en-US",
          "isPartOf": {
            "@type": "WebSite",
            "name": "ChatSigma",
            "url": "https://chatsigma.com"
          },
          "about": {
            "@type": "Thing",
            "name": "WhatsApp Business API",
            "description": "Official WhatsApp Business API automation and messaging platform"
          },
          "publisher": {
            "@type": "Organization",
            "name": "ChatSigma Technologies (OPC) Private Limited",
            "logo": {
              "@type": "ImageObject",
              "url": "https://chatsigma.com/image.png"
            }
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;