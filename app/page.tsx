import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Gallery from "@/components/Gallery";
import WhatsIncluded from "@/components/WhatsIncluded";
import ReviewsSection from "@/components/ReviewsSection";
import Pricing from "@/components/Pricing";
import Requirements from "@/components/Requirements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <WhatWeDo />
        <Gallery />
        <WhatsIncluded />
        <ReviewsSection />
        <Pricing />
        <Requirements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
