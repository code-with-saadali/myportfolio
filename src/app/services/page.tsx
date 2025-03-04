// app/page.tsx
'use client';
import { Header } from '../services/_components/Header';
import { Hero } from '../services/_components/Hero';
import { ServicesSection } from '../services/_components/ServicesSection';
import { TechShowcase } from '../services/_components/TechShowcase';
import { ContactSection } from '../services/_components/ContactSection';
import { useActiveSection } from '../services/_components/useActiveSection';

export default function Home() {
  const { activeSection } = useActiveSection();

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header activeSection={activeSection} />
      <Hero />
      <ServicesSection />
      <TechShowcase />
      <ContactSection />
    </div>
  );
}