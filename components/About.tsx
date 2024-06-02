/* eslint-disable react/no-unescaped-entities */
"use client";
import { services } from "@/constant";
import { motion } from "framer-motion";
import React from "react";
import Tilt from "react-parallax-tilt";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion.js";
import Image from "next/image";

const ServiceCard = ({ index, title, icon }: any) => {
  return (
    <Tilt
      className="w-full rounded-[20px] xs:w-[250px]"
      perspective={500}
      glareEnable={true}
      glareMaxOpacity={0.1}
      scale={1.02}
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
        <motion.div variants={textVariant()} className="text-center">
          <p className="section-sub-text ">Introduction</p>
          <h2 className="section-head-text">Overview</h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 justify-center  text-center text-[17px] leading-[30px] text-secondary"
        >
          I'm a skilled front-end developer with a strong proficiency in
          TypeScript. I have extensive experience working with frameworks such
          as React and Next.js. I'm a quick learner and excel at collaborating
          closely with clients to create efficient, scalable, and user-friendly
          solutions that solve real-world problems. Let's work together to bring
          your ideas to life!
        </motion.p>
        <div className="relative mt-20 flex flex-wrap justify-center gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default About;
