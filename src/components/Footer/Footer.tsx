import React from "react";
import { SiGithub } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full px-2 lg:px-72 py-4 flex flex-col-reverse md:flex-row items-center justify-between mx-auto">
      <div className="text-xs md:text-sm text-neutral-500">
        ©2025 /{" "}
        <span className="text-neutral-700 dark:text-neutral-300 ">
          Raj Kishan Verma
        </span>{" "}
        / Made with ❤️
      </div>
      <div className="flex items-center gap-4 text-lg md:text-2xl mb-3">
        <a href="https://github.com/RajKishan1" target="_blank">
          <SiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/raj-kishan-verma-21a43326a/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://x.com/imrajkishan" target="_blank">
          <FaSquareXTwitter />
        </a>
      </div>
    </div>
  );
};

export default Footer;
