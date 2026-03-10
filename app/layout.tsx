import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  icons: { icon: "/icon.svg" },
  title: "APUS Wellness — Experiențe Private de Wellness în Munții Apuseni",
  description:
    "APUS Wellness livrează experiențe premium de jacuzzi și saună direct la locația ta — o cabană, o vilă, o terasă privată. Apusul, adus la tine.",
  keywords: [
    "jacuzzi mobil",
    "wellness Munții Apuseni",
    "wellness Cluj",
    "saună mobilă",
    "experiențe private wellness",
    "jacuzzi închiriat",
    "APUS Wellness",
  ],
  openGraph: {
    title: "APUS Wellness — Apusul, adus la tine.",
    description:
      "Experiențe private de wellness livrate oriunde în Munții Apuseni. Tu alegi locul. Noi aducem restul.",
    locale: "ro_RO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  );
}
