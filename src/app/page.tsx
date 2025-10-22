import Menu from "./components/menu";
import Footer from "./components/footer";
import Hero from "./components/hero";
import ServicesCards from "./components/services-card";
import NewsSection from "./components/news-section";
import TramitesSection from "./components/tramites-section";

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
