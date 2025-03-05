"use client";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useEffect } from "react";

interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
  responsibilities?: string[];
  achievements?: string[];
  tech?: string[];
}

interface ExperienceItemProps extends Experience {
  index: number;
}

const AboutPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
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

  const [activeExperience, setActiveExperience] = useState<number | null>(null);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const experiences: Experience[] = [
    {
      year: "2022-Present",
      role: "Senior Full Stack Developer",
      company: "Tech Innovators Inc",
      description:
        "Leading development of enterprise-scale web applications using modern technologies.",
      responsibilities: [
        "Architecting scalable web applications",
        "Managing a team of developers",
        "Implementing security best practices",
      ],
      achievements: [
        "Increased application performance by 40%",
        "Led a team to deliver 10+ successful projects",
      ],
      tech: ["React", "Node.js", "AWS", "GraphQL"],
    },
    {
      year: "2019-2022",
      role: "Frontend Engineer",
      company: "Digital Solutions Co",
      description:
        "Implemented responsive UIs and optimized web performance for client projects.",
      responsibilities: [
        "Developed pixel-perfect UIs",
        "Optimized website speed and SEO",
      ],
      achievements: [
        "Improved page load speed by 60%",
        "Developed 20+ reusable UI components",
      ],
      tech: ["TypeScript", "Next.js", "Webpack", "Jest"],
    },
    {
      year: "2017-2019",
      role: "Junior Developer",
      company: "Startup Hub",
      description:
        "Contributed to various web projects and learned modern development practices.",
      responsibilities: [
        "Developed basic web applications",
        "Collaborated with senior developers",
      ],
      achievements: [
        "Completed 5+ client projects",
        "Learned modern development workflows",
      ],
      tech: ["JavaScript", "React", "Firebase"],
    },
  ];

  return (
    <div data-scroll-container
      className="px-[8%] py-20 max-2xl:px-10 max-lg:px-5 min-h-screen bg-black text-white"
      ref={containerRef}
    >
      <main className="px-4 py-20">
        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
            >
              About Me
            </motion.h1>
            <motion.div
              className="text-xl text-gray-400 space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p>
                Passionate developer with 5+ years of experience in creating
                digital solutions.
              </p>
              <p className="opacity-80">
                Specializing in scalable web applications with modern
                technologies.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Experience Timeline */}
        <motion.section className="relative">
          <div className="absolute left-1/2 w-1 bg-gradient-to-b from-cyan-400/20 to-transparent h-full -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, index) => (
              <ExperienceItem
                key={index}
                {...exp}
                index={index}
                isActive={activeExperience === index}
                onClick={() =>
                  setActiveExperience(activeExperience === index ? null : index)
                }
              />
            ))}
          </div>
          <motion.div
            style={{ scaleY }}
            className="fixed h-full w-[8px] bg-white origin-top top-0 right-0 left-[99.80%] rounded-full"
          ></motion.div>
        </motion.section>
      </main>

      {/* Floating Particles */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{ y }} // Using the y variable here
      >
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

const ExperienceItem = ({
  year,
  role,
  company,
  description,
  responsibilities,
  achievements,
  tech,
  index,
  isActive,
  onClick,
}: ExperienceItemProps & { isActive: boolean; onClick: () => void }) => (
  <motion.div
    className={`relative md:flex items-center gap-8 group cursor-pointer ${
      index % 2 === 1 ? "md:flex-row-reverse" : ""
    }`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ delay: index * 0.2 }}
    onClick={onClick}
  >
    {/* Timeline Dot */}
    <div className="hidden md:block w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10" />

    {/* Left Side Content (Year) */}
    <div
      className={`md:w-1/2 md:${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}
    >
      <motion.div
        className="text-gray-400 mb-2 font-mono text-sm"
        whileHover={{ x: index % 2 === 0 ? -10 : 10 }}
      >
        {year}
      </motion.div>
    </div>

    {/* Right Side Content (Experience Details) */}
    <div className="md:w-1/2 relative">
      <motion.div
        className="p-6 border border-white/10 rounded-xl bg-black/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all relative overflow-hidden"
        animate={isActive ? { scale: 1.03 } : { scale: 1 }}
      >
        <h3 className="text-2xl font-bold mb-2">{role}</h3>
        <p className="text-cyan-400 mb-2 font-medium">{company}</p>
        <p className="text-gray-400 mb-4">{description}</p>

        {/* Expanded Details (When Clicked) */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-2"
            >
              {responsibilities &&
                responsibilities.map((res, i) => (
                  <p key={i} className="text-sm text-gray-300">
                    • {res}
                  </p>
                ))}
              {achievements &&
                achievements.map((ach, i) => (
                  <p key={i} className="text-sm text-green-400">
                    ✔ {ach}
                  </p>
                ))}
              {tech && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-white/5 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  </motion.div>
);

export default AboutPage;
