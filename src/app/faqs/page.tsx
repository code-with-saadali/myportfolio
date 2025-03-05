"use client";
import { Hero } from "../faqs/_components/Hero";
import { FaqSection } from "../faqs/_components/FaqSection";
import { ContactSection } from "../services/_components/ContactSection";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useScroll, useSpring,motion } from 'framer-motion';
import { useEffect } from "react";


export default function FaqPage() {
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
    <div className="min-h-screen bg-black text-white">
      <Hero
        title="Frequently Asked Questions"
        subtitle="Find answers to common queries about our services"
      />
      <FaqSection />
      <ContactSection />
      <motion.div style={{
          scaleY,
        }}
        className="fixed h-full w-[8px] bg-white origin-top top-0 right-0 left-[99.80%] rounded-full">

      </motion.div>
    </div>
  );
}
