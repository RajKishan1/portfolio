import { Geist } from "next/font/google";
import React from "react";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const HeroSection = () => {
  return (
    <div className="px-3 md:px-0 max-w-4xl mx-auto flex flex-col items-center gap-8 pt-4 md:pt-12 pb-16">
      <a
        href="/work"
        className="py-1.5 px-4 border rounded-full border-[#6FD5E3]/85 bg-blue-300/15"
      >
        <p className="text-xs md:text-sm text-[#6FD5E3]">Featured Work</p>
      </a>
      <h1
        className={`${geistSans.className} text-[35px] md:text-[64px] max-w-3xl font-semibold  text-center leading-[45px] md:leading-[68px] tracking-[1.5px] md:tracking-[-2.5px] `}
      >
        Building bridges between design and code
      </h1>
      <h4
        className={`text-[20px] md:text-2xl leading-[26.3px] md:leading-[32px]  max-w-3xl font-normal text-[#b2b2b2] text-center ${geistSans.className}`}
      >
        I'm Raj Kishan, a Frontend Engineer , I craft intuitive user
        experiences. After hours, I build my own projects.
      </h4>
      <div className="flex items-center bg-white/5 justify-center gap-2.5 border-[1px] border-neutral-800 rounded-full  px-2 py-1.5 hover:bg-white/20  transition">
        <img className="rounded-full size-6" src="/me.png" alt="" />
        <p className="text-xs md:text-sm pr-0.5">About - Raj Kishan</p>
        {/* <p className="hidden hover:flex">qweqwe</p> */}
      </div>
    </div>
  );
};

export default HeroSection;
