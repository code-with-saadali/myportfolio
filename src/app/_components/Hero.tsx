"use client";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import starsBg from "../../../public/stars.png";
import { FaArrowRight } from "react-icons/fa";
import {
  RiReactjsFill,
  RiTailwindCssFill,
  RiJavascriptFill,
  RiNextjsFill,
} from "react-icons/ri";
import { MdStarBorder, MdOutlineStarPurple500 } from "react-icons/md";

const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

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
    <main className="px-20 h-screen py-40 max-md:py-28 max-lg:px-5">
      <motion.div
        className="h-8 w-8 text-white rounded-full fixed top-0 left-0 pointer-events-none max-lg:hidden"
        variants={variants}
        animate={cursorVariant}
      ></motion.div>
      <div className="flex bg border border-[#5f5f5f] font-amiri justify-center mx-auto text-[15px] max-w-[215px] items-center py-0.5 px-3 rounded-lg">
        <div className="dots-container">
          <div className="dot"></div>
        </div>
        <button className="pt-1">Hurry! Only Few Sports Left</button>
      </div>
      <motion.div
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
      >
        <h1
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="text-[80px] max-sm:text-[45px] font-[400] font-amiri text-center text-white"
        >
          Full Stack Developer Based <br /> in Prodigi Studios.
        </h1>
        <p className="font-amiri text-white/70 text-center mb-5">
          Get high-quality, customized designs whenever you need them. <br /> No
          limits, no hassle.
        </p>
      </motion.div>
      <div className="flex justify-center">
        <button className="cursor-pointer bg-gradient-to-b bg shadow-[0px_4px_32px_0_rgba(47,47,47)] px-4 py-2 rounded-xl border border-[#5f5f5f] text-white font-medium group">
          <div className="relative overflow-hidden">
            <p className="group-hover:-translate-y-7 flex items-center gap-1 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
              Learn more <FaArrowRight className="pt-1" />
            </p>
            <p className="absolute top-7 left-0 flex items-center gap-1 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
              Learn more <FaArrowRight className="pt-1" />
            </p>
          </div>
        </button>
      </div>
      <div className="overflow-hidden whitespace-nowrap py-4 mx-auto w-[50%] max-lg:w-full mt-5">
        <div className="animate-marquee flex gap-5">
          <span className="mx-4 text-lg flex items-center gap-2">
            <RiReactjsFill className="text-7xl" />
            React
          </span>
          <span className="mx-4 text-lg flex items-center gap-2">
            <RiTailwindCssFill className="text-7xl" />
            Tailwind CSS
          </span>
          <span className="mx-4 text-lg flex items-center gap-2">
            <RiJavascriptFill className="text-7xl" />
            JavaScript
          </span>
          <span className="mx-4 text-lg flex items-center gap-2">
            <RiNextjsFill className="text-7xl" />
            Next.Js
          </span>
          {/* row2 */}
          <span className="mx-4 text-lg flex items-center gap-2">
            <RiReactjsFill className="text-7xl" />
            React
          </span>
          <span className="mx-4 text-lg flex items-center gap-2">
            <RiTailwindCssFill className="text-7xl" />
            Tailwind CSS
          </span>
          <span className="mx-4 text-lg flex items-center gap-2">
            <RiJavascriptFill className="text-7xl" />
            JavaScript
          </span>
          <span className="mx-4 text-lg flex items-center gap-2">
            <RiNextjsFill className="text-7xl" />
            Next.Js
          </span>
        </div>
      </div>
      <div className="flex w-full justify-center items-center gap-5 mt-10">
      <div className="border-b border-dashed w-[200px]"></div>
        <div className="stars flex gap-3">
          <MdStarBorder />
          <MdOutlineStarPurple500 className="text-xl" />
          <MdStarBorder />
        </div>
        <div className="border-b border-dashed w-[200px]"></div>
      </div>
    </main>
  );
};
export default Hero;
