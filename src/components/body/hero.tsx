"use client";

import React from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative scroll-margin flex bg-radial-gradient snap-center"
    >
      <motion.div
        className="absolute -top-[80px] right-36 max-xs:-right-44"
        initial={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 0.4,
        }}
      >
        <Image alt="tree" src={"/three.webp"} width={380} height={380} />
      </motion.div>

      <motion.div
        className="flex flex-col space-y-10 px-28 max-sm:px-10 h-[calc(100vh-80px)] justify-center"
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 0.4,
        }}
      >
        <div className="relative space-y-7 flex  flex-col mt-10">
          <div>
            <p className="text-sm">Data Science Club</p>
            <h1 className="text-[85px] leading-none max-sm-xs:text-7xl max-xs:text-5xl font-extrabold bg-gradient-to-b from-gradient-first via-gradient-second to-gradient-third bg-clip-text text-transparent">
              Welcomes You
            </h1>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-sm">Who We Are</p>
            <p className="ml-5 md-xs:w-[600px] text-justify font-light text-sm">
              Founded by a group of dedicated students, the Data Science Club
              brings together individuals from diverse academic backgrounds who
              share a common interest in data science, machine learning,
              artificial intelligence, and related technologies. Our members
              range from beginners to advanced practitioners, all united by a
              desire to explore the fascinating world of data.
            </p>
          </div>
          <div className="max-xs:flex justify-center">
            <Button className="px-10">Explore</Button>
            <Button variant={"ghost"}>Fun Time</Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
