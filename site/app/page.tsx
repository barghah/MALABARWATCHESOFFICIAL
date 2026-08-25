import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collection from "@/components/Collection";
import About from "@/components/About";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Collection />
        <Marquee reverse />
        <About />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
