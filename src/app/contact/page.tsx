"use client";
import { ContactHero } from "./ContactHero";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";
import { FloatingParticles } from "../services/_components/FloatingParticles";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useScroll, useSpring, motion } from "framer-motion";
import { useEffect } from "react";

export default function ContactPage() {
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
      <ContactHero />
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ContactForm />
          <ContactInfo />
          <FloatingParticles count={140} />
        </div>
      </div>
      <motion.div
        style={{
          scaleY,
        }}
        className="fixed h-full w-[8px] bg-white origin-top top-0 right-0 left-[99.80%] rounded-full"
      ></motion.div>
    </div>
  );
}
