// app/page.tsx
'use client';
import  {Header } from '../services/_components/Header';
import { Hero } from '../faqs/_components/Hero';
import { FaqSection } from '../faqs/_components/FaqSection';
import { ContactSection } from '../services/_components/ContactSection';

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header /> 
      <Hero 
        title="Frequently Asked Questions"
        subtitle="Find answers to common queries about our services"
      />
      <FaqSection />
      <ContactSection />
    </div>
  );
}