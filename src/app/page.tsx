import React from "react";
import ContactSection from "@/components/Home/ContactSection";
import HeroSection from "@/components/Home/HeroSection";
import HomeProjectSection from "@/components/Home/HomeProjectSection";
import LatestBlog from "@/components/Home/LatestBlog";
import { BlurFade } from "@/components/magicui/blur-fade";

const page = () => {
  return (
    <div className=" px-72 flex flex-col gap-6 ">
      
      <BlurFade direction="right" duration={2}>
        <HeroSection />
        <HomeProjectSection />
      </BlurFade>
      <LatestBlog />
      <HomeProjectSection />
      <ContactSection />
    </div>
  );
};

export default page;
