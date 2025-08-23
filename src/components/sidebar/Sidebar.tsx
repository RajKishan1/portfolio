import React from "react";
import Menu from "./Menu";
import { IoIosArrowForward } from "react-icons/io";
import Socials from "./Socials";

const Sidebar = () => {
  return (
    <div className="min-h-screen px-10 py-8 border p-4 gap-2.5 bg-[#F5F5F5] text-black flex flex-col justify-between items-center">
      <div className="flex flex-col items-center ">
        <div>
          <img src="/me.png" alt="my pic" className="rounded-full size-16" />
        </div>
        <div className="flex flex-col items-center pt-2">
          <h1 className="font-bold">Raj Kishan Verma</h1>
          <h1 className="text-sm">Frontend Developer</h1>
        </div>
      </div>

      <Menu />

      <Socials />
      <div>
        <button className="bg-neutral-900 rounded-full font-semibold text-white px-4 py-3 text-sm flex items-center gap-2">
          Read Resume
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
