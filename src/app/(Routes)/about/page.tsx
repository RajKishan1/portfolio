import AboutDetail from "@/components/about/AboutDetail";
import React from "react";
import { FaEarthAsia } from "react-icons/fa6";
interface prop {
  text: string;
}
const Title = ({ text }: prop) => {
  return (
    <a className="flex items-center gap-2 text-lg">
      <hr className="size-3" />
      {text}
    </a>
  );
};
const page = () => {
  return (
    <div className="flex min-h-[80vh]">
      <div className="w-1/5 flex items-center pl-3">
        <div className="flex flex-col gap-3">
          <Title text="Introduction" />
          <Title text="Work Experience" />
          <Title text="Studies" />
          <Title text="Technical Skills" />
        </div>
      </div>
      <div className="w-1/5 ">
        <div className="flex  flex-col gap-3 items-center">
          <img
            src="/me.png"
            className="size-32 rounded-full border border-neutral-500 "
            alt="my pic"
          />
          <span className="flex items-center gap-2">
            <FaEarthAsia />
            India / Asia
          </span>
          <span className="flex gap-2">
            <div className="py-1 px-2.5 rounded-lg border-[1px] border-neutral-700 text-neutral-400 text-sm ">
              English
            </div>
            <div className="py-1 px-2.5 rounded-lg border-[1px] border-neutral-700 text-neutral-400 text-sm ">
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
