import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Measure from "@/components/Measure";

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
  title: "APUS Wellness & Spa — Jacuzzi Premium Livrat la Locația Ta | Munții Apuseni",
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
  verification: { google: "WWPY2aJ4TDym79Yy4aeThYCz7he14eccqL7zJY4ipIo" }, // Google Search Console
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
    "Închiriere jacuzzi premium mobil cu livrare, montaj și igienizare incluse — în Huedin, Munții Apuseni și zona Cluj-Napoca.",
  telephone: "+40744244255",
  priceRange: "800–1290 RON",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Huedin",
    addressRegion: "Cluj",
    addressCountry: "RO",
  },
  areaServed: [
    { "@type": "City", name: "Huedin" },
    { "@type": "City", name: "Cluj-Napoca" },
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
