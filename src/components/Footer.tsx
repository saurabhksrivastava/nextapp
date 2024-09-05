import React from "react";
import Link from "next/link";

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
          <a
            href="https://www.linkedin.com/in/saurabh-kumar-srivastava/"
            className="italic text-amber-600"
            target="_blank"
          >
            Saurabh Kumar Srivastava
          </a>
          , All Rights Reserved
        </p>
      </footer>
    </>
  );
}
