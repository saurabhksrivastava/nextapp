import React from "react";
import Link from "next/link";
import { LinkPreview } from "./ui/link-preview";

export function Footer() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-4xl font-bold text-center mt-10 max-w-5xl mx-auto px-8">
          My Agency
        </h3>
        <div className="mt-5 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/services"}>Services</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
      </div>
      <footer className="text-neutral-800 dark:text-white text-center my-10">
        <p>
          &copy; 2024{" "}
          <LinkPreview
            url="https://www.linkedin.com/in/saurabh-kumar-srivastava/"
            imageSrc="https://res.cloudinary.com/saurabhksrivastava/image/upload/v1723808265/go2huf0hvqc7uqqzppw9.jpg"
            isStatic={true}
            // target="_blank"
            className="font-bold"
          >
            Saurabh Kumar Srivastava
          </LinkPreview>{" "}
          , All Rights Reserved
        </p>
      </footer>
    </>
  );
}
