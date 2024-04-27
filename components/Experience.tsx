"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiences } from "@/constant";
import { staggerContainer, textVariant } from "@/utils/motion";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

const ExperienceCard = ({ experience, index }: any) => {
  const { ref: myRef, inView: visibleElement } = useInView({
    triggerOnce: true,
  });
  return (
    <VerticalTimelineElement
      visible={visibleElement}
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div ref={myRef} className="flex size-full items-center justify-center">
          <Image
            src={experience.icon}
            alt={experience.title}
            className="size-3/5 object-contain"
          />
        </div>
      }
    >
      <div className="">
        <h3 className="text-[24px] font-bold text-white">{experience.title}</h3>
      </div>
      <p
        className=" text-[16px] font-semibold text-secondary"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
      <ul className="ml-5 mt-5 list-disc space-y-2">
        {experience.points.map((point: any, index: any) => (
          <li
            key={`experience-point-${index}`}
            className="pl-1 text-[14px] tracking-wider text-white-100"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
const Experience = () => {
  return (
    <>
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className={`padding relative z-0 mx-auto max-w-7xl`}
      >
        <span className="hash-span" id="experience">
          &nbsp;
        </span>
        <motion.div variants={textVariant()}>
          <p className="section-sub-text">What I have done so far</p>
          <h2 className="section-head-text">Work Experince</h2>
        </motion.div>
        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </div>
      </motion.section>
    </>
  );
};

export default Experience;
