import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  display: "optional",
  variable: "--font-serif",
});

const sans = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "optional",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://apuswellness.ro"),
  icons: { icon: "/icon.svg" },
  title: "APUS Wellness & Spa — Jacuzzi Premium Livrat la Locația Ta | Munții Apuseni",
  description:
    "Livrăm jacuzzi premium de 8 persoane direct la ușa sau cabana ta — apă la 38°C în 2–3 ore cu încălzire GPL, igienizare clinică, montaj zero efort. Huedin · Cluj · Munții Apuseni.",
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
  openGraph: {
    title: "APUS Wellness & Spa — Apusul, adus la tine.",
    description:
      "Jacuzzi premium de 8 persoane, livrat oriunde în Munții Apuseni. Apă la 38°C în 2–3 ore. Tu alegi locul. Noi aducem luxul.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
