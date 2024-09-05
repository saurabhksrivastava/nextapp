"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import React from "react";

export function HeroBlog() {
  return (
    <HeroHighlight className="min-h-min py-10">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-4xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 mt-10 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        <Highlight className="text-black dark:text-white">BLOG</Highlight>{" "}
      </motion.h1>
    </HeroHighlight>
  );
}
