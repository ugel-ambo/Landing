'use client';

import React from 'react';
import Hero from './(Landing)/hero';
import MapsPage from './(Landing)/maps';
import NewsSection from './(Landing)/news-section';
import ServicesCards from './(Landing)/services-card';
import TramitesSection from './(Landing)/tramites-section';
import Menu from './(Landing)/menu';
import Footer from './(Landing)/footer';

export default function Home() {
  return (
    <>
      <Menu />
      <Hero />
      <ServicesCards />
      <NewsSection />
      <TramitesSection />
      <MapsPage />
      <Footer />
    </>
  );
}