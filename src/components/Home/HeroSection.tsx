import { Geist } from "next/font/google";
import React from "react";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const HeroSection = () => {
  return (
    <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 pt-12 pb-16">
      <a
        href="/work"
        className="py-1.5 px-4 border rounded-full border-[#6FD5E3]/85 bg-blue-300/15"
      >
        <p className="text-sm text-[#6FD5E3]">Featured Work</p>
      </a>
      <h1
        className={`${geistSans.className} text-[64px] max-w-3xl font-semibold text-black text-center leading-[68px] tracking-[-2.5px] font-strong dark:text-white`}
      >
        Building bridges between design and code
      </h1>
      <h4
        className={`text-2xl leading-[32px]  max-w-3xl font-normal text-[#b2b2b2] text-center ${geistSans.className}`}
      >
        I'm Selene, a design engineer at , where I craft intuitive user
        experiences. After hours, I build my own projects.
      </h4>
      <div className="flex items-center justify-center gap-2.5 border-[1px] border-neutral-800 rounded-full  px-2 py-1.5 hover:bg-neutral-800 transition">
        <img className="rounded-full size-6" src="/me.png" alt="" />
        <p className="text-sm">About - Raj Kishan</p>
        {/* <p className="hidden hover:flex">qweqwe</p> */}
      </div>
    </div>
  );
};

export default HeroSection;
