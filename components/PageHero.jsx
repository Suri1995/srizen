"use client";

import { motion } from "framer-motion";
import Container from "./Container";

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="relative bg-navy-gradient pt-40 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-petal-glow" />
      <div
        aria-hidden
        className="absolute -right-24 -top-24 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #00C896, transparent 70%)" }}
      />
      <Container className="relative">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow mb-4"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-white text-4xl md:text-6xl leading-[1.05] max-w-3xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/65 text-base md:text-lg mt-6 max-w-xl leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </Container>
    </section>
  );
}
