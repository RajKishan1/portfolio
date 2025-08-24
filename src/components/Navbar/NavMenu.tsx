import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaNetworkWired } from "react-icons/fa";
import { LuNotebookText } from "react-icons/lu";
import { GrGallery } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";

const Class =
  "flex gap-1.5 items-center rounded-full hover:border-neutral-600 hover:bg-neutral-800 px-3 py-2 ";
const NavMenu = () => {
  return (
    <div className="bg-black rounded-full px-2  flex gap-3 items-center">
      <div className="rounded-full hover:bg-neutral-700 p-2.5">
        <AiFillHome />
      </div>
      <div className="flex px-4 border-r border-l border-neutral-500">
        {" "}
        <div className={Class}>
          <FaUserCircle />
          About
        </div>
        <div className={Class}>
          <FaNetworkWired />
          Work
        </div>
        <div className={Class}>
          <LuNotebookText />
          Blog
        </div>
        <div className={Class}>
          <GrGallery />
          Gallery
        </div>
      </div>
      <div className="rounded-full hover:bg-neutral-700 p-2.5">
        <IoSunny />
      </div>
    </div>
  );
};

export default NavMenu;
