const BASE_URL = "https://www.digitalvekst.no"

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Digital Vekst",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description:
      "Vi bygger nettsider med struktur som konverterer. Design, SEO og synlighet for din bedrift.",
    email: "post@digitalvekst.no",
    telephone: "+4791135991",
    address: {
      "@type": "PostalAddress",
      addressCountry: "NO",
    },
    sameAs: [],
  }
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Digital Vekst",
    url: BASE_URL,
    description:
      "Vi bygger nettsider med struktur som konverterer. Design, SEO og synlighet for din bedrift.",
    publisher: {
      "@type": "Organization",
      name: "Digital Vekst",
    },
  }
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Digital Vekst",
    url: BASE_URL,
    email: "post@digitalvekst.no",
    telephone: "+4791135991",
    description:
      "Webbyrå som bygger nettsider med struktur som konverterer. Design, SEO og synlighet for norske bedrifter.",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "NO",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "10",
    },
  }
}

export function getServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: {
      "@type": "Organization",
      name: "Digital Vekst",
      url: BASE_URL,
    },
    serviceType: "Web Design and Development",
    areaServed: {
      "@type": "Country",
      name: "Norway",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Nettsidepakker",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Start",
          description: "Enkel, profesjonell nettside med opptil 4 sider",
          price: "14990",
          priceCurrency: "NOK",
        },
        {
          "@type": "Offer",
          name: "Pro",
          description: "Komplett nettløsning med 5-8 sider og konverteringsstruktur",
          price: "24990",
          priceCurrency: "NOK",
        },
      ],
    },
  }
}

export function getFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function getBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
