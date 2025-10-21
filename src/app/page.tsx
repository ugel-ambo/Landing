import Image from "next/image";
import { NavigationMenuDemo } from "./components/navigation";
import Menu from "./components/menu";
import Footer from "./components/footer";
import Hero from "./components/hero";
import ServicesCards from "./components/services-card";

export default function Home() {
  return (
    <>
    <Menu/>
    <Hero/>
    <ServicesCards />
    <Footer />
    </>
  );
}
