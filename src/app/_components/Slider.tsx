"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import {motion} from "framer-motion";
import { FadeUp } from "./Animation";
import { useEffect, useState } from "react";


interface Project {
  id: number;
  title: string;
  image: string;
  desc: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Website",
    image: "/project1.png",
    desc: "E-commerce experience",
  },
  {
    id: 2,
    title: "Portfolio App",
    image: "/project2.png",
    desc: "Our portfolio",
  },
  {
    id: 3,
    title: "Blog Platform",
    image: "/project6.png",
    desc: "Film & Art Festival",
  },
  {
    id: 4,
    title: "Project 4",
    image: "/project4.png",
    desc: "Mobile application",
  },
  {
    id: 5,
    title: "Project 5",
    image: "/project1.png",
    desc: "Custom CMS ",
  },
  {
    id: 6,
    title: "Project 6",
    image: "/project6.png",
    desc: "Full Stack app",
  },
];

const Slider: React.FC = () => {
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
    <div className="px-20 max-lg:px-5 py-10">
      <motion.div
        className="h-8 w-8 text-white rounded-full fixed top-0 left-0 pointer-events-none max-lg:hidden"
        variants={variants}
        animate={cursorVariant}
      ></motion.div>
      <div className="text">
        <motion.h1  onMouseEnter={textEnter}
          onMouseLeave={textLeave} variants={FadeUp(0.1)} initial="hidden" whileInView="visible" viewport={{ once: false, amount: "some", margin: "0px 0px -40px 0px",  }}  className="text-4xl sm:text-5xl lg:text-6xl font-amiri text-center pb-10 sm:pb-16 lg:pb-28">
          My Latest Projects
        </motion.h1>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={1} 
        centeredSlides={false}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        breakpoints={{
          // For small screens (mobile), show 1 slide at a time
          320: {
            slidesPerView: 1,
            spaceBetween: 20, // Space between slides on mobile
          },
         
          768: {
            slidesPerView: 3,
            spaceBetween: 30, 
          },
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <motion.div variants={FadeUp(0.1)} initial="hidden" whileInView="visible" viewport={{ once: false, amount: "some", margin: "0px 0px -40px 0px",  }} className="rounded-xl transition-transform transform hover:scale-105 cursor-pointer">
              <div className="w-full h-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={420}
                height={280}
                className="object-cover w-full h-full hover:scale-110 duration-500"
                priority
              />
              </div>
            </motion.div>
            <div className="details text-center">
              <motion.h3 variants={FadeUp(0.1)} initial="hidden" whileInView="visible" viewport={{ once: false, amount: "some", margin: "0px 0px -40px 0px",  }} className="text-[#999999] text-sm sm:text-base md:text-lg pt-4 sm:pt-6 font-medium font-poppins">
                {project.title}
              </motion.h3>
              <motion.p variants={FadeUp(0.1)} initial="hidden" whileInView="visible" viewport={{ once: false, amount: "some", margin: "0px 0px -40px 0px",  }} className="font-amiri text-xl sm:text-2xl md:text-[28px] max-md:text-[23px] pb-10 sm:pb-14 font-light">
                {project.desc}
              </motion.p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <motion.div variants={FadeUp(0.1)} initial="hidden" whileInView="visible" viewport={{ once: false, amount: "some", margin: "0px 0px -40px 0px",  }} className="border-b border-[#000000] my-10 sm:my-14 lg:my-20"></motion.div>
    </div>
  );
};

export default Slider;
