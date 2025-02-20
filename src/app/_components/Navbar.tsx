'use client';
import Link from "next/link";
import { useState } from "react";
import { RiTwitterFill, RiLinkedinBoxFill, RiInstagramLine, RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { link: "Home", url: "/home" },
    { link: "About", url: "/about" },
    { link: "Services", url: "/services" },
    { link: "Faqs", url: "/faqs" },
    { link: "Contact me", url: "/contact" },
  ];

  return (
    <header className="bg-black fixed font-sans w-full top-0 left-0 z-[100]">
      <nav className="mx-auto px-20 max-lg:px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="logo">
            <div className="logoname">
              <button className="button" data-text="Awesome">
                <span className="actual-text">&nbsp;Saadali&nbsp;</span>
                <span aria-hidden="true" className="hover-text">
                  &nbsp;saadali&nbsp;
                </span>
              </button>
            </div>
          </div>

          <div className="hidden md:flex space-x-6 text-white">
            {links.map((l, i) => (
              <Link key={i} href={l.url} className="cursor-pointer text-white font-amiri uppercase group">
                <div className="relative overflow-hidden">
                  <p className="group-hover:-translate-y-7 text-lg duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                    {l.link}
                  </p>
                  <p className="absolute top-7 text-lg left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                    {l.link}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none border rounded-full p-2">
              {isMobileMenuOpen ? (
                <RiCloseFill className="text-xl" />
              ) : (
                <RiMenu3Fill className="text-xl" />
              )}
            </button>
          </div>

          <div className="icons flex items-center gap-3 max-md:hidden">
            <RiTwitterFill className="text-white text-[40px] p-2 border rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-black cursor-pointer duration-100"/>
            <RiLinkedinBoxFill className="text-white text-[40px] p-2 border rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-black cursor-pointer duration-100"/>
            <RiInstagramLine className="text-white text-[40px] p-2 border rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-black cursor-pointer duration-100"/>
          </div>
        </div>

        
        <motion.div
          initial={{ opacity: 0, x: '100%' }}  
          animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? '0%' : '100%' }} 
          exit={{ opacity: 0, x: '100%' }}  
          transition={{ duration: 0.5, ease: 'easeInOut' }} 
          className={`${isMobileMenuOpen ? "block" : "hidden"
          } md:hidden bg-black text-center text-white font-amiri uppercase space-y-4 pt-4 pb-6`}
        >
          {links.map((link, i) => (
            <Link key={i} href={link.url} className="block px-4 py-2">
              {link.link}
            </Link>
          ))}
        </motion.div>
      </nav>
    </header>
  );
}

