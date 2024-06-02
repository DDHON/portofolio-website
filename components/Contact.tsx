"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { slideIn, staggerContainer } from "@/utils/motion";
import { GlobeDemo } from "./Globe";
// import { MoveBorder } from "./ui/moving-border";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { target } = e;
    const { name, value } = target;

    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_k34rt8c",
        "template_8xosbl4",
        {
          from_name: form.name,
          to_name: "Muhammad Ramadhoni",
          from_email: form.email,
          to_email: "muhammadramadhoni612@gmail.com",
          message: form.message,
        },
        "t7uGHkAsvXPZg-jSr"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something wnet wrong");
        }
      );
  };
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`padding relative z-0 mx-auto max-w-7xl`}
    >
      <span className="hash-span" id="contact">
        &nbsp;
      </span>

      <div className="flex flex-col-reverse gap-10 overflow-hidden lg:mt-12 lg:flex-row">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="w-full flex-[0.75] rounded-2xl bg-black-100 p-8"
        >
          <p className="section-sub-text">Get in Touch</p>
          <h3 className="section-head-text">Contact</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="mb-4 font-medium text-white">Your name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="w-full rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary"
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-4 font-medium text-white">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="w-full rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary"
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-4 font-medium text-white">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="w-full rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary"
              />
            </label>
            <button
              type="submit"
              className="w-fit rounded-xl bg-tertiary px-8 py-3 font-bold text-white shadow-md shadow-primary outline-none"
            >
              {loading ? "Sending..." : "send"}
            </button>
          </form>
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
        >
          <GlobeDemo />
          {/* <EarthCanvas /> */}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
