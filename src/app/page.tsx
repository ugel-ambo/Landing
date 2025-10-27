import Hero from "./(Landing)/hero";
import ServicesCards from "./(Landing)/services-card";
import NewsSection from "./(Landing)/news-section";
import TramitesSection from "./(Landing)/tramites-section";

export default function Home() {
  return (
    <>
    <Hero/>
    <TramitesSection />
    <NewsSection />
    <ServicesCards />
    </>
  );
}
