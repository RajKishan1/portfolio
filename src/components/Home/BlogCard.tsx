import React from "react";
import { NamePlate } from "../blog/BlogCard";
interface prop {
  BlogTitle: string;
  flexDirection: string;
}
const BlogCard = ({ BlogTitle, flexDirection }: prop) => {
  return (
    <div
      className={` p-2 rounded-2xl hover:bg-neutral-800 bg-transparent flex flex-col md-${flexDirection}  gap-4 mx-2 transition`}
    >
      <img
        src="/me.png"
        className="rounded-lg h-auto max-w-[450px] object-fill"
        alt=""
      />
      <div className="w-full flex flex-col justify-center gap-5 p-5">
        <NamePlate />
        <div className="w-1/2">
          <h1 className="text-[21.3px] leading-7 font-semibold max-w-3/4">
            {BlogTitle}
          </h1>
        </div>
        <p className="text-[13px] leading-[16px] text-[#b2b2b2]">MyBlog</p>
      </div>
    </div>
  );
};

export default BlogCard;
