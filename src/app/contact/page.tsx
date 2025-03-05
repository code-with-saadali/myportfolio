
'use client';
import { ContactHero } from './ContactHero';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';
import { FloatingParticles } from '../services/_components/FloatingParticles';


export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <ContactHero />
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ContactForm />
          <ContactInfo />
          <FloatingParticles count={140} />
        </div>
      </div>

    </div>
  );
}