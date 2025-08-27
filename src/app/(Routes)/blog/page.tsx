import EarlierPosts from "@/components/blog/EarlierPosts";
import BlogCard from "@/components/Home/BlogCard";
import React from "react";

const page = () => {
  return (
    <div>
      <div>
        {" "}
        <h1>Writing about design and tech...</h1>
        <BlogCard BlogTitle="" />
        <BlogCard BlogTitle="" />
        <BlogCard BlogTitle="" />
      </div>
      <EarlierPosts />
    </div>
  );
};

export default page;
