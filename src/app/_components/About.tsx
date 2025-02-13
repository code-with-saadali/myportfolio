'use client'
import Image from "next/image";
import {motion} from "framer-motion";
import { FadeUp } from "./Animation";
const About = () => {
  return (
    <div className="px-20 max-lg:px-10">
      <main>
        <div className="flex justify-between max-lg:flex-col">
          <div className="row1">
            <div className="text">
              <div className="1 py-10">
                <motion.h1 
                  variants={FadeUp(0.1)} 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: false, amount: "some", margin: "0px 0px -40px 0px" }} 
                  className="text-[#999999] text-[14px] font-medium font-poppins">
                  BIOGRAPHY
                </motion.h1>
                <motion.p 
                  variants={FadeUp(0.1)} 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: false, amount: "some", margin: "0px 0px -40px 0px" }} 
                  className="font-amiri text-[24px] font-[400] leading-snug py-12">
                  Work for money and design <br /> for love! I’m Bruno, an <br />
                  UI/UX Interaction Designer <br /> based in Poland.
                </motion.p>
              </div>
              <div className="2 py-10">
                <motion.h1 
                  variants={FadeUp(0.1)} 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: false, amount: "some", margin: "0px 0px -20px 0px" }} 
                  className="text-[#999999] text-[14px] font-medium font-poppins">
                  Contact
                </motion.h1>
                <motion.p 
                  variants={FadeUp(0.1)} 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: false, amount: "some", margin: "0px 0px -40px 0px" }} 
                  className="font-amiri text-[24px] font-[400] leading-snug py-12">
                  Okara, Pakistan <br /> saadali786000786@gmail.com <br /> +92317
                  6178 135
                </motion.p>
              </div>
              <div className="3 py-10">
                <motion.h1 
                  variants={FadeUp(0.1)} 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: false, amount: "some", margin: "0px 0px -20px 0px" }} 
                  className="text-[#999999] text-[14px] font-medium font-poppins">
                  SERVICES
                </motion.h1>
                <motion.p 
                  variants={FadeUp(0.1)} 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: false, amount: "some", margin: "0px 0px -40px 0px" }} 
                  className="font-amiri text-[24px] font-[400] leading-snug py-12">
                  Website Design <br /> Mobile Application Design <br /> Animation
                </motion.p>
              </div>
            </div>
          </div>
          <div className="row2">
            <motion.div 
              variants={FadeUp(0.1)} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: false, amount: "some", margin: "0px 0px -40px 0px" }} 
              className="img transform-gpu">
              <Image
                src="/kHM5W7m7Bvouv9eVpHKfDID36w8.avif"
                alt=""
                width={980}
                height={1024}
              />
            </motion.div>
          </div>
          <div className="row3">
            <div className="text text-end max-lg:text-start">
              <div className="1 py-10">
                <motion.h1 
                  variants={FadeUp(0.1)} 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: false, amount: "some", margin: "0px 0px -40px 0px" }} 
                  className="text-[#999999] text-[14px] font-medium font-poppins">
                  Years of <br />
                  Experience
                </motion.h1>
                <motion.h1 
                  variants={FadeUp(0.1)} 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: false, amount: "some", margin: "0px 0px -40px 0px" }} 
                  className="font-amiri text-[80px] fontt-[400] pt-5 transform-gpu">
                  8
                </motion.h1>
              </div>
              <div className="2">
                <motion.h1 
                  variants={FadeUp(0.1)} 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: false, amount: "some", margin: "0px 0px -20px 0px" }} 
                  className="text-[#999999] text-[14px] font-medium font-poppins">
                  Satisfaction <br />
                  Clients
                </motion.h1>
                <motion.h1 
                  variants={FadeUp(0.1)} 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: false, amount: "some", margin: "0px 0px -40px 0px" }} 
                  className="font-amiri text-[80px] fontt-[400] pt-5 transform-gpu">
                  100%
                </motion.h1>
              </div>
              <div className="3 py-10">
                <motion.h1 
                  variants={FadeUp(0.1)} 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: false, amount: "some", margin: "0px 0px -40px 0px" }} 
                  className="text-[#999999] text-[14px] font-medium font-poppins">
                  CLIENTS ON WORLDWIDE
                </motion.h1>
                <motion.h1 
                  variants={FadeUp(0.1)} 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: false, amount: "some", margin: "0px 0px -40px 0px" }} 
                  className="font-amiri text-[80px] fontt-[400] pt-5 transform-gpu">
                  +80
                </motion.h1>
              </div>
              <div className="4">
                <motion.h1 
                  variants={FadeUp(0.1)} 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: false, amount: "some", margin: "0px 0px -40px 0px" }} 
                  className="text-[#999999] text-[14px] font-medium font-poppins">
                  PROJECTS DONE
                </motion.h1>
                <motion.h1 
                  variants={FadeUp(0.1)} 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: false, amount: "some", margin: "0px 0px -40px 0px" }} 
                  className="font-amiri text-[80px] fontt-[400] pt-5 transform-gpu">
                  675
                </motion.h1>
              </div>
            </div>
          </div>
        </div>
        <div className="row4">
          <motion.div 
            variants={FadeUp(0.1)} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: false, amount: "some", margin: "0px 0px -40px 0px" }} 
            className="logos flex justify-between py-20 max-lg:flex-col max-lg:justify-center max-lg:items-center gap-10">
            <Image src="/logo1.svg" alt="" width={180} height={100} className="animate-pulse"/>
            <Image src="/logo2.svg" alt="" width={180} height={100} className="animate-pulse"/>
            <Image src="/logo3.svg" alt="" width={180} height={100} className="animate-pulse"/>
            <Image src="/logo4.svg" alt="" width={180} height={100} className="animate-pulse"/>
            <Image src="/logo5.svg" alt="" width={180} height={100} className="animate-pulse"/>
          </motion.div>
        </div>
      </main>
      <motion.div 
        variants={FadeUp(0.1)} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: false, amount: "some", margin: "0px 0px -40px 0px" }} 
        className="border-b border-[#000000] my-20">
      </motion.div>
    </div>
  );
};

export default About;
