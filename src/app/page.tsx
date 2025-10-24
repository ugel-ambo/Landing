import Menu from "./components/Landing/menu";
import Footer from "./components/Landing/footer";
import Hero from "./components/Landing/hero";
import ServicesCards from "./components/Landing/services-card";
import NewsSection from "./components/Landing/news-section";
import TramitesSection from "./components/Landing/tramites-section";

export default function Home() {
  return (
    <>
    <Menu/>
    <Hero/>
    <TramitesSection />
    <NewsSection />
    <ServicesCards />
    <Footer />
    </>
  );
}
