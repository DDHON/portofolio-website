/* eslint-disable tailwindcss/no-custom-classname */
import React from "react";

export function GridBackground() {
  return (
    <div
      className="absolute left-0 top-0 flex h-screen w-full
       items-center justify-center bg-primary bg-grid-primary/[0.2]  dark:bg-grid-white/[0.03]"
    >
      {/* Radial gradient for the container to give a faded look */}
      <div
        // chnage the bg to bg-black-100, so it matches the bg color and will blend in
        className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white
         [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-primary"
      />
    </div>
  );
}
