import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";

import WorkExperience from "./WorkExperience";
import Studies from "./Studies";
import TechnicalSkill from "./TechnicalSkill";

const Class =
  "px-3 py-1 rounded-full text-sm flex items-center border border-neutral-600 gap-2 hover:bg-neutral-700/20";
const AboutDetail = () => {
  return (
    <div
      id="intro"
      className="w-full  flex-1 flex flex-col gap-5 items-center md:items-start mt-10"
    >
      <div className="w-40 xl:w-44 flex items-center gap-3 px-3 py-2 rounded-full bg-white/10 hover:bg-blue-400/50 border border-blue-400 ">
        <div className="size-3 bg-green-400 rounded-3xl"></div>
        <p className="text-xs md:text-sm">Available for Work</p>
      </div>
      <div className="flex flex-col gap-5  mt-4 mx-auto">
        <h1
          className={`font-semibold md:font-black text-[38px] md:text-[45px] xl:text-6xl text-center md:text-left`}
        >
          Raj Kishan Verma
        </h1>
        <h2 className="text-2xl text-center md:text-left -mt-4 md:-mt-2">
          Frontend Developer
        </h2>
        <div className="flex items-center gap-3 mx-auto md:mx-0">
          <div className={Class}>
            <FaGithub className="text-[22px] md:text-[18px]" />
            <p className="hidden md:block">Github</p>
          </div>
          <div className={Class}>
            <FaLinkedin className="text-[22px] md:text-[18px]" />
            <p className="hidden md:block">LinkedIn</p>
          </div>
          <div className={Class}>
            <FaSquareXTwitter className="text-[22px] md:text-[18px]" />
            <p className="hidden md:block">Twitter/X</p>
          </div>
          <div className={Class}>
            <LuMail className="text-[22px] md:text-[18px]" />
            <p className="hidden md:block">Email</p>
          </div>
        </div>
        <p className="w-full md:w-3/4 text-center md:text-left max-sm:mx-auto dark:text-stone-400">
          Lorem ipsum dolor sit amet adipisicing elit. Corporis cupiditate quam
          iste accusantium quos nesciunt laborum beatae dignissimos provident
          perferendis vero veritatis, illum saepe voluptate. Reprehenderit
          perferendis alias fugiat iste exercitationem quas, labore hic?
        </p>
      </div>
      <WorkExperience />
      <Studies />
      <TechnicalSkill />
    </div>
  );
};

export default AboutDetail;
