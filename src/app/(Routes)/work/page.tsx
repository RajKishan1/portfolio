import HomeProjectSection from "@/components/Home/HomeProjectSection";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-center text-2xl font-bold">Projects - Raj Kishan</h1>
      <HomeProjectSection />
      <HomeProjectSection />
    </div>
  );
};

export default page;
