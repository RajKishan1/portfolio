import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaNetworkWired } from "react-icons/fa";
import { LuNotebookText } from "react-icons/lu";
import { GrGallery } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import ThemeToggle from "./ThemeToggle";

const Class =
  "flex gap-1.5 items-center rounded-full hover:border-neutral-600 hover:bg-neutral-800 px-3 py-2 ";
const NavMenu = () => {
  return (
    <div className="bg-black rounded-full px-2 py-1.5 flex gap-3 items-center border-[1px] border-neutral-800 text-sm">
      <a href="/" className="rounded-full hover:bg-neutral-700 p-2.5">
        <AiFillHome />
      </a>
      <div className="flex px-4 border-r border-l border-neutral-500">
        {" "}
        <a href="/about" className={Class}>
          <FaUserCircle />
          About
        </a>
        <a href="/work" className={Class}>
          <FaNetworkWired />
          Work
        </a>
        <a href="/blog" className={Class}>
          <LuNotebookText />
          Blog
        </a>
        <a href="/gallery" className={Class}>
          <GrGallery />
          Gallery
        </a>
      </div>
      <div className="rounded-full hover:bg-neutral-700 p-2.5">
        {/* <IoSunny /> */}
        <ThemeToggle />
      </div>
    </div>
  );
};

export default NavMenu;
