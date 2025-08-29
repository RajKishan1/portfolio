import React from "react";
import BlogCard from "./BlogCard";
import EarlierPosts, { EarlierPostCard } from "../blog/EarlierPosts";
import { NamePlate } from "../blog/BlogCard";
interface prop {
  Title: string;
}
const LatestBlogCard = ({ Title }: prop) => {
  return (
    <div className="rounded-xl hover:bg-neutral-800 py-8 px-10 w-1/2 pl-8 my-3 flex flex-col  gap-2 shrink-0">
      <NamePlate width="4/5" />
      <h1 className="text-xl font-semibold w-5/6 my-4">{Title}</h1>
      <p className="text-sm text-neutral-400">My Blog</p>
    </div>
  );
};

const LatestBlog = () => {
  return (
    <div className="relative  w-full p-8 py-13 my-20 flex items-center justify-between">
      <hr className="w-3/4  bg-neutral-700 absolute top-0 left-0" />
      <hr className="w-3/4 bg-neutral-700 absolute bottom-0 right-0" />
      <div className="w-1/3 ">
        <h2 className="w-full text-[32px] leading-[40px] font-semibold ">
          Latest from
          <br /> the Blog
        </h2>
      </div>
      <div className="flex gap-3  w-4/5 ">
        {" "}
        <LatestBlogCard Title="this is a blog this is a blog" />
        <LatestBlogCard Title="this is a blog this is a blog" />
      </div>
    </div>
  );
};

export default LatestBlog;
