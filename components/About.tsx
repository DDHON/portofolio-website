"use client";
import { services } from "@/constant";
import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from "../utils/motion";
import Image from "next/image";
import { SectionWrapper } from "../hoc";
const ServiceCard = ({ index, title, icon }: any) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <Image src={icon} alt={title} className="size-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="section-sub-text">Introduction</p>
        <h2 className="section-head-text">Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in Typescript, and
        experience in frameworks like React, Node.js,Three.hs. I'm a quick
        leaner and collaborate closely with clients to create effecient,
        scalable, and use-friendly solution that solve real-world problems.
        Let's work together to bring your ideas to life!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper({ Component: About, idName: "about" });
