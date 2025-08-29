import React from "react";
interface prop {
  height: string;
  src: string;
}
const ImgDiv = ({ height, src }: prop) => {
  return (
    <div className={`rounded-lg overflow-hidden ${height} w-full`}>
      <img src={src} className={`object-contain`} alt="" />
    </div>
  );
};
const page = () => {
  return (
    <div className="px-60 flex flex-col gap-10">
      <div className="flex gap-2">
        <div className="flex flex-col  gap-2 w-1/2">
          <ImgDiv src="/me.png" height="h-[300px]" />
          <ImgDiv src="/me.png" height="h-[500px]" />
          <ImgDiv src="/me.png" height="h-[300px]" />
          <ImgDiv src="/me.png" height="h-[500px]" />
        </div>
        <div className="w-1/2 flex flex-col  gap-2">
          <ImgDiv src="/me.png" height="h-[500px]" />
          <ImgDiv src="/me.png" height="h-[300px]" />
          <ImgDiv src="/me.png" height="h-[500px]" />
          <ImgDiv src="/me.png" height="h-[300px]" />
        </div>
      </div>
      <div className="">
        <h1 className="text-2xl font-semibold">Books</h1>
        <div></div>
      </div>
    </div>
  );
};

export default page;
