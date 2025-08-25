import React from "react";
import { SiGithub } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full px-72 py-4 flex items-center justify-between">
      <div className="text-sm text-neutral-500">
        ©2025 / <span className="text-neutral-400">Raj Kishan Verma</span>
      </div>
      <div className="flex items-center gap-4 text-2xl">
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
