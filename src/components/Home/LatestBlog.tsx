import React from "react";
import BlogCard from "./BlogCard";
import EarlierPosts, { EarlierPostCard } from "../blog/EarlierPosts";
import { NamePlate } from "../blog/BlogCard";
interface prop {
  Title: string;
}
const LatestBlogCard = ({ Title }: prop) => {
  return (
    <div className="rounded-xl bg-neutral-900 hover:bg-neutral-800 py-5 px-4 md:px-10 w-full md:w-1/2 pl-4 md:pl-8 my-1 flex flex-col  gap-2 shrink-0">
      <NamePlate width="w-4/5" />
      <h1 className="text-xl font-semibold w-5/6 my-4 ">{Title}</h1>
      <p className="text-sm text-neutral-400">My Blog</p>
    </div>
  );
};

const LatestBlog = () => {
  return (
    <div className="relative  w-full p-2 md:p-8 py-10 md:py-13 my-8 md:my-20 flex flex-col md:flex-row items-center justify-center md:justify-between">
      <hr className="w-3/4  bg-neutral-700 absolute top-0 left-0" />
      <hr className="w-3/4 bg-neutral-700 absolute bottom-0 right-0" />
      <div className="w-full md:w-1/3 flex items-center justify-center ">
        <h2 className="w-full text-[32px] leading-[40px] font-semibold text-center md:text-left">
          Latest from
          <br /> the Blog
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-3 w-5/6 md:w-4/5 mt-5 md:mt-0">
        {" "}
        <LatestBlogCard Title="this is a blog this is a blog" />
        <LatestBlogCard Title="this is a blog this is a blog" />
      </div>
    </div>
  );
};

export default LatestBlog;
