import React from "react";
import { FaArrowRight } from "react-icons/fa6";
interface prop {
  projectTitle: string;
  projectDetail: string;
  image: string;
  liveLink: string;
}
const HomeProjectSection = ({
  liveLink,
  projectTitle,
  projectDetail,
  image,
}: prop) => {
  return (
    <div className="flex flex-col gap-3 py-5">
      <div className="w-full rounded-2xl overflow-hidden border border-neutral-600 ">
        <img
          src={image}
          alt="Project Image"
          className="max-h-[450px] w-full h-full  object-cover"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-2 justify-around mt-3 md:mt-7">
        <div>
          <h1 className="text-2xl font-bold text-left">{projectTitle}</h1>
        </div>
        <div className="flex flex-col gap-2  ">
          <p className="text-[16px] leading-[20px] font-normal text-stone-700 dark:text-[#b2b2b2] text-left">
            {projectDetail}
          </p>
          <a
            href={liveLink}
            target="_blank"
            className="text-[14px] leading-[18px] text-blue-500 font-normal flex items-center gap-1.5"
          >
            View Live
            <FaArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeProjectSection;
