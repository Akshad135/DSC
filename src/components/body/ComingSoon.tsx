"use client";

import React from "react";
import { Separator } from "../ui/separator";
import { motion } from "framer-motion";

const ComingSoon = () => {
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
        <div className="flex items-center space-x-3 max-md:hidden">
          <Separator className="bg-white w-7" />
          <span className="font-normal text-2xl max-lg:text-xl ">
            Coming Soon
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default ComingSoon;
