import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import WhatWeDo from "@/components/WhatWeDo";
import Experience from "@/components/Experience";
import Gallery from "@/components/Gallery";
import WhatsIncluded from "@/components/WhatsIncluded";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Philosophy />
        <WhatWeDo />
        <Experience />
        <Gallery />
        <WhatsIncluded />
        <Pricing />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
