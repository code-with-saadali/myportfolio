"use client";
import { motion } from "framer-motion";
import { FloatingParticles } from "./FloatingParticles";

export const Hero = () => {
  return (
    <div className="h-full px-[8%] max-2xl:px-10 max-lg:px-5 py-40">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.div
          className="text-[80px] font-amiri text-center text-white"
          initial={{ letterSpacing: "0.5em", opacity: 0 }}
          animate={{ letterSpacing: "0.1em", opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <span className="text-[80px] max-sm:text-[45px] font-[400] font-amiri text-center text-white">
            INNOVATION
          </span>
          <br />
          <motion.h1
            className="text-[80px] max-sm:text-[45px] font-[400] font-amiri text-center text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            REDEFINED
          </motion.h1>
        </motion.div>

        {/* Subtle Subheading */}
        <motion.p
          className="font-amiri text-white/70 text-center mb-5 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Transforming industries through cutting-edge technology <br />{" "}
          solutions and digital innovation
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col md:flex-row justify-center gap-4 md:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.button
            className="cursor-pointer bg-gradient-to-b bg shadow-[0px_4px_32px_0_rgba(47,47,47)] px-8 py-2 rounded-[99px] border border-[#5f5f5f] text-white font-medium group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Solutions
          </motion.button>

          <motion.button
            className="cursor-pointer bg-gradient-to-b bg shadow-[0px_4px_32px_0_rgba(47,47,47)] px-8 py-4 md:py-5 rounded-[99px] border border-[#5f5f5f] text-white font-medium group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Watch Demo
          </motion.button>
        </motion.div>
      </motion.div>

      <FloatingParticles count={140} />
    </div>
  );
};
