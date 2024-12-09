import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Features } from '../components/sections/Features';
import { Contact } from '../components/sections/Contact';

export function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Contact />
    </>
  );
}