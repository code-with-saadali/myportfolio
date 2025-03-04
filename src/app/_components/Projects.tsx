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
import { GoProjectSymlink } from "react-icons/go";

const Projects = () => {
  return (
    <div className="px-20 max-lg:px-5 py-20">
      <div className="flex justify-center">
        <button className="cursor-pointer bg-gradient-to-b bg shadow-[0px_4px_32px_0_rgba(47,47,47)] px-4 py-2 rounded-xl border border-[#5f5f5f] text-white font-medium group">
          <div className="relative overflow-hidden">
            <p className="group-hover:-translate-y-7 flex items-center gap-1 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
            Our Projects <GoProjectSymlink className="pt-1" />
            </p>
            <p className="absolute top-7 left-0 flex items-center gap-1 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
              Our Projects <GoProjectSymlink className="pt-1" />
            </p>
          </div>
        </button>
      </div>
      <div className="text mt-5">
        <motion.h1 variants={FadeUp(0.1)} initial="hidden" whileInView="visible" viewport={{ once: false, amount: "some", margin: "0px 0px -40px 0px",  }}
          className="cursor-pointer hover:text-[#FA472A] text-[40px] font-amiri flex justify-center"
        >
         Recent Projects
        </motion.h1>
        <motion.h1 variants={FadeUp(0.1)} initial="hidden" whileInView="visible" viewport={{ once: false, amount: "some", margin: "0px 0px -40px 0px",  }}
          className="cursor-pointer max-lg:text-center hover:text-[#FA472A] text-[40px] font-amiri flex justify-center"
        >
         Take a look at some of out latest projects.
        </motion.h1>
        <motion.div variants={FadeUp(0.1)} initial="hidden" whileInView="visible" viewport={{ once: false, amount: "some", margin: "0px 0px -40px 0px",  }} className="cards images flex max-lg:flex-col gap-3 justify-between my-20">
          <div className="card relative group w-[19%] max-lg:w-full">
            <Link href="https://www.instagram.com/brunoerdison" target="_blank">
              <Image
                src={Img1}
                alt="Project 1"
                className="w-full h-[300px] object-cover rounded-xl"
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/50 w-[200px] h-[200px] flex justify-center items-center">
                  <FaInstagram className="text-[60px] text-white" />
                </div>
              </div>
            </Link>
          </div>

          <div className="card relative group w-[19%] max-lg:w-full">
            <Link href="https://www.instagram.com/brunoerdison" target="_blank">
              <Image
                src={Img2}
                alt="Project 2"
                className="w-full h-[300px] object-cover rounded-xl"
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/50 w-[200px] h-[200px] flex justify-center items-center">
                  <FaInstagram className="text-[60px] text-white" />
                </div>
              </div>
            </Link>
          </div>

          <div className="card relative group w-[19%] max-lg:w-full">
            <Link href="https://www.instagram.com/brunoerdison" target="_blank">
              <Image
                src={Img3}
                alt="Project 3"
                className="w-full h-[300px] object-cover rounded-xl"
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/50 w-[200px] h-[200px] flex justify-center items-center">
                  <FaInstagram className="text-[60px] text-white" />
                </div>
              </div>
            </Link>
          </div>

          <div className="card relative group w-[19%] max-lg:w-full">
            <Link href="https://www.instagram.com/brunoerdison" target="_blank">
              <Image
                src={Img4}
                alt="Project 4"
                className="w-full h-[300px] object-cover rounded-xl"
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/50 w-[200px] h-[200px] flex justify-center items-center">
                  <FaInstagram className="text-[60px] text-white" />
                </div>
              </div>
            </Link>
          </div>

          <div className="card relative group w-[19%] max-lg:w-full">
            <Link href="https://www.instagram.com/brunoerdison" target="_blank">
              <Image
                src={Img5}
                alt="Project 5"
                className="w-full h-[300px] object-cover rounded-xl"
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
