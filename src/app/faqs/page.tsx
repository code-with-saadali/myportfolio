"use client";
import { Hero } from "../faqs/_components/Hero";
import { FaqSection } from "../faqs/_components/FaqSection";
import { ContactSection } from "../services/_components/ContactSection";

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero
        title="Frequently Asked Questions"
        subtitle="Find answers to common queries about our services"
      />
      <FaqSection />
      <ContactSection />
    </div>
  );
}
