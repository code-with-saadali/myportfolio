"use client";
import React, { useRef, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import starsBg from "../../../public/stars.png";

interface FaqItem {
  id: string | number;
  question: string;
  answer: string;
}

interface FaqsProps {
  faqInformation: FaqItem[];
}

const Faq = ({ faqInformation }: FaqsProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  
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

  // Toggle function for FAQ
  const toggleAnswer = (id: number) => {
    setOpenIndex(openIndex === id ? null : id);
  };

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
      className="w-full h-full px-20 text-[#E6E6E6] flex font-sans max-lg:flex-col py-28 border-b-2 border-[#1b1b1b] max-lg:px-5 max-lg:py-5 max-sm:text-center relative overflow-hidden"
    >
      <div className="w-full mt-20">
        <div className="w-full">
          <h3 className="text-5xl font-poppins tracking-tight max-sm:text-4xl">
            Your Questions
            <span className="font-poppins text-[#898989]">Answered</span>
          </h3>
          <p className="text-lg py-3 max-w-md font-amiri text-[#898989] max-lg:max-w-full">
            Hi, I&apos;m Adrian Carter, a passionate web designer with a mission
            to bring creative ideas to life.
          </p>
          <button className="-mt-4">Contact Me</button>
        </div>
      </div>

      <div className="w-full">
        <div className="w-full h-full my-10">
          {faqInformation.map((faq, index) => (
            <div key={faq.id || index} className="mb-4">
              <div
                className={`cursor-pointer flex items-center justify-between px-4 py-2 max-sm:rounded-3xl max-sm:px-2 bg-transparent rounded-full  ${
                  openIndex === index
                    ? "border-[#3a3a3d] border-2"
                    : "border-2 border-[#1e1e21]"
                }`}
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="text-xl font-semibold max-sm:text-sm">
                  {faq.question}
                </h3>
                <span className="text-xl bg-zinc-300 text-black flex justify-center items-center p-4 max-sm:p-2 rounded-full max-sm:bg-transparent max-sm:text-white">
                  {openIndex === index ? (
                    <FaAngleUp className="text-[#3a3a3d]" />
                  ) : (
                    <FaAngleDown />
                  )}
                </span>
              </div>

              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: openIndex === index ? 1 : 0,
                  height: openIndex === index ? "auto" : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-lg"
              >
                <p className={`px-6 text-[#929292] max-md:px-0 py-4 my-2`}>
                  {faq.answer}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Faq;
