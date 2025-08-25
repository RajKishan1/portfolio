import HeroSection from "@/components/Home/HeroSection";
import HomeProjectSection from "@/components/Home/HomeProjectSection";
import LatestBlog from "@/components/Home/LatestBlog";
import React from "react";

const page = () => {
  return (
    <div className="px-72 flex flex-col gap-6">
      <HeroSection />
      <HomeProjectSection />
      <LatestBlog />
      <HomeProjectSection />
    </div>
  );
};

export default page;
