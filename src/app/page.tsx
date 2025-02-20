'use client';
import { useEffect } from "react";
import { useScroll, useSpring,motion } from "framer-motion"; 
import About from "./_components/About";
import Experience from "./_components/Experience";
import Slider from "./_components/Slider";
import Testimonial from "./_components/Testimonial";
import Projects from "./_components/Projects";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Contact from "./_components/Contact";
import Hero from "./_components/Hero";



const Home = () => {
  const { scrollYProgress } = useScroll(); 

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 1000,
    damping: 300,
    restDelta: 0.1,
  });

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]") as HTMLElement,
      smooth: true,
    });
  
    return () => scroll.destroy(); 
  }, []);

  return (
    <div data-scroll-container className="bg-black text-white">
     <Hero/>
      <About />
      <Experience />
      <Slider />
      <Testimonial />
      <Projects />
      <Contact/>
      <motion.div
        style={{
          scaleY,
        }}
        className="fixed h-full w-[8px] bg-white origin-top top-0 right-0 left-[99.80%] rounded-full"
      />
    </div>
  );
};

export default Home;
