"use client";
import { motion } from "framer-motion";
import { FaqItem } from "./FaqItem";
import { faqItems } from "../../faqs/_components/constants";

export const FaqSection = () => {
  return (
    <section className="py-20 container mx-auto px-4">
      <motion.div
        className="grid gap-8 max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {faqItems.map((item, index) => (
          <FaqItem key={item.question} {...item} index={index} />
        ))}
      </motion.div>
    </section>
  );
};
