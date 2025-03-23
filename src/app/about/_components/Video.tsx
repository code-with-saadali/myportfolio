"use client";
import { motion } from "framer-motion";
import React from "react";

const Video = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      className="px-6 lg:px-20 py-20 lg:py-28 relative overflow-hidden"
    >
      <div className="relative w-full max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden border border-white/20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-lg shadow-2xl">
        {/* Video Container */}
        <div className="aspect-video relative group">
          {/* Video placeholder - Replace with actual video component */}
          <video 
            className="w-full h-full object-cover"
            poster="https://placehold.co/1920x1080"
            controls
            muted
            autoPlay
            loop
          >
            <source src="/your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Play Button Overlay */}
          <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center"
            >
              <svg className="w-8 h-8 text-white ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              </svg>
            </motion.div>
          </button>
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-8 left-8 right-8 text-white z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* <h2 className="text-3xl font-bold">See Us in Action</h2> */}
            {/* <p className="max-w-xl text-lg opacity-90">Witness how we transform ideas into extraordinary digital experiences</p> */}
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
      </div>
    </motion.div>
  );
};

export default Video;