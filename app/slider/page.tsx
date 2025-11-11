import Slider from "../components/Slider";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SliderPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Slider />
      </main>
      <Footer />
    </div>
  );
}