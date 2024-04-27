"use client";
import { technologies } from "@/constant";
// import { SectionWrapper } from "@/hoc";
import React from "react";
// import About from "./About";
// import BallsCanvas from "./canvas/Ball";
// import Image from "next/image";
// import BallCanvas from "./canvas/Ball";
// import { BallCanvas } from "./canvas/Ball";
// import Image from "next/image";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="size-28" key={technology.name}>
          {/* <BallsCanvas icon={technology.icon} /> */}
        </div>
      ))}
    </div>
  );
};

export default Tech;
