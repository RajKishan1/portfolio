import React from "react";
import BlogCard from "./BlogCard";

const LatestBlog = () => {
  return (
    <div className="w-full p-10 flex items-center justify-between">
      <div>
        <h1 className="text-[35px] font-bold ">Latest from the Blog</h1>
      </div>
      <BlogCard BlogTitle="Quick start with magic portfolio" />
      <BlogCard BlogTitle="Quick start with magic portfolio" />
      <div></div>
    </div>
  );
};

export default LatestBlog;
