import React from "react";
import { NamePlate } from "./BlogCard";
interface prop {
  Title: string;
}
const EarlierPostCard = ({ Title }: prop) => {
  return (
    <div className="rounded-xl hover:bg-neutral-800 py-6 px-3 w-[90%] pl-8 my-3">
      <NamePlate />
      <h1 className="text-xl font-semibold w-5/6 my-5">{Title}</h1>
      <p className="text-sm text-neutral-400">My Blog</p>
    </div>
  );
};
const EarlierPosts = () => {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-semibold mt-4 mb-10">Earlier Posts</h1>
      <div className="grid gap-4 grid-cols-2 ">
        <EarlierPostCard Title="Using custom components in markdown" />
        <EarlierPostCard Title="Using custom components in markdown" />
        <EarlierPostCard Title="Using custom components in markdown" />
        <EarlierPostCard Title="Using custom components in markdown" />
        <EarlierPostCard Title="Using custom components in markdown" />
      </div>
    </div>
  );
};

export default EarlierPosts;
