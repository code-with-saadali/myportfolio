"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Link from "next/link";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const LocationPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 1000,
    damping: 300,
    restDelta: 0.1,
  });

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]") as HTMLElement,
      smooth: true,
    });

    return () => scroll.destroy();
  }, []);

  return (
    <div
      data-scroll-container
      className="py-40 bg-black text-white px-[8%] max-2xl:px-10 max-lg:px-5"
      ref={containerRef}
    >
      {/* Location Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          My Location
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-xl text-gray-400 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Based in Okara, Pakistan.
        </motion.p>

        <motion.p
          className="text-lg text-gray-400 mb-12 opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          I work remotely but am always open to collaboration opportunities
          worldwide.
        </motion.p>

        {/* Google Map Embed */}
        <motion.div
          className="w-full h-[500px] rounded-xl overflow-hidden border border-white/10 shadow-lg mb-8 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
        >
          {/* Map Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b pointer-events-none" />

          {/* Interactive Map */}
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3421.993044999479!2d73.43393557552691!3d30.81377977487316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901f3dcd8e3ff%3A0x39f57b8c5b5ddbb!2sOkara%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1709658438214!5m2!1sen!2s"
            loading="lazy"
          />
        </motion.div>

        {/* Contact Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <Link
            href="/contact"
            className="px-8 py-4 border border-white/20 rounded-full font-bold hover:bg-white/10 transition-all"
          >
            Conatact me
          </Link>
        </motion.div>
      </motion.section>

      {/* Floating Particles */}
      <motion.div className="fixed inset-0 pointer-events-none" style={{ y }}>
        {[...Array(30)].map((_, i) => (
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
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
      <motion.div
        style={{
          scaleY,
        }}
        className="fixed h-full w-[8px] bg-white origin-top top-0 right-0 left-[99.80%] rounded-full"
      ></motion.div>
    </div>
  );
};

export default LocationPage;
