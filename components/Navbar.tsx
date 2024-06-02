"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
// import { logo, menu, close } from "@/public/assets";
import { menu, close, navbrand } from "@/public/assets";
import { navLinks } from "@/constant";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, settoggle] = useState(false);
  return (
    <nav className="padding-x fixed top-0 z-50  flex w-full  items-center py-5 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 scroll-smooth"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image
            src={navbrand}
            alt="logo"
            className="size-9 fill-white object-contain"
          />
          <p className="flex cursor-pointer text-[18px] font-bold text-white">
            Ddhon{" "}
            <span className="hidden sm:block">&nbsp; | Muhammad Ramadhoni</span>
          </p>
        </Link>
        <ul className="hidden list-none flex-row gap-10 sm:flex">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"} cursor-pointer text-[18px] font-medium hover:text-white`}
              onClick={() => setActive(link.title)}
            >
              <Link href={`#${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-1 items-center justify-end sm:hidden ">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            className="size-[29px] cursor-pointer object-contain "
            onClick={() => settoggle(!toggle)}
          />
          <div
            className={`${!toggle ? "hidden" : "flex"} black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
          >
            <ul className=" flex list-none flex-col items-start gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"} cursor-pointer text-[16px] font-medium hover:text-white`}
                  onClick={() => {
                    settoggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <Link href={`#${link.id}`}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
