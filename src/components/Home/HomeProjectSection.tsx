import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const HomeProjectSection = () => {
  return (
    <div className="flex flex-col gap-3 py-5">
      <div className="w-full rounded-2xl overflow-hidden border border-neutral-600 ">
        <div></div>
        <img src="/me.png" alt="" />
      </div>
      <div className="flex justify-around px-5 mt-7">
        <div>
          <h1 className="text-2xl font-bold text-left">
            Building Once UI, a Customizable Design System
          </h1>
        </div>
        <div className="flex flex-col gap-2  ">
          <p className="text-sm text-neutral-500 text-left">
            Development of a flexible and highly customizable design system
            using Next.js for front-end and Figma for design collaboration.
          </p>
          <div className="text-xs text-blue-500 font-medium flex items-center gap-1.5">
            Read Case Study
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProjectSection;
