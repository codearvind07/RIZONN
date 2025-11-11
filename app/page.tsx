import Hero from "./components/Hero";
import Enterprise from "./components/Enterprise";
import Slider from "./components/Slider";
import ProductGrid from "./components/ProductGrid";
import NewsEvents from "./components/NewsEvents";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <Hero />
        <Enterprise />
        <Slider />
        <ProductGrid />
        <NewsEvents />
        <AboutSection />
      </main>

      <Footer />
    </div>
  );
}