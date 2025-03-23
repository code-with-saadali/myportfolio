"use client";
import starsBg from "../../../public/stars.png";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Video from "./_components/Video";
import AboutPortfolio from "./_components/AboutPortfolio";
import AboutPortfolio2 from "./_components/AboutPortfolio2";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Faqs from "../_components/Faq";
import CallToAction from "../_components/CallToAction";
import Achievements from "./_components/Achievements";

const Page = () => {
  const regularFaqData = [
    {
      id: 1,
      title: 'Get in Touch',
      text: "Need assistance or have inquiries about our services? Here are some frequently asked questions to help you before reaching out. We're always here to assist you",
      question: 'How can I get in touch with your team?',
      answer:
        "You can reach us via our contact form, email, or phone. We're also available on social media for quick responses to your queries.",
    },
    {
      id: 2,
      question: 'Do you offer free consultations?',
      answer:
        "Yes! We provide a free initial consultation to understand your project requirements and recommend the best solutions for your business.",
    },
    {
      id: 3,
      question: 'How soon can I expect a response?',
      answer:
        'We aim to respond within 24 hours on business days. For faster assistance, you can call us directly during working hours.',
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

  const sectionRef = useRef(null);

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 100,
      width: 100,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "#fff",
      color: "#000",
      mixBlendMode: "difference" as const,
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <motion.div
      data-scroll-container
      ref={sectionRef}
      animate={{
        backgroundPositionX: starsBg.width,
      }}
      transition={{
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      }}
      style={{
        backgroundImage: `url(${starsBg.src})`,
        backgroundPositionY,
      }}
      className="px-20 py-40 bg-black text-white max-lg:px-5 overflow-hidden"
    >
      <motion.div
        className="h-8 w-8 text-white rounded-full fixed top-0 left-0 pointer-events-none max-lg:hidden"
        variants={variants}
        animate={cursorVariant}
      ></motion.div>
      <div className="flex bg border border-[#5f5f5f] font-amiri justify-center mx-auto text-[15px] max-w-[215px] items-center py-0.5 px-3 rounded-lg">
        <div className="dots-container">
          <div className="dot"></div>
        </div>
        <button className="pt-1 text-white">Dig Deep About Us</button>
      </div>
      <div className="text">
        <h1
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="text-6xl max-md:text-4xl text-center font-poppins leading-tight font-medium py-7"
        >
          Learn More About Landin <br />
          Let’s Deep Dive!
        </h1>
        <p className="text-center font-amiri text-xl">
          Landin is your go-to agency for creative thinking and <br />
          marketing ideas. We specialize in digital business solutions.
        </p>
      </div>
      <div className="buttons flex gap-3 justify-center my-5">
        <button className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffffff_0%,#6b6b6b_50%,#6b6b6b_100%)]"></span>
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
            Contact with us
          </span>
        </button>
        <button className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffffff_0%,#6b6b6b_50%,#6b6b6b_100%)]"></span>
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
            What is portfolio!
          </span>
        </button>
      </div>
      <Video />
      <AboutPortfolio />
      <AboutPortfolio2 />
      <Achievements/>
      <Faqs faqInformation={regularFaqData}/>
      <CallToAction/>
      <motion.div
        style={{
          scaleY,
        }}
        className="fixed h-full w-[8px] bg-white origin-top top-0 right-0 left-[99.80%] rounded-full"
      />
    </motion.div>
  );
};

export default Page;
