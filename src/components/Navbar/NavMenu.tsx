import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaNetworkWired } from "react-icons/fa";
import { LuNotebookText } from "react-icons/lu";
import { GrGallery } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Class =
  "flex gap-1.5 items-center rounded-full hover:border-neutral-400 hover:bg-neutral-800 px-3 py-1 hover:scale-110 transition duration-500";
const NavMenu = () => {
  return (
    <div className="bg-black rounded-full px-1 py-0.5 flex gap-3 items-center border-[1px] border-neutral-800 text-sm mx-auto">
      <a href="/" className="rounded-full hover:bg-neutral-700 p-2.5">
        <AiFillHome />
      </a>
      <div className="flex px-4 border-r border-l border-neutral-500">
        {" "}
        <a href="/about" className={Class}>
          <FaUserCircle />
          <p className="hidden md:block"> About</p>
        </a>
        <a href="/work" className={Class}>
          <FaNetworkWired />
          <p className="hidden md:block">Work</p>
        </a>
        <a href="/blog" className={Class}>
          <LuNotebookText />
          <p className="hidden md:block"> Blog</p>
        </a>
        <a href="/gallery" className={Class}>
          <GrGallery />
          <p className="hidden md:block">Gallery</p>
        </a>
      </div>
      <div className="rounded-full hover:bg-neutral-700 p-2.5">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default NavMenu;
