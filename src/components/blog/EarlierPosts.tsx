import React from "react";
import { NamePlate } from "./BlogCard";
interface prop {
  Title: string;
}
const EarlierPostCard = ({ Title }: prop) => {
  return (
    <div className="rounded-xl hover:bg-neutral-700 py-3 px-3 w-full">
      <NamePlate />
      <h1>{Title}</h1>
      <p></p>
    </div>
  );
};
const EarlierPosts = () => {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-semibold mt-4 mb-10">Earlier Posts</h1>
      <div className="grid gap-2 grid-cols-2 ">
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
