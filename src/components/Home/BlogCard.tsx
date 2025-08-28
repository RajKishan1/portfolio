import React from "react";
import { NamePlate } from "../blog/BlogCard";
interface prop {
  BlogTitle: string;
}
const BlogCard = ({ BlogTitle }: prop) => {
  return (
    <div className="p-6 rounded-2xl hover:bg-neutral-800 bg-transparent flex flex-col gap-4 mx-2 transition">
      <NamePlate />
      <div>
        <h1 className="text-[21.3px] leading-7 font-semibold max-w-3/4">
          {BlogTitle}
        </h1>
      </div>
      <p className="text-[13px] leading-[16px] text-[#b2b2b2]">MyBlog</p>
    </div>
  );
};

export default BlogCard;
