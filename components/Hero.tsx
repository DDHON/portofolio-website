/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";
import React from "react";
import ComputersCanvas from "./canvas/Computers";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className=" relative h-screen w-full">
      <div className="padding-x  absolute inset-0 top-[120px] mx-auto flex max-w-7xl flex-row items-start gap-5">
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="size-5 rounded-full bg-[#915eff]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>
        <div className="">
          <h1 className="hero-head-text text-white">
            Hi, I'm <span className="text-[#915eff]">Dhoni</span>
          </h1>
          <p className="hero-sub-text mt-2 text-wrap text-white-100">
            I'm Next Developer, i Develop user interfaces and web aplication
          </p>
        </div>
      </div>

      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center cursor-pointer">
        <Link
          href="#about"
          className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-center p-2 cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1 cursor-pointer"
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
