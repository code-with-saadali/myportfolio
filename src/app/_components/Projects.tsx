'use client'
import Link from "next/link";
import Img1 from "../../../public/project1.png";
import Img2 from "../../../public/project2.png";
import Img3 from "../../../public/project3.png";
import Img4 from "../../../public/project4.png";
import Img5 from "../../../public/project5.png";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import {motion} from "framer-motion";
import { FadeUp } from "./Animation";

const Projects = () => {
  return (
    <div className="px-20 max-lg:px-10 py-20">
      <div className="text">
        <motion.h1 variants={FadeUp(0.1)} initial="hidden" whileInView="visible" viewport={{ once: false, amount: "some", margin: "0px 0px -40px 0px",  }}
          className="cursor-pointer hover:text-[#FA472A] text-[32px] font-amiri flex justify-center"
        >
          @brunoerdison
        </motion.h1>
        <motion.div variants={FadeUp(0.1)} initial="hidden" whileInView="visible" viewport={{ once: false, amount: "some", margin: "0px 0px -40px 0px",  }} className="images flex max-lg:flex-col gap-3 justify-between my-20">
          <div className="relative group w-[19%] max-lg:w-full">
            <Link href="https://www.instagram.com/brunoerdison" target="_blank">
              <Image
                src={Img1}
                alt="Project 1"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/50 w-[200px] h-[200px] flex justify-center items-center">
                  <FaInstagram className="text-[60px] text-white" />
                </div>
              </div>
            </Link>
          </div>

          <div className="relative group w-[19%] max-lg:w-full">
            <Link href="https://www.instagram.com/brunoerdison" target="_blank">
              <Image
                src={Img2}
                alt="Project 2"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/50 w-[200px] h-[200px] flex justify-center items-center">
                  <FaInstagram className="text-[60px] text-white" />
                </div>
              </div>
            </Link>
          </div>

          <div className="relative group w-[19%] max-lg:w-full">
            <Link href="https://www.instagram.com/brunoerdison" target="_blank">
              <Image
                src={Img3}
                alt="Project 3"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/50 w-[200px] h-[200px] flex justify-center items-center">
                  <FaInstagram className="text-[60px] text-white" />
                </div>
              </div>
            </Link>
          </div>

          <div className="relative group w-[19%] max-lg:w-full">
            <Link href="https://www.instagram.com/brunoerdison" target="_blank">
              <Image
                src={Img4}
                alt="Project 4"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/50 w-[200px] h-[200px] flex justify-center items-center">
                  <FaInstagram className="text-[60px] text-white" />
                </div>
              </div>
            </Link>
          </div>

          <div className="relative group w-[19%] max-lg:w-full">
            <Link href="https://www.instagram.com/brunoerdison" target="_blank">
              <Image
                src={Img5}
                alt="Project 5"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/50 w-[200px] h-[200px] flex justify-center items-center">
                  <FaInstagram className="text-[60px] text-white" />
                </div>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
