import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative w-full">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
