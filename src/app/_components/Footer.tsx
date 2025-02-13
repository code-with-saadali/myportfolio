'use client'
import { PiFacebookLogoLight } from "react-icons/pi";
import { PiTwitterLogo } from "react-icons/pi";
import { PiPinterestLogoLight } from "react-icons/pi";
import { PiInstagramLogoLight } from "react-icons/pi";
import { PiDribbbleLogoLight } from "react-icons/pi";
import {motion} from "framer-motion";
import { FadeUp } from "./Animation";
const Footer = () => {
  return (
    <div className='px-20 max-lg:px-5'>
     <motion.div variants={FadeUp(0.1)} initial="hidden" whileInView="visible" viewport={{ once: false, amount: "some", margin: "0px 0px -40px 0px",  }} className="border-b border-[#000000]"></motion.div>
     <div className="text flex gap-2 justify-between items-center py-20 max-md:flex-col">
      <motion.h1 variants={FadeUp(0.1)} initial="hidden" whileInView="visible" viewport={{ once: false, amount: "some", margin: "0px 0px -40px 0px",  }} className="text-lg font-poppins max-md:text-[17px]">© 2025 Saad Ali. All Rights Reserved.</motion.h1>
      <motion.h1 variants={FadeUp(0.1)} initial="hidden" whileInView="visible" viewport={{ once: false, amount: "some", margin: "0px 0px -40px 0px",  }} className="text-lg font-poppins hover:text-[#FA472A] cursor-pointer max-md:text-[17px]">HELP@FRAMERX.STORE</motion.h1>
      <motion.div variants={FadeUp(0.1)} initial="hidden" whileInView="visible" viewport={{ once: false, amount: "some", margin: "0px 0px -40px 0px",  }} className="icons flex items-center gap-3 text-[22px]">
      <PiFacebookLogoLight className="hover:scale-110 duration-500 cursor-pointer"/>
      <PiTwitterLogo className="hover:scale-110 duration-500 cursor-pointer"/>
      <PiPinterestLogoLight className="hover:scale-110 duration-500 cursor-pointer"/>
      <PiInstagramLogoLight className="hover:scale-110 duration-500 cursor-pointer"/>
      <PiDribbbleLogoLight className="hover:scale-110 duration-500 cursor-pointer"/>
      </motion.div>
     </div>
    </div>
  )
}

export default Footer;