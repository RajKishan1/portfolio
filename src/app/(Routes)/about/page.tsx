import AboutDetail from "@/components/about/AboutDetail";
import React from "react";
import { FaEarthAsia } from "react-icons/fa6";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { GiBookCover } from "react-icons/gi";
import { RiToolsFill } from "react-icons/ri";
import { LuFileUser } from "react-icons/lu";
interface prop {
  text: string;
}
const Title = ({ text }: prop) => {
  return <a className="text-sm xl:text-lg">{text}</a>;
};
const page = () => {
  const Class =
    "flex gap-2.5 items-center hover:pl-1 transition duration-500 text-neutral-800 dark:text-neutral-400 hover:text-neutral-200";
  return (
    <div className="relative flex flex-col md:flex-row min-h-[80vh] px-4">
      <div className="hidden md:sticky top-30 w-1/5 xl:w-1/6 h-[70vh] md:flex items-center pl-3">
        <div className="flex flex-col gap-4">
          <a href="#intro" className={Class}>
            <LuFileUser /> <Title text="Introduction" />
          </a>{" "}
          <a href="#experience" className={Class}>
            <LiaNetworkWiredSolid /> <Title text="Work Experience" />
          </a>
          <a href="#studies" className={Class}>
            <GiBookCover />
            <Title text="Studies" />
          </a>
          <a href="#skill" className={Class}>
            <RiToolsFill />
            <Title text="Technical Skills" />
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/4 lg:w-1/5 md:sticky top-30 pt-1 md:pt-10 lg:border-l border-stone-300 dark:border-stone-700">
        <div className="flex  flex-col gap-3 items-center">
          <img
            src="/me.png"
            className="size-28 md:size-36 lg:size-40 xl:size-48 rounded-full border border-neutral-500 "
            alt="my pic"
          />
          <span className="flex items-center gap-2 ">
            <FaEarthAsia />
            India / Asia
          </span>
          <span className="flex gap-2">
            <div className="py-1 px-2.5 rounded-lg border-[1px] border-neutral-700  text-sm ">
              English
            </div>
            <div className="py-1 px-2.5 rounded-lg border-[1px] border-neutral-700  text-sm ">
              Hindi
            </div>
          </span>
        </div>
      </div>
      <AboutDetail />
    </div>
  );
};

export default page;
