/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";
import React from "react";
import ComputersCanvas from "./canvas/Computers";
// import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  return (
    <section className="relative mx-auto h-screen w-full">
      <div className="padding-x  absolute inset-0 top-[120px] mx-auto flex max-w-7xl flex-row items-start gap-5">
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="size-5 rounded-full bg-[#915eff]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>
        <div className="">
          <h1 className="hero-head-text text-white">
            Hi, I'm <span className="text-[#915eff]">Dhoni</span>
          </h1>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              " I'm Next Developer, i Develop user Interface",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "I'm Next Developer, i Develop user coding",
              1000,
              "I'm Next Developer, i Develop user what i know",
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="hero-sub-text mt-2 text-wrap text-white-100"
            repeat={Infinity}
          />
          {/* <p className="">
            I'm Next Developer, i Develop user interfaces and web aplication
          </p> */}
        </div>
      </div>

      <ComputersCanvas />
      <div className="absolute bottom-32 flex w-full cursor-pointer items-center justify-center xs:bottom-10">
        <Link
          href="#about"
          className="flex h-[64px] w-[35px] cursor-pointer items-center justify-center rounded-3xl border-4 border-secondary p-2"
        >
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="mb-1 size-3 cursor-pointer rounded-full bg-secondary"
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
