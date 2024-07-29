"use client";

import React from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { motion } from "framer-motion";

const UpcomingEvents = () => {
  return (
    <section className="flex mt-10 md:h-screen items-center snap-center">
      <motion.div
        className="flex px-16 max-sm:px-10 lg-md:justify-between max-lg-md:space-x-16 max-md:space-x-0 max-md:space-y-5  w-full max-md:flex-col"
        initial={{ opacity: 0, translateY: 20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
        }}
      >
        <div className="w-[35%] max-md:w-full max-lg-md:w-[40%] bg-white/10 md:h-[70vh] h-[400px] "></div>
        <div className="w-[50%] max-md:w-full space-y-4">
          <div className="flex items-center space-x-3 max-md:hidden">
            <Separator className="bg-white w-7" />
            <span className="font-normal text-2xl max-lg:text-xl ">
              Upcoming Events
            </span>
          </div>
          <h1 className="text-7xl max-lg:text-5xl font-medium bg-gradient-to-b from-gradient-first via-gradient-second to-gradient-third bg-clip-text text-transparent max-md:text-center">
            Hackathon ?!
          </h1>
          <p className="max-xs:text-justify font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
          <p className="max-xs:text-justify font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
          <div className="max-md:justify-center flex">
            <Link href={"#"}>
              <Button asChild>
                <div className="space-x-2">
                  <span>Register now</span>
                  <div className="w-2 h-2 rounded-full bg-[#5D00F4]" />
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default UpcomingEvents;
