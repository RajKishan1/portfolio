import HomeProjectSection from "@/components/Home/HomeProjectSection";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col max-w-4xl mx-auto pt-10">
      <h1 className="text-center text-2xl font-semibold">Projects - Raj Kishan</h1>
      <HomeProjectSection />
      <HomeProjectSection />
    </div>
  );
};

export default page;
