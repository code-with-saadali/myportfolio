import { motion } from "framer-motion";
import React from "react";

const Menu = () => {
  return (
    <div className="grid place-content-center justify-center gap-4 bg-transparent text-black max-sm:gap-2">
      <FlipLink href="/voice-agent">Home</FlipLink>
      <FlipLink href="#">Book</FlipLink>
      <FlipLink href="#">Email</FlipLink>
      <FlipLink href="#">Download Now</FlipLink>
    </div>
  );
};

export default Menu;

// For Animation

const DURATION = 0.25;
const STAGGER = 0.025;

interface FlipLinkProps {
  children: React.ReactNode;
  href: string;
}

const FlipLink: React.FC<FlipLinkProps> = ({ children, href }) => {
  // Ensure children is a string before splitting
  const text = typeof children === "string" ? children : "";

  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-extrabold uppercase sm:text-7xl md:text-8xl lg:text-9xl hover:text-opacity-80 transition-colors duration-300 max-sm:text-2xl max-sm:font-bold"
      style={{
        lineHeight: 0.85,
      }}
    >
      <div>
        {text.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {text.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
