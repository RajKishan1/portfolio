import React from "react";
interface prop {
  BlogTitle?: string;
  width?: string;
}
export const NamePlate = ({ width }: prop) => {
  const d = new Date();
  const date = d.toLocaleDateString();
  return (
    <div className={`w-${width} flex gap-3 items-center justify-between`}>
      <img src="/me.png" alt="me" className="size-6 rounded-full" />{" "}
      <h1 className="text-sm">Raj Kishan </h1>
      <p className="text-xs">{date}</p>
    </div>
  );
};
const BlogCard = ({ BlogTitle }: prop) => {
  return (
    <div className="w-full">
      <div className="flex-1">
        <img src="" alt="" />
      </div>
      <NamePlate width="3/4" />
      <div className="flex flex-col gap-3 flex-1">
        <h1>{BlogTitle}</h1>
        <p></p>
      </div>
    </div>
  );
};

export default BlogCard;
