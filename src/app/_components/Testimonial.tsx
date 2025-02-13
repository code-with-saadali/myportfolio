"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper as SwiperType } from "swiper/types";
import {motion} from "framer-motion";
import { FadeUp } from "./Animation";


interface Project {
  id: number;
  title: string;
  description: string;
  mention: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: `“Bruno was a real pleasure to work with and we look forward to working with him again. He’s definitely the kind of designer you can trust with a project from start to finish. Great services & Recommended!”`,
    description: `Congo Khaalo`,
    mention: `UI/UX Designer`,
  },
  {
    id: 2,
    title: `“Bruno was a real pleasure to work with and we look forward to working with him again. He’s definitely the kind of designer you can trust with a project from start to finish. Great services & Recommended!”`,
    description: `Project A Description`,
    mention: `Web Designer`,
  },
  {
    id: 3,
    title: `“Bruno brought incredible creativity and professionalism to the project. The design exceeded our expectations and we can’t wait for the next collaboration!”`,
    description: `Project B`,
    mention: `Graphic Designer`,
  },
  {
    id: 4,
    title: `“Working with Bruno was an absolute pleasure. He understands the needs of the client and provides excellent design solutions. Highly recommend!”`,
    description: `Project C`,
    mention: `Creative Director`,
  },
  {
    id: 5,
    title: `“Bruno’s attention to detail and ability to bring our vision to life was outstanding. The project was completed on time and we are thrilled with the result!”`,
    description: `Project D`,
    mention: `Brand Strategist`,
  },
  {
    id: 6,
    title: `“Bruno is a true professional. His designs are creative, functional, and always delivered on schedule. We couldn’t be happier with the outcome!”`,
    description: `Project E`,
    mention: `Visual Designer`,
  },
];

const Testimonial = () => {
  const [showTitle, setShowTitle] = useState(true);

  const handleSlideChange = (swiper: SwiperType) => { 
    if (swiper.isEnd) {
      setShowTitle(false);
      setTimeout(() => {
        setShowTitle(true);
      }, 1000); 
    } else {
      setShowTitle(true);
    }
  };

  return (
    <div className="px-36 max-lg:px-10 py-20">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        onSlideChange={handleSlideChange}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="text">
              <div>
                <motion.h1 variants={FadeUp(0.1)} initial="hidden" whileInView="visible" viewport={{ once: false, amount: "some", margin: "0px 0px -40px 0px",  }} className="font-amiri text-[48px] max-md:text-[30px] text-center">{project.title}</motion.h1>
              </div>

              <motion.h1 variants={FadeUp(0.1)} initial="hidden" whileInView="visible" viewport={{ once: false, amount: "some", margin: "0px 0px -40px 0px",  }} className="text-[24px] font-poppins text-center pt-10 font-medium">
                {project.description}
              </motion.h1>
              <motion.p variants={FadeUp(0.1)} initial="hidden" whileInView="visible" viewport={{ once: false, amount: "some", margin: "0px 0px -40px 0px",  }} className="text-center text-[14px] text-[#666666]">
                {project.mention} <span className="text-[#0099FF] uppercase">at amazon</span>
              </motion.p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
