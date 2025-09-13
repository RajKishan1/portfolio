import { Geist } from "next/font/google";
import React from "react";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const HeroSection = () => {
  return (
    <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 pt-4 md:pt-12 pb-16">
      <a
        href="/work"
        className="py-1.5 px-4 border rounded-full border-[#6fd5e3]        dark:border-[#6FD5E3]/85 bg-blue-300/15"
      >
        <p className="text-xs md:text-sm text-[#367a83] dark:text-[#6FD5E3]">
          Featured Work
        </p>
      </a>
      <h1
        className={`${geistSans.className} w-full text-[35px] md:text-[64px] max-w-3xl font-semibold  text-center leading-[40px] md:leading-[68px] tracking-[1.5px] md:tracking-[-2.5px] `}
      >
        Building bridges between design and code
      </h1>
      <h4
        className={`text-[16px] md:text-2xl leading-[24px] md:leading-[30px]  max-w-3xl font-normal text-stone-800 dark:text-[#b2b2b2]  text-center -mt-6 md:-mt-0 ${geistSans.className}`}
      >
        I'm Raj Kishan, a Frontend Engineer. I craft intuitive user
        experiences. After hours, I build my own projects.
      </h4>
      <a href="/about" className="flex items-center bg-white/5 justify-center gap-2.5 border-[1px] border-neutral-800 rounded-full  px-2 py-1.5 hover:bg-[#6fd5e3]/50 dark:hover:bg-white/20   transition">
        <img className="rounded-full size-6" src="/me.png" alt="" />
        <p className="text-xs md:text-sm pr-0.5">About - Raj Kishan</p>
        {/* <p className="hidden hover:flex">qweqwe</p> */}
      </a>
    </div>
  );
};

export default HeroSection;
