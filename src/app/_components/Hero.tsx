'use client'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
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
      backgroundColor: "#000000",
      color: "#fff",
      mixBlendMode: "difference" as const, 
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div className="px-20 bg-white h-screen max max-sm:pt-20 flex justify-center items-center max-lg:px-5">
      <motion.div
        className="h-8 w-8 rounded-full fixed top-0 left-0 pointer-events-none max-lg:hidden"
        variants={variants}
        animate={cursorVariant}
      ></motion.div>
      <h1
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className="text-[80px] max-sm:text-[45px] font-[400] font-amiri text-center text-black"
      >
        Porfo Erdison <br /> UI/UX Interaction Designer <br /> Based in Poland
      </h1>
    </div>
  );
};

export default Hero;
