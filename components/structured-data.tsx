export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Gosen Retreat",
    description: "Professional remote psychiatric care and mental health services",
    url: "https://gosenretreat.com",
    logo: "https://gosenretreat.com/images/gosen-logo-full.png",
    image: "https://gosenretreat.com/images/gosen-logo-full.png",
    telephone: "954-366-8644",
    email: "Robertcarine@hotmail.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    serviceArea: {
      "@type": "Country",
      name: "United States",
    },
    medicalSpecialty: ["Psychiatry", "Mental Health", "Telepsychiatry"],
    availableService: [
      {
        "@type": "MedicalTherapy",
        name: "Remote Psychiatric Consultation",
        description: "Online psychiatric evaluations and treatment planning via secure video conferencing",
        serviceType: "Telepsychiatry",
      },
      {
        "@type": "MedicalTherapy",
        name: "Online Therapy Sessions",
        description: "Individual therapy sessions conducted remotely for mental health support",
        serviceType: "Teletherapy",
      },
      {
        "@type": "MedicalTherapy",
        name: "Medication Management",
        description: "Remote psychiatric medication consultation and management",
        serviceType: "Psychiatric Medication Management",
      },
      {
        "@type": "MedicalTherapy",
        name: "Crisis Intervention",
        description: "Emergency mental health support via remote consultation",
        serviceType: "Crisis Mental Health Services",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Remote Mental Health Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Initial Psychiatric Consultation",
            description: "Comprehensive remote psychiatric evaluation and treatment planning session",
          },
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Follow-up Therapy Session",
            description: "Ongoing remote therapy sessions for continued mental health support",
          },
          availability: "https://schema.org/InStock",
        },
      ],
    },
    openingHours: "Mo-Fr 09:00-18:00",
    sameAs: [
      "https://www.facebook.com/gosenretreat",
      "https://www.instagram.com/gosenretreat",
      "https://www.linkedin.com/company/gosenretreat",
    ],
  }

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Gosen Retreat",
    url: "https://gosenretreat.com",
    description: "Professional remote psychiatric care and mental health services",
    publisher: {
      "@type": "Organization",
      name: "Gosen Retreat",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://gosenretreat.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://gosenretreat.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://gosenretreat.com#services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Book Appointment",
        item: "https://gosenretreat.com/booking",
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData),
        }}
      />
    </>
  )
}
