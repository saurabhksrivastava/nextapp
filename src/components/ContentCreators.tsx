"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";

export function ContentCreators() {
  return (
    <div className="mx-3">
      <div className="max-w-7xl my-32 mx-auto ">
        <BackgroundGradient className="rounded-[22px] max-w-7xl mx-auto p-4 sm:p-10 bg-white dark:bg-zinc-900 flex flex-col md:flex-col lg:flex-row justify-center items-center">
          <div className="flex-1 text-center">
            <div>
              <Image
                src="https://res.cloudinary.com/saurabhksrivastava/image/upload/v1725433632/ImageForDemoWebsite.png"
                width="512"
                height="512"
                alt="ImageDemo"
                className="min-w-full"
              />
            </div>
          </div>
          <div className="flex-1 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center leading-relaxed">
              Website for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">
                Coaches
              </span>
              ,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">
                Consultants
              </span>{" "}
              and {""}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">
                Social Media Content Creators
              </span>
            </h2>

            <p className="mt-5">
              Our Special web development service for coaches, consultants, and
              content creators is live. Click on the button below only if you
              want to build your Personal brand beyond Social Media.
            </p>
            <button className="p-[3px] my-7 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                Learn More
              </div>
            </button>
          </div>
        </BackgroundGradient>
      </div>
    </div>
  );
}
