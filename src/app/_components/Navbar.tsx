"use client";
import { IoLogoInstagram, IoLogoTwitter } from "react-icons/io";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const navLinks = ["HOME", "BOOK ME", "EMAIL", "DOWNLOAD NOW"];
  const navlogo = ["SAAD ALI"];
  

  return (
    <div className="w-full px-12 py-5 max-lg:px-5">
      <main>
        <nav>
          <ul className="fixed p-4 rounded-3xl backdrop-blur-md z-50 left-10 right-10 flex max-md:flex-col justify-between items-center">
            <li className="flex items-center gap-16 max-xl:gap-5 max-md:gap-0">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-[15px] max-md:text-[13px] font-[600] font-poppins"
                  whileHover={{ scale: 1.1, }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  <div className="flex max-md:hidden">
                    {link.split("").map((letter, i) => (
                      <motion.span
                        key={i}
                        initial={{ y: 0 }}
                        whileHover={{ y: "-100%" }}
                        transition={{
                          duration: 0.15,
                          ease: "easeInOut",
                          delay: 0.02 * i,
                        }}
                        className="inline-block"
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </div>
                </motion.a>
              ))}
            </li>
            <div className="logo absolute left-[45%] max-md:relative max-md:left-0">
            {navlogo.map((link, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-4xl font-[700] font-amiri"
                  whileHover={{ scale: 1.1, }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                    {link.split("").map((letter, i) => (
                      <motion.span
                        key={i}
                        initial={{ y: 0 }}
                        whileHover={{ y: "-100%" }}
                        transition={{
                          duration: 0.15,
                          ease: "easeInOut",
                          delay: 0.02 * i,
                        }}
                        className="inline-block"
                      >
                        {letter}
                      </motion.span>
                    ))}
                </motion.a>
              ))}
            </div>
            <div className="flex items-center gap-5 text-[40px] max-lg:mt-5">
              {[IoLogoTwitter, RiLinkedinBoxFill, IoLogoInstagram].map(
                (Icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="border rounded-full p-2 hover:bg-black hover:text-white cursor-pointer duration-100" />
                  </motion.div>
                )
              )}
              <motion.div
                onClick={toggleMenu}
                className="cursor-pointer hidden max-md:flex"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMenuOpen ? (
                  <AiOutlineClose className="text-4xl text-white bg-black p-2 rounded-full max-md:text-3xl" />
                ) : (
                  <FiMenu className="text-4xl text-white bg-black p-2 rounded-full max-md:text-3xl" />
                )}
              </motion.div>
            </div>
          </ul>
        </nav>

        {/* This div is shown when menu is open on mobile */}
        {isMenuOpen && (
          <div className="items-center mt-40 gap-4 max-md:block bg-[#000000]/85 backdrop-blur-3xl fixed z-50 left-5 right-5 h-52">
            <ul className="text-white text-2xl justify-items-center font-amiri font-[600]">
              <li>
                <Link className="uppercase" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="uppercase" href="/">BookMe</Link>
              </li>
              <li>
              <Link className="uppercase" href="/">email</Link>
              </li>
              <li>
              <Link className="uppercase" href="/">downloadnow</Link>
              </li>
            </ul>
          </div>
        )}

        {/* <div className="text absolute left-0 right-0 bottom-48">
          <h1 className="font-amiri text-[80px] font-[400] text-center leading-[98px] max-md:text-[42px] max-md:leading-[52px]">
            Porfo Erdison <br /> UI/UX Interaction Designer <br /> Based in
            Poland
          </h1>
        </div> */}
      </main>
    </div>
  );
};

export default Navbar;
