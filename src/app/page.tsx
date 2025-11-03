import Hero from "./(Landing)/hero";
import ServicesCards from "./(Landing)/services-card";
import NewsSection from "./(Landing)/news-section";
import TramitesSection from "./(Landing)/tramites-section";
import MapsPage from "./(Landing)/maps";

export default function Home() {
  return (
    <>
    <Hero/>
    <ServicesCards />
    <NewsSection />
    <TramitesSection />
    <MapsPage />
    </>
  );
}
