import EarlierPosts from "@/components/blog/EarlierPosts";
import BlogCard from "@/components/Home/BlogCard";
import React from "react";

const page = () => {
  return (
    <div className="px-2 md:px-72 h-auto flex flex-col ">
      <div className="">
        <h1 className="text-2xl font-semibold mb-10">
          Writing about design and tech...
        </h1>
        <BlogCard
          BlogTitle=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum quaerat quia cumque ullam, doloribus ex repellendus deserunt. Sapiente, minus qui?"
          flexDirection="flex-row"
        />
        <div className="flex flex-col md:flex-row mb-20 mt-10">
          <BlogCard
            BlogTitle="Selene Yu April 23, 2025 Quick start with Magic Portfolio Selene Yu April 23, 2025 Quick start with Magic Portfolio"
            flexDirection="flex-col"
          />
          <BlogCard BlogTitle="wertwertwertwertwer" flexDirection="flex-col" />
        </div>
      </div>
      <EarlierPosts />
      <img src="/making.webp" className="size-96 mx-auto" alt="" />
    </div>
  );
};

export default page;
