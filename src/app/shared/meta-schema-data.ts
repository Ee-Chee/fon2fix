import { environment } from "src/environments/environment";
import { metaTexts } from "./meta-static-texts";

export const metaSchemaData = {
  website: {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": metaTexts['home'].title,
    "url": environment.baserUrl,
    "description": metaTexts['home'].description,
    "image": environment.baserUrl + "/assets/images/fon2fix-logo.png",
    "alternateName": "FON2FIX Smartphone Specialist",
    "genre": "Smartphone Repair Services and Accessories",
    "headline": "Smartphone Repair Services and Accessories",
    "keywords": "Smartphone repair, Phone service, Kedai membaiki phone, Accessories, Sri Gombak, Batu Caves"
  },
  company: { 
    "@context" : "https://schema.org",
    "@type" : "Organization",
    "url" : environment.baserUrl,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "MY",
      "streetAddress": "39, Jalan SG 1/6, Taman Sri Gombak",
      "addressLocality": "Batu Caves",
      "addressRegion": "Selangor",
      "postalCode": "68100"
    },
    "email": "endie.leng@fon2fix.com.my",
    "founder": "Endie Leng",
    "foundingLocation": "Prima Seri Gombak",
    "logo": environment.baserUrl + "/assets/images/fon2fix-logo.png",
    "telephone": "+601129190338",
  },
  shop: {
    "@context": "https://schema.org/",
    "@type": "MobilePhoneStore",
    "currenciesAccepted": "MYR",
    "openingHours": "Mo-Sa, 10:00-20:00",
    "paymentAccepted": "Cash, Credit Card",
    "priceRange": "$"
  },
  services: {
    "@context": "https://schema.org/",
    "@type": "Service",
    "serviceType": "Smartphone repair services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "FON2FIX",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "MY",
        "streetAddress": "39, Jalan SG 1/6, Taman Sri Gombak",
        "addressLocality": "Batu Caves",
        "addressRegion": "Selangor",
        "postalCode": "68100"
      },
      "image": environment.baserUrl + "/assets/images/fon2fix-logo.png"
    },
    "areaServed": {
      "@type": "State",
      "name": "Selangor"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Smartphone repair services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Touch screen replacement"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "LCD replacement"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Battery replacement"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Motherboard soldering"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Charging port soldering"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Water damage service"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Software running"
          }
        }
      ]
    }
  },
}
