"use client";
import { motion } from "framer-motion";
import { technologies } from "./constants";
import { SectionTitle } from "./SectionTitle";
import { FloatingParticles } from "./FloatingParticles";

export const TechShowcase = () => {
  return (
    <section
      className="min-h-screen px-[8%] max-2xl:px-10 max-lg:px-5 py-32"
      data-section="2"
    >
      <div className="relative z-10">
        <SectionTitle
          title="Core Technologies"
          gradient="from-cyan-300 to-blue-400"
        />

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {technologies.map((tech, index) => (
            <TechCard key={tech} title={tech} index={index} />
          ))}
        </motion.div>
      </div>

      <FloatingParticles count={40} />
    </section>
  );
};

// Tech Card Component
const TechCard = ({ title }: { title: string; index: number }) => {
  return (
    <motion.div
      className="p-8 border cursor-pointer mt-20 border-white/10 rounded-2xl bg-black/50 backdrop-blur-xl hover:border-cyan-400/50 transition-all hover:bg-cyan-400/50 relative overflow-hidden"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={{ scale: 0.8 }}
        whileHover={{ scale: 1 }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="text-cyan-400 text-4xl mb-4">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            ◆
          </motion.div>
        </div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400">Advanced implementation and integration</p>
      </div>

      {/* Hover Indicator */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
      />
    </motion.div>
  );
};
