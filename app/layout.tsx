import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Measure from "@/components/Measure";
import { GOOGLE_PROFILE_URL } from "@/components/reviews";

const serif = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  display: "optional",
  variable: "--font-serif",
});

const sans = Jost({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  display: "optional",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://apuswellness.ro"),
  icons: { icon: "/icon.svg" },
  title: "Jacuzzi de închiriat, Huedin (Cluj) | APUS Wellness",
  description:
    "Jacuzzi de 9 persoane, adus la casa sau cabana voastră din zona Huedin. Nu e un ciubăr pe lemne: noi livrăm, montăm, umplem cu apă și încălzim.",
  keywords: [
    "jacuzzi mobil",
    "închiriere jacuzzi Cluj",
    "jacuzzi Huedin",
    "jacuzzi la cabană",
    "wellness Munții Apuseni",
    "experiențe private wellness",
    "APUS Wellness & Spa",
  ],
  alternates: { canonical: "/" },
  // Google Search Console: the APUS account's tag, plus the one Mark sent first (another account)
  verification: {
    google: ["FXMwMZe8Lcj1vNiHMc9E2XtBXpI5HsFW-5r0ysGFvVg", "WWPY2aJ4TDym79Yy4aeThYCz7he14eccqL7zJY4ipIo"],
  },
  openGraph: {
    title: "APUS Wellness & Spa — Apusul, adus la tine.",
    description:
      "Jacuzzi de 9 persoane, adus la casa sau cabana voastră din zona Huedin. Nu e un ciubăr pe lemne: noi livrăm, montăm, umplem cu apă și încălzim.",
    url: "https://apuswellness.ro",
    siteName: "APUS Wellness & Spa",
    locale: "ro_RO",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#1C2120",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "APUS Wellness & Spa",
  url: "https://apuswellness.ro",
  description:
    "Închiriere jacuzzi mobil de 9 persoane în zona Huedin, jud. Cluj: noi livrăm, montăm, umplem cu apă și încălzim cu GPL.",
  telephone: "+40744244255",
  priceRange: "800–1290 RON",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Huedin",
    addressRegion: "Cluj",
    addressCountry: "RO",
  },
  hasMap: GOOGLE_PROFILE_URL,
  sameAs: [
    "https://instagram.com/apuswellness",
    "https://facebook.com/apuswellness",
    GOOGLE_PROFILE_URL,
  ],
  image: "https://apuswellness.ro/opengraph-image",
  areaServed: [
    { "@type": "City", name: "Huedin" },
    { "@type": "AdministrativeArea", name: "Județul Cluj" },
    { "@type": "Place", name: "Munții Apuseni" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={`${serif.variable} ${sans.variable}`}>
      <body>
        {children}
        <Measure />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
