import React from "react";
import Hero from "./(Landing)/hero";
import MapsPage from "./(Landing)/maps";
import NewsSection from "./(Landing)/news-section";
import ServicesCards from "./(Landing)/services-card";
import TramitesSection from "./(Landing)/tramites-section";
import Menu from "./(Landing)/menu";
import ConvocatoriasSection from "./(Landing)/convocatorias-section";
import TutorialesSection from "./(Landing)/tutoriales-section";
import {
  PushNotificationManager,
  InstallPrompt,
} from "@/components/pwa-components";
import { getHeroImages } from "./actions/hero-actions";
import AniversarioModal from "@/components/aniversario-modal";
import SectionHeader from "@/components/section-header";
import { Smartphone } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function Home() {
  const heroImages = await getHeroImages();

  return (
    <>
      <AniversarioModal />
      <Menu />
      <Hero initialImages={heroImages} />
      <ServicesCards />
      <NewsSection />
      <ConvocatoriasSection />
      <TramitesSection />
      <TutorialesSection />
      <MapsPage />

      {/* Sección PWA */}
      <section className="py-12 px-4 bg-linear-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            badgeIcon={<Smartphone className="w-3.5 h-3.5 text-[#049DD9]" />}
            badgeText="Aplicacion Movil"
            title="Lleva la UGEL Ambo"
            titleHighlight="en tu Bolsillo"
            description="Instala nuestra aplicacion web para acceder de forma instantanea a tramites, consultas y recibir notificaciones oficiales sin consumir espacio"
          />
          <div className="grid md:grid-cols-2 gap-6">
            <InstallPrompt />
            <PushNotificationManager />
          </div>
        </div>
      </section>
    </>
  );
}




