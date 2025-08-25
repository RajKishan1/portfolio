import React from "react";
interface prop {
  BlogTitle: string;
}
const BlogCard = ({ BlogTitle }: prop) => {
  return (
    <div className="p-6 rounded-2xl hover:bg-neutral-500 bg-transparent">
      <div className="flex justify-between items-center">
        <img
          src="/me.png"
          className="rounded-full size-4 border border-neutral-600"
          alt=""
        />
        <h1>Raj Kishan</h1>
        <p>date</p>
      </div>
      <div>
        <h1>{BlogTitle}</h1>
      </div>
      <p>MyBlog</p>
    </div>
  );
};

export default BlogCard;
