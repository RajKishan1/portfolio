import EarlierPosts from "@/components/blog/EarlierPosts";
import BlogCard from "@/components/Home/BlogCard";
import React from "react";

const page = () => {
  return (
    <div className="px-72 h-auto flex flex-col ">
      <div className="">
        <h1 className="text-2xl font-semibold mb-10">
          Writing about design and tech...
        </h1>
        <BlogCard BlogTitle="wertwertwet" flexDirection="flex-row" />
        <div className="flex mb-20 mt-10">
          <BlogCard BlogTitle="ertwertwertwert" flexDirection="flex-col" />
          <BlogCard BlogTitle="wertwertwertwertwer" flexDirection="flex-col" />
        </div>
      </div>
      <EarlierPosts />
    </div>
  );
};

export default page;
