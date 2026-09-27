import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GA_TRACKING_ID = "G-XQ8YL4EWTR";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kestrel Village New Homes | Summerlin West Las Vegas | Dr. Jan Duffy",
  description:
    "Kestrel Village new construction in Summerlin West, Las Vegas. Eight communities from $455K. VIP tours with Dr. Jan Duffy: 702-222-1964.",
  keywords: "Kestrel Village, Summerlin West homes, Las Vegas new construction, Woodside Homes, KB Home, Pulte Homes, Lennar, Dr. Jan Duffy, 89138",
  authors: [{ name: "Dr. Jan Duffy" }],
  metadataBase: new URL("https://www.kestrelvillage.com"),
  openGraph: {
    title: "Kestrel Village New Homes | Summerlin West Las Vegas",
    description: "New construction homes from $455K in Las Vegas' most sought-after village. 8 communities by Woodside, KB Home, Taylor Morrison, Lennar & Pulte.",
    url: "https://www.kestrelvillage.com",
    siteName: "Kestrel Village",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kestrel Village New Homes | Summerlin West",
    description: "New construction homes from $455K in Las Vegas' most sought-after village.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.kestrelvillage.com",
  },
  other: {
    "theme-color": "#0c0a09",
  },
};

// BreadcrumbList for homepage (other pages add their own)
const homeBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.kestrelvillage.com" }],
};

// LocalBusiness Schema for GBP optimization
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Dr. Jan Duffy - Kestrel Village Specialist",
  "image": "https://www.kestrelvillage.com/dr-jan-duffy.jpg",
  "description": "Expert REALTOR® specializing in Kestrel Village new construction homes in Summerlin West, Las Vegas. 30+ years experience, Ph.D. in Market Research.",
  "url": "https://www.kestrelvillage.com",
  "telephone": "+1-702-222-1964",
  "email": "jan@drjanduffy.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1980 Festival Plaza Drive, Suite 300",
    "addressLocality": "Las Vegas",
    "addressRegion": "NV",
    "postalCode": "89135",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 36.2468,
    "longitude": -115.3280
  },
  "areaServed": [
    {
      "@type": "Place",
      "name": "Kestrel Village"
    },
    {
      "@type": "Place", 
      "name": "Summerlin West"
    },
    {
      "@type": "Place",
      "name": "Las Vegas"
    }
  ],
  "priceRange": "$455,000 - $900,000+",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "08:00",
      "closes": "20:00"
    }
  ],
  "sameAs": [
    "https://www.bhhsnv.com/drjanduffy"
  ],
  "memberOf": {
    "@type": "Organization",
    "name": "Berkshire Hathaway HomeServices Nevada Properties"
  },
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Real Estate License",
    "recognizedBy": {
      "@type": "Organization",
      "name": "Nevada Real Estate Division"
    },
    "name": "REALTOR® S.0197614.LLC"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Critical preconnects - only for resources needed in first paint */}
        <link rel="preconnect" href="https://em.realscout.com" />
        <link rel="preconnect" href="https://www.realscout.com" />
        {/* Deferred preconnects - for resources loaded after interaction */}
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        {/* Calendly CSS loaded dynamically on first interaction - see CalendlyLink component */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homeBreadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body
        className={`${dmSans.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
        {/* Calendly loaded on-demand via CalendlyLink component - NOT globally */}
        {/* RealScout script loaded lazily when listings section is in view (see RealScoutListingsSection) */}
        {/* Analytics deferred to lazyOnload - loads after page is fully interactive */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="lazyOnload"
        />
        <Script id="gtag-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
