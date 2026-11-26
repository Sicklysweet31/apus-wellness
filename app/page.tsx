import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Gallery from "@/components/Gallery";
import ReviewsSection from "@/components/ReviewsSection";
import Pricing from "@/components/Pricing";
import Requirements from "@/components/Requirements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CallBar from "@/components/CallBar";

export default function Home() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <WhatWeDo />
        <Gallery />
        <ReviewsSection />
        <Pricing />
        <Requirements />
        <Contact />
      </main>
      <Footer />
      <CallBar />
    </>
  );
}
