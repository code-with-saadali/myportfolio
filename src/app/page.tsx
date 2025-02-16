'use client';
import { useEffect } from "react";
import { useScroll, useSpring,motion } from "framer-motion"; 
import Navbar from "./_components/Navbar";
import About from "./_components/About";
import Experience from "./_components/Experience";
import Slider from "./_components/Slider";
import Testimonial from "./_components/Testimonial";
import Projects from "./_components/Projects";
import Footer from "./_components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Contact from "./_components/Contact";
import Scene from './_components/Scene';
import Text from './_components/Text';


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
    <div data-scroll-container>
      <Navbar />
      <About />
      <Experience />
      <Slider />
      <Testimonial />
      <Projects />
      <Contact/>
      <Text/>
      <Scene/>
      <Footer />
      <motion.div
        style={{
          scaleY,
        }}
        className="fixed h-full w-[8px] bg-[#000] origin-top top-0 right-0 left-[99.70%] rounded-full"
      />
    </div>
  );
};

export default Home;
