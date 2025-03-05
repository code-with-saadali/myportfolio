"use client";
import { Hero } from "../faqs/_components/Hero";
import { ContactSection } from "../services/_components/ContactSection";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useScroll, useSpring, motion } from "framer-motion";
import { useEffect } from "react";
import Faqs from "../_components/Faq";

export default function FaqPage() {
  const regularFaqData = [
    {
      id: 1,
      title: "Get in Touch",
      text: "Need assistance or have inquiries about our services? Here are some frequently asked questions to help you before reaching out. We're always here to assist you",
      question: "How can I get in touch with your team?",
      answer:
        "You can reach us via our contact form, email, or phone. We're also available on social media for quick responses to your queries.",
    },
    {
      id: 2,
      question: "Do you offer free consultations?",
      answer:
        "Yes! We provide a free initial consultation to understand your project requirements and recommend the best solutions for your business.",
    },
    {
      id: 3,
      question: "How soon can I expect a response?",
      answer:
        "We aim to respond within 24 hours on business days. For faster assistance, you can call us directly during working hours.",
    },
    {
      id: 4,
      question: "How soon can I expect a response?",
      answer:
        "We aim to respond within 24 hours on business days. For faster assistance, you can call us directly during working hours.",
    },
    {
      id: 5,
      question: "How soon can I expect a response?",
      answer:
        "We aim to respond within 24 hours on business days. For faster assistance, you can call us directly during working hours.",
    },
    {
      id: 6,
      question: "How soon can I expect a response?",
      answer:
        "We aim to respond within 24 hours on business days. For faster assistance, you can call us directly during working hours.",
    },
  ];
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
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Hero
        title="Frequently Asked Questions"
        subtitle="Find answers to common queries about our services"
      />
      <Faqs faqInformation={regularFaqData} />
      <ContactSection />
      <motion.div
        style={{
          scaleY,
        }}
        className="fixed h-full w-[8px] bg-white origin-top top-0 right-0 left-[99.80%] rounded-full"
      ></motion.div>
    </div>
  );
}
