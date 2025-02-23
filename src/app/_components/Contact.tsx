"use client";
import starsBg from "../../../public/stars.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import Rive from "rive-react";


const Contact = () => {
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
  return (
    <motion.div  ref={sectionRef}
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
    }} className="px-12 py-10">
      <Rive
        src="/aniamtion.riv"
        stateMachines="State Machine 1"
        className="h-[500px] w-full cursor-pointer" 
      />
    </motion.div>
  );
};

export default Contact;
