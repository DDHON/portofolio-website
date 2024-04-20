// import Image from "next/image";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Feedbacks from "@/components/Feedbacks";
import Hero from "@/components/Hero";

import Navbar from "@/components/Navbar";
import Tech from "@/components/Tech";
import Works from "@/components/Works";
import Stars from "@/components/canvas/Stars";

export default function Home() {
  return (
    <>
      <div className="relative">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <Stars />
        </div>
      </div>
    </>
  );
}
