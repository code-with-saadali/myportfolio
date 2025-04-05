"use client";
import { Header } from "../services/_components/Header";
import { Hero } from "../services/_components/Hero";
import { ServicesSection } from "../services/_components/ServicesSection";
import { TechShowcase } from "../services/_components/TechShowcase";
import { ContactSection } from "../services/_components/ContactSection";
import { useActiveSection } from "../services/_components/useActiveSection";
import { useScroll, useSpring, motion } from "framer-motion";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function Home() {
  const { activeSection } = useActiveSection();
  const { scrollYProgress } = useScroll();
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
      className="min-h-screen bg-black text-white overflow-x-hidden"
    >
      <Header activeSection={activeSection} />
      <Hero />
      <ServicesSection />
      <TechShowcase />
      <ContactSection />
      <motion.div
        style={{
          scaleY,
        }}
        className="fixed h-full w-[8px] bg-white origin-top top-0 right-0 left-[99.80%] rounded-full z-[150]"
      ></motion.div>
    </div>
  );
}
