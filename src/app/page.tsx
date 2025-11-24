'use client';

import React from 'react';
import Hero from './(Landing)/hero';
import MapsPage from './(Landing)/maps';
import NewsSection from './(Landing)/news-section';
import ServicesCards from './(Landing)/services-card';
import TramitesSection from './(Landing)/tramites-section';
import Menu from './(Landing)/menu';
import VisitorCounter from '@/components/visitor-counter';
import NoticiaModal from '@/components/noticia-modal';

export default function Home() {
  return (
    <>
      <NoticiaModal />
      <Menu />
      <Hero />
      <ServicesCards />
      <NewsSection />
      <TramitesSection />
      <MapsPage />
      <VisitorCounter />
    </>
  );
}