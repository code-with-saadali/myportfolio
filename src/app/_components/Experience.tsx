"use client";
import { motion } from "framer-motion";
import { useState } from "react"; 
import { FadeUp } from "./Animation";

const Experience = () => {
  // State to manage the currently active content
  const [activeContent, setActiveContent] = useState<number>(0);

  const handleButtonClick = (id: number) => {
    setActiveContent(id); 
  };

  return (
    <div className="px-20 py-10 max-lg:px-10">
      <div className="text">
        <motion.h1
          variants={FadeUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: "some",
            margin: "0px 0px -40px 0px",
          }}
          className="font-amiri text-[60px] max-md:text-[48px] text-center"
        >
          Education & Experience
        </motion.h1>
      </div>

      {/* Buttons Section */}
      <div className="buttons text-center mt-10">
        <motion.button
          variants={FadeUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: "some",
            margin: "0px 0px -40px 0px",
          }}
          onClick={() => handleButtonClick(1)}
          className="px-6 py-3 bg-blue-500 text-white font-poppins rounded-md mx-2 mb-4 hover:bg-blue-600 transition duration-300"
        >
          Button 1
        </motion.button>

        <motion.button
          variants={FadeUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: "some",
            margin: "0px 0px -40px 0px",
          }}
          onClick={() => handleButtonClick(2)}
          className="px-6 py-3 bg-green-500 text-white font-poppins rounded-md mx-2 mb-4 hover:bg-green-600 transition duration-300"
        >
          Button 2
        </motion.button>
      </div>

      {/* Content Section */}
      <div className="content mt-10">
         {/* Show content for Button 1 */}
         {activeContent === 1  ? (
          <div className="content-1">
            <motion.h1
              variants={FadeUp(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: "some",
                margin: "0px 0px -40px 0px",
              }}
              className="font-amiri text-[32px] font-[400]"
            >
              Content for Button 1
            </motion.h1>
            <motion.p
              variants={FadeUp(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: "some",
                margin: "0px 0px -40px 0px",
              }}
              className="text-[#999999] text-[14px] font-medium font-poppins"
            >
              This is the content displayed when Button 1 is clicked.
            </motion.p>
          </div>
        ):(
          <div className="experince flex justify-between max-lg:flex-col">
          <div className="row1">
            <motion.h1
              variants={FadeUp(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: "some",
                margin: "0px 0px -40px 0px",
              }}
              className="text-[#999999] text-[14px] font-medium font-poppins py-10"
            >
              2014
            </motion.h1>
            <div className="1">
              <motion.h1
                variants={FadeUp(0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: "some",
                  margin: "0px 0px -40px 0px",
                }}
                className="font-amiri text-[32px] max-md:text-[24px] font-[400]"
              >
                Bachelor Degree of Design
              </motion.h1>
              <motion.p
                variants={FadeUp(0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: "some",
                  margin: "0px 0px -40px 0px",
                }}
                className="text-[#999999] text-[14px] font-medium font-poppins"
              >
                RMIT University
              </motion.p>
            </div>
            <div className="2 pt-10">
              <motion.h1
                variants={FadeUp(0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: "some",
                  margin: "0px 0px -40px 0px",
                }}
                className="font-amiri text-[32px] max-md:text-[24px] font-[400]"
              >
                UI/UX Design Certificate
              </motion.h1>
              <motion.p
                variants={FadeUp(0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: "some",
                  margin: "0px 0px -40px 0px",
                }}
                className="text-[#999999] text-[14px] font-medium font-poppins"
              >
                University of Houston, US
              </motion.p>
            </div>
          </div>
          <div className="row2">
            <motion.h1
              variants={FadeUp(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: "some",
                margin: "0px 0px -40px 0px",
              }}
              className="text-[#999999] text-[14px] font-medium font-poppins py-10"
            >
              2015 - 2019
            </motion.h1>
            <div className="1">
              <motion.h1
                variants={FadeUp(0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: "some",
                  margin: "0px 0px -40px 0px",
                }}
                className="font-amiri text-[32px] max-md:text-[24px] font-[400]"
              >
                Design Internship
              </motion.h1>
              <motion.p
                variants={FadeUp(0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: "some",
                  margin: "0px 0px -40px 0px",
                }}
                className="text-[#999999] text-[14px] font-medium font-poppins"
              >
                RMIT University
              </motion.p>
            </div>
            <div className="2 pt-10">
              <motion.h1 className="font-amiri text-[32px] max-md:text-[24px] font-[400]">
                Graphic Designer
              </motion.h1>
              <motion.p
                variants={FadeUp(0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: "some",
                  margin: "0px 0px -40px 0px",
                }}
                className="text-[#999999] text-[14px] font-medium font-poppins"
              >
                Tripadvisor Ltd, UK
              </motion.p>
            </div>
            <div className="3 pt-10">
              <motion.h1
                variants={FadeUp(0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: "some",
                  margin: "0px 0px -40px 0px",
                }}
                className="font-amiri text-[32px] max-md:text-[24px] font-[400]"
              >
                Leader Graphic Design
              </motion.h1>
              <motion.p
                variants={FadeUp(0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: "some",
                  margin: "0px 0px -40px 0px",
                }}
                className="text-[#999999] text-[14px] font-medium font-poppins"
              >
                New Centery Media JSC, UK
              </motion.p>
            </div>
            <div className="4 pt-10">
              <motion.h1
                variants={FadeUp(0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: "some",
                  margin: "0px 0px -40px 0px",
                }}
                className="font-amiri text-[32px] max-md:text-[24px] font-[400]"
              >
                Web Designer
              </motion.h1>
              <motion.p
                variants={FadeUp(0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: "some",
                  margin: "0px 0px -40px 0px",
                }}
                className="text-[#999999] text-[14px] font-medium font-poppins"
              >
                Freelancer
              </motion.p>
            </div>
            <div className="5 pt-10">
              <motion.h1
                variants={FadeUp(0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: "some",
                  margin: "0px 0px -40px 0px",
                }}
                className="font-amiri text-[32px] max-md:text-[24px] font-[400]"
              >
                Web Designer/ Author
              </motion.h1>
              <motion.p
                variants={FadeUp(0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: "some",
                  margin: "0px 0px -40px 0px",
                }}
                className="text-[#999999] text-[14px] font-medium font-poppins"
              >
                Envato Market
              </motion.p>
            </div>
          </div>
          <div className="row3">
            <motion.h1
              variants={FadeUp(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: "some",
                margin: "0px 0px -40px 0px",
              }}
              className="text-[#999999] text-[14px] font-medium font-poppins py-10"
            >
              2020 - Present
            </motion.h1>
            <div className="1">
              <motion.h1
                variants={FadeUp(0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: "some",
                  margin: "0px 0px -40px 0px",
                }}
                className="font-amiri text-[32px] max-md:text-[23px] font-[400]"
              >
                Product Designe Management
              </motion.h1>
              <motion.p
                variants={FadeUp(0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: "some",
                  margin: "0px 0px -40px 0px",
                }}
                className="text-[#999999] text-[14px] font-medium font-poppins"
              >
                Dribbble LLC, US
              </motion.p>
            </div>
            <div className="2 pt-10">
              <motion.h1
                variants={FadeUp(0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: "some",
                  margin: "0px 0px -40px 0px",
                }}
                className="font-amiri text-[32px] max-md:text-[24px] font-[400]"
              >
                Art Director / Co-Founder
              </motion.h1>
              <motion.p
                variants={FadeUp(0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: "some",
                  margin: "0px 0px -40px 0px",
                }}
                className="text-[#999999] text-[14px] font-medium font-poppins"
              >
                Spotify
              </motion.p>
            </div>
            <div className="3 pt-10">
              <motion.h1
                variants={FadeUp(0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: "some",
                  margin: "0px 0px -40px 0px",
                }}
                className="font-amiri text-[32px] max-md:text-[24px] font-[400]"
              >
                Founder
              </motion.h1>
              <motion.p
                variants={FadeUp(0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: "some",
                  margin: "0px 0px -40px 0px",
                }}
                className="text-[#999999] text-[14px] font-medium font-poppins"
              >
                iDesign Magazine
              </motion.p>
            </div>
            <div className="4 pt-10">
              <motion.h1
                variants={FadeUp(0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: "some",
                  margin: "0px 0px -40px 0px",
                }}
                className="font-amiri text-[32px] max-md:text-[24px] font-[400]"
              >
                Author of The Book
              </motion.h1>
              <motion.p
                variants={FadeUp(0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: "some",
                  margin: "0px 0px -40px 0px",
                }}
                className="text-[#999999] text-[14px] font-medium font-poppins"
              >
                Work for Money, Design for Love
              </motion.p>
            </div>
          </div>
        </div>
        )}
        
       

        {/* Show content for Button 2 */}
        {activeContent === 2 && (
          <div className="content-2">
            <motion.h1
              variants={FadeUp(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: "some",
                margin: "0px 0px -40px 0px",
              }}
              className="font-amiri text-[32px] font-[400]"
            >
              Content for Button 2
            </motion.h1>
            <motion.p
              variants={FadeUp(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: "some",
                margin: "0px 0px -40px 0px",
              }}
              className="text-[#999999] text-[14px] font-medium font-poppins"
            >
              This is the content displayed when Button 2 is clicked.
            </motion.p>
          </div>
        )}
      </div>

      <motion.div
        variants={FadeUp(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: "some", margin: "0px 0px -40px 0px" }}
        className="border-b border-[#000000] my-20"
      ></motion.div>
    </div>
  );
};

export default Experience;
