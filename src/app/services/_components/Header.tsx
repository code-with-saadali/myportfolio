
'use client';
import { motion } from 'framer-motion';

interface HeaderProps {
  activeSection: number;
}

export const Header = ({ activeSection }: HeaderProps) => (
  <motion.header
    className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10"
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5, ease: 'circOut' }}
  >
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      <nav className="hidden lg:flex gap-8 items-center">
        {['Solutions', 'Technology', 'Process', 'Contact'].map((item, index) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`relative px-4 py-2 ${activeSection === index ? 'text-cyan-400' : 'text-white/70'}`}
            whileHover={{ scale: 1.05 }}
          >
            {item}
            {activeSection === index && (
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-400"
                layoutId="nav-underline"
              />
            )}
          </motion.a>
        ))}
      </nav>
    </div>
  </motion.header>
);