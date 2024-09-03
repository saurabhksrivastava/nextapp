"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export function AboutSection() {
  return (
    <>
      <div>
        <h2 className="text-4xl font-bold text-center mt-10 max-w-5xl mx-auto px-8">
          About us
        </h2>
        <p className="max-w-6xl text-lg py-8 text-center mx-auto px-8">
          We strive to help our clients achieve their online goals, whether
          designing a brand-new website or optimizing an existing one. We use
          the latest technologies to develop the best web solutions for our
          customers. Contact us today to find out how we can help{" "}
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>

      <div className="flex justify-center mb-12">
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-semibold text-white uppercase backdrop-blur-3xl">
            Know More
          </span>
        </button>
      </div>
    </>
  );
}

export const projects = [
  {
    title: "7+ Years of Experience",
    description:
      "With over seven years of industry expertise, I bring a wealth of experience to every project, ensuring unparalleled solutions from web design and development to motion graphics and from digital marketing to UX research.",
    link: "/",
  },
  {
    title: "300+ Projects Completed",
    description:
      "My track record of 300+ completed projects reflects my commitment to delivering results-driven websites, apps, graphics, motion graphics and Digital Marketing services that resonate with audiences and achieve goals.",
    link: "/",
  },
  {
    title: "5⭐ Rating ",
    description:
      "With an impressive 4.9 out of 5 rating, client satisfaction is at the core of my approach, as I consistently exceed expectations through impeccable service and outstanding results.",
    link: "/",
  },
];
