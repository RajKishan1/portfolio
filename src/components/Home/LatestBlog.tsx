import React from "react";
import BlogCard from "./BlogCard";

const LatestBlog = () => {
  return (
    <div className="relative w-full p-10 py-13 flex items-center justify-between">
      <hr className="w-3/4 text-neutral-200 absolute top-0 left-0" />
      <hr className="w-3/4 text-neutral-400 absolute bottom-0 right-0" />
      <div>
        <h2 className="text-[32px] leading-[40px] font-semibold w-3/4">
          Latest from the Blog
        </h2>
      </div>
      <BlogCard BlogTitle="Quick start with magic portfolio" />
      <BlogCard BlogTitle="Quick start with magic portfolio" />
      <div></div>
    </div>
  );
};

export default LatestBlog;
