import Enterprise from "../components/Enterprise";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Enterprise />
      </main>
      <Footer />
    </div>
  );
}