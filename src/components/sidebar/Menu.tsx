import React from "react";
import { FaHome } from "react-icons/fa";
import { BiSolidCommentDetail } from "react-icons/bi";
import { MdOutlineDisplaySettings } from "react-icons/md";
import { MdOutlineMenuBook } from "react-icons/md";
import { MdContactMail } from "react-icons/md";

interface prop {
  text: string;
}
const Option = ({ text }: prop) => {
  return (
    <div className="text-md text-neutral-500 py-2  hover:shadow-3xl    ">
      {text}
    </div>
  );
};
const Menu = () => {
  return (
    <div className="flex flex-col gap-1  ">
      <a
        href="/"
        className="flex gap-2 items-center px-8 hover:bg-white rounded-xl hover:text-black hover:shadow-2xl shadow-neutral-800"
      >
        <FaHome /> <Option text="Home" />
      </a>
      <a
        href="/about"
        className="flex gap-2 items-center px-8 hover:bg-white rounded-xl hover:text-black hover:shadow-2xl shadow-neutral-800"
      >
        <BiSolidCommentDetail /> <Option text="About" />
      </a>
      <a
        href="/projects"
        className="flex gap-2 items-center px-8 hover:bg-white rounded-xl hover:text-black hover:shadow-2xl shadow-neutral-800"
      >
        <MdOutlineDisplaySettings />
        <Option text="Projects" />
      </a>
      <a
        href="/articles"
        className="flex gap-2 items-center px-8 hover:bg-white rounded-xl hover:text-black hover:shadow-2xl shadow-neutral-800"
      >
        <MdOutlineMenuBook />
        <Option text="Articles" />
      </a>
      <a
        href="/contact"
        className="flex gap-2 items-center px-8 hover:bg-white rounded-xl hover:text-black hover:shadow-2xl shadow-neutral-800"
      >
        <MdContactMail />
        <Option text="Contact" />
      </a>
    </div>
  );
};

export default Menu;
