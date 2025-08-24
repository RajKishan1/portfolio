import HeroSection from "@/components/Home/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="px-10">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default page;
