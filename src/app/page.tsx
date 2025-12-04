'use client';

import React from 'react';
import Hero from './(Landing)/hero';
import MapsPage from './(Landing)/maps';
import NewsSection from './(Landing)/news-section';
import ServicesCards from './(Landing)/services-card';
import TramitesSection from './(Landing)/tramites-section';
import Menu from './(Landing)/menu';
import ConvocatoriasSection from './(Landing)/convocatorias-section';
import AnniversaryConfetti from '@/components/anniversary-confetti';
import { PushNotificationManager, InstallPrompt } from '@/components/pwa-components';

export default function Home() {
  return (
    <>
      <AnniversaryConfetti />
      <Menu />
      <Hero />
      <ServicesCards />
      <NewsSection />
      <ConvocatoriasSection />
      <TramitesSection />
      <MapsPage />

      {/* Sección PWA */}
      <section className="py-12 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Descarga Nuestra App</h2>
            <p className="text-muted-foreground">
              Instala UGEL Ambo en tu dispositivo para acceso rápido y notificaciones
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <InstallPrompt />
            <PushNotificationManager />
          </div>
        </div>
      </section>
    </>
  );
}