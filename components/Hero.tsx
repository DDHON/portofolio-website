/* eslint-disable react/no-unescaped-entities */
"use client";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React from "react";
// import ComputersCanvas from "./canvas/Computers";
// import Image from "next/image";
import { FaRegFilePdf } from "react-icons/fa6";
import { GridBackground } from "./ui/GridBg";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextEffect";
import MagicButton from "./ui/MagicButton";

const Hero = () => {
  return (
    <section className="relative mx-auto h-screen w-full overflow-x-hidden">
      <GridBackground />
      <div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <p className="max-w-80 text-center text-xs uppercase tracking-widest text-blue-100">
            Dynamic Web Magic with Next.js
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="design ideas into pixel perfect and responsive websites"
            className="mb-3 text-center text-[40px] capitalize md:text-4xl lg:text-5xl"
          />

          <p className="mb-7 text-center text-sm md:text-lg md:tracking-wider lg:text-2xl">
            Hi! I&apos;m Muhammad Ramadhoni, a Next.js Developer based in
            Indonesia.
          </p>
          <div className="flex flex-row items-center justify-center gap-4">
            <a href="#contact">
              <MagicButton title="Hire Me" />
            </a>
            <a href="#about">
              <MagicButton
                title="Dowload CV"
                icon={<FaRegFilePdf />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
      {/* 
      <div className="flex h-full max-w-screen-xs flex-col items-center justify-center">
        <div className=" text-center">
          <TextEff words={words} className="capitalize " />
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
