"use client";
import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  gradient?: string;
  className?: string;
}

export const SectionTitle = ({
  title,
  gradient = "from-white to-gray-400",
  className = "",
}: SectionTitleProps) => {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Main Title */}
      <motion.h2
        className={`text-5xl text-center md:text-7xl font-bold mb-4 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
        initial={{ letterSpacing: "0.5em", opacity: 0 }}
        whileInView={{ letterSpacing: "0.1em", opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {title}
      </motion.h2>

      {/* Animated Underline */}
      <motion.div
        className="h-[2px] border-b border-white/20 to-blue-500"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      {/* Floating Particles */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};
