"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ExperienceContent from "./ExperienceContent";
import Location from "./Location";
import About from "./About";
import { FaArrowRight } from "react-icons/fa";

const Experience = () => {
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
  const [activeContent, setActiveContent] = useState<number>(0);

  const handleButtonClick = (id: number) => {
    setActiveContent(id);
  };
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  return (
    <div className="px-20 py-10 max-lg:px-5">
      <motion.div
        className="h-8 w-8 text-white rounded-full fixed top-0 left-0 pointer-events-none max-lg:hidden"
        variants={variants}
        animate={cursorVariant}
      ></motion.div>
      <div className="text">
        <motion.h1
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: "some",
            margin: "0px 0px -40px 0px",
          }}
          className="font-amiri text-[60px] max-md:text-[48px] text-center"
        >
          About & Experience
        </motion.h1>
      </div>

      {/* Buttons Section */}
      <div className="buttons flex justify-center gap-3 text-center mt-10">
        <button
          onClick={() => handleButtonClick(1)}
          className="w-32 h-12 relative overflow-hidden z-50 flex justify-center items-center gap-5 rounded-full text-lg text-white border cursor-pointer border-[#3b3b3b] hover:text-black backdrop-blur-lg bg-gradient-to-tr from-transparent to-transparent my-6 px-6 shadow-sm hover:shadow-white duration-700 max-sm:mt-16 group"
        >
          <div className="absolute z-0 bottom-0 left-1/2 right-1/2 group-hover:w-1 group-hover:h-1 rounded-full group-hover:scale-[50] duration-500 bg-white"></div>
          <div className="flex justify-center items-center gap-3">
            <h1 className="font-amiri z-50">About</h1>
            <FaArrowRight className="group-hover:translate-x-2 duration-500" />
          </div>
        </button>
        <div className="button2">
        <button
          onClick={() => handleButtonClick(1)}
          className="w-32 h-12 relative overflow-hidden z-50 flex justify-center items-center gap-5 rounded-full text-lg text-white border cursor-pointer border-[#3b3b3b] hover:text-black backdrop-blur-lg bg-gradient-to-tr from-transparent to-transparent my-6 px-6 shadow-sm hover:shadow-white duration-700 max-sm:mt-16 group"
        >
          <div className="absolute z-0 bottom-0 left-1/2 right-1/2 group-hover:w-1 group-hover:h-1 rounded-full group-hover:scale-[50] duration-500 bg-white"></div>
          <div className="flex justify-center items-center gap-3">
            <h1 className="font-amiri z-50">Location</h1>
            <FaArrowRight className="group-hover:translate-x-2 duration-500" />
          </div>
        </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="content mt-10">
        <ExperienceContent activeContent={activeContent} />

        {activeContent === 1 && (
          <div className="content-1">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: "some",
                margin: "0px 0px -40px 0px",
              }}
              className="font-amiri text-[32px] font-[400]"
            >
              <About />
            </motion.h1>
          </div>
        )}

        {activeContent === 2 && (
          <div className="content-2">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: "some",
                margin: "0px 0px -40px 0px",
              }}
              className="font-amiri text-[32px] font-[400]"
            >
              <Location />
            </motion.h1>
          </div>
        )}
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: "some", margin: "0px 0px -40px 0px" }}
        className="border-b border-[#000000] my-20"
      ></motion.div>
    </div>
  );
};

export default Experience;
