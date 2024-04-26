/* eslint-disable react/no-unescaped-entities */
"use client";
import { services } from "@/constant";
import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion.js";
import Image from "next/image";

const ServiceCard = ({ index, title, icon }: any) => {
  return (
    <Tilt
      className="w-full xs:w-[250px]"
      options={{ max: 45, scale: 1, speed: 450 }}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="green-pink-gradient w-full rounded-[20px] p-px shadow-card"
      >
        <div className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-tertiary px-12 py-5">
          <Image src={icon} alt={title} className="size-16 object-contain" />
          <h3 className="text-center text-[20px] font-bold text-white">
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
          <p className="section-sub-text">Introduction</p>
          <h2 className="section-head-text">Overview</h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary"
        >
          I'm a skilled software developer with experience in Typescript, and
          experience in frameworks like React, Node.js,Three.hs. I'm a quick
          leaner and collaborate closely with clients to create effecient,
          scalable, and use-friendly solution that solve real-world problems.
          Let's work together to bring your ideas to life!
        </motion.p>
        <div className="relative mt-20 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default About;
