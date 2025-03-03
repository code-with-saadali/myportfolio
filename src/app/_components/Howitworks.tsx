'use client'
import React, { useEffect, useRef, useState } from "react";
import { FcProcess } from "react-icons/fc";
import { CiCirclePlus } from "react-icons/ci";
import { PiUsersThreeThin } from "react-icons/pi";
import { BsFileArrowUp } from "react-icons/bs";
import { motion, useScroll, useTransform } from "framer-motion";
import starsBg from "../../../public/stars.png";

const Howitworks = () => {
  const steps = [
    {
      id: 1,
      icon: <CiCirclePlus className="text-6xl mx-auto my-5" />,
      title: "Subscribe",
      description: "Select your plan that fits your needs and Subscribe it.",
    },
    {
      id: 2,
      icon: <PiUsersThreeThin className="text-6xl mx-auto my-5" />,
      title: "Request",
      description: "Request as many tasks as you like according to your plan.",
    },
    {
      id: 3,
      icon: <BsFileArrowUp className="text-6xl mx-auto my-5" />,
      title: "Receive",
      description: "Receive your design and request revisions until satisfied.",
    },
  ];
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
      className="px-20 py-20 max-lg:px-5"
    >
      <motion.div
        className="h-8 w-8 text-white rounded-full fixed top-0 left-0 pointer-events-none max-lg:hidden"
        variants={variants}
        animate={cursorVariant}
      ></motion.div>
      <div className="flex justify-center">
        <button className="cursor-pointer bg-gradient-to-b flex items-center gap-2 bg shadow-[0px_4px_32px_0_rgba(47,47,47)] px-4 py-2 rounded-xl border border-[#5f5f5f] text-white font-medium group">
          <FcProcess className="animate-spin" /> <p>Process</p>
        </button>
      </div>
      <div className="text">
        <h1
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="text-5xl font-poppins font-[600] text-center py-4"
        >
          How It Works
        </h1>
        <h1
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="text-xl font-amiri text-center"
        >
          Our Simple 3- Step Process
        </h1>
      </div>
      <div className="boxes flex max-lg:flex-col gap-5 cursor-pointer justify-center mt-16">
        {steps.map((step) => (
          <div
            key={step.id}
            className="p-2 bg-[#0C0C0F] w-[25%] max-lg:w-full rounded-xl shadow-2xl transition-all duration-300 hover:shadow-[0px_0px_20px_4px_rgba(255,255,255,0.5)]"
          >
            {step.icon}
            <h1 className="text-3xl font-poppins text-center font-medium">
              {step.title}
            </h1>
            <p className="text-xl text-center font-amiri py-5 pb-10">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Howitworks;
