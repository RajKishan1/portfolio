import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Option } from "./Menu";
const Socials = () => {
  return (
    <div className="flex flex-col ">
      <h5 className="mb-2.5 px-8">Socials</h5>
      <a
        href="https://x.com/imrajkishan"
        target="_blank"
        className="flex gap-2 items-center px-8 hover:bg-white rounded-xl hover:text-black hover:shadow-2xl shadow-neutral-800"
      >
        <FaSquareXTwitter />
        <Option text="Twitter" />
      </a>
      <a
        href="https://www.linkedin.com/in/raj-kishan-verma-21a43326a/"
        target="_blank"
        className="flex gap-2 items-center px-8 hover:bg-white rounded-xl hover:text-black hover:shadow-2xl shadow-neutral-800"
      >
        <FaLinkedin />
        <Option text="LinkedIn" />
      </a>
      <a
        href="https://github.com/RajKishan1"
        target="_blank"
        className="flex gap-2 items-center px-8 hover:bg-white rounded-xl hover:text-black hover:shadow-2xl shadow-neutral-800"
      >
        <FaGithub />
        <Option text="Github" />
      </a>
    </div>
  );
};

export default Socials;
