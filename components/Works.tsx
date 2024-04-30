"use client";
import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import { projects } from "@/constant";
import { github } from "@/public/assets";
import { fadeIn, staggerContainer, textVariant } from "@/utils/motion";
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  // eslint-disable-next-line camelcase
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        perspective={500}
        scale={1}
        className="w-full rounded-2xl bg-tertiary p-5 sm:w-[360px]"
      >
        <div className="relative h-[230px] w-full">
          <Image
            src={image}
            alt="project_image"
            className="size-full rounded-2xl object-cover"
          />

          <div className=" absolute inset-0 m-3 flex justify-end">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient flex size-10 cursor-pointer items-center justify-center rounded-full"
            >
              <Image
                src={github}
                alt="source code"
                className="size-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-[24px] font-bold text-white">{name}</h3>
          <p className="mt-2 text-[14px] text-secondary">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`padding relative z-0 mx-auto max-w-7xl`}
      >
        <span className="hash-span" id="work">
          &nbsp;
        </span>
        <motion.div variants={textVariant()}>
          <p className="section-sub-text text-center">My work</p>
          <h2 className="section-head-text text-center">Projects.</h2>
        </motion.div>

        <div className="mt-20 flex flex-wrap gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default Works;
