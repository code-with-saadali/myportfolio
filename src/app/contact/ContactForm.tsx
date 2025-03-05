"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export const ContactForm = () => {
  const [formData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <motion.div
      className="p-8 border border-white/10 rounded-xl bg-black/50 backdrop-blur-sm"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-400 mb-2">Name</label>
          <motion.div whileHover={{ scale: 1.02 }}>
            <input
              type="text"
              className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </motion.div>
        </div>

        <div>
          <label className="block text-gray-400 mb-2">Email</label>
          <motion.div whileHover={{ scale: 1.02 }}>
            <input
              type="email"
              className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </motion.div>
        </div>

        <div>
          <label className="block text-gray-400 mb-2">Message</label>
          <motion.div whileHover={{ scale: 1.02 }}>
            <textarea
              rows={5}
              className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            ></textarea>
          </motion.div>
        </div>

        <motion.button
          className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 py-4 rounded-lg font-semibold hover:shadow-2xl hover:shadow-cyan-400/20 transition-all"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
};
