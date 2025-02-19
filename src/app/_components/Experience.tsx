"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import ExperienceContent from "./ExperienceContent";
import Location from "./Location";
import MyProjects from "./MyProjects";


const Experience = () => {
  const [activeContent, setActiveContent] = useState<number>(0);

  const handleButtonClick = (id: number) => {
    setActiveContent(id);
  };

  return (
    <div className="px-20 py-10 max-lg:px-10">
      <div className="text">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: "some",
            margin: "0px 0px -40px 0px",
          }}
          className="font-amiri text-[60px] max-md:text-[48px] text-center"
        >
          Education & Experience
        </motion.h1>
       
      </div>

      {/* Buttons Section */}
      <div className="buttons flex justify-center gap-3 text-center mt-10">
        <button
          onClick={() => handleButtonClick(1)}
          className="relative inline-block px-6 py-3 bg-white text-black font-poppins font-medium text-lg uppercase border border-black rounded-2xl overflow-hidden group transform transition-all duration-300 ease-in-out hover:scale-110 active:scale-95 shadow-lg group-hover:shadow-xl group-hover:shadow-black"
        >
          <span className="absolute inset-0 w-full h-full bg-black scale-x-0 scale-y-0 transition-all duration-300 group-hover:scale-x-100 group-hover:scale-y-100 origin-center"></span>
          <span className="relative z-10 transition-all duration-300 group-hover:text-white group-hover:shadow-xl group-hover:shadow-black group-hover:scale-110">
            Projects
          </span>
          <span className="absolute inset-0 w-full h-full bg-gradient-to-tr from-black to-gray-600 opacity-20 group-hover:opacity-0 transition-all duration-300"></span>
          <span className="absolute inset-0 w-full h-full bg-gradient-to-b from-gray-200 to-gray-500 opacity-10 group-hover:opacity-30 transition-all duration-300"></span>
        </button>
        <div className="button2">
          <button
            onClick={() => handleButtonClick(2)}
            className="relative inline-block px-6 py-3 bg-white text-black font-poppins font-medium text-lg uppercase border border-black rounded-2xl overflow-hidden group transform transition-all duration-300 ease-in-out hover:scale-110 active:scale-95 shadow-lg group-hover:shadow-xl group-hover:shadow-black"
          >
            <span className="absolute inset-0 w-full h-full bg-black scale-x-0 scale-y-0 transition-all duration-300 group-hover:scale-x-100 group-hover:scale-y-100 origin-center"></span>
            <span className="relative z-10 transition-all duration-300 group-hover:text-white group-hover:shadow-xl group-hover:shadow-black group-hover:scale-110">
              location
            </span>
            <span className="absolute inset-0 w-full h-full bg-gradient-to-tr from-black to-gray-600 opacity-20 group-hover:opacity-0 transition-all duration-300"></span>
            <span className="absolute inset-0 w-full h-full bg-gradient-to-b from-gray-200 to-gray-500 opacity-10 group-hover:opacity-30 transition-all duration-300"></span>
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
             <MyProjects/>
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
              <Location/>
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
