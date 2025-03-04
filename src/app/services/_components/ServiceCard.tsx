// components/ServiceCard.tsx
'use client';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

export const ServiceCard = ({ title, description, icon, index }: ServiceCardProps) => (
  <motion.div
    className="relative group"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-20%' }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
  >
    <div className="p-12 rounded-3xl hover:shadow-[0px_4px_32px_0_rgba(47,47,47)] cursor-pointer bg-black/50 backdrop-blur-2xl border border-white/10 relative overflow-hidden">
      <div className="text-6xl mb-6">{icon}</div>
      <h3 className="text-4xl font-bold mb-6">{title}</h3>
      <p className="text-gray-400 text-xl">{description}</p>
    </div>
  </motion.div>
);