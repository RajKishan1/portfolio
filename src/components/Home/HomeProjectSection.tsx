import React from "react";
import { FaArrowRight } from "react-icons/fa6";
interface prop {
  projectTitle: string;
  projectDetail: string;
  image: string;
}
const HomeProjectSection = ({ projectTitle, projectDetail, image }: prop) => {
  return (
    <div className="flex flex-col gap-3 py-5">
      <div className="w-full rounded-2xl overflow-hidden border border-neutral-600 ">
        <div></div>
        <img
          src={image}
          alt="Project Image"
          className="max-h-[450px] w-full h-full  object-cover"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-2 justify-around mt-3 md:mt-7">
        <div>
          <h1 className="text-2xl font-bold text-left">
            {projectTitle} Building Once UI, a Customizable Design System
          </h1>
        </div>
        <div className="flex flex-col gap-2  ">
          <p className="text-[16px] leading-[20px] font-normal text-stone-700 dark:text-[#b2b2b2] text-left">
            {projectDetail}Development of a flexible and highly customizable
            design system using Next.js for front-end and Figma for design
            collaboration.
          </p>
          <div className="text-[14px] leading-[18px] text-blue-500 font-normal flex items-center gap-1.5">
            Read Case Study
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProjectSection;
