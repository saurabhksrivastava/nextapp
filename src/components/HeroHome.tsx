"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import Link from "next/link";
import React from "react";

export function HeroHome() {
  return (
    <HeroHighlight className=" py-40 items-center">
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
        We Build Your{" "}
        <Highlight className="text-black dark:text-white">
          Stronger Presence
        </Highlight>{" "}
        Online
      </motion.h1>
      <motion.p
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
        className="text-lg px-4 md:text-xl lg:text-xl mt-5 pt-5 text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        My Agency stands out as the ideal selection for fulfilling your web
        development requirements. Our exceptional team of developers and
        designers is here to propel you ahead in the digital realm. Allow us to
        aid you in crafting a website that will not only meet but surpass your
        anticipations.
      </motion.p>
      <div className="flex justify-center items-center">
        <Link href={"/"}>
          <button className="p-[3px] my-7 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              Get Started
            </div>
          </button>
        </Link>
      </div>
    </HeroHighlight>
  );
}
