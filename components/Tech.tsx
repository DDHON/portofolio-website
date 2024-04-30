/* eslint-disable react/no-unescaped-entities */
"use client";
import { technologies } from "@/constant";
// import { SectionWrapper } from "@/hoc";
import Tilt from "react-parallax-tilt";
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/utils/motion";
import { title } from "process";
import Image from "next/image";
// import About from "./About";
// import BallsCanvas from "./canvas/Ball";
// import Image from "next/image";
// import BallCanvas from "./canvas/Ball";
// import { BallCanvas } from "./canvas/Ball";
// import Image from "next/image";
const TechCard = ({ index, name, icon }) => {
  return (
    <Tilt className="size-[112px]" perspective={500} scale={1.1}>
      <motion.div className="green-pink-gradient size-[114px] rounded-full p-px shadow-card">
        <div className="flex size-[112px] items-center justify-evenly  rounded-full bg-tertiary px-[20px] ">
          <Image src={icon} alt={title} className="size-16 object-contain" />
        </div>
      </motion.div>
    </Tilt>
  );
};
const Tech = () => {
  return (
    <>
      <>
        <motion.section
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className={`padding relative z-0 mx-auto max-w-7xl`}
        >
          <span className="hash-span" id="about">
            &nbsp;
          </span>

          <motion.div variants={textVariant()}>
            <p className="section-sub-text text-center">MY TOOLS</p>
            <h2 className="section-head-text text-center">Technologies</h2>
          </motion.div>

          <div className="relative mt-20 flex flex-wrap justify-center gap-10">
            {technologies.map((tech, index) => (
              <TechCard key={tech.name} index={index} {...tech} />
            ))}
          </div>
        </motion.section>
      </>
    </>
    // <div className="flex flex-row flex-wrap justify-center gap-10">
    //   {technologies.map((technology) => (
    //     <div className="size-28" key={technology.name}>
    //     <Tilt>

    //     </Tilt>
    //       {/* <BallsCanvas icon={technology.icon} /> */}
    //     </div>
    //   ))}
    // </div>
  );
};

export default Tech;
