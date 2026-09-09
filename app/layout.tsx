import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";

const SITE_URL = "https://nexomarketentry.com";
const TITLE = "Nexo Market Entry - Entrada al mercado brasileño";
const DESCRIPTION =
  "Coordinamos estructura societaria, procurador residente y apertura completa de tu empresa en Brasil, junto a una red de profesionales registrados. Para pymes e inversores de Argentina, Uruguay, Colombia, España, Portugal y EE. UU.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Nexo Market Entry",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Nexo Market Entry",
  description: DESCRIPTION,
  url: SITE_URL,
  areaServed: {
    "@type": "Country",
    name: "Brazil",
  },
  audience: {
    "@type": "Audience",
    audienceType: "Empresas e inversores extranjeros",
  },
  availableLanguage: ["es", "pt", "en"],
  email: "nexomarketentry@gmail.com",
  knowsAbout: [
    "Apertura de empresas en Brasil",
    "Procurador residente",
    "Estructura societaria LTDA",
    "SCE-IED Banco Central",
    "Visado de inversión Brasil",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="font-body bg-ink text-textlight antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
