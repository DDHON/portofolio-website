// import Image from "next/image";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Feedbacks from "@/components/Feedbacks";
import Hero from "@/components/Hero";

import Tech from "@/components/Tech";
import Works from "@/components/Works";
import StarsCanvas from "@/components/canvas/Stars";

export default function Home() {
  return (
    <>
      <div className="">
        <StarsCanvas />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
      </div>
    </>
  );
}
