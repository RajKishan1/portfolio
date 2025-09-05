import React from "react";
import { IoCalendar } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
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
      <div className="w-44 md:w-48 xl:w-52 flex items-center gap-3 px-3 py-2 rounded-full bg-white/10 hover:bg-blue-400/50 border border-blue-400 ">
        <div className="size-3 bg-green-500 rounded-3xl"></div>
        <p className="text-xs md:text-sm">Available for Work</p>
        <IoIosArrowForward />
      </div>
      <div className="flex flex-col gap-4 mt-4 mx-auto">
        <h1
          className={`font-semibold md:font-black text-[38px] md:text-[45px] xl:text-6xl text-center md:text-left`}
        >
          Raj Kishan Verma
        </h1>
        <h2 className="text-2xl text-center md:text-left">
          Frontend Developer
        </h2>
        <div className="flex items-center gap-3 mx-auto md:mx-0">
          <div className={Class}>
            <FaGithub />
            <p className="hidden md:block">Github</p>
          </div>
          <div className={Class}>
            <BsLinkedin />
            <p className="hidden md:block">LinkedIn</p>
          </div>
          <div className={Class}>
            <FaSquareXTwitter />
            <p className="hidden md:block">Twitter/X</p>
          </div>
          <div className={Class}>
            <IoIosMail />
            <p className="hidden md:block">Email</p>
          </div>
        </div>
        <p className="w-5/6 md:w-3/4 text-center md:text-left max-sm:mx-auto ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
          cupiditate quam iste accusantium quos nesciunt laborum beatae
          dignissimos provident perferendis vero veritatis, illum saepe
          voluptate. Reprehenderit perferendis alias fugiat iste exercitationem
          quas, labore hic?
        </p>
      </div>
      <WorkExperience />
      <Studies />
      <TechnicalSkill />
    </div>
  );
};

export default AboutDetail;
