"use client";
import React from "react";

import { motion } from "framer-motion";

import { staggerContainer } from "../utils/motion";
interface props {
  Component: any;
  idName: string;
}
const SectionWrapper = ({ Component, idName }: props) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="padding-x relative z-0 mx-auto max-w-7xl"
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
