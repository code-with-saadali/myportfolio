"use client";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function CallToAction() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative my-20 flex flex-col items-center justify-center min-h-[50vh] bg-gradient-to-br bg-[#5555551c] text-white p-10 rounded-3xl overflow-hidden"
    >
      <h2 className="text-5xl font-extrabold text-center drop-shadow-lg">
        Ready to Elevate Your Business?
      </h2>
      <p className="text-lg text-gray-300 mt-4 max-w-xl text-center">
        Let’s build something extraordinary together. Get in touch with us
        today!
      </p>

      <motion.button
        whileHover={{
          scale: 1.1,
          y: -2,
          boxShadow: "0px 4px 32px 0 rgba(47, 47, 47)",
        }}
        className="mt-6 px-8 py-4 bg-gradient-to-r bg-black text-white font-bold text-lg rounded-full flex items-center gap-3 shadow-lg transition-all"
      >
        Get Started <FaArrowRight />
      </motion.button>
    </motion.div>
  );
}
