import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import 'leaflet/dist/leaflet.css';
import Superhero from "./(Landing)/superhero";
import ChatPage from "./(Landing)/chat";
import Footer from "./(Landing)/footer";
import Mascota from "./(Landing)/mascota";
import { PWAInstallToast } from "@/components/pwa-install-toast";
import NoticiaModal from "@/components/noticia-modal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://www.ugelambo.edu.pe";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "UGEL Ambo - Unidad de Gestión Educativa Local",
    template: "%s | UGEL Ambo",
  },
  description:
    "Unidad de Gestión Educativa Local de Ambo. Convocatorias, normativas, tutoriales y servicios educativos para docentes e instituciones educativas de la provincia de Ambo, Huánuco.",
  keywords: [
    "UGEL Ambo",
    "Unidad de Gestión Educativa Local",
    "Ambo",
    "Huánuco",
    "convocatorias docentes",
    "educación Perú",
    "MINEDU",
    "SIAGIE",
    "docentes",
  ],
  authors: [{ name: "UGEL Ambo", url: BASE_URL }],
  creator: "UGEL Ambo",
  publisher: "UGEL Ambo",
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: BASE_URL,
    siteName: "UGEL Ambo",
    title: "UGEL Ambo - Unidad de Gestión Educativa Local",
    description:
      "Convocatorias, normativas, tutoriales y servicios educativos para docentes e instituciones de Ambo, Huánuco.",
    images: [
      {
        url: "/Logo1.jpg",
        width: 1200,
        height: 630,
        alt: "UGEL Ambo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UGEL Ambo",
    description: "Unidad de Gestión Educativa Local de Ambo, Huánuco.",
    images: ["/Logo1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

// Schema.org JSON-LD para Sitelinks de Google
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "UGEL Ambo",
      description: "Unidad de Gestión Educativa Local de Ambo",
      inLanguage: "es-PE",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BASE_URL}/Normativa?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "GovernmentOrganization",
      "@id": `${BASE_URL}/#organization`,
      name: "Unidad de Gestión Educativa Local de Ambo",
      alternateName: "UGEL Ambo",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/Logo1.jpg`,
        width: 200,
        height: 200,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ambo",
        addressRegion: "Huánuco",
        addressCountry: "PE",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        availableLanguage: "Spanish",
      },
      sameAs: ["https://www.facebook.com/UGELAmbo"],
    },
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      url: BASE_URL,
      name: "UGEL Ambo - Inicio",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#organization` },
      description: "Página principal de la Unidad de Gestión Educativa Local de Ambo",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Superhero />
        <ChatPage />
        <Mascota />
        <NoticiaModal />
        {children}
        <Analytics />
        <Footer />
        <PWAInstallToast />
      </body>
    </html>
  );
}