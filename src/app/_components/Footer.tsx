'use client'
import { PiFacebookLogoLight } from "react-icons/pi";
import { PiTwitterLogo } from "react-icons/pi";
import { PiPinterestLogoLight } from "react-icons/pi";
import { PiInstagramLogoLight } from "react-icons/pi";
import { PiDribbbleLogoLight } from "react-icons/pi";
import { motion } from "framer-motion";
import { FadeUp } from "./Animation";
import Link from "next/link";

const Footer = () => {
  return (
    <div className='bg-black text-white px-20'>
      {/* Divider Line */}
      <motion.div
        variants={FadeUp(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: "some", margin: "0px 0px -40px 0px" }}
        className="border-b border-[#1B1B1B] mb-12"
      ></motion.div>

      {/* Footer Content */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 px-6 py-16">
        
        {/* Left Section: Copyright and Personal Description */}
        <div className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">
          <motion.h1
            variants={FadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: "some", margin: "0px 0px -40px 0px" }}
            className="text-xl font-poppins text-white max-md:text-lg"
          >
            © 2025 Saad Ali. All Rights Reserved.
          </motion.h1>

          <motion.p
            variants={FadeUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: "some", margin: "0px 0px -40px 0px" }}
            className="font-amiri text-white/70 text-lg"
          >
            I&apos;m Saad Ali, a passionate designer & developer dedicated to creating  <br /> visually compelling and user-friendly digital experiences. I specialize <br /> in web design, UI/UX, and front-end development, always aiming to <br /> bring innovation and creativity to every project.
          </motion.p>
        </div>

        {/* Center Section: Email and Portfolio Links */}
        <div className="flex flex-col items-center lg:items-start gap-6">
          <motion.h1
            variants={FadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: "some", margin: "0px 0px -40px 0px" }}
            className="text-lg font-poppins hover:text-[#FA472A] cursor-pointer max-md:text-[17px]"
          >
            HELP@SAADALI.COM
          </motion.h1>

          <motion.div
            variants={FadeUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: "some", margin: "0px 0px -40px 0px" }}
            className="text-white/70 text-sm flex gap-6 flex-wrap justify-center lg:justify-start"
          >
            <Link href="/portfolio" className="hover:text-white transition-colors duration-300">My Portfolio</Link>
            <Link href="/services" className="hover:text-white transition-colors duration-300">Services</Link>
            <Link href="/about" className="hover:text-white transition-colors duration-300">About Me</Link>
            <Link href="/contact" className="hover:text-white transition-colors duration-300">Contact</Link>
          </motion.div>
        </div>

        {/* Right Section: Social Icons */}
        <motion.div
          variants={FadeUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: "some", margin: "0px 0px -40px 0px" }}
          className="flex justify-center gap-6 items-center text-3xl"
        >
          <PiFacebookLogoLight className="hover:scale-110 transition-all duration-300 cursor-pointer" />
          <PiTwitterLogo className="hover:scale-110 transition-all duration-300 cursor-pointer" />
          <PiPinterestLogoLight className="hover:scale-110 transition-all duration-300 cursor-pointer" />
          <PiInstagramLogoLight className="hover:scale-110 transition-all duration-300 cursor-pointer" />
          <PiDribbbleLogoLight className="hover:scale-110 transition-all duration-300 cursor-pointer" />
        </motion.div>
      </div>

      {/* Final Note */}
      <motion.div
        className="text-center text-white/70 font-amiri py-8"
      >
        <p>Crafted with care by Saad Ali. Dedicated to bringing creative solutions and exceptional experiences to life through design and development.</p>
      </motion.div>
    </div>
  );
};

export default Footer;
