"use client";
import { useEffect } from "react";
import { useScroll, useSpring, motion } from "framer-motion";
import Experience from "./_components/Experience";
import Slider from "./_components/Slider";
import Testimonial from "./_components/Testimonial";
import Projects from "./_components/Projects";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Contact from "./_components/Contact";
import Hero from "./_components/Hero";
import Howitworks from "./_components/Howitworks";
import Faqs from "./_components/Faq";

const Home = () => {
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
    <div data-scroll-container className="bg-black text-white">
      <Hero />
      <Projects />
      <Howitworks />
      <Experience />
      <Slider />
      <Testimonial />
      <Faqs faqInformation={regularFaqData} />
      <Contact />
      <motion.div
        style={{
          scaleY,
        }}
        className="fixed h-full w-[8px] bg-white origin-top top-0 right-0 left-[99.80%] rounded-full z-[150]"
      />
    </div>
  );
};

export default Home;
