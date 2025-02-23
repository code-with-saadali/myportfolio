"use client";
import starsBg from "../../../public/stars.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Page = () => {  
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
      className="px-20 py-40 bg-black text-white"
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
          className="text-6xl text-center font-poppins leading-tight font-medium py-7"
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
    </motion.div>
  );
};

export default Page;  
