// components/ContactSection.tsx
"use client";
import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { FloatingParticles } from "./FloatingParticles";

export const ContactSection = () => {
  return (
    <section className="min-h-screen px-[8%] max-2xl:px-10 max-lg:px-5 py-32" data-section="3">
      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated Emoji */}
        <motion.div
          className="inline-block mb-12"
          animate={{
            rotate: [0, 15, -15, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="text-8xl">🚀</div>
        </motion.div>

        <SectionTitle
          title="Let's Build Tomorrow"
          gradient="from-cyan-400 to-blue-500"
        />

        <motion.p
          className="text-xl text-gray-400 mb-12 pt-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Partner with us to create innovative solutions that redefine
          industries
        </motion.p>

        {/* Contact Form */}
        <motion.form
          className=" space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div className="relative" whileHover={{ scale: 1.02 }}>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-white/5 border border-white/20 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 backdrop-blur-lg"
            />
          </motion.div>

          <motion.div className="relative" whileHover={{ scale: 1.02 }}>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-white/5 border border-white/20 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 backdrop-blur-lg"
            />
          </motion.div>

          <motion.div className="relative" whileHover={{ scale: 1.02 }}>
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full bg-white/5 border border-white/20 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 backdrop-blur-lg"
            />
          </motion.div>

          <motion.button
            className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-cyan-400/20 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>

      <FloatingParticles count={50} />
    </section>
  );
};
