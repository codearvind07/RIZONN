import AboutSection from "../components/AboutSection";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}