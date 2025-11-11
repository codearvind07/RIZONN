import ProductGrid from "../components/ProductGrid";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}