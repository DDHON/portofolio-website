import React from "react";

import { motion } from "framer-motion";

import { staggerContainer } from "../utils/motion";
interface WrapperProps {
  Component: any; // Tipe dari komponen yang akan dibungkus
  idName: string;
}
const SectionWrapper = ({ Component, idName }: WrapperProps) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`relative z-0 mx-auto max-w-7xl px-16`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
