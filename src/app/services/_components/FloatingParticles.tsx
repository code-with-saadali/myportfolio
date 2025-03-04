// components/FloatingParticles.tsx
'use client';
import { motion } from 'framer-motion';

interface FloatingParticlesProps {
  count: number;
}

export const FloatingParticles = ({ count }: FloatingParticlesProps) => (
  <motion.div 
    className="absolute inset-0 pointer-events-none overflow-hidden"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    {[...Array(count)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-white rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -100, 0],
          x: [0, 50, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: Math.random() * 4 + 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    ))}
  </motion.div>
);